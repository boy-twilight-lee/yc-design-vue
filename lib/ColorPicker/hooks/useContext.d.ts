import { Ref } from 'vue';
import { ColorPickerEmits, ColorFormat } from '../type';
import { Props } from '../../_shared/type';
type ColorPickerContext = {
    popupVisible: Ref<boolean>;
    computedColor: Ref<string>;
    baseColor: Ref<string>;
    format: Ref<ColorFormat>;
    alpha: Ref<number>;
    disabled: Ref<boolean>;
    disabledAlpha: Ref<boolean>;
    showHistory: Ref<boolean>;
    showPreset: Ref<boolean>;
    hideTrigger: Ref<boolean>;
    historyColors: Ref<string[]>;
    presetColors: Ref<string[]>;
    emits: ColorPickerEmits;
};
declare const _default: () => {
    provide: (props: Props, emits: ColorPickerEmits) => {
        popupVisible: Ref<boolean, boolean>;
        size: Ref<any, any>;
        computedColor: import('vue').WritableComputedRef<any, string>;
    };
    inject: () => ColorPickerContext;
};
export default _default;
