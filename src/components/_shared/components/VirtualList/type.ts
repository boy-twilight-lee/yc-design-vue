import { ScrollbarProps } from '@/components/Scrollbar';
import { VirtualizerOptions, VirtualItem } from '@tanstack/vue-virtual';

/**
 
 interface VirtualizerOptions<TScrollElement extends Element | Window, TItemElement extends Element> {
  count?: number;
  getScrollElement?: () => TScrollElement | null;
  estimateSize?: (index: number) => number;
  scrollToFn?: (offset: number, options: {
      adjustments?: number;
      behavior?: ScrollBehavior;
  }, instance: Virtualizer<TScrollElement, TItemElement>) => void;
  observeElementRect?: (instance: Virtualizer<TScrollElement, TItemElement>, cb: (rect: Rect) => void) => void | (() => void);
  observeElementOffset?: (instance: Virtualizer<TScrollElement, TItemElement>, cb: ObserveOffsetCallBack) => void | (() => void);
  debug?: boolean;
  initialRect?: Rect;
  onChange?: (instance: Virtualizer<TScrollElement, TItemElement>, sync: boolean) => void;
  measureElement?: (element: TItemElement, entry: ResizeObserverEntry | undefined, instance: Virtualizer<TScrollElement, TItemElement>) => number;
  overscan?: number;
  horizontal?: boolean;
  paddingStart?: number;
  paddingEnd?: number;
  scrollPaddingStart?: number;
  scrollPaddingEnd?: number;
  initialOffset?: number | (() => number);
  getItemKey?: (index: number) => Key;
  rangeExtractor?: (range: Range) => Array<number>;
  scrollMargin?: number;
  gap?: number;
  indexAttribute?: string;
  initialMeasurementsCache?: Array<VirtualItem>;
  lanes?: number;
  isScrollingResetDelay?: number;
  useScrollendEvent?: boolean;
  enabled?: boolean;
  isRtl?: boolean;
  useAnimationFrameWithResizeObserver?: boolean;
}
 */

export type VirtualListProps = Partial<VirtualizerOptions<Element, Element>>;

export type VirtualListSlots = {
  default(scope: { data: VirtualItem }): void;
};
