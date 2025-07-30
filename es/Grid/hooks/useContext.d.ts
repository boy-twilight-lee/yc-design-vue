import { Ref, Reactive } from 'vue';
import { BreakpointName, Gutter } from '../type';
import { Props } from '../../_shared/type';
export declare const GRID_CONTEXT_KEY = "grid-context";
export type GridContext = {
    breakpoint: Ref<BreakpointName>;
    div: Ref<boolean>;
    gutter: Ref<number[]>;
    cols: Ref<number>;
    colGap: Ref<number>;
    spanMap: Reactive<SpanMap>;
    collapsed: Ref<boolean>;
    collapsedRows: Ref<number>;
};
export type SpanMap = Map<string, {
    id: string;
    span: number;
    suffix: boolean;
}>;
export type GutterValue = Gutter | [Gutter, Gutter];
declare const _default: () => {
    provide: (props: Props) => {
        breakpoint: Ref<BreakpointName, BreakpointName>;
        cols: import('vue').ComputedRef<number>;
        colGap: import('vue').ComputedRef<number>;
        rowGap: import('vue').ComputedRef<string | number | undefined>;
        gutter: import('vue').ComputedRef<number[]>;
    };
    inject: () => {
        collectSpan: (span: Ref<number>, suffix: Ref<boolean>) => {
            id: string;
        };
        breakpoint: Ref<BreakpointName>;
        div: Ref<boolean>;
        gutter: Ref<number[]>;
        cols: Ref<number>;
        colGap: Ref<number>;
        spanMap: Reactive<SpanMap>;
        collapsed: Ref<boolean>;
        collapsedRows: Ref<number>;
    };
};
export default _default;
