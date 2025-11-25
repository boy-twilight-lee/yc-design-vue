## API

### alert Props

<field-table :data="alertProps"/>

### alert Events

<field-table :data="alertEvents" type="emits" />

### alert Slots

<field-table :data="alertSlots"  type="slots"/>

### Type

```typescript
type Type = info | success | warning | error | normal;
```

<script setup>
import { ref } from 'vue';

const alertProps = ref([
  {
    name: 'type',
    desc: '警告提示的类型。',
    type: 'Type',
    value: "'info'",
  },
  {
    name: 'show-icon',
    desc: '是否展示图标',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'closable',
    desc: '是否展示关闭按钮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'title',
    desc: '警告提示的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'banner',
    desc: '是否作为顶部公告使用（去除边框和圆角）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'center',
    desc: '内容是否居中显示',
    type: 'boolean',
    value: 'false',
  },
]);

const alertEvents = ref([
  {
    name: 'close',
    desc: '点击关闭按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'after-close',
    desc: '关闭动画结束后触发',
    type: '-',
    value: '-',
  },
]);

const alertSlots = ref([
  {
    name: 'icon',
    desc: '图标',
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
    name: 'action',
    desc: '操作项',
    type: '-',
    value: '-',
  },
  {
    name: 'close-element',
    desc: '关闭元素',
    type: '-',
    value: '-',
  },
]);
</script>
