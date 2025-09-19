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
        <icon-button @click="handleDel(item.uid)">
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
  emits,
} = useContext().inject();
// 处理删除
const handleDel = (uid: string) => {
  computedFileList.value = computedFileList.value.filter((v) => v.uid != uid);
  emits('change', computedFileList.value, []);
};
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

<style lang="less" scoped>
.yc-upload-list-type-text,
.yc-upload-list-type-picture {
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .yc-upload-list-item {
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 12px;
    .yc-upload-list-item-content {
      overflow: hidden;
      flex: 1;
      width: 100%;
      padding: 8px 10px 8px 12px;
      background-color: var(--color-fill-1);
      transition: background-color 0.1s cubic-bezier(0, 0, 1, 1);
      font-size: 14px;
      display: flex;
      align-items: center;
      .yc-upload-list-item-thumbnail {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        margin-right: 12px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .yc-upload-list-item-name {
        flex: 1;
        overflow: hidden;
        color: var(--color-text-1);
        font-size: 14px;
        line-height: 1.4286;
        display: flex;
        align-items: center;
        gap: 12px;
        .yc-upload-list-item-file-icon {
          color: rgb(var(--primary-6));
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .yc-upload-list-item-name-link {
          cursor: pointer;
          color: rgb(var(--link-6));
        }
      }
    }
    .yc-upload-list-item-operation {
      color: var(--color-text-2);
      font-size: 12px;
    }
  }
}
</style>
