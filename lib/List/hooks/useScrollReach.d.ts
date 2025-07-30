import { Ref } from 'vue';
interface OffsetDirection {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}
declare const _default: (options: {
    scrollRef: Ref<any>;
    offset?: OffsetDirection;
    onScroll?: (e: Event, status: Record<string, boolean>) => void;
    onReachRight?: (e: Event) => void;
    onReachLeft?: (e: Event) => void;
    onReachTop?: (e: Event) => void;
    onReachBottom?: (e: Event) => void;
}) => void;
export default _default;
