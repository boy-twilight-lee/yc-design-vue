<template>
  <svg
    width="160"
    height="192"
    viewBox="0 0 160 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <!-- Template部分与之前的版本完全相同，所有颜色都已绑定到 'palette' 计算属性 -->
    <defs>
      <filter
        :id="palette.shadowId"
        x="-25%"
        y="-25%"
        width="150%"
        height="150%">
        <feDropShadow
          dx="0"
          dy="5"
          stdDeviation="10"
          :flood-color="palette.shadowColor"
          :flood-opacity="palette.shadowOpacity" />
      </filter>
    </defs>
    <rect
      width="160"
      height="192"
      rx="20"
      :fill="palette.bg" />
    <g
      transform="translate(20 20)"
      :style="{ filter: `url(#${palette.shadowId})` }">
      <!-- 1. 顶部的个人资料卡片 -->
      <rect
        x="22"
        y="0"
        width="76"
        height="36"
        rx="8"
        :fill="palette.cardBg"
        :stroke="palette.cardBorder"
        stroke-width="2" />
      <circle
        cx="38"
        cy="18"
        r="8"
        :fill="palette.primary" />
      <rect
        x="54"
        y="12"
        width="32"
        height="6"
        rx="3"
        :fill="palette.placeholder1" />
      <rect
        x="54"
        y="24"
        width="20"
        height="4"
        rx="2"
        :fill="palette.placeholder2" />
      <!-- 2. 左侧中部的代码/图标组件 -->
      <rect
        x="0"
        y="48"
        width="80"
        height="56"
        rx="8"
        :fill="palette.cardBg"
        :stroke="palette.cardBorder"
        stroke-width="2" />
      <rect
        x="12"
        y="60"
        width="28"
        height="8"
        rx="4"
        :fill="palette.accent" />
      <rect
        x="12"
        y="76"
        width="48"
        height="8"
        rx="4"
        :fill="palette.accentLight" />
      <!-- 3. 右侧贯穿中下部的图表卡片 -->
      <rect
        x="88"
        y="44"
        width="32"
        height="80"
        rx="8"
        :fill="palette.cardBg"
        :stroke="palette.cardBorder"
        stroke-width="2" />
      <rect
        x="98"
        y="56"
        width="12"
        height="24"
        rx="3"
        :fill="palette.accent" />
      <rect
        x="98"
        y="88"
        width="12"
        height="16"
        rx="3"
        :fill="palette.primary" />
      <!-- 4. 左下方的交互元素 -->
      <rect
        x="0"
        y="120"
        width="72"
        height="32"
        rx="8"
        :fill="palette.primary" />
      <rect
        x="80"
        y="129"
        width="32"
        height="14"
        rx="7"
        :fill="palette.primary" />
      <circle
        cx="104"
        cy="136"
        r="5"
        :fill="palette.switchDot" />
    </g>
  </svg>
</template>

<script setup>
import { computed, inject, ref } from 'vue';
const isDark = inject('isDark', ref(false));
const lightPalette = {
  bg: '#F8F9FC',
  cardBg: '#FFFFFF',
  cardBorder: '#EBF1FF',
  primary: '#165DFF',
  accent: '#A8C5FF',
  accentLight: '#EBF1FF',
  placeholder1: '#CBD5E0',
  placeholder2: '#E2E8F0',
  switchDot: '#FFFFFF',
  shadowId: 'shadow-light',
  shadowColor: '#165DFF',
  shadowOpacity: 0.15,
};
const darkPalette = {
  bg: '#181E2A',
  cardBg: '#242C3F',
  cardBorder: '#343E56',
  primary: '#3E7AFF',
  accent: '#8AB2FF',
  accentLight: '#3A445C',
  placeholder1: '#4A5568',
  placeholder2: '#3A445C',
  switchDot: '#FFFFFF',
  shadowId: 'shadow-dark',
  shadowColor: '#3E7AFF',
  shadowOpacity: 0.25,
};
const palette = computed(() => (isDark.value ? darkPalette : lightPalette));
</script>
