import { ref, toRefs, Ref, provide as _provide, inject as _inject } from 'vue';
import {
  ColorPickerProps as _ColorPickerProps,
  ColorPickerEmits,
  ColorFormat,
} from '../type';
import { Required, RecordType } from '@shared/type';
import { parseColor } from '@shared/utils/color';
import { getGlobalConfig } from '@shared/utils/global-config';
import { useControlValue } from '@shared/utils/control';

const COLOR_PICKER_CONTEXT_KEY = 'color-picker-context';
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
type ColorPickerProps = Required<_ColorPickerProps>;

export default () => {
  const provide = (props: RecordType, emits: ColorPickerEmits) => {
    const {
      modelValue,
      defaultValue,
      format,
      disabled,
      disabledAlpha,
      showHistory,
      showPreset,
      historyColors,
      presetColors,
      hideTrigger,
    } = toRefs(props as ColorPickerProps);
    // 获取全局配置
    const { size } = getGlobalConfig(props);
    // 透明度
    const alpha = ref<number>(100);
    // 控制值
    const computedColor = useControlValue<string>(
      modelValue,
      defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
        emits('change', val);
      },
      (val) => {
        const color = parseColor(val);
        const a = color.getAlpha();
        if (a != alpha.value) {
          alpha.value = a * 100;
        }
        if (format.value == 'hex') {
          return a == 1 ? color.toHexString() : color.toHex8String();
        } else {
          return color.toRgbString();
        }
      }
    );
    // 基础颜色
    const baseColor = ref<string>(computedColor.value);
    // visible
    const popupVisible = ref<boolean>(false);
    // 提供属性
    _provide<ColorPickerContext>(COLOR_PICKER_CONTEXT_KEY, {
      emits,
      popupVisible,
      computedColor,
      baseColor,
      alpha,
      format,
      disabled,
      disabledAlpha,
      showHistory,
      showPreset,
      hideTrigger,
      presetColors,
      historyColors,
    });
    return {
      popupVisible,
      size,
      computedColor,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<ColorPickerContext>(COLOR_PICKER_CONTEXT_KEY, {
      emits: () => {},
      popupVisible: ref(false),
      computedColor: ref(''),
      baseColor: ref(''),
      alpha: ref(100),
      format: ref('hex'),
      disabled: ref(false),
      disabledAlpha: ref(false),
      showHistory: ref(false),
      showPreset: ref(false),
      hideTrigger: ref(false),
      presetColors: ref([]),
      historyColors: ref([]),
    });
  };
  return {
    provide,
    inject,
  };
};
