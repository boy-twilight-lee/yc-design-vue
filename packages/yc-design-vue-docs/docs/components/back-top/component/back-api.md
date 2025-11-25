## API

### back-top Props

<field-table :data="backTopProps"/>

<script setup>
import { ref } from 'vue';

const backTopProps = ref([
  {
    name: 'visible-height',
    desc: '显示回到顶部按钮的触发滚动高度',
    type: 'number',
    value: '200',
  },
  {
    name: 'target-container',
    desc: '滚动事件的监听容器',
    type: 'TargetContainer',
    value: '-',
    href:"/guide/types"
  },
  {
    name: 'easing',
    desc: '滚动动画的缓动方式，可选值参考 BTween',
    type: 'string',
    value: "'quartOut'",
  },
  {
    name: 'duration',
    desc: '滚动动画的持续时间',
    type: 'number',
    value: '200',
  },
]);
</script>
