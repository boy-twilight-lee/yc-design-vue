## API

### dropdown Props

<field-table :data="dropdownProps"/>

### dropdown Emits

<field-table :data="dropdownEmits" type="emits"/>

### dropdown Slots

<field-table :data="dropdownSlots" type="slots"/>

### doption Props

<field-table :data="doptionProps"/>

### doption Emits

<field-table :data="doptionEmits" type="emits"/>

### doption Slots

<field-table :data="doptionSlots" type="slots"/>

### dgroup Props

<field-table :data="dgroupProps"/>

### dgroup Slots

<field-table :data="dgroupSlots" type="slots"/>

### dsubmenu Props

<field-table :data="dsubmenuProps"/>

### dsubmenu Emits

<field-table :data="dsubmenuEmits" type="emits"/>

### dsubmenu Slots

<field-table :data="dsubmenuSlots" type="slots"/>

### dropdown-button Props

<field-table :data="dropdownButtonProps"/>

### dropdown-button Emits

<field-table :data="dropdownButtonEmits" type="emits"/>

### dropdown-button Slots

<field-table :data="dropdownButtonSlots" type="slots"/>

### Type

```typescript
type DropdownValue = string | number | Record<string, any>;

type Position = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';

type MenuPosition = 'rt' | 'lt';
```

<script setup>
import { ref } from 'vue'

const dropdownProps = ref([
  {
    name: 'popup-visible (v-model)',
    desc: '弹出框是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '弹出框默认是否可见（非受控模式）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger',
    desc: '触发方式',
    type: "Trigger",
    value: "'click'",
    href:'/components/trigger'
  },
  {
    name: 'position',
    desc: '弹出位置',
    type: "Position",
    value: "'bottom'",
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'popup-max-height',
    desc: '弹出框最大高度',
    type: 'boolean | number',
    value: 'true',
  },
  {
    name: 'hide-on-select',
    desc: '是否在用户选择后隐藏弹出框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'trigger-props',
    desc: 'trigger的属性',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'  
  },
])

const dropdownEmits = ref([
  {
    name: 'popup-visible-change',
    desc: '下拉框显示状态发生改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
  {
    name: 'select',
    desc: '用户选择时触发',
    type: {
      value: 'DropdownValue',
      ev: 'Event'
    },
    value: '-',
  },
])

const dropdownSlots = ref([
  {
    name: 'content',
    desc: '内容',
    type: '-',
    value: '-',
  },
  {
    name: 'footer',
    desc: '页脚',
    type: '-',
    value: '-',
  },
])

const doptionProps = ref([
  {
    name: 'value',
    desc: '选项值',
    type: 'DropdownValue',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
])

const doptionEmits = ref([
  {
    name: 'click',
    desc: '点击按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
])

const doptionSlots = ref([
  {
    name: 'default',
    desc: '选项内容',
    type: '-',
    value: '-',
  },
  {
    name: 'icon',
    desc: '图标',
    type: '-',
    value: '-',
  },
])

const dgroupProps = ref([
  {
    name: 'title',
    desc: '分组标题',
    type: 'string',
    value: '-',
  },
])

const dgroupSlots = ref([
  {
    name: 'title',
    desc: '分组标题',
    type: '-',
    value: '-',
  },
])

const dsubmenuProps = ref([
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger',
    desc: '触发方式',
    type: "MenuTrigger",
    value: "'click'",
  },
  {
    name: 'position',
    desc: '弹出位置',
    type: "MenuPosition",
    value: "'rt'",
  },
  {
    name: 'popup-visible (v-model)',
    desc: '弹出框是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '弹出框默认是否可见（非受控模式）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'option-props',
    desc: '自定义选项属性',
    type: 'DoptionProps',
    value: '-',
  },
  {
    name: 'trigger-props',
    desc: 'trigger的属性',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'  
  },
])

const dsubmenuEmits = ref([
  {
    name: 'popup-visible-change',
    desc: '下拉框显示状态发生改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
])

const dsubmenuSlots = ref([
  {
    name: 'icon',
    desc: '图标',
    type: '-',
    value: '-',
  },
  {
    name: 'content',
    desc: '子菜单内容',
    type: '-',
    value: '-',
  },
  {
    name: 'footer',
    desc: '页脚',
    type: '-',
    value: '-',
  },
])

const dropdownButtonProps = ref([
  {
    name: 'popup-visible (v-model)',
    desc: '弹出框是否可见',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '弹出框默认是否可见（非受控模式）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger',
    desc: '触发方式',
    type: "Trigger",
    value: "'click'",
    href:'/components/trigger'
  },
  {
    name: 'position',
    desc: '弹出位置',
    type: "Position",
    value: "'br'",
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'type',
    desc: '按钮类型',
    type: 'string',
    value: '-',
  },
  {
    name: 'size',
    desc: '按钮大小',
    type: 'string',
    value: '-',
  },
  {
    name: 'button-props',
    desc: '按钮属性',
    type: 'ButtonProps',
    value: '-',
    href:'/components/button'
  },
  {
    name: 'hide-on-select',
    desc: '是否在用户选择后隐藏弹出框',
    type: 'boolean',
    value: 'true',
  },
])

const dropdownButtonEmits = ref([
  {
    name: 'popup-visible-change',
    desc: '下拉框显示状态发生改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
  {
    name: 'click',
    desc: '点击按钮时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
  {
    name: 'select',
    desc: '用户选择时触发',
    type: {
      value: 'DropdownValue',
      ev: 'Event'
    },
    value: '-',
  },
])

const dropdownButtonSlots = ref([
  {
    name: 'icon',
    desc: '按钮图标',
    type: {
      popupVisible: 'boolean'
    },
    value: '-',
  },
  {
    name: 'content',
    desc: '内容',
    type: '-',
    value: '-',
  },
])
</script>
