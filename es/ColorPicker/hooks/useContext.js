import { toRefs, ref, provide, inject } from "vue";
import { parseColor } from "../../_shared/utils/color.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
import useControlValue from "../../_shared/utils/control.js";
const COLOR_PICKER_CONTEXT_KEY = "color-picker-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
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
      hideTrigger
    } = toRefs(props);
    const { size } = getGlobalConfig(props);
    const alpha = ref(100);
    const computedColor = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      },
      (val) => {
        const color = parseColor(val);
        const a = color.getAlpha();
        if (a != alpha.value) {
          alpha.value = a * 100;
        }
        if (format.value == "hex") {
          return a == 1 ? color.toHexString() : color.toHex8String();
        } else {
          return color.toRgbString();
        }
      }
    );
    const baseColor = ref(computedColor.value);
    const popupVisible = ref(false);
    provide(COLOR_PICKER_CONTEXT_KEY, {
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
      historyColors
    });
    return {
      popupVisible,
      size,
      computedColor
    };
  };
  const inject$1 = () => {
    return inject(COLOR_PICKER_CONTEXT_KEY, {
      emits: () => {
      },
      popupVisible: ref(false),
      computedColor: ref(""),
      baseColor: ref(""),
      alpha: ref(100),
      format: ref("hex"),
      disabled: ref(false),
      disabledAlpha: ref(false),
      showHistory: ref(false),
      showPreset: ref(false),
      hideTrigger: ref(false),
      presetColors: ref([]),
      historyColors: ref([])
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
