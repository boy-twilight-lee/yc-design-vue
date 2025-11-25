## API

### badge Props

<field-table :data="badgeProps"/>

### badge Slots

<field-table :data="badgeSlots" type="slots"/>

### Type

```typescript
type Status = 'normal' | 'processing' | 'success' | 'warning' | 'danger';
```

<script setup>
import { ref } from 'vue';

const badgeProps = ref([
  {
    name: 'text',
    desc: '自定义提示内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'dot',
    desc: '显示为小红点',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'dot-style',
    desc: '徽标的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'max-count',
    desc: '徽标最大显示数值，如果count超过这个数值会显示为maxCount',
    type: 'number',
    value: '99',
  },
  {
    name: 'offset',
    desc: '设置徽标位置的偏移',
    type: 'number[]',
    value: '[]',
  },
  {
    name: 'color',
    desc: '内置的一些颜色',
    type: 'string | ColorType',
    value: '-',
  },
  {
    name: 'status',
    desc: '徽标的状态类型',
    type: 'Status',
    value: '-',
  },
  {
    name: 'count',
    desc: '徽标显示的数字',
    type: 'number',
    value: '-',
  },
]);

const badgeSlots = ref([
  {
    name: 'content',
    desc: '徽标文字内容',
    type: '-',
    value: '-',
  },
]);
</script>
