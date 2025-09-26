<template>
  <div :class="['yc-upload-list', `yc-upload-list-type-${listType}`]">
    <div
      v-for="(item, i) in computedFileList"
      :key="item.uid"
      class="yc-upload-list-item"
    >
      <slot name="upload-item" :fileItem="item" :index="i">
        <div class="yc-upload-list-item-content">
          <!-- image -->
          <span
            v-if="listType == 'picture'"
            class="yc-upload-list-item-thumbnail"
          >
            <img :src="item.url" :alt="item.name" :loading="imageLoading" />
          </span>
          <!-- name -->
          <div class="yc-upload-list-item-name">
            <!-- file-icon -->
            <span
              v-if="listType == 'text'"
              class="yc-upload-list-item-file-icon"
            >
              <component :is="renderFileIcon(item)" />
            </span>
            <!-- 文件名 -->
            <span class="yc-upload-list-item-name-text text-ellipsis">
              <!-- 展示链接 -->
              <a
                v-if="showLink"
                :href="item.url"
                :download="download ? item.name : undefined"
                class="yc-upload-list-item-name-link"
                target="_blank"
              >
                <component :is="renderName(item)" />
              </a>
              <!-- 非链接 -->
              <component v-else :is="renderName(item)" />
            </span>
          </div>
        </div>
      </slot>
      <!-- opera -->
      <span
        v-if="$slots['extra-button'] || showRemoveButton"
        class="yc-upload-list-item-operation"
      >
        <icon-button @click="handleDelFile(item)">
          <component :is="renderDelIcon()" />
        </icon-button>
        <slot name="extra-button" :fileItem="item" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FileItem } from './type';
import useContext from './hooks/useContext';
import { IconDelete, IconFile } from '@shared/icons';
import { IconButton } from '@shared/components';
// 接收注入
const {
  computedFileList,
  showRemoveButton,
  listType,
  imageLoading,
  showLink,
  download,
  customIcon,
  slots,
  handleDelFile,
} = useContext().inject();
// 渲染文件icon
const renderFileIcon = (fileItem: FileItem) => {
  if (slots['file-icon']) {
    return slots['file-icon']({
      fileItem,
    });
  }
  return customIcon.value.fileIcon?.(fileItem) || IconFile;
};
// 渲染name
const renderName = (fileItem: FileItem) => {
  if (slots['file-name']) {
    return slots['file-name']({
      fileItem,
    });
  }
  return () => customIcon.value.fileName?.(fileItem) || fileItem.name;
};
// 渲染删除icon
const renderDelIcon = () => {
  return slots['remove-icon'] ?? (customIcon.value.removeIcon || IconDelete);
};
</script>

<style lang="less">
@import './style/upload.less';
</style>
