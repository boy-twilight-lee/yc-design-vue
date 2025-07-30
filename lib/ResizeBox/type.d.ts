export interface ResizeBoxProps {
    width?: number;
    height?: number;
    component?: string;
    directions?: ResizeBoxDirection[];
}
export interface ResizeBoxEmits {
    (e: 'update:width', value: number): void;
    (e: 'update:height', value: number): void;
    (e: 'moving-start', ev: MouseEvent): void;
    (e: 'moving', size: {
        width: number;
        height: number;
    }, ev: MouseEvent): void;
    (e: 'moving-end', ev: MouseEvent): void;
}
export interface ResizeBoxSlots {
    default(): void;
    ['resize-trigger'](scope: {
        direction: ResizeBoxDirection;
    }): void;
    ['resize-trigger-icon'](scope: {
        direction: ResizeBoxDirection;
    }): void;
}
export type ResizeBoxDirection = 'left' | 'right' | 'top' | 'bottom';
