import { EllipsisConfig } from '../../Typography/type';
import { BreakpointName, ResponsiveValue } from '../../Grid';
import { Ref } from 'vue';
export declare const isServerRendering: boolean;
export declare const querySelector: (selectors: string, container?: Document | HTMLElement) => HTMLElement | undefined;
export declare const getElement: (target: string | HTMLElement | undefined, container?: Document | HTMLElement) => HTMLElement | undefined;
export declare function getDomText(dom: Ref<HTMLElement | undefined>): string;
export declare function getBreakpointValue(breakpoint: BreakpointName, value: string | number | ResponsiveValue, defaultValue?: number | string): number | string | undefined;
export declare const mediaQueryHandler: (onBreakpoint: (breakpoint: BreakpointName, order: Record<string, number>, index: number) => void, queries?: Record<string, string>) => void;
export declare function findFirstScrollableParent(element?: HTMLElement): HTMLElement | undefined;
/**
 * 计算文本是否需要省略并返回处理后的文本
 * @param originElement 原始DOM元素，用于获取样式
 * @param ellipsisConfig 省略配置
 * @param operations 操作按钮的DOM元素或元素数组
 * @param fullText 完整文本
 * @returns 返回处理后的文本和是否省略的标志
 */
export declare function calculateEllipsis(originElement: HTMLElement, ellipsisConfig: EllipsisConfig | undefined, operations: (HTMLElement | HTMLElement[] | null) | undefined, fullText: string): {
    tooltip?: {
        type?: "tooltip" | "popover" | undefined;
        props?: Record<string, any> | undefined;
        title: string;
    } | undefined;
    text: string | null;
    ellipsis: boolean;
    isClamped: boolean;
};
