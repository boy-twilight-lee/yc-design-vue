## API

### auto-complete Props

<field-table :data="autoCompleteProps" />

### auto-complete Events

<field-table :data="autoCompleteEvents" type="emits" />

### auto-complete Methods

<field-table :data="autoCompleteMethods" type="methods" />

### auto-complete Slots

<field-table :data="autoCompleteSlots" type="slots" />

<script setup>
import { ref } from 'vue';

const autoCompleteProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'string',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控模式）',
    type: 'string',
    value: "''",
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'data',
    desc: '用于自动提示的数据',
    type: 'SelectOption[]',
    value: '[]',
    href:'/components/select/'
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'strict',
    desc: '是否为严格校验模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'filter-option',
    desc: '自定义选项过滤方法',
    type: 'FilterOption<SeletOptionData>',
    value: 'true',
    href:'/guide/types'
  },
  {
    name: 'trigger-props',
    desc: 'trigger 组件属性',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'
  },
  {
    name: 'allow-clear',
    desc: '是否允许清空输入框',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'virtual-list-props',
    desc: '传递虚拟列表属性，传入此参数以开启虚拟滚动 VirtualListProps',
    type: 'VirtualListProps',
    value: '-',
    href:"/components/select"
  },
]);

const autoCompleteEvents = ref([
  {
    name: 'change',
    desc: '绑定值发生改变时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'search',
    desc: '用户搜索时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'select',
    desc: '选择选项时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'clear',
    desc: '用户点击清除按钮时触发',
    type: {
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'dropdown-scroll',
    desc: '下拉菜单发生滚动时触发',
    type: {
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'dropdown-reach-bottom',
    desc: '下拉菜单滚动到底部时触发',
    type: {
      ev: 'Event'
    },
    value: '-',
  },
  {
    name: 'focus',
    desc: '自动补全聚焦时',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  }, 
  {
    name: 'blur',
    desc: '自动补全失焦时',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  }, 
]);

const autoCompleteMethods = ref([
  {
    name: 'focus',
    desc: '使输入框获取焦点',
    type: '-',
    value: '-',
  },
  {
    name: 'blur',
    desc: '使输入框失去焦点',
    type: '-',
    value: '-',
  },
]);

const autoCompleteSlots = ref([
  {
    name: 'option',
    desc: '选项内容',
    type: {
      data: 'SelectOption'
    },
    value: '-',
  },
  {
    name: 'footer',
    desc: '弹出框的页脚',
    type: '-',
    value: '-',
  },
]);
</script>
