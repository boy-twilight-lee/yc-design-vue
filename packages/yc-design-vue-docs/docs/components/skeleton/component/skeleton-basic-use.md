### 基本用法

骨架屏组件提供 `<a-skeleton-line>` 和 `<a-skeleton-shape>` 两种组件，用户可根据需要组合使用。

<div class="cell-demo vp-raw">
  <yc-skeleton>
    <yc-space
      direction="vertical"
      :style="{ width: '100%' }"
      size="large">
      <yc-skeleton-line :rows="3" />
      <yc-skeleton-shape />
    </yc-space>
  </yc-skeleton>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-skeleton>
    <yc-space
      direction="vertical"
      :style="{ width: '100%' }"
      size="large">
      <yc-skeleton-line :rows="3" />
      <yc-skeleton-shape />
    </yc-space>
  </yc-skeleton>
</template>
```

</details>
