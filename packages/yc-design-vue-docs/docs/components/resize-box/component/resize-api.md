## API

### resize-box Props

<field-table :data="resizeBoxProps"/>

### resize-box Events

<field-table type="emits" :data="resizeBoxEvents"/>

### resize-box Slots

<field-table type="slots" :data="resizeBoxSlots"/>

<script setup>
import { ref } from 'vue';

const resizeBoxProps = ref([
  {
    name: 'width',
    desc: '宽度 (v-model)',
    type: 'number',
    value: '-',
  },
  {
    name: 'height',
    desc: '高度 (v-model)',
    type: 'number',
    value: '-',
  },
  {
    name: 'component',
    desc: '伸缩框的 html 标签',
    type: 'string',
    value: '`div`',
  },
  {
    name: 'directions',
    desc: '可以进行伸缩的边，有上、下、左、右可以使用',
    type: "Position[]",
    value: "['right']",
  },
]);

const resizeBoxEvents = ref([
  {
    name: 'moving-start',
    desc: '拖拽开始时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'moving',
    desc: '拖拽时触发',
    type: {
      size: '{ width: number; height: number; }',
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'moving-end',
    desc: '拖拽结束时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
]);

const resizeBoxSlots = ref([
  {
    name: 'resize-trigger',
    desc: '伸缩杆的内容',
    type: {
      direction: "ResizeBoxDirection"
    },
    value: '-',
  },
  {
    name: 'resize-trigger-icon',
    desc: '伸缩杆的图标',
    type: {
      direction: "ResizeBoxDirection"
    },
    value: '-',
  },
]);
</script>
