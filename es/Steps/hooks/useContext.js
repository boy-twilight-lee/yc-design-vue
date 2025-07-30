import { toRefs, computed, reactive, ref, provide, inject, onBeforeUnmount } from "vue";
import { nanoid } from "../../node_modules/nanoid/index.browser.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isUndefined } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
const STEPS_CONTEXT_KEY = "card-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      status,
      current,
      defaultCurrent,
      lineLess,
      labelPlacement: _labelPlacement,
      direction: _direction,
      small,
      type,
      changeable
    } = toRefs(props);
    const computedCurrent = useControlValue(
      current,
      defaultCurrent.value,
      (val) => {
        emits("update:current", val);
      }
    );
    const direction = computed(() => {
      if (["default", "dot"].includes(type.value)) {
        return _direction.value;
      } else {
        return "horizontal";
      }
    });
    const labelPlacement = computed(() => {
      if (type.value == "default" && direction.value == "horizontal") {
        return _labelPlacement.value;
      } else if (type.value == "dot") {
        return direction.value == "vertical" ? "horizontal" : "vertical";
      } else {
        return "horizontal";
      }
    });
    const stepMap = reactive(/* @__PURE__ */ new Map());
    const statusArr = ref([]);
    provide(STEPS_CONTEXT_KEY, {
      stepMap,
      computedCurrent,
      lineLess,
      direction,
      status,
      statusArr,
      small,
      type,
      changeable,
      labelPlacement,
      emits
    });
    return {
      direction,
      labelPlacement,
      type
    };
  };
  const inject$1 = (props) => {
    const { status: _status } = toRefs(props);
    const injection = inject(STEPS_CONTEXT_KEY, {
      stepMap: reactive(/* @__PURE__ */ new Map()),
      computedCurrent: ref(0),
      lineLess: ref(false),
      direction: ref("horizontal"),
      status: ref("process"),
      statusArr: ref([]),
      small: ref(false),
      type: ref("default"),
      changeable: ref(false),
      labelPlacement: ref("horizontal"),
      emits: () => {
      }
    });
    const collectStep = () => {
      const {
        stepMap,
        computedCurrent,
        statusArr,
        status: injectStatus
      } = injection;
      const id = nanoid();
      stepMap.set(id, id);
      const curStep2 = computed(() => {
        return [...stepMap.values()].findIndex((item) => item == id) + 1;
      });
      const status2 = computed(() => {
        if (!isUndefined(_status.value)) {
          return _status.value;
        }
        if (curStep2.value < computedCurrent.value) {
          return "finish";
        } else if (curStep2.value == computedCurrent.value) {
          return injectStatus.value ?? "process";
        } else {
          return "wait";
        }
      });
      const nextStatus2 = computed(() => {
        var _a;
        return (_a = statusArr.value[curStep2.value]) == null ? void 0 : _a.value;
      });
      statusArr.value[curStep2.value - 1] = status2;
      onBeforeUnmount(() => {
        stepMap.delete(id);
        statusArr.value.splice(curStep2.value - 1, 1);
      });
      return {
        curStep: curStep2,
        status: status2,
        nextStatus: nextStatus2
      };
    };
    const { curStep, status, nextStatus } = collectStep();
    return {
      ...injection,
      curStep,
      status,
      nextStatus
    };
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
