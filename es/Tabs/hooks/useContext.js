import { toRefs, ref, computed, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
import useControlValue from "../../_shared/utils/control.js";
const TABS_CONTEXT_KEY = "tabs-context";
const useContext = () => {
  const provide$1 = (props, emits, listRef) => {
    const { size } = getGlobalConfig(props);
    const {
      activeKey,
      defaultActiveKey,
      position,
      trigger,
      autoSwitch,
      type,
      editable,
      headerPadding,
      destoryOnHide,
      direction: _direction
    } = toRefs(props);
    const computedActiveKey = useControlValue(
      activeKey,
      defaultActiveKey.value,
      (val) => {
        emits("update:activeKey", val);
      }
    );
    const titleRefs = ref([]);
    const tabRefs = ref([]);
    const direction = computed(() => {
      if (["top", "bottom"].includes(position.value)) {
        return "horizontal";
      } else if (["left", "right"].includes(position.value)) {
        return "vertical";
      }
      return _direction.value;
    });
    provide(TABS_CONTEXT_KEY, {
      computedActiveKey,
      editable,
      direction,
      trigger,
      type,
      destoryOnHide,
      position,
      headerPadding,
      size,
      listRef,
      titleRefs,
      tabRefs,
      emits
    });
    return {
      computedActiveKey,
      size,
      direction,
      position,
      autoSwitch,
      titleRefs,
      tabRefs
    };
  };
  const inject$1 = () => {
    return inject(TABS_CONTEXT_KEY, {
      computedActiveKey: ref(""),
      editable: ref(false),
      headerPadding: ref(false),
      trigger: ref("click"),
      type: ref("line"),
      direction: ref("horizontal"),
      destoryOnHide: ref(false),
      position: ref("top"),
      size: ref("medium"),
      titleRefs: ref([]),
      listRef: ref(),
      tabRefs: ref([]),
      emits: () => {
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
