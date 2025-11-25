### 输入框状态

输入框可以设置禁用和错误状态。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Disabled status"
      disabled />
    <yc-input
      :style="{ width: '320px' }"
      default-value="Disabled"
      placeholder="Disabled status"
      disabled />
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Error status"
      error />
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Disabled status"
      disabled />
    <yc-input
      :style="{ width: '320px' }"
      default-value="Disabled"
      placeholder="Disabled status"
      disabled />
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Error status"
      error />
  </yc-space>
</template>
```

</details>
