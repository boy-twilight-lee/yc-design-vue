// vite.config.ts
import { defineConfig } from "file:///D:/desktop/yc-design-vue/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/desktop/yc-design-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path2 from "path";
import autoprefixer from "file:///D:/desktop/yc-design-vue/node_modules/autoprefixer/lib/autoprefixer.js";
import dts from "file:///D:/desktop/yc-design-vue/node_modules/vite-plugin-dts/dist/index.mjs";

// src/plugins/StyleGeneratePlugin.ts
import path from "path";
import fs from "fs";
import { globSync } from "file:///D:/desktop/yc-design-vue/node_modules/glob/dist/esm/index.js";
import less from "file:///D:/desktop/yc-design-vue/node_modules/less/index.js";
var StyleGeneratePlugin_default = () => {
  let config;
  return {
    name: "yc-design-vue-styles",
    apply: "build",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async writeBundle(options) {
      if (!options.dir) {
        this.error("Output directory 'dir' is not defined in Rollup options.");
        return;
      }
      const projectRoot = config.root;
      const sharedStylesPath = path.resolve(
        projectRoot,
        "src/components/_shared/styles"
      );
      const componentsPath = path.resolve(projectRoot, "src/components");
      const lessOptions = {
        compress: true
      };
      if (fs.existsSync(sharedStylesPath)) {
        const sharedFiles = globSync(
          path.join(sharedStylesPath, "**/*.{less,css}").replace(/\\/g, "/")
        );
        let combinedSharedStyles = "";
        for (const file of sharedFiles) {
          combinedSharedStyles += fs.readFileSync(file, "utf-8") + "\n";
        }
        if (combinedSharedStyles) {
          try {
            const output = await less.render(combinedSharedStyles, {
              ...lessOptions,
              paths: [sharedStylesPath]
            });
            if (output.css) {
              fs.writeFileSync(
                path.join(options.dir, "shared.css"),
                output.css
              );
            }
          } catch (error) {
            this.error(`Error compiling shared styles: ${error.message}`);
          }
        }
      }
      if (!fs.existsSync(componentsPath)) {
        this.error("Components directory not found at: " + componentsPath);
        return;
      }
      const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
        const fullPath = path.join(componentsPath, file);
        return fs.statSync(fullPath).isDirectory() && file !== "_shared";
      });
      for (const componentName of componentDirs) {
        const stylesPath = path.join(componentsPath, componentName, "style");
        if (fs.existsSync(stylesPath)) {
          const styleFiles = globSync(
            path.join(stylesPath, "**/*.{less,css}").replace(/\\/g, "/")
          );
          if (styleFiles.length > 0) {
            let combinedComponentStyles = "";
            for (const file of styleFiles) {
              combinedComponentStyles += fs.readFileSync(file, "utf-8") + "\n";
            }
            const virtualEntryFilePath = path.join(
              stylesPath,
              "virtual-entry.less"
            );
            let finalStylesToCompile = combinedComponentStyles;
            if (!/(@import|@import \(reference\)).*var\.less/.test(
              finalStylesToCompile
            )) {
              finalStylesToCompile = `@import (reference) "var.less";
${finalStylesToCompile}`;
            }
            try {
              const output = await less.render(finalStylesToCompile, {
                ...lessOptions,
                paths: [stylesPath, sharedStylesPath],
                filename: virtualEntryFilePath
              });
              const outputCssPath = path.join(
                options.dir,
                componentName,
                "index.css"
              );
              fs.mkdirSync(path.dirname(outputCssPath), { recursive: true });
              fs.writeFileSync(outputCssPath, output.css);
            } catch (error) {
              const errorMessage = `Error compiling LESS for component '${componentName}': ${error.message}.`;
              if (error.filename && error.line) {
                this.error(
                  `${errorMessage}
File: ${error.filename}
Line: ${error.line}`
                );
              } else {
                this.error(errorMessage);
              }
            }
          }
        } else {
          const outputCssPath = path.join(
            options.dir,
            componentName,
            "index.css"
          );
          fs.mkdirSync(path.dirname(outputCssPath), { recursive: true });
          fs.writeFileSync(outputCssPath, "");
        }
      }
    }
  };
};

// vite.config.ts
var __vite_injected_original_dirname = "D:\\desktop\\yc-design-vue";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: path2.resolve(__vite_injected_original_dirname, "src/components"),
      outDir: ["es", "lib"],
      exclude: ["node_modules/**"]
    }),
    StyleGeneratePlugin_default()
  ],
  resolve: {
    alias: {
      "@": path2.resolve(__vite_injected_original_dirname, "src"),
      "@shared": path2.resolve(__vite_injected_original_dirname, "src/components/_shared")
    }
  },
  server: {
    port: 4090,
    open: true
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: path2.resolve(__vite_injected_original_dirname, "src/components/index.ts"),
      name: "YcDesignVue",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3BsdWdpbnMvU3R5bGVHZW5lcmF0ZVBsdWdpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZGVza3RvcFxcXFx5Yy1kZXNpZ24tdnVlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9kZXNrdG9wL3ljLWRlc2lnbi12dWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IFN0eWxlR2VuZXJhdGVQbHVnaW4gZnJvbSAnLi9zcmMvcGx1Z2lucy9TdHlsZUdlbmVyYXRlUGx1Z2luJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBlbnRyeVJvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cycpLFxuICAgICAgb3V0RGlyOiBbJ2VzJywgJ2xpYiddLFxuICAgICAgZXhjbHVkZTogWydub2RlX21vZHVsZXMvKionXSxcbiAgICB9KSxcbiAgICBTdHlsZUdlbmVyYXRlUGx1Z2luKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICAnQHNoYXJlZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9fc2hhcmVkJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNDA5MCxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ1ljRGVzaWduVnVlJyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2VzJyxcbiAgICAgICAgICBkaXI6ICdlcycsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjL2NvbXBvbmVudHMnLFxuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgZGlyOiAnbGliJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMvY29tcG9uZW50cycsXG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIGF1dG9wcmVmaXhlcih7XG4gICAgICAgICAgb3ZlcnJpZGVCcm93c2Vyc2xpc3Q6IFtcbiAgICAgICAgICAgICdBbmRyb2lkIDQuMScsXG4gICAgICAgICAgICAnaU9TIDcuMScsXG4gICAgICAgICAgICAnQ2hyb21lID4gMzEnLFxuICAgICAgICAgICAgJ2ZmID4gMzEnLFxuICAgICAgICAgICAgJ2llID49IDgnLFxuICAgICAgICAgICAgJ2xhc3QgMiB2ZXJzaW9ucycsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVxcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZGVza3RvcFxcXFx5Yy1kZXNpZ24tdnVlXFxcXHNyY1xcXFxwbHVnaW5zXFxcXFN0eWxlR2VuZXJhdGVQbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Rlc2t0b3AveWMtZGVzaWduLXZ1ZS9zcmMvcGx1Z2lucy9TdHlsZUdlbmVyYXRlUGx1Z2luLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IGdsb2JTeW5jIH0gZnJvbSAnZ2xvYic7XHJcbmltcG9ydCBsZXNzIGZyb20gJ2xlc3MnO1xyXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiwgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpOiBQbHVnaW4gPT4ge1xyXG4gIGxldCBjb25maWc6IFJlc29sdmVkQ29uZmlnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ljLWRlc2lnbi12dWUtc3R5bGVzJyxcclxuICAgIGFwcGx5OiAnYnVpbGQnLFxyXG5cclxuICAgIGNvbmZpZ1Jlc29sdmVkKHJlc29sdmVkQ29uZmlnKSB7XHJcbiAgICAgIGNvbmZpZyA9IHJlc29sdmVkQ29uZmlnO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHdyaXRlQnVuZGxlKG9wdGlvbnMpIHtcclxuICAgICAgaWYgKCFvcHRpb25zLmRpcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJPdXRwdXQgZGlyZWN0b3J5ICdkaXInIGlzIG5vdCBkZWZpbmVkIGluIFJvbGx1cCBvcHRpb25zLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdDtcclxuICAgICAgY29uc3Qgc2hhcmVkU3R5bGVzUGF0aCA9IHBhdGgucmVzb2x2ZShcclxuICAgICAgICBwcm9qZWN0Um9vdCxcclxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvX3NoYXJlZC9zdHlsZXMnXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL2NvbXBvbmVudHMnKTtcclxuICAgICAgY29uc3QgbGVzc09wdGlvbnM6IExlc3MuT3B0aW9ucyA9IHtcclxuICAgICAgICBjb21wcmVzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgLy8gXHU3NTFGXHU2MjEwc2hhcmVkLmNzc1xyXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhzaGFyZWRTdHlsZXNQYXRoKSkge1xyXG4gICAgICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gZ2xvYlN5bmMoXHJcbiAgICAgICAgICBwYXRoLmpvaW4oc2hhcmVkU3R5bGVzUGF0aCwgJyoqLyoue2xlc3MsY3NzfScpLnJlcGxhY2UoL1xcXFwvZywgJy8nKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkU2hhcmVkU3R5bGVzID0gJyc7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHNoYXJlZEZpbGVzKSB7XHJcbiAgICAgICAgICBjb21iaW5lZFNoYXJlZFN0eWxlcyArPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0Zi04JykgKyAnXFxuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbWJpbmVkU2hhcmVkU3R5bGVzKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCBsZXNzLnJlbmRlcihjb21iaW5lZFNoYXJlZFN0eWxlcywge1xyXG4gICAgICAgICAgICAgIC4uLmxlc3NPcHRpb25zLFxyXG4gICAgICAgICAgICAgIHBhdGhzOiBbc2hhcmVkU3R5bGVzUGF0aF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAob3V0cHV0LmNzcykge1xyXG4gICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoXHJcbiAgICAgICAgICAgICAgICBwYXRoLmpvaW4ob3B0aW9ucy5kaXIsICdzaGFyZWQuY3NzJyksXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuY3NzXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBFcnJvciBjb21waWxpbmcgc2hhcmVkIHN0eWxlczogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBcdTRFM0FcdTZCQ0ZcdTRFMkFcdTdFQzRcdTRFRjZcdTdGMTZcdThCRDEgaW5kZXguY3NzIChcdTYyMTZcdTc1MUZcdTYyMTBcdTdBN0FcdTc2ODQgaW5kZXguY3NzKVxyXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29tcG9uZW50c1BhdGgpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignQ29tcG9uZW50cyBkaXJlY3Rvcnkgbm90IGZvdW5kIGF0OiAnICsgY29tcG9uZW50c1BhdGgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjb21wb25lbnREaXJzID0gZnMucmVhZGRpclN5bmMoY29tcG9uZW50c1BhdGgpLmZpbHRlcigoZmlsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKGNvbXBvbmVudHNQYXRoLCBmaWxlKTtcclxuICAgICAgICByZXR1cm4gZnMuc3RhdFN5bmMoZnVsbFBhdGgpLmlzRGlyZWN0b3J5KCkgJiYgZmlsZSAhPT0gJ19zaGFyZWQnO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChjb25zdCBjb21wb25lbnROYW1lIG9mIGNvbXBvbmVudERpcnMpIHtcclxuICAgICAgICBjb25zdCBzdHlsZXNQYXRoID0gcGF0aC5qb2luKGNvbXBvbmVudHNQYXRoLCBjb21wb25lbnROYW1lLCAnc3R5bGUnKTtcclxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzdHlsZXNQYXRoKSkge1xyXG4gICAgICAgICAgY29uc3Qgc3R5bGVGaWxlcyA9IGdsb2JTeW5jKFxyXG4gICAgICAgICAgICBwYXRoLmpvaW4oc3R5bGVzUGF0aCwgJyoqLyoue2xlc3MsY3NzfScpLnJlcGxhY2UoL1xcXFwvZywgJy8nKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChzdHlsZUZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNvbWJpbmVkQ29tcG9uZW50U3R5bGVzID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBzdHlsZUZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgY29tYmluZWRDb21wb25lbnRTdHlsZXMgKz0gZnMucmVhZEZpbGVTeW5jKGZpbGUsICd1dGYtOCcpICsgJ1xcbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmlydHVhbEVudHJ5RmlsZVBhdGggPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgICAgICAgc3R5bGVzUGF0aCxcclxuICAgICAgICAgICAgICAndmlydHVhbC1lbnRyeS5sZXNzJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgZmluYWxTdHlsZXNUb0NvbXBpbGUgPSBjb21iaW5lZENvbXBvbmVudFN0eWxlcztcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICEvKEBpbXBvcnR8QGltcG9ydCBcXChyZWZlcmVuY2VcXCkpLip2YXJcXC5sZXNzLy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgZmluYWxTdHlsZXNUb0NvbXBpbGVcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGZpbmFsU3R5bGVzVG9Db21waWxlID0gYEBpbXBvcnQgKHJlZmVyZW5jZSkgXCJ2YXIubGVzc1wiO1xcbiR7ZmluYWxTdHlsZXNUb0NvbXBpbGV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IGxlc3MucmVuZGVyKGZpbmFsU3R5bGVzVG9Db21waWxlLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5sZXNzT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHBhdGhzOiBbc3R5bGVzUGF0aCwgc2hhcmVkU3R5bGVzUGF0aF0sXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogdmlydHVhbEVudHJ5RmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0Q3NzUGF0aCA9IHBhdGguam9pbihcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGlyLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSxcclxuICAgICAgICAgICAgICAgICdpbmRleC5jc3MnXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBmcy5ta2RpclN5bmMocGF0aC5kaXJuYW1lKG91dHB1dENzc1BhdGgpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKG91dHB1dENzc1BhdGgsIG91dHB1dC5jc3MpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYEVycm9yIGNvbXBpbGluZyBMRVNTIGZvciBjb21wb25lbnQgJyR7Y29tcG9uZW50TmFtZX0nOiAke2Vycm9yLm1lc3NhZ2V9LmA7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmZpbGVuYW1lICYmIGVycm9yLmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgIGAke2Vycm9yTWVzc2FnZX1cXG5GaWxlOiAke2Vycm9yLmZpbGVuYW1lfVxcbkxpbmU6ICR7ZXJyb3IubGluZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG91dHB1dENzc1BhdGggPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGlyLFxyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lLFxyXG4gICAgICAgICAgICAnaW5kZXguY3NzJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGZzLm1rZGlyU3luYyhwYXRoLmRpcm5hbWUob3V0cHV0Q3NzUGF0aCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRDc3NQYXRoLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1EsU0FBUyxvQkFBb0I7QUFDN1IsT0FBTyxTQUFTO0FBQ2hCLE9BQU9BLFdBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxTQUFTOzs7QUNKd1MsT0FBTyxVQUFVO0FBQ3pVLE9BQU8sUUFBUTtBQUNmLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sVUFBVTtBQUdqQixJQUFPLDhCQUFRLE1BQWM7QUFDM0IsTUFBSTtBQUVKLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUVQLGVBQWUsZ0JBQWdCO0FBQzdCLGVBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxNQUFNLFlBQVksU0FBUztBQUN6QixVQUFJLENBQUMsUUFBUSxLQUFLO0FBQ2hCLGFBQUssTUFBTSwwREFBMEQ7QUFDckU7QUFBQSxNQUNGO0FBQ0EsWUFBTSxjQUFjLE9BQU87QUFDM0IsWUFBTSxtQkFBbUIsS0FBSztBQUFBLFFBQzVCO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFDQSxZQUFNLGlCQUFpQixLQUFLLFFBQVEsYUFBYSxnQkFBZ0I7QUFDakUsWUFBTSxjQUE0QjtB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
