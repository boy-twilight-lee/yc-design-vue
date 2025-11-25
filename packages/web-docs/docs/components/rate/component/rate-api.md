## API

### rate Props

<field-table :data="rateProps"/>

### rate Events

<field-table :data="rateEvents" type="emits" />

### rate Slots

<field-table :data="rateSlots"  type="slots"/>

<script setup>
import { ref } from 'vue';

const rateProps = ref([
  {
    name: 'count',
    desc: '评分的总数',
    type: 'number',
    value: '5',
  },
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'number',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: 'number',
    value: '0',
  },
  {
    name: 'allow-half',
    desc: '是否允许半选',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'allow-clear',
    desc: '是否允许清除',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'grading',
    desc: '是否开启笑脸分级',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'readonly',
    desc: '是否为只读状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'color',
    desc: '颜色',
    type: 'string | Record<string, string>',
    value: '-',
  },
]);

const rateEvents = ref([
  {
    name: 'change',
    desc: '值改变时触发',
    type: {
      value: 'number'
    },
    value: '-',
  },
  {
    name: 'hover-change',
    desc: '鼠标移动到数值上时触发',
    type: {
      value: 'number'
    },
    value: '-',
  },
]);

const rateSlots = ref([
  {
    name: 'character',
    desc: '符号',
    type: {
      index: 'number'
    },
    value: '-',
  },
]);
</script>
