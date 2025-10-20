<template>
  <yc-trigger
    v-if="!hideTrigger"
    :popup-visible="computedVisible"
    :position="position"
    :popup-container="popupContainer"
    :popup-offset="4"
    :unmount-on-close="unmountOnClose"
    :disabled="disabled || readonly"
    :on-click-out-side="handleClickOutSide"
    :auto-fit-popup-min-width="false"
    :auto-fit-popup-width="false"
    trigger="click"
    animation-name="slide-dynamic-origin"
    prevent-focus
    v-bind="triggerProps"
  >
    <div
      :class="[
        'yc-picker',
        `yc-picker-size-${size}`,
        $attrs.class,
        {
          'yc-picker-disabled': disabled,
          'yc-picker-error': error,
          'yc-picker-focus': computedVisible,
          'yc-picker-has-prefix': $slots.prefix,
          'yc-picker-allow-clear': showClearBtn,
          'yc-picker-range': type == 'time-range',
        },
      ]"
      :style="{
        ...($attrs.style || {}),
      }"
    >
      <!-- prefix -->
      <div v-if="$slots.prefix" class="yc-picker-prefix">
        <slot name="prefix" />
      </div>
      <!-- input -->
      <div
        :class="[
          'yc-picker-input',
          {
            'yc-picker-input-active': !curIndex && computedVisible,
          },
        ]"
        @click.stop="handleOpen(0)"
      >
        <input
          :value="isArray(computedValue) ? computedValue[0] : computedValue"
          :placeholder="isArray(placeholder) ? placeholder[0] : placeholder"
          :disabled="disabled"
          :readonly="readonly || true"
          :ref="(el) => (inputRefs[0] = el as HTMLInputElement)"
          class="yc-picker-start-time"
        />
      </div>
      <template v-if="type == 'time-range'">
        <!-- separator -->
        <span class="yc-picker-separator"> - </span>
        <!-- input -->
        <div
          :class="[
            'yc-picker-input',
            {
              'yc-picker-input-active': curIndex && computedVisible,
            },
          ]"
          @click.stop="handleOpen(1)"
        >
          <input
            :value="isArray(computedValue) ? computedValue[1] : computedValue"
            :placeholder="isArray(placeholder) ? placeholder[1] : placeholder"
            :disabled="disabled"
            :readonly="readonly || true"
            :ref="(el) => (inputRefs[1] = el as HTMLInputElement)"
            class="yc-picker-start-time"
          />
        </div>
      </template>
      <!-- suffix -->
      <div class="yc-picker-suffix">
        <icon-button
          v-if="showClearBtn"
          :size="14"
          class="yc-picker-clear-icon"
          @click="handleClear"
        />
        <span class="yc-picker-suffix-icon">
          <slot name="suffix-icon">
            <icon-time />
          </slot>
        </span>
      </div>
    </div>
    <template #content>
      <time-picker-panel ref="panelRef">
        <template v-if="$slots.extra" #extra>
          <slot name="extra" />
        </template>
      </time-picker-panel>
    </template>
  </yc-trigger>
  <time-picker-panel v-else ref="panelRef">
    <template v-if="$slots.extra" #extra>
      <slot name="extra" />
    </template>
  </time-picker-panel>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TimePickerProps, TimePickerEmits, TimePickerSlots } from './type';
import { getGlobalConfig, isArray, Dayjs } from '@shared/utils';
import useContext from './hooks/useContext';
import { IconButton } from '@shared/components';
import { IconTime } from '@shared/icons';
import TimePickerPanel from './TimePickerPanel.vue';
import YcTrigger from '@/components/Trigger';
defineOptions({
  name: 'TimePicker',
  inheritAttrs: false,
});
const $slots = defineSlots<TimePickerSlots>();
const props = withDefaults(defineProps<TimePickerProps>(), {
  type: 'time',
  modelValue: undefined,
  defaultValue: (props) => {
    return props.type == 'time-range' ? [] : '';
  },
  disabled: false,
  allowClear: true,
  readonly: false,
  error: false,
  format: 'HH:mm:ss',
  placeholder: undefined,
  size: undefined,
  popupContainer: undefined,
  use12Hours: false,
  disabledHours: () => [],
  disabledMinutes: () => [],
  disabledSeconds: () => [],
  hideDisabledOptions: false,
  disabledConfirm: false,
  position: 'bl',
  popupVisible: undefined,
  defaultPopupVisible: false,
  triggerProps: () => {
    return {};
  },
  unmountOnClose: false,
  hideTrigger: false,
  scrollbar: true,
  watchValueChange: true,
});
const emits = defineEmits<TimePickerEmits>();
// 获取全局注入配置
const { size } = getGlobalConfig(props);
// 注入数据
const {
  type,
  computedValue,
  computedVisible,
  showClearBtn,
  readonly,
  disabled,
  curIndex,
  inputRefs,
  placeholder,
  handleClear,
  handleOpen,
  handleClickOutSide,
} = useContext().provide(props, emits);
// panelRef
const panelRef = ref<InstanceType<typeof TimePickerPanel>>();
// 暴露的方法
defineExpose({
  jump(date: Dayjs, oldDate?: Dayjs) {
    panelRef.value?.jump(date, oldDate);
  },
});
</script>

<style lang="less">
@import './style/time-picker.less';
</style>
