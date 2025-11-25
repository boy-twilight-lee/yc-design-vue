## API

### config-provider Props

<field-table :data="configProviderProps"/>

<script setup>
import { ref } from 'vue';
const configProviderProps = ref([
  {
    name: 'locale',
    desc: '配置语言包',
    type: 'Record<string,any>',
    value: '1001',
  },
  {
    name: 'zIndex',
    desc: 'teleport传出组件的层级',
    type: 'number',
    value: '1001',
  },
  {
    name: 'popupContainer',
    desc: 'teleport传出组件挂载的容器',
    type: 'PopupContainer',
    value: 'body',
    href:"/guide/types"
  },
  {
    name: 'size',
    desc: '大小',
    type: 'Size',
    value: '-',
    href:'/guide/types'
  }
]);
</script>
