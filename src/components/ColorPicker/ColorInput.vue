<template>
  <div class="yc-color-picker-input-wrapper">
    <div class="yc-color-picker-format">
      <yc-select
        v-model="format"
        :options="COLOR_PICKER_FORMAT_OPTIONS"
        :trigger-props="{
          contentClass: 'yc-color-picker-format-popup-content',
        }"
        size="mini"
      />
    </div>
    <div class="yc-color-picker-color">
      <yc-input
        v-if="format == 'hex'"
        v-model="hex"
        :max-length="6"
        :disabled="disabled"
        size="mini"
        class="hex-input"
        @blur="handleSet('hex')"
        @press-enter="handleSet('hex')"
      >
        <template #prefix> # </template>
      </yc-input>
      <template v-else>
        <yc-input-number
          v-model="rgb.r"
          :min="0"
          :max="255"
          :disabled="disabled"
          size="mini"
          class="rgb-input"
          hide-button
          @blur="handleSet('rgb')"
          @press-enter="handleSet('rgb')"
        />
        <yc-input-number
          v-model="rgb.g"
          :min="0"
          :max="255"
          :disabled="disabled"
          size="mini"
          class="rgb-input"
          hide-button
          @blur="handleSet('rgb')"
          @press-enter="handleSet('rgb')"
        />
        <yc-input-number
          v-model="rgb.b"
          :min="0"
          :max="255"
          :disabled="disabled"
          class="rgb-input"
          size="mini"
          hide-button
          @blur="handleSet('rgb')"
          @press-enter="handleSet('rgb')"
        />
      </template>
      <yc-input-number
        v-if="!disabledAlpha"
        v-model="alpha"
        :min="0"
        :max="100"
        :disabled="disabled"
        size="mini"
        hide-button
        class="alpha-input"
        @blur="handleSet('alpha')"
        @press-enter="handleSet('alpha')"
      >
        <template #suffix> % </template>
      </yc-input-number>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue';
import { parseColor } from '@shared/utils';
import { ColorFormat } from '@/components/ColorPicker/type';
import { COLOR_PICKER_FORMAT_OPTIONS } from '@shared/constants';
import { ObjectData } from '@shared/type';
import YcSelect from '@/components/Select';
import YcInput from '@/components/Input';
import YcInputNumber from '@/components/InputNumber';
const props = defineProps<{
  color: string;
  baseColor: string;
  alpha: number;
  disabled: boolean;
  disabledAlpha: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:color', value: string): void;
  (e: 'update:baseColor', value: string): void;
  (e: 'update:alpha', value: number): void;
  (e: 'change', color: string, type: 'alpha' | 'color'): void;
}>();
const { color, alpha: _alpha } = toRefs(props);
// format
const format = ref<ColorFormat>('hex');
// hex
const hex = ref<string>('');
// rgb对象
const rgb = ref<ObjectData>({});
// alpha
const alpha = ref<number>(_alpha.value);
// 处理设置
const handleSet = (type: 'hex' | 'rgb' | 'alpha') => {
  if (type == 'hex') {
    const a = parseColor(color.value).getAlpha();
    const resultColor = parseColor(hex.value).setAlpha(a).toHex8();
    emits('update:color', resultColor);
    emits('update:baseColor', resultColor);
    emits('change', resultColor, 'color');
  } else if (type == 'rgb') {
    const { r, g, b } = rgb.value;
    const resultColor = `rgb(${r},${g},${b})`;
    emits('update:color', resultColor);
    emits('update:baseColor', resultColor);
    emits('change', resultColor, 'color');
  } else {
    const a = +(alpha.value / 100).toFixed(2);
    const resultColor = parseColor(color.value).setAlpha(a).toRgbString();
    emits('update:color', resultColor);
    emits('update:alpha', alpha.value);
    emits('change', resultColor, 'alpha');
  }
};
// 检测color的改变
watch(
  () => color.value,
  () => {
    hex.value = parseColor(color.value).toHex();
    rgb.value = parseColor(color.value).toRgb();
  },
  {
    immediate: true,
  }
);
// 检测alpha的改变
watch(
  () => _alpha.value,
  () => {
    alpha.value = _alpha.value * 100;
  }
);
</script>

<style lang="less" scoped>
@import './style/color-picker.less';
</style>

<style lang="less">
.yc-color-picker-format-popup-content {
  .yc-select-option {
    font-size: 12px;
    line-height: 24px;
  }
}
</style>
