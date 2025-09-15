import {
  ref,
  toRefs,
  Ref,
  useSlots,
  computed,
  provide as _provide,
  inject as _inject,
  CSSProperties,
  Slots,
} from 'vue';
import {
  DescriptionsAlign,
  DescData,
  DescriptionsProps as _DescriptionsProps,
} from '../type';
import { BreakpointName } from '@/components/Grid/type';
import { ObjectType, Required, Size } from '@shared/type';
import {
  getGlobalConfig,
  findComponentsFromVnodes,
  mediaQueryHandler,
  getBreakpointValue,
} from '@shared/utils';
import YcDescriptionsItem from '../DescriptionsItem.vue';

const DESCRIPTIONS_CONTEXT_KEY = 'radio-group-context';
type DescriptionsContext = {
  labelStyle: Ref<CSSProperties>;
  valueStyle: Ref<CSSProperties>;
  align: Ref<DescriptionsAlign>;
  bordered: Ref<boolean>;
  size: Ref<Size>;
  slots: Slots;
};
type DescriptionsProps = Required<_DescriptionsProps>;

export default () => {
  const provide = (props: ObjectType) => {
    const {
      data: _data,
      column: _column,
      layout,
      labelStyle,
      valueStyle,
      bordered,
      align,
    } = toRefs(props as DescriptionsProps);
    // 获取全局配置
    const { size } = getGlobalConfig(props);
    // 获取插槽内item
    const slots = useSlots();
    // 查找所有的descriptionItems
    const data = computed(() => {
      const nodes = findComponentsFromVnodes(
        slots.default?.() || [],
        YcDescriptionsItem.name as string
      );
      if (!nodes.length) return _data.value;
      return nodes.map((node) => {
        return {
          label: node.children?.label ?? node.props?.label,
          value: node.children?.default,
          span: node.props?.span,
        } as DescData;
      });
    });
    // 断电
    const breakpoint = ref<BreakpointName>('xxl');
    // column
    const column = computed(() => {
      return getBreakpointValue(breakpoint.value, _column.value, 3) as number;
    });
    // 媒体查询器
    mediaQueryHandler((name) => {
      breakpoint.value = name;
    });
    _provide<DescriptionsContext>(DESCRIPTIONS_CONTEXT_KEY, {
      size,
      bordered,
      align,
      labelStyle,
      valueStyle,
      slots,
    });
    return {
      data,
      size,
      column,
      layout,
    };
  };

  const inject = () => {
    return _inject<DescriptionsContext>(DESCRIPTIONS_CONTEXT_KEY, {
      size: ref('medium'),
      bordered: ref(false),
      align: ref('left'),
      labelStyle: ref({}),
      valueStyle: ref({}),
      slots: {},
    });
  };

  return {
    provide,
    inject,
  };
};
