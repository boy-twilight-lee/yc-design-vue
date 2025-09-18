import { provide as _provide, inject as _inject, toRefs, ref, Ref } from 'vue';
import { nanoid } from 'nanoid';
import { UploadProps as _UploadProps, UploadEmits, FileItem } from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue } from '@shared/utils/control';
import { isString } from '@shared/utils/is';
// key
const UPLOAD_CONTEXT_KEY = 'upload-context';
// context
type UploadContext = {
  computedFileList: Ref<FileItem[]>;
  disabled: Ref<boolean>;
  tip: Ref<string>;
  emits: UploadEmits;
};
// type
type UploadProps = Required<_UploadProps>;

export default function useUploadContext() {
  const provide = (props: RecordType, emits: UploadEmits) => {
    const {
      fileList,
      defaultFileList,
      disabled,
      multiple,
      accept,
      draggable,
      directory,
      limit,
      tip,
    } = toRefs(props as UploadProps);
    const { name } = props;
    //   受控的fileList
    const computedFileList = useControlValue<FileItem[]>(
      fileList,
      defaultFileList.value,
      (val) => {
        emits('update:fileList', val);
      }
    );
    // 获取fileName
    const getFileName = (fileItem: FileItem) => {
      if (name) {
        return isString(name) ? name : name(fileItem);
      }
      return fileItem.name;
    };
    // 处理转换
    const transformFileItem = (files: File[]) => {
      return files.map((v) => {
        const fileItem: FileItem = {
          name: v.name,
          uid: nanoid(),
          file: v,
          status: 'init',
          percent: 0,
        };
        return {
          ...fileItem,
          name: getFileName(fileItem),
        };
      });
    };
    // 是否超出限制
    const isOutOfLimit = (length: number) => {
      return (
        limit.value > 0 && length + computedFileList.value.length > limit.value
      );
    };
    _provide<UploadContext>(UPLOAD_CONTEXT_KEY, {
      computedFileList,
      disabled,
      tip,
      emits,
    });

    return {
      computedFileList,
      limit,
      multiple,
      directory,
      accept,
      draggable,
      disabled,
      transformFileItem,
      isOutOfLimit,
    };
  };

  const inject = () => {
    return _inject<UploadContext>(UPLOAD_CONTEXT_KEY, {
      computedFileList: ref([]),
      disabled: ref(false),
      tip: ref(''),
      emits: () => {},
    });
  };

  return {
    provide,
    inject,
  };
}
