## API

### menu Props

<field-table :data="menuProps"/>

### menu Emits

<field-table :data="menuEmits" type="emits"/>

### menu Slots

<field-table :data="menuSlots" type="slots"/>

### submenu Props

<field-table :data="subMenuProps"/>

### submenu Slots

<field-table :data="subMenuSlots" type="slots"/>

### menu-item-group Props

<field-table :data="menuItemGroupProps"/>

### menu-item-group Slots

<field-table :data="menuItemGroupSlots" type="slots"/>

### menu-item Props

<field-table :data="menuItemProps"/>

### menu-item Slots

<field-table :data="menuItemSlots" type="slots"/>

### FAQ

`<MenuItem> `和 `<SubMenu> `组件的 `path` 属性为必填
<br />
在 `<Menu>` 组件中使用 `<MenuItem>` 和 `<SubMenu>` 组件时，请传入唯一的 path 属性。
<br />
组件内部在进行计算时会依赖此值，如果没有赋值会导致部分场景下异常

<script setup>
import { ref } from 'vue';

const menuProps = ref([
  {
    name: 'theme',
    desc: '菜单的主题',
    type: "Theme",
    value: "'light'",
    href:"/guide/types"
  },
  {
    name: 'mode',
    desc: '菜单的模式',
    type: "Direction",
    value: "'vertical'",
    href:"/guide/types"
  },
  {
    name: 'level-indent',
    desc: '层级之间的缩进量',
    type: 'number',
    value: '-',
  },
  {
    name: 'auto-open',
    desc: '默认展开所有多级菜单',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'collapsed (v-model)',
    desc: '是否折叠菜单',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-collapsed',
    desc: '默认是否折叠菜单',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'collapsed-width',
    desc: '折叠菜单宽度',
    type: 'number',
    value: '-',
  },
  {
    name: 'accordion',
    desc: '开启手风琴效果',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'auto-scroll-into-view',
    desc: '是否自动滚动选中项目到可见区域',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-collapse-button',
    desc: '是否内置折叠按钮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'selected-keys (v-model)',
    desc: '选中的菜单项 key',
    type: 'string',
    value: '-',
  },
  {
    name: 'default-selected-keys',
    desc: '默认选中的菜单项 key ',
    type: 'string',
    value: '[]',
  },
  {
    name: 'open-keys (v-model)',
    desc: '展开的子菜单 key 数组',
    type: 'string[]',
    value: '-',
  },
  {
    name: 'default-open-keys',
    desc: '默认展开的子菜单 key 数组',
    type: 'string[]',
    value: '[]',
  },
  {
    name: 'scroll-config',
    desc: '滚动到可见区域的配置项，接收所有scroll-into-view-if-needed的参数',
    type: '{ [key: string]: any }',
    value: '-',
  },
  {
    name: 'trigger-props',
    desc: '弹出模式下可接受所有 Trigger 的 Props',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'  
  },
  {
    name: 'tooltip-props',
    desc: '弹出模式下可接受所有 ToolTip 的 Props',
    type: 'object',
    value: '-',
  },
  {
    name: 'auto-open-selected',
    desc: '默认展开选中的菜单',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'breakpoint',
    desc: '响应式的断点, 详见响应式栅格',
    type: "BreakpointName",
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'popup-max-height',
    desc: '弹出框的最大高度',
    type: 'boolean | number',
    value: 'true',
  },
]);

const menuEmits = ref([
  {
    name: 'collapse',
    desc: '折叠状态改变时触发',
    type: {
      collapsed: 'boolean',
      type: "'clickTrigger' | 'responsive'"
    },
    value: '-',
  },
  {
    name: 'menu-item-click',
    desc: '点击菜单项时触发',
    type: {
      key: 'string'
    },
    value: '-',
  },
  {
    name: 'sub-menu-click',
    desc: '点击子菜单时触发',
    type: {
      key: 'string',
      openKeys: 'string[]'
    },
    value: '-',
  },
]);

const menuSlots = ref([
  {
    name: 'collapse-icon',
    desc: '折叠图标',
    type: {
      collapsed: 'boolean'
    },
    value: '-',
  },
  {
    name: 'expand-icon-right',
    desc: '向右展开的图标',
    type: '-',
    value: '-',
  },
  {
    name: 'expand-icon-down',
    desc: '向下展开的图标',
    type: '-',
    value: '-',
  },
]);

const subMenuProps = ref([
  {
    name: 'path（必填）',
    desc: '子菜单的唯一标识',
    type: 'string',
    value: '-',
  },
  {
    name: 'title',
    desc: '子菜单的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'selectable',
    desc: '弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'popup',
    desc: '是否强制使用弹出模式，level 表示当前子菜单的层级',
    type: 'boolean | ((level: number) => boolean)',
    value: 'false',
  },
  {
    name: 'popup-max-height',
    desc: '弹出框的最大高度',
    type: 'boolean | number',
    value: 'true',
  },
]);

const subMenuSlots = ref([
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  },
  {
    name: 'expand-icon-right',
    desc: '向右展开的图标',
    type: '-',
    value: '-',
  },
  {
    name: 'expand-icon-down',
    desc: '向下展开的图标',
    type: '-',
    value: '-',
  },
  {
    name: 'icon',
    desc: '菜单的图标',
    type: '-',
    value: '-',
  },
]);

const menuItemGroupProps = ref([
  {
    name: 'title',
    desc: '菜单组的标题',
    type: 'string',
    value: '-',
  },
]);

const menuItemGroupSlots = ref([
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  },
]);

const menuItemProps = ref([
  {
    name: 'path（必填）',
    desc: '菜单项的唯一标识',
    type: 'string',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);

const menuItemSlots = ref([
  {
    name: 'icon',
    desc: '菜单的图标',
    type: '-',
    value: '-',
  },
]);
</script>
