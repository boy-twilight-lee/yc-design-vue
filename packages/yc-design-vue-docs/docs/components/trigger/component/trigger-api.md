## API

### trigger Props

<field-table :data="triggerProps"/>

### trigger Emits

<field-table :data="triggerEmits" type="emits"/>

### trigger Slots

<field-table :data="triggerSlots" type="slots"/>

### Type

```typescript
type TriggerType = 'hover' | 'click' | 'focus' | 'contextMenu';
```

<script setup>
import { ref } from 'vue';

const triggerProps = ref([
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
    type: "TriggerType",
    value: "'hover'",
  },
  {
    name: 'position',
    desc: '弹出位置',
    type: "PopupPosition",
    value: "'bottom'",
    href: '/guide/types'
  },
  {
    name: 'disabled',
    desc: '触发器是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'popup-offset',
    desc: '弹出框的偏移量（弹出框距离触发器的偏移距离）',
    type: 'number',
    value: '0',
  },
  {
    name: 'popup-translate',
    desc: '弹出框的移动距离',
    type: 'TriggerPopupTranslate',
    value: '-',
  },
  {
    name: 'show-arrow',
    desc: '弹出框是否显示箭头',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'align-point',
    desc: '弹出框是否跟随鼠标',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'popup-hover-stay',
    desc: '是否在移出触发器，并移入弹出框时保持弹出框显示',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'blur-to-close',
    desc: '是否在触发器失去焦点时关闭弹出框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'click-to-close',
    desc: '是否在点击触发器时关闭弹出框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'click-outside-to-close',
    desc: '是否在点击外部区域时关闭弹出框',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'unmount-on-close',
    desc: '是否在关闭时卸载弹出框节点',
    type: 'boolean',
    value: 'true',
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
    name: 'popup-style',
    desc: '弹出框的样式',
    type: 'CSSProperties',
    value: '-',
  },
  {
    name: 'animation-name',
    desc: '弹出动画的name',
    type: 'string',
    value: "'fade-in'",
  },
  {
    name: 'duration',
    desc: '弹出动画的持续时间',
    type: 'number| { enter: number; leave: number; }',
    value: '-',
  },
  {
    name: 'mouse-enter-delay',
    desc: 'mouseenter事件延时触发的时间（毫秒）',
    type: 'number',
    value: '100',
  },
  {
    name: 'mouse-leave-delay',
    desc: 'mouseleave事件延时触发的时间（毫秒）',
    type: 'number',
    value: '100',
  },
  {
    name: 'focus-delay',
    desc: 'focus事件延时触发的时间（毫秒）',
    type: 'number',
    value: '0',
  },
  {
    name: 'auto-fit-popup-width',
    desc: '是否将弹出框宽度设置为触发器宽度',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'auto-fit-popup-min-width',
    desc: '是否将弹出框的最小宽度设置为触发器宽度',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'auto-fix-position',
    desc: '当触发器的尺寸发生变化时，是否重新计算弹出框位置',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'popup-container',
    desc: '弹出框的挂载容器',
    type: 'PopupContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'update-at-scroll',
    desc: '是否在容器滚动时更新弹出框的位置',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'auto-fit-position',
    desc: '是否自动调整弹出框位置，以适应窗口大小',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'prevent-focus',
    desc: '是否阻止弹出层中的元素点击时获取焦点',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'scroll-to-close',
    desc: '是否在滚动时关闭弹出框',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'scroll-to-close-distance',
    desc: '滚动阈值，当滚动距离超过该值时触发关闭',
    type: 'number',
    value: '0',
  },
]);

const triggerEmits = ref([
  {
    name: 'popup-visible-change',
    desc: '弹出框显示状态改变时触发',
    type: {
      visible: 'boolean'
    },
    value: '-',
  },
  {
    name: 'show',
    desc: '弹出框显示后（动画结束）触发',
    type: '-',
    value: '-',
  },
  {
    name: 'hide',
    desc: '弹出框隐藏后（动画结束）触发',
    type: '-',
    value: '-',
  },
]);

const triggerSlots = ref([
  {
    name: 'content',
    desc: '弹出框内容',
    type: '-',
    value: '-',
  },
]);
</script>

### FAQ

关于弹出框的挂载位置
<br />
弹出框默认是挂载到 `body` 元素上的，如果想要修改挂载元素，可以使用 `popup-container` 属性进行指定，同时需要注意保证挂载元素的位置可以被准确定位到，一般可以为挂载元素增加 `position: relative` 样式。
<br />
<br />
在微前端项目中，需要保证子应用的挂载位置准确，可以将子应用的 `body` 样式添加 `position: relative`
<br />
<br />
滚动触发容器
<br />
组件默认仅监听了 window 的滚动事件，对于内部 div 的滚动没有进行监听，类似 `scroll-to-close` 功能也仅会对 window 滚动生效。可以通过开启 `update-at-scroll` 属性支持对父级 div 元素的滚动事件监听。
