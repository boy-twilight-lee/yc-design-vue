// vite.config.ts
import { defineConfig } from "file:///D:/desktop/yc-ui/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/desktop/yc-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import autoprefixer from "file:///D:/desktop/yc-ui/node_modules/autoprefixer/lib/autoprefixer.js";
import VueJsx from "file:///D:/desktop/yc-ui/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/desktop/yc-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\desktop\\yc-ui";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    dts({
      entryRoot: path.resolve(__vite_injected_original_dirname, "src/components"),
      outDir: ["es", "lib"],
      exclude: ["node_modules/**"]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@shared": path.resolve(__vite_injected_original_dirname, "src/components/_shared")
    }
  },
  server: {
    port: 4090,
    open: true
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/components/index.ts"),
      name: "YcUI",
      fileName: "index"
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          dir: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src/components",
          globals: {
            vue: "Vue"
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith(".css")) {
              const pathParts = assetInfo.name.split("/");
              if (pathParts[1] === "style") {
                return `${pathParts[0]}/style.css`;
              }
            }
            return assetInfo.name;
          }
        },
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src/components",
          globals: {
            vue: "Vue"
          }
        }
        // {
        //   format: 'umd',
        //   dir: 'dist',
        //   entryFileNames: 'index.umd.js',
        //   name: 'YcUI',
        //   exports: 'named',
        //   globals: {
        //     vue: 'Vue',
        //   },
        // },
      ]
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            "last 2 versions"
          ],
          grid: true
        })
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9kZXNrdG9wL3ljLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcbmltcG9ydCBWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBWdWVKc3goKSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgIG91dERpcjogWydlcycsICdsaWInXSxcbiAgICAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzLyoqJ10sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICAnQHNoYXJlZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9fc2hhcmVkJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNDA5MCxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ1ljVUknLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICAgIGRpcjogJ2VzJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMvY29tcG9uZW50cycsXG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUuZW5kc1dpdGgoJy5jc3MnKSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXRoUGFydHMgPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICBpZiAocGF0aFBhcnRzWzFdID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3BhdGhQYXJ0c1swXX0vc3R5bGUuY3NzYDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICdjanMnLFxuICAgICAgICAgIGRpcjogJ2xpYicsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjL2NvbXBvbmVudHMnLFxuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGZvcm1hdDogJ3VtZCcsXG4gICAgICAgIC8vICAgZGlyOiAnZGlzdCcsXG4gICAgICAgIC8vICAgZW50cnlGaWxlTmFtZXM6ICdpbmRleC51bWQuanMnLFxuICAgICAgICAvLyAgIG5hbWU6ICdZY1VJJyxcbiAgICAgICAgLy8gICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAvLyAgIGdsb2JhbHM6IHtcbiAgICAgICAgLy8gICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBhdXRvcHJlZml4ZXIoe1xuICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbXG4gICAgICAgICAgICAnQW5kcm9pZCA0LjEnLFxuICAgICAgICAgICAgJ2lPUyA3LjEnLFxuICAgICAgICAgICAgJ0Nocm9tZSA+IDMxJyxcbiAgICAgICAgICAgICdmZiA+IDMxJyxcbiAgICAgICAgICAgICdpZSA+PSA4JyxcbiAgICAgICAgICAgICdsYXN0IDIgdmVyc2lvbnMnLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3TyxTQUFTLG9CQUFvQjtBQUNyUSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsV0FBVyxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDbkQsUUFBUSxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3BCLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxJQUM3QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ2xDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLElBQzdEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLHlCQUF5QjtBQUFBLE1BQ3hELE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxVQUNoQixpQkFBaUI7QUFBQSxVQUNqQixxQkFBcUI7QUFBQSxVQUNyQixTQUFTO0FBQUEsWUFDUCxLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBSSxVQUFVLEtBQUssU0FBUyxNQUFNLEdBQUc7QUFDbkMsb0JBQU0sWUFBWSxVQUFVLEtBQUssTUFBTSxHQUFHO0FBQzFDLGtCQUFJLFVBQVUsQ0FBQyxNQUFNLFNBQVM7QUFDNUIsdUJBQU8sR0FBRyxVQUFVLENBQUMsQ0FBQztBQUFBLGNBQ3hCO0FBQUEsWUFDRjtBQUNBLG1CQUFPLFVBQVU7QUFBQSxVQUNuQjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxVQUNoQixpQkFBaUI7QUFBQSxVQUNqQixxQkFBcUI7QUFBQSxVQUNyQixTQUFTO0FBQUEsWUFDUCxLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsYUFBYTtBQUFBLFVBQ1gsc0JBQXNCO0FBQUEsWUFDcEI7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQU07QUFBQSxRQUNSLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLElBQ0EscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
