## API

### layout Props

<field-table :data="layoutProps"/>

### layout Slots

<field-table :data="headerSlots"  type="slots"/>

### layout-header Slots

<field-table :data="headerSlots"  type="slots"/>

### layout-content Slots

<field-table :data="headerSlots"  type="slots"/>

### layout-footer Slots

<field-table :data="headerSlots"  type="slots"/>

### layout-sider props

<field-table :data="siderProps" />

### layout-sider emits

<field-table :data="siderEmits" type="emits"/>

### layout-sider slots

<field-table :data="siderSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const layoutProps = ref([
  {
    name: 'has-sider',
    desc: '表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动',
    type: 'boolean',
    value: 'false',
  },
]);

const headerSlots = ref([
  {
    name: 'default',
    desc: '内容',
    type: '-',
    value: '-',
  },
]);

const siderProps = ref([
  {
    name: 'theme',
    desc: '主题颜色',
    type: "Theme",
    value: "'light'",
    href:"/guide/types"
  },
  {
    name: 'collapsed',
    desc: '当前收起状态',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-collapsed',
    desc: '默认的收起状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'collapsible',
    desc: '是否可收起',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'width',
    desc: '宽度',
    type: 'number',
    value: '200',
  },
  {
    name: 'collapsed-width',
    desc: '收缩宽度',
    type: 'number',
    value: '48',
  },
  {
    name: 'reverse-arrow',
    desc: '翻转折叠提示箭头的方向，当 Sider 在右边时可以使用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'breakpoint',
    desc: "触发响应式布局的断点, 详见响应式栅格",
    type: "BreakpointName",
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'resize-directions',
    desc: '可以用 ResizeBox 替换原生的 aside 标签，这个参数即 ResizeBox的 directions 参数。详情请看 ResizeBox。',
    type: "Position",
    value: '-',
    href:'/guide/types'
  },
  {
    name: 'hide-trigger',
    desc: '隐藏底部折叠触发器',
    type: 'boolean',
    value: 'false',
  },
]);

const siderEmits = ref([
  {
    name: 'collapse',
    desc: '触发sider发生收缩',
    type: {
      collapsed:'boolean',
      type: "'clickTrigger' | 'responsive'"
    },
    value: '-',
  },
  {
    name: 'breakpoint',
    desc: '触发响应式收缩',
    type: {
      collapsed:'boolean',
    },
    value: '-',
  },
]);

const siderSlots = ref([
  {
    name: 'trigger',
    desc: '触发收缩的触发器',
    type: {
      collapsed:'boolean',
    },
    value: '-',
  },
]);
</script>
