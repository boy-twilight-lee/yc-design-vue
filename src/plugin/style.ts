import path from 'path';
import fs from 'fs';
import { globSync } from 'glob';
import less from 'less';
import type { Plugin, ResolvedConfig } from 'vite';

export default function ycDesignVueStyles(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'yc-design-vue-styles',
    apply: 'build',

    configResolved(resolvedConfig) {
      // Store the resolved config to access it in other hooks
      config = resolvedConfig;
    },

    async writeBundle(options) {
      // This hook runs for each output target (e.g., 'es' and 'lib')
      if (!options.dir) {
        this.error("Output directory 'dir' is not defined in Rollup options.");
        return;
      }

      const projectRoot = config.root;

      // Centralized LESS compiler options for compression
      const lessOptions: Less.Options = {
        compress: true, // Enable compression for all outputs
      };

      // --- 1. Compile, compress, and write shared.css ---
      const sharedStylesPath = path.resolve(
        projectRoot,
        'src/components/_shared/styles'
      );

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
            // Compile the combined LESS/CSS string
            const output = await less.render(combinedSharedStyles, {
              ...lessOptions,
              paths: [sharedStylesPath], // Provide include path for @import
            });

            // Manually write the compressed CSS file to the current output directory
            fs.writeFileSync(path.join(options.dir, 'shared.css'), output.css);
          } catch (error: any) {
            this.error(`Error compiling shared styles: ${error.message}`);
          }
        }
      } else {
        this.warn('Shared styles directory not found at: ' + sharedStylesPath);
      }

      // --- 2. Compile, compress, and write index.css for each component ---
      const componentsPath = path.resolve(projectRoot, 'src/components');
      if (!fs.existsSync(componentsPath)) {
        this.error('Components directory not found at: ' + componentsPath);
        return;
      }

      const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
        const fullPath = path.join(componentsPath, file);
        return fs.statSync(fullPath).isDirectory() && file !== '_shared';
      });

      for (const componentName of componentDirs) {
        const stylesPath = path.join(componentsPath, componentName, 'styles');

        if (fs.existsSync(stylesPath)) {
          const styleFiles = globSync(
            path.join(stylesPath, '**/*.{less,css}').replace(/\\/g, '/')
          );

          if (styleFiles.length > 0) {
            let combinedComponentStyles = '';
            for (const file of styleFiles) {
              combinedComponentStyles += fs.readFileSync(file, 'utf-8') + '\n';
            }

            try {
              // Compile the component's styles with compression
              const output = await less.render(combinedComponentStyles, {
                ...lessOptions,
                paths: [stylesPath, sharedStylesPath], // Allow @import from component and shared dirs
              });

              const outputCssPath = path.join(
                options.dir,
                componentName,
                'index.css'
              );
              fs.writeFileSync(outputCssPath, output.css);
            } catch (error: any) {
              this.error(
                `Error compiling LESS for component ${componentName}: ${error.message}`
              );
            }
          }
        }
      }
    },
  };
}
