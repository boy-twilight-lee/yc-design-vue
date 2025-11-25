## API

### verification-code Props

<field-table :data="verificationCodeProps"/>

### verification-code Events

<field-table :data="verificationCodeEvents" type="emits" />

### Type

```typescript
type Separator = (index: number, character: string) => VNode;

type Formatter = (inputValue: string, index: number, value: string) => string;
```

<script setup>
import { ref } from 'vue';

const verificationCodeProps = ref([
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
    name: 'length',
    desc: '验证码的长度，根据长度渲染对应个数的输入框',
    type: 'number',
    value: '6',
  },
  {
    name: 'size',
    desc: '输入框大小',
    type: "Size",
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'masked',
    desc: '是否密码模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'readonly',
    desc: '只读',
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
    name: 'separator',
    desc: '分隔符。可在不同索引的输入框后自定义渲染分隔符',
    type: 'Separator',
    value: '-',
  },
  {
    name: 'formatter',
    desc: '格式化函数，当用户输入值改变时触发',
    type: 'Formatter',
    value: '-',
  },
]);

const verificationCodeEvents = ref([
  {
    name: 'change',
    desc: '值发生改变时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'finish',
    desc: '填充完成时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'input',
    desc: '输入时触发',
    type: {
      inputValue: 'string',
      ev: 'Event',
      index: 'number',
    },
    value: '-',
  },
]);
</script>
