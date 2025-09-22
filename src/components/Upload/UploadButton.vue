<template>
  <div class="yc-upload-button">
    <yc-button :disabled="disabled" type="primary">
      <template #icon>
        <icon-upload />
      </template>
      {{ t('upload.buttonText') }}
    </yc-button>
    <div v-if="tip" class="yc-upload-tip text-ellipsis">
      {{ tip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import useContext from './hooks/useContext';
import { IconUpload } from '@shared/icons';
import { useI18n } from '@shared/utils/locale';
import { default as YcButton } from '@/components/Button';
// 注入
const { tip, disabled } = useContext().inject();
// 国际化
const { t } = useI18n();
</script>

<style lang="less">
@import './style/upload.less';
</style>
