import { CSSProperties } from 'vue';
import { ClassName } from '../_shared/type';
export interface ScrollbarProps {
    type?: TackType;
    outerClass?: ClassName;
    outerStyle?: CSSProperties;
    scrollbar?: boolean;
}
export interface ScrollbarEmits {
    (e: 'scroll', left: number, top: number, ev: Event): void;
}
export interface ScrollbarSlots {
    default(): void;
}
export interface ScrollbarExpose {
    scrollTo(options: ScrollOptions): void;
    scrollLeft(left: number): void;
    scrollTop(top: number): void;
    getScrollRef(): HTMLDivElement;
}
export type TackType = 'track' | 'embed';
