## API

### popover Props

<field-table :data="popoverProps"/>

### popover Events

<field-table :data="popoverEvents" type="emits"/>

### popover Slots

<field-table :data="popoverSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const popoverProps = ref([
  {
    name: 'popup-visible (v-model)',
    desc: '文字气泡是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '文字气泡默认是否可见（非受控模式）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'content',
    desc: '内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'trigger',
    desc: '触发方式',
    type: "TriggerType",
    value: "'hover'",
    href:"/components/trigger"
  },
  {
    name: 'position',
    desc: '弹出位置',
    type: "PopupPosition",
    value: "'bottom'",
    href: '/guide/types'
  },
  {
    name: 'content-class',
    desc: '弹出框内容的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'content-style',
    desc: '弹出框内容的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'arrow-class',
    desc: '弹出框箭头的类名',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'arrow-style',
    desc: '弹出框箭头的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'trigger-props',
    desc: 'trigger的属性',
    type: 'TriggerProps',
    value: '-',
    href:"/guide/types"
  },
]);

const popoverEvents = ref([
  {
    name: 'popup-visible-change',
    desc: '文字气泡显示状态改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
]);

const popoverSlots = ref([
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  },
  {
    name: 'content',
    desc: '内容',
    type: '-',
    value: '-',
  },
]);
</script>
