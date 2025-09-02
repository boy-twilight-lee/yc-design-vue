import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import dts from 'vite-plugin-dts';
import glob from 'fast-glob';
import less from 'less';
import { promises as fs } from 'fs';

// 检查文件是否存在的辅助函数
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// 自定义插件来处理和打包每个组件的样式文件
const stylePlugin = (): Plugin => {
  return {
    name: 'handle-component-styles',
    apply: 'build',
    async closeBundle() {
      const componentsRoot = path.resolve(__dirname, 'src/components');
      // 用于收集所有CSS内容的数组
      const allCssContents: string[] = [];

      // --- 阶段1: 处理 _shared/styles 下的公共样式 ---
      const sharedStylesRoot = path.resolve(
        componentsRoot,
        '_shared',
        'styles'
      );
      const sharedStyleFiles = await glob(`${sharedStylesRoot}/**/*.less`);

      console.log('[Style] Processing shared styles...');
      for (const file of sharedStyleFiles) {
        try {
          const content = await fs.readFile(file, 'utf-8');
          const result = await less.render(content, {
            paths: [
              path.resolve(__dirname, 'node_modules'),
              sharedStylesRoot, // 为公共样式文件提供查找路径
            ],
            javascriptEnabled: true,
            compress: true,
          });
          allCssContents.push(result.css);
          console.log(`  - Processed: ${path.relative(__dirname, file)}`);
        } catch (error) {
          console.error(
            `[Style] Error processing shared style ${file}:`,
            error
          );
        }
      }

      // --- 阶段2: 处理每个独立组件的样式 ---
      const componentDirs = await glob(`${componentsRoot}/*`, {
        onlyDirectories: true,
        ignore: [`${componentsRoot}/_shared`],
      });

      for (const dir of componentDirs) {
        const styleFilePath = path.resolve(dir, 'style', 'index.less');

        if (await fileExists(styleFilePath)) {
          console.log(
            `[Style] Processing component style: ${path.relative(__dirname, styleFilePath)}`
          );
          try {
            const content = await fs.readFile(styleFilePath, 'utf-8');
            const result = await less.render(content, {
              paths: [
                path.resolve(__dirname, 'node_modules'),
                path.dirname(styleFilePath),
              ],
              javascriptEnabled: true,
              compress: true,
            });

            // a. 将组件CSS推入数组，用于后续合并
            allCssContents.push(result.css);

            // b. 写入单个组件的样式文件，用于按需加载
            const relativePath = path.relative(componentsRoot, styleFilePath);
            const cssPath = relativePath.replace(/\.less$/, '.css');
            for (const outputDir of ['es', 'lib']) {
              const outCssPath = path.resolve(__dirname, outputDir, cssPath);
              await fs.mkdir(path.dirname(outCssPath), { recursive: true });
              await fs.writeFile(outCssPath, result.css);

              const jsContent = `import './index.css';\n`;
              const jsPath = path.resolve(path.dirname(outCssPath), 'index.js');
              await fs.writeFile(jsPath, jsContent);
            }
          } catch (error) {
            console.error(
              `[Style] Error processing component style ${styleFilePath}:`,
              error
            );
          }
        }
      }

      // --- 阶段3: 合并所有CSS并写入根目录的style.css ---
      if (allCssContents.length > 0) {
        const bundledCss = allCssContents.join('\n');
        for (const outputDir of ['es', 'lib']) {
          const outputPath = path.resolve(__dirname, outputDir, 'style.css');
          try {
            await fs.writeFile(outputPath, bundledCss);
            console.log(
              `[Style] Bundled CSS created successfully at: ${path.relative(__dirname, outputPath)}`
            );
          } catch (error) {
            console.error(
              `[Style] Error writing bundled CSS to ${outputPath}:`,
              error
            );
          }
        }
      }
    },
  };
};

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: path.resolve(__dirname, 'src/components'),
      outDir: ['es', 'lib'],
      exclude: ['node_modules/**'],
    }),
    stylePlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src/components/_shared'),
    },
  },
  server: {
    port: 4090,
    open: true,
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'YcDesignVue',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', /\.less$/],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src/components',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src/components',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            'last 2 versions',
          ],
          grid: true,
        }),
      ],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
