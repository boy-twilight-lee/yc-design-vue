<template>
  <div class="yc-upload-list">
    <template> </template>
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
              <slot name="file-icon" :fileItem="item">
                <icon-file />
              </slot>
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
                <slot name="file-name" :fileItem="item">
                  {{ item.name }}
                </slot>
              </a>
              <!-- 不展示 -->
              <slot v-else name="file-name" :fileItem="item">
                {{ item.name }}
              </slot>
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
          <icon-delete />
        </icon-button>
        <slot name="extra-button" :fileItem="item" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
  emits,
} = useContext().inject();
// 处理删除
const handleDel = (uid: string) => {
  computedFileList.value = computedFileList.value.filter((v) => v.uid != uid);
  emits('change', computedFileList.value, []);
};
</script>

<style lang="less" scoped>
.yc-upload-list {
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
