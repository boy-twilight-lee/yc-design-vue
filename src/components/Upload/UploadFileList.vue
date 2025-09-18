<template>
  <div class="yc-upload-list">
    <div
      v-for="item in computedFileList"
      :key="item.uid"
      class="yc-upload-list-item"
    >
      <div class="yc-upload-list-item-content">
        <div class="yc-upload-list-item-name">
          <span class="yc-upload-list-item-file-icon">
            <icon-file />
          </span>
          <span class="yc-upload-list-item-name-text text-ellipsis">
            {{ item.name }}
          </span>
        </div>
      </div>
      <span class="yc-upload-list-item-operation">
        <icon-button @click="handleDel(item.uid)">
          <icon-delete />
        </icon-button>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import useContext from './hooks/useContext';
import { IconDelete, IconFile } from '@shared/icons';
import { IconButton } from '@shared/components';
// 接收注入
const { computedFileList } = useContext().inject();
// 处理删除
const handleDel = (uid: string) => {
  computedFileList.value = computedFileList.value.filter((v) => v.uid != uid);
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
      gap: 10px;
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
      }
    }
    .yc-upload-list-item-operation {
      color: var(--color-text-2);
      font-size: 12px;
    }
  }
}
</style>
