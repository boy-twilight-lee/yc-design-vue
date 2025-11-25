### 响应式布局

预置六种响应尺寸, 分别为 `xs` 、`sm` 、`md` 、`lg` 、`xl` 、`xxl`。

<div class="cell-demo vp-raw">
  <yc-row class="grid-demo">
    <yc-col
      :span="{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        xxl: 8,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 20,
        sm: 16,
        md: 12,
        lg: 8,
        xl: 4,
        xxl: 8,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        xxl: 8,
      }">
      Col
    </yc-col>
  </yc-row>
</div>

<style scoped>
.grid-demo .yc-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .yc-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo .yc-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-row class="grid-demo">
    <yc-col
      :span="{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        xxl: 8,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 20,
        sm: 16,
        md: 12,
        lg: 8,
        xl: 4,
        xxl: 8,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        xxl: 8,
      }">
      Col
    </yc-col>
  </yc-row>
</template>

<style scoped>
.grid-demo .yc-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .yc-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo .yc-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
```

</details>
