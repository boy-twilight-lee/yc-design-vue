<template>
  <div
    :class="[
      'yc-upload-drag',
      {
        'yc-upload-drag-disabled': disabled,
      },
    ]"
  >
    <div class="yc-upload-drag-icon">
      <icon-plus />
    </div>
    <div class="yc-upload-drag-text">点击或拖拽文件到此处上传</div>
    <div v-if="tip" class="yc-upload-tip text-ellipsis">
      {{ tip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import useContext from './hooks/useContext';
import { IconPlus } from '@shared/icons';
const { tip, disabled } = useContext().inject();
</script>

<style lang="less">
@import './style/upload.less';
</style>
