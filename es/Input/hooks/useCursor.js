import { ref } from "vue";
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (!input.value)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function getCursor() {
    if (!input.value || !selectionRef.value)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (!beforeTxt || !afterTxt || !selectionStart)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    return startPos;
  }
  function setCursor() {
    var _a;
    const startPos = getCursor();
    if (!startPos)
      return;
    (_a = input.value) == null ? void 0 : _a.setSelectionRange(startPos, startPos);
  }
  return {
    recordCursor,
    setCursor,
    getCursor,
    selectionRef
  };
}
export {
  useCursor as default
};
