## API

### avatar Props

<field-table :data="avatarProps"/>

### avatar Events

<field-table :data="avatarEvents" type="emits" />

### avatar Slots

<field-table :data="avatarSlots" type="slots"/>

### avatar-group Props

<field-table :data="avatarGroupProps" />

### Type

```typescript
type Shape = 'square' | 'round';

type TriggerType = 'mask' | 'button';
```

<script setup>
import { ref } from 'vue';

const avatarProps = ref([
  {
    name: 'shape',
    desc: '头像的形状，有圆形(circle)和正方形(square)两种',
    type: 'Shape',
    value: "'circle'",
  },
  {
    name: 'image-url',
    desc: '自定义头像图片地址，如果传入该属性，会默认渲染img标签',
    type: 'string',
    value: '-',
  },
  {
    name: 'size',
    desc: '头像的尺寸大小，单位是 px。未填写时使用样式中的大小 40px',
    type: 'number',
    value: "medium",
  },
  {
    name: 'auto-fix-font-size',
    desc: '是否自动根据头像尺寸调整字体大小',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'trigger-type',
    desc: '可点击的头像交互类型',
    type: 'TriggerType',
    value: "'button'",
  },
  {
    name: 'trigger-icon-style',
    desc: '交互图标的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'object-fit',
    desc: '图片在容器内的的适应类型',
    type: 'ObjectFit',
    value: "'cover'",
    href:'/guide/types'
  },
]);

const avatarEvents = ref([
  {
    name: 'click',
    desc: '点击回调',
    type: {
      ev: "MouseEvent"
    },
    value: '-',
  },
  {
    name: 'error',
    desc: '图片加载错误',
    type: {
      ev: "Event"
    },
    value: '-',
  },
  {
    name: 'load',
    desc: '图片加载成功',
    type: {
      ev: "Event"
    },
    value: '-',
  },
]);

const avatarSlots = ref([
  {
    name: 'trigger-icon',
    desc: '可点击的头像交互图标',
    type: '-',
    value: '-',
  },
]);

const avatarGroupProps = ref([
  {
    name: 'shape',
    desc: '头像的形状，有圆形(circle)和正方形(square)两种',
    type: 'Shape',
    value: "'circle'",
  },
  {
    name: 'size',
    desc: '头像的尺寸大小，单位是 px',
    type: 'number',
    value: 'medium',
  },
  {
    name: 'auto-fix-font-size',
    desc: '是否自动根据头像尺寸调整字体大小',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'max-count',
    desc: '头像组最多显示的头像数量，多余头像将以 +x 的形式展示。',
    type: 'number',
    value: '0',
  },
  {
    name: 'z-index-ascend',
    desc: '头像组内的头像 z-index 递增，默认是递减。',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'max-style',
    desc: '多余头像样式。',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'max-popover-trigger-props',
    desc: '多余头像气泡的 TriggerProps',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'
  },
]);

</script>
