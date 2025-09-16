import { useSlots, Slots, provide as _provide, inject as _inject } from 'vue';
import { CardSlots } from '../type';

const CARD_CONTEXT_KEY = 'card-context';
type CardContext = {
  slots: Slots;
};

export default () => {
  const provide = () => {
    const slots = useSlots() as Readonly<CardSlots>;
    _provide<CardContext>(CARD_CONTEXT_KEY, {
      slots,
    });
    return {
      slots,
    };
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
};
