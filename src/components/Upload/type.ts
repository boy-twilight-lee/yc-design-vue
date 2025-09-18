import { RenderFunction, VNode } from 'vue';

export interface UploadProps {
  fileList?: FileItem[];
  defaultFileList?: FileItem[];
  accept?: string;
  // action?: string;
  disabled?: boolean;
  multiple?: boolean;
  directory?: boolean;
  draggable?: boolean;
  tip?: string;
  // headers?: Record<string, string>;
  // data?:
  //   | Record<string, string | Blob>
  //   | ((fileItem: FileItem) => Record<string, string | Blob>);
  name?: FileName;
  // withCredentials?: boolean;
  // customRequest?: (option: RequestOption) => UploadRequest;
  limit?: number;
  // autoUpload?: boolean;
  showFileList?: boolean;
  showRemoveButton?: boolean;
  // showRetryButton?: boolean;
  showUploadButton?: boolean;
  showPreviewButton?: boolean;
  download?: boolean;
  showLink?: boolean;
  imageLoading?: 'eager' | 'lazy';
  listType?: 'text' | 'picture' | 'picture-card';
  // responseUrlKey?: string | ((fileItem: FileItem) => string);
  customIcon?: CustomIcon;
  imagePreview?: boolean;
  // onBeforeUpload?: (file: File) => boolean | Promise<boolean | File>;
  // onBeforeRemove?: (fileItem: FileItem) => Promise<boolean>;
  // onButtonClick?: (event: Event) => Promise<FileList> | void;
}

export interface UploadEmits {
  (e: 'update:fileList', value: FileItem[]): void;
  (e: 'exceed-limit', fileList: FileItem[], files: File[]): void;
  (e: 'change', fileList: FileItem[], files: File[]): void;
  (e: 'progress', fileItem: FileItem, ev: ProgressEvent): void;
  (e: 'preview', fileItem: FileItem): void;
  (e: 'success', fileItem: FileItem): void;
  (e: 'error', fileItem: FileItem): void;
}

export interface UploadSlots {
  ['extra-button']?: (scope: { fileItem: FileItem }) => VNode[];
  image?: (scope: { fileItem: FileItem }) => VNode[];
  ['file-name']?: () => VNode[];
  ['file-icon']?: () => VNode[];
  ['preview-icon']?: () => VNode[];
  ['cancel-icon']?: () => VNode[];
  ['start-icon']?: () => VNode[];
  ['error-name']?: () => VNode[];
  ['success-icon']?: () => VNode[];
  ['retry-icon']?: () => VNode[];
  ['upload-button']?: () => VNode[];
  ['upload-item']?: (scope: { fileItem: FileItem; index: number }) => VNode[];
}

export interface UploadExpose {
  submit: (fileItem: FileItem) => void;
  abort: (fileItem: FileItem) => void;
  updateFile: (id: string, File: File) => void;
  upload: (files: File[]) => void;
}

export type FileStatus = 'init' | 'uploading' | 'done' | 'error' | 'removed';

export type FileName = string | ((fileItem: FileItem) => string);

export type FileItem = {
  uid: string;
  name: string;
  status: FileStatus;
  file: File;
  percent: number;
  response?: any;
  url?: string;
};

export type CustomIcon = {
  startIcon?: RenderFunction;
  cancelIcon?: RenderFunction;
  retryIcon?: RenderFunction;
  successIcon?: RenderFunction;
  errorIcon?: RenderFunction;
  removeIcon?: RenderFunction;
  previewIcon?: RenderFunction;
  fileIcon?: (fileItem: FileItem) => VNode;
  fileName?: (fileItem: FileItem) => string | VNode;
};

export type RequestOption = {
  action: string;
  headers: Record<string, string>;
  name: string | ((fileItem: FileItem) => string);
  fileItem: FileItem;
  data?:
    | Record<string, string | Blob>
    | ((fileItem: FileItem) => Record<string, string | Blob>);
  withCredentials?: boolean;
  onProgress?: (percent: number, event?: ProgressEvent) => void;
  onSuccess?: (response?: any) => void;
  onError?: (response?: any) => void;
};

export type UploadRequest = {
  abort: () => void;
};
