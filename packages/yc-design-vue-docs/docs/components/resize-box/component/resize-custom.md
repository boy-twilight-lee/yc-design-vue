### 定制伸缩杆内容

可通过插槽 `resize-trigger` 定制各个方向的伸缩杆的内容。

<div class="cell-demo vp-raw">
  <yc-resize-box
    :directions="['right', 'bottom']"
    style="width: 500px; min-width: 100px; max-width: 100%; height: 200px; text-align: center;">
    <template #resize-trigger="{ direction }">
      <div
        :class="[
          `resizebox-demo`,
          `resizebox-demo-${direction === 'right' ? 'vertical' : 'horizontal'}`,
        ]">
        <div class="resizebox-demo-line" />
      </div>
    </template>
    <yc-typography-paragraph
      >We are building the future of content discovery and
      creation.</yc-typography-paragraph
    >
    <yc-divider />
    <yc-typography-paragraph>
      ByteDance's content platforms enable people to enjoy content powered by AI
      technology. We inform, entertain, and inspire people across language,
      culture and geography.
    </yc-typography-paragraph>
    <yc-divider>ByteDance</yc-divider>
    <yc-typography-paragraph
      >Yiming Zhang is the founder and CEO of ByteDance.</yc-typography-paragraph
    >
  </yc-resize-box>
</div>

<style scoped>
.resizebox-demo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-2);
}
.resizebox-demo::before,
.resizebox-demo::after {
  width: 6px;
  height: 6px;
  border: 1px solid rgb(var(--arcoblue-6));
  content: '';
}
.resizebox-demo-line {
  flex: 1;
  background-color: rgb(var(--arcoblue-6));
}
.resizebox-demo-vertical {
  flex-direction: column;
}
.resizebox-demo-vertical .resizebox-demo-line {
  width: 1px;
  height: 100%;
}
.resizebox-demo-horizontal .resizebox-demo-line {
  height: 1px;
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
  <yc-resize-box
    :directions="['right', 'bottom']"
    style="width: 500px; min-width: 100px; max-width: 100%; height: 200px; text-align: center;">
    <template #resize-trigger="{ direction }">
      <div
        :class="[
          `resizebox-demo`,
          `resizebox-demo-${direction === 'right' ? 'vertical' : 'horizontal'}`,
        ]">
        <div class="resizebox-demo-line" />
      </div>
    </template>
    <yc-typography-paragraph
      >We are building the future of content discovery and
      creation.</yc-typography-paragraph
    >
    <yc-divider />
    <yc-typography-paragraph>
      ByteDance's content platforms enable people to enjoy content powered by AI
      technology. We inform, entertain, and inspire people across language,
      culture and geography.
    </yc-typography-paragraph>
    <yc-divider>ByteDance</yc-divider>
    <yc-typography-paragraph
      >Yiming Zhang is the founder and CEO of
      ByteDance.</yc-typography-paragraph
    >
  </yc-resize-box>
</template>

<style scoped>
.resizebox-demo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-2);
}
.resizebox-demo::before,
.resizebox-demo::after {
  width: 6px;
  height: 6px;
  border: 1px solid rgb(var(--arcoblue-6));
  content: '';
}
.resizebox-demo-line {
  flex: 1;
  background-color: rgb(var(--arcoblue-6));
}
.resizebox-demo-vertical {
  flex-direction: column;
}
.resizebox-demo-vertical .resizebox-demo-line {
  width: 1px;
  height: 100%;
}
.resizebox-demo-horizontal .resizebox-demo-line {
  height: 1px;
}
</style>
```

</details>
