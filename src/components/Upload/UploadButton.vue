<template>
  <div class="yc-upload-button">
    <yc-button :disabled="disabled" type="primary">
      <template #icon>
        <icon-upload />
      </template>
      点击上传
    </yc-button>
    <div v-if="tip" class="yc-upload-tip text-ellipsis">
      {{ tip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import useContext from './hooks/useContext';
import { IconUpload } from '@shared/icons';
import { default as YcButton } from '@/components/Button';
const { tip, disabled } = useContext().inject();
</script>

<style lang="less">
@import './style/upload.less';
</style>
