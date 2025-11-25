## API

### overflow-list Props

<field-table :data="overflowListProps"/>

### overflow-list Emits

<field-table :data="overflowListEmits" type="emits"/>

### overflow-list Slots

<field-table :data="overflowListSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const overflowListProps = ref([
  {
    name: 'min',
    desc: '最少展示的元素个数',
    type: 'number',
    value: '0',
  },
  {
    name: 'margin',
    desc: '项目间隔',
    type: 'number',
    value: '8',
  },
  {
    name: 'from',
    desc: '折叠方向',
    type: "'start' | 'end'",
    value: "'end'",
  },
]);

const overflowListEmits = ref([
  {
    name: 'change',
    desc: '溢出数量改变时触发',
    type: {
      value: 'number'
    },
    value: '-',
  },
]);

const overflowListSlots = ref([
  {
    name: 'overflow',
    desc: '折叠元素',
    type: {
      value: 'number'
    },
    value: '-',
  },
]);
</script>
