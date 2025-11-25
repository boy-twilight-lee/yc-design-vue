## API

### textarea Props

<field-table :data="textareaProps"/>

### textarea Events

<field-table :data="textareaEvents" type="emits" />

### textarea Methods

<field-table :data="textareaMethods" type="methods" />

### Type

```typescript
type AutoSize =
  | boolean
  | {
      minRows?: number;
      maxRows?: number;
    };
```

<script setup>
import { ref } from 'vue';

const textareaProps = ref([
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
    name: 'placeholder',
    desc: '提示文字',
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
    name: 'max-length',
    desc: '输入值的最大长度',
    type: 'MaxLength',
    value: '0',
    href:'/components/input'
  },
  {
    name: 'show-word-limit',
    desc: '是否显示字数统计',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'allow-clear',
    desc: '是否允许清空文本域',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'auto-size',
    desc: '是否让文本框自适应内容高度',
    type: 'AutoSize',
    value: 'false',
  },
  {
    name: 'word-length',
    desc: '字符长度的计算方法',
    type: 'WordLength',
    value: '-',
        href:'/components/input'
  },
  {
    name: 'word-slice',
    desc: '字符截取方法，同 wordLength 一起使用',
    type: 'WordSlice',
    value: '-',
    href:'/components/input'
  },
  {
    name: 'textarea-attrs',
    desc: '透传给 textarea 的属性',
    type: 'Record<string, any>',
    value: '-',
  },
]);

const textareaEvents = ref([
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
    desc: '仅在文本框失焦时触发',
    type: {
      value: 'string',
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
    desc: '文本框获取焦点时触发',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  },
  {
    name: 'blur',
    desc: '文本框失去焦点时触发',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  },
]);

const textareaMethods = ref([
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
</script>
