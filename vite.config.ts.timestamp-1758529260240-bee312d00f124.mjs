// vite.config.ts
import { defineConfig } from "file:///D:/desktop/yc-design-vue/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/desktop/yc-design-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
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
      if (options.format === "umd") {
        this.info("Skipping on-demand style generation for UMD bundle.");
        return;
      }
      if (!options.dir) {
        this.error("Output directory 'dir' is not defined in Rollup options.");
        return;
      }
      const projectRoot = config.root;
      const componentsPath = path.resolve(projectRoot, "src/components");
      const sharedBasePath = path.resolve(componentsPath, "_shared");
      const sharedStylesPath = path.resolve(sharedBasePath, "styles");
      const lessOptions = {
        compress: true
      };
      const sharedStyleSourcePaths = [
        path.join(sharedStylesPath, "**/*.{less,css}"),
        path.join(sharedBasePath, "components/*/style/**/*.{less,css}"),
        path.join(componentsPath, "Drawer/style/**/*.{less,css}"),
        path.join(componentsPath, "Modal/style/**/*.{less,css}"),
        path.join(componentsPath, "Message/style/**/*.{less,css}"),
        path.join(componentsPath, "Notification/style/**/*.{less,css}")
      ].map((p) => p.replace(/\\/g, "/"));
      const sharedFiles = globSync(sharedStyleSourcePaths);
      if (sharedFiles.length > 0) {
        let combinedSharedStyles = "";
        for (const file of sharedFiles) {
          combinedSharedStyles += fs.readFileSync(file, "utf-8") + "\n";
        }
        if (combinedSharedStyles) {
          try {
            const lessPaths = [
              sharedStylesPath,
              componentsPath,
              path.resolve(sharedBasePath, "components")
            ];
            const output = await less.render(combinedSharedStyles, {
              ...lessOptions,
              paths: Array.from(new Set(lessPaths))
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
      const excludedComponents = /* @__PURE__ */ new Set([
        "_shared",
        "Drawer",
        "Modal",
        "Message",
        "Notification"
      ]);
      const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
        const fullPath = path.join(componentsPath, file);
        return fs.statSync(fullPath).isDirectory() && !excludedComponents.has(file);
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
              finalStylesToCompile = `@import (reference) "variable.less";
${finalStylesToCompile}`;
            }
            try {
              const output = await less.render(finalStylesToCompile, {
                ...lessOptions,
                paths: [stylesPath, sharedStylesPath],
                // 为@import提供查找路径
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

// src/plugins/FixDeclarationsPlugin.ts
function FixInvalidDeclarationsPlugin() {
  return {
    name: "fix-invalid-declarations-in-umd",
    apply: "build",
    renderChunk(code, chunk, options) {
      if (options.format !== "umd") {
        return null;
      }
      const invalidDeclarationRegex = /(?:function|const|let|var)\s+([\w$]+\.[\w$.]+)/g;
      const invalidSet = /* @__PURE__ */ new Set();
      const matchs = Array.from(code.matchAll(invalidDeclarationRegex));
      for (const match of matchs) {
        invalidSet.add(match[1]);
      }
      if (invalidSet.size === 0) {
        return null;
      }
      console.log(
        `
[fix-invalid-declarations] Found and fixing ${invalidSet.size} types of invalid declarations in UMD chunk: ${chunk.fileName}.`
      );
      let modifiedCode = code;
      const invalidNames = Array.from(invalidSet);
      for (const invalidName of invalidNames) {
        const validName = invalidName.replace(/\./g, "_");
        console.log(
          `   - Replacing all occurrences of "${invalidName}" with "${validName}"`
        );
        const searchRegex = new RegExp(
          invalidName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "g"
        );
        modifiedCode = modifiedCode.replace(searchRegex, validName);
      }
      return {
        code: modifiedCode,
        map: null
      };
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "D:\\desktop\\yc-design-vue";
var vite_config_default = defineConfig(({ mode }) => {
  const isDev = mode == "development";
  return {
    publicDir: resolve(__vite_injected_original_dirname, "src/lang"),
    root: isDev ? "./src/dev" : void 0,
    plugins: [
      vue(),
      dts({
        entryRoot: resolve(__vite_injected_original_dirname, "src/components"),
        outDir: ["es", "lib"],
        exclude: ["node_modules/**"]
      }),
      StyleGeneratePlugin_default(),
      FixInvalidDeclarationsPlugin()
    ],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src"),
        "@shared": resolve(__vite_injected_original_dirname, "src/components/_shared")
      }
    },
    server: {
      port: 4090,
      open: true
    },
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve(__vite_injected_original_dirname, "src/components/index.ts"),
        name: "YcDesignVue"
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
            exports: "named"
          },
          {
            format: "cjs",
            dir: "lib",
            entryFileNames: "[name].js",
            preserveModules: true,
            preserveModulesRoot: "src/components",
            exports: "named"
          },
          {
            format: "umd",
            dir: "dist",
            entryFileNames: "[name].umd.js",
            name: "YcDesignVue",
            exports: "named",
            globals: {
              vue: "Vue"
            },
            interop: "auto",
            generatedCode: {
              constBindings: true
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
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3BsdWdpbnMvU3R5bGVHZW5lcmF0ZVBsdWdpbi50cyIsICJzcmMvcGx1Z2lucy9GaXhEZWNsYXJhdGlvbnNQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLWRlc2lnbi12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGVza3RvcC95Yy1kZXNpZ24tdnVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgU3R5bGVHZW5lcmF0ZVBsdWdpbiBmcm9tICcuL3NyYy9wbHVnaW5zL1N0eWxlR2VuZXJhdGVQbHVnaW4nO1xuaW1wb3J0IEZpeERlY2xhcmF0aW9uc1BsdWdpbiBmcm9tICcuL3NyYy9wbHVnaW5zL0ZpeERlY2xhcmF0aW9uc1BsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgLy8gXHU2NjJGXHU1NDI2XHU2NjJGXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXG4gIGNvbnN0IGlzRGV2ID0gbW9kZSA9PSAnZGV2ZWxvcG1lbnQnO1xuICByZXR1cm4ge1xuICAgIHB1YmxpY0RpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbGFuZycpLFxuICAgIHJvb3Q6IGlzRGV2ID8gJy4vc3JjL2RldicgOiB1bmRlZmluZWQsXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBkdHMoe1xuICAgICAgICBlbnRyeVJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICAgb3V0RGlyOiBbJ2VzJywgJ2xpYiddLFxuICAgICAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcy8qKiddLFxuICAgICAgfSksXG4gICAgICBTdHlsZUdlbmVyYXRlUGx1Z2luKCksXG4gICAgICBGaXhEZWNsYXJhdGlvbnNQbHVnaW4oKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgICAgJ0BzaGFyZWQnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL19zaGFyZWQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDQwOTAsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL2luZGV4LnRzJyksXG4gICAgICAgIG5hbWU6ICdZY0Rlc2lnblZ1ZScsXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgICAgb3V0cHV0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICAgICAgZGlyOiAnZXMnLFxuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogJ3NyYy9jb21wb25lbnRzJyxcbiAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXQ6ICdjanMnLFxuICAgICAgICAgICAgZGlyOiAnbGliJyxcbiAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMvY29tcG9uZW50cycsXG4gICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0OiAndW1kJyxcbiAgICAgICAgICAgIGRpcjogJ2Rpc3QnLFxuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0udW1kLmpzJyxcbiAgICAgICAgICAgIG5hbWU6ICdZY0Rlc2lnblZ1ZScsXG4gICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludGVyb3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGdlbmVyYXRlZENvZGU6IHtcbiAgICAgICAgICAgICAgY29uc3RCaW5kaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKHtcbiAgICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbXG4gICAgICAgICAgICAgICdBbmRyb2lkIDQuMScsXG4gICAgICAgICAgICAgICdpT1MgNy4xJyxcbiAgICAgICAgICAgICAgJ0Nocm9tZSA+IDMxJyxcbiAgICAgICAgICAgICAgJ2ZmID4gMzEnLFxuICAgICAgICAgICAgICAnaWUgPj0gOCcsXG4gICAgICAgICAgICAgICdsYXN0IDIgdmVyc2lvbnMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcZGVza3RvcFxcXFx5Yy1kZXNpZ24tdnVlXFxcXHNyY1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLWRlc2lnbi12dWVcXFxcc3JjXFxcXHBsdWdpbnNcXFxcU3R5bGVHZW5lcmF0ZVBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGVza3RvcC95Yy1kZXNpZ24tdnVlL3NyYy9wbHVnaW5zL1N0eWxlR2VuZXJhdGVQbHVnaW4udHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgZ2xvYlN5bmMgfSBmcm9tICdnbG9iJztcclxuaW1wb3J0IGxlc3MgZnJvbSAnbGVzcyc7XHJcbmltcG9ydCB0eXBlIHsgUGx1Z2luLCBSZXNvbHZlZENvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCk6IFBsdWdpbiA9PiB7XHJcbiAgbGV0IGNvbmZpZzogUmVzb2x2ZWRDb25maWc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAneWMtZGVzaWduLXZ1ZS1zdHlsZXMnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsXHJcblxyXG4gICAgY29uZmlnUmVzb2x2ZWQocmVzb2x2ZWRDb25maWcpIHtcclxuICAgICAgY29uZmlnID0gcmVzb2x2ZWRDb25maWc7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgd3JpdGVCdW5kbGUob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucy5mb3JtYXQgPT09ICd1bWQnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvKCdTa2lwcGluZyBvbi1kZW1hbmQgc3R5bGUgZ2VuZXJhdGlvbiBmb3IgVU1EIGJ1bmRsZS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFvcHRpb25zLmRpcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJPdXRwdXQgZGlyZWN0b3J5ICdkaXInIGlzIG5vdCBkZWZpbmVkIGluIFJvbGx1cCBvcHRpb25zLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcHJvamVjdFJvb3QgPSBjb25maWcucm9vdDtcclxuICAgICAgY29uc3QgY29tcG9uZW50c1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdzcmMvY29tcG9uZW50cycpO1xyXG4gICAgICBjb25zdCBzaGFyZWRCYXNlUGF0aCA9IHBhdGgucmVzb2x2ZShjb21wb25lbnRzUGF0aCwgJ19zaGFyZWQnKTtcclxuICAgICAgY29uc3Qgc2hhcmVkU3R5bGVzUGF0aCA9IHBhdGgucmVzb2x2ZShzaGFyZWRCYXNlUGF0aCwgJ3N0eWxlcycpO1xyXG4gICAgICBjb25zdCBsZXNzT3B0aW9uczogTGVzcy5PcHRpb25zID0ge1xyXG4gICAgICAgIGNvbXByZXNzOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICAvLyAtLS0gXHU3NTFGXHU2MjEwIHNoYXJlZC5jc3MgLS0tXHJcbiAgICAgIGNvbnN0IHNoYXJlZFN0eWxlU291cmNlUGF0aHMgPSBbXHJcbiAgICAgICAgcGF0aC5qb2luKHNoYXJlZFN0eWxlc1BhdGgsICcqKi8qLntsZXNzLGNzc30nKSxcclxuICAgICAgICBwYXRoLmpvaW4oc2hhcmVkQmFzZVBhdGgsICdjb21wb25lbnRzLyovc3R5bGUvKiovKi57bGVzcyxjc3N9JyksXHJcbiAgICAgICAgcGF0aC5qb2luKGNvbXBvbmVudHNQYXRoLCAnRHJhd2VyL3N0eWxlLyoqLyoue2xlc3MsY3NzfScpLFxyXG4gICAgICAgIHBhdGguam9pbihjb21wb25lbnRzUGF0aCwgJ01vZGFsL3N0eWxlLyoqLyoue2xlc3MsY3NzfScpLFxyXG4gICAgICAgIHBhdGguam9pbihjb21wb25lbnRzUGF0aCwgJ01lc3NhZ2Uvc3R5bGUvKiovKi57bGVzcyxjc3N9JyksXHJcbiAgICAgICAgcGF0aC5qb2luKGNvbXBvbmVudHNQYXRoLCAnTm90aWZpY2F0aW9uL3N0eWxlLyoqLyoue2xlc3MsY3NzfScpLFxyXG4gICAgICBdLm1hcCgocCkgPT4gcC5yZXBsYWNlKC9cXFxcL2csICcvJykpO1xyXG4gICAgICBjb25zdCBzaGFyZWRGaWxlcyA9IGdsb2JTeW5jKHNoYXJlZFN0eWxlU291cmNlUGF0aHMpO1xyXG4gICAgICBpZiAoc2hhcmVkRmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBjb21iaW5lZFNoYXJlZFN0eWxlcyA9ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBzaGFyZWRGaWxlcykge1xyXG4gICAgICAgICAgY29tYmluZWRTaGFyZWRTdHlsZXMgKz0gZnMucmVhZEZpbGVTeW5jKGZpbGUsICd1dGYtOCcpICsgJ1xcbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb21iaW5lZFNoYXJlZFN0eWxlcykge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gXHU0RTNBbGVzc1x1N0YxNlx1OEJEMVx1NjNEMFx1NEY5Qlx1NjI0MFx1NjcwOVx1NTNFRlx1ODBGRFx1NzY4NFx1NjgzOVx1OERFRlx1NUY4NFx1RkYwQ1x1NEVFNVx1NEZCRkBpbXBvcnRcdTgwRkRcdTZCNjNcdTc4NkVcdTg5RTNcdTY3OTBcclxuICAgICAgICAgICAgY29uc3QgbGVzc1BhdGhzID0gW1xyXG4gICAgICAgICAgICAgIHNoYXJlZFN0eWxlc1BhdGgsXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50c1BhdGgsXHJcbiAgICAgICAgICAgICAgcGF0aC5yZXNvbHZlKHNoYXJlZEJhc2VQYXRoLCAnY29tcG9uZW50cycpLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCBsZXNzLnJlbmRlcihjb21iaW5lZFNoYXJlZFN0eWxlcywge1xyXG4gICAgICAgICAgICAgIC4uLmxlc3NPcHRpb25zLFxyXG4gICAgICAgICAgICAgIHBhdGhzOiBBcnJheS5mcm9tKG5ldyBTZXQobGVzc1BhdGhzKSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAob3V0cHV0LmNzcykge1xyXG4gICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoXHJcbiAgICAgICAgICAgICAgICBwYXRoLmpvaW4ob3B0aW9ucy5kaXIsICdzaGFyZWQuY3NzJyksXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuY3NzXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yKGBFcnJvciBjb21waWxpbmcgc2hhcmVkIHN0eWxlczogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyAtLS0gXHU0RTNBXHU1MTc2XHU0RjU5XHU2QkNGXHU0RTJBXHU3RUM0XHU0RUY2XHU3RjE2XHU4QkQxXHU3MkVDXHU3QUNCXHU3Njg0IGluZGV4LmNzcyAoXHU2MjE2XHU3NTFGXHU2MjEwXHU3QTdBXHU3Njg0IGluZGV4LmNzcykgLS0tXHJcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhjb21wb25lbnRzUGF0aCkpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdDb21wb25lbnRzIGRpcmVjdG9yeSBub3QgZm91bmQgYXQ6ICcgKyBjb21wb25lbnRzUGF0aCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFx1NUI5QVx1NEU0OVx1OTcwMFx1ODk4MVx1NEVDRVx1NzJFQ1x1N0FDQlx1NjI1M1x1NTMwNVx1NEUyRFx1NjM5Mlx1OTY2NFx1NzY4NFx1N0VDNFx1NEVGNlx1NTIxN1x1ODg2OFxyXG4gICAgICBjb25zdCBleGNsdWRlZENvbXBvbmVudHMgPSBuZXcgU2V0KFtcclxuICAgICAgICAnX3NoYXJlZCcsXHJcbiAgICAgICAgJ0RyYXdlcicsXHJcbiAgICAgICAgJ01vZGFsJyxcclxuICAgICAgICAnTWVzc2FnZScsXHJcbiAgICAgICAgJ05vdGlmaWNhdGlvbicsXHJcbiAgICAgIF0pO1xyXG4gICAgICBjb25zdCBjb21wb25lbnREaXJzID0gZnMucmVhZGRpclN5bmMoY29tcG9uZW50c1BhdGgpLmZpbHRlcigoZmlsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKGNvbXBvbmVudHNQYXRoLCBmaWxlKTtcclxuICAgICAgICAvLyBcdThGQzdcdTZFRTRcdTYzODlcdTk3NUVcdTc2RUVcdTVGNTVcdTY1ODdcdTRFRjZcdTU0OENcdTVERjJcdTU0MDhcdTVFNzZcdTUyMzBzaGFyZWQuY3NzXHU3Njg0XHU3RUM0XHU0RUY2XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGZzLnN0YXRTeW5jKGZ1bGxQYXRoKS5pc0RpcmVjdG9yeSgpICYmICFleGNsdWRlZENvbXBvbmVudHMuaGFzKGZpbGUpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50TmFtZSBvZiBjb21wb25lbnREaXJzKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzUGF0aCA9IHBhdGguam9pbihjb21wb25lbnRzUGF0aCwgY29tcG9uZW50TmFtZSwgJ3N0eWxlJyk7XHJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoc3R5bGVzUGF0aCkpIHtcclxuICAgICAgICAgIGNvbnN0IHN0eWxlRmlsZXMgPSBnbG9iU3luYyhcclxuICAgICAgICAgICAgcGF0aC5qb2luKHN0eWxlc1BhdGgsICcqKi8qLntsZXNzLGNzc30nKS5yZXBsYWNlKC9cXFxcL2csICcvJylcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoc3R5bGVGaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21iaW5lZENvbXBvbmVudFN0eWxlcyA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2Ygc3R5bGVGaWxlcykge1xyXG4gICAgICAgICAgICAgIGNvbWJpbmVkQ29tcG9uZW50U3R5bGVzICs9IGZzLnJlYWRGaWxlU3luYyhmaWxlLCAndXRmLTgnKSArICdcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZpcnR1YWxFbnRyeUZpbGVQYXRoID0gcGF0aC5qb2luKFxyXG4gICAgICAgICAgICAgIHN0eWxlc1BhdGgsXHJcbiAgICAgICAgICAgICAgJ3ZpcnR1YWwtZW50cnkubGVzcydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGZpbmFsU3R5bGVzVG9Db21waWxlID0gY29tYmluZWRDb21wb25lbnRTdHlsZXM7XHJcbiAgICAgICAgICAgIC8vIFx1Nzg2RVx1NEZERCB2YXIubGVzcyBcdTg4QUJcdTVGMTVcdTUxNjVcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICEvKEBpbXBvcnR8QGltcG9ydCBcXChyZWZlcmVuY2VcXCkpLip2YXJcXC5sZXNzLy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgZmluYWxTdHlsZXNUb0NvbXBpbGVcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGZpbmFsU3R5bGVzVG9Db21waWxlID0gYEBpbXBvcnQgKHJlZmVyZW5jZSkgXCJ2YXJpYWJsZS5sZXNzXCI7XFxuJHtmaW5hbFN0eWxlc1RvQ29tcGlsZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgbGVzcy5yZW5kZXIoZmluYWxTdHlsZXNUb0NvbXBpbGUsIHtcclxuICAgICAgICAgICAgICAgIC4uLmxlc3NPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgcGF0aHM6IFtzdHlsZXNQYXRoLCBzaGFyZWRTdHlsZXNQYXRoXSwgLy8gXHU0RTNBQGltcG9ydFx1NjNEMFx1NEY5Qlx1NjdFNVx1NjI3RVx1OERFRlx1NUY4NFxyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IHZpcnR1YWxFbnRyeUZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG91dHB1dENzc1BhdGggPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRpcixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICAnaW5kZXguY3NzJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZnMubWtkaXJTeW5jKHBhdGguZGlybmFtZShvdXRwdXRDc3NQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRDc3NQYXRoLCBvdXRwdXQuY3NzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBFcnJvciBjb21waWxpbmcgTEVTUyBmb3IgY29tcG9uZW50ICcke2NvbXBvbmVudE5hbWV9JzogJHtlcnJvci5tZXNzYWdlfS5gO1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvci5maWxlbmFtZSAmJiBlcnJvci5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgICBgJHtlcnJvck1lc3NhZ2V9XFxuRmlsZTogJHtlcnJvci5maWxlbmFtZX1cXG5MaW5lOiAke2Vycm9yLmxpbmV9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTdFQzRcdTRFRjZcdTZDQTFcdTY3MDlzdHlsZVx1NjU4N1x1NEVGNlx1NTkzOVx1RkYwQ1x1NTIxOVx1NEUzQVx1NTE3Nlx1NzUxRlx1NjIxMFx1NEUwMFx1NEUyQVx1N0E3QVx1NzY4NGluZGV4LmNzc1xyXG4gICAgICAgICAgY29uc3Qgb3V0cHV0Q3NzUGF0aCA9IHBhdGguam9pbihcclxuICAgICAgICAgICAgb3B0aW9ucy5kaXIsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXHJcbiAgICAgICAgICAgICdpbmRleC5jc3MnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZnMubWtkaXJTeW5jKHBhdGguZGlybmFtZShvdXRwdXRDc3NQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKG91dHB1dENzc1BhdGgsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLWRlc2lnbi12dWVcXFxcc3JjXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVxcXFxzcmNcXFxccGx1Z2luc1xcXFxGaXhEZWNsYXJhdGlvbnNQbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Rlc2t0b3AveWMtZGVzaWduLXZ1ZS9zcmMvcGx1Z2lucy9GaXhEZWNsYXJhdGlvbnNQbHVnaW4udHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRml4SW52YWxpZERlY2xhcmF0aW9uc1BsdWdpbigpOiBQbHVnaW4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnZml4LWludmFsaWQtZGVjbGFyYXRpb25zLWluLXVtZCcsXHJcbiAgICBhcHBseTogJ2J1aWxkJyxcclxuICAgIHJlbmRlckNodW5rKGNvZGUsIGNodW5rLCBvcHRpb25zKSB7XHJcbiAgICAgIC8vIFBsdWdpbiBsb2dpYyBvbmx5IGFwcGxpZXMgdG8gdGhlIFVNRCBmb3JtYXRcclxuICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0ICE9PSAndW1kJykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGludmFsaWREZWNsYXJhdGlvblJlZ2V4ID1cclxuICAgICAgICAvKD86ZnVuY3Rpb258Y29uc3R8bGV0fHZhcilcXHMrKFtcXHckXStcXC5bXFx3JC5dKykvZztcclxuICAgICAgY29uc3QgaW52YWxpZFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICBjb25zdCBtYXRjaHMgPSBBcnJheS5mcm9tKGNvZGUubWF0Y2hBbGwoaW52YWxpZERlY2xhcmF0aW9uUmVnZXgpKTtcclxuICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaHMpIHtcclxuICAgICAgICBpbnZhbGlkU2V0LmFkZChtYXRjaFsxXSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGludmFsaWRTZXQuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBcXG5bZml4LWludmFsaWQtZGVjbGFyYXRpb25zXSBGb3VuZCBhbmQgZml4aW5nICR7aW52YWxpZFNldC5zaXplfSB0eXBlcyBvZiBpbnZhbGlkIGRlY2xhcmF0aW9ucyBpbiBVTUQgY2h1bms6ICR7Y2h1bmsuZmlsZU5hbWV9LmBcclxuICAgICAgKTtcclxuICAgICAgbGV0IG1vZGlmaWVkQ29kZSA9IGNvZGU7XHJcbiAgICAgIGNvbnN0IGludmFsaWROYW1lcyA9IEFycmF5LmZyb20oaW52YWxpZFNldCk7XHJcbiAgICAgIGZvciAoY29uc3QgaW52YWxpZE5hbWUgb2YgaW52YWxpZE5hbWVzKSB7XHJcbiAgICAgICAgLy8gUmVwbGFjZSBkb3Qgd2l0aCB1bmRlcnNjb3JlOiBcImluZGV4JDEuQ09MT1JfUElDS0VSXCIgLT4gXCJpbmRleCQxX0NPTE9SX1BJQ0tFUlwiXHJcbiAgICAgICAgY29uc3QgdmFsaWROYW1lID0gaW52YWxpZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgICAgLSBSZXBsYWNpbmcgYWxsIG9jY3VycmVuY2VzIG9mIFwiJHtpbnZhbGlkTmFtZX1cIiB3aXRoIFwiJHt2YWxpZE5hbWV9XCJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICBpbnZhbGlkTmFtZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpLFxyXG4gICAgICAgICAgJ2cnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtb2RpZmllZENvZGUgPSBtb2RpZmllZENvZGUucmVwbGFjZShzZWFyY2hSZWdleCwgdmFsaWROYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IG1vZGlmaWVkQ29kZSxcclxuICAgICAgICBtYXA6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLG9CQUFvQjtBQUM3UixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sU0FBUzs7O0FDSndTLE9BQU8sVUFBVTtBQUN6VSxPQUFPLFFBQVE7QUFDZixTQUFTLGdCQUFnQjtBQUN6QixPQUFPLFVBQVU7QUFHakIsSUFBTyw4QkFBUSxNQUFjO0FBQzNCLE1BQUk7QUFFSixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFFUCxlQUFlLGdCQUFnQjtBQUM3QixlQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsTUFBTSxZQUFZLFNBQVM7QUFDekIsVUFBSSxRQUFRLFdBQVcsT0FBTztBQUM1QixhQUFLLEtBQUsscURBQXFEO0FBQy9EO0FBQUEsTUFDRjtBQUNBLFVBQUksQ0FBQyxRQUFRLEtBQUs7QUFDaEIsYUFBSyxNQUFNLDBEQUEwRDtBQUNyRTtBQUFBLE1BQ0Y7QUFDQSxZQUFNLGNBQWMsT0FBTztBQUMzQixZQUFNLGlCQUFpQixLQUFLLFFBQVEsYUFBYSxnQkFBZ0I7QUFDakUsWUFBTSxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixTQUFTO0FBQzdELFlBQU0sbUJBQW1CLEtBQUssUUFBUSxnQkFBZ0IsUUFBUTtBQUM5RCxZQUFNLGNBQTRCO0FBQUEsUUFDaEMsVUFBVTtBQUFBLE1BQ1o7QUFFQSxZQUFNLHlCQUF5QjtBQUFBLFFBQzdCLEtBQUssS0FBSyxrQkFBa0IsaUJBQWlCO0FBQUEsUUFDN0MsS0FBSyxLQUFLLGdCQUFnQixvQ0FBb0M7QUFBQSxRQUM5RCxLQUFLLEtBQUssZ0JBQWdCLDhCQUE4QjtBQUFBLFFBQ3hELEtBQUssS0FBSyxnQkFBZ0IsNkJBQTZCO0FBQUEsUUFDdkQsS0FBSyxLQUFLLGdCQUFnQiwrQkFBK0I7QUFBQSxRQUN6RCxLQUFLLEtBQUssZ0JBQWdCLG9DQUFvQztBQUFBLE1BQ2hFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQ2xDLFlBQU0sY0FBYyxTQUFTLHNCQUFzQjtBQUNuRCxVQUFJLFlBQVksU0FBUyxHQUFHO0FBQzFCLFlBQUksdUJBQXVCO0FBQzNCLG1CQUFXLFFBQVEsYUFBYTtBQUM5QixrQ0FBd0IsR0FBRyxhQUFhLE1BQU0sT0FBTyxJQUFJO0FBQUEsUUFDM0Q7QUFDQSxZQUFJLHNCQUFzQjtBQUN4QixjQUFJO0FBRUYsa0JBQU0sWUFBWTtBQUFBLGNBQ2hCO0FBQUEsY0FDQTtBQUFBLGNBQ0EsS0FBSyxRQUFRLGdCQUFnQixZQUFZO0FBQUEsWUFDM0M7QUFDQSxrQkFBTSxTQUFTLE1BQU0sS0FBSyxPQUFPLHNCQUFzQjtBQUFBLGNBQ3JELEdBQUc7QUFBQSxjQUNILE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxTQUFTLENBQUM7QUFBQSxZQUN0QyxDQUFDO0FBQ0QsZ0JBQUksT0FBTyxLQUFLO0FBQ2QsaUJBQUc7QUFBQSxnQkFDRCxLQUFLLEtBQUssUUFBUSxLQUFLLFlBQVk7QUFBQSxnQkFDbkMsT0FBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBQUEsVUFDRixTQUFTLE9BQVk7QUFDbkIsaUJBQUssTUFBTSxrQ0FBa0MsTUFBTSxPQUFPLEVBQUU7QUFBQSxVQUM5RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSSxDQUFDLEdBQUcsV0FBVyxjQUFjLEdBQUc7QUFDbEMsYUFBSyxNQUFNLHdDQUF3QyxjQUFjO0FBQ2pFO0FBQUEsTUFDRjtBQUVBLFlBQU0scUJBQXFCLG9CQUFJLElBQUk7QUFBQSxRQUNqQztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGLENBQUM7QUFDRCxZQUFNLGdCQUFnQixHQUFHLFlBQVksY0FBYyxFQUFFLE9BQU8sQ0FBQyxTQUFTO0FBQ3BFLGNBQU0sV0FBVyxLQUFLLEtBQUssZ0JBQWdCLElBQUk7QUFFL0MsZUFDRSxHQUFHLFNBQVMsUUFBUSxFQUFFLFlBQVksS0FBSyxDQUFDLG1CQUFtQixJQUFJLElBQUk7QUFBQSxNQUV2RSxDQUFDO0FBQ0QsaUJBQVcsaUJBQWlCLGVBQWU7QUFDekMsY0FBTSxhQUFhLEtBQUssS0FBSyxnQkFBZ0IsZUFBZSxPQUFPO0FBQ25FLFlBQUksR0FBRyxXQUFXLFVBQVUsR0FBRztBQUM3QixnQkFBTSxhQUFhO0FBQUEsWUFDakIsS0FBSyxLQUFLLFlBQVksaUJBQWlCLEVBQUUsUUFBUSxPQUFPLEdBQUc7QUFBQSxVQUM3RDtBQUNBLGNBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsZ0JBQUksMEJBQTBCO0FBQzlCLHVCQUFXLFFBQVEsWUFBWTtBQUM3Qix5Q0FBMkIsR0FBRyxhQUFhLE1BQU0sT0FBTyxJQUFJO0FBQUEsWUFDOUQ7QUFDQSxrQkFBTSx1QkFBdUIsS0FBSztBQUFBLGNBQ2hDO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFDQSxnQkFBSSx1QkFBdUI7QUFFM0IsZ0JBQ0UsQ0FBQyw2Q0FBNkM7QUFBQSxjQUM1QztBQUFBLFlBQ0YsR0FDQTtBQUNBLHFDQUF1QjtBQUFBLEVBQXlDLG9CQUFvQjtBQUFBLFlBQ3RGO0FBQ0EsZ0JBQUk7QUFDRixvQkFBTSxTQUFTLE1BQU0sS0FBSyxPQUFPLHNCQUFzQjtBQUFBLGdCQUNyRCxHQUFHO0FBQUEsZ0JBQ0gsT0FBTyxDQUFDLFlBQVksZ0JBQWdCO0FBQUE7QUFBQSxnQkFDcEMsVUFBVTtBQUFBLGNBQ1osQ0FBQztBQUNELG9CQUFNLGdCQUFnQixLQUFLO0FBQUEsZ0JBQ3pCLFFBQVE7QUFBQSxnQkFDUjtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUNBLGlCQUFHLFVBQVUsS0FBSyxRQUFRLGFBQWEsR0FBRyxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQzdELGlCQUFHLGNBQWMsZUFBZSxPQUFPLEdBQUc7QUFBQSxZQUM1QyxTQUFTLE9BQVk7QUFDbkIsb0JBQU0sZUFBZSx1Q0FBdUMsYUFBYSxNQUFNLE1BQU0sT0FBTztBQUM1RixrQkFBSSxNQUFNLFlBQVksTUFBTSxNQUFNO0FBQ2hDLHFCQUFLO0FBQUEsa0JBQ0gsR0FBRyxZQUFZO0FBQUEsUUFBVyxNQUFNLFFBQVE7QUFBQSxRQUFXLE1BQU0sSUFBSTtBQUFBLGdCQUMvRDtBQUFBLGNBQ0YsT0FBTztBQUNMLHFCQUFLLE1BQU0sWUFBWTtBQUFBLGNBQ3pCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLE9BQU87QUFFTCxnQkFBTSxnQkFBZ0IsS0FBSztBQUFBLFlBQ3pCLFFBQVE7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFDQSxhQUFHLFVBQVUsS0FBSyxRQUFRLGFBQWEsR0FBRyxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQzdELGFBQUcsY0FBYyxlQUFlLEVBQUU7QUFBQSxRQUNwQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUNySmUsU0FBUiwrQkFBd0Q7QUFDN0QsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsWUFBWSxNQUFNLE9BQU8sU0FBUztBQUVoQyxVQUFJLFFBQVEsV0FBVyxPQUFPO0FBQzVCLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSwwQkFDSjtBQUNGLFlBQU0sYUFBYSxvQkFBSSxJQUFZO0FBQ25DLFlBQU0sU0FBUyxNQUFNLEtBQUssS0FBSyxTQUFTLHVCQUF1QixDQUFDO0FBQ2hFLGlCQUFXLFNBQVMsUUFBUTtBQUMxQixtQkFBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFDekI7QUFDQSxVQUFJLFdBQVcsU0FBUyxHQUFHO0FBQ3pCLGVBQU87QUFBQSxNQUNUO0FBQ0EsY0FBUTtBQUFBLFFBQ047QUFBQSw4Q0FBaUQsV0FBVyxJQUFJLGdEQUFnRCxNQUFNLFFBQVE7QUFBQSxNQUNoSTtBQUNBLFVBQUksZUFBZTtBQUNuQixZQUFNLGVBQWUsTUFBTSxLQUFLLFVBQVU7QUFDMUMsaUJBQVcsZUFBZSxjQUFjO0FBRXRDLGNBQU0sWUFBWSxZQUFZLFFBQVEsT0FBTyxHQUFHO0FBQ2hELGdCQUFRO0FBQUEsVUFDTixzQ0FBc0MsV0FBVyxXQUFXLFNBQVM7QUFBQSxRQUN2RTtBQUNBLGNBQU0sY0FBYyxJQUFJO0FBQUEsVUFDdEIsWUFBWSxRQUFRLHVCQUF1QixNQUFNO0FBQUEsVUFDakQ7QUFBQSxRQUNGO0FBQ0EsdUJBQWUsYUFBYSxRQUFRLGFBQWEsU0FBUztBQUFBLE1BQzVEO0FBQ0EsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUY1Q0EsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFeEMsUUFBTSxRQUFRLFFBQVE7QUFDdEIsU0FBTztBQUFBLElBQ0wsV0FBVyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxJQUN4QyxNQUFNLFFBQVEsY0FBYztBQUFBLElBQzVCLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxRQUNGLFdBQVcsUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUM5QyxRQUFRLENBQUMsTUFBTSxLQUFLO0FBQUEsUUFDcEIsU0FBUyxDQUFDLGlCQUFpQjtBQUFBLE1BQzdCLENBQUM7QUFBQSxNQUNELDRCQUFvQjtBQUFBLE1BQ3BCLDZCQUFzQjtBQUFBLElBQ3hCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLFFBQzdCLFdBQVcsUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxNQUN4RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixLQUFLO0FBQUEsUUFDSCxPQUFPLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsUUFDbkQsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsUUFDaEIsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLFFBQVE7QUFBQSxZQUNSLEtBQUs7QUFBQSxZQUNMLGdCQUFnQjtBQUFBLFlBQ2hCLGlCQUFpQjtBQUFBLFlBQ2pCLHFCQUFxQjtBQUFBLFlBQ3JCLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsUUFBUTtBQUFBLFlBQ1IsS0FBSztBQUFBLFlBQ0wsZ0JBQWdCO0FBQUEsWUFDaEIsaUJBQWlCO0FBQUEsWUFDakIscUJBQXFCO0FBQUEsWUFDckIsU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxRQUFRO0FBQUEsWUFDUixLQUFLO0FBQUEsWUFDTCxnQkFBZ0I7QUFBQSxZQUNoQixNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxLQUFLO0FBQUEsWUFDUDtBQUFBLFlBQ0EsU0FBUztBQUFBLFlBQ1QsZUFBZTtBQUFBLGNBQ2IsZUFBZTtBQUFBLFlBQ2pCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixVQUFVO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsUUFDakI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFlBQ1gsc0JBQXNCO0FBQUEsY0FDcEI7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxVQUNSLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
