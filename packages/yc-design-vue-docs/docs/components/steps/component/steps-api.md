## API

### steps Props

<field-table :data="stepsProps"/>

### steps Emits

<field-table :data="stepsEmits" type="emits"/>

### step Props

<field-table :data="stepProps"/>

### step Slots

<field-table :data="stepSlots" type="slots"/>

### Type

```typescript
type Type = 'default' | 'arrow' | 'dot' | 'navigation';

type Status = 'wait' | 'process' | 'finish' | 'error';
```

<script setup>
import { ref } from 'vue';

const stepsProps = ref([
  {
    name: 'type',
    desc: '步骤条的类型',
    type: "StepsType",
    value: "'default'",
  },
  {
    name: 'direction',
    desc: '步骤条的显示方向',
    type: 'Direction',
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'label-placement',
    desc: '标签描述文字放置的位置',
    type: 'Direction',
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'current',
    desc: '当前步骤数 (v-model)',
    type: 'number',
    value: '-',
  },
  {
    name: 'default-current',
    desc: '默认的步骤数（非受控状态）',
    type: 'number',
    value: '1',
  },
  {
    name: 'status',
    desc: '当前步骤的状态',
    type: "Status",
    value: "'process'",
  },
  {
    name: 'line-less',
    desc: '是否使用无连接线样式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'small',
    desc: '是否使用小型步骤条',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'changeable',
    desc: '是否可以点击切换',
    type: 'boolean',
    value: 'false',
  },
]);

const stepsEmits = ref([
  {
    name: 'change',
    desc: '步骤数发生改变时触发',
    type: {
      step: 'number',
      ev: 'Event'
    },
    value: '-',
  },
]);

const stepProps = ref([
  {
    name: 'title',
    desc: '步骤的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'description',
    desc: '步骤的描述信息',
    type: 'string',
    value: '-',
  },
  {
    name: 'status',
    desc: '步骤的状态',
    type: "'wait' | 'process' | 'finish' | 'error'",
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);

const stepSlots = ref([
  {
    name: 'node',
    desc: '节点',
    type: {
      step: 'number',
      status: 'string'
    },
    value: '-',
  },
  {
    name: 'icon',
    desc: '图标',
    type: {
      step: 'number',
      status: 'string'
    },
    value: '-',
  },
  {
    name: 'description',
    desc: '描述内容',
    type: '-',
    value: '-',
  },
]);
</script>
