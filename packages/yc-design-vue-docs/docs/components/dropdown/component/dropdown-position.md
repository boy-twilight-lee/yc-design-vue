### 弹出方向

通过 `position` 支持指定 6 种弹出方位，分别是：`top`: 向上, `tl`: 左上, `tr`: 右上, `bottom:` 下方(默认), `bl`: 左下, `br`: 右下。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-dropdown position="bl">
      <yc-button>Bottom Left</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="bottom">
      <yc-button>Bottom</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="br">
      <yc-button>Bottom Right</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="tl">
      <yc-button>Top Left</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="top">
      <yc-button>Top</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="tr">
      <yc-button>Top Right</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-dropdown position="bl">
      <yc-button>Bottom Left</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="bottom">
      <yc-button>Bottom</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="br">
      <yc-button>Bottom Right</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="tl">
      <yc-button>Top Left</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="top">
      <yc-button>Top</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown position="tr">
      <yc-button>Top Right</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
  </yc-space>
</template>
```

</details>
