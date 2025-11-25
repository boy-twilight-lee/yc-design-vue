import {
  computed,
  ref,
  Ref,
  toRefs,
  reactive,
  Reactive,
  onBeforeUnmount,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  StepsProps as _StepsProps,
  StepsEmits,
  StepStatus,
  StepType,
} from '../type';
import { Direction, Required, RecordType } from '@shared/type';
import { isUndefined, useControlValue, nanoid } from '@shared/utils';

const STEPS_CONTEXT_KEY = 'steps-context';
type StepsContext = {
  stepMap: Reactive<Map<string, string>>;
  computedCurrent: Ref<number>;
  lineLess: Ref<boolean>;
  direction: Ref<Direction>;
  labelPlacement: Ref<Direction>;
  statusArr: Ref<Ref<StepStatus>[]>;
  status: Ref<StepStatus>;
  small: Ref<boolean>;
  type: Ref<StepType>;
  changeable: Ref<boolean>;
  emits: StepsEmits;
};
type StepsProps = Required<_StepsProps>;

export default function useStepsContext() {
  const provide = (props: RecordType, emits: StepsEmits) => {
    const {
      status,
      current,
      defaultCurrent,
      lineLess,
      labelPlacement: _labelPlacement,
      direction: _direction,
      small,
      type,
      changeable,
    } = toRefs(props as StepsProps);
    // current
    const computedCurrent = useControlValue<number>(
      current,
      defaultCurrent.value,
      (val) => {
        emits('update:current', val);
      }
    );
    // direction
    const direction = computed(() => {
      if (['default', 'dot'].includes(type.value)) {
        return _direction.value;
      } else {
        return 'horizontal';
      }
    });
    // labelPlacement
    const labelPlacement = computed(() => {
      if (type.value == 'default' && direction.value == 'horizontal') {
        return _labelPlacement.value;
      } else if (type.value == 'dot') {
        return direction.value == 'vertical' ? 'horizontal' : 'vertical';
      } else {
        return 'horizontal';
      }
    });
    // StepMap
    const stepMap = reactive<Map<string, string>>(new Map());
    // statusArr
    const statusArr = ref<Ref<StepStatus>[]>([]);
    // 上下文
    const context = {
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
      emits,
    };
    _provide<StepsContext>(STEPS_CONTEXT_KEY, context);
    return context;
  };
  const inject = (props: RecordType) => {
    const { status: _status } = toRefs(props);
    const injection = _inject<StepsContext>(STEPS_CONTEXT_KEY, {
      stepMap: reactive(new Map()),
      computedCurrent: ref(0),
      lineLess: ref(false),
      direction: ref('horizontal'),
      status: ref('process'),
      statusArr: ref([]),
      small: ref(false),
      type: ref('default'),
      changeable: ref(false),
      labelPlacement: ref('horizontal'),
      emits: () => {},
    });
    // 收集step
    const collectStep = () => {
      const {
        stepMap,
        computedCurrent,
        statusArr,
        status: injectStatus,
      } = injection;
      const id = nanoid();
      stepMap.set(id, id);
      // 当前的step
      const curStep = computed(() => {
        return [...stepMap.values()].findIndex((item) => item == id) + 1;
      });
      // status
      const status = computed(() => {
        if (!isUndefined(_status.value)) {
          return _status.value;
        }
        if (curStep.value < computedCurrent.value) {
          return 'finish';
        } else if (curStep.value == computedCurrent.value) {
          return injectStatus.value ?? 'process';
        } else {
          return 'wait';
        }
      });
      // 获取下一个status
      const nextStatus = computed(() => statusArr.value[curStep.value]?.value);
      // 收集
      statusArr.value[curStep.value - 1] = status;
      // 移除
      onBeforeUnmount(() => {
        stepMap.delete(id);
        statusArr.value.splice(curStep.value - 1, 1);
      });
      return {
        curStep,
        status,
        nextStatus,
      };
    };
    // 收集
    const { curStep, status, nextStatus } = collectStep();
    return {
      ...injection,
      curStep,
      status,
      nextStatus,
    };
  };
  return {
    provide,
    inject,
  };
}
