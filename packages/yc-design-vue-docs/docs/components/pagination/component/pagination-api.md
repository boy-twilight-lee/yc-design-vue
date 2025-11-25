## API

### pagination Props

<field-table :data="paginationProps"/>

### pagination Emits

<field-table :data="paginationEmits" type="emits"/>

### pagination Slots

<field-table :data="paginationSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const paginationProps = ref([
  {
    name: 'total',
    desc: '数据总数 (必填)',
    type: 'number',
    value: '-',
  },
  {
    name: 'current',
    desc: '当前的页数 (v-model)',
    type: 'number',
    value: '-',
  },
  {
    name: 'default-current',
    desc: '默认的页数（非受控状态）',
    type: 'number',
    value: '1',
  },
  {
    name: 'page-size',
    desc: '每页展示的数据条数 (v-model)',
    type: 'number',
    value: '-',
  },
  {
    name: 'default-page-size',
    desc: '默认每页展示的数据条数（非受控状态）',
    type: 'number',
    value: '10',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'hide-on-single-page',
    desc: '单页时是否隐藏分页',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'simple',
    desc: '是否为简单模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-total',
    desc: '是否显示数据总数',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-more',
    desc: '是否显示更多按钮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-jumper',
    desc: '是否显示跳转',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-page-size',
    desc: '是否显示数据条数选择器',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'page-size-options',
    desc: '数据条数选择器的选项列表',
    type: 'number[]',
    value: '',
  },
  {
    name: 'page-size-props',
    desc: '数据条数选择器的Props',
    type: 'SelectProps',
    value: '-',
  },
  {
    name: 'size',
    desc: '分页选择器的大小',
    type: 'Size',
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'page-item-style',
    desc: '分页按钮的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'active-page-item-style',
    desc: '当前分页按钮的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'base-size',
    desc: '计算显示省略的基础个数。显示省略的个数为 baseSize + 2 * bufferSize',
    type: 'number',
    value: '6',
  },
  {
    name: 'buffer-size',
    desc: '显示省略号时，当前页码左右显示的页码个数',
    type: 'number',
    value: '2',
  },
  {
    name: 'auto-adjust',
    desc: '是否在改变数据条数时调整页码',
    type: 'boolean',
    value: 'true',
  },
]);

const paginationEmits = ref([
  {
    name: 'change',
    desc: '页码改变时触发',
    type: {
      current: 'number'
    },
    value: '-',
  },
  {
    name: 'page-size-change',
    desc: '数据条数改变时触发',
    type: {
      pageSize: 'number'
    },
    value: '-',
  },
]);

const paginationSlots = ref([
  {
    name: 'total',
    desc: '总数',
    type: {
      total: 'number'
    },
    value: '-',
  },
  {
    name: 'page-item-ellipsis',
    desc: '分页按钮（省略）',
    type: '-',
    value: '-',
  },
  {
    name: 'page-item-step',
    desc: '分页按钮（步）',
    type: {
      type: "'previous' | 'next'"
    },
    value: '-',
  },
  {
    name: 'page-item',
    desc: '分页按钮',
    type: {
      page: 'number'
    },
    value: '-',
  },
]);
</script>
