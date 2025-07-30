import { toRefs, useSlots, provide, inject, ref, computed } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const COLLAPSE_CONTEXT_KEY = "collapse-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      activeKey,
      defaultActiveKey,
      accordion,
      expandIconPosition,
      showExpandIcon,
      destroyOnHide
    } = toRefs(props);
    const slots = useSlots();
    const computedActiveKey = useControlValue(
      activeKey,
      defaultActiveKey.value,
      (val) => {
        emits("update:activekey", val);
        emits("change", val);
      }
    );
    provide(COLLAPSE_CONTEXT_KEY, {
      computedActiveKey,
      accordion,
      expandIconPosition,
      showExpandIcon,
      destroyOnHide,
      slots
    });
  };
  const inject$1 = (props) => {
    const { showExpandIcon, destroyOnHide } = toRefs(
      props
    );
    const injection = inject(COLLAPSE_CONTEXT_KEY, {
      computedActiveKey: ref([]),
      accordion: ref(false),
      expandIconPosition: ref("left"),
      showExpandIcon: ref(true),
      destroyOnHide: ref(false),
      slots: {}
    });
    const { showExpandIcon: _showExpandIcon, destroyOnHide: _destroyOnHide } = injection;
    return {
      ...injection,
      showExpandIcon: computed(() => {
        return showExpandIcon.value ?? _showExpandIcon.value;
      }),
      destroyOnHide: computed(() => {
        return destroyOnHide.value ?? _destroyOnHide.value;
      })
    };
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  COLLAPSE_CONTEXT_KEY,
  useContext as default
};
