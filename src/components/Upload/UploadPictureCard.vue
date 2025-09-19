<template>
  <div :class="['yc-upload-list', `yc-upload-list-type-${listType}`]">
    <!-- 图片预览 -->
    <yc-image-preview v-model:visible="visible" :src="url" />
    <!-- list -->
    <div
      v-for="item in computedFileList"
      :key="item.uid"
      class="yc-upload-list-picture"
    >
      <img :src="item.url" :alt="item.name" />
      <div class="yc-upload-list-picture-mask">
        <div class="yc-upload-list-picture-operation">
          <span
            v-if="showPreviewButton"
            :class="['yc-upload-icon', 'yc-upload-icon-preview']"
            @click="handlePreview(item.url)"
          >
            <component :is="renderPreviewIcon()" />
          </span>
          <!-- <span :class="['yc-upload-icon', 'yc-upload-icon-download']"> </span> -->
          <span
            v-if="showRemoveButton"
            :class="['yc-upload-icon', 'yc-upload-icon-remove']"
            @click="handleDel(item.uid)"
          >
            <component :is="renderDelIcon()" />
          </span>
        </div>
      </div>
    </div>
    <!-- upload -->
    <span class="yc-upload" ref="uploadRef" @click="handleUpload">
      <div class="yc-upload-picture-card">
        <div class="yc-upload-picture-card-text">
          <icon-plus />
        </div>
        <div v-if="tip" class="yc-upload-tip">{{ tip }}</div>
      </div>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IconPlus, IconEyeClose, IconDelete } from '@shared/icons';
import useUpload from './hooks/useUpload';
import { ImagePreview as YcImagePreview } from '@/components/Image';
// 上传ref
const uploadRef = ref<HTMLDivElement>();
// visible
const visible = ref<boolean>(false);
const url = ref<string>('');
// 获取上传数据
const {
  computedFileList,
  tip,
  slots,
  customIcon,
  disabled,
  showPreviewButton,
  showRemoveButton,
  listType,
  open,
  emits,
} = useUpload(uploadRef);
// 渲染删除icon
const renderDelIcon = () => {
  return slots['remove-icon'] ?? (customIcon.value.removeIcon || IconDelete);
};
// 渲染preview
const renderPreviewIcon = () => {
  return (
    slots['preview-icon'] ?? (customIcon.value.previewIcon || IconEyeClose)
  );
};
// 处理上传
const handleUpload = () => {
  if (disabled.value) return;
  open();
};
// 处理预览
const handlePreview = (v: string) => {
  url.value = v;
  visible.value = true;
};
// 处理删除
const handleDel = (uid: string) => {
  computedFileList.value = computedFileList.value.filter((v) => v.uid != uid);
  emits('change', computedFileList.value, []);
};
</script>

<style lang="less" scoped>
.yc-upload-list-type-picture-card {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .yc-upload-list-picture {
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    line-height: 80px;
    text-align: center;
    border-radius: var(--border-radius-small);
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    &:hover .yc-upload-list-picture-mask {
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .yc-upload-list-picture-mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: var(--color-white);
      font-size: 16px;
      line-height: 80px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.1s cubic-bezier(0, 0, 1, 1);
      .yc-upload-list-picture-operation {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .yc-upload-icon {
          cursor: pointer;
        }
      }
    }
  }
  .yc-upload-picture-card {
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
    &:hover {
      color: var(--color-text-2);
      background-color: var(--color-fill-3);
      border-color: var(--color-neutral-4);
    }
  }
}
</style>
