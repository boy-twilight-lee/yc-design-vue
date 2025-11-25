## API

### card Props

<field-table :data="cardProps"/>

### card Slots

<field-table :data="cardSlots" type="slots"/>

### card-meta Props

<field-table :data="cardMetaProps"/>

### card-meta Slots

<field-table :data="cardMetaSlots" type="slots"/>

### card-grid Props

<field-table :data="cardGridProps"/>

### Type

```typescript
type Size = 'medium' | 'small';
```

<script setup>
import { ref } from 'vue';

const cardProps = ref([
  {
    name: 'bordered',
    desc: '是否有边框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'loading',
    desc: '是否为加载中',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'hoverable',
    desc: '是否可悬浮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'size',
    desc: '卡片尺寸',
    type: 'Size',
    value: "'medium'",
  },
  {
    name: 'header-style',
    desc: '自定义标题区域样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'body-style',
    desc: '内容区域自定义样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'title',
    desc: '卡片标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'extra',
    desc: '卡片右上角的操作区域',
    type: 'string',
    value: '-',
  },
]);

const cardSlots = ref([
  {
    name: 'actions',
    desc: '卡片底部的操作组',
    type: '-',
    value: '-',
  },
  {
    name: 'cover',
    desc: '卡片封面',
    type: '-',
    value: '-',
  },
  {
    name: 'extra',
    desc: '卡片右上角的操作区域',
    type: '-',
    value: '-',
  },
  {
    name: 'title',
    desc: '卡片标题',
    type: '-',
    value: '-',
  },
]);

const cardMetaProps = ref([
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'description',
    desc: '描述',
    type: 'string',
    value: '-',
  },
]);

const cardMetaSlots = ref([
  {
    name: 'description',
    desc: '描述',
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
    name: 'avatar',
    desc: '头像',
    type: '-',
    value: '-',
  },
]);

const cardGridProps = ref([
  {
    name: 'hoverable',
    desc: '是否可以悬浮',
    type: 'boolean',
    value: 'false',
  },
]);

</script>
