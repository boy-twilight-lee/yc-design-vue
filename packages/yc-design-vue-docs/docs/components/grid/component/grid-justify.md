### 水平布局

通过 `justify` 来进行水平布局。

<div class="cell-demo vp-raw">
  <div>
    <p>Arrange left</p>
    <yc-row class="grid-demo" justify="start">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Arrange center</p>
    <yc-row class="grid-demo" justify="center">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Arrange right</p>
    <yc-row class="grid-demo" justify="end">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Space around</p>
    <yc-row class="grid-demo" justify="space-around">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Space between</p>
    <yc-row class="grid-demo" justify="space-between">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
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
    <p>Arrange left</p>
    <yc-row
      class="grid-demo"
      justify="start">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Arrange center</p>
    <yc-row
      class="grid-demo"
      justify="center">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Arrange right</p>
    <yc-row
      class="grid-demo"
      justify="end">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Space around</p>
    <yc-row
      class="grid-demo"
      justify="space-around">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
    </yc-row>
    <p>Space between</p>
    <yc-row
      class="grid-demo"
      justify="space-between">
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
      </yc-col>
      <yc-col :span="4">
        <div>col - 4</div>
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
.grid-demo .yc-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo .yc-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
```

</details>
