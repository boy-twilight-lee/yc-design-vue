import { toRefs, provide, inject, ref, computed } from "vue";
const AVATAR_GROUP_CONTEXT_KEY = "radio-group-context";
const useContext = () => {
  const provide$1 = (props) => {
    const { shape, size, autoFixFontSize } = toRefs(props);
    provide(AVATAR_GROUP_CONTEXT_KEY, {
      shape,
      size,
      autoFixFontSize
    });
  };
  const inject$1 = (props) => {
    const { shape, size, autoFixFontSize } = toRefs(props);
    const {
      shape: _shape,
      size: _size,
      autoFixFontSize: _autoFixFontSize
    } = inject(AVATAR_GROUP_CONTEXT_KEY, {
      shape: ref("round"),
      size: ref(40),
      autoFixFontSize: ref(true)
    });
    return {
      shape: computed(() => {
        return shape.value ?? _shape.value;
      }),
      size: computed(() => {
        return size.value ?? _size.value;
      }),
      autoFixFontSize: computed(() => {
        return autoFixFontSize.value ?? _autoFixFontSize.value;
      })
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
