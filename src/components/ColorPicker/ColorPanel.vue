<template>
  <div
    :class="[
      'yc-color-picker-panel',
      {
        'yc-color-picker-panel-disabled': disabled,
      },
    ]"
  >
    <color-palette
      v-model:color="computedColor"
      :base-color="baseColor"
      :popup-visible="popupVisible"
      :hide-trigger="hideTrigger"
      :disabled="disabled"
      ref="paletteRef"
    />
    <div class="yc-color-picker-panel-control">
      <div class="yc-color-picker-control-wrapper">
        <div>
          <color-control
            mode="color"
            v-model:color="computedColor"
            v-model:base-color="baseColor"
            :popup-visible="popupVisible"
            :disabled="disabled"
            :hide-trigger="hideTrigger"
            ref="colorBarRef"
            @change="(v) => paletteRef?.setPosition(v)"
          />
          <div class="yc-color-picker-control-bar-bg">
            <color-control
              mode="alpha"
              v-model:color="computedColor"
              v-model:alpha="alpha"
              :base-color="baseColor"
              :popup-visible="popupVisible"
              :disabled="disabled"
              :hide-trigger="hideTrigger"
              ref="alphaBarRef"
            />
          </div>
        </div>
        <div
          class="yc-color-picker-preview"
          :style="{
            backgroundColor: computedColor,
          }"
        ></div>
      </div>
      <color-input
        v-model:color="computedColor"
        v-model:base-color="baseColor"
        v-model:alpha="alpha"
        :disabled="disabled"
        :disabled-alpha="disabledAlpha"
        @change="handleChange"
      />
    </div>
    <div v-if="showHistory || showPreset" class="yc-color-picker-panel-colors">
      <color-list
        v-if="showHistory"
        label="最近使用的颜色"
        :colors="historyColors"
        @color-click="handleColorClick"
      />
      <color-list
        v-if="showPreset"
        label="系统预设的颜色"
        :colors="presetColors"
        @color-click="handleColorClick"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useContext from './hooks/useContext';
import ColorPalette from './ColorPalette.vue';
import ColorInput from './ColorInput.vue';
import ColorList from './ColorList.vue';
import ColorControl from './ColorControl.vue';
// 注入值
const {
  popupVisible,
  computedColor,
  baseColor,
  alpha,
  disabled,
  disabledAlpha,
  showHistory,
  showPreset,
  hideTrigger,
  presetColors,
  historyColors,
} = useContext().inject();
// 组件实例
const colorBarRef = ref<InstanceType<typeof ColorControl>>();
const alphaBarRef = ref<InstanceType<typeof ColorControl>>();
const paletteRef = ref<InstanceType<typeof ColorPalette>>();
// 处理color点击
const handleColorClick = (color: string) => {
  if (disabled.value) return;
  computedColor.value = color;
  baseColor.value = color;
  colorBarRef.value?.setPosition(color);
  alphaBarRef.value?.setPosition(color);
  paletteRef.value?.setPosition(color);
};
// 处理改变
const handleChange = (color: string, type: 'color' | 'alpha') => {
  if (type == 'alpha') {
    alphaBarRef.value?.setPosition(color);
  } else {
    colorBarRef.value?.setPosition(color);
    paletteRef.value?.setPosition(color);
  }
};
</script>

<style lang="less" scoped>
@import './style/color-picker.less';
</style>
