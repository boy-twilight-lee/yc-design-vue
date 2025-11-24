import path from 'path';
import fs from 'fs';
import { globSync } from 'glob';
import less from 'less';
import type { Plugin, ResolvedConfig } from 'vite';

export default function styleGeneratePlugin(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'yc-design-styles-builder',
    apply: 'build',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async writeBundle(options) {
      if (options.format === 'umd') {
        return;
      }
      if (!options.dir) {
        this.error("Output directory 'dir' is not defined in Rollup options.");
      }
      const projectRoot = config.root;
      const componentsPath = path.resolve(projectRoot, 'src/components');
      const sharedBasePath = path.resolve(componentsPath, '_shared');
      const sharedStylesPath = path.resolve(sharedBasePath, 'styles');
      const lessOptions = {
        compress: true,
      };
      // 生成 shared.css
      const sharedStyleSourcePaths = [
        path.join(sharedStylesPath, '**/*.{less,css}'),
        path.join(sharedBasePath, 'components/*/style/**/*.{less,css}'),
        path.join(componentsPath, 'Drawer/style/**/*.{less,css}'),
        path.join(componentsPath, 'Modal/style/**/*.{less,css}'),
        path.join(componentsPath, 'Message/style/**/*.{less,css}'),
        path.join(componentsPath, 'Notification/style/**/*.{less,css}'),
      ].map((p) => p.replace(/\\/g, '/'));
      const sharedFiles = globSync(sharedStyleSourcePaths);
      if (sharedFiles.length > 0) {
        let combinedSharedStyles = '';
        for (const file of sharedFiles) {
          combinedSharedStyles += fs.readFileSync(file, 'utf-8') + '\n';
        }
        if (combinedSharedStyles) {
          try {
            // 为less编译提供所有可能的根路径，以便@import能正确解析
            const lessPaths = [
              sharedStylesPath,
              componentsPath,
              path.resolve(sharedBasePath, 'components'),
            ];
            const output = await less.render(combinedSharedStyles, {
              ...lessOptions,
              paths: Array.from(new Set(lessPaths)),
            });
            if (output.css) {
              fs.writeFileSync(
                path.join(options.dir, 'shared.css'),
                output.css
              );
            }
          } catch (error: any) {
            this.error(`Error compiling shared styles: ${error.message}`);
          }
        }
      }
      // 为其余每个组件编译独立的 index.css (或生成空的 index.css) ---
      if (!fs.existsSync(componentsPath)) {
        this.error('Components directory not found at: ' + componentsPath);
      }
      // 定义需要从独立打包中排除的组件列表
      const excludedComponents = new Set([
        '_shared',
        'Drawer',
        'Modal',
        'Message',
        'Notification',
      ]);
      const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
        const fullPath = path.join(componentsPath, file);
        // 过滤掉非目录文件和已合并到shared.css的组件
        return (
          fs.statSync(fullPath).isDirectory() && !excludedComponents.has(file)
        );
      });
      for (const componentName of componentDirs) {
        const stylesPath = path.join(componentsPath, componentName, 'style');
        if (fs.existsSync(stylesPath)) {
          const styleFiles = globSync(
            path.join(stylesPath, '**/*.{less,css}').replace(/\\/g, '/')
          );
          if (styleFiles.length > 0) {
            let combinedComponentStyles = '';
            for (const file of styleFiles) {
              combinedComponentStyles += fs.readFileSync(file, 'utf-8') + '\n';
            }
            const virtualEntryFilePath = path.join(
              stylesPath,
              'virtual-entry.less'
            );
            let finalStylesToCompile = combinedComponentStyles;
            // 确保 var.less 被引入
            if (
              !/(@import|@import \(reference\)).*var\.less/.test(
                finalStylesToCompile
              )
            ) {
              finalStylesToCompile = `@import (reference) "variable.less";\n${finalStylesToCompile}`;
            }
            try {
              const output = await less.render(finalStylesToCompile, {
                ...lessOptions,
                paths: [stylesPath, sharedStylesPath],
                filename: virtualEntryFilePath,
              });
              const outputCssPath = path.join(
                options.dir,
                componentName,
                'index.css'
              );
              fs.mkdirSync(path.dirname(outputCssPath), { recursive: true });
              fs.writeFileSync(outputCssPath, output.css);
            } catch (error: any) {
              const errorMessage = `Error compiling LESS for component '${componentName}': ${error.message}.`;
              if (error.filename && error.line) {
                this.error(
                  `${errorMessage}\nFile: ${error.filename}\nLine: ${error.line}`
                );
              } else {
                this.error(errorMessage);
              }
            }
          }
        } else {
          // 如果组件没有style文件夹，则为其生成一个空的index.css
          const outputCssPath = path.join(
            options.dir,
            componentName,
            'index.css'
          );
          fs.mkdirSync(path.dirname(outputCssPath), { recursive: true });
          fs.writeFileSync(outputCssPath, '');
        }
      }
    },
  };
}
