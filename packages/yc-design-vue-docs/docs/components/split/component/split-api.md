## API

### split Props

<field-table :data="splitProps"/>

### split Emits

<field-table :data="splitEmits" type="emits"/>

### split Slots

<field-table :data="splitSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const splitProps = ref([
  {
    name: 'component',
    desc: '分割框的 html 标签',
    type: 'string',
    value: "'div'",
  },
  {
    name: 'direction',
    desc: '分割的方向',
    type: 'Direction',
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'size (v-model)',
    desc: '分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px',
    type: 'number|string',
    value: '-',
  },
  {
    name: 'default-size',
    desc: '默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px',
    type: 'number|string',
    value: '0.5',
  },
  {
    name: 'min',
    desc: '最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px',
    type: 'number|string',
    value: '-',
  },
  {
    name: 'max',
    desc: '最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px',
    type: 'number|string',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);

const splitEmits = ref([
  {
    name: 'move-start',
    desc: '开始拖拽之前触发',
    type: '-',
    value: '-',
  },
  {
    name: 'moving',
    desc: '拖拽时触发',
    type: '-',
    value: '-',
  },
  {
    name: 'move-end',
    desc: '拖拽结束之后触发',
    type: '-',
    value: '-',
  },
]);

const splitSlots = ref([
  {
    name: 'first',
    desc: '第一个面板的内容',
    type: '-',
    value: '-',
  },
  {
    name: 'resize-trigger',
    desc: '伸缩杆的内容',
    type: '-',
    value: '-',
  },
  {
    name: 'resize-trigger-icon',
    desc: '伸缩杆的图标',
    type: '-',
    value: '-',
  },
  {
    name: 'second',
    desc: '第二个面板的内容',
    type: '-',
    value: '-',
  },
]);
</script>
