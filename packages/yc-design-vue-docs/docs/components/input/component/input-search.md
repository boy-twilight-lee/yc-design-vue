### 搜索框

带有搜索按钮的输入框，用于内容检索。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something" />
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      search-button />
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
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something" />
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      search-button />
  </yc-space>
</template>
```

</details>
