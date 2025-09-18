<template>
  <div
    :class="[
      'yc-upload-wrapper',
      {
        'yc-upload-disabled': disabled,
      },
    ]"
  >
    <div
      v-if="showUploadButton"
      class="yc-upload"
      ref="uploadRef"
      @click="!disabled && open()"
    >
      <slot
        v-if="limit <= 0 || computedFileList.length < limit"
        name="upload-button"
      >
        <upload-drag v-if="draggable" />
        <upload-button v-else />
      </slot>
    </div>
    <!-- 渲染uploadlist -->
    <upload-file-list v-if="showFileList && computedFileList.length">
      <template v-if="$slots['extra-button']" #extra-button="scope">
        <slot name="extra-button" v-bind="scope" />
      </template>
      <template v-if="$slots['file-name']" #file-name="scope">
        <slot name="file-name" v-bind="scope" />
      </template>
      <template v-if="$slots['file-icon']" #file-icon="scope">
        <slot name="file-icon" v-bind="scope" />
      </template>
      <template v-if="$slots['upload-item']" #upload-item="scope">
        <slot name="upload-item" v-bind="scope" />
      </template>
    </upload-file-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import {
  UploadProps,
  UploadEmits,
  UploadSlots,
  UploadExpose,
  FileItem,
} from './type';
import { nanoid } from 'nanoid';
import { useDropZone, useFileDialog } from '@shared/utils/vue-utils';
import useContext from './hooks/useContext';
import UploadButton from './UploadButton.vue';
import UploadDrag from './UploadDrag.vue';
import UploadFileList from './UploadFileList.vue';
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
});
const emits = defineEmits<UploadEmits>();
// 注入数据
const {
  computedFileList,
  limit,
  directory,
  multiple,
  accept,
  draggable,
  disabled,
  isOutOfLimit,
  getFileName,
} = useContext().provide(props, emits);
// 上传ref
const uploadRef = ref<HTMLDivElement>();
// 处理文件
const handleFiles = (fileData: File[] | FileList | null) => {
  const files = [...(fileData || [])];
  if (!files?.length || disabled.value || isOutOfLimit(files.length)) {
    if (!isOutOfLimit(files?.length)) return;
    emits('exceed-limit', computedFileList.value, files!);
    return;
  }
  computedFileList.value = [
    ...computedFileList.value,
    ...files.map((v) => {
      const fileItem: FileItem = {
        name: v.name,
        uid: nanoid(),
        file: v,
        status: 'init',
        percent: 0,
        url: URL.createObjectURL(v),
      };
      return {
        ...fileItem,
        name: getFileName(fileItem),
      };
    }),
  ];
  emits('change', computedFileList.value, [...files]);
};
// 处理点击上传
const { onChange, open } = useFileDialog({
  directory: directory.value,
  multiple: multiple.value,
  accept: accept.value,
  reset: true,
});
onChange((files) => handleFiles(files));
// 处理拖拽上传
useDropZone(uploadRef, {
  dataTypes: accept.value ? accept.value.split(',') : undefined,
  multiple: multiple.value,
  preventDefaultForUnhandled: true,
  onDrop: (files) => handleFiles(files),
});
</script>

<style lang="less">
@import './style/upload.less';
</style>
