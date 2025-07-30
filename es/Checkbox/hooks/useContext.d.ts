import { Ref } from 'vue';
import { CheckboxValue, CheckboxGroupEmits } from '../type';
import { Props } from '../../_shared/type';
type CheckboxContext = {
    computedValue: Ref<CheckboxValue[]>;
    max: Ref<number>;
    disabled: Ref<boolean>;
    hasGroup: Ref<boolean>;
};
declare const _default: () => {
    provide: (props: Props, emits: CheckboxGroupEmits) => {
        options: import('vue').ComputedRef<((string & Record<string, unknown>) | (number & Record<string, unknown>) | (false & Record<string, unknown>) | (true & Record<string, unknown>) | (import('..').CheckboxOption & Record<string, unknown>) | {
            label: CheckboxValue | import('..').CheckboxOption;
            value: CheckboxValue | import('..').CheckboxOption;
        })[]>;
    };
    inject: () => CheckboxContext;
};
export default _default;
