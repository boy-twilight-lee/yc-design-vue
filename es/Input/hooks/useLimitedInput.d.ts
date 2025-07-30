import { Ref } from 'vue';
import { Props, RequiredDeep } from '../../_shared/type';
import { TextareaEmits } from '../../Textarea';
import { InputProps as _InputProps, InputEmits } from '..';
export type InputProps = RequiredDeep<_InputProps>;
declare const _default: (params: {
    props: Props;
    emits: InputEmits | TextareaEmits;
    inputRef: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>;
}) => {
    computedValue: import('vue').WritableComputedRef<any, string>;
    showClearBtn: import('vue').ComputedRef<boolean>;
    showWordLimit: import('vue').ComputedRef<boolean>;
    curLength: import('vue').ComputedRef<any>;
    error: import('vue').WritableComputedRef<any, boolean>;
    disabled: Ref<boolean, boolean>;
    maxLength: import('vue').ComputedRef<number>;
    handleInput: (e: Event) => Promise<void>;
    handleComposition: (e: CompositionEvent) => Promise<void> | undefined;
};
export default _default;
