## API

### slider Props

<field-table :data="sliderProps"/>

### slider Events

<field-table :data="sliderEvents" type="emits" />

### Type

```typescript

```

<script setup>
import { ref } from 'vue';

const sliderProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'number | [number, number]',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'number | [number, number]',
    value: '0',
  },
  {
    name: 'step',
    desc: '滑动的步长',
    type: 'number',
    value: '1',
  },
  {
    name: 'min',
    desc: '滑动范围的最小值',
    type: 'number',
    value: '0',
  },
  {
    name: 'marks',
    desc: '设置显示的标签',
    type: 'Record<number, string>',
    value: '-',
  },
  {
    name: 'max',
    desc: '滑动范围的最大值',
    type: 'number',
    value: '100',
  },
  {
    name: 'direction',
    desc: '滑动输入条的方向',
    type: 'Direction',
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: '`false`',
  },
  {
    name: 'show-ticks',
    desc: '是否显示刻度线',
    type: 'boolean',
    value: '`false`',
  },
  {
    name: 'show-input',
    desc: '是否显示输入框',
    type: 'boolean',
    value: '`false`',
  },
  {
    name: 'range',
    desc: '是否开启范围选择',
    type: 'boolean',
    value: '`false`',
  },
  {
    name: 'show-tooltip',
    desc: '是否显示tooltip',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'format-tooltip',
    desc: '格式化tooltip的内容',
    type: 'Format<number>',
    value: '-',
    href:'/guide/types'
  },
]);

const sliderEvents = ref([
  {
    name: 'change',
    desc: '值改变时触发',
    type: {
      value: 'number | [number, number]'
    },
    value: '-',
  },
]);
</script>
