import {
  provide as _provide,
  inject as _inject,
  toRefs,
  ref,
  Ref,
  computed,
  useSlots,
} from 'vue';
import {
  UploadProps as _UploadProps,
  UploadEmits,
  FileItem,
  FileListType,
  ImageLoading,
  UploadSlots,
} from '../type';
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
  listType: Ref<FileListType>;
  imageLoading: Ref<ImageLoading>;
  showRemoveButton: Ref<boolean>;
  showLink: Ref<boolean>;
  download: Ref<boolean>;
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
      draggable,
      directory,
      limit,
      tip,
      listType,
      showRemoveButton,
      imageLoading,
      download,
      showLink,
      accept: _accept,
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
    // accept
    const accept = computed(() => {
      return listType.value != 'text' ? 'image/*' : _accept.value;
    });
    // 获取fileName
    const getFileName = (fileItem: FileItem) => {
      if (name) {
        return isString(name) ? name : name(fileItem);
      }
      return fileItem.name;
    };
    // 是否超出限制
    const isOutOfLimit = (length: number = 0) => {
      return (
        limit.value > 0 && length + computedFileList.value.length > limit.value
      );
    };
    _provide<UploadContext>(UPLOAD_CONTEXT_KEY, {
      computedFileList,
      disabled,
      tip,
      listType,
      imageLoading,
      showRemoveButton,
      showLink,
      download,
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
      showLink,
      download,
      isOutOfLimit,
      getFileName,
    };
  };

  const inject = () => {
    return _inject<UploadContext>(UPLOAD_CONTEXT_KEY, {
      computedFileList: ref([]),
      disabled: ref(false),
      tip: ref(''),
      listType: ref('text'),
      showRemoveButton: ref(true),
      showLink: ref(true),
      download: ref(false),
      imageLoading: ref('lazy'),
      emits: () => {},
    });
  };

  return {
    provide,
    inject,
  };
}
