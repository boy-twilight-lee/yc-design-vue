## API

### cascader Props

<field-table :data="cascaderProps"/>

### cascader Events

<field-table :data="cascaderEvents" type="emits"/>

### cascader Slots

<field-table :data="cascaderSlots" type="slots"/>

### cascader-panel Props

<field-table :data="cascaderPanelProps"/>

### cascader-panel Events

<field-table :data="cascaderPanelEvents" type="emits" />

### cascader-panel Slots

<field-table :data="cascaderPanelSlots" type="slots"/>

### CascaderOption

<field-table :data="cascaderOption"/>

### Type

```typescript
type CascaderOptionValue = string | number | Record<string, any>;

type CascaderValue =
  | CascaderOptionValue
  | CascaderOptionValue[]
  | CascaderOptionValue[][];

type LoadMore = (
  option: CascaderOption,
  done: (children?: CascaderOption[]) => void
) => void;
```

<script setup>
import { ref } from 'vue';

const cascaderProps = ref([
  {
    name: 'path-mode',
    desc: '绑定值是否为路径',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'multiple',
    desc: '是否为多选状态（多选模式默认开启搜索）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'CascaderValue',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'CascaderValue',
    value: "'' | undefined | []",
  },
  {
    name: 'options',
    desc: '级联选择器的选项',
    type: 'CascaderOption[]',
    value: '[]',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'error',
    desc: '是否为错误状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'size',
    desc: '选择框的大小',
    type: "Size",
    value: "'medium'",
    href:'/guide/types'
  },
  {
    name: 'allow-search',
    desc: '是否允许搜索',
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
    name: 'input-value (v-model)',
    desc: '输入框的值',
    type: 'string',
    value: '-',
  },
  {
    name: 'default-input-value',
    desc: '输入框的默认值（非受控状态）',
    type: 'string',
    value: "''",
  },
  {
    name: 'popup-visible (v-model)',
    desc: '是否显示下拉框',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '是否默认显示下拉框（非受控状态）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'expand-trigger',
    desc: '展开下一级的触发方式',
    type: "ExpandTrigger",
    value: "'click'",
    href: "/guide/types"
  },
  {
    name: 'placeholder',
    desc: '占位符',
    type: 'string',
    value: '-',
  },
  {
    name: 'filter-option',
    desc: '自定义选项过滤方法',
    type: 'FilterOption<CascaderOption>',
    value: '-',
  },
  {
    name: 'max-tag-count',
    desc: '多选模式下，最多显示的标签数量。0 表示不限制',
    type: 'number',
    value: '0',
  },
  {
    name: 'format-label',
    desc: '格式化展示内容',
    type: 'Format<CascaderOption[]>',
    value: '-',
    href:'/guide/types'
  },
  {
    name: 'trigger-props',
    desc: '下拉菜单的触发器属性',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'
  },
  {
    name: 'load-more',
    desc: '数据懒加载函数，传入时开启懒加载功能',
    type: 'LoadMore',
    value: '-',
  },
  {
    name: 'loading',
    desc: '是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'search-option-only-label',
    desc: '搜索下拉菜单中的选项是否仅展示标签',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'search-delay',
    desc: '触发搜索事件的延迟时间',
    type: 'number',
    value: '500',
  },
  {
    name: 'field-names',
    desc: '自定义 CascaderOption 中的字段',
    type: 'CascaderFieldNames',
    value: '-',
  },
  {
    name: 'value-key',
    desc: '用于确定选项键值的属性名',
    type: 'string',
    value: "'value'",
  },
  {
    name: 'fallback',
    desc: '自定义不存在选项的值的展示',
    type: 'boolean | FallBack<CascaderOptionValue | CascaderOptionValue[], string>;',
    value: 'true',
    href: '/guide/types'
  },
  {
    name: 'expand-child',
    desc: '是否展开子菜单',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'tag-nowrap',
    desc: '标签内容不换行',
    type: 'boolean',
    value: 'false',
  },
]);

const cascaderEvents = ref([
  {
    name: 'change',
    desc: '选中值改变时触发',
    type: {
      value: 'CascaderValue'
    },
    value: '-',
  },
  {
    name: 'input-value-change',
    desc: '输入值改变时触发',
    type: {
      value: 'string'
    },
    value: '-',
  },
  {
    name: 'clear',
    desc: '点击清除按钮时触发',
    type: '-',
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
    name: 'popup-visible-change',
    desc: '下拉框的显示状态改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
  {
    name: 'focus',
    desc: '获得焦点时触发',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  },
  {
    name: 'blur',
    desc: '失去焦点时触发',
    type: {
      ev: 'FocusEvent'
    },
    value: '-',
  },
]);

const cascaderSlots = ref([
  {
    name: 'label',
    desc: '选择框的显示内容',
    type: {
      data: 'CascaderOption'
    },
    value: '-',
  },
  {
    name: 'prefix',
    desc: '前缀元素',
    type: '-',
    value: '-',
  },
  {
    name: 'arrow-icon',
    desc: '选择框的箭头图标',
    type: '-',
    value: '-',
  },
  {
    name: 'loading-icon',
    desc: '选择框的加载中图标',
    type: '-',
    value: '-',
  },
  {
    name: 'search-icon',
    desc: '选择框的搜索图标',
    type: '-',
    value: '-',
  },
  {
    name: 'empty',
    desc: '选项为空时的显示内容',
    type: '-',
    value: '-',
  },
  {
    name: 'option',
    desc: '选项内容',
    type: {
      data: 'CascaderOption'
    },
    value: '-',
  },
]);

const cascaderPanelProps = ref([
  {
    name: 'path-mode',
    desc: '绑定值是否为路径',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'multiple',
    desc: '是否为多选状态（多选模式默认开启搜索）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'CascaderValue',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控状态）',
    type: 'CascaderValue',
    value: "'' | undefined | []",
  },
  {
    name: 'options',
    desc: '级联选择器的选项',
    type: 'CascaderOption[]',
    value: '[]',
  },
  {
    name: 'expand-trigger',
    desc: '展开下一级的触发方式',
    type: 'string',
    value: "'click'",
  },
  // {
  //   name: 'check-strictly',
  //   desc: '是否开启严格选择模式',
  //   type: 'boolean',
  //   value: 'false',
  // },
  {
    name: 'load-more',
    desc: '数据懒加载函数，传入时开启懒加载功能',
    type: 'LoadMore',
    value: '-',
  },
  {
    name: 'field-names',
    desc: '自定义 CascaderOption 中的字段',
    type: 'Record<string,string>',
    value: '-',
  },
  {
    name: 'value-key',
    desc: '用于确定选项键值的属性名',
    type: 'string',
    value: "'value'", 
  },
  {
    name: 'expand-child',
    desc: '是否展开子菜单',
    type: 'boolean',
    value: 'false',
  },
]);

const cascaderPanelEvents = ref([
  {
    name: 'change',
    desc: '选中值改变时触发',
    type: {
      value:'CascaderValue',
    },
    value: '-',
  },
]);

const cascaderPanelSlots = ref([
  {
    name: 'empty',
    desc: '选项为空时的显示内容',
    type: '-',
    value: '-',
  },
]);

const cascaderOption = ref([
  {
    name: 'value',
    desc: '选项值',
    type: 'string | number | Record<string, any>',
    value: '-',
  },
  {
    name: 'label',
    desc: '选项文本',
    type: 'string',
    value: '-',
  },
  {
    name: 'render',
    desc: '自定义渲染',
    type: 'RenderFunction',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'tagProps',
    desc: '展示的标签属性',
    type: 'TagProps',
    value: '-',
  },
  {
    name: 'children',
    desc: '下一级选项',
    type: 'CascaderOption[]',
    value: '-',
  },
  {
    name: 'isLeaf',
    desc: '是否是叶子节点',
    type: 'boolean',
    value: 'false',
  },
]);
</script>
