import { Ref, CSSProperties } from 'vue';
import { PaginationEmits } from '../type';
import { Props } from '../../_shared/type';
interface PaginationContext {
    computedCurrent: Ref<number>;
    computedPageSize: Ref<number>;
    disabled: Ref<boolean>;
    pageItemStyle: Ref<CSSProperties>;
    activePageItemStyle: Ref<CSSProperties>;
    pages: Ref<number>;
    baseSize: Ref<number>;
    bufferSize: Ref<number>;
}
declare const _default: () => {
    provide: (props: Props, emits: PaginationEmits) => {
        total: import('vue').WritableComputedRef<any, number>;
        size: Ref<any, any>;
        pages: import('vue').ComputedRef<number>;
        pagesArray: import('vue').ComputedRef<(string | number)[]>;
        computedCurrent: import('vue').WritableComputedRef<any, number>;
        computedPageSize: import('vue').WritableComputedRef<any, number>;
        sizeOptions: import('vue').ComputedRef<{
            label: string;
            value: number;
        }[]>;
    };
    inject: () => PaginationContext;
};
export default _default;
