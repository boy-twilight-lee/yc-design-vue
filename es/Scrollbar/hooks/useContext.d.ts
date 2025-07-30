import { Ref } from 'vue';
type ScrollbarContext = {
    curTop: Ref<number>;
    curLeft: Ref<number>;
    movableLeft: Ref<number>;
    movableTop: Ref<number>;
    thumbHeight: Ref<number>;
    thumbWidth: Ref<number>;
    isDragging: Ref<boolean>;
    scrollRef: Ref<HTMLDivElement | undefined>;
};
declare const _default: () => {
    provide: (params: ScrollbarContext) => void;
    inject: () => ScrollbarContext;
};
export default _default;
