import { useSlots, Slots, provide as _provide, inject as _inject } from 'vue';

const CARD_CONTEXT_KEY = 'card-context';
type CardContext = {
  slots: Slots;
};

export default function useCardContext() {
  const provide = () => {
    const slots = useSlots();
    _provide<CardContext>(CARD_CONTEXT_KEY, {
      slots,
    });
  };
  const inject = () => {
    return _inject<CardContext>(CARD_CONTEXT_KEY, {
      slots: {},
    });
  };
  return {
    provide,
    inject,
  };
}
