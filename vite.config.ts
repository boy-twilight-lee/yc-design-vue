import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import dts from 'vite-plugin-dts';
import StyleGeneratePlugin from './src/plugins/StyleGeneratePlugin';

export default defineConfig(({ mode }) => {
  // 是否是开发环境
  const isDev = mode == 'development';
  return {
    publicDir: resolve(__dirname, 'src/lang'),
    root: isDev ? './src/dev' : undefined,
    plugins: [
      vue(),
      dts({
        entryRoot: resolve(__dirname, 'src/components'),
        outDir: ['es', 'lib'],
        exclude: ['node_modules/**'],
      }),
      StyleGeneratePlugin(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@shared': resolve(__dirname, 'src/components/_shared'),
      },
    },
    server: {
      port: 4090,
      open: true,
    },
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/components/index.ts'),
        name: 'YcDesignVue',
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue'],
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
  };
});
