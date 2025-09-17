import {
  ref,
  toRefs,
  Ref,
  computed,
  useSlots,
  provide as _provide,
  inject as _inject,
} from 'vue';
import { AnchorProps as _AnchorProps } from '../type';
import { RecordType, Required } from '@shared/type';
import { getElement, findFirstScrollableParent } from '@shared/utils/dom';
import { findComponentsFromVnodes } from '@shared/utils/vue-utils';
import { isUndefined } from '@shared/utils/is';
import AnchorLink from '../AnchorLink.vue';

const ANCHOR_CONTEXT_KEY = 'anchor-context';
type AnchorContext = {
  changeHash: Ref<boolean>;
  smooth: Ref<boolean>;
  boundary: Ref<string | number>;
  lineLess: Ref<boolean>;
  curHref: Ref<string>;
  scrollContainer: Ref<HTMLElement | undefined>;
};
type AnchorProps = Required<_AnchorProps>;

export default () => {
  const provide = (
    props: RecordType,
    listRef: Ref<HTMLDivElement | undefined>
  ) => {
    const {
      changeHash,
      smooth,
      boundary,
      lineLess,
      scrollContainer: _scrollContainer,
    } = toRefs(props as AnchorProps);
    // 插槽
    const slots = useSlots();
    // 当前的link
    const curHref = ref<string>('');
    // hrefs
    const hrefs = computed(() => {
      const nodes = findComponentsFromVnodes(
        slots.default?.() || [],
        AnchorLink.name as string
      );
      return nodes.map((node) => node.props?.href);
    });
    // 滚动容器
    const scrollContainer = computed(() => {
      return isUndefined(_scrollContainer.value)
        ? findFirstScrollableParent(listRef.value)
        : getElement(_scrollContainer.value);
    });
    _provide<AnchorContext>(ANCHOR_CONTEXT_KEY, {
      changeHash,
      smooth,
      boundary,
      lineLess,
      curHref,
      scrollContainer,
    });
    return {
      hrefs,
      curHref,
      changeHash,
      smooth,
      boundary,
      lineLess,
      scrollContainer,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<AnchorContext>(ANCHOR_CONTEXT_KEY, {
      changeHash: ref(true),
      smooth: ref(true),
      boundary: ref('start'),
      curHref: ref(''),
      lineLess: ref(false),
      scrollContainer: ref(),
    });
  };
  return {
    provide,
    inject,
  };
};
