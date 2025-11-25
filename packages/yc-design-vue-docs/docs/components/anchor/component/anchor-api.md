## API

### anchor Props

<field-table :data="anchorProps"/>

### anchor emits

<field-table :data="anchorEmits" type="emits"/>

### anchor-link Props

<field-table :data="anchorLinkProps" />

### Type

```typescript
type Boundary = 'start' | 'end' | 'center' | 'nearest' | number;
```

<script setup>
import { ref } from 'vue';

const anchorProps = ref([
  {
    name: 'boundary',
    desc: '滚动边界值，设置该值为数字后，将会在距离滚动容器 boundary 距離時停止滾動。',
    type: "Boundary",
    value: "'start'",
  },
  {
    name: 'line-less',
    desc: '是否显示左侧轴线',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'scroll-container',
    desc: '滚动容器',
    type: 'TargetContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'change-hash',
    desc: '是否改变hash。设置为 false 时点击锚点不会改变页面的 hash',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'smooth',
    desc: '是否使用平滑滚动',
    type: 'boolean',
    value: 'true',
  },
]);

const anchorEmits = ref([
  {
    name: 'select',
    desc: '用户点击链接时触发',
    type: {
        hash: 'string | undefined',
        preHash: 'string'
    },
    value: '-',
  },
  {
    name: 'change',
    desc: '链接发生改变时触发',
    type: {
        hash: 'string'
    },
    value: '-',
  },
]);

const anchorLinkProps = ref([
  {
    name: 'title',
    desc: '锚点链接的文本内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'href',
    desc: '锚点链接的地址',
    type: 'string',
    value: '-',
  },
]);
</script>
