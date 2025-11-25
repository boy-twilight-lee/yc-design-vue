## API

### radio Props

<field-table :data="radioProps"/>

### radio Events

<field-table :data="radioEvents" type="emits" />

### radio Slots

<field-table :data="radioSlots"  type="slots"/>

### radio-group Props

<field-table :data="radioGroupProps" />

### radio-group Events

<field-table :data="radioGroupEvents" type="emits" />

### radio-group Slots

<field-table :data="radioGroupSlots"  type="slots"/>

### RadioOption

<field-table :data="radioOptionProps"/>

### Type

```typescript
type RadioValue = string | number | boolean;

type RadioType = 'radio' | 'button';
```

<script setup>
import { ref } from 'vue';

const radioProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'RadioValue',
    value: '-',
  },
  {
    name: 'default-checked',
    desc: '默认是否选中（非受控状态）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'value',
    desc: '选项的 value',
    type: 'RadioValue',
    value: 'true',
  },
  {
    name: 'type',
    desc: '单选的类型',
    type: "RadioType",
    value: "'radio'",
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);

const radioEvents = ref([
  {
    name: 'change',
    desc: '值改变时触发',
    type: {
      value: 'RadioValue',
      ev: 'Event'
    },
    value: '-',
  },
]);

const radioSlots = ref([
  {
    name: 'radio',
    desc: '自定义单选框',
    type: {
      checked: 'boolean',
      disabled: 'boolean'
    },
    value: '-',
  },
]);

const radioGroupProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'RadioValue',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'RadioValue',
    value: "''",
  },
  {
    name: 'type',
    desc: '单选框组的类型',
    type: "RadioType",
    value: "'radio'",
  },
  {
    name: 'size',
    desc: '单选框组的尺寸',
    type: "Size",
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'options',
    desc: '选项',
    type: 'RadioOption[]',
    value: '-',
  },
  {
    name: 'direction',
    desc: '单选框组的方向',
    type: "Direction",
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);

const radioGroupEvents = ref([
  {
    name: 'change',
    desc: '值改变时触发',
    type: {
      value: 'RadioValue'
    },
    value: '-',
  },
]);

const radioGroupSlots = ref([
  {
    name: 'radio',
    desc: '自定义单选框',
    type: {
      checked: 'boolean',
      disabled: 'boolean'
    },
    value: '-',
  },
  {
    name: 'label',
    desc: 'radio 文案内容',
    type: {
      data: 'RadioOption'
    },
    value: '-',
  },
]);

const radioOptionProps = ref([
  {
    name: 'label',
    desc: '文案',
    type: 'RenderContent',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'value',
    desc: '选项的 value',
    type: 'string | number',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);
</script>
