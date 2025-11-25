import type { Plugin } from 'vite';

export default function fixInvalidDeclarationsPlugin(): Plugin {
  return {
    name: 'fix-invalid-declarations-in-umd',
    apply: 'build',
    renderChunk(code, _, options) {
      if (options.format !== 'umd') {
        return null;
      }
      const invalidDeclarationRegex =
        /(?:function|const|let|var)\s+([\w$]+\.[\w$.]+)/g;
      const invalidSet = new Set<string>();
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
        const validName = invalidName.replace(/\./g, '_');
        const searchRegex = new RegExp(
          invalidName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
          'g'
        );
        modifiedCode = modifiedCode.replace(searchRegex, validName);
      }
      return {
        code: modifiedCode,
        map: null,
      };
    },
  };
}
