import { VerificationCodeProps } from './type';
declare const _default: import('vue').DefineComponent<VerificationCodeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    input: (value: string, ev: Event, i: number) => any;
    "update:modelValue": (value: string) => any;
    finish: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<VerificationCodeProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string, ev: Event, i: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFinish?: ((value: string) => any) | undefined;
}>, {
    size: import('..').Size;
    length: number;
    disabled: boolean;
    error: boolean;
    modelValue: string;
    defaultValue: string;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
