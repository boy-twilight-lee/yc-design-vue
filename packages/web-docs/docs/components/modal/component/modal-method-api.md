### Modal全局方法

`Modal` 提供的全局方法，可以通过以下三种方法使用：

1. 通过 `this.$modal` 调用
2. 在 Composition API 中，通过 `getCurrentInstance().appContext.config.globalProperties.$modal` 调用
3. 导入 Modal，通过 `Modal` 本身调用

### ModalConfig

<field-table :data="modalConfigProps"/>

### ModalMethod

<field-table :data="modalMethodProps" type="methods"/>

### ModalReturn

<field-table :data="modalReturnProps" type="methods"/>

<script setup>
import { ref } from 'vue';

const modalMethodProps = ref([
  {
    name: 'open',
    desc: '打开对话框',
    type:{
      config: 'ModalConfig',
    },
    value: '-',
  },
  {
    name: 'confirm',
    desc: '打开对话框（简单模式）',
    type:{
      config: 'ModalConfig',
    },
    value: '-',
  },
  {
    name: 'info',
    desc: '打开信息对话框',
    type:{
      config: 'ModalConfig',
    },
    value: '-',
  },
  {
    name: 'success',
    desc: '打开成功对话框',
    type:{
      config: 'ModalConfig',
    },
    value: '-',
  },
  {
    name: 'warning',
    desc: '打开警告对话框',
    type:{
      config: 'ModalConfig',
    },
    value: '-',
  },
  {
    name: 'error',
    desc: '打开错误对话框',
    type:{
      config: 'ModalConfig',
    },
    value: '-',
  },
]);

const modalConfigProps = ref([
  {
    name: 'title',
    desc: '标题',
    type: 'RenderContent',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'content',
    desc: '内容',
    type: 'RenderContent',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'footer',
    desc: '页脚',
    type: 'boolean | RenderContent',
    value: 'true',
    href:"/guide/types"
  },
  {
    name: 'closable',
    desc: '是否显示关闭按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'okText',
    desc: '确认按钮的内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'cancelText',
    desc: '取消按钮的内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'okButtonProps',
    desc: '确认按钮的Props',
    type: 'ButtonProps',
    value: '-',
    href:'/components/button'
  },
  {
    name: 'cancelButtonProps',
    desc: '取消按钮的Props',
    type: 'ButtonProps',
    value: '-',
    href:'/components/button'
  },
  {
    name: 'okLoading',
    desc: '确认按钮是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'hideCancel',
    desc: '是否隐藏取消按钮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'mask',
    desc: '是否显示遮罩层',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'simple',
    desc: '是否开启简单模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'maskClosable',
    desc: '是否点击遮罩层可以关闭对话框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'maskStyle',
    desc: '蒙层的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'alignCenter',
    desc: '对话框是否居中显示',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'escToClose',
    desc: '是否支持 ESC 键关闭对话框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'draggable',
    desc: '是否支持拖动',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'fullscreen',
    desc: '是否开启全屏',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'onOk',
    desc: '点击确定按钮的回调函数',
    type: '(e?: Event) => void',
    value: '-',
  },
  {
    name: 'onCancel',
    desc: '点击取消按钮的回调函数',
    type: '(e?: Event) => void',
    value: '-',
  },
  {
    name: 'onBeforeOk',
    desc: '触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。',
    type: 'OnBeforeOk',
    value: '-',
  },
  {
    name: 'onBeforeCancel',
    desc: '触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。',
    type: 'OnBeforeCancel',
    value: '-',
  },
  {
    name: 'onOpen',
    desc: '对话框打开后（动画结束）触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'onClose',
    desc: '对话框关闭后（动画结束）触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'onBeforeOpen',
    desc: '对话框打开前触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'onBeforeClose',
    desc: '对话框关闭前触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'width',
    desc: '对话框的宽度，不设置的情况下会使用样式中的宽度值',
    type: 'number | string',
    value: '-',
  },
  {
    name: 'top',
    desc: '对话框的距离顶部的高度，居中显示开启的情况下不生效',
    type: 'number | string',
    value: '-',
  },
  {
    name: 'titleAlign',
    desc: '标题的水平对齐方向',
    type: "TitleAlign",
    value: "'center'",
  },
  {
    name: 'modalClass',
    desc: '对话框的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'modalStyle',
    desc: '对话框的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'maskAnimationName',
    desc: '遮罩层动画名字',
    type: 'string',
    value: '-',
  },
  {
    name: 'modalAnimationName',
    desc: '对话框动画名字',
    type: 'string',
    value: '-',
  },
  {
    name: 'hideTitle',
    desc: '是否隐藏标题',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'bodyClass',
    desc: '对话框内容部分的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'bodyStyle',
    desc: '对话框内容部分的样式',
    type: 'CSSProperties',
    value: '-',
  },
]);

const modalReturnProps = ref([
  {
    name: 'close',
    desc: '关闭对话框',
    type: '-',
    value: '-',
  },
]);
</script>
