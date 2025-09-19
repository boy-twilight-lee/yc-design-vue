<template>
  <div
    :class="[
      'yc-upload-list',
      `yc-upload-list-type-${listType}`,
      {
        'yc-upload-list-disabled': disabled,
      },
    ]"
  >
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
            @click="handlePreview(item)"
          >
            <component :is="renderPreviewIcon()" />
          </span>
          <!-- <span :class="['yc-upload-icon', 'yc-upload-icon-download']"> </span> -->
          <span
            v-if="showRemoveButton"
            :class="['yc-upload-icon', 'yc-upload-icon-remove']"
            @click="handleDelFile(item)"
          >
            <component :is="renderDelIcon()" />
          </span>
        </div>
      </div>
    </div>
    <!-- upload -->
    <span
      v-if="limit <= 0 || computedFileList.length < limit"
      class="yc-upload"
      ref="uploadRef"
      @click="handleUpload"
    >
      <div
        :class="[
          'yc-upload-picture-card',
          {
            'yc-upload-picture-card-disabled': disabled,
          },
        ]"
      >
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
import { FileItem } from './type';
import { IconPlus, IconEyeClose, IconDelete } from '@shared/icons';
import useUpload from './hooks/useUpload';
import { ImagePreview as YcImagePreview } from '@/components/Image';
// 上传ref
const uploadRef = ref<HTMLDivElement>();
// visible
const visible = ref<boolean>(false);
// url
const url = ref<string>('');
// 获取上传数据
const {
  computedFileList,
  limit,
  tip,
  slots,
  customIcon,
  disabled,
  imagePreview,
  showPreviewButton,
  showRemoveButton,
  listType,
  handleUpload,
  handleDelFile,
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
// 处理预览
const handlePreview = (fileItem: FileItem) => {
  url.value = fileItem.url;
  emits('preview', fileItem);
  if (!imagePreview.value) return;
  visible.value = true;
};
</script>

<style lang="less" scoped>
@import './style/upload.less';
</style>
