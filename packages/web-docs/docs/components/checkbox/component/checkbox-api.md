## API

### checkbox Props

<field-table :data="checkboxProps"/>

### checkbox Events

<field-table :data="checkboxEvents" type="emits" />

### checkbox Slots

<field-table :data="checkboxSlots"  type="slots"/>

### checkbox-group Props

<field-table :data="checkboxGroupProps" />

### checkbox-group Events

<field-table :data="checkboxGroupEvents" type="emits" />

### checkbox-group Slots

<field-table :data="checkboxGroupSlots"  type="slots"/>

### CheckboxOption

<field-table :data="checkboxOptionProps"/>

### Type

```typescript
type CheckboxValue = string | number | boolean;

type CheckboxOption = (
  | CheckboxValue
  | {
      label?: string;
      value: CheckboxValue;
      disabled?: boolean;
      indeterminate?: boolean;
    }
)[];
```

<script setup>
import { ref } from 'vue';

const checkboxProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'boolean',
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
    type: 'CheckboxValue',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'indeterminate',
    desc: '是否为半选状态',
    type: 'boolean',
    value: 'false',
  },
]);

const checkboxEvents = ref([
  {
    name: 'change',
    desc: '值改变时触发',
    type: {
      value: 'CheckboxValue[]',
      ev: 'Event'
    },
    value: '-',
  },
]);

const checkboxSlots = ref([
  {
    name: 'checkbox',
    desc: '自定义复选框',
    type: {
      checked: 'boolean',
      disabled: 'boolean'
    },
    value: '-',
  },
]);

const checkboxGroupProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'CheckboxValue[]',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'CheckboxValue[]',
    value: '[]',
  },
  {
    name: 'max',
    desc: '支持最多选中的数量',
    type: 'number',
    value: '-',
  },
  {
    name: 'options',
    desc: '选项',
    type: 'CheckboxOption[]',
    value: '-',
  },
  {
    name: 'direction',
    desc: '复选框的排列方向',
    type: 'Direction',
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

const checkboxGroupEvents = ref([
  {
    name: 'change',
    desc: '值改变时触发',
    type: {
      value: 'CheckboxValue[]',
    },
    value: '-',
  },
]);

const checkboxGroupSlots = ref([
  {
    name: 'checkbox',
    desc: '自定义复选框',
    type: {
      checked: 'boolean',
      disabled: 'boolean'
    },
    value: '-',
  },
  {
    name: 'label',
    desc: 'checkbox 文案内容',
    type: {
      data: 'CheckboxOption'
    },
    value: '-',
  },
]);

const checkboxOptionProps = ref([
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
  {
    name: 'indeterminate',
    desc: '是否为半选状态',
    type: 'boolean',
    value: 'false',
  },
]);
</script>
