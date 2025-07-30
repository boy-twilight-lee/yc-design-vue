import { Ref } from 'vue';
import { DoptionValue, DropdownEmits } from '../type';
import { Props, Theme } from '../../_shared/type';
type DropdownContext = {
    theme: Ref<Theme>;
    select: (value: DoptionValue, ev: MouseEvent) => void;
};
declare const _default: () => {
    provide: (props: Props, emits: DropdownEmits) => {
        computedVisible: import('vue').WritableComputedRef<any, boolean>;
    };
    inject: () => DropdownContext;
};
export default _default;
