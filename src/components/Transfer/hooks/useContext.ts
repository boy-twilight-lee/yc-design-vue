import {
  ref,
  toRefs,
  Ref,
  computed,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  TransferEmits,
  TransferItem,
  TransferItemValue,
  TransferProps as _TransferProps,
} from '../type';
import { InputProps } from '@/components/Input';
import { Required, RecordType } from '@shared/type';
import { useControlValue } from '@shared/utils';

const TRANSFER_CONTEXT_KEY = 'transfer-context';
type TransferContext = {
  computedValue: Ref<TransferItemValue[]>;
  computedSelected: Ref<TransferItemValue[]>;
  targetChecked: Ref<TransferItemValue[]>;
  sourceChecked: Ref<TransferItemValue[]>;
  sourceOptions: Ref<TransferItem[]>;
  targetOptions: Ref<TransferItem[]>;
  showSelectAll: Ref<boolean>;
  disabled: Ref<boolean>;
  title: Ref<string[]>;
  sourceInputSearchProps: Ref<InputProps>;
  targetInputSearchProps: Ref<InputProps>;
  showSearch: Ref<boolean>;
  oneWay: Ref<boolean>;
  simple: Ref<boolean>;
  emits: TransferEmits;
};
type TransferProps = Required<_TransferProps>;

export default function useTransferContext() {
  const provide = (props: RecordType, emits: TransferEmits) => {
    const {
      modelValue,
      defaultValue,
      selected,
      defaultSelected,
      data,
      oneWay,
      simple,
      sourceInputSearchProps,
      targetInputSearchProps,
      showSearch,
      showSelectAll,
      disabled,
      title,
    } = toRefs(props as TransferProps);
    // dataMap
    const dataMap = computed(() => {
      return Object.fromEntries(data.value.map((item) => [item.value, item]));
    });
    // 计算的value
    const computedValue = useControlValue<TransferItemValue[]>(
      modelValue,
      defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
        emits('change', val);
      }
    );
    // target
    const computedValueMap = computed(() => {
      return new Map(
        (computedValue.value as TransferItemValue[]).map((item) => {
          return [item, item];
        })
      );
    });
    // 选中的value
    const computedSelected = useControlValue<TransferItemValue[]>(
      selected,
      defaultSelected.value,
      (val) => {
        emits('update:selected', val);
      }
    );
    // 源options
    const sourceOptions = computed(() => {
      return data.value.filter((item) => {
        return !computedValueMap.value.has(item.value as string);
      });
    });
    // 目标options
    const targetOptions = computed(() => {
      return (computedValue.value as string[]).map((item) => {
        return dataMap.value[item];
      });
    });
    // 数据checked
    const sourceChecked = computed(() => {
      return computedSelected.value.filter((item) => {
        return !computedValueMap.value.has(item);
      });
    });
    // 目标checked
    const targetChecked = computed(() => {
      return computedSelected.value.filter((item) => {
        return computedValueMap.value.has(item);
      });
    });
    // 上下文
    const context: TransferContext = {
      computedValue,
      computedSelected,
      targetChecked,
      sourceChecked,
      sourceOptions,
      targetOptions,
      oneWay,
      simple,
      sourceInputSearchProps,
      targetInputSearchProps,
      showSearch,
      showSelectAll,
      disabled,
      title,
      emits,
    };
    // 提供给子组件
    _provide<TransferContext>(TRANSFER_CONTEXT_KEY, context);
    return context;
  };
  const inject = () => {
    // 接收的值
    return _inject<TransferContext>(TRANSFER_CONTEXT_KEY, {
      computedValue: ref([]),
      computedSelected: ref([]),
      targetChecked: ref([]),
      sourceChecked: ref([]),
      sourceOptions: ref([]),
      targetOptions: ref([]),
      disabled: ref(false),
      oneWay: ref(false),
      simple: ref(false),
      title: ref([]),
      showSearch: ref(false),
      showSelectAll: ref(false),
      sourceInputSearchProps: ref({}),
      targetInputSearchProps: ref({}),
      emits: () => {},
    });
  };
  return {
    provide,
    inject,
  };
}
