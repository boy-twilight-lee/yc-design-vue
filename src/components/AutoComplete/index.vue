<template>
  <yc-select
    :popup-visible="popupVisible"
    :options="curOptions"
    :popup-container="popupContainer"
    :trigger-props="triggerProps"
    :virtual-list-props="vistualListProps"
    :show-empty="false"
    hotkeys
    ref="selectRef"
    class="yc-auto-complete"
    @dropdown-scroll="(ev) => $emit('dropdown-scroll', ev)"
    @dropdown-reach-bottom="(ev) => $emit('dropdown-reach-bottom', ev)"
    @select="(v) => handleEvent('select', null, v as string)"
  >
    <template #trigger>
      <slot name="trigger">
        <yc-input
          v-if="type == 'input'"
          v-model="computedValue"
          :disabled="disabled"
          :allow-clear="allowClear"
          v-bind="$attrs"
          ref="inputRef"
          @input="(v, ev) => handleEvent('input', ev, v)"
          @change="(v) => $emit('change', v)"
          @clear="(ev) => handleEvent('clear', ev)"
          @keydown="(ev) => handleEvent('keydown', ev)"
          @focus="(ev) => handleEvent('focus', ev)"
          @blur="(ev) => handleEvent('blur', ev)"
        />
        <yc-textarea
          v-else
          v-model="computedValue"
          :disabled="disabled"
          :allow-clear="allowClear"
          enter-prevent
          show-mirror
          v-bind="$attrs"
          ref="inputRef"
          @input="(v, ev) => handleEvent('input', ev, v)"
          @change="(v) => $emit('change', v)"
          @clear="(ev) => handleEvent('clear', ev)"
          @keydown="(ev) => $emit('keydown', ev)"
          @focus="(ev) => handleEvent('focus', ev)"
          @blur="(ev) => handleEvent('blur', ev)"
        >
        </yc-textarea>
      </slot>
    </template>
    <template v-if="$slots.option" #option="scope">
      <slot name="option" v-bind="scope" />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </yc-select>
</template>

<script lang="ts" setup>
import { ref, toRefs, nextTick } from 'vue';
import {
  AutoCompleteProps,
  AutoCompleteEmits,
  AutoCompleteSlots,
  AutoCompleteExpose,
} from './type';
import { useControlValue } from '@shared/utils/control';
import { isObject } from '@shared/utils/is';
import {
  default as YcSelect,
  SelectOptionData,
  SelectInstance,
  SelectOption,
} from '@/components/Select';
import { default as YcTextarea, TextareaInstance } from '@/components/Textarea';
import { default as YcInput, InputInstance } from '@/components/Input';
defineOptions({
  name: 'AutoComplete',
});
const $slots = defineSlots<AutoCompleteSlots>();
const props = withDefaults(defineProps<AutoCompleteProps>(), {
  modelValue: undefined,
  defaultValue: '',
  disabled: false,
  data: () => [],
  popupContainer: undefined,
  strict: false,
  filterOption: undefined,
  triggerProps: () => {
    return {};
  },
  allowClear: false,
  isSelectSetValue: true,
  isSearch: true,
  type: 'input',
});
const emits = defineEmits<AutoCompleteEmits>();
const { modelValue, defaultValue, data, strict, isSelectSetValue, isSearch } =
  toRefs(props);
const { filterOption } = props;
// inputRef
const inputRef = ref<InputInstance | TextareaInstance>();
// 选择ref
const selectRef = ref<SelectInstance>();
// visible
const popupVisible = ref<boolean>(false);
// 计算
const computedValue = useControlValue<string>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', val);
  }
);
//当前的选项
const curOptions = ref<SelectOption[]>([]);
// 默认过滤函数
const defaultFilter = (inputValue: string, option: SelectOptionData) => {
  const labelValue = option.label as string;
  const label = strict.value ? labelValue : labelValue.toLowerCase();
  const value = strict.value ? inputValue : inputValue.toLowerCase();
  return label?.includes(value);
};
// 处理事件
const handleEvent = async (
  type: string,
  ev: Event | null,
  value: string = ''
) => {
  switch (type) {
    case 'input':
      {
        emits('input', value, ev as Event);
        emits('search', value);
        const oldOptions = [...data.value];
        await nextTick();
        if (
          JSON.stringify(oldOptions) == JSON.stringify(data.value) &&
          isSearch.value
        ) {
          curOptions.value = data.value.filter((v) => {
            const option = isObject(v) ? v : { label: v, value: v };
            return (
              (filterOption as Function)?.(value, option) ??
              defaultFilter(value, option)
            );
          });
        } else {
          curOptions.value = data.value;
        }
        popupVisible.value = !!curOptions.value.length;
      }
      break;
    case 'select':
      {
        popupVisible.value = false;
        if (isSelectSetValue.value) {
          computedValue.value = value;
        }
        emits('select', value);
      }
      break;
    case 'focus':
      {
        popupVisible.value = !!curOptions.value.length;
        emits('focus', ev as FocusEvent);
      }
      break;
    case 'blur':
      {
        popupVisible.value = false;
        emits('blur', ev as FocusEvent);
      }
      break;
    case 'clear':
      {
        computedValue.value = '';
        emits('clear', ev as MouseEvent);
      }
      break;
  }
};

defineExpose<AutoCompleteExpose>({
  focus() {
    inputRef.value?.focus();
  },
  blur() {
    inputRef.value?.blur();
  },
  getInputRef() {
    return inputRef.value?.getInputRef();
  },
  getMirrorRef() {
    return (inputRef.value as TextareaInstance)?.getMirrorRef();
  },
  updatePosition(x: number, y: number) {
    selectRef.value?.getPopupRef()?.updatePosition(x, y);
  },
});
</script>

<style lang="less">
@import './style/auto-complete.less';
</style>
