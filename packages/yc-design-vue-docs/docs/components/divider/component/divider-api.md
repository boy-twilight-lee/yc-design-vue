## API

### divider Props

<field-table :data="dividerProps"/>

### Type

```typescript
type Orientation = 'left' | 'center' | 'right';

type Type = 'solid' | 'dashed' | 'dotted' | 'double';
```

<script setup>
import { ref } from 'vue';

const dividerProps = ref([
  {
    name: 'direction',
    desc: '分割线的方向，是水平还是竖直',
    type: "Direction",
    href:"/guide/types"
  },
  {
    name: 'orientation',
    desc: '分割线文字的位置',
    type: "Orientation",
    value: "'center'",
  },
  {
    name: 'type',
    desc: '分割线样式类型',
    type: "Type",
    value: "'solid'",
  },
  {
    name: 'size',
    desc: '分割线宽度/高度 ',
    type: 'number',
    value: '-',
  },
  {
    name: 'margin',
    desc: '分割线上下 margin (垂直方向时为左右 margin)',
    type: 'number | string',
    value: '-',
  },
]);
</script>
