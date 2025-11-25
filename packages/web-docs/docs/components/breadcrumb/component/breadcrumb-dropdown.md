### 带有下拉菜单

通过 `droplist` 或者 `routes` 来指定下拉菜单。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-breadcrumb :routes="routes" />
    <yc-breadcrumb>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item :droplist="droplist"> Channel </yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>
        <template #droplist>
          <yc-doption>Option 1</yc-doption>
          <yc-dsubmenu value="option-1">
            <template #default>Option 2</template>
            <template #content>
              <yc-doption>Option 2-1</yc-doption>
              <yc-doption>Option 2-2</yc-doption>
              <yc-doption>Option 2-3</yc-doption>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center;">
                <yc-button>Click</yc-button>
              </div>
            </template>
          </yc-dsubmenu>
          <yc-doption>Option 3</yc-doption>
        </template>
        Channel
      </yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
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
    children: [
      {
        path: '/users',
        label: 'Users',
      },
      {
        path: '/permission',
        label: 'Permission',
      },
    ],
  },
  {
    path: '/news',
    label: 'News',
  },
]);
const droplist = ref([
  {
    path: '/goods',
    label: 'Goods',
  },
  {
    path: '/wallet',
    label: 'Wallet',
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
    <yc-breadcrumb>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item :droplist="droplist"> Channel </yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>
        <template #droplist>
          <yc-doption>Option 1</yc-doption>
          <yc-dsubmenu value="option-1">
            <template #default>Option 2</template>
            <template #content>
              <yc-doption>Option 2-1</yc-doption>
              <yc-doption>Option 2-2</yc-doption>
              <yc-doption>Option 2-3</yc-doption>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center;">
                <yc-button>Click</yc-button>
              </div>
            </template>
          </yc-dsubmenu>
          <yc-doption>Option 3</yc-doption>
        </template>
        Channel
      </yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
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
    children: [
      {
        path: '/users',
        label: 'Users',
      },
      {
        path: '/permission',
        label: 'Permission',
      },
    ],
  },
  {
    path: '/news',
    label: 'News',
  },
]);
const droplist = ref([
  {
    path: '/goods',
    label: 'Goods',
  },
  {
    path: '/wallet',
    label: 'Wallet',
  },
]);
</script>
```

</details>
