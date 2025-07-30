import { provide, inject, ref } from "vue";
const SCROLLBAR_CONTEXT_KEY = "scrollbar-context";
const useContext = () => {
  const provide$1 = (params) => {
    provide(SCROLLBAR_CONTEXT_KEY, params);
  };
  const inject$1 = () => {
    return inject(SCROLLBAR_CONTEXT_KEY, {
      curTop: ref(0),
      curLeft: ref(0),
      movableLeft: ref(0),
      movableTop: ref(0),
      thumbHeight: ref(0),
      thumbWidth: ref(0),
      scrollRef: ref(),
      isDragging: ref(false)
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
