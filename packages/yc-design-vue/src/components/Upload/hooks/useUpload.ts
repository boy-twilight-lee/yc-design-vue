import { Ref } from 'vue';
import { FileItem, UploadEmits, UploadProps } from '../type';
import {
  useDropZone,
  useFileDialog,
  nanoid,
  isFunction,
  isString,
} from '@shared/utils';
import useContext from './useContext';

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
    onButtonClick,
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
  const { isOverDropZone } = useDropZone(uploadRef, {
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
  const handleFiles = async (fileData: File[] | FileList | null) => {
    const allFiles = [...(fileData || [])];
    const files: File[] = [];
    for (const file of allFiles) {
      let isUpload = true;
      try {
        isUpload = await onBeforeUpload?.(file);
      } catch {
        isUpload = false;
      }
      if (!isUpload && isFunction(onBeforeUpload)) continue;
      files.push(file);
    }
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
  const handleUpload = async (e: MouseEvent) => {
    if (disabled.value) return;
    const click = onButtonClick?.(e);
    if (click instanceof Promise) return;
    open();
  };
  return {
    ...context,
    isOverDropZone,
    handleUpload,
    handleFiles,
  };
}
