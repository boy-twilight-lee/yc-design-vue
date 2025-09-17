import {
  ref,
  Ref,
  useSlots,
  computed,
  toRefs,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  ImagePreviewGroupProps as _ImagePreviewGroupProps,
  ImagePreviewGroupEmits,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue } from '@shared/utils/control';
import { findComponentsFromVnodes } from '@shared/utils/vue-utils';
import Image from '../Image.vue';

const IMAGE_CONTEXT_KEY = 'image-context';
type ImageContext = {
  hasGroupFather: Ref<boolean>;
  handleClick: (src: string) => void;
};
type ImagePreviewGroupProps = Required<_ImagePreviewGroupProps>;

export default () => {
  const provide = (props: RecordType, emits: ImagePreviewGroupEmits) => {
    const {
      srcList: _srcList,
      current,
      defaultCurrent,
      visible,
      defaultVisible,
    } = toRefs(props as ImagePreviewGroupProps);
    // 插槽
    const slots = useSlots();
    // srcList
    const srcList = computed<string[]>(() => {
      if (_srcList.value.length) return _srcList.value;
      if (!slots.default) return [];
      const images = findComponentsFromVnodes(
        slots.default?.() || [],
        Image.name as string
      );
      return images.map((image) => image?.props?.src) as string[];
    });
    // 当前的链接
    const computedCurrent = useControlValue<number>(
      current,
      defaultCurrent.value,
      (val) => {
        emits('update:current', val);
        emits('change', val);
      }
    );
    // visible
    const computedVisible = useControlValue<boolean>(
      visible,
      defaultVisible.value,
      (val) => {
        emits('update:visible', val);
        emits('visible-change', val);
      }
    );
    // src
    const src = computed(() => srcList.value[computedCurrent.value]);
    // 处理点击
    const handleClick = (src: string) => {
      const index = srcList.value.findIndex((item) => item == src);
      computedCurrent.value = index;
      computedVisible.value = true;
    };
    _provide<ImageContext>(IMAGE_CONTEXT_KEY, {
      hasGroupFather: ref(true),
      handleClick,
    });
    return {
      src,
      srcList,
      computedCurrent,
      computedVisible,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<ImageContext>(IMAGE_CONTEXT_KEY, {
      hasGroupFather: ref(false),
      handleClick: () => {},
    });
  };
  return {
    provide,
    inject,
  };
};
