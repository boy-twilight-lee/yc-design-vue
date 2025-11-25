## API

### tabs Props

<field-table :data="tabsProps"/>

### tabs Events

<field-table :data="tabsEvents" type="emits"/>

### tabs Slots

<field-table :data="tabsSlots" type="slots"/>

### tab-pane Props

<field-table :data="tabPaneProps"/>

### tab-pane Slots

<field-table :data="tabPaneSlots" type="slots"/>

### Type

```typescript
type TabKey = string | number;

type Type = 'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule';
```

<script setup>
import { ref } from 'vue';

const tabsProps = ref([
  {
    name: 'active-key (v-model)',
    desc: '当前选中的标签的 key',
    type: 'TabKey',
    value: '-',
  },
  {
    name: 'default-active-key',
    desc: '默认选中的标签的key（非受控状态，为空时选中第一个标签页）',
    type: 'TabKey',
    value: "''",
  },
  {
    name: 'position',
    desc: '选项卡的位置',
    type: "Position",
    value: "'top'",
     href:'/guide/types'
  },
  {
    name: 'size',
    desc: '选项卡的大小',
    type: "Size",
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'type',
    desc: '选项卡的类型',
    type: "Type",
    value: "'line'",
  },
  {
    name: 'direction',
    desc: '选项卡的方向',
    type: "Direction",
    value: "'horizontal'",
    href:"/guide/types"
  },
  {
    name: 'editable',
    desc: '是否开启可编辑模式',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'show-add-button',
    desc: '是否显示增加按钮（仅在可编辑模式可用）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'destroy-on-hide',
    desc: '是否在不显示标签时销毁内容',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'lazy-load',
    desc: '是否在首次展示标签时挂载内容',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'justify',
    desc: '高度撑满容器，只在水平模式下生效。',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'animation',
    desc: '是否开启选项内容过渡动画',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'header-padding',
    desc: '选项卡头部是否存在水平边距。仅对 type 等于 line、text 类型的选项卡生效',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'auto-switch',
    desc: '创建标签后是否切换到新标签（最后一个）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'hide-content',
    desc: '是否隐藏内容',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'trigger',
    desc: '触发方式',
    type: "Trigger",
    value: "'click'",
    href: "/guide/types"
  },
]);

const tabsEvents = ref([
  {
    name: 'change',
    desc: '当前标签值改变时触发',
    type: {
      key: 'TabKey'
    },
    value: '-',
  },
  {
    name: 'tab-click',
    desc: '用户点击标签时触发',
    type: {
      key: 'TabKey'
    },
    value: '-',
  },
  {
    name: 'add',
    desc: '用户点击增加按钮时触发',
    type: '-',
    value: '-',
  },
  {
    name: 'delete',
    desc: '用户点击删除按钮时触发',
    type: {
      key: 'TabKey'
    },
    value: '-',
  },
]);

const tabsSlots = ref([
  {
    name: 'extra',
    desc: '选项卡额外内容',
    type: '-',
    value: '-',
  },
]);

const tabPaneProps = ref([
  {
    name: 'title',
    desc: '选项卡的标题',
    type: 'string',
    value: '-',
  },
  {
    name: 'path（必填）',
    desc: '面板的key',
    type: 'TabKey',
    value: '-',
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'closable',
    desc: '是否允许关闭此选项卡（仅在可编辑模式生效）',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'destroy-on-hide',
    desc: '是否在不显示标签时销毁内容',
    type: 'boolean',
    value: 'false',
  },
]);

const tabPaneSlots = ref([
  {
    name: 'title',
    desc: '选项卡标题',
    type: '-',
    value: '-',
  },
]);
</script>
