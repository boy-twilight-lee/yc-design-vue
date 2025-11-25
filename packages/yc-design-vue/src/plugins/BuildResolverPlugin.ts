import type { Plugin } from 'vite';
import path from 'path';
import { promises as fs } from 'fs';
import { build } from 'esbuild';

// 编译resolver
export default function buildResolverPlugin(): Plugin {
  return {
    name: 'yc-design-resolver-builder',
    apply: 'build',
    async closeBundle() {
      // 1. 定义项目中的关键路径
      const projectRoot = process.cwd();
      // 源文件路径
      const sourceFile = path.resolve(
        projectRoot,
        'src/resolver/autoImportPlugin.ts'
      );
      // 源类型声明文件的路径（假设与源文件同名且同目录）
      const sourceDtsFile = path.resolve(
        projectRoot,
        'src/resolver/autoImportPlugin.d.ts'
      );
      // 输出目录和文件路径
      const outputDir = path.resolve(projectRoot, 'es/resolver');
      const jsOutputFile = path.resolve(outputDir, 'index.js');
      const finalDtsPath = path.resolve(outputDir, 'index.d.ts');
      try {
        // 2. 确保输出目录存在，如果不存在则创建
        await fs.mkdir(outputDir, { recursive: true });
        // 3. 使用 esbuild 编译 TypeScript 源文件为 JavaScript
        await build({
          entryPoints: [sourceFile],
          outfile: jsOutputFile,
          bundle: true,
          format: 'esm',
          platform: 'browser',
          minify: false,
        });
        await fs.copyFile(sourceDtsFile, finalDtsPath);
      } catch (err) {
        console.error(
          '❌ Build resolver: An error occurred during the build process.',
          err
        );
      }
    },
  };
}
