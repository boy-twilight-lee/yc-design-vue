### 基本用法

间距组件的基本用法。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-typography-text>Space:</yc-typography-text>
    <yc-tag v-if="false" color='arcoblue'>Tag</yc-tag>
    <yc-button type="primary">Item1</yc-button>
    <yc-button type="primary">Item2</yc-button>
    <yc-switch defaultChecked />
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
    <yc-typography-text>Space:</yc-typography-text>
    <yc-tag
      v-if="false"
      color="arcoblue">
      Tag
    </yc-tag>
    <yc-button type="primary">Item1</yc-button>
    <yc-button type="primary">Item2</yc-button>
    <yc-switch defaultChecked />
  </yc-space>
</template>
```

</details>
