export declare const sleep: (ms: number) => Promise<unknown>;
export declare function throttleByRaf(cb: (...args: any[]) => void): {
    (...args: any[]): void;
    cancel(): void;
};
export declare function debounce<T extends (...args: any[]) => any>(func: T, delay: number, immediate?: boolean): (...args: Parameters<T>) => void;
export declare function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void;
export declare const valueToPx: (value: string | number | undefined) => string;
