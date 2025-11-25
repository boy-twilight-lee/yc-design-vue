### 弹出位置

Popover支持 12 个不同的方位。分别为：`上左`、`上`、`上右`、`下左`、 `下`、`下右`、`左上`、`左`、`左下`、`右上`、`右`、`右下`。

<div class="cell-demo vp-raw">
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <yc-popover position="tl">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '70px' }"
        >TL</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="top">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '180px' }"
        >TOP</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="tr">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '290px' }"
        >TR</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="bl">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '70px' }"
        >BL</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="bottom">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '180px' }"
        >BOTTOM</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="br">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '290px' }"
        >BR</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="lt">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '60px', left: '10px' }"
        >LT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="left">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '120px', left: '10px' }"
        >LEFT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="lb">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '180px', left: '10px' }"
        >LB</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="rt">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '60px', left: '350px' }"
        >RT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="right">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '120px', left: '350px' }"
        >RIGHT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="rb">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '180px', left: '350px' }"
        >RB</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <yc-popover position="tl">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '70px' }"
        >TL</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="top">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '180px' }"
        >TOP</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="tr">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '290px' }"
        >TR</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="bl">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '70px' }"
        >BL</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="bottom">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '180px' }"
        >BOTTOM</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="br">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '290px' }"
        >BR</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="lt">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '60px', left: '10px' }"
        >LT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="left">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '120px', left: '10px' }"
        >LEFT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="lb">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '180px', left: '10px' }"
        >LB</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="rt">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '60px', left: '350px' }"
        >RT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="right">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '120px', left: '350px' }"
        >RIGHT</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover position="rb">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '180px', left: '350px' }"
        >RB</yc-button
      >
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
  </div>
</template>

<style lang="less">
.button {
  width: 100px;
}
</style>
```

</details>
