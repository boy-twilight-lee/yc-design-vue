## API

### list Props

<field-table :data="listProps"/>

### list Events

<field-table :data="listEvents" type="emits"/>

### list Methods

<field-table :data="listMethods" type="methods"/>

### list Slots

<field-table :data="listSlots" type="slots"/>

### list-item Props

<field-table :data="listItemProps"/>

### list-item Slots

<field-table :data="listItemSlots" type="slots"/>

### list-item-meta Props

<field-table :data="listItemMetaProps"/>

### list-item-meta Slots

<field-table :data="listItemMetaSlots" type="slots"/>

### Type

```typescript
type Size = 'small' | 'medium' | 'large';
```

<script setup>
import { ref } from 'vue';

const listProps = ref([
  {
    name: 'data',
    desc: '列表数据，需要和 item 插槽同时使用',
    type: 'any[]',
    value: '-',
  },
  {
    name: 'size',
    desc: '列表大小',
    type: "Size",
    value: "'medium'",
  },
  {
    name: 'bordered',
    desc: '是否显示边框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'split',
    desc: '是否显示分割线',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'loading',
    desc: '是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'hoverable',
    desc: '是否显示选中样式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'pagination-props',
    desc: '列表分页配置',
    type: 'PaginationProps',
    value: '-',
    href:"/components/pagination"
  },
  {
    name: 'max-height',
    desc: '列表的最大高度',
    type: 'string | number',
    value: '0',
  },
  {
    name: 'bottom-offset',
    desc: '触发到达底部的距离阈值',
    type: 'number',
    value: '0',
  },
  {
    name: 'virtual-list-props',
    desc: '传递虚拟列表属性，传入此参数以开启虚拟滚动 VirtualListProps',
    type: 'VirtualListProps',
    value: '-',
    href:"/components/select"
  }
]);

const listEvents = ref([
  {
    name: 'scroll',
    desc: '列表滚动时触发',
    type: {
      ev:'Event'
    },
    value: '-',
  },
  {
    name: 'reach-bottom',
    desc: '当列表到达底部时触发',
    type: {
      ev:'Event'
    },
    value: '-',
  },
  {
    name: 'page-change',
    desc: '表格分页发生改变时触发',
    type: {
      page: 'number'
    },
    value: '-',
  },
  {
    name: 'page-size-change',
    desc: '表格每页数据数量发生改变时触发',
    type: {
      pageSize: 'number'
    },
    value: '-',
  },
]);

const listMethods = ref([
  {
    name: 'scrollIntoView',
    desc: '虚拟滚动到某个元素',
    type: {
      options: "{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom' }"
    },
    value: '-',
  },
]);

const listSlots = ref([
  {
    name: 'scroll-loading',
    desc: '滚动加载状态时，滚动到底部的提示',
    type: '-',
    value: '-',
  },
  {
    name: 'item',
    desc: '列表项',
    type: {
      index: 'number',
      item: 'Record<string,any>'
    },
    value: '-',
  },
  {
    name: 'empty',
    desc: '空白展示',
    type: '-',
    value: '-',
  },
  {
    name: 'footer',
    desc: '底部信息',
    type: '-',
    value: '-',
  },
  {
    name: 'header',
    desc: '头部信息',
    type: '-',
    value: '-',
  },
]);

const listItemProps = ref([
  {
    name: 'action-layout',
    desc: '操作组排列方向',
    type: 'Direction',
    value: "'horizontal'",
    href:"/guide/types"
  },
]);

const listItemSlots = ref([
  {
    name: 'meta',
    desc: 'meta信息',
    type: '-',
    value: '-',
  },
  {
    name: 'extra',
    desc: '额外内容',
    type: '-',
    value: '-',
  },
  {
    name: 'actions',
    desc: '操作组',
    type: '-',
    value: '-',
  },
]);

const listItemMetaProps = ref([
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'description',
    desc: '描述内容',
    type: 'string',
    value: '-',
  },
]);

const listItemMetaSlots = ref([
  {
    name: 'avatar',
    desc: '头像',
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
    name: 'description',
    desc: '描述内容',
    type: '-',
    value: '-',
  },
]);
</script>
