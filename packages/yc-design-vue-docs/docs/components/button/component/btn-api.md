## API

### button Props

<field-table :data="buttonProps"/>

### button Events

<field-table :data="buttonEvents" type="emits" />

### button Slots

<field-table :data="buttonSlots"  type="slots"/>

### button-group Props

<field-table :data="buttonGroupProps" />

```typescript
type Type = 'primary' | 'secondary' | 'dashed' | 'outline' | 'text';

type HtmlType = 'button' | 'reset' | 'submit';
```

<script setup>
import { ref } from 'vue';

const buttonProps = ref([
  {
    name: 'type',
    desc: '按钮的类型，分为五种：次要按钮、主要按钮、虚框按钮、线性按钮、文字按钮。',
    type: 'Type',
    value: "'secondary'",
  },
  {
    name: 'shape',
    desc: '按钮的形状',
    type: 'Shape',
    value: "'square'",
    href:'/guide/types'
  },
  {
    name: 'status',
    desc: '按钮的状态',
    type: 'Status',
    value: "'normal'",
    href:'/guide/types'
  },
  {
    name: 'size',
    desc: '按钮的尺寸',
    type: 'Size',
    value: "'medium'",
    href:'/guide/types'
  },
  {
    name: 'long',
    desc: '按钮的宽度是否随容器自适应。',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'loading',
    desc: '按钮是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled',
    desc: '按钮是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'html-type',
    desc: '设置 button 的原生 type 属性，可选值参考 HTML标准',
    type: 'string',
    value: "'button'",
  },
  {
    name: 'autofocus',
    desc: '设置 button 的原生 autofocus 属性，可选值参考 HTML标准',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'href',
    desc: '设置跳转链接。设置此属性时，按钮渲染为a标签。',
    type: 'string',
    value: '-',
  },
]);

const buttonEvents = ref([
  {
    name: 'click',
    desc: '点击按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
]);

const buttonSlots = ref([
  {
    name: 'icon',
    desc: '图标',
    type: '-',
    value: '-',
  },
]);

const buttonGroupProps = ref([
  {
    name: 'type',
    desc: '按钮的类型，分为五种：次要按钮、主要按钮、虚框按钮、线性按钮、文字按钮。',
    type: 'Type',
    value: '-',
  },
  {
    name: 'status',
    desc: '按钮的状态',
    type: 'Status',
    value: '-',
    href:'/guide/types'
  },
  {
    name: 'shape',
    desc: '按钮的形状',
    type: 'Shape',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'size',
    desc: '按钮的尺寸',
    type: 'Size',
    value: '-',
     href:'/guide/types'
  },
  {
    name: 'disabled',
    desc: '全部子按钮是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);


</script>
