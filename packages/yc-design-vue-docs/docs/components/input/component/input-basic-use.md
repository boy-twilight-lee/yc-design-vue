### 基本用法

输入框的基本用法。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear />
    <yc-input
      :style="{ width: '320px' }"
      default-value="content"
      placeholder="Please enter something"
      allow-clear />
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
  <yc-space>
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear />
    <yc-input
      :style="{ width: '320px' }"
      default-value="content"
      placeholder="Please enter something"
      allow-clear />
  </yc-space>
</template>
```

</details>
