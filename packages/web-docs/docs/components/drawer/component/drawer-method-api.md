### Drawer全局方法

<span style="font-size:16px;">`Drawer` 提供的全局方法，可以通过以下三种方法使用：</span>

1. 通过 `this.$drawer` 调用
2. 在 Composition API 中，通过 `getCurrentInstance().appContext.config.globalProperties.$drawer` 调用
3. 导入 Drawer，通过 `Drawer` 本身调用

### DrawerConfig

<field-table :data="drawerConfigProps"/>

### DrawerMethod

<field-table :data="drawerMethodProps" type="methods"/>

### DrawerReturn

<field-table :data="drawerReturnProps" type="methods"/>

<script setup>
import { ref } from 'vue';

const drawerConfigProps = ref([
  {
    name: 'placement',
    desc: '抽屉放置的位置',
    type: "Placement",
    value: "'right'",
  },
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
  },
  {
    name: 'cancel-button-props',
    desc: '取消按钮的Props',
    type: 'ButtonProps',
    value: '-',
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
    name: 'drawer-style',
    desc: '抽屉的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'on-ok',
    desc: '点击确定按钮时触发',
    type: '(e?: Event) => void',
    value: '-',
  },
  {
    name: 'on-cancel',
    desc: '点击取消、关闭按钮时触发',
    type: '(e?: Event) => void',
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
    type: 'OnBeforeCancel',
    value: '-',
  },
  {
    name: 'on-open',
    desc: '抽屉打开后（动画结束）触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'on-close',
    desc: '抽屉关闭后（动画结束）触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'on-before-open',
    desc: '抽屉打开前触发',
    type: '() => void',
    value: '-',
  },
  {
    name: 'on-before-close',
    desc: '抽屉关闭前触发',
    type: '() => void',
    value: '-',
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
    type: 'boolean | RenderContent',
    value: 'true',
    href:"/guide/types"
  },
  {
    name: 'footer',
    desc: '是否展示底部内容',
    type: 'boolean | RenderContent',
    value: 'true',
    href:"/guide/types"
  },
  {
    name: 'hide-cancel',
    desc: '是否隐藏取消按钮',
    type: 'boolean',
    value: 'false',
  },
]);

const drawerReturnProps = ref([
  {
    name: 'close',
    desc: '关闭抽屉',
    type: '-',
    value: '-',
  }
]);

const drawerMethodProps = ref([
  {
    name: 'open',
    desc: '打开抽屉',
    type: {
      config: 'DrawerConfig'
    },
    value: '-',
  },
]);
</script>
