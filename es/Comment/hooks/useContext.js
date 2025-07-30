import { inject, reactive, computed, onBeforeUnmount, provide } from "vue";
import { nanoid } from "../../node_modules/nanoid/index.browser.js";
const COMMENT_CONTEXT_KEY = "comment-context";
const useContext = () => {
  const { depths } = inject(COMMENT_CONTEXT_KEY, {
    depths: reactive(/* @__PURE__ */ new Map())
  });
  const hasChildren = computed(() => depths.size > 1);
  const id = nanoid();
  depths.set(id, id);
  onBeforeUnmount(() => {
    depths.delete(id);
  });
  provide(COMMENT_CONTEXT_KEY, {
    depths
  });
  return {
    hasChildren
  };
};
export {
  useContext as default
};
