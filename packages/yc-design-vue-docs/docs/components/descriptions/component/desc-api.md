## API

### descriptions Props

<field-table :data="descriptionsProps"/>

### descriptions Slots

<field-table :data="descriptionsSlots" type="slots"/>

### descriptions-item Props

<field-table :data="descriptionsItemProps"/>

### descriptions-item Slots

<field-table :data="descriptionsItemSlots" type="slots"/>

### DescData

<field-table :data="descDataProps"/>

### Type

```typescript
type TextAlign = 'left' | 'right' | 'center';

type Align = TextAlign | { label?: TextAlign; value?: TextAlign };

type Column = number | ResponsiveValue;

type Layout =
  | 'horizontal'
  | 'vertical'
  | 'inline-horizontal'
  | 'inline-vertical';

export type TableLayout = 'auto' | 'fixed';
```

<script setup>
import { ref } from 'vue';

const descriptionsProps = ref([
  {
    name: 'data',
    desc: '描述列表的数据',
    type: 'DescData[]',
    value: '[]',
  },
  {
    name: 'column',
    desc: '每行放置的数据个数',
    type: 'Column',
    value: '3',
    href:"/guide/types"
  },
  {
    name: 'title',
    desc: '描述列表的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'layout',
    desc: '描述列表的排列方式',
    type: "Layout",
    value: "'horizontal'",
  },
  {
    name: 'align',
    desc: '文字的对齐位置',
    type: 'Align',
    value: "'left'",
  },
  {
    name: 'size',
    desc: '描述列表的大小',
    type: "Size",
    value: 'medium',
    href:'/guide/types'
  },
  {
    name: 'bordered',
    desc: '是否显示边框',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'label-style',
    desc: '数据标签的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'value-style',
    desc: '数据内容的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'table-layout',
    desc: '描述中表格样式的 layout-fixed，当设置成 fixed 时，宽度会均分。',
    type: "TableLayout",
    value: "'auto'",
  },
]);

const descriptionsSlots = ref([
  {
    name: 'value',
    desc: '数据内容',
    type: {
      value: 'string',
      index: 'number',
      data: 'DescData'
    },
    value: '-',
  },
  {
    name: 'label',
    desc: '数据标签',
    type: {
      label: 'string',
      index: 'number',
      data: 'DescData'
    },
    value: '-',
  },
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  }
]);

const descriptionsItemProps = ref([
  {
    name: 'span',
    desc: '所占列数',
    type: 'number',
    value: '1',
  },
  {
    name: 'label',
    desc: '标签',
    type: 'string',
    value: '-',
  },
]);

const descriptionsItemSlots = ref([
  {
    name: 'label',
    desc: '标签',
    type: '-',
    value: '-',
  }
]);

const descDataProps = ref([
  {
    name: 'label',
    desc: '标签',
    type: 'string | RenderFunction',
    value: '-',
  },
  {
    name: 'value',
    desc: '数据',
    type: 'string | RenderFunction',
    value: '-',
  },
  {
    name: 'span',
    desc: '所占列数',
    type: 'number',
    value: '1',
  },
]);
</script>
