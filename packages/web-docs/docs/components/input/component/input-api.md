## API

### input Props

<field-table :data="inputProps"/>

### input Events

<field-table :data="inputEvents" type="emits" />

### input Methods

<field-table :data="inputMethods" type="methods" />

### input Slots

<field-table :data="inputSlots"  type="slots"/>

### input-password Props

<field-table :data="inputPasswordProps"/>

### input-password Events

<field-table :data="inputPasswordEvents" type="emits" />

### input-search Props

<field-table :data="inputSearchProps"/>

### input-search Events

<field-table :data="inputSearchEvents" type="emits" />

### Type

```typescript
type WordSlice = (value: string, maxLength: number) => string;

type WordLength = (value: string) => number;

type MaxLength = number | { length: number; errorOnly?: boolean };
```

<script setup>
import { ref } from 'vue';

const inputProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'string',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'string',
    value: "''",
  },
  {
    name: 'size',
    desc: '输入框大小',
    type: "Size",
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'allow-clear',
    desc: '是否允许清空输入框',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'readonly',
    desc: '是否为只读状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'error',
    desc: '是否为错误状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'placeholder',
    desc: '提示文字',
    type: 'string',
    value: '-',
  },
  {
    name: 'max-length',
    desc: '输入值的最大长度',
    type: 'MaxLength',
    value: '-',
  },
  {
    name: 'show-word-limit',
    desc: '是否显示字数统计',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'word-length',
    desc: '字符长度的计算方法',
    type: 'WordLength',
    value: '-',
  },
  {
    name: 'word-slice',
    desc: '字符截取方法，同 wordLength 一起使用',
    type: 'WordSlice',
    value: '-',
  },
  {
    name: 'input-attrs',
    desc: '内部 input 元素的属性',
    type: 'object',
    value: '-',
  },
  {
    name: 'prepend',
    desc: '前置标签',
    type: 'string',
    value: '-',
  },
  {
    name: 'append',
    desc: '后置标签',
    type: 'string',
    value: '-',
  },
]);

const inputEvents = ref([
  {
    name: 'input',
    desc: '用户输入时触发',
    type: {
      value: 'string',
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'change',
    desc: '仅在输入框失焦或按下回车时触发',
    type: {
      value: 'string',
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'press-enter',
    desc: '用户按下回车时触发',
    type: {
      ev: 'KeyboardEvent'
    },
    value: '-',
  },
  {
    name: 'clear',
    desc: '用户点击清除按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'focus',
    desc: '输入框获取焦点时触发',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  },
  {
    name: 'blur',
    desc: '输入框失去焦点时触发',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  },
  {
    name: 'visibility-change',
    desc: '密码输入框的可见状态',
    type: {
      visibility: 'boolean'
    },
    value: '-',
  },
]);

const inputMethods = ref([
  {
    name: 'focus',
    desc: '使输入框获取焦点',
    type: '-',
    value: '-',
  },
  {
    name: 'blur',
    desc: '使输入框失去焦点',
    type: '-',
    value: '-',
  },
]);

const inputSlots = ref([
  {
    name: 'append',
    desc: '后置标签',
    type: '-',
    value: '-',
  },
  {
    name: 'prepend',
    desc: '前置标签',
    type: '-',
    value: '-',
  },
  {
    name: 'suffix',
    desc: '后缀元素',
    type: '-',
    value: '-',
  },
  {
    name: 'prefix',
    desc: '前缀元素',
    type: '-',
    value: '-',
  },
]);

const inputPasswordProps = ref([
  {
    name: 'visibility (v-model)',
    desc: '是否可见，受控属性',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-visibility',
    desc: '默认是否可见，非受控',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'invisible-button',
    desc: '是否显示可见按钮',
    type: 'boolean',
    value: 'true',
  },
]);

const inputPasswordEvents = ref([
  {
    name: 'visibility-change',
    desc: 'visibility 改变时触发',
    type: {
      visible: 'boolean',
    },
    value: '-',
  },
]);

const inputSearchProps = ref([
  {
    name: 'search-button',
    desc: '是否为后置按钮模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'loading',
    desc: '是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'size',
    desc: '输入框大小',
    type: 'Size',
    value: "'medium'",
    href: '/guide/types',
  },
  {
    name: 'button-text',
    desc: '搜索按钮的文字，使用后会替换原本的图标',
    type: 'string',
    value: '-',
  },
  {
    name: 'button-props',
    desc: '搜索按钮的属性',
    type: 'ButtonProps',
    value: '-',
    href: '/components/button',
  },
]);

const inputSearchEvents = ref([
  {
    name: 'search',
    desc: '单击搜索按钮时触发',
    type: {
      value: 'string',
      ev: 'MouseEvent',
    },
    value: '-',
  },
]);
</script>
