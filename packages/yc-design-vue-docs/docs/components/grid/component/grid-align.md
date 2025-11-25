## 垂直布局

通过 `align` 来进行垂直布局。

<div class="cell-demo vp-raw">
  <div>
    <p>Arrange top</p>
    <yc-row class="grid-demo" align="start">
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
    </yc-row>
    <p>Arrange center</p>
    <yc-row class="grid-demo" align="center">
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
    </yc-row>
    <p>Arrange bottom</p>
    <yc-row class="grid-demo" align="end">
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
    </yc-row>
  </div>
</div>

<style scoped>
.grid-demo {
  background-color: var(--color-fill-2);
  margin-bottom: 40px;
}
.grid-demo:last-child {
  margin-bottom: 0px;
}
.grid-demo .yc-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .yc-col:nth-of-type(1) {
  height: 90px;
  line-height: 90px;
}
.grid-demo .yc-col:nth-of-type(2) {
  height: 48px;
  line-height: 48px;
}
.grid-demo .yc-col:nth-of-type(3) {
  height: 120px;
  line-height: 120px;
}
.grid-demo .yc-col:nth-of-type(4) {
  height: 60px;
  line-height: 60px;
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
    <p>Arrange top</p>
    <yc-row
      class="grid-demo"
      align="start">
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
    </yc-row>
    <p>Arrange center</p>
    <yc-row
      class="grid-demo"
      align="center">
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
    </yc-row>
    <p>Arrange bottom</p>
    <yc-row
      class="grid-demo"
      align="end">
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
      <yc-col :span="6">
        <div>col - 6</div>
      </yc-col>
    </yc-row>
  </div>
</template>

<style scoped>
.grid-demo {
  background-color: var(--color-fill-2);
  margin-bottom: 40px;
}
.grid-demo:last-child {
  margin-bottom: 0px;
}
.grid-demo .yc-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .yc-col:nth-of-type(1) {
  height: 90px;
  line-height: 90px;
}
.grid-demo .yc-col:nth-of-type(2) {
  height: 48px;
  line-height: 48px;
}
.grid-demo .yc-col:nth-of-type(3) {
  height: 120px;
  line-height: 120px;
}
.grid-demo .yc-col:nth-of-type(4) {
  height: 60px;
  line-height: 60px;
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
