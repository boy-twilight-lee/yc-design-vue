import { IndicatorTrigger, IndicatorType, IndicatorPosition } from './type';
import { ClassName } from '../_shared/type';
type __VLS_Props = {
    trigger: IndicatorTrigger;
    indicatorType: IndicatorType;
    indicatorPosition: IndicatorPosition;
    indicatorClass: ClassName;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (index: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((index: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
