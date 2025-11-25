### 输入框尺寸

数字输入框分为 `mini`、`small`、`medium`、`large` 四种尺寸。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      size="large"
      class="input-demo" />
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      mode="button"
      size="large"
      class="input-demo" />
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
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      size="large"
      class="input-demo" />
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      mode="button"
      size="large"
      class="input-demo" />
  </yc-space>
</template>
```

</details>
