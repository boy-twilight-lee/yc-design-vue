### 竖直滑动条

设置 `direction="vertical"` ，将会显示竖直的滑动条。

<div class="cell-demo vp-raw">
    <div style="display:flex;gap:20px;height:300px">
    <yc-slider
      :default-value="50"
      direction="vertical" />
    <yc-slider
      direction="vertical"
      :default-value="5"
      :max="15"
      :marks="{
        5: '5km',
        10: '10km',
      }" />
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
  <yc-space align="start">
    <yc-slider
      :default-value="50"
      direction="vertical" />

    <yc-slider
      direction="vertical"
      :default-value="5"
      :style="{ width: '300px' }"
      :max="15"
      :marks="{
        5: '5km',
        10: '10km',
      }" />
  </yc-space>
</template>
```

</details>
