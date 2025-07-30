import { toRefs, provide, inject, ref } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const DROPDOWN_CONTEXT_KEY = "dropdown-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      popupVisible,
      defaultPopupVisible,
      hideOnSelect,
      theme,
      position: _position
    } = toRefs(props);
    const computedVisible = useControlValue(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits("update:popupVisible", val);
        emits("popup-visible-change", val);
      }
    );
    provide(DROPDOWN_CONTEXT_KEY, {
      theme,
      select: (value, ev) => {
        emits("select", value, ev);
        if (!hideOnSelect.value)
          return;
        computedVisible.value = false;
      }
    });
    return {
      computedVisible
    };
  };
  const inject$1 = () => {
    return inject(DROPDOWN_CONTEXT_KEY, {
      theme: ref("light"),
      select: () => {
      }
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
