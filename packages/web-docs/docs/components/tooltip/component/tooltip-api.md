## API

### tooltip Props

<field-table :data="tooltipProps"/>

### tooltip Events

<field-table :data="tooltipEvents" type="emits"/>

### tooltip Slots

<field-table :data="tooltipSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const tooltipProps = ref([
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
    name: 'content',
    desc: '文字气泡内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'position',
    desc: '弹出位置',
    type: "PopupPosition",
    value: "'top'",
    href: '/guide/types'
  },
  {
    name: 'mini',
    desc: '是否展示为迷你尺寸',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'background-color',
    desc: '弹出框的背景颜色',
    type: 'string',
    value: '-',
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
    href: '/components/trigger',
    value: '-',
  },
]);

const tooltipEvents = ref([
  {
    name: 'popup-visible-change',
    desc: '文字气泡显示状态改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
]);

const tooltipSlots = ref([
  {
    name: 'content',
    desc: '内容',
    type: '-',
    value: '-',
  },
]);
</script>
