### 格式化展示值

通过 `formatter` 和 `parser` 配合使用可以定义输入框展示值。

<div class="cell-demo vp-raw">
  <yc-input-number
    :style="{ width: '320px' }"
    placeholder="Please Enter"
    class="input-demo"
    :default-value="12000"
    :min="0"
    :formatter="formatter"
    :parser="parser" />
</div>

<script setup>
const formatter = (value) => {
  const values = value.split('.');
  values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return values.join('.');
};
const parser = (value) => {
  return value.replace(/,/g, '');
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
  <yc-input-number
    :style="{ width: '320px' }"
    placeholder="Please Enter"
    class="input-demo"
    :default-value="12000"
    :min="0"
    :formatter="formatter"
    :parser="parser" />
</template>

<script setup>
const formatter = (value) => {
  const values = value.split('.');
  values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return values.join('.');
};
const parser = (value) => {
  return value.replace(/,/g, '');
};
</script>
```

</details>
