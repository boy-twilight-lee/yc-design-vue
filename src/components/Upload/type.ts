import { RenderFunction, VNode } from 'vue';

export interface UploadProps {
  fileList?: FileItem[];
  defaultFileList?: FileItem[];
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  directory?: boolean;
  draggable?: boolean;
  tip?: string;
  name?: FileName;
  limit?: number;
  showFileList?: boolean;
  showRemoveButton?: boolean;
  showUploadButton?: boolean;
  showPreviewButton?: boolean;
  download?: boolean;
  showLink?: boolean;
  imageLoading?: ImageLoading;
  listType?: FileListType;
  customIcon?: CustomIcon;
  imagePreview?: boolean;
  onBeforeUpload?: OnBeforeUpload;
  onBeforeRemove?: OnBeforeRemove;
  // action?: string;
  // autoUpload?: boolean;
  // headers?: Record<string, string>;
  // data?:
  //   | Record<string, string | Blob>
  //   | ((fileItem: FileItem) => Record<string, string | Blob>);
  // responseUrlKey?: string | ((fileItem: FileItem) => string);
  // withCredentials?: boolean;
  // customRequest?: (option: RequestOption) => UploadRequest;
  // showRetryButton?: boolean;
  // onButtonClick?: (event: Event) => Promise<FileList> | void;
}

export interface UploadEmits {
  (e: 'update:fileList', value: FileItem[]): void;
  (e: 'exceed-limit', fileList: FileItem[], files: File[]): void;
  (e: 'change', fileList: FileItem[], files: File[]): void;
  (e: 'preview', fileItem: FileItem): void;
  // (e: 'progress', fileItem: FileItem, ev: ProgressEvent): void;
  // (e: 'success', fileItem: FileItem): void;
  // (e: 'error', fileItem: FileItem): void;
}

export interface UploadSlots {
  ['extra-button']?: (scope: { fileItem: FileItem }) => VNode[];
  image?: (scope: { fileItem: FileItem }) => VNode[];
  ['file-name']?: (scope: { fileItem: FileItem }) => VNode[];
  ['file-icon']?: (scope: { fileItem: FileItem }) => VNode[];
  ['remove-icon']?: () => VNode;
  ['preview-icon']?: () => VNode[];
  ['upload-button']?: () => VNode[];
  ['upload-item']?: (scope: { fileItem: FileItem; index: number }) => VNode[];
  // ['start-icon']?: () => VNode[];
  // ['cancel-icon']?: () => VNode[];
  // ['success-icon']?: () => VNode[];
  // ['error-icon']?: () => VNode[];
  // ['retry-icon']?: () => VNode[];
}

export interface UploadExpose {
  updateFile: (id: string, File: File) => void;
  upload: (files: File[]) => void;
  // submit: (fileItem: FileItem) => void;
  // abort: (fileItem: FileItem) => void;
}

export type FileStatus = 'init' | 'uploading' | 'done' | 'error' | 'removed';

export type FileName = string | ((fileItem: FileItem) => string);

export type FileListType = 'text' | 'picture' | 'picture-card';

export type ImageLoading = 'eager' | 'lazy';

export type OnBeforeUpload = (file: File) => boolean | Promise<boolean>;

export type OnBeforeRemove = (fileItem: FileItem) => Promise<boolean>;

export type FileItem = {
  uid: string;
  name: string;
  status: FileStatus;
  file: File;
  percent: number;
  url: string;
  // response?: any;
};

export type CustomIcon = {
  fileIcon?: (fileItem: FileItem) => VNode;
  fileName?: (fileItem: FileItem) => string | VNode;
  removeIcon?: RenderFunction;
  previewIcon?: RenderFunction;
  // startIcon?: RenderFunction;
  // cancelIcon?: RenderFunction;
  // successIcon?: RenderFunction;
  // errorIcon?: RenderFunction;
  // retryIcon?: RenderFunction;
};

// export type RequestOption = {
//   action: string;
//   headers: Record<string, string>;
//   name: string | ((fileItem: FileItem) => string);
//   fileItem: FileItem;
//   data?:
//     | Record<string, string | Blob>
//     | ((fileItem: FileItem) => Record<string, string | Blob>);
//   withCredentials?: boolean;
//   onProgress?: (percent: number, event?: ProgressEvent) => void;
//   onSuccess?: (response?: any) => void;
//   onError?: (response?: any) => void;
// };

// export type UploadRequest = {
//   abort: () => void;
// };
