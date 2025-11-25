### 右键菜单

移入区域后，可点击鼠标右键触发。

<div class="cell-demo vp-raw">
  <yc-dropdown
    trigger="contextMenu"
    :style="{ display: 'block' }"
     alignPoint>
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        backgroundColor: 'var(--color-fill-2)',
      }">
      <div>Click Me</div>
    </div>
    <template #content>
      <yc-doption>Option 1</yc-doption>
      <yc-doption>Option 2</yc-doption>
      <yc-doption>Option 3</yc-doption>
    </template>
  </yc-dropdown>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-dropdown
    trigger="contextMenu"
    :style="{ display: 'block' }"
    alignPoint>
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        backgroundColor: 'var(--color-fill-2)',
      }">
      <div>Click Me</div>
    </div>
    <template #content>
      <yc-doption>Option 1</yc-doption>
      <yc-doption>Option 2</yc-doption>
      <yc-doption>Option 3</yc-doption>
    </template>
  </yc-dropdown>
</template>
```

</details>
