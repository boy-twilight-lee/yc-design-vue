## API

### spin Props

<field-table :data="spinProps"/>

### spin Slots

<field-table :data="spinSlots" type="slots"/>

<script setup>
import { ref } from 'vue';

const spinProps = ref([
  {
    name: 'size',
    desc: '尺寸',
    type: 'number',
    value: '-',
  },
  {
    name: 'loading',
    desc: '是否为加载中状态（仅在容器模式下生效）',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'dot',
    desc: '是否使用点类型的动画',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'tip',
    desc: '提示内容',
    type: 'string',
    value: '-',
  },
  {
    name: 'hide-icon',
    desc: '是否隐藏图标',
    type: 'boolean',
    value: 'false',
  },
]);

const spinSlots = ref([
  {
    name: 'tip',
    desc: '自定义提示内容',
    type: '-',
    value: '-',
  },
  {
    name: 'element',
    desc: '自定义元素',
    type: '-',
    value: '-',
  },
  {
    name: 'icon',
    desc: '自定义图标（自动旋转）',
    type: '-',
    value: '-',
  },
]);
</script>
