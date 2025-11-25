### 跟随鼠标显示弹出框

通过 `show-arrow` 属性，可以展示默认的箭头元素。也可以通过 `arrow-class` 或 `arrow-style` 进行定制。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-trigger trigger="click">
      <yc-button>Click Me</yc-button>
      <template #content>
        <div class="demo-arrow">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger
      trigger="click"
      show-arrow>
      <yc-button>Click Me (Arrow)</yc-button>
      <template #content>
        <div class="demo-arrow">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
  </yc-space>
</div>

<style scoped>
.demo-arrow {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
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
  <yc-space>
    <yc-trigger trigger="click">
      <yc-button>Click Me</yc-button>
      <template #content>
        <div class="demo-arrow">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger
      trigger="click"
      show-arrow>
      <yc-button>Click Me (Arrow)</yc-button>
      <template #content>
        <div class="demo-arrow">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
  </yc-space>
</template>

<style scoped>
.demo-arrow {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
}
</style>
```

</details>
