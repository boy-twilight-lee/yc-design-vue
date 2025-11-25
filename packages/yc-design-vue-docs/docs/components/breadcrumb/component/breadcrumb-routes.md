### 参数化配置

通过 `routes` 来传递面包屑数据。若是要自定义面包屑的话，建议使用 `<yc-breadcrumb-item />` 组件。默认使用 a 标签的 href 属性绑定路径，可通过 `item` 插槽自定义渲染。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-breadcrumb :routes="routes" />
    <yc-breadcrumb :routes="routes">
      <template #item-render="{ route, paths }">
        <yc-link :href="paths.join('/')">
          {{ route.label }}
        </yc-link>
      </template>
    </yc-breadcrumb>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const routes = ref([
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/channel',
    label: 'Channel',
  },
  {
    path: '/news',
    label: 'News',
  },
]);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space direction="vertical">
    <yc-breadcrumb :routes="routes" />
    <yc-breadcrumb :routes="routes">
      <template #item-render="{ route, paths }">
        <yc-link :href="paths.join('/')">
          {{ route.label }}
        </yc-link>
      </template>
    </yc-breadcrumb>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const routes = ref([
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/channel',
    label: 'Channel',
  },
  {
    path: '/news',
    label: 'News',
  },
]);
</script>
```

</details>
