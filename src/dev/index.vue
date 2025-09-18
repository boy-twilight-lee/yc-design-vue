<template>
  <div class="test">
    <yc-upload
      v-model:fileList="fileList"
      :limit="4"
      multiple
      draggable
      download
      list-type="picture"
      tip="请上传png"
      image-preview
    />
    <a-upload
      v-model:fileList="fileList"
      :limit="4"
      :auto-upload="false"
      multiple
      tip="请上传png"
      draggable
      list-type="picture-card"
      :image-preview="false"
      @button-click="
        (v) => {
          console.log(v);
        }
      "
    >
    </a-upload>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const fileList = ref([]);
</script>

<style lang="less" scoped></style>

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
