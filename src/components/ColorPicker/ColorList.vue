<template>
  <div class="yc-color-picker-colors-section">
    <div class="yc-color-picker-colors-text">{{ label }}</div>
    <div v-if="!colors.length" class="yc-color-picker-colors-empty">
      {{ t('colorPicker.empty') }}
    </div>
    <div class="yc-color-picker-colors-list">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="yc-color-picker-color-block"
        :style="{
          backgroundColor: color,
        }"
        @click="$emit('colorClick', color)"
      >
        <div
          class="yc-color-picker-block"
          :style="{
            backgroundColor: color,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
defineProps<{
  label: string;
  colors: string[];
}>();
defineEmits<{
  (e: 'colorClick', color: string): void;
}>();
// 国际化
const { t } = useI18n();
</script>

<style lang="less">
@import './style/color-picker.less';
</style>
