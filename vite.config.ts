import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import dts from 'vite-plugin-dts';
import StyleGeneratePlugin from './src/plugins/StyleGeneratePlugin';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: path.resolve(__dirname, 'src/components'),
      outDir: ['es', 'lib'],
      exclude: ['node_modules/**'],
    }),
    StyleGeneratePlugin(),
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
});
