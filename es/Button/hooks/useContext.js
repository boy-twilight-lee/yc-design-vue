import { toRefs, provide, inject, ref, computed } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isUndefined } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
const BUTTON_GROUP_CONTEXT_KEY = "button-group-context";
const useContext = () => {
  const provide$1 = (props) => {
    const { type, status, shape, disabled } = toRefs(props);
    const { size } = getGlobalConfig(props);
    provide(BUTTON_GROUP_CONTEXT_KEY, {
      type,
      status,
      size,
      shape,
      disabled
    });
  };
  const inject$1 = (props) => {
    const { size: globalSize } = getGlobalConfig(props);
    const { type, status, shape, size, disabled } = toRefs(
      props
    );
    const {
      type: _type,
      status: _status,
      shape: _shape,
      disabled: _disabled,
      size: _size
    } = inject(BUTTON_GROUP_CONTEXT_KEY, {
      type: ref("secondary"),
      status: ref("normal"),
      shape: ref("square"),
      disabled: ref(false)
    });
    const getField = (value, injectValue, globalValue) => {
      if (!isUndefined(value)) {
        return value;
      }
      if (isUndefined(globalValue)) {
        return injectValue;
      }
      return !isUndefined(injectValue) ? injectValue : globalValue;
    };
    return {
      disabled: computed(() => disabled.value ?? _disabled.value),
      type: computed(() => type.value ?? _type.value),
      status: computed(() => status.value ?? _status.value),
      shape: computed(() => shape.value ?? _shape.value),
      size: computed(
        () => getField(size.value, _size == null ? void 0 : _size.value, globalSize.value)
      )
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
