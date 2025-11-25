## API

### row Props

<field-table :data="rowProps" />

### col Props

<field-table :data="colProps"/>

### grid Props

<field-table :data="gridProps"/>

### grid-item Props

<field-table :data="gridItemProps"/>

### ResponsiveValue

<field-table :data="responsiveValue"/>

### Type

```typescript
type Justify = 'start' | 'center' | 'end' | 'space-around' | 'space-between';

type Align = 'start' | 'center' | 'end' | 'stretch';

type Flex = number | string | 'initial' | 'auto' | 'none';

type Gutter = number | ResponsiveValue;
```

<script setup>
import { ref } from 'vue';

const rowProps = ref([
  {
    name: 'gutter',
    desc: '栅格间隔，单位是px 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。',
    type: 'Gutter | [Gutter, Gutter]',
    value: '0',
  },
  {
    name: 'justify',
    desc: '水平对齐方式 (justify-content)',
    type: "Justify",
    value: "'start'",
  },
  {
    name: 'align',
    desc: '竖直对齐方式 ( align-items )',
    type: "Align",
    value: "'start'",
  },
  {
    name: 'div',
    desc: '开启这个选项Row和Col都会被当作div而不会附带任何Grid相关的类和样式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'wrap',
    desc: 'Col 是否支持换行',
    type: 'boolean',
    value: 'true',
  },
]);

const colProps = ref([
  {
    name: 'span',
    desc: '栅格占位格数',
    type: 'number | ResponsiveValue',
    value: '24',
    href:"/guide/types"
  },
  {
    name: 'offset',
    desc: '栅格左侧的间隔格数，间隔内不可以有栅格',
    type: 'number | ResponsiveValue',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'order',
    desc: '对元素进行排序',
    type: 'number | ResponsiveValue',
    value: '-',
  },
  {
    name: 'flex',
    desc: '设置 flex 布局属性',
    type: 'Flex',
    value: '-',
    href:"/guide/types"
  },
]);

const gridProps = ref([
  {
    name: 'cols',
    desc: '每一行展示的列数',
    type: 'number | ResponsiveValue',
    value: '24',
    href:"/guide/types"
  },
  {
    name: 'row-gap',
    desc: '行与行之间的间距',
    type: 'number | ResponsiveValue',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'col-gap',
    desc: '列与列之间的间距',
    type: 'number | ResponsiveValue',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'collapsed',
    desc: '是否折叠',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'collapsed-rows',
    desc: '折叠时显示的行数',
    type: 'number',
    value: '1',
  },
]);

const gridItemProps = ref([
  {
    name: 'span',
    desc: '跨越的格数',
    type: 'number | ResponsiveValue',
    value: '1',
    href:"/guide/types"
  },
  {
    name: 'offset',
    desc: '左侧的间隔格数',
    type: 'number | ResponsiveValue',
    value: '0',
    href:"/guide/types"
  },
  {
    name: 'suffix',
    desc: '是否是后缀元素',
    type: 'boolean',
    value: 'false',
  },
]);


const responsiveValue = ref([
  {
    name: 'xxl',
    desc: '>= 1600px 响应式配置',
    type: 'number',
    value: '-',
  },
  {
    name: 'xl',
    desc: '>= 1200px 响应式配置',
    type: 'number',
    value: '-',
  },
  {
    name: 'lg',
    desc: '>= 992px 响应式配置',
    type: 'number',
    value: '-',
  },
  {
    name: 'md',
    desc: '>= 768px 响应式配置',
    type: 'number',
    value: '-',
  },
  {
    name: 'sm',
    desc: '>= 576px 响应式配置',
    type: 'number',
    value: '-',
  },
  {
    name: 'xs',
    desc: '< 576px 响应式配置',
    type: 'number',
    value: '-',
  },
]);
</script>
