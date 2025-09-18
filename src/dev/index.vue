<template>
  <div class="test">
    <yc-upload
      v-model:fileList="fileList"
      :limit="4"
      multiple
      draggable
      tip="请上传png"
      disabled
    />
    <a-upload
      v-model:fileList="fileList"
      :limit="4"
      multiple
      :auto-upload="false"
      tip="请上传png"
      draggable
      disabled
      list-type="picture"
      ><a-button>dsa</a-button>
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
