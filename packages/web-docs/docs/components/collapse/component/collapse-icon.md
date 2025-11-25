### 展开图标

为展开项自定义展开图标

<div class="cell-demo vp-raw">
  <yc-collapse :default-active-key="['1', 2]">
    <template #expand-icon="{ active }">
      <icon-face-smile-fill v-if="active" />
      <icon-face-frown-fill v-else />
    </template>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="1">
      <template #expand-icon="{ active }">
        <icon-double-down v-if="active" />
        <icon-double-right v-else />
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      :path="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
  </yc-collapse>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-collapse :default-active-key="['1', 2]">
    <template #expand-icon="{ active }">
      <icon-face-smile-fill v-if="active" />
      <icon-face-frown-fill v-else />
    </template>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="1">
      <template #expand-icon="{ active }">
        <icon-double-down v-if="active" />
        <icon-double-right v-else />
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      :path="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
  </yc-collapse>
</template>
```

</details>
