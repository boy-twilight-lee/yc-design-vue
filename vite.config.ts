import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    visualizer({
      open: true, // 在构建完成后自动打开分析报告
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    }),
    // 添加 dts 插件用于生成类型声明文件
    dts({
      // 入口文件的根目录
      entryRoot: path.resolve(__dirname, 'src/components'),
      // 输出目录，应与 rollup aoptions.output.dir 对应
      outDir: ['es', 'lib'],
      // 从 .d.ts 文件中排除不需要的类型
      exclude: ['node_modules/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src/components/_shared'),
    },
  },
  server: {
    // server 部分仅用于开发环境，与库打包无关
    port: 4090,
    open: true,
  },
  build: {
    // 构建前清空输出目录
    emptyOutDir: true,
    lib: {
      // 打包入口文件
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      // UMD 模式下挂载到 window 上的变量名
      name: 'YcUI',
      // 输出文件的名称
      fileName: 'index',
      // 打包成多种格式
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          // ES Module 格式
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          // 让打包目录和我们源文件目录对应
          preserveModules: true,
          preserveModulesRoot: 'src/components',
          globals: {
            vue: 'Vue',
          },
        },
        {
          // CommonJS 格式
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          // 让打包目录和我们源文件目录对应
          preserveModules: true,
          preserveModulesRoot: 'src/components',
          globals: {
            vue: 'Vue',
          },
        },
        {
          // UMD 格式
          format: 'umd',
          dir: 'dist',
          entryFileNames: 'index.umd.js',
          name: 'YcUI', // UMD 包名
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
    // 压缩混淆配置
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
          // 自动添加前缀
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
