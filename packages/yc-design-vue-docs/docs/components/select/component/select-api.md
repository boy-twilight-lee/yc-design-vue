## API

### select Props

<field-table :data="selectProps"/>

### select Events

<field-table :data="selectEvents" type="emits" />

### select Slots

<field-table :data="selectSlots"  type="slots"/>

### option Props

<field-table :data="optionProps"/>

### optgroup Props

<field-table :data="optgroupProps"/>

### optgroup Slots

<field-table :data="optgroupSlots"  type="slots"/>

### SelectOptionData

<field-table :data="selectOptionDataProps"/>

### SelectOptionGroup

<field-table :data="selectOptionGroupProps"/>

### VirtualListProps

<field-table :data="virtualListProps"/>

### Type

```typescript
type OptionValue = string | number | boolean | Record<string, any>;

type SelectValue = OptionValue | OptionValue[];

type SelectOption =
  | OptionValue
  | SelectOptionData
  | SelectOptionGroup
  | Record<string, any>;

type VirtualListProps = {
  itemHeight?: number;
  buffer?: number;
  threshold?: number;
};
```

### FAQ

使用 `Object` 格式作为选项的值
当使用 `Object` 格式作为选项的值时，需要通过 `value-key` 属性为选择器指定获取唯一标识的字段名，默认值为 `value`.
此外 `value` 的对象值需要在 `setup` 中定义好，不能够在模版中创建对象，这样会导致 `Option` 组件的重复渲染。

例如当我需要指定 `key` 为唯一标识时：

```vue
<template>
  <yc-select
    v-model="value"
    :style="{ width: '320px' }"
    placeholder="Please select ..."
    value-key="key">
    <yc-option
      v-for="item of data"
      :value="item"
      :label="item.label" />
  </yc-select>
</template>

<script setup>
import { ref } from 'vue';
const value = ref();
const data = [
  {
    value: 'beijing',
    label: 'Beijing',
    key: 'extra1',
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    key: 'extra2',
  },
  {
    value: 'guangzhou',
    label: 'Guangzhou',
    key: 'extra3',
  },
  {
    value: 'chengdu',
    label: 'Chengdu',
    key: 'extra4',
  },
];
</script>
```

<script setup>
import { ref } from 'vue';

const selectProps = ref([
  {
    name: 'multiple',
    desc: '是否开启多选模式（多选模式默认开启搜索）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'SelectValue',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值（非受控模式）',
    type: 'SelectValue',
    value: "'' (single) | [] (multiple)",
  },
  {
    name: 'input-value (v-model)',
    desc: '输入框的值',
    type: 'string',
    value: '-',
  },
  {
    name: 'default-input-value',
    desc: '输入框的默认值（非受控模式）',
    type: 'string',
    value: "''",
  },
  {
    name: 'size',
    desc: '选择框的大小',
    type: "Size",
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'placeholder',
    desc: '占位符',
    type: 'string',
    value: '-',
  },
  {
    name: 'loading',
    desc: '是否为加载中状态',
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
    name: 'error',
    desc: '是否为错误状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'allow-clear',
    desc: '是否允许清空',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'allow-search',
    desc: '是否允许搜索',
    type: 'boolean',
    value: 'false (single) | true (multiple)',
  },
  {
    name: 'allow-create',
    desc: '是否允许创建',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'max-tag-count',
    desc: '多选模式下，最多显示的标签数量。0 表示不限制',
    type: 'number',
    value: '0',
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'bordered',
    desc: '是否显示输入框的边框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'popup-visible (v-model)',
    desc: '是否显示下拉菜单',
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
    name: 'unmount-on-close',
    desc: '是否在下拉菜单关闭时销毁元素',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'filter-option',
    desc: '是否过滤选项',
    type: 'FilterOption<SelectOptionData>',
    value: 'true',
    href:'/guide/types'
  },
  {
    name: 'options',
    desc: '选项数据',
    type: 'SelectOption[]',
    value: '[]',
  },
  {
    name: 'virtual-list-props',
    desc: '传递虚拟列表属性，传入此参数以开启虚拟滚动 VirtualListProps',
    type: 'VirtualListProps',
    value: '-',
  },
  {
    name: 'trigger-props',
    desc: '下拉菜单的触发器属性',
    type: 'TriggerProps',
    value: '-',
    href: '/components/trigger'  
  },
  {
    name: 'format-label',
    desc: '格式化显示内容',
    type: 'Format<SelectOptionData>',
    value: '-',
    href:'/guide/types'
  },
  {
    name: 'fallback-option',
    desc: '自定义值中不存在的选项',
    type: 'FallBack<SelectOptionValue, SelectOptionData>',
    value: 'true',
    href: '/guide/types'
  },
  {
    name: 'show-extryc-options',
    desc: '是否在下拉菜单中显示额外选项',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'value-key',
    desc: '用于确定选项键值的属性名',
    type: 'string',
    value: "'value'",
  },
  {
    name: 'search-delay',
    desc: '触发搜索事件的延迟时间',
    type: 'number',
    value: '`500`',
  },
  {
    name: 'limit',
    desc: '多选时最多的选择个数',
    type: 'number',
    value: '`0`',
  },
  {
    name: 'field-names',
    desc: '自定义 SelectOptionData 中的字段',
    type: 'SelectFieldNames',
    value: '-',
  },
  {
    name: 'show-header-on-empty',
    desc: '空状态时是否显示header',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-footer-on-empty',
    desc: '空状态时是否显示footer',
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

const selectEvents = ref([
  {
    name: 'change',
    desc: '值发生改变时触发',
    type: {
      value: 'SelectValue'
    },
    value: '-',
  },
  {
    name: 'input-value-change',
    desc: '输入框的值发生改变时触发',
    type: {
      inputValue: 'string'
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
    name: 'clear',
    desc: '点击清除按钮时触发',
    type: '-',
    value: '-',
  },
  {
    name: 'remove',
    desc: '点击标签的删除按钮时触发',
    type: {
      removed: 'OptionValue'
    },
    value: '-',
  },
  {
    name: 'search',
    desc: '用户搜索时触发',
    type: {
      inputValue: 'string'
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
    name: 'exceed-limit',
    desc: '多选超出限制时触发',
    type: {
      value: 'OptionValue',
      ev: 'Event'
    },
    value: '-',
  },
]);

const selectSlots = ref([
  {
    name: 'trigger',
    desc: '自定义触发元素',
    type: '-',
    value: '-',
  },
  {
    name: 'prefix',
    desc: '前缀元素',
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
    name: 'loading-icon',
    desc: '选择框的加载中图标',
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
    name: 'footer',
    desc: '下拉框的页脚',
    type: '-',
    value: '-',
  },
  {
    name: 'header',
    desc: '下拉框的页头',
    type: '-',
    value: '-',
  },
  {
    name: 'label',
    desc: '选择框的显示内容',
    type: {
      data: 'SelectOptionData'
    },
    value: '-',
  },
  {
    name: 'option',
    desc: '选项内容',
    type: {
      data: 'SelectOptionData'
    },
    value: '-',
  },
  {
    name: 'empty',
    desc: '选项为空时的显示内容',
    type: '-',
    value: '-',
  },
]);

const optionProps = ref([
  {
    name: 'value',
    desc: '选项值（如不填，会从内容中获取）',
    type: 'OptionValue',
    value: '-',
  },
  {
    name: 'label',
    desc: '选项标签（如不填，会从内容中获取）',
    type: 'string',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'tag-props',
    desc: '展示的标签属性',
    type: 'TagProps',
    value: '-',
    href: '/components/tag'
  },
  {
    name: 'index',
    desc: '用于手动指定选项的 index',
    type: 'number',
    value: '-',
  },
]);

const optgroupProps = ref([
  {
    name: 'label',
    desc: '选项组的标题',
    type: 'string',
    value: '-',
  },
]);

const optgroupSlots = ref([
  {
    name: 'label',
    desc: '选项组的标题',
    type: '-',
    value: '-',
  },
]);

const selectOptionDataProps = ref([
  {
    name: 'value',
    desc: '选项值',
    type: 'SelectValue',
    value: '-',
  },
  {
    name: 'label',
    desc: '选项内容',
    type: 'string',
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
    desc: '选项对应的多选标签的属性',
    type: 'any',
    value: '-',
  },
  {
    name: 'render',
    desc: '自定义渲染',
    type: 'RenderFunction',
    value: '-',
  },
]);

const selectOptionGroupProps = ref([
  {
    name: 'isGroup',
    desc: '是否为选项组',
    type: 'true',
    value: '-',
  },
  {
    name: 'label',
    desc: '选项组标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'options',
    desc: '选项组中的选项',
    type: 'SelectOption[]',
    value: '-',
  },
]);

const virtualListProps = ref([
  {
    name: 'count (必填)',
    desc: '列表中的项目总数。',
    type: 'number',
    value: '-',
  },
  {
    name: 'getScrollElement (必填)',
    desc: '一个返回滚动容器元素的函数。',
    type: '() => Element | Window | null',
    value: '-',
  },
  {
    name: 'estimateSize (必填)',
    desc: '一个函数，用于估算每个列表项的尺寸（高度或宽度）。',
    type: '(index: number) => number',
    value: '-',
  },
  {
    name: 'scrollToFn (必填)',
    desc: '执行滚动操作的函数，虚拟器内部会调用它来更新滚动位置。',
    type: '(offset: number, options: object, instance: Virtualizer) => void',
    value: '-',
  },
  {
    name: 'observeElementRect (必填)',
    desc: '用于监测滚动容器尺寸变化的函数，通常使用 ResizeObserver 实现。',
    type: '(instance: Virtualizer, cb: (rect: Rect) => void) => void | (() => void)',
    value: '-',
  },
  {
    name: 'observeElementOffset (必填)',
    desc: '用于监测滚动容器偏移量变化的函数。',
    type: '(instance: Virtualizer, cb: ObserveOffsetCallBack) => void | (() => void)',
    value: '-',
  },
  {
    name: 'overscan',
    desc: '在可视区域之外额外渲染的列表项数量，以减少滚动白屏。',
    type: 'number',
    value: '1',
  },
  {
    name: 'measureElement',
    desc: '一个函数，用于精确测量已渲染元素的实际尺寸，用于支持动态高度/宽度。',
    type: '(element: Element) => number',
    value: '-',
  },
  {
    name: 'getItemKey',
    desc: '为每个列表项返回唯一键的函数，类似于 v-for 的 :key。',
    type: '(index: number) => Key',
    value: '-',
  },
  {
    name: 'horizontal',
    desc: '如果为 true，则列表变为水平滚动。',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'lanes',
    desc: '泳道或列数，用于实现多列（网格）布局。',
    type: 'number',
    value: '1',
  },
  {
    name: 'gap',
    desc: '每个列表项之间的间距（像素）。',
    type: 'number',
    value: '0',
  },
  {
    name: 'paddingStart',
    desc: '在列表内容的开始处添加的内边距（像素）。',
    type: 'number',
    value: '0',
  },
  {
    name: 'paddingEnd',
    desc: '在列表内容的结束处添加的内边距（像素）。',
    type: 'number',
    value: '0',
  },
  {
    name: 'scrollPaddingStart',
    desc: '滚动对齐时，视口开始处的偏移量，用于避免元素被固定导航栏等遮挡。',
    type: 'number',
    value: '0',
  },
  {
    name: 'scrollPaddingEnd',
    desc: '滚动对齐时，视口结束处的偏移量。',
    type: 'number',
    value: '0',
  },
  {
    name: 'initialOffset',
    desc: '列表初始化的滚动偏移量。',
    type: 'number | (() => number)',
    value: '0',
  },
  {
    name: 'isScrollingResetDelay',
    desc: '滚动停止后，将 isScrolling 状态重置为 false 的延迟时间（毫秒）。',
    type: 'number',
    value: '150',
  },
    {
    name: 'useScrollendEvent',
    desc: '是否尝试使用浏览器原生的 "scrollend" 事件来检测滚动结束。',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'enabled',
    desc: '是否启用虚拟滚动功能。',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'onChange',
    desc: '当虚拟器状态更新时（如滚动时）触发的回调函数。',
    type: '(instance: Virtualizer, sync: boolean) => void',
    value: '-',
  },
  {
    name: 'indexAttribute',
    desc: '设置在列表项DOM元素上标记其索引的HTML属性名称。',
    type: 'string',
    value: "'data-index'",
  },
  {
    name: 'initialMeasurementsCache',
    desc: '用于传入初始的测量缓存，可用于恢复滚动位置和尺寸。',
    type: 'Array<VirtualItem>',
    value: '-',
  },
  {
    name: 'rangeExtractor',
    desc: '自定义从可视范围中提取需要渲染的索引数组的函数，用于实现复杂布局。',
    type: '(range: Range) => Array<number>',
    value: '-',
  },
  {
    name: 'isRtl',
    desc: '是否为从右到左（RTL）的布局模式。',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'debug',
    desc: '是否在控制台输出详细的调试信息。',
    type: 'boolean',
    value: 'false',
  },
]);
</script>
