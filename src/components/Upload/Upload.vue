<template>
  <div
    :class="[
      'yc-upload-wrapper',
      `yc-upload-wrapper-type-${listType}`,
      {
        'yc-upload-disabled': disabled,
      },
    ]"
  >
    <template v-if="listType != 'picture-card'">
      <div
        v-if="showUploadButton"
        :class="[
          'yc-upload',
          {
            'yc-upload-draggable': draggable,
          },
        ]"
        ref="uploadRef"
        @click="handleUpload"
      >
        <slot
          v-if="limit <= 0 || computedFileList.length < limit"
          name="upload-button"
        >
          <upload-drag v-if="draggable" :is-over-drop-zone="isOverDropZone" />
          <upload-button v-else />
        </slot>
      </div>
      <!-- 渲染uploadlist -->
      <upload-file-list v-if="showFileList && computedFileList.length">
        <template v-if="$slots['extra-button']" #extra-button="scope">
          <slot name="extra-button" v-bind="scope" />
        </template>
        <template v-if="$slots['upload-item']" #upload-item="scope">
          <slot name="upload-item" v-bind="scope" />
        </template>
      </upload-file-list>
    </template>
    <!-- picture-card -->
    <upload-picture-card v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UploadProps, UploadEmits, UploadSlots, UploadExpose } from './type';
import useUpload from './hooks/useUpload';
import UploadButton from './UploadButton.vue';
import UploadDrag from './UploadDrag.vue';
import UploadFileList from './UploadFileList.vue';
import UploadPictureCard from './UploadPictureCard.vue';
defineOptions({
  name: 'Upload',
});
const $slots = defineSlots<UploadSlots>();
const props = withDefaults(defineProps<UploadProps>(), {
  fileList: undefined,
  defaultFileList: () => [],
  accept: undefined,
  disabled: false,
  multiple: false,
  directory: false,
  draggable: false,
  tip: '',
  name: undefined,
  limit: 0,
  showFileList: true,
  showRemoveButton: true,
  showUploadButton: true,
  showPreviewButton: true,
  download: false,
  showLink: true,
  imageLoading: 'lazy',
  listType: 'text',
  imagePrewiew: true,
  customIcon: () => ({}),
  onBeforeRemove: () => Promise.resolve(true),
  onBeforeUpload: () => true,
  onButtonClick: () => {},
});
const emits = defineEmits<UploadEmits>();
// 上传ref
const uploadRef = ref<HTMLDivElement>();
// 注入数据
const {
  computedFileList,
  limit,
  draggable,
  disabled,
  isOverDropZone,
  handleFiles,
  handleUpload,
} = useUpload(uploadRef, props, emits);
// 暴露的方法
defineExpose<UploadExpose>({
  updateFile(id: string, file: File) {
    const index = computedFileList.value.findIndex((item) => item.uid == id);
    if (index == -1) return;
    computedFileList.value[index] = {
      ...computedFileList.value[index],
      name: file.name,
      file,
      status: 'init',
      percent: 0,
      url: URL.createObjectURL(file),
    };
  },
  upload(files: File[]) {
    handleFiles(files);
  },
});
</script>

<style lang="less">
@import './style/upload.less';
</style>
