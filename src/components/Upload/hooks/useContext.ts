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
  CustomIcon,
  FileName,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue } from '@shared/utils/control';

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
  customIcon: Ref<CustomIcon>;
  limit: Ref<number>;
  accept: Ref<string>;
  name: FileName;
  multiple: Ref<boolean>;
  draggable: Ref<boolean>;
  directory: Ref<boolean>;
  showPreviewButton: Ref<boolean>;
  slots: UploadSlots;
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
      imageLoading,
      download,
      showLink,
      customIcon,
      showRemoveButton,
      showPreviewButton,
      accept: _accept,
    } = toRefs(props as UploadProps);
    const { name } = props;
    // slots
    const slots = useSlots() as UploadSlots;
    //   受控的fileList
    const computedFileList = useControlValue<FileItem[]>(
      fileList,
      defaultFileList.value,
      (val) => {
        // computedFileList.value.forEach((v) => {
        //   URL.revokeObjectURL(v.url);
        // });
        emits('update:fileList', val);
      }
    );
    // accept
    const accept = computed(() => {
      return listType.value != 'text' ? 'image/*' : _accept.value;
    });

    _provide<UploadContext>(UPLOAD_CONTEXT_KEY, {
      computedFileList,
      disabled,
      accept,
      directory,
      multiple,
      draggable,
      limit,
      tip,
      listType,
      imageLoading,
      showLink,
      download,
      customIcon,
      showRemoveButton,
      showPreviewButton,
      name,
      slots,
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
      name,
      tip,
      listType,
      customIcon,
      showPreviewButton,
      showRemoveButton,
      slots,
      emits,
    };
  };

  const inject = () => {
    return _inject<UploadContext>(UPLOAD_CONTEXT_KEY, {
      computedFileList: ref([]),
      disabled: ref(false),
      tip: ref(''),
      listType: ref('text'),
      showLink: ref(true),
      download: ref(false),
      imageLoading: ref('lazy'),
      customIcon: ref({}),
      name: '',
      directory: ref(false),
      multiple: ref(false),
      accept: ref(''),
      limit: ref(0),
      draggable: ref(false),
      showPreviewButton: ref(false),
      showRemoveButton: ref(true),
      slots: {},
      emits: () => {},
    });
  };

  return {
    provide,
    inject,
  };
}
