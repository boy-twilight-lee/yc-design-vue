<template>
  <div
    :class="['arco-upload-picture-card', 'arco-upload-list-type-picture-card']"
  >
    <span
      v-for="item in computedFileList"
      :key="item.uid"
      class="arco-upload-list-picture"
    >
      <img :src="item.url" :alt="item.name" />
      <div class="arco-upload-list-picture-mask">
        <div class="arco-upload-list-picture-operation">
          <span class="arco-upload-icon arco-upload-icon-preview"></span>
          <span class="arco-upload-icon arco-upload-icon-upload"> </span>
          <span class="arco-upload-icon arco-upload-icon-remove">
            <component :is="renderDelIcon()" />
          </span>
        </div>
      </div>
    </span>
    <span class="arco-upload" ref="uploadRef">
      <div class="arco-upload-picture-card">
        <div class="arco-upload-picture-card-text">
          <icon-plus />
        </div>
        <div v-if="tip" class="arco-upload-tip">{{ tip }}</div>
      </div>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { IconPlus, IconDelete } from '@shared/icons';
import useUpload from './hooks/useUpload';
// 上传ref
const uploadRef = ref<HTMLDivElement>();
// 获取上传数据
const { computedFileList, tip, slots, customIcon } = useUpload(uploadRef);
// 渲染删除icon
const renderDelIcon = () => {
  return slots['remove-icon'] ?? (customIcon.value.removeIcon || IconDelete);
};
</script>

<style lang="less" scoped>
.arco-upload-list-type-picture-card {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .arco-upload-list-picture {
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    line-height: 80px;
    text-align: center;
    border-radius: var(--border-radius-small);
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    .arco-upload-list-picture img {
      width: 100%;
      height: 100%;
    }
  }
  .arco-upload-picture-card {
    min-width: 80px;
    height: 80px;
    margin-bottom: 0;
    background: var(--color-fill-2);
    border: 1px dashed var(--color-neutral-3);
    border-radius: var(--border-radius-small);
    transition: all 0.1s cubic-bezier(0, 0, 1, 1);
    color: var(--color-text-2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
