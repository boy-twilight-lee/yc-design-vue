### 长按钮

通过设置 `long` 属性，使按钮的宽度跟随容器的宽度。

<div class='cell-demo vp-raw'>
   <yc-space class="wrapper" direction="vertical">
    <yc-button type="primary" long>Primary</yc-button>
    <yc-button long>Default</yc-button>
    <yc-button type="dashed" long>Dashed</yc-button>
    <yc-button type="outline" long>Outline</yc-button>
    <yc-button type="text" long>Text</yc-button>
  </yc-space>
</div>

<style scoped>
.wrapper{
  width: 400px;
  padding: 20px;
  border: 1px solid var(~'--vp-color-border');
  border-radius: 4px;
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
  <yc-space
    class="wrapper"
    direction="vertical">
    <yc-button
      type="primary"
      long
      >Primary</yc-button
    >
    <yc-button long>Default</yc-button>
    <yc-button
      type="dashed"
      long
      >Dashed</yc-button
    >
    <yc-button
      type="outline"
      long
      >Outline</yc-button
    >
    <yc-button
      type="text"
      long
      >Text</yc-button
    >
  </yc-space>
</template>
```

</details>
