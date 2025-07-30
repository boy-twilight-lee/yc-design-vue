import { Ref } from 'vue';
import { AutoSize } from '../type';
declare const _default: (mirrorRef: Ref<HTMLDivElement | undefined>, autoSize: AutoSize) => {
    style?: undefined;
} | {
    style: import('vue').ComputedRef<{
        minHeight: string;
        height: string;
    }>;
};
export default _default;
