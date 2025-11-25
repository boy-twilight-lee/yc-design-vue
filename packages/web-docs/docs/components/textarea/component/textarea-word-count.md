### 字数统计

设置 `max-length` 可以限制最大字数，配合 `show-word-limit` 可以显示字数统计。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    fill>
    <yc-textarea
      placeholder="Please enter something"
      :max-length="10"
      allow-clear
      show-word-limit />
    <yc-textarea
      placeholder="Please enter something"
      :max-length="{ length: 10, errorOnly: true }"
      allow-clear
      show-word-limit />
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
    size="large"
    fill>
    <yc-textarea
      placeholder="Please enter something"
      :max-length="10"
      allow-clear
      show-word-limit />
    <yc-textarea
      placeholder="Please enter something"
      :max-length="{ length: 10, errorOnly: true }"
      allow-clear
      show-word-limit />
  </yc-space>
</template>
```

</details>
