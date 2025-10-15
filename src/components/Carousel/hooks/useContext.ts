import {
  ref,
  toRefs,
  Ref,
  computed,
  useSlots,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  CarouselProps as _CarouselProps,
  CarouselEmits,
  AnimationName,
  ShowArrow,
} from '../type';
import { ClassName, Direction, RecordType, Required } from '@shared/type';
import {
  sleep,
  useControlValue,
  findComponentsFromVnodes,
} from '@shared/utils';
import CarouselItem from '../CarouselItem.vue';

const CAROUSEL_CONTEXT_KEY = 'carousel-context';
type CarouselContext = {
  length: Ref<number>;
  computedCurrent: Ref<number>;
  transitionTimingFunction: Ref<string>;
  animationName: Ref<AnimationName>;
  moveType: Ref<MoveType>;
  preIndex: Ref<number>;
  moveSpeed: Ref<number>;
  direction: Ref<Direction>;
  showArrow: Ref<ShowArrow>;
  arrowClass: Ref<ClassName>;
  getValidIndex: (val: number) => number;
};
type MoveType = 'positive' | 'negative';
type CarouselProps = Required<_CarouselProps>;

export default function useCarouselContext() {
  const provide = (props: RecordType, emits: CarouselEmits) => {
    const {
      current,
      defaultCurrent,
      transitionTimingFunction,
      animationName,
      moveSpeed,
      showArrow,
      arrowClass,
      autoPlay,
      direction: _direction,
    } = toRefs(props as CarouselProps);
    // 插槽对象
    const slots = useSlots();
    // 插槽元素
    const carouselItems = computed(() => {
      return findComponentsFromVnodes(
        slots.default?.() || [],
        CarouselItem.name as string
      );
    });
    const direction = computed(() => {
      return animationName.value == 'card' ? 'vertical' : _direction.value;
    });
    // 总共的轮播图数量
    const length = computed(() => {
      return carouselItems.value.length;
    });
    // 受控值
    const computedCurrent = useControlValue<number>(
      current,
      defaultCurrent.value,
      (val) => {
        emits('update:current', val);
      }
    );
    // 移动方向
    const moveType = ref<MoveType>('positive');
    // preIndex
    const preIndex = ref<number>(computedCurrent.value);
    // 动画计时器
    let flag: boolean = false;
    // 获取合法的index
    const getValidIndex = (val: number) => {
      if (!val) {
        return length.value - 1;
      }
      return val > length.value ? val % length.value : val;
    };
    // 滚动
    const slideTo = async (targetIndex: number) => {
      if (flag || targetIndex == computedCurrent.value) {
        return;
      }
      moveType.value =
        targetIndex > computedCurrent.value ? 'positive' : 'negative';
      preIndex.value = computedCurrent.value;
      computedCurrent.value = getValidIndex(targetIndex);
      emits('change', computedCurrent.value, preIndex.value, true);
      flag = true;
      await sleep(moveSpeed.value);
      flag = false;
    };
    // 上下文
    const context = {
      length,
      computedCurrent,
      transitionTimingFunction,
      animationName,
      moveSpeed,
      direction,
      showArrow,
      arrowClass,
      moveType,
      preIndex,
      getValidIndex,
    };
    // 提供给子组件
    _provide<CarouselContext>(CAROUSEL_CONTEXT_KEY, context);
    return {
      ...context,
      carouselItems,
      autoPlay,
      direction,
      slideTo,
    };
  };
  const inject = () => {
    return _inject<CarouselContext>(CAROUSEL_CONTEXT_KEY, {
      length: ref(0),
      computedCurrent: ref(1),
      transitionTimingFunction: ref('cubic-bezier(0.34, 0.69, 0.1, 1)'),
      animationName: ref('slide'),
      moveSpeed: ref(500),
      direction: ref('horizontal'),
      showArrow: ref('always'),
      arrowClass: ref(''),
      preIndex: ref(0),
      moveType: ref('positive'),
      getValidIndex: () => 0,
    });
  };
  return {
    provide,
    inject,
  };
}
