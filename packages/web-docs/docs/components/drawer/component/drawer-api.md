## API

### drawer Props

<field-table :data="drawerProps"/>

### drawer Events

<field-table :data="drawerEvents" type="emits" />

### drawer Slots

<field-table :data="drawerSlots"  type="slots"/>

<script setup>
import { ref } from 'vue';

const drawerProps = ref([
  {
    name: 'visible (v-model)',
    desc: '抽屉是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-visible',
    desc: '抽屉默认是否可见（非受控模式）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'placement',
    desc: '抽屉放置的位置',
    type: "Position",
    value: "'right'",
    href:'/guide/types'
  },
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'mask',
    desc: '是否显示遮罩层',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'mask-closable',
    desc: '点击遮罩层是否可以关闭',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'closable',
    desc: '是否展示关闭按钮',
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
    name: 'unmount-on-close',
    desc: '关闭时是否卸载节点',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'width',
    desc: '抽屉的宽度（仅在placement为right,left时可用）',
    type: 'number | string',
    value: '250',
  },
  {
    name: 'height',
    desc: '抽屉的高度（仅在placement为top,bottom时可用）',
    type: 'number | string',
    value: '250',
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: "-",
    href:"/guide/types"
  },
  {
    name: 'drawer-style',
    desc: '抽屉的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'body-class',
    desc: '抽屉内容部分的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'body-style',
    desc: '抽屉内容部分的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'on-before-ok',
    desc: '触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。',
    type: 'OnBeforeOk',
    value: '-',
    href:'/components/modal'
  },
  {
    name: 'on-before-cancel',
    desc: '触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。',
    type: 'OnBeforeCancel',
    value: '-',
    href:'/components/modal'
  },
  {
    name: 'esc-to-close',
    desc: '是否支持 ESC 键关闭抽屉',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'header',
    desc: '是否展示头部内容',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'footer',
    desc: '是否展示底部内容',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'hide-cancel',
    desc: '是否隐藏取消按钮',
    type: 'boolean',
    value: 'false',
  },
]);

const drawerEvents = ref([
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
    desc: '抽屉打开后（动画结束）触发',
    type: '-',
    value: '-',
  },
  {
    name: 'close',
    desc: '抽屉关闭后（动画结束）触发',
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

const drawerSlots = ref([
  {
    name: 'header',
    desc: '页眉',
    type: '-',
    value: '-',
  },
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
