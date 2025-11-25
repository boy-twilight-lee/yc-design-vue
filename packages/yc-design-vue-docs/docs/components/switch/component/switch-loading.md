### 加载中状态

通过设置 `loading` 使开关处于加载中状态，此时开关不可点击。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-switch>
      <template #checked> ON </template>
      <template #unchecked> OFF </template>
    </yc-switch>
    <yc-switch type="round">
      <template #checked> ON </template>
      <template #unchecked> OFF </template>
    </yc-switch>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space size="large">
    <yc-switch>
      <template #checked> ON </template>
      <template #unchecked> OFF </template>
    </yc-switch>
    <yc-switch type="round">
      <template #checked> ON </template>
      <template #unchecked> OFF </template>
    </yc-switch>
  </yc-space>
</template>
```

</details>
