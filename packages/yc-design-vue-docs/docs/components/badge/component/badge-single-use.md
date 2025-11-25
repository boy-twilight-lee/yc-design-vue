### 独立使用

`default slot` 为空时，将会独立展示徽标。

<div class="cell-demo vp-raw">
  <yc-space :size="40">
    <yc-badge :count="2" />
    <yc-badge
      :count="2"
      :dotStyle="{ background: '#E5E6EB', color: '#86909C' }"
    />
    <yc-badge :count="16" />
    <yc-badge :count="1000" :max-count="99" />
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
  <yc-space :size="40">
    <yc-badge :count="2" />
    <yc-badge
      :count="2"
      :dotStyle="{ background: '#E5E6EB', color: '#86909C' }" />
    <yc-badge :count="16" />
    <yc-badge
      :count="1000"
      :max-count="99" />
  </yc-space>
</template>
```

</details>
