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
      v-show="showUploadButton"
      class="yc-upload"
      ref="uploadRef"
      @click="handleUpload"
    >
      <slot
        v-if="limit <= 0 || computedFileList.length < limit"
        name="upload-button"
      >
        <upload-drag v-if="draggable" />
        <upload-button v-else />
      </slot>
    </div>
    <upload-file-list v-if="showFileList && computedFileList.length" />
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
  download: true,
  showLink: true,
  imageLoading: 'lazy',
  listType: 'text',
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
  transformFileItem,
  isOutOfLimit,
} = useContext().provide(props, emits);
// 上传ref
const uploadRef = ref<HTMLDivElement>();

// 处理点击上传
const { onChange, open, reset } = useFileDialog({
  directory: directory.value,
  multiple: multiple.value,
  accept: accept.value,
});
onChange((files) => {
  if (!files || disabled.value || isOutOfLimit(files.length)) return;
  computedFileList.value = [
    ...computedFileList.value,
    ...transformFileItem([...files]),
  ];
  reset();
});
// 处理拖拽上传
useDropZone(uploadRef, {
  dataTypes: accept.value ? accept.value.split(',') : undefined,
  multiple: multiple.value,
  preventDefaultForUnhandled: true,
  onDrop: (files) => {
    if (!files?.length || disabled.value || isOutOfLimit(files.length)) {
      return;
    }
    computedFileList.value = [
      ...computedFileList.value,
      ...transformFileItem(files),
    ];
  },
});
// 处理上传
const handleUpload = () => {
  if (disabled.value) return;
  open();
};
</script>

<style lang="less">
@import './style/upload.less';
</style>
