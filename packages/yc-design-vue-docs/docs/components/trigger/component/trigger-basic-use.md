### 基本用法

这个例子展示了触发器的最基础的使用。触发器默认是没有弹出框的样式的。以下示例均为官网添加的样式。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-trigger
      position="top"
      auto-fit-position
      :unmount-on-close="false">
      <span>Hover Me</span>
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger
      trigger="click"
      :unmount-on-close="false">
      <yc-button>Click Me</yc-button>
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger trigger="focus">
      <yc-input placeholder="Focus on me" />
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
  </yc-space>
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
  <yc-space>
    <yc-trigger
      position="top"
      auto-fit-position
      :unmount-on-close="false">
      <span>Hover Me</span>
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger
      trigger="click"
      :unmount-on-close="false">
      <yc-button>Click Me</yc-button>
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger trigger="focus">
      <yc-input placeholder="Focus on me" />
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
  </yc-space>
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
