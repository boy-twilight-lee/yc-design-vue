### 全局提示的位置

全局提示有 2 种不同的弹出位置，分别为顶部和底部。

<div class="cell-demo vp-rwa">
  <yc-space>
    <yc-button
      @click="this.$message.info({ content: 'This is an info message!' })"
      >Top Message</yc-button
    >
    <yc-button
      @click="
          this.$message.info({
            content: 'This is an info message!',
            position: 'bottom',
          })
      "
      >Bottom Message</yc-button
    >
  </yc-space>
</div>

<script setup></script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-button
      @click="this.$message.info({ content: 'This is an info message!' })"
      >Top Message</yc-button
    >
    <yc-button
      @click="
        this.$message.info({
          content: 'This is an info message!',
          position: 'bottom',
        })
      "
      >Bottom Message</yc-button
    >
  </yc-space>
</template>

<script setup></script>
```

</details>
