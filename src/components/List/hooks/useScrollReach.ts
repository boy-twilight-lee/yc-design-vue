import { Ref } from 'vue';
import { useScroll } from '@shared/utils/vue-utils';
import { debounce } from '@shared/utils/dom';
interface OffsetDirection {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}
export default (options: {
  scrollRef: Ref<any>;
  offset?: OffsetDirection;
  onScroll?: (e: Event, status: Record<string, boolean>) => void;
  onReachRight?: (e: Event) => void;
  onReachLeft?: (e: Event) => void;
  onReachTop?: (e: Event) => void;
  onReachBottom?: (e: Event) => void;
}) => {
  const {
    scrollRef,
    offset,
    onReachBottom,
    onReachLeft,
    onReachRight,
    onReachTop,
    onScroll,
  } = options;
  const { arrivedState } = useScroll(scrollRef, {
    onScroll: debounce((e) => {
      onScroll?.(e, arrivedState);
      arrivedState.bottom && onReachBottom?.(e);
      arrivedState.left && onReachLeft?.(e);
      arrivedState.right && onReachRight?.(e);
      arrivedState.top && onReachTop?.(e);
    }, 50),
    offset,
  });
};
