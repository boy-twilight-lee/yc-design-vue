<template>
  <div
    :class="[
      'yc-input-tag',
      `yc-input-tag-size-${size}`,
      {
        'yc-input-tag-no-value': !computedValue.length,
        'yc-input-tag-disabled': disabled,
        'yc-input-tag-error': error,
        'yc-input-tag-has-suffix': $slots.suffix || showClearBtn,
      },
    ]"
    @mousedown="(e) => e.preventDefault()"
    @click="inputRef?.focus()"
  >
    <!-- prefix-icon -->
    <prevent-focus v-if="$slots.prefix" class="yc-input-tag-prefix">
      <slot name="prefix" />
    </prevent-focus>
    <!-- mirror -->
    <div class="yc-input-tag-mirror" ref="mirrorRef">
      {{ computedInputValue || (computedValue.length ? '' : placeholder) }}
    </div>
    <!-- taglist -->
    <transition-group
      name="input-tag-zoom"
      tag="div"
      class="yc-input-tag-inner"
    >
      <template v-for="item in curList.visibleList" :key="item?.[fieldKey.id]">
        <slot name="tag" :tag="item">
          <yc-tag
            :closable="item[fieldKey.closable]"
            :bordered="item[fieldKey.tagProps].bordered"
            :nowrap="item[fieldKey.tagProps].nowrap"
            :checked="false"
            @close="(ev) => handleEvent('close', ev, item?.[fieldKey.id])"
          >
            {{ formatTag ? formatTag(item) : item[fieldKey.label] }}
          </yc-tag>
        </slot>
      </template>
      <yc-tag
        v-if="maxTagCount > 0 && computedValue.length > maxTagCount"
        :nowrap="tagNowrap"
        :checked="false"
        bordered
        key="yc-select-value-tag"
      >
        +{{ curList.hideList.length }}...
      </yc-tag>
      <!-- input -->
      <input
        v-model="computedInputValue"
        key="yc-input-tag-input"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="computedValue.length ? '' : placeholder"
        :style="{
          width: valueToPx(width),
        }"
        class="yc-input-tag-input"
        ref="inputRef"
        @input="handleEvent('input', $event)"
        @change="handleEvent('input-value-change', $event)"
        @focus="handleEvent('focus', $event)"
        @blur="handleEvent('blur', $event)"
        @keydown.enter="handleEvent('pressEnter', $event)"
        @keydown.delete="handleEvent('remove', $event)"
      />
    </transition-group>
    <!-- suffix-icon -->
    <prevent-focus
      v-if="$slots.suffix || showClearBtn"
      class="yc-input-tag-suffix"
    >
      <!-- clear-btn -->
      <icon-button
        v-if="showClearBtn"
        class="yc-input-tag-clear-button"
        @click="handleEvent('clear', $event)"
      />
      <slot name="suffix" />
    </prevent-focus>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import {
  InputTagProps,
  InputTagValue,
  TagData,
  InputTagEmits,
  InputTagSlots,
  InputTagExpose,
} from './type';
import { ObjectType } from '@shared/type';
import { nanoid } from 'nanoid';
import { useElementSize } from '@vueuse/core';
import {
  useControlValue,
  getGlobalConfig,
  isBoolean,
  isObject,
  valueToPx,
} from '@shared/utils';
import YcTag from '@/components/Tag';
import { PreventFocus, IconButton } from '@shared/components';
defineOptions({
  name: 'InputTag',
});
defineSlots<InputTagSlots>();
const props = withDefaults(defineProps<InputTagProps>(), {
  modelValue: undefined,
  defaultValue: () => [],
  inputValue: undefined,
  defaultInputValue: '',
  placeholder: '',
  disabled: false,
  error: false,
  readonly: false,
  allowClear: false,
  size: undefined,
  maxTagCount: 0,
  retainInputValue: false,
  uniqueValue: false,
  tagNowrap: false,
  fieldNames: () => {
    return {
      id: 'id',
      label: 'label',
      value: 'value',
      closeable: 'closeable',
      tagProps: 'tagProps',
    };
  },
  allowCreate: true,
});
const emits = defineEmits<InputTagEmits>();
const {
  modelValue,
  defaultValue,
  inputValue,
  defaultInputValue,
  allowClear,
  disabled,
  readonly,
  uniqueValue,
  retainInputValue,
  allowCreate,
  maxTagCount,
  fieldNames,
  tagNowrap,
} = toRefs(props);
// 获取全局配置
const { size } = getGlobalConfig(props);
// 输入实例
const inputRef = ref<HTMLInputElement>();
// div的ref
const mirrorRef = ref<HTMLDivElement>();
// fieldKey
const fieldKey = computed(() => {
  return Object.fromEntries(
    ['id', 'label', 'value', 'closable', 'tagProps'].map((key) => [
      key,
      fieldNames.value[key] ?? key,
    ])
  );
});
// 获取miorr的宽度用于模拟
const { width } = useElementSize(mirrorRef, undefined, {
  box: 'border-box',
});
// 受控值
const computedValue = useControlValue<InputTagValue>(
  modelValue,
  defaultValue.value,
  (val) => emits('update:modelValue', val),
  (val: InputTagValue) => {
    const { id, label, value, closable, tagProps } = fieldKey.value;
    return val.map((v) => {
      if (isObject(v)) {
        const val = v as ObjectType;
        val[id] = val[id] ?? nanoid();
        val[closable] = val[closable] ?? true;
        val[tagProps] = val[tagProps] ?? {
          bordered: true,
          nowrap: tagNowrap.value,
        };
        return v;
      }
      const tagData: ObjectType = {};
      tagData[id] = nanoid();
      tagData[label] = v;
      tagData[value] = v;
      tagData[closable] = true;
      tagData[tagProps] = {
        bordered: true,
        nowrap: tagNowrap.value,
      };
      return tagData;
    });
  }
);
// 输入值
const computedInputValue = useControlValue<string>(
  inputValue,
  defaultInputValue.value,
  (val) => {
    emits('update:inputValue', val);
  }
);
// 当前展示的list
const curList = computed(() => {
  const visibleList =
    maxTagCount.value > 0
      ? computedValue.value.slice(0, maxTagCount.value)
      : computedValue.value;
  return {
    visibleList: visibleList as ObjectType,
    hideList: computedValue.value.slice(maxTagCount.value),
  };
});
// 是否展示清除按钮
const showClearBtn = computed(
  () =>
    allowClear.value &&
    !disabled.value &&
    !readonly.value &&
    computedValue.value.length
);
// 清除输入值
const clearInputValue = () => {
  // 是否保留值
  if (
    (isBoolean(retainInputValue.value) && retainInputValue.value) ||
    (isObject(retainInputValue.value) && retainInputValue.value.create)
  ) {
    return;
  }
  computedInputValue.value = '';
};
// 处理inputTag的事件
const handleEvent = (type: string, e: Event, id?: string) => {
  const inputVal = computedInputValue.value?.trim();
  switch (type) {
    case 'input':
    case 'input-value-change':
      {
        const { value } = e.target as HTMLInputElement;
        emits(type as keyof InputTagEmits, value, e as Event);
      }
      break;
    case 'focus':
    case 'blur':
      {
        emits(type as keyof InputTagEmits, e as FocusEvent);
        if (type == 'blur') {
          clearInputValue();
        }
      }
      break;
    case 'pressEnter':
      {
        const { label, value, id } = fieldKey.value;
        const isUnique =
          !uniqueValue.value ||
          (uniqueValue.value &&
            !computedValue.value.find(
              (item) => ((item as ObjectType)?.[value] ?? item) == inputVal
            ));

        if (!inputVal || !allowCreate.value || !isUnique) {
          return;
        }
        const tagData: ObjectType = {};
        tagData[id] = nanoid();
        tagData[label] = computedInputValue.value;
        tagData[value] = computedInputValue.value;
        computedValue.value = [...computedValue.value, tagData];
        emits('press-enter', e as KeyboardEvent);
        clearInputValue();
      }
      break;
    case 'close':
      {
        const arr = computedValue.value as TagData[];
        const value = arr.find((v) => v.id == id);
        computedValue.value = arr.filter((v) => v.id != id);
        emits('remove', value?.value, e as MouseEvent);
      }
      break;
    case 'remove':
      {
        if (inputVal || !computedValue.value?.length) return;
        const value = computedValue.value[computedValue.value.length - 1];
        computedValue.value = computedValue.value.slice(
          0,
          computedValue.value.length - 1
        );
        emits('remove', (value as TagData).value, e as MouseEvent);
      }
      break;
    case 'clear':
      {
        computedValue.value = [];
        emits('clear', e as MouseEvent);
      }
      break;
  }
};
// 暴露方法
defineExpose<InputTagExpose>({
  focus() {
    inputRef.value?.focus();
  },
  blur() {
    inputRef.value?.blur();
  },
});
</script>

<style lang="less">
@import './style/input-tag.less';
</style>
