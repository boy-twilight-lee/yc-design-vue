import { toRefs, ref, computed, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isArray } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const TIME_PICKER_CONTEXT_KEY = "time-picker-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      modelValue,
      defaultValue,
      popupVisible,
      defaultPopupVisible,
      disabled,
      readonly,
      allowClear,
      format,
      type,
      disableConfirm,
      hideDisabledOptions,
      step
    } = toRefs(props);
    const { disabledHours, disabledMinutes, disabledSeconds } = props;
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits("update:modelValue", val);
      }
    );
    const curIndex = ref(0);
    const curValue = ref([]);
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    const showClearBtn = computed(() => {
      const base = !disabled.value && !readonly.value && allowClear.value;
      if (isArray(computedValue.value)) {
        return computedValue.value[0] && computedValue.value[1] && base;
      } else {
        return computedValue.value && base;
      }
    });
    const timeColumn = computed(() => {
      const formatStr = format.value.toLowerCase().replace(/[^a-z]/g, "");
      const units = [];
      if (formatStr.includes("h"))
        units.push("hour");
      if (formatStr.includes("m"))
        units.push("minute");
      if (formatStr.includes("s"))
        units.push("second");
      return units.length > 0 ? units : ["hour", "minute", "second"];
    });
    const timeColumnCells = computed(() => {
      return timeColumn.value.map((unit) => {
        var _a;
        const unitStep = ((_a = step.value) == null ? void 0 : _a[unit]) || 1;
        const cellCount = Math.ceil((unit === "hour" ? 24 : 60) / unitStep);
        return {
          unit,
          cells: Array.from({ length: cellCount }, (_, i) => {
            const value = i * unitStep;
            return {
              label: `${value <= 9 ? "0" : ""}${value}`,
              value
            };
          })
        };
      });
    });
    const inputRefs = ref([]);
    provide(TIME_PICKER_CONTEXT_KEY, {
      computedValue,
      computedVisible,
      timeColumn,
      timeColumnCells,
      curValue,
      format,
      type,
      curIndex,
      inputRefs,
      disableConfirm,
      hideDisabledOptions,
      disabledHours,
      disabledMinutes,
      disabledSeconds
    });
    return {
      computedValue,
      computedVisible,
      showClearBtn,
      curValue,
      readonly,
      disabled,
      type,
      curIndex,
      inputRefs,
      format
    };
  };
  const inject$1 = () => {
    return inject(TIME_PICKER_CONTEXT_KEY, {
      type: ref("time"),
      format: ref("HH:mm:ss"),
      curValue: ref([]),
      computedValue: ref(""),
      computedVisible: ref(false),
      curIndex: ref(0),
      timeColumn: ref([]),
      timeColumnCells: ref([]),
      inputRefs: ref([]),
      disableConfirm: ref(false),
      hideDisabledOptions: ref(false),
      disabledHours: () => [],
      disabledMinutes: () => [],
      disabledSeconds: () => []
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
