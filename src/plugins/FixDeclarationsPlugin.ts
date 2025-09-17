import type { Plugin } from 'vite';

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default (): Plugin => {
  return {
    name: 'fix-invalid-declarations-in-umd',
    apply: 'build',
    renderChunk(code, chunk, options) {
      if (options.format !== 'umd') {
        return null;
      }
      const invalidDeclarationRegex =
        /(?:function|const|let|var)\s+([\w$]+\.[\w$.]+)/g;
      const invalidNames = new Set<string>();
      let match: any;
      while ((match = invalidDeclarationRegex.exec(code)) !== null) {
        invalidNames.add(match[1]);
      }
      if (invalidNames.size === 0) {
        return null;
      }
      console.log(
        `\n[fix-invalid-declarations] Found and fixing ${invalidNames.size} types of invalid declarations in UMD chunk: ${chunk.fileName}.`
      );
      let modifiedCode = code;
      invalidNames.forEach((invalidName) => {
        const validName = invalidName.replace(/\./g, '_');
        console.log(
          `   - Replacing all occurrences of "${invalidName}" with "${validName}"`
        );
        const searchRegex = new RegExp(escapeRegExp(invalidName), 'g');
        modifiedCode = modifiedCode.replace(searchRegex, validName);
      });
      return {
        code: modifiedCode,
        map: null,
      };
    },
  };
};
