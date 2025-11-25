<template>
  <yc-auto-complete
    v-model="computedValue"
    :popupVisible="popupVisible"
    :data="data"
    :disabled="disabled"
    :allow-clear="allowClear"
    :is-select-set-value="false"
    :is-search="false"
    :type="type"
    :trigger-props="{
      autoFitPopupWidth: type == 'input',
      autoSetPosition: type == 'textarea',
    }"
    class="yc-mention"
    ref="autoCompleteRef"
    v-bind="$attrs"
    @input="(v, ev) => handleEvent('input', ev, v)"
    @change="(v) => $emit('change', v as string)"
    @search="(v) => $emit('search', v)"
    @clear="(ev) => $emit('clear', ev as MouseEvent)"
    @select="(v) => handleEvent('select', null, v)"
    @focus="(ev) => handleEvent('focus', ev)"
    @blur="(ev) => handleEvent('blur', ev)"
    @keydown="(ev) => handleEvent('keydown', ev)"
  >
    <template v-if="$slots.option" #option="{ data }">
      <slot name="option" :data="data" />
    </template>
  </yc-auto-complete>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, computed, nextTick } from 'vue';
import {
  MentionProps,
  MentionEmits,
  MentionSlots,
  MentionExpose,
} from './type';
import { RecordType } from '@shared/type';
import { isNull, isArray, useControlValue } from '@shared/utils';
import useCursor from '@/components/Input/hooks/useCursor';
import { SelectOptionValue } from '@/components/Select';
import {
  default as YcAutoComplete,
  AutoCompleteInstance,
} from '@/components/AutoComplete';
defineOptions({
  name: 'Mention',
});
const $slots = defineSlots<MentionSlots>();
const props = withDefaults(defineProps<MentionProps>(), {
  modelValue: undefined,
  defaultValue: '',
  data: () => [],
  prefix: '@',
  split: '',
  type: 'input',
  disabled: false,
  allowClear: false,
});
const emits = defineEmits<MentionEmits>();
const {
  modelValue,
  defaultValue,
  allowClear,
  disabled,
  prefix,
  split,
  data,
  type: mentionType,
} = toRefs(props);
//   控制值
const computedValue = useControlValue<string>(
  modelValue,
  defaultValue.value,
  (val) => emits('update:modelValue', val)
);
// 记录cursor
const cursor = ref<number>(0);
// 可见性
const popupVisible = ref<boolean>(false);
// autoCompleteRef
const autoCompleteRef = ref<AutoCompleteInstance>();
// dom
const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>();
// prefix+选择的匹配
const prefixTexts = computed(() => {
  return isArray(prefix.value)
    ? prefix.value
        .map((ch) => data.value.map((op) => ch + (op as RecordType).value))
        .flat(1)
    : data.value.map((op) => prefix.value + (op as RecordType).value);
});
// 记录光标位置
const { recordCursor, getCursor } = useCursor(inputRef);
// 展示popup
const showPopup = async (value: string, ev: Event) => {
  await nextTick();
  // 记录光标
  recordCursor();
  // 计算光标
  const { selectionStart } = ev.target as HTMLInputElement;
  cursor.value = (getCursor() ?? selectionStart) as number;
  if (isNull(cursor.value) || !data.value.length) {
    return;
  }
  // 处理光标匹配的字符
  const ch = !cursor.value ? '' : value[cursor.value - 1];
  // 判断是否能显示
  popupVisible.value = isArray(prefix.value)
    ? prefix.value.includes(ch)
    : prefix.value == ch;
  if (!popupVisible.value || mentionType.value != 'textarea') {
    return;
  }
  const el = autoCompleteRef.value!.getMirrorRef();
  // 创建一个临时的范围对象
  const range = document.createRange();
  // 获取文本节点（纯文本div只有一个文本节点）
  const textNode = el!.childNodes[0];
  // 设置范围
  range.setStart(textNode, cursor.value);
  range.setEnd(textNode, cursor.value);
  // 获取位置信息
  const { bottom: y, left: x } = range.getBoundingClientRect();
  const { bottom } = inputRef.value!.getBoundingClientRect();
  // 设置popup的位置
  autoCompleteRef.value?.updatePosition(x, y > bottom ? bottom : y);
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
        showPopup(value, ev as Event);
      }
      break;
    case 'select':
      {
        emits('select', value as SelectOptionValue);
        popupVisible.value = false;
        const needSplit = prefixTexts.value.some((prefixText) => {
          return computedValue.value.includes(prefixText);
        });
        if (needSplit) {
          // 之前的值
          const preValue = computedValue.value.slice(0, cursor.value - 1);
          // 现在的值
          const prefixCh = computedValue.value.slice(
            cursor.value - 1,
            cursor.value
          );
          const curValue = computedValue.value.slice(cursor.value);
          computedValue.value =
            preValue + split.value + prefixCh + value + curValue;
        } else {
          computedValue.value =
            computedValue.value.slice(0, cursor.value) +
            value +
            computedValue.value.slice(cursor.value);
        }
      }
      break;
    case 'focus':
      {
        emits('focus', ev as FocusEvent);
      }
      break;
    case 'blur':
      {
        popupVisible.value = false;
        emits('blur', ev as FocusEvent);
      }
      break;
    case 'keydown': {
      const e = ev as KeyboardEvent;
      if (!['Backspace'].includes(e.key)) {
        return;
      }
      showPopup(
        e.key == 'Backspace' ? value : computedValue.value,
        ev as Event
      );
    }
  }
};
onMounted(() => {
  inputRef.value = autoCompleteRef.value?.getInputRef();
});

defineExpose<MentionExpose>({
  focus() {
    inputRef.value?.focus();
  },
  blur() {
    inputRef.value?.blur();
  },
});
</script>
