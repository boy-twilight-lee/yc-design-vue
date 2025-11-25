### 可关闭

设置 `closable` 来显示关闭按钮。

<div class="cell-demo vp-rwa">
  <yc-button
    @click="$message.info({
        content: 'This is an info message!',
        closable: true,
      })
    "
    >Closeable Message</yc-button
  >
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
  <yc-button
    @click="
      $message.info({
        content: 'This is an info message!',
        closable: true,
      })
    "
    >Closeable Message</yc-button
  >
</template>

<script setup></script>
```

</details>
