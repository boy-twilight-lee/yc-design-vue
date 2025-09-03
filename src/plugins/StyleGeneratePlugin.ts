import path from 'path';
import fs from 'fs';
import { globSync } from 'glob';
import less from 'less';
import type { Plugin, ResolvedConfig } from 'vite';

export default (): Plugin => {
  let config: ResolvedConfig;

  return {
    name: 'yc-design-vue-styles',
    apply: 'build',

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
        'src/components/_shared/styles'
      );
      const componentsPath = path.resolve(projectRoot, 'src/components');
      const lessOptions: Less.Options = {
        compress: true,
      };
      // 生成shared.css
      if (fs.existsSync(sharedStylesPath)) {
        const sharedFiles = globSync(
          path.join(sharedStylesPath, '**/*.{less,css}').replace(/\\/g, '/')
        );
        let combinedSharedStyles = '';
        for (const file of sharedFiles) {
          combinedSharedStyles += fs.readFileSync(file, 'utf-8') + '\n';
        }
        if (combinedSharedStyles) {
          try {
            const output = await less.render(combinedSharedStyles, {
              ...lessOptions,
              paths: [sharedStylesPath],
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
      // 为每个组件编译 index.css (或生成空的 index.css)
      if (!fs.existsSync(componentsPath)) {
        this.error('Components directory not found at: ' + componentsPath);
        return;
      }
      const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
        const fullPath = path.join(componentsPath, file);
        return fs.statSync(fullPath).isDirectory() && file !== '_shared';
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
            if (
              !/(@import|@import \(reference\)).*var\.less/.test(
                finalStylesToCompile
              )
            ) {
              finalStylesToCompile = `@import (reference) "var.less";\n${finalStylesToCompile}`;
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
};
