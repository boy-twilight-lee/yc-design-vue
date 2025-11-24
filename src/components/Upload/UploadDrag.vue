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
    <div class="yc-upload-drag-text">
      {{ t(`upload.${isOverDropZone ? 'dragHover' : 'drag'}`) }}
    </div>
    <div v-if="tip" class="yc-upload-tip text-ellipsis">
      {{ tip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import useContext from './hooks/useContext';
import { IconPlus } from '@shared/icons';
import { useI18n } from '@shared/utils';
defineProps<{
  isOverDropZone: boolean;
}>();
const { tip, disabled } = useContext().inject();
// 国际化
const { t } = useI18n();
</script>

<style lang="less">
@import './style/upload.less';
</style>
