### 其他属性的响应式

`span` 、`offset` 、`offset` 属性都可以在传入的对象中设置 `xs`、 `sm` 、`md` 、`lg` 、`xl` 、`xxl` 。

<div class="cell-demo vp-raw">
  <yc-row class="grid-demo">
    <yc-col
      :span="{
        xs: 5,
        lg: 6,
      }"
      :offset="{
        xs: 1,
        lg: 2,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 11,
        lg: 6,
      }"
      :offset="{
        xs: 1,
        lg: 2,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 5,
        lg: 6,
      }"
      :offset="{
        xs: 1,
        lg: 2,
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
        xs: 5,
        lg: 6,
      }"
      :offset="{
        xs: 1,
        lg: 2,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 11,
        lg: 6,
      }"
      :offset="{
        xs: 1,
        lg: 2,
      }">
      Col
    </yc-col>
    <yc-col
      :span="{
        xs: 5,
        lg: 6,
      }"
      :offset="{
        xs: 1,
        lg: 2,
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
