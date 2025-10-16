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
function styleGeneratePlugin() {
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
}

// src/plugins/FixDeclarationsPlugin.ts
function fixInvalidDeclarationsPlugin() {
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
      let modifiedCode = code;
      const invalidNames = Array.from(invalidSet);
      for (const invalidName of invalidNames) {
        const validName = invalidName.replace(/\./g, "_");
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

// src/plugins/BuildResolverPlugin.ts
import path2 from "path";
import { promises as fs2 } from "fs";
import { build } from "file:///D:/desktop/yc-design-vue/node_modules/esbuild/lib/main.js";
function buildResolverPlugin() {
  return {
    name: "yc-design-resolver-builder",
    apply: "build",
    async closeBundle() {
      const projectRoot = process.cwd();
      const sourceFile = path2.resolve(
        projectRoot,
        "src/resolver/autoImportPlugin.ts"
      );
      const sourceDtsFile = path2.resolve(
        projectRoot,
        "src/resolver/autoImportPlugin.d.ts"
      );
      const outputDir = path2.resolve(projectRoot, "es/resolver");
      const jsOutputFile = path2.resolve(outputDir, "index.js");
      const finalDtsPath = path2.resolve(outputDir, "index.d.ts");
      try {
        await fs2.mkdir(outputDir, { recursive: true });
        console.log("Build resolver: Compiling JavaScript with esbuild...");
        await build({
          entryPoints: [sourceFile],
          outfile: jsOutputFile,
          bundle: true,
          format: "esm",
          platform: "browser",
          minify: false
        });
        await fs2.copyFile(sourceDtsFile, finalDtsPath);
      } catch (err) {
        console.error(
          "\u274C Build resolver: An error occurred during the build process.",
          err
        );
      }
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
      styleGeneratePlugin(),
      fixInvalidDeclarationsPlugin(),
      buildResolverPlugin()
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3BsdWdpbnMvU3R5bGVHZW5lcmF0ZVBsdWdpbi50cyIsICJzcmMvcGx1Z2lucy9GaXhEZWNsYXJhdGlvbnNQbHVnaW4udHMiLCAic3JjL3BsdWdpbnMvQnVpbGRSZXNvbHZlclBsdWdpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZGVza3RvcFxcXFx5Yy1kZXNpZ24tdnVlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9kZXNrdG9wL3ljLWRlc2lnbi12dWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCBzdHlsZUdlbmVyYXRlUGx1Z2luIGZyb20gJy4vc3JjL3BsdWdpbnMvU3R5bGVHZW5lcmF0ZVBsdWdpbic7XG5pbXBvcnQgZml4RGVjbGFyYXRpb25zUGx1Z2luIGZyb20gJy4vc3JjL3BsdWdpbnMvRml4RGVjbGFyYXRpb25zUGx1Z2luJztcbmltcG9ydCBidWlsZFJlc29sdmVyUGx1Z2luIGZyb20gJy4vc3JjL3BsdWdpbnMvQnVpbGRSZXNvbHZlclBsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgLy8gXHU2NjJGXHU1NDI2XHU2NjJGXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXG4gIGNvbnN0IGlzRGV2ID0gbW9kZSA9PSAnZGV2ZWxvcG1lbnQnO1xuICByZXR1cm4ge1xuICAgIHB1YmxpY0RpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbGFuZycpLFxuICAgIHJvb3Q6IGlzRGV2ID8gJy4vc3JjL2RldicgOiB1bmRlZmluZWQsXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBkdHMoe1xuICAgICAgICBlbnRyeVJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICAgb3V0RGlyOiBbJ2VzJywgJ2xpYiddLFxuICAgICAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcy8qKiddLFxuICAgICAgfSksXG4gICAgICBzdHlsZUdlbmVyYXRlUGx1Z2luKCksXG4gICAgICBmaXhEZWNsYXJhdGlvbnNQbHVnaW4oKSxcbiAgICAgIGJ1aWxkUmVzb2x2ZXJQbHVnaW4oKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgICAgJ0BzaGFyZWQnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL19zaGFyZWQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDQwOTAsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL2luZGV4LnRzJyksXG4gICAgICAgIG5hbWU6ICdZY0Rlc2lnblZ1ZScsXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgICAgb3V0cHV0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICAgICAgZGlyOiAnZXMnLFxuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogJ3NyYy9jb21wb25lbnRzJyxcbiAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXQ6ICdjanMnLFxuICAgICAgICAgICAgZGlyOiAnbGliJyxcbiAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMvY29tcG9uZW50cycsXG4gICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0OiAndW1kJyxcbiAgICAgICAgICAgIGRpcjogJ2Rpc3QnLFxuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0udW1kLmpzJyxcbiAgICAgICAgICAgIG5hbWU6ICdZY0Rlc2lnblZ1ZScsXG4gICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludGVyb3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGdlbmVyYXRlZENvZGU6IHtcbiAgICAgICAgICAgICAgY29uc3RCaW5kaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKHtcbiAgICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbXG4gICAgICAgICAgICAgICdBbmRyb2lkIDQuMScsXG4gICAgICAgICAgICAgICdpT1MgNy4xJyxcbiAgICAgICAgICAgICAgJ0Nocm9tZSA+IDMxJyxcbiAgICAgICAgICAgICAgJ2ZmID4gMzEnLFxuICAgICAgICAgICAgICAnaWUgPj0gOCcsXG4gICAgICAgICAgICAgICdsYXN0IDIgdmVyc2lvbnMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcZGVza3RvcFxcXFx5Yy1kZXNpZ24tdnVlXFxcXHNyY1xcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLWRlc2lnbi12dWVcXFxcc3JjXFxcXHBsdWdpbnNcXFxcU3R5bGVHZW5lcmF0ZVBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGVza3RvcC95Yy1kZXNpZ24tdnVlL3NyYy9wbHVnaW5zL1N0eWxlR2VuZXJhdGVQbHVnaW4udHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgZ2xvYlN5bmMgfSBmcm9tICdnbG9iJztcclxuaW1wb3J0IGxlc3MgZnJvbSAnbGVzcyc7XHJcbmltcG9ydCB0eXBlIHsgUGx1Z2luLCBSZXNvbHZlZENvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVHZW5lcmF0ZVBsdWdpbigpOiBQbHVnaW4ge1xyXG4gIGxldCBjb25maWc6IFJlc29sdmVkQ29uZmlnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ljLWRlc2lnbi12dWUtc3R5bGVzJyxcclxuICAgIGFwcGx5OiAnYnVpbGQnLFxyXG5cclxuICAgIGNvbmZpZ1Jlc29sdmVkKHJlc29sdmVkQ29uZmlnKSB7XHJcbiAgICAgIGNvbmZpZyA9IHJlc29sdmVkQ29uZmlnO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHdyaXRlQnVuZGxlKG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0ID09PSAndW1kJykge1xyXG4gICAgICAgIHRoaXMuaW5mbygnU2tpcHBpbmcgb24tZGVtYW5kIHN0eWxlIGdlbmVyYXRpb24gZm9yIFVNRCBidW5kbGUuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghb3B0aW9ucy5kaXIpIHtcclxuICAgICAgICB0aGlzLmVycm9yKFwiT3V0cHV0IGRpcmVjdG9yeSAnZGlyJyBpcyBub3QgZGVmaW5lZCBpbiBSb2xsdXAgb3B0aW9ucy5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2plY3RSb290ID0gY29uZmlnLnJvb3Q7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudHNQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCAnc3JjL2NvbXBvbmVudHMnKTtcclxuICAgICAgY29uc3Qgc2hhcmVkQmFzZVBhdGggPSBwYXRoLnJlc29sdmUoY29tcG9uZW50c1BhdGgsICdfc2hhcmVkJyk7XHJcbiAgICAgIGNvbnN0IHNoYXJlZFN0eWxlc1BhdGggPSBwYXRoLnJlc29sdmUoc2hhcmVkQmFzZVBhdGgsICdzdHlsZXMnKTtcclxuICAgICAgY29uc3QgbGVzc09wdGlvbnM6IExlc3MuT3B0aW9ucyA9IHtcclxuICAgICAgICBjb21wcmVzczogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgLy8gLS0tIFx1NzUxRlx1NjIxMCBzaGFyZWQuY3NzIC0tLVxyXG4gICAgICBjb25zdCBzaGFyZWRTdHlsZVNvdXJjZVBhdGhzID0gW1xyXG4gICAgICAgIHBhdGguam9pbihzaGFyZWRTdHlsZXNQYXRoLCAnKiovKi57bGVzcyxjc3N9JyksXHJcbiAgICAgICAgcGF0aC5qb2luKHNoYXJlZEJhc2VQYXRoLCAnY29tcG9uZW50cy8qL3N0eWxlLyoqLyoue2xlc3MsY3NzfScpLFxyXG4gICAgICAgIHBhdGguam9pbihjb21wb25lbnRzUGF0aCwgJ0RyYXdlci9zdHlsZS8qKi8qLntsZXNzLGNzc30nKSxcclxuICAgICAgICBwYXRoLmpvaW4oY29tcG9uZW50c1BhdGgsICdNb2RhbC9zdHlsZS8qKi8qLntsZXNzLGNzc30nKSxcclxuICAgICAgICBwYXRoLmpvaW4oY29tcG9uZW50c1BhdGgsICdNZXNzYWdlL3N0eWxlLyoqLyoue2xlc3MsY3NzfScpLFxyXG4gICAgICAgIHBhdGguam9pbihjb21wb25lbnRzUGF0aCwgJ05vdGlmaWNhdGlvbi9zdHlsZS8qKi8qLntsZXNzLGNzc30nKSxcclxuICAgICAgXS5tYXAoKHApID0+IHAucmVwbGFjZSgvXFxcXC9nLCAnLycpKTtcclxuICAgICAgY29uc3Qgc2hhcmVkRmlsZXMgPSBnbG9iU3luYyhzaGFyZWRTdHlsZVNvdXJjZVBhdGhzKTtcclxuICAgICAgaWYgKHNoYXJlZEZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgY29tYmluZWRTaGFyZWRTdHlsZXMgPSAnJztcclxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2Ygc2hhcmVkRmlsZXMpIHtcclxuICAgICAgICAgIGNvbWJpbmVkU2hhcmVkU3R5bGVzICs9IGZzLnJlYWRGaWxlU3luYyhmaWxlLCAndXRmLTgnKSArICdcXG4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29tYmluZWRTaGFyZWRTdHlsZXMpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFx1NEUzQWxlc3NcdTdGMTZcdThCRDFcdTYzRDBcdTRGOUJcdTYyNDBcdTY3MDlcdTUzRUZcdTgwRkRcdTc2ODRcdTY4MzlcdThERUZcdTVGODRcdUZGMENcdTRFRTVcdTRGQkZAaW1wb3J0XHU4MEZEXHU2QjYzXHU3ODZFXHU4OUUzXHU2NzkwXHJcbiAgICAgICAgICAgIGNvbnN0IGxlc3NQYXRocyA9IFtcclxuICAgICAgICAgICAgICBzaGFyZWRTdHlsZXNQYXRoLFxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudHNQYXRoLFxyXG4gICAgICAgICAgICAgIHBhdGgucmVzb2x2ZShzaGFyZWRCYXNlUGF0aCwgJ2NvbXBvbmVudHMnKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgbGVzcy5yZW5kZXIoY29tYmluZWRTaGFyZWRTdHlsZXMsIHtcclxuICAgICAgICAgICAgICAuLi5sZXNzT3B0aW9ucyxcclxuICAgICAgICAgICAgICBwYXRoczogQXJyYXkuZnJvbShuZXcgU2V0KGxlc3NQYXRocykpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG91dHB1dC5jc3MpIHtcclxuICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKFxyXG4gICAgICAgICAgICAgICAgcGF0aC5qb2luKG9wdGlvbnMuZGlyLCAnc2hhcmVkLmNzcycpLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0LmNzc1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihgRXJyb3IgY29tcGlsaW5nIHNoYXJlZCBzdHlsZXM6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gLS0tIFx1NEUzQVx1NTE3Nlx1NEY1OVx1NkJDRlx1NEUyQVx1N0VDNFx1NEVGNlx1N0YxNlx1OEJEMVx1NzJFQ1x1N0FDQlx1NzY4NCBpbmRleC5jc3MgKFx1NjIxNlx1NzUxRlx1NjIxMFx1N0E3QVx1NzY4NCBpbmRleC5jc3MpIC0tLVxyXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29tcG9uZW50c1BhdGgpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignQ29tcG9uZW50cyBkaXJlY3Rvcnkgbm90IGZvdW5kIGF0OiAnICsgY29tcG9uZW50c1BhdGgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTVCOUFcdTRFNDlcdTk3MDBcdTg5ODFcdTRFQ0VcdTcyRUNcdTdBQ0JcdTYyNTNcdTUzMDVcdTRFMkRcdTYzOTJcdTk2NjRcdTc2ODRcdTdFQzRcdTRFRjZcdTUyMTdcdTg4NjhcclxuICAgICAgY29uc3QgZXhjbHVkZWRDb21wb25lbnRzID0gbmV3IFNldChbXHJcbiAgICAgICAgJ19zaGFyZWQnLFxyXG4gICAgICAgICdEcmF3ZXInLFxyXG4gICAgICAgICdNb2RhbCcsXHJcbiAgICAgICAgJ01lc3NhZ2UnLFxyXG4gICAgICAgICdOb3RpZmljYXRpb24nLFxyXG4gICAgICBdKTtcclxuICAgICAgY29uc3QgY29tcG9uZW50RGlycyA9IGZzLnJlYWRkaXJTeW5jKGNvbXBvbmVudHNQYXRoKS5maWx0ZXIoKGZpbGUpID0+IHtcclxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihjb21wb25lbnRzUGF0aCwgZmlsZSk7XHJcbiAgICAgICAgLy8gXHU4RkM3XHU2RUU0XHU2Mzg5XHU5NzVFXHU3NkVFXHU1RjU1XHU2NTg3XHU0RUY2XHU1NDhDXHU1REYyXHU1NDA4XHU1RTc2XHU1MjMwc2hhcmVkLmNzc1x1NzY4NFx1N0VDNFx1NEVGNlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBmcy5zdGF0U3luYyhmdWxsUGF0aCkuaXNEaXJlY3RvcnkoKSAmJiAhZXhjbHVkZWRDb21wb25lbnRzLmhhcyhmaWxlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudE5hbWUgb2YgY29tcG9uZW50RGlycykge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlc1BhdGggPSBwYXRoLmpvaW4oY29tcG9uZW50c1BhdGgsIGNvbXBvbmVudE5hbWUsICdzdHlsZScpO1xyXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHN0eWxlc1BhdGgpKSB7XHJcbiAgICAgICAgICBjb25zdCBzdHlsZUZpbGVzID0gZ2xvYlN5bmMoXHJcbiAgICAgICAgICAgIHBhdGguam9pbihzdHlsZXNQYXRoLCAnKiovKi57bGVzcyxjc3N9JykucmVwbGFjZSgvXFxcXC9nLCAnLycpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHN0eWxlRmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY29tYmluZWRDb21wb25lbnRTdHlsZXMgPSAnJztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHN0eWxlRmlsZXMpIHtcclxuICAgICAgICAgICAgICBjb21iaW5lZENvbXBvbmVudFN0eWxlcyArPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0Zi04JykgKyAnXFxuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2aXJ0dWFsRW50cnlGaWxlUGF0aCA9IHBhdGguam9pbihcclxuICAgICAgICAgICAgICBzdHlsZXNQYXRoLFxyXG4gICAgICAgICAgICAgICd2aXJ0dWFsLWVudHJ5Lmxlc3MnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFN0eWxlc1RvQ29tcGlsZSA9IGNvbWJpbmVkQ29tcG9uZW50U3R5bGVzO1xyXG4gICAgICAgICAgICAvLyBcdTc4NkVcdTRGREQgdmFyLmxlc3MgXHU4OEFCXHU1RjE1XHU1MTY1XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAhLyhAaW1wb3J0fEBpbXBvcnQgXFwocmVmZXJlbmNlXFwpKS4qdmFyXFwubGVzcy8udGVzdChcclxuICAgICAgICAgICAgICAgIGZpbmFsU3R5bGVzVG9Db21waWxlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBmaW5hbFN0eWxlc1RvQ29tcGlsZSA9IGBAaW1wb3J0IChyZWZlcmVuY2UpIFwidmFyaWFibGUubGVzc1wiO1xcbiR7ZmluYWxTdHlsZXNUb0NvbXBpbGV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IGxlc3MucmVuZGVyKGZpbmFsU3R5bGVzVG9Db21waWxlLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5sZXNzT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHBhdGhzOiBbc3R5bGVzUGF0aCwgc2hhcmVkU3R5bGVzUGF0aF0sIC8vIFx1NEUzQUBpbXBvcnRcdTYzRDBcdTRGOUJcdTY3RTVcdTYyN0VcdThERUZcdTVGODRcclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiB2aXJ0dWFsRW50cnlGaWxlUGF0aCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zdCBvdXRwdXRDc3NQYXRoID0gcGF0aC5qb2luKFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaXIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2luZGV4LmNzcydcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGZzLm1rZGlyU3luYyhwYXRoLmRpcm5hbWUob3V0cHV0Q3NzUGF0aCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMob3V0cHV0Q3NzUGF0aCwgb3V0cHV0LmNzcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgY29tcGlsaW5nIExFU1MgZm9yIGNvbXBvbmVudCAnJHtjb21wb25lbnROYW1lfSc6ICR7ZXJyb3IubWVzc2FnZX0uYDtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IuZmlsZW5hbWUgJiYgZXJyb3IubGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcclxuICAgICAgICAgICAgICAgICAgYCR7ZXJyb3JNZXNzYWdlfVxcbkZpbGU6ICR7ZXJyb3IuZmlsZW5hbWV9XFxuTGluZTogJHtlcnJvci5saW5lfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU3RUM0XHU0RUY2XHU2Q0ExXHU2NzA5c3R5bGVcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMENcdTUyMTlcdTRFM0FcdTUxNzZcdTc1MUZcdTYyMTBcdTRFMDBcdTRFMkFcdTdBN0FcdTc2ODRpbmRleC5jc3NcclxuICAgICAgICAgIGNvbnN0IG91dHB1dENzc1BhdGggPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGlyLFxyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lLFxyXG4gICAgICAgICAgICAnaW5kZXguY3NzJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGZzLm1rZGlyU3luYyhwYXRoLmRpcm5hbWUob3V0cHV0Q3NzUGF0aCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRDc3NQYXRoLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLWRlc2lnbi12dWVcXFxcc3JjXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVxcXFxzcmNcXFxccGx1Z2luc1xcXFxGaXhEZWNsYXJhdGlvbnNQbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Rlc2t0b3AveWMtZGVzaWduLXZ1ZS9zcmMvcGx1Z2lucy9GaXhEZWNsYXJhdGlvbnNQbHVnaW4udHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZml4SW52YWxpZERlY2xhcmF0aW9uc1BsdWdpbigpOiBQbHVnaW4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnZml4LWludmFsaWQtZGVjbGFyYXRpb25zLWluLXVtZCcsXHJcbiAgICBhcHBseTogJ2J1aWxkJyxcclxuICAgIHJlbmRlckNodW5rKGNvZGUsIGNodW5rLCBvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAhPT0gJ3VtZCcpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbnZhbGlkRGVjbGFyYXRpb25SZWdleCA9XHJcbiAgICAgICAgLyg/OmZ1bmN0aW9ufGNvbnN0fGxldHx2YXIpXFxzKyhbXFx3JF0rXFwuW1xcdyQuXSspL2c7XHJcbiAgICAgIGNvbnN0IGludmFsaWRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgY29uc3QgbWF0Y2hzID0gQXJyYXkuZnJvbShjb2RlLm1hdGNoQWxsKGludmFsaWREZWNsYXJhdGlvblJlZ2V4KSk7XHJcbiAgICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hzKSB7XHJcbiAgICAgICAgaW52YWxpZFNldC5hZGQobWF0Y2hbMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbnZhbGlkU2V0LnNpemUgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbW9kaWZpZWRDb2RlID0gY29kZTtcclxuICAgICAgY29uc3QgaW52YWxpZE5hbWVzID0gQXJyYXkuZnJvbShpbnZhbGlkU2V0KTtcclxuICAgICAgZm9yIChjb25zdCBpbnZhbGlkTmFtZSBvZiBpbnZhbGlkTmFtZXMpIHtcclxuICAgICAgICBjb25zdCB2YWxpZE5hbWUgPSBpbnZhbGlkTmFtZS5yZXBsYWNlKC9cXC4vZywgJ18nKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICBpbnZhbGlkTmFtZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpLFxyXG4gICAgICAgICAgJ2cnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtb2RpZmllZENvZGUgPSBtb2RpZmllZENvZGUucmVwbGFjZShzZWFyY2hSZWdleCwgdmFsaWROYW1lKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IG1vZGlmaWVkQ29kZSxcclxuICAgICAgICBtYXA6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXNrdG9wXFxcXHljLWRlc2lnbi12dWVcXFxcc3JjXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlc2t0b3BcXFxceWMtZGVzaWduLXZ1ZVxcXFxzcmNcXFxccGx1Z2luc1xcXFxCdWlsZFJlc29sdmVyUGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9kZXNrdG9wL3ljLWRlc2lnbi12dWUvc3JjL3BsdWdpbnMvQnVpbGRSZXNvbHZlclBsdWdpbi50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgYnVpbGQgfSBmcm9tICdlc2J1aWxkJztcclxuXHJcbi8vIFx1N0YxNlx1OEJEMXJlc29sdmVyXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUmVzb2x2ZXJQbHVnaW4oKTogUGx1Z2luIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ljLWRlc2lnbi1yZXNvbHZlci1idWlsZGVyJyxcclxuICAgIGFwcGx5OiAnYnVpbGQnLFxyXG4gICAgYXN5bmMgY2xvc2VCdW5kbGUoKSB7XHJcbiAgICAgIC8vIDEuIFx1NUI5QVx1NEU0OVx1OTg3OVx1NzZFRVx1NEUyRFx1NzY4NFx1NTE3M1x1OTUyRVx1OERFRlx1NUY4NFxyXG4gICAgICBjb25zdCBwcm9qZWN0Um9vdCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICAgIC8vIFx1NkU5MFx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gICAgICBjb25zdCBzb3VyY2VGaWxlID0gcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgIHByb2plY3RSb290LFxyXG4gICAgICAgICdzcmMvcmVzb2x2ZXIvYXV0b0ltcG9ydFBsdWdpbi50cydcclxuICAgICAgKTtcclxuICAgICAgLy8gXHU2RTkwXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2XHU3Njg0XHU4REVGXHU1Rjg0XHVGRjA4XHU1MDQ3XHU4QkJFXHU0RTBFXHU2RTkwXHU2NTg3XHU0RUY2XHU1NDBDXHU1NDBEXHU0RTE0XHU1NDBDXHU3NkVFXHU1RjU1XHVGRjA5XHJcbiAgICAgIGNvbnN0IHNvdXJjZUR0c0ZpbGUgPSBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgcHJvamVjdFJvb3QsXHJcbiAgICAgICAgJ3NyYy9yZXNvbHZlci9hdXRvSW1wb3J0UGx1Z2luLmQudHMnXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIFx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gICAgICBjb25zdCBvdXRwdXREaXIgPSBwYXRoLnJlc29sdmUocHJvamVjdFJvb3QsICdlcy9yZXNvbHZlcicpO1xyXG4gICAgICBjb25zdCBqc091dHB1dEZpbGUgPSBwYXRoLnJlc29sdmUob3V0cHV0RGlyLCAnaW5kZXguanMnKTtcclxuICAgICAgY29uc3QgZmluYWxEdHNQYXRoID0gcGF0aC5yZXNvbHZlKG91dHB1dERpciwgJ2luZGV4LmQudHMnKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyAyLiBcdTc4NkVcdTRGRERcdThGOTNcdTUxRkFcdTc2RUVcdTVGNTVcdTVCNThcdTU3MjhcdUZGMENcdTU5ODJcdTY3OUNcdTRFMERcdTVCNThcdTU3MjhcdTUyMTlcdTUyMUJcdTVFRkFcclxuICAgICAgICBhd2FpdCBmcy5ta2RpcihvdXRwdXREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIC8vIDMuIFx1NEY3Rlx1NzUyOCBlc2J1aWxkIFx1N0YxNlx1OEJEMSBUeXBlU2NyaXB0IFx1NkU5MFx1NjU4N1x1NEVGNlx1NEUzQSBKYXZhU2NyaXB0XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0J1aWxkIHJlc29sdmVyOiBDb21waWxpbmcgSmF2YVNjcmlwdCB3aXRoIGVzYnVpbGQuLi4nKTtcclxuICAgICAgICBhd2FpdCBidWlsZCh7XHJcbiAgICAgICAgICBlbnRyeVBvaW50czogW3NvdXJjZUZpbGVdLFxyXG4gICAgICAgICAgb3V0ZmlsZToganNPdXRwdXRGaWxlLFxyXG4gICAgICAgICAgYnVuZGxlOiB0cnVlLFxyXG4gICAgICAgICAgZm9ybWF0OiAnZXNtJyxcclxuICAgICAgICAgIHBsYXRmb3JtOiAnYnJvd3NlcicsXHJcbiAgICAgICAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGZzLmNvcHlGaWxlKHNvdXJjZUR0c0ZpbGUsIGZpbmFsRHRzUGF0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAnXHUyNzRDIEJ1aWxkIHJlc29sdmVyOiBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MuJyxcclxuICAgICAgICAgIGVyclxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLFNBQVMsb0JBQW9CO0FBQzdSLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxTQUFTOzs7QUNKd1MsT0FBTyxVQUFVO0FBQ3pVLE9BQU8sUUFBUTtBQUNmLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sVUFBVTtBQUdGLFNBQVIsc0JBQStDO0FBQ3BELE1BQUk7QUFFSixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFFUCxlQUFlLGdCQUFnQjtBQUM3QixlQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsTUFBTSxZQUFZLFNBQVM7QUFDekIsVUFBSSxRQUFRLFdBQVcsT0FBTztBQUM1QixhQUFLLEtBQUsscURBQXFEO0FBQy9EO0FBQUEsTUFDRjtBQUNBLFVBQUksQ0FBQyxRQUFRLEtBQUs7QUFDaEIsYUFBSyxNQUFNLDBEQUEwRDtBQUNyRTtBQUFBLE1BQ0Y7QUFDQSxZQUFNLGNBQWMsT0FBTztBQUMzQixZQUFNLGlCQUFpQixLQUFLLFFBQVEsYUFBYSxnQkFBZ0I7QUFDakUsWUFBTSxpQkFBaUIsS0FBSyxRQUFRLGdCQUFnQixTQUFTO0FBQzdELFlBQU0sbUJBQW1CLEtBQUssUUFBUSxnQkFBZ0IsUUFBUTtBQUM5RCxZQUFNLGNBQTRCO0FBQUEsUUFDaEMsVUFBVTtBQUFBLE1BQ1o7QUFFQSxZQUFNLHlCQUF5QjtBQUFBLFFBQzdCLEtBQUssS0FBSyxrQkFBa0IsaUJBQWlCO0FBQUEsUUFDN0MsS0FBSyxLQUFLLGdCQUFnQixvQ0FBb0M7QUFBQSxRQUM5RCxLQUFLLEtBQUssZ0JBQWdCLDhCQUE4QjtBQUFBLFFBQ3hELEtBQUssS0FBSyxnQkFBZ0IsNkJBQTZCO0FBQUEsUUFDdkQsS0FBSyxLQUFLLGdCQUFnQiwrQkFBK0I7QUFBQSxRQUN6RCxLQUFLLEtBQUssZ0JBQWdCLG9DQUFvQztBQUFBLE1BQ2hFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQ2xDLFlBQU0sY0FBYyxTQUFTLHNCQUFzQjtBQUNuRCxVQUFJLFlBQVksU0FBUyxHQUFHO0FBQzFCLFlBQUksdUJBQXVCO0FBQzNCLG1CQUFXLFFBQVEsYUFBYTtBQUM5QixrQ0FBd0IsR0FBRyxhQUFhLE1BQU0sT0FBTyxJQUFJO0FBQUEsUUFDM0Q7QUFDQSxZQUFJLHNCQUFzQjtBQUN4QixjQUFJO0FBRUYsa0JBQU0sWUFBWTtBQUFBLGNBQ2hCO0FBQUEsY0FDQTtBQUFBLGNBQ0EsS0FBSyxRQUFRLGdCQUFnQixZQUFZO0FBQUEsWUFDM0M7QUFDQSxrQkFBTSxTQUFTLE1BQU0sS0FBSyxPQUFPLHNCQUFzQjtBQUFBLGNBQ3JELEdBQUc7QUFBQSxjQUNILE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxTQUFTLENBQUM7QUFBQSxZQUN0QyxDQUFDO0FBQ0QsZ0JBQUksT0FBTyxLQUFLO0FBQ2QsaUJBQUc7QUFBQSxnQkFDRCxLQUFLLEtBQUssUUFBUSxLQUFLLFlBQVk7QUFBQSxnQkFDbkMsT0FBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBQUEsVUFDRixTQUFTLE9BQVk7QUFDbkIsaUJBQUssTUFBTSxrQ0FBa0MsTUFBTSxPQUFPLEVBQUU7QUFBQSxVQUM5RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSSxDQUFDLEdBQUcsV0FBVyxjQUFjLEdBQUc7QUFDbEMsYUFBSyxNQUFNLHdDQUF3QyxjQUFjO0FBQ2pFO0FBQUEsTUFDRjtBQUVBLFlBQU0scUJBQXFCLG9CQUFJLElBQUk7QUFBQSxRQUNqQztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGLENBQUM7QUFDRCxZQUFNLGdCQUFnQixHQUFHLFlBQVksY0FBYyxFQUFFLE9BQU8sQ0FBQyxTQUFTO0FBQ3BFLGNBQU0sV0FBVyxLQUFLLEtBQUssZ0JBQWdCLElBQUk7QUFFL0MsZUFDRSxHQUFHLFNBQVMsUUFBUSxFQUFFLFlBQVksS0FBSyxDQUFDLG1CQUFtQixJQUFJLElBQUk7QUFBQSxNQUV2RSxDQUFDO0FBQ0QsaUJBQVcsaUJBQWlCLGVBQWU7QUFDekMsY0FBTSxhQUFhLEtBQUssS0FBSyxnQkFBZ0IsZUFBZSxPQUFPO0FBQ25FLFlBQUksR0FBRyxXQUFXLFVBQVUsR0FBRztBQUM3QixnQkFBTSxhQUFhO0FBQUEsWUFDakIsS0FBSyxLQUFLLFlBQVksaUJBQWlCLEVBQUUsUUFBUSxPQUFPLEdBQUc7QUFBQSxVQUM3RDtBQUNBLGNBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsZ0JBQUksMEJBQTBCO0FBQzlCLHVCQUFXLFFBQVEsWUFBWTtBQUM3Qix5Q0FBMkIsR0FBRyxhQUFhLE1BQU0sT0FBTyxJQUFJO0FBQUEsWUFDOUQ7QUFDQSxrQkFBTSx1QkFBdUIsS0FBSztBQUFBLGNBQ2hDO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFDQSxnQkFBSSx1QkFBdUI7QUFFM0IsZ0JBQ0UsQ0FBQyw2Q0FBNkM7QUFBQSxjQUM1QztBQUFBLFlBQ0YsR0FDQTtBQUNBLHFDQUF1QjtBQUFBLEVBQXlDLG9CQUFvQjtBQUFBLFlBQ3RGO0FBQ0EsZ0JBQUk7QUFDRixvQkFBTSxTQUFTLE1BQU0sS0FBSyxPQUFPLHNCQUFzQjtBQUFBLGdCQUNyRCxHQUFHO0FBQUEsZ0JBQ0gsT0FBTyxDQUFDLFlBQVksZ0JBQWdCO0FBQUE7QUFBQSxnQkFDcEMsVUFBVTtBQUFBLGNBQ1osQ0FBQztBQUNELG9CQUFNLGdCQUFnQixLQUFLO0FBQUEsZ0JBQ3pCLFFBQVE7QUFBQSxnQkFDUjtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUNBLGlCQUFHLFVBQVUsS0FBSyxRQUFRLGFBQWEsR0FBRyxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQzdELGlCQUFHLGNBQWMsZUFBZSxPQUFPLEdBQUc7QUFBQSxZQUM1QyxTQUFTLE9BQVk7QUFDbkIsb0JBQU0sZUFBZSx1Q0FBdUMsYUFBYSxNQUFNLE1BQU0sT0FBTztBQUM1RixrQkFBSSxNQUFNLFlBQVksTUFBTSxNQUFNO0FBQ2hDLHFCQUFLO0FBQUEsa0JBQ0gsR0FBRyxZQUFZO0FBQUEsUUFBVyxNQUFNLFFBQVE7QUFBQSxRQUFXLE1BQU0sSUFBSTtBQUFBLGdCQUMvRDtBQUFBLGNBQ0YsT0FBTztBQUNMLHFCQUFLLE1BQU0sWUFBWTtBQUFBLGNBQ3pCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLE9BQU87QUFFTCxnQkFBTSxnQkFBZ0IsS0FBSztBQUFBLFlBQ3pCLFFBQVE7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFDQSxhQUFHLFVBQVUsS0FBSyxRQUFRLGFBQWEsR0FBRyxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQzdELGFBQUcsY0FBYyxlQUFlLEVBQUU7QUFBQSxRQUNwQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUNySmUsU0FBUiwrQkFBd0Q7QUFDN0QsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsWUFBWSxNQUFNLE9BQU8sU0FBUztBQUNoQyxVQUFJLFFBQVEsV0FBVyxPQUFPO0FBQzVCLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSwwQkFDSjtBQUNGLFlBQU0sYUFBYSxvQkFBSSxJQUFZO0FBQ25DLFlBQU0sU0FBUyxNQUFNLEtBQUssS0FBSyxTQUFTLHVCQUF1QixDQUFDO0FBQ2hFLGlCQUFXLFNBQVMsUUFBUTtBQUMxQixtQkFBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFDekI7QUFDQSxVQUFJLFdBQVcsU0FBUyxHQUFHO0FBQ3pCLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSxlQUFlO0FBQ25CLFlBQU0sZUFBZSxNQUFNLEtBQUssVUFBVTtBQUMxQyxpQkFBVyxlQUFlLGNBQWM7QUFDdEMsY0FBTSxZQUFZLFlBQVksUUFBUSxPQUFPLEdBQUc7QUFDaEQsY0FBTSxjQUFjLElBQUk7QUFBQSxVQUN0QixZQUFZLFFBQVEsdUJBQXVCLE1BQU07QUFBQSxVQUNqRDtBQUFBLFFBQ0Y7QUFDQSx1QkFBZSxhQUFhLFFBQVEsYUFBYSxTQUFTO0FBQUEsTUFDNUQ7QUFDQSxhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBQ25DQSxPQUFPQSxXQUFVO0FBQ2pCLFNBQVMsWUFBWUMsV0FBVTtBQUMvQixTQUFTLGFBQWE7QUFHUCxTQUFSLHNCQUErQztBQUNwRCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxNQUFNLGNBQWM7QUFFbEIsWUFBTSxjQUFjLFFBQVEsSUFBSTtBQUVoQyxZQUFNLGFBQWFDLE1BQUs7QUFBQSxRQUN0QjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBRUEsWUFBTSxnQkFBZ0JBLE1BQUs7QUFBQSxRQUN6QjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBRUEsWUFBTSxZQUFZQSxNQUFLLFFBQVEsYUFBYSxhQUFhO0FBQ3pELFlBQU0sZUFBZUEsTUFBSyxRQUFRLFdBQVcsVUFBVTtBQUN2RCxZQUFNLGVBQWVBLE1BQUssUUFBUSxXQUFXLFlBQVk7QUFDekQsVUFBSTtBQUVGLGNBQU1DLElBQUcsTUFBTSxXQUFXLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFFN0MsZ0JBQVEsSUFBSSxzREFBc0Q7QUFDbEUsY0FBTSxNQUFNO0FBQUEsVUFDVixhQUFhLENBQUMsVUFBVTtBQUFBLFVBQ3hCLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFDRCxjQUFNQSxJQUFHLFNBQVMsZUFBZSxZQUFZO0FBQUEsTUFDL0MsU0FBUyxLQUFLO0FBQ1osZ0JBQVE7QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FIakRBLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBRXhDLFFBQU0sUUFBUSxRQUFRO0FBQ3RCLFNBQU87QUFBQSxJQUNMLFdBQVcsUUFBUSxrQ0FBVyxVQUFVO0FBQUEsSUFDeEMsTUFBTSxRQUFRLGNBQWM7QUFBQSxJQUM1QixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsUUFDRixXQUFXLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsUUFDOUMsUUFBUSxDQUFDLE1BQU0sS0FBSztBQUFBLFFBQ3BCLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxNQUM3QixDQUFDO0FBQUEsTUFDRCxvQkFBb0I7QUFBQSxNQUNwQiw2QkFBc0I7QUFBQSxNQUN0QixvQkFBb0I7QUFBQSxJQUN0QjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxRQUM3QixXQUFXLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsTUFDeEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsS0FBSztBQUFBLFFBQ0gsT0FBTyxRQUFRLGtDQUFXLHlCQUF5QjtBQUFBLFFBQ25ELE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMsS0FBSztBQUFBLFFBQ2hCLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRSxRQUFRO0FBQUEsWUFDUixLQUFLO0FBQUEsWUFDTCxnQkFBZ0I7QUFBQSxZQUNoQixpQkFBaUI7QUFBQSxZQUNqQixxQkFBcUI7QUFBQSxZQUNyQixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxZQUNSLEtBQUs7QUFBQSxZQUNMLGdCQUFnQjtBQUFBLFlBQ2hCLGlCQUFpQjtBQUFBLFlBQ2pCLHFCQUFxQjtBQUFBLFlBQ3JCLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsUUFBUTtBQUFBLFlBQ1IsS0FBSztBQUFBLFlBQ0wsZ0JBQWdCO0FBQUEsWUFDaEIsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsS0FBSztBQUFBLFlBQ1A7QUFBQSxZQUNBLFNBQVM7QUFBQSxZQUNULGVBQWU7QUFBQSxjQUNiLGVBQWU7QUFBQSxZQUNqQjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxZQUNYLHNCQUFzQjtBQUFBLGNBQ3BCO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsVUFDUixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAiZnMiLCAicGF0aCIsICJmcyJdCn0K
