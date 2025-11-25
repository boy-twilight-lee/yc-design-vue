### 滚动容器

通过设置 `update-at-scroll` 监听容器的滚动。

<div class="cell-demo vp-raw">
  <div :style="{ height: '100px', overflowY: 'scroll' }">
    <div :style="{ height: '200px' }">
      <yc-trigger
        trigger="click"
        update-at-scroll>
        <yc-button :style="{ marginTop: '80px' }">Click Me</yc-button>
        <template #content>
          <div class="demo-basic">
            <yc-empty />
          </div>
        </template>
      </yc-trigger>
    </div>
  </div>
</div>

<style scoped>
.demo-basic {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
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
  <div :style="{ height: '100px', overflowY: 'scroll' }">
    <div :style="{ height: '200px' }">
      <yc-trigger
        trigger="click"
        update-at-scroll>
        <yc-button :style="{ marginTop: '80px' }">Click Me</yc-button>
        <template #content>
          <div class="demo-basic">
            <yc-empty />
          </div>
        </template>
      </yc-trigger>
    </div>
  </div>
</template>

<style scoped>
.demo-basic {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
```

</details>
