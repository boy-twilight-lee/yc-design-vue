## API

### tag Props

<field-table :data="tagProps"/>

### tag Events

<field-table :data="tagEvents" type="emits"/>

### tag Slots

<field-table :data="tagSlots" type="slots"/>

```typescript
type Size = 'small' | 'medium' | 'large';

type Color =
  | 'red'
  | 'orangered'
  | 'orange'
  | 'gold'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'arcoblue'
  | 'purple'
  | 'pinkpurple'
  | 'magenta'
  | 'gray'
  | string;
```

<script setup>
import { ref } from 'vue';

const tagProps = ref([
  {
    name: 'color',
    desc: '标签的颜色',
    type: "Color",
    value: '-',
  },
  {
    name: 'size',
    desc: '标签的大小',
    type: "Size",
    value: "'medium'",
  },
  {
    name: 'bordered',
    desc: '是否显示边框',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'visible (v-model)',
    desc: '标签是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-visible',
    desc: '标签默认是否可见',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'loading',
    desc: '标签是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'closable',
    desc: '标签是否可关闭',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'checkable',
    desc: '标签是否可选中',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'checked (v-model)',
    desc: '标签是否选中（标签可选中时可用）',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-checked',
    desc: '标签默认选中状态（标签可选中时可用）',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'nowrap',
    desc: '标签内容不换行',
    type: 'boolean',
    value: 'false',
  },
]);

const tagEvents = ref([
  {
    name: 'close',
    desc: '点击关闭按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'check',
    desc: '用户选中时触发（仅在可选中模式下触发）',
    type: {
      checked: 'boolean',
      ev: 'MouseEvent'
    },
    value: '-',
  },
]);

const tagSlots = ref([
  {
    name: 'icon',
    desc: '图标',
    type: '-',
    value: '-',
  },
  {
    name: 'close-icon',
    desc: '关闭按钮的图标',
    type: '-',
    value: '-',
  },
]);
</script>
