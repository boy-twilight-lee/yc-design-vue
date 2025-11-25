## API

### affix Props

<field-table :data="affixProps"/>

### affix Emits

<field-table :data="affixEmits" type="emits"/>

### affix Method

<field-table :data="affixMethod" type="methods"/>

<script setup>
import { ref } from 'vue';

const affixProps = ref([
  {
    name: 'offset-top',
    desc: '距离窗口顶部达到指定偏移量后触发',
    type: 'number',
    value: '0',
  },
  {
    name: 'offset-bottom',
    desc: '距离窗口底部达到指定偏移量后触发',
    type: 'number',
    value: '-',
  },
  {
    name: 'target',
    desc: '滚动容器，默认是 window',
    type: 'TargetContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'target-container',
    desc: 'target的外层滚动元素，默认是 window。Affix 将会监听该元素的滚动事件，并实时更新固钉的位置。主要是为了解决 target 属性指定为非 window 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题',
    type: 'TargetContainer',
    value: '-',
    href:"/guide/types"
  },
]);

const affixEmits = ref([
  {
    name: 'change',
    desc: '固定状态发生改变时触发',
    type: {
      fixed: 'boolean'
    },
    value: '-',
  },
]);

const affixMethod = ref([
  {
    name: 'updatePosition',
    desc: '更新位置',
    type: '-',
    value: '-',
  },
]);
</script>
