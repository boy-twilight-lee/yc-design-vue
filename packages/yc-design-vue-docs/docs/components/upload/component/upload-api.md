## API

### upload Props

<field-table :data="uploadProps"/>

### upload Events

<field-table :data="uploadEvents" type="emits" />

### upload Methods

<field-table :data="uploadMethods" type="methods" />

### upload Slots

<field-table :data="uploadSlots" type="slots"/>

### FileItem

<field-table :data="fileItemProps" />

### CustomIcon

<field-table :data="customIconProps" />

<!-- ### RequestOption

<field-table :data="requestOptionProps" />

### UploadRequest

<field-table :data="uploadRequestProps" /> -->

### Type

```typescript
type FileStatus = 'init' | 'uploading' | 'done' | 'error' | 'removed';

type FileName = string | ((fileItem: FileItem) => string);

type ListType = 'text' | 'picture' | 'picture-card';

type ImageLoading = 'eager' | 'lazy';

type OnBeforeUpload = (file: File) => boolean | Promise<boolean>;

type OnBeforeRemove = (fileItem: FileItem) => Promise<boolean>;

type OnButtonClick = (event: Event) => Promise<FileList> | void;
```

<script setup>
import { ref } from 'vue';

const uploadProps = ref([
  {
    name: 'file-list (v-model)',
    desc: '文件列表',
    type: 'FileItem[]',
    value: '-',
  },
  {
    name: 'default-file-list',
    desc: '默认的文件列表（非受控状态）',
    type: 'FileItem[]',
    value: '[]',
  },
  {
    name: 'accept',
    desc: '接收的上传文件类型，具体参考 HTML标准',
    type: 'string',
    value: '-',
  },
  { name: 'action', desc: '上传的URL', type: 'string', value: '-' },
  { name: 'disabled', desc: '是否禁用', type: 'boolean', value: 'false' },
  {
    name: 'multiple',
    desc: '是否支持多文件上传',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'directory',
    desc: '是否支持文件夹上传（需要浏览器支持）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'draggable',
    desc: '是否支持拖拽上传',
    type: 'boolean',
    value: 'false',
  },
  { name: 'tip', desc: '提示文字', type: 'string', value: '-' },
  {
    name: 'name',
    desc: '上传的文件名',
    type: 'FileName',
    value: '-',
  },
  {
    name: 'limit',
    desc: '限制上传文件的数量。0表示不限制',
    type: 'number',
    value: '0',
  },
  {
    name: 'show-file-list',
    desc: '是否显示文件列表',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'show-remove-button',
    desc: '是否显示删除按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'show-cancel-button',
    desc: '是否显示取消按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'show-upload-button',
    desc: '是否显示上传按钮。',
    type: 'boolean | { showOnExceedLimit: boolean }',
    value: 'true',
  },
  {
    name: 'show-preview-button',
    desc: '照片墙是否显示预览按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'download',
    desc: '是否在 <a> 链接上添加 download 属性',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-link',
    desc: '在列表模式下，如果上传的文件存在 URL 则展示链接。如果关闭仅展示文字并且点击可以触发 preview 事件。',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'image-loading',
    desc: '<img> 的原生 HTML 属性，需要浏览器支持',
    type: "ImageLoading",
    value: '-',
  },
  {
    name: 'list-type',
    desc: '图片列表类型',
    type: "ListType",
    value: "'text'",
  },
  { name: 'custom-icon', desc: '自定义图标', type: 'CustomIcon', value: '-' },
  {
    name: 'image-preview',
    desc: '是否使用 ImagePreview 组件进行预览',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'on-before-upload',
    desc: '上传文件前触发',
    type: 'OnBeforeUpload',
    value: '-',
  },
  {
    name: 'on-before-remove',
    desc: '移除文件前触发',
    type: 'onBeforeRemove',
    value: '-',
  },
  {
    name: 'on-button-click',
    desc: '点击上传按钮触发（如果返回 Promise 则会关闭默认 input 上传）',
    type: 'OnButtonClick',
    value: '-',
  },
  //   {
  //     name: 'headers',
  //     desc: '上传请求附加的头信息',
  //     type: 'Record<string, string>',
  //     value: '-',
  //   },
  //   {
  //     name: 'data',
  //     desc: '上传请求附加的数据',
  //     type: 'Record<string, string | Blob>| ((fileItem: FileItem) => Record<string, string | Blob>)',
  //     value: '-',
  //   },
  //   {
  //     name: 'with-credentials',
  //     desc: '上传请求是否携带 cookie',
  //     type: 'boolean',
  //     value: 'false',
  //   },
  //   {
  //     name: 'custom-request',
  //     desc: '自定义上传行为',
  //     type: '(option: RequestOption) => UploadRequest',
  //     value: '-',
  //   },
  //   {
  //     name: 'auto-upload',
  //     desc: '是否自动上传文件',
  //     type: 'boolean',
  //     value: 'true',
  //   },
  //   {
  //     name: 'show-retry-button',
  //     desc: '是否显示重试按钮',
  //     type: 'boolean',
  //     value: 'true',
  //
  //   },
  //   {
  //     name: 'response-url-key',
  //     desc: 'Response中获取图片URL的key，开启后会用上传的图片替换预加载的图片',
  //     type: 'string | ((fileItem: FileItem) => string)',
  //     value: '-',
  //   },
]);

const uploadEvents = ref([
  {
    name: 'exceed-limit',
    desc: '上传的文件超出限制后触发',
    type: { fileList: 'FileItem[]', files: 'File[]' },
  },
  {
    name: 'change',
    desc: '上传的文件状态发生改变时触发',
    type: { fileList: 'FileItem[]', fileItem: 'fileItem' },
  },
  {
    name: 'preview',
    desc: '点击图片预览时的触发',
    type: { fileItem: 'FileItem' },
  },
  //   {
  //     name: 'progress',
  //     desc: '上传中的文件进度改变时触发',
  //     type: { fileItem: 'fileItem', ev: 'ProgressEvent' },
  //   },
  //   { name: 'success', desc: '上传成功时触发', type: { fileItem: 'FileItem' } },
  //   { name: 'error', desc: '上传失败时触发', type: { fileItem: 'FileItem' } },
]);

const uploadMethods = ref([
  {
    name: 'updateFile',
    desc: '更新文件',
    type: {
        id: 'string', file: 'File'
    },
    value: '-',
  },
  {
    name: 'upload',
    desc: '上传文件',
    type: {
        files: 'File[]'
    },
    value: '-',
  },
  //   {
  //     name: 'submit',
  //     desc: '上传文件（已经初始化完成的文件）',
  //     type: 'fileItem: FileItem',
  //     returnValue: '-',
  //   },
  //   {
  //     name: 'abort',
  //     desc: '中止上传',
  //     type: 'fileItem: FileItem',
  //     returnValue: '-',
  //   },
]);

const uploadSlots = ref([
  {
    name: 'extra-button',
    desc: '上传列表额外按钮',
    type: {
        fileItem: 'FileItem'
    },
  },
  {
    name: 'image',
    desc: '自定义图片',
    type: {
        fileItem: 'FileItem'
    },
  },
  { name: 'file-name', desc: '文件名称', type: '-' },
  { name: 'file-icon', desc: '文件图标', type: '-' },
  { name: 'remove-icon', desc: '删除图标', type: '-' },
  { name: 'preview-icon', desc: '预览图标', type: '-' },
  { name: 'upload-button', desc: '上传按钮', type: '-' },
  {
    name: 'upload-item',
    desc: '上传列表的项目',
     type: {
        fileItem: 'FileItem',
        index: 'number'
    },
  },
  //   { name: 'cancel-icon', desc: '取消图标', type: '-',  },
  //   { name: 'start-icon', desc: '开始图标', type: '-',  },
  //   { name: 'error-icon', desc: '失败图标', type: '-',  },
  //   { name: 'success-icon', desc: '成功图标', type: '-',  },
  //   { name: 'retry-icon', desc: '重试图标', type: '-',  },
]);

const fileItemProps = ref([
  { name: 'uid', desc: '当前上传文件的唯一标示', type: 'string', value: '-' },
  {
    name: 'status',
    desc: '当前上传文件的状态',
    type: 'FileStatus',
    value: '-',
  },
  { name: 'file', desc: '文件对象', type: 'File', value: '-' },
  { name: 'percent', desc: '上传进度百分比', type: 'number', value: '-' },
  { name: 'url', desc: '文件地址', type: 'string', value: '-' },
  { name: 'name', desc: '文件名', type: 'string', value: '-' },
  //   {
  //     name: 'response',
  //     desc: '当前文件上传请求返回的响应',
  //     type: 'any',
  //     value: '-',
  //    },
]);

const customIconProps = ref([
  { name: 'removeIcon', desc: '移除图标', type: 'RenderFunction', value: '-' },
  { name: 'previewIcon', desc: '预览图标', type: 'RenderFunction', value: '-' },
  {
    name: 'fileIcon',
    desc: '文件图标',
    type: '(fileItem: FileItem) => VNode',
    value: '-',
  },
  {
    name: 'fileName',
    desc: '文件名',
    type: '(fileItem: FileItem) => string | VNode',
    value: '-',
  },
  //   { name: 'startIcon', desc: '开始图标', type: 'RenderFunction', value: '-' },
  //   { name: 'cancelIcon', desc: '取消图标', type: 'RenderFunction', value: '-' },
  //   { name: 'retryIcon', desc: '重试图标', type: 'RenderFunction', value: '-' },
  //   { name: 'successIcon', desc: '成功图标', type: 'RenderFunction', value: '-' },
  //   { name: 'errorIcon', desc: '失败图标', type: 'RenderFunction', value: '-' },
]);

const requestOptionProps = ref([
  { name: 'action', desc: '上传的URL', type: 'string', value: '-' },
  {
    name: 'headers',
    desc: '请求报文的头信息',
    type: 'Record<string, string>',
    value: '-',
  },
  {
    name: 'name',
    desc: '上传文件的文件名',
    type: 'string | ((fileItem: FileItem) => string)',
    value: '-',
  },
  { name: 'fileItem', desc: '上传文件', type: 'FileItem', value: '-' },
  {
    name: 'data',
    desc: '附加的请求信息',
    type: 'Record<string, string | Blob> | ((fileItem: FileItem) => Record<string, string | Blob>)',
    value: '-',
  },
  {
    name: 'withCredentials',
    desc: '是否携带cookie信息',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'onProgress',
    desc: '更新当前文件的上传进度。percent: 当前上传进度百分比',
    type: '(percent: number, event?: ProgressEvent) => void',
    value: '-',
  },
  {
    name: 'onSuccess',
    desc: '上传成功后，调用onSuccess方法，传入的response参数将会附加到当前上传文件的response字段上',
    type: '(response?: any) => void',
    value: '-',
  },
  {
    name: 'onError',
    desc: '上传失败后，调用onError方法，传入的response参数将会附加到当前上传文件的response字段上',
    type: '(response?: any) => void',
    value: '-',
  },
]);

const uploadRequestProps = ref([
  { name: 'abort', desc: '终止上传', type: '() => void', value: '-' },
]);

</script>
