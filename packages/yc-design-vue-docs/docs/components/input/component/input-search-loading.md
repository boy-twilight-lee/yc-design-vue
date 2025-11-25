### 搜索框（加载中）

通过 `loading` 属性可以让搜索框展示加载中状态

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      loading />
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      search-button
      loading />
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
      placeholder="Please enter something"
      loading />
    <yc-input-search
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      search-button
      loading />
  </yc-space>
</template>
```

</details>
