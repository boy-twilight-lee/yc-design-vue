## API

### input-tag Props

<field-table :data="inputTagProps"/>

### input-tag Events

<field-table :data="inputTagEvents" type="emits" />

### input-tag Methods

<field-table :data="inputTagMethods" type="methods" />

### input-tag Slots

<field-table :data="inputTagSlots"  type="slots"/>

### TagData

<field-table :data="tagDataProps"/>

### Type

```typescript
type InputTagValue = InputTagValue;

type InputRetainValue = boolean | { create?: boolean; blur?: boolean };
```

<script setup>
import { ref } from 'vue';

const inputTagProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'InputTagValue[]',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'InputTagValue[]',
    value: '[]',
  },
  {
    name: 'input-value (v-model)',
    desc: '输入框的值',
    type: 'string',
    value: '-',
  },
  {
    name: 'default-input-value',
    desc: '输入框的默认值（非受控状态）',
    type: 'string',
    value: "''",
  },
  {
    name: 'placeholder',
    desc: '占位符',
    type: 'string',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
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
    name: 'readonly',
    desc: '是否为只读模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'allow-clear',
    desc: '是否允许清空',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'size',
    desc: '输入框的大小',
    type: "Size",
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'max-tag-count',
    desc: '最多展示的标签个数，0 表示不限制',
    type: 'number',
    value: '0',
  },
  {
    name: 'retain-input-value',
    desc: '是否保留输入框的内容',
    type: 'InputRetainValue',
    value: 'false',
  },
  {
    name: 'format-tag',
    desc: '格式化标签内容',
    type: 'Format<TagData>',
    value: '-',
    href:'/guide/types'
  },
  {
    name: 'unique-value',
    desc: '是否仅创建唯一的值',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'field-names',
    desc: '自定义 TagData 中的字段',
    type: 'InputTagFieldNames',
    value: '-',
  },
  {
    name: 'tag-nowrap',
    desc: '标签内容不换行',
    type: 'boolean',
    value: 'false',
  },
]);

const inputTagEvents = ref([
  {
    name: 'change',
    desc: '值发生改变时触发',
    type: {
      value: 'InputTagValue',
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'input-value-change',
    desc: '输入值发生改变时触发',
    type: {
      inputValue: 'string',
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'press-enter',
    desc: '按下回车键时触发',
    type: {
      inputValue: 'string',
      ev: 'KeyboardEvent'
    },
    value: '-',
  },
  {
    name: 'remove',
    desc: '点击标签的删除按钮时触发',
    type: {
      removed: 'string | number',
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'clear',
    desc: '点击清除按钮时触发',
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
]);

const inputTagMethods = ref([
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

const inputTagSlots = ref([
  {
    name: 'tag',
    desc: '输入框标签的显示内容',
    type: {
      data: 'TagData'
    },
    value: '-',
  },
  {
    name: 'prefix',
    desc: '前缀元素',
    type: '-',
    value: '-',
  },
  {
    name: 'suffix',
    desc: '后缀元素',
    type: '-',
    value: '-',
  },
]);

const tagDataProps = ref([
  {
    name: 'value',
    desc: '标签值',
    type: 'string | number',
    value: '-',
  },
  {
    name: 'label',
    desc: '标签内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'closable',
    desc: '是否可关闭',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'tagProps',
    desc: '标签属性',
    type: 'TagProps',
    value: '-',
  },
]);
</script>
