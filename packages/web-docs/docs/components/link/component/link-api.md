## API

### link Props

<field-table :data="linkProps"/>

### link Events

<field-table :data="linkEvents" type="emits"/>

<script setup>
import { ref } from 'vue';

const linkProps = ref([
  {
    name: 'href',
    desc: '链接地址',
    type: 'string',
    value: '-',
  },
  {
    name: 'status',
    desc: '链接的状态',
    type: "Status",
    value: "'normal'",
    href:'/guide/types'
  },
  {
    name: 'hoverable',
    desc: '鼠标悬浮时存在底色',
    type: 'boolean',
    value: 'true',
  },
  {
    name: 'icon',
    desc: '图标',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'loading',
    desc: '链接是否为加载中状态',
    type: 'boolean',
    value: 'false',
  },
  {
    name: 'disabled',
    desc: '链接是否禁用',
    type: 'boolean',
    value: 'false',
  },
]);

const linkEvents = ref([
  {
    name: 'click',
    desc: '点击时触发',
    type: {
      ev: 'MouseEvent'
    },
    value: '-',
  },
]);

</script>
