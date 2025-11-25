## API

### skeleton Props

<field-table :data="skeletonProps"/>

### Skeleton-Line Props

<field-table :data="skeletonLineProps"/>

### Skeleton-Shape Props

<field-table :data="skeletonShapeProps"/>

### Type

```typescript
type Shape = 'square' | 'circle';

type Size = 'small' | 'medium' | 'large';
```

<script setup>
import { ref } from 'vue';

const skeletonProps = ref([
  {
    name: 'loading',
    desc: '是否展示骨架屏（加载中状态）',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'animation',
    desc: '是否开启骨架屏动画',
    type: 'boolean',
    value: 'false',
  },
]);

const skeletonLineProps = ref([
  {
    name: 'rows',
    desc: '展示的行数',
    type: 'number',
    value: '1',
  },
  {
    name: 'widths',
    desc: '线型骨架的宽度',
    type: 'Array<number | string>',
    value: '[]',
  },
  {
    name: 'line-height',
    desc: '线型骨架的行高',
    type: 'number',
    value: '20',
  },
  {
    name: 'line-spacing',
    desc: '线型骨架的行间距',
    type: 'number',
    value: '15',
  },
]);

const skeletonShapeProps = ref([
  {
    name: 'shape',
    desc: '图形骨架的形状',
    type: "Shape",
    value: "'square'",
  },
  {
    name: 'size',
    desc: '图形骨架的大小',
    type: "Size",
    value: "'medium'",
  },
]);
</script>
