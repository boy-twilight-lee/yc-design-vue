import { Ref } from 'vue';
type OnSet = (...args: any) => any;
type OnGet = (...args: any) => any;
declare const _default: <T>(modelValue: Ref<T | undefined>, defaultValue: T, onSet?: OnSet, onGet?: OnGet) => import('vue').WritableComputedRef<any, T>;
export default _default;
