## API

### time-picker Props

<field-table :data="Props"/>

### time-picker Events

<field-table :data="Events" type="emits" />

### time-picker Slots

<field-table :data="Slots"  type="slots"/>

### 字符串解析格式

<field-table :data="stringParsingFormatProps" type="format"/>

### Type

```typescript
type TimeUnit = 'hour' | 'minute' | 'second';

type TimePickerValue = string | number | Date | (string | number | Date)[];

type Type = 'time' | 'time-range';

type Step = { hour?: number; minute?: number; second?: number };

type Position = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';

type DisabledHours = () => number[];

type DisabledMinutes = (selectedHour?: number) => number[];

type DisabledSeconds = (
  selectedHour?: number,
  selectedMinute?: number
) => number[];
```

<script setup>
import { ref } from 'vue';

const Props = ref([
  {
    name: 'type',
    desc: '选择器类型',
    type: "Type",
    value: "'time'",
  },
  {
    name: 'model-value (v-model)',
    desc: '绑定值',
    type: 'TimePickerValue',
    value: '-',
  },
  {
    name: 'default-value',
    desc: '默认值',
    type: 'TimePickerValue',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
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
    desc: '是否为只读模式',
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
    name: 'format',
    desc: '展示日期的格式，参考字符串解析格式',
    type: 'string',
    value: "'HH:mm:ss'",
  },
  {
    name: 'placeholder',
    desc: '提示文案',
    type: 'string | string[]',
    value: '-',
  },
  {
    name: 'size',
    desc: '输入框尺寸',
    type: "Size",
    value: "'medium'",
    href:"/guide/types"
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'step',
    desc: '设置 时 / 分 / 秒 的选择间隔',
    type: 'Step',
    value: '-',
  },
  {
    name: 'disabled-hours',
    desc: '禁用的部分小时选项',
    type: 'DisabledHours',
    value: '-',
  },
  {
    name: 'disabled-minutes',
    desc: '禁用的部分分钟选项',
    type: 'DisabledMinutes',
    value: '-',
  },
  {
    name: 'disabled-seconds',
    desc: '禁用的部分秒数选项',
    type: 'DisabledSeconds',
    value: '-',
  },
  {
    name: 'hide-disabled-options',
    desc: '隐藏禁止选择的选项',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disable-confirm',
    desc: '禁用确认步骤，开启后直接点选时间不需要点击确认按钮',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'position',
    desc: '弹出的位置',
    type: "Position",
    value: "'bl'",
  },
  {
    name: 'popup-visible (v-model)',
    desc: '控制弹出框打开或者关闭',
    type: 'boolean',
    value: '-',
  },
  {
    name: 'default-popup-visible',
    desc: '弹出框默认打开或者关闭',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger-props',
    desc: '可以传入 Trigger 组件的参数',
    type: 'TriggerProps',
    value: '-',
    href:'/components/trigger'
  },
  {
    name: 'unmount-on-close',
    desc: '是否在关闭后销毁 dom 结构',
    type: 'boolean',
    value: 'false',
  },
]);

const Events = ref([
  {
    name: 'change',
    desc: '组件值发生改变',
    type: {
      timeString: 'TimePickerValue',
      time: 'Date | Array<Date | undefined> | undefined'
    },
    value: '-',
  },
  {
    name: 'select',
    desc: '选择时间但未触发组件值变化',
    type: {
      timeString: 'TimePickerValue',
      time: 'Date | Array<Date | undefined>'
    },
    value: '-',
  },
  {
    name: 'clear',
    desc: '点击清除按钮',
    type: '-',
    value: '-',
  },
  {
    name: 'popup-visible-change',
    desc: '弹出框展开和收起',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
]);

const Slots = ref([
  {
    name: 'prefix',
    desc: '输入框前缀',
    type: '-',
    value: '-',
  },
  {
    name: 'suffix-icon',
    desc: '输入框后缀图标',
    type: '-',
    value: '-',
  },
  {
    name: 'extra',
    desc: '额外的页脚',
    type: '-',
    value: '-',
  },
]);

const stringParsingFormatProps = ref([
  {
    name: 'YY',
    type: '21',
    desc: '两位数的年份',
    value: '-',
  },
  {
    name: 'YYYY',
    type: '2021',
    desc: '四位数年份',
    value: '-',
  },
  {
    name: 'M',
    type: '1-12',
    desc: '月份，从 1 开始',
    value: '-',
  },
  {
    name: 'MM',
    type: '01-12',
    desc: '月份，两位数',
    value: '-',
  },
  {
    name: 'MMM',
    type: 'Jan-Dec',
    desc: '缩写的月份名称',
    value: '-',
  },
  {
    name: 'MMMM',
    type: 'January-December',
    desc: '完整的月份名称',
    value: '-',
  },
  {
    name: 'D',
    type: '1-31',
    desc: '月份里的一天',
    value: '-',
  },
  {
    name: 'DD',
    type: '01-31',
    desc: '月份里的一天，两位数',
    value: '-',
  },
  {
    name: 'd',
    type: '0-6',
    desc: '一周中的一天，星期天是 0',
    value: '-',
  },
  {
    name: 'dd',
    type: 'Su-Sa',
    desc: '最简写的一周中一天的名称',
    value: '-',
  },
  {
    name: 'ddd',
    type: 'Sun-Sat',
    desc: '简写的一周中一天的名称',
    value: '-',
  },
  {
    name: 'dddd',
    type: 'Sunday-Saturday',
    desc: '一周中一天的名称',
    value: '-',
  },
  {
    name: 'H',
    type: '0-23',
    desc: '小时',
    value: '-',
  },
  {
    name: 'HH',
    type: '00-23',
    desc: '小时，两位数',
    value: '-',
  },
  {
    name: 'h',
    type: '1-12',
    desc: '小时, 12 小时制',
    value: '-',
  },
  {
    name: 'hh',
    type: '01-12',
    desc: '小时, 12 小时制, 两位数',
    value: '-',
  },
  {
    name: 'm',
    type: '0-59',
    desc: '分钟',
    value: '-',
  },
  {
    name: 'mm',
    type: '00-59',
    desc: '分钟，两位数',
    value: '-',
  },
  {
    name: 's',
    type: '0-59',
    desc: '秒',
    value: '-',
  },
  {
    name: 'ss',
    type: '00-59',
    desc: '秒，两位数',
    value: '-',
  },
  {
    name: 'S',
    type: '0-9',
    desc: '数百毫秒，一位数',
    value: '-',
  },
  {
    name: 'SS',
    type: '00-99',
    desc: '几十毫秒，两位数',
    value: '-',
  },
  {
    name: 'SSS',
    type: '000-999',
    desc: '毫秒，三位数字',
    value: '-',
  },
  {
    name: 'Z',
    type: '-5:00',
    desc: 'UTC 的偏移量',
    value: '-',
  },
  {
    name: 'ZZ',
    type: '-0500',
    desc: 'UTC 的偏移量，数字前面加上 0',
    value: '-',
  },
  {
    name: 'A',
    type: 'AM PM',
    desc: '-',
    value: '-',
  },
  {
    name: 'a',
    type: 'am pm',
    desc: '-',
    value: '-',
  },
  {
    name: 'Do',
    type: '1st... 3st',
    desc: '带序号的月份中的某天',
    value: '-',
  },
  {
    name: 'X',
    type: '1410715640.579',
    desc: 'Unix 时间戳',
    value: '-',
  },
  {
    name: 'x',
    type: '1410715640579',
    desc: 'Unix 毫秒时间戳',
    value: '-',
  },
]);
</script>
