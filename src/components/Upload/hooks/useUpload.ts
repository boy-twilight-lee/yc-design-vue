import { nanoid } from 'nanoid';
import { useDropZone, useFileDialog } from '@shared/utils/vue-utils';
import { isString } from '@shared/utils/is';
import useContext from './useContext';
import { FileItem, UploadEmits, UploadProps } from '../type';
import { Ref } from 'vue';
export default function useUpload(
  uploadRef: Ref<HTMLDivElement | undefined>,
  _props?: UploadProps,
  _emits?: UploadEmits
) {
  // 获取上下文
  let context;
  if (_props && _emits) {
    context = useContext().provide(_props, _emits);
  } else {
    context = useContext().inject();
  }
  const {
    computedFileList,
    disabled,
    limit,
    accept,
    directory,
    multiple,
    name,
    onBeforeUpload,
    emits,
  } = context;
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
  // 是否超出限制
  const isOutOfLimit = (length: number = 0) => {
    return (
      limit.value > 0 && length + computedFileList.value.length > limit.value
    );
  };
  // 获取fileName
  const getFileName = (fileItem: FileItem) => {
    if (name) {
      return isString(name) ? name : name(fileItem);
    }
    return fileItem.name;
  };
  // 处理文件
  const handleFiles = (fileData: File[] | FileList | null) => {
    const files = [...(fileData || [])].filter((file) => onBeforeUpload(file));
    console.log(files);
    if (!files.length || disabled.value || isOutOfLimit(files.length)) {
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
  // 处理上传
  const handleUpload = () => {
    if (disabled.value) return;
    open();
  };
  return {
    ...context,
    handleUpload,
    handleFiles,
  };
}
