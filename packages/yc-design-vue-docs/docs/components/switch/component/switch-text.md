### 自定义文案

自定义开关的打开/关闭状态的文字。

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
