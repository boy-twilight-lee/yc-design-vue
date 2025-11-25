## API

### color-picker Props

<field-table :data="colorPickerProps"/>

### color-picker Events

<field-table :data="colorPickerEvents" type="emits" />

### Type

```typescript
type ColorFormat = 'hex' | 'rgb';
```

<script setup>
import { ref } from 'vue';

const colorPickerProps = ref([
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
    name: 'format',
    desc: '颜色值的格式',
    type: "ColorFormat",
    value: "'hex'",
  },
  {
    name: 'size',
    desc: '尺寸',
    type: "Size",
    value: "'medium'",
    href:'/guide/types'
  },
  {
    name: 'show-text',
    desc: '显示颜色值',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-history',
    desc: '显示历史颜色',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-preset',
    desc: '显示预设颜色',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled',
    desc: '禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled-alpha',
    desc: '禁用透明通道',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'hide-trigger',
    desc: '没有触发元素，只显示颜色面板',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger-props',
    desc: '接受所有 Trigger 组件的Props',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'    
  },
  {
    name: 'history-colors',
    desc: '历史颜色的颜色数组',
    type: 'string[]',
    value: '-',
  },
  {
    name: 'preset-colors',
    desc: '预设颜色的颜色数组',
    type: 'string[]',
    value: '-',
  },
]);

const colorPickerEvents = ref([
  {
    name: 'change',
    desc: '颜色值改变时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'popup-visible-change',
    desc: '颜色面板展开和收起时触发',
    type: {
      visible: 'boolean',
      value: 'string'
    },
    value: '-',
  },
]);
</script>
