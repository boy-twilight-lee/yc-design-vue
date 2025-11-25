## API

### Modal Props

<field-table :data="modalProps"/>

### Modal Emits

<field-table :data="modalEmits" type="emits"/>

### Modal Slots

<field-table :data="modalSlots" type="slots"/>

### Type

```typescript
type TitleAlign = 'start' | 'center';

type OnBeforeOk = (
  done: (closed: boolean) => void
) => void | boolean | Promise<boolean | void>;

type OnBeforeCancel = () => boolean;
```

<script setup>
import { ref } from 'vue';

const modalProps = ref([
  {
    name: 'visible (v-model)',
    desc: '对话框是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-visible',
    desc: '对话框默认是否可见（非受控状态）',
    type: 'boolean',
    value: 'false',
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
    name: 'mask',
    desc: '是否显示遮罩层',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'title-align',
    desc: '标题的水平对齐方向',
    type: "TitleAlign",
    value: "'center'",
  },
  {
    name: 'align-center',
    desc: '对话框是否居中显示',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'unmount-on-close',
    desc: '关闭时是否卸载节点',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'mask-closable',
    desc: '是否点击遮罩层可以关闭对话框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'hide-cancel',
    desc: '是否隐藏取消按钮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'simple',
    desc: '是否开启简单模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'closable',
    desc: '是否显示关闭按钮',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'ok-text',
    desc: '确认按钮的内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'cancel-text',
    desc: '取消按钮的内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'ok-loading',
    desc: '确认按钮是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'ok-button-props',
    desc: '确认按钮的Props',
    type: 'ButtonProps',
    value: '-',
    href:"/components/button"
  },
  {
    name: 'cancel-button-props',
    desc: '取消按钮的Props',
    type: 'ButtonProps',
    value: '-',
    href:"/components/button"
  },
  {
    name: 'footer',
    desc: '是否展示页脚部分',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'mask-style',
    desc: '蒙层的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'modal-class',
    desc: '对话框的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'modal-style',
    desc: '对话框的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'on-before-ok',
    desc: '触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。',
    type: 'OnBeforeOk',
    value: '-',
  },
  {
    name: 'on-before-cancel',
    desc: '触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。',
    type: 'OnBeforecancel',
    value: '-',
  },
  {
    name: 'esc-to-close',
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
    name: 'mask-animation-name',
    desc: '遮罩层动画名字',
    type: 'string',
    value: '-',
  },
  {
    name: 'modal-animation-name',
    desc: '对话框动画名字',
    type: 'string',
    value: '-',
  },
  {
    name: 'body-class',
    desc: '对话框内容部分的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'body-style',
    desc: '对话框内容部分的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'hide-title',
    desc: '是否隐藏标题',
    type: 'boolean',
    value: 'false',
  },
]);

const modalEmits = ref([
  {
    name: 'ok',
    desc: '点击确定按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'cancel',
    desc: '点击取消、关闭按钮时触发',
    type: {
      ev: 'MouseEvent | KeyboardEvent'
    },
    value: '-',
  },
  {
    name: 'open',
    desc: '对话框打开后（动画结束）触发',
    type: '-',
    value: '-',
  },
  {
    name: 'close',
    desc: '对话框关闭后（动画结束）触发',
    type: '-',
    value: '-',
  },
  {
    name: 'before-open',
    desc: '对话框打开前触发',
    type: '-',
    value: '-',
  },
  {
    name: 'before-close',
    desc: '对话框关闭前触发',
    type: '-',
    value: '-',
  },
]);

const modalSlots = ref([
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  },
  {
    name: 'footer',
    desc: '页脚',
    type: '-',
    value: '-',
  },
]);
</script>
