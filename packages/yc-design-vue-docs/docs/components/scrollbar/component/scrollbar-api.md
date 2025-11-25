## API

### scrollbar Props

<field-table :data="scrollbarProps"/>

### scrollbar Emits

<field-table :data="scrollbarEmits" type="emits"/>

### scrollbar Method

<field-table :data="scrollbarMethod" type="methods"/>

<script setup>
import { ref } from 'vue';

const scrollbarProps = ref([
  {
    name: 'type',
    desc: '类型',
    type: "'track' | 'embed'",
    value: "'embed'",
  },
  {
    name: 'outer-class',
    desc: '外层的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'outer-style',
    desc: '外层的样式',
    type: 'CSSProperties',
    value: '-',
  },
]);

const scrollbarEmits = ref([
  {
    name: 'scroll',
    desc: '滚动时触发',
    type: '-',
    value: '-',
  },
]);

const scrollbarMethod = ref([
  {
    name: 'scrollTo',
    desc: '滚动',
    type: {
      options: 'number | {left?: number;top?: number}'
    },
    value: '-',
  },
  {
    name: 'scrollTop',
    desc: '纵向滚动',
    type: {
      top: 'number'
    },
    value: '-',
  },
  {
    name: 'scrollLeft',
    desc: '横向滚动',
    type: {
      left: 'number'
    },
    value: '-',
  },
]);
</script>
