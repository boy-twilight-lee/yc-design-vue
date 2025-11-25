### 范围选择器

时间输入器的范围选择器。

<div class="cell-demo vp-raw">
  <yc-time-picker
    type="time-range"
    @select="(valueString, value) => print('onSelect:', valueString, value)"
    @change="(valueString, value) => print('onChange:', valueString, value)"
    style="width: 252px;" />
</div>

<script setup>
function print(...arg) {
  console.log(...arg);
}
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-time-picker
    type="time-range"
    @select="(valueString, value) => print('onSelect:', valueString, value)"
    @change="(valueString, value) => print('onChange:', valueString, value)"
    style="width: 252px;" />
</template>

<script setup>
function print(...arg) {
  console.log(...arg);
}
</script>
```

</details>
