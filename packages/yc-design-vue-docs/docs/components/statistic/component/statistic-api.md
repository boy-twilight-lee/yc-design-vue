## API

### statistic Props

<field-table :data="statisticProps"/>

### statistic Slots

<field-table :data="statisticSlots" type="slots"/>

### countdown Props

<field-table :data="countdownProps"/>

### countdown Events

<field-table :data="countdownEvents" type="emits"/>

### countdown Slots

<field-table :data="countdownSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const statisticProps = ref([
  {
    name: 'title',
    desc: '数值显示的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'value',
    desc: '数值显示的值',
    type: 'number | Date',
    value: '-',
  },
  {
    name: 'format',
    desc: '数值显示的格式 dayjs（日期模式使用）',
    type: 'string',
    value: "'HH:mm:ss'",
  },
  {
    name: 'extra',
    desc: '额外的显示内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'start',
    desc: '是否开始动画',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'precision',
    desc: '小数保留位数（数字模式使用）',
    type: 'number',
    value: '0',
  },
  {
    name: 'separator',
    desc: '进位分隔符（数字模式使用）',
    type: 'string',
    value: '-',
  },
  {
    name: 'show-group-separator',
    desc: '是否展示进位分隔符（数字模式使用）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'animation',
    desc: '是否开启动画',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'animation-duration',
    desc: '动画的过度时间',
    type: 'number',
    value: '2000',
  },
  {
    name: 'value-from',
    desc: '动画的起始值',
    type: 'number',
    value: '-',
  },
  {
    name: 'placeholder',
    desc: '提示文字（当 value 为 undefined 时显示）',
    type: 'string',
    value: '-',
  },
  {
    name: 'value-style',
    desc: '自定义显示值的样式',
    type: 'CSSProperties',
    value: '-',
  },
]);

const statisticSlots = ref([
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  },
  {
    name: 'prefix',
    desc: '前缀',
    type: '-',
    value: '-',
  },
  {
    name: 'suffix',
    desc: '后缀',
    type: '-',
    value: '-',
  },
  {
    name: 'extra',
    desc: '额外内容',
    type: '-',
    value: '-',
  },
]);

const countdownProps = ref([
  {
    name: 'title',
    desc: '倒计时的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'value',
    desc: '倒计时的值',
    type: 'number',
    value: '() => Date.now() + 300000',
  },
  {
    name: 'now',
    desc: '用于修正初始化时间显示不正确',
    type: 'number',
    value: '() => Date.now()',
  },
  {
    name: 'format',
    desc: '倒计时的展示格式 dayjs',
    type: 'string',
    value: "'HH:mm:ss'",
  },
  {
    name: 'start',
    desc: '是否开始倒计时',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'value-style',
    desc: '自定义显示值的样式',
    type: 'CSSProperties',
    value: '-',
  },
]);

const countdownEvents = ref([
  {
    name: 'finish',
    desc: '倒计时完成后触发的回调',
    type: '-',
    value: '-',
  },
]);

const countdownSlots = ref([
  {
    name: 'title',
    desc: '标题',
    type: '-',
    value: '-',
  },
]);
</script>
