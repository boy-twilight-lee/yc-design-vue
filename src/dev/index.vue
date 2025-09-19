<template>
  <div class="test">
    <yc-upload
      v-model:fileList="fileList"
      multiple
      draggable
      tip="请上传"
      image-preview
      :on-button-click="onButtonClick"
    />
    <a-upload
      v-model:fileList="fileList"
      :limit="4"
      :auto-upload="false"
      :on-before-upload="(_item) => false"
      multiple
      tip="请上传"
      draggable
      :on-button-click="onButtonClick"
    >
    </a-upload>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Modal } from '@arco-design/web-vue';
const fileList = ref([]);
const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      title: 'beforeUpload',
      content: `确认上传 ${file.name}`,
      onOk: () => resolve(true),
      onCancel: () => reject('cancel'),
    });
  });
};
const onButtonClick = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1');
    }, 100);
  });
};
</script>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
  .test {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .yc-upload-wrapper,
    .arco-upload-wrapper {
      width: 400px;
    }
  }
}
</style>
