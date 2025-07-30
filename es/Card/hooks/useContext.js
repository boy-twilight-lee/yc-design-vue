import { useSlots, provide, inject } from "vue";
const CARD_CONTEXT_KEY = "card-context";
const useContext = () => {
  const provide$1 = () => {
    const slots = useSlots();
    provide(CARD_CONTEXT_KEY, {
      slots
    });
    return {
      slots
    };
  };
  const inject$1 = () => {
    return inject(CARD_CONTEXT_KEY, {
      slots: {}
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
