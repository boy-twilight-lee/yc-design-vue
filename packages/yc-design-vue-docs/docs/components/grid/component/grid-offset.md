### 栅格偏移

指定 `offset` 可以对栅格进行平移操作。

<div class="cell-demo vp-raw">
  <div>
    <yc-row class="grid-demo" style="marginBottom: 16px; backgroundColor: var(--color-fill-2);">
      <yc-col :span="8">col - 8</yc-col>
      <yc-col :span="8" :offset="8">
        col - 8 | offset - 8
      </yc-col>
    </yc-row>
    <yc-row class="grid-demo" style="marginBottom: 16px; backgroundColor: var(--color-fill-2);">
      <yc-col :span="6" :offset="8">
        col - 6 | offset - 8
      </yc-col>
      <yc-col :span="6" :offset="4">
        col - 6 | offset - 4
      </yc-col>
    </yc-row>
    <yc-row class="grid-demo" style="backgroundColor: var(--color-fill-2)">
      <yc-col :span="12" :offset="8">
        col - 12 | offset - 8
      </yc-col>
    </yc-row>
  </div>
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
  <div>
    <yc-row
      class="grid-demo"
      style="marginBottom: 16px; backgroundColor: var(--color-fill-2);">
      <yc-col :span="8">col - 8</yc-col>
      <yc-col
        :span="8"
        :offset="8">
        col - 8 | offset - 8
      </yc-col>
    </yc-row>
    <yc-row
      class="grid-demo"
      style="marginBottom: 16px; backgroundColor: var(--color-fill-2);">
      <yc-col
        :span="6"
        :offset="8">
        col - 6 | offset - 8
      </yc-col>
      <yc-col
        :span="6"
        :offset="4">
        col - 6 | offset - 4
      </yc-col>
    </yc-row>
    <yc-row
      class="grid-demo"
      style="backgroundColor: var(--color-fill-2)">
      <yc-col
        :span="12"
        :offset="8">
        col - 12 | offset - 8
      </yc-col>
    </yc-row>
  </div>
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
