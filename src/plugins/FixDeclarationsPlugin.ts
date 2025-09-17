import type { Plugin } from 'vite';

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function FixInvalidDeclarationsPlugin(): Plugin {
  return {
    name: 'fix-invalid-declarations-in-umd',
    apply: 'build',
    renderChunk(code, chunk, options) {
      // Plugin logic only applies to the UMD format
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
      console.log(
        `\n[fix-invalid-declarations] Found and fixing ${invalidSet.size} types of invalid declarations in UMD chunk: ${chunk.fileName}.`
      );
      let modifiedCode = code;
      const invalidNames = Array.from(invalidSet);
      for (const invalidName of invalidNames) {
        // Replace dot with underscore: "index$1.COLOR_PICKER" -> "index$1_COLOR_PICKER"
        const validName = invalidName.replace(/\./g, '_');
        console.log(
          `   - Replacing all occurrences of "${invalidName}" with "${validName}"`
        );
        const searchRegex = new RegExp(escapeRegExp(invalidName), 'g');
        modifiedCode = modifiedCode.replace(searchRegex, validName);
      }
      return {
        code: modifiedCode,
        map: null,
      };
    },
  };
}
