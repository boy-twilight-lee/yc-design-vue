import { toRefs, useSlots, computed, provide, ref, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../../_shared/utils/vue-utils.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
import _Image from "../Image.vue.js";
const IMAGE_CONTEXT_KEY = "image-context";
const useContext = () => {
  const provide$1 = (props, emits) => {
    const {
      srcList: _srcList,
      current,
      defaultCurrent,
      visible,
      defaultVisible
    } = toRefs(props);
    const slots = useSlots();
    const srcList = computed(() => {
      var _a;
      if (_srcList.value.length)
        return _srcList.value;
      if (!slots.default)
        return [];
      const images = findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        _Image.name
      );
      return images.map((image) => {
        var _a2;
        return (_a2 = image == null ? void 0 : image.props) == null ? void 0 : _a2.src;
      });
    });
    const computedCurrent = useControlValue(
      current,
      defaultCurrent.value,
      (val) => {
        emits("update:current", val);
        emits("change", val);
      }
    );
    const computedVisible = useControlValue(
      visible,
      defaultVisible.value,
      (val) => {
        emits("update:visible", val);
        emits("visible-change", val);
      }
    );
    const src = computed(() => srcList.value[computedCurrent.value]);
    const handleClick = (src2) => {
      const index = srcList.value.findIndex((item) => item == src2);
      computedCurrent.value = index;
      computedVisible.value = true;
    };
    provide(IMAGE_CONTEXT_KEY, {
      hasGroupFather: ref(true),
      handleClick
    });
    return {
      src,
      srcList,
      computedCurrent,
      computedVisible
    };
  };
  const inject$1 = () => {
    return inject(IMAGE_CONTEXT_KEY, {
      hasGroupFather: ref(false),
      handleClick: () => {
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
