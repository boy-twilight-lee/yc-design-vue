## API

### progress Props

<field-table :data="progressProps"/>

### Type

```typescript
type Type = 'line' | 'circle';
```

<script setup>
import { ref } from 'vue';

const progressProps = ref([
  {
    name: 'type',
    desc: '进度条的类型',
    type: "Type",
    value: "'line'",
  },
  {
    name: 'size',
    desc: '进度条的大小',
    type: 'Size',
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'percent',
    desc: '进度条当前的百分比',
    type: 'number',
    value: '0',
  },
  {
    name: 'steps',
    desc: '开启步骤条模式，并设置步骤数',
    type: 'number',
    value: '0',
  },
  {
    name: 'animation',
    desc: '是否开启过渡动画',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'stroke-width',
    desc: '进度条的线宽',
    type: 'number',
    value: '-',
  },
  {
    name: 'width',
    desc: '进度条的长度',
    type: 'number | string',
    value: '-',
  },
  {
    name: 'color',
    desc: '进度条的颜色',
    type: 'string | object',
    value: '-',
  },
  {
    name: 'track-color',
    desc: '进度条的轨道颜色',
    type: 'string',
    value: '-',
  },
  {
    name: 'show-text',
    desc: '是否显示文字',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'status',
    desc: '进度条状态',
    type: "Status",
    value: '-',
    href:'/guide/types'
  },
]);
</script>
