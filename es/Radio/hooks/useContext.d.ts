import { Ref } from 'vue';
import { RadioType, RadioGroupEmits, RadioValue, RadioOption } from '../type';
import { Size, Props } from '../../_shared/type';
interface RadioContext {
    computedValue: Ref<RadioValue | undefined>;
    type: Ref<RadioType>;
    disabled: Ref<boolean>;
    size: Ref<Size>;
    hasGroup: Ref<boolean>;
    emits: RadioGroupEmits;
}
declare const _default: () => {
    provide: (props: Props, emits: RadioGroupEmits) => {
        options: import('vue').ComputedRef<((RadioOption & Record<string, unknown>) | {
            label: RadioOption;
            value: RadioOption;
        })[]>;
    };
    inject: () => RadioContext;
};
export default _default;
