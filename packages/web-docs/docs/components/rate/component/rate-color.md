### 自定义颜色

通过 `color` 可以自定义颜色。另外可以通过对象形式自定义不同分值时的颜色。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-rate color="red" />
    <yc-rate :color="color" />
  </yc-space>
</div>

<script setup>
const color = {
  2: 'red',
  4: 'green',
  5: 'blue',
};
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space direction="vertical">
    <yc-rate color="red" />
    <yc-rate :color="color" />
  </yc-space>
</template>

<script setup>
const color = {
  2: 'red',
  4: 'green',
  5: 'blue',
};
</script>
```

</details>
