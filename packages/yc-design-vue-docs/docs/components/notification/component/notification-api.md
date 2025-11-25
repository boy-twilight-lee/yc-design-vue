## API

### Notification全局方法

`Notification` 提供的全局方法，可以通过以下三种方法使用：

1. 通过 `this.$notification` 调用
2. 在 Composition API 中，通过 `getCurrentInstance().appContext.config.globalProperties.$notification` 调用
3. 导入 Notification，通过 `Notification` 本身调用

### NotificationConfig

<field-table :data="notificationConfigProps"/>

### NotificationMethod

<field-table :data="notificationMethodProps" type="methods"/>

### NotificationReturn

<field-table :data="notificationReturnProps" type="methods"/>

### Type

```typescript
type Position = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
```

<script setup>
import { ref } from 'vue';

const notificationMethodProps = ref([
  {
    name: 'info',
    desc: '显示信息提醒框',
    type:{
      config: 'string | NotificationConfig',
    },
    value: '-',
  },
  {
    name: 'success',
    desc: '显示成功提醒框',
    type:{
      config: 'string | NotificationConfig',
    },
    value: '-',
  },
  {
    name: 'warning',
    desc: '显示警告提醒框',
    type:{
      config: 'string | NotificationConfig',
    },
    value: '-',
  },
  {
    name: 'error',
    desc: '显示错误提醒框',
    type:{
      config: 'string | NotificationConfig',
    },
    value: '-',
  },
  {
    name: 'remove',
    desc: '清除对应 id 的提醒框',
    type: {
      id: 'string'
    },
    value: '-',
  },
  {
    name: 'clear',
    desc: '清除全部提醒框',
    type: {
      position: 'Position'
    },
    value: '-',
  },
]);

const notificationConfigProps = ref([
  {
    name: 'content',
    desc: '内容',
    type: 'RenderContent',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'title',
    desc: '标题',
    type: 'RenderContent',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'icon',
    desc: '图标',
    type: 'RenderFunction',
    value: '-',
  },
  {
    name: 'id',
    desc: '唯一id',
    type: 'string',
    value: '-',
  },
  {
    name: 'style',
    desc: '样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'class',
    desc: '样式类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'position',
    desc: '位置',
    type: "Position",
    value: '-',
  },
  {
    name: 'showIcon',
    desc: '是否显示图标',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'closable',
    desc: '是否可关闭',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'duration',
    desc: '显示的持续时间，单位为 ms',
    type: 'number',
    value: '3000',
  },
  {
    name: 'footer',
    desc: '底部内容',
    type: 'RenderFunction',
    value: '-',
  },
  {
    name: 'closeIcon',
    desc: '关闭按钮图标',
    type: 'RenderFunction',
    value: '-',
  },
  {
    name: 'closeIconElement',
    desc: '关闭按钮元素',
    type: 'RenderFunction',
    value: '-',
  },
  {
    name: 'onClose',
    desc: '关闭时的回调函数',
    type: '(id: number | string) => void',
    value: '-',
  },
]);

const notificationReturnProps = ref([
  {
    name: 'close',
    desc: '关闭当前通知提醒框',
    type: '-',
    value: '-',
  },
]);
</script>
