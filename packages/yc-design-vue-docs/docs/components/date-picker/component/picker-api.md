## API

### Common Props

<field-table :data="commonProps"/>

### Common Events

<field-table :data="commonEvents"/>

### Common Slots

<field-table :data="commonSlots" type="slots"/>

### date-picker Props

<field-table :data="datePickerProps"/>

### month-picker Props

<field-table :data="monthPickerProps"/>

### year-picker Props

<field-table :data="yearPickerProps"/>

### week-picker Props

<field-table :data="weekPickerProps"/>

### range-picker Props

<field-table :data="rangePickerProps"/>

### range-picker Events

<field-table :data="rangePickerEvents"/>

### ShortcutType

<field-table :data="shortcutType"/>

### 字符串解析格式

<field-table :data="stringParsingFormat" type="format"/>

### FAQ

<span style="font-size:16px;display:block;">关于 `locale` 字段</span>

可以使用组件库提供的语言包配置 `locale` 字段。

<script setup>
import { ref } from 'vue';

const commonProps = ref([
  {
    name: 'locale',
    desc: '国际化配置，用于覆盖locale中的 datePicker 字段',
    type: 'Record<string, any>',
    value: '-',
  },
  {
    name: 'hide-trigger',
    desc: '没有触发元素，只显示选择面板',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'allow-clear',
    desc: '是否允许清除',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'readonly',
    desc: '是否为只读',
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
    desc: '日期选择器的尺寸',
    type: "'mini' | 'small' | 'medium' | 'large'",
    value: "'medium'",
  },
  {
    name: 'shortcuts',
    desc: '预设时间范围快捷选择',
    type: 'ShortcutType[]',
    value: '[]',
  },
  {
    name: 'shortcuts-position',
    desc: '预设范围在面板上的位置',
    type: "'left' | 'bottom' | 'right'",
    value: "'bottom'",
  },
  {
    name: 'position',
    desc: '弹出的框的位置',
    type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'",
    value: "'bl'",
  },
  {
    name: 'popup-visible',
    desc: '控制弹出框的打开或者关闭状态',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '默认弹出框是打开或者关闭',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger-props',
    desc: '可以传入 Trigger 组件的参数',
    type: 'TriggerProps',
    value: '-',
  },
  {
    name: 'unmount-on-close',
    desc: '是否在隐藏的时候销毁DOM结构',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'placeholder',
    desc: '提示文案',
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
    name: 'disabled-date',
    desc: '不可选取的日期',
    type: '(current?: Date) => boolean',
    value: '-',
  },
  {
    name: 'disabled-time',
    desc: '不可选取的时间',
    type: '(current: Date) => DisabledTimeProps',
    value: '-',
  },
  {
    name: 'picker-value (v-model)',
    desc: '面板显示的日期',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'default-picker-value',
    desc: '面板默认显示的日期',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'string | HTMLElement',
    value: '-',
  },
  {
    name: 'preview-shortcut',
    desc: '是否要预览快捷选择的结果',
    type: 'boolean',
    value: 'true',
    version: '2.28.0',
  },
  {
    name: 'show-confirm-btn',
    desc: '是否显示确认按钮，showTime = true 的时候始终显示。',
    type: 'boolean',
    value: 'false',
    version: '2.29.0',
  },
  {
    name: 'disabled-input',
    desc: '是否禁止键盘输入日期',
    type: 'boolean',
    value: 'false',
    version: '2.43.0',
  },
  {
    name: 'abbreviation',
    desc: '是否启用缩写',
    type: 'boolean',
    value: 'true',
    version: '2.45.0',
  },
]);

const commonEvents = ref([
  {
    name: 'change',
    desc: '组件值发生改变',
    type: 'value: Date | string | number | undefined\ndate: Date | undefined\ndateString: string | undefined',
  },
  {
    name: 'select',
    desc: '选中日期发生改变但组件值未改变',
    type: 'value: Date | string | number\ndate: Date\ndateString: string',
  },
  {
    name: 'popup-visible-change',
    desc: '打开或关闭弹出框',
    type: 'visible: boolean',
  },
  {
    name: 'ok',
    desc: '点击确认按钮',
    type: 'value: Date | string | number\ndate: Date\ndateString: string',
  },
  {
    name: 'clear',
    desc: '点击清除按钮',
    type: '-',
  },
  {
    name: 'select-shortcut',
    desc: '点击快捷选项',
    type: 'shortcut: ShortcutType',
  },
  {
    name: 'picker-value-change',
    desc: '面板日期改变',
    type: 'value: Date | string | number\ndate: Date\ndateString: string',
  },
]);

const commonSlots = ref([
  {
    name: 'prefix',
    desc: '输入框前缀',
    type: '-',
    version: '2.41.0',
  },
  {
    name: 'suffix-icon',
    desc: '输入框后缀图标',
    type: '-',
  },
  {
    name: 'icon-next-double',
    desc: '双箭头往后翻页图标',
    type: '-',
  },
  {
    name: 'icon-prev-double',
    desc: '双箭头往前翻页图标',
    type: '-',
  },
  {
    name: 'icon-next',
    desc: '单箭头往后翻页图标',
    type: '-',
  },
  {
    name: 'icon-prev',
    desc: '单箭头往前翻页图标',
    type: '-',
  },
  {
    name: 'cell',
    desc: '自定义日期单元格的内容',
    type: '{ date: Date }',
  },
  {
    name: 'extra',
    desc: '额外的页脚',
    type: '-',
  },
]);

const datePickerProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'format',
    desc: '展示日期的格式',
    type: 'string | ((current: Date) => string)',
    value: '-',
  },
  {
    name: 'day-start-of-week',
    desc: '每周的第一天开始于周几',
    type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    value: '0',
    version: '2-6 from 2.21.0',
  },
  {
    name: 'show-time',
    desc: '是否增加时间选择',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'time-picker-props',
    desc: '时间显示的参数',
    type: 'Partial<TimePickerProps>',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled-date',
    desc: '不可选取的日期',
    type: '(current?: Date) => boolean',
    value: '-',
  },
  {
    name: 'disabled-time',
    desc: '不可选取的时间',
    type: '(current: Date) => DisabledTimeProps',
    value: '-',
  },
  {
    name: 'show-now-btn',
    desc: '是否显示 showTime 时，选择当前时间的按钮',
    type: 'boolean',
    value: 'true',
  },
]);

const monthPickerProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'format',
    desc: '展示日期的格式',
    type: 'string',
    value: "'YYYY-MM'",
  },
]);

const yearPickerProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'format',
    desc: '展示日期的格式',
    type: 'string',
    value: "'YYYY'",
  },
]);

const weekPickerProps = ref([
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: 'Date | string | number',
    value: '-',
  },
  {
    name: 'format',
    desc: '展示日期的格式',
    type: 'string',
    value: "'gggg-wo'",
  },
  {
    name: 'day-start-of-week',
    desc: '每周的第一天开始于周几',
    type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    value: '0',
    version: '2-6 from 2.21.0',
  },
]);

const rangePickerProps = ref([
  {
    name: 'mode',
    desc: '范围选择器的类型',
    type: "'date' | 'year' | 'quarter' | 'month' | 'week'",
    value: "'date'",
  },
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: '(Date | string | number)[]',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: '(Date | string | number)[]',
    value: '-',
  },
  {
    name: 'picker-value',
    desc: '默认面板显示的日期',
    type: '(Date | string | number)[]',
    value: '-',
  },
  {
    name: 'default-picker-value',
    desc: '面板显示的日期',
    type: '(Date | string | number)[]',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean | boolean[]',
    value: 'false',
  },
  {
    name: 'day-start-of-week',
    desc: '每周的第一天开始于周几',
    type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    value: '0',
    version: '2-6 from 2.21.0',
  },
  {
    name: 'format',
    desc: '展示日期的格式',
    type: 'string',
    value: '-',
  },
  {
    name: 'show-time',
    desc: '是否增加时间选择',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'time-picker-props',
    desc: '时间显示的参数',
    type: 'Partial<TimePickerProps>',
    value: '-',
  },
  {
    name: 'placeholder',
    desc: '提示文案',
    type: 'string[]',
    value: '-',
  },
  {
    name: 'disabled-date',
    desc: '不可选的日期',
    type: "(current: Date, type: 'start' | 'end') => boolean",
    value: '-',
  },
  {
    name: 'disabled-time',
    desc: '不可选取的时间',
    type: "(current: Date, type: 'start' | 'end') => DisabledTimeProps",
    value: '-',
  },
  {
    name: 'separator',
    desc: '范围选择器输入框内的分割符号',
    type: 'string',
    value: '-',
  },
  {
    name: 'exchange-time',
    desc: '时间是否会交换',
    type: 'boolean',
    value: 'true',
    version: '2.25.0',
  },
  {
    name: 'disabled-input',
    desc: '是否禁止键盘输入日期',
    type: 'boolean',
    value: 'false',
    version: '2.43.0',
  },
  {
    name: 'abbreviation',
    desc: '是否启用缩写',
    type: 'boolean',
    value: 'true',
    version: '2.45.0',
  },
]);

const rangePickerEvents = ref([
  {
    name: 'change',
    desc: '组件值发生改变',
    type: 'value: (Date | string | number | undefined)[] | undefined\ndate: (Date | undefined)[] | undefined\ndateString: (string | undefined)[] | undefined',
  },
  {
    name: 'select',
    desc: '选中日期发生改变但组件值未改变',
    type: 'value: (Date | string | number | undefined)[]\ndate: (Date | undefined)[]\ndateString: (string | undefined)[]',
  },
  {
    name: 'popup-visible-change',
    desc: '打开或关闭弹出框',
    type: 'visible: boolean',
  },
  {
    name: 'ok',
    desc: '点击确认按钮',
    type: 'value: Date | string | number[]\ndate: Date[]\ndateString: string[]',
  },
  {
    name: 'clear',
    desc: '点击清除按钮',
    type: '-',
  },
  {
    name: 'select-shortcut',
    desc: '点击快捷选项',
    type: 'shortcut: ShortcutType',
  },
  {
    name: 'picker-value-change',
    desc: '面板日期改变',
    type: 'value: Date | string | number[]\ndate: Date[]\ndateString: string[]',
  },
]);

const shortcutType = ref([
  {
    name: 'label',
    desc: '选项的内容',
    type: 'string | number | (() => VNode)',
    value: '-',
  },
  {
    name: 'value',
    desc: '选项值',
    type: '(Date | string | number) | (Date | string | number)[] | (() => (Date | string | number) | (Date | string | number)[])',
    value: '-',
  },
  {
    name: 'format',
    desc: '解析值所使用的格式',
    type: 'string',
    value: '-',
  },
]);

const stringParsingFormat = ref([
  { name: 'YY', type: '21', desc: '两位数的年份' },
  { name: 'YYYY', type: '2021', desc: '四位数年份' },
  { name: 'M', type: '1-12', desc: '月份，从 1 开始' },
  { name: 'MM', type: '01-12', desc: '月份，两位数' },
  { name: 'MMM', type: 'Jan-Dec', desc: '缩写的月份名称' },
  { name: 'MMMM', type: 'January-December', desc: '完整的月份名称' },
  { name: 'D', type: '1-31', desc: '月份里的一天' },
  { name: 'DD', type: '01-31', desc: '月份里的一天，两位数' },
  { name: 'd', type: '0-6', desc: '一周中的一天，星期天是 0' },
  { name: 'dd', type: 'Su-Sa', desc: '最简写的一周中一天的名称' },
  { name: 'ddd', type: 'Sun-Sat', desc: '简写的一周中一天的名称' },
  { name: 'dddd', type: 'Sunday-Saturday', desc: '一周中一天的名称' },
  { name: 'H', type: '0-23', desc: '小时' },
  { name: 'HH', type: '00-23', desc: '小时，两位数' },
  { name: 'h', type: '1-12', desc: '小时, 12 小时制' },
  { name: 'hh', type: '01-12', desc: '小时, 12 小时制, 两位数' },
  { name: 'm', type: '0-59', desc: '分钟' },
  { name: 'mm', type: '00-59', desc: '分钟，两位数' },
  { name: 's', type: '0-59', desc: '秒' },
  { name: 'ss', type: '00-59', desc: '秒，两位数' },
  { name: 'S', type: '0-9', desc: '数百毫秒，一位数' },
  { name: 'SS', type: '00-99', desc: '几十毫秒，两位数' },
  { name: 'SSS', type: '000-999', desc: '毫秒，三位数字' },
  { name: 'Z', type: '-5:00', desc: 'UTC 的偏移量' },
  { name: 'ZZ', type: '-0500', desc: 'UTC 的偏移量，数字前面加上 0' },
  { name: 'A', type: 'AM PM', desc: '-' },
  { name: 'a', type: 'am pm', desc: '-' },
  { name: 'Do', type: '1st... 3st', desc: '带序号的月份中的某天' },
  { name: 'X', type: '1410715640.579', desc: 'Unix 时间戳' },
  { name: 'x', type: '1410715640579', desc: 'Unix 毫秒时间戳' },
]);
</script>
