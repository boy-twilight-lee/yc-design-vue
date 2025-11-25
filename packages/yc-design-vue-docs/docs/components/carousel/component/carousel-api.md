## API

### carousel Props

<field-table :data="carouselProps"/>

### carousel Events

<field-table :data="carouselEvents" type="emits"/>

### Type

```typescript
type AnimationName = 'slide' | 'fade';

type ShowArrow = 'always' | 'hover' | 'never';

type AutoPlay = boolean | { interval?: number; hoverToPause?: boolean };

type IndicatorPosition = 'bottom' | 'top' | 'left' | 'right' | 'outer';

type IndicatorType = 'line' | 'dot' | 'slider' | 'never';
```

<script setup>
import { ref } from 'vue';

const carouselProps = ref([
  {
    name: 'current (v-model)',
    desc: '当前展示索引',
    type: 'number',
    value: '-',
  },
  {
    name: 'default-current',
    desc: '当前展示索引',
    type: 'number',
    value: '1',
  },
  {
    name: 'auto-play',
    desc: '是否自动循环展示，或者传入 { interval: 自动切换的时间间隔(默认: 3000), hoverToPause: 鼠标悬浮时是否暂停自动切换(默认: true) } 进行高级配置',
    type: 'AutoPlay',
    value: 'false',
  },
  {
    name: 'move-speed',
    desc: '幻灯片移动速率(ms)',
    type: 'number',
    value: '500',
  },
  {
    name: 'animation-name',
    desc: '切换动画',
    type: 'AnimationName',
    value: "'slide'",
  },
  {
    name: 'trigger',
    desc: '幻灯片切换触发方式, click/hover 指示器',
    type: 'EventTrigger',
    value: "'click'",
    href: "/guide/types"
  },
  {
    name: 'direction',
    desc: '幻灯片移动方向',
    type: "Direction",
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'show-arrow',
    desc: '切换箭头显示时机',
    type: 'ShowArrow',
    value: "'always'",
  },
  {
    name: 'arrow-class',
    desc: '切换箭头样式',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'indicator-type',
    desc: '指示器类型，可为小方块和小圆点或不显示',
    type: 'IndicatorType',
    value: "'dot'",
  },
  {
    name: 'indicator-position',
    desc: '指示器位置',
    type: 'IndicatorPosition',
    value: "'bottom'",
  },
  {
    name: 'indicator-class',
    desc: '指示器的样式',
    type: 'ClassName',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'transition-timing-function',
    desc: '过渡速度曲线, 默认匀速 transition-timing-function',
    type: 'string',
    value: "'cubic-bezier(0.34, 0.69, 0.1, 1)'",
  },
]);

const carouselEvents = ref([
  {
    name: 'change',
    desc: '幻灯片发生切换时的回调函数',
    type: {
      index: 'number',
      prevIndex: 'number',
      isManual: 'boolean'
    },
    value: '-',
  },
]);

const carouselSlots = ref([
  {
    name: 'default',
    desc: '轮播内容',
    type: '-',
    value: '-',
  },
]);
</script>
