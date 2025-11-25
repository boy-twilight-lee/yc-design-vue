### Flex 用法

通过设置 `Col` 组件的 `flex` 属性，可以任意配置 flex 布局。

<div class="cell-demo vp-raw">
  <yc-row class="grid-demo" style="margin-bottom: 16px;">
    <yc-col flex="100px">
      <div>100px</div>
    </yc-col>
    <yc-col flex="auto">
      <div>auto</div>
    </yc-col>
  </yc-row>
  <yc-row class="grid-demo" style="margin-bottom: 16px;">
    <yc-col flex="100px">
      <div>100px</div>
    </yc-col>
    <yc-col flex="auto">
      <div>auto</div>
    </yc-col>
    <yc-col flex="100px">
      <div>100px</div>
    </yc-col>
  </yc-row>
  <yc-row class="grid-demo" style="margin-bottom: 16px;">
    <yc-col :flex="3">
      <div>3 / 12</div>
    </yc-col>
    <yc-col :flex="4">
      <div>4 / 12</div>
    </yc-col>
    <yc-col :flex="5">
      <div>5 / 12</div>
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

.grid-demo .yc-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}

.grid-demo .yc-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
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
  <yc-row
    class="grid-demo"
    style="margin-bottom: 16px;">
    <yc-col flex="100px">
      <div>100px</div>
    </yc-col>
    <yc-col flex="auto">
      <div>auto</div>
    </yc-col>
  </yc-row>
  <yc-row
    class="grid-demo"
    style="margin-bottom: 16px;">
    <yc-col flex="100px">
      <div>100px</div>
    </yc-col>
    <yc-col flex="auto">
      <div>auto</div>
    </yc-col>
    <yc-col flex="100px">
      <div>100px</div>
    </yc-col>
  </yc-row>
  <yc-row
    class="grid-demo"
    style="margin-bottom: 16px;">
    <yc-col :flex="3">
      <div>3 / 12</div>
    </yc-col>
    <yc-col :flex="4">
      <div>4 / 12</div>
    </yc-col>
    <yc-col :flex="5">
      <div>5 / 12</div>
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

.grid-demo .yc-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}

.grid-demo .yc-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
</style>
```

</details>
