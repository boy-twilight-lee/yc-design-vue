### 区块间隔

通过在 `Row` 上指定 `Gutter` 可以增加栅格的区域间隔。

<div class="cell-demo vp-raw">
 <div>
    <p>Horizontal</p>
    <yc-row class="grid-demo" :gutter="24">
      <yc-col :span="12">
        <div>col - 12</div>
      </yc-col>
      <yc-col :span="12">
        <div>col - 12</div>
      </yc-col>
    </yc-row>
    <p>Responsive</p>
    <yc-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
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
    <p>Horizontal and Vertical</p>
    <yc-row class="grid-demo" :gutter="[24, 12]">
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
.grid-demo .yc-col {
  height: 48px;
  color: var(--color-white);
}
.grid-demo .yc-col > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.grid-demo .yc-col:nth-child(2n) > div {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo .yc-col:nth-child(2n + 1) > div {
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
    <p>Horizontal</p>
    <yc-row
      class="grid-demo"
      :gutter="24">
      <yc-col :span="12">
        <div>col - 12</div>
      </yc-col>
      <yc-col :span="12">
        <div>col - 12</div>
      </yc-col>
    </yc-row>
    <p>Responsive</p>
    <yc-row
      class="grid-demo"
      :gutter="{ md: 8, lg: 24, xl: 32 }">
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
    <p>Horizontal and Vertical</p>
    <yc-row
      class="grid-demo"
      :gutter="[24, 12]">
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
.grid-demo .yc-col {
  height: 48px;
  color: var(--color-white);
}
.grid-demo .yc-col > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.grid-demo .yc-col:nth-child(2n) > div {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo .yc-col:nth-child(2n + 1) > div {
  background-color: var(--color-primary-light-4);
}
</style>
```

</details>
