### 只使用面板

只用选择面板，不显示输入框。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-space>
      <yc-year-picker
        default-value="2019-06-03"
        hide-trigger />
      <yc-month-picker
        default-value="2019-06-03"
        hide-trigger />
    </yc-space>
    <yc-space>
      <yc-week-picker
        default-value="2019-06-03"
        hide-trigger />
      <yc-date-picker
        default-value="2019-06-03"
        hide-trigger />
    </yc-space>
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
  <yc-space direction="vertical">
    <yc-space>
      <yc-year-picker
        default-value="2019-06-03"
        hide-trigger />
      <yc-month-picker
        default-value="2019-06-03"
        hide-trigger />
    </yc-space>
    <yc-space>
      <yc-week-picker
        default-value="2019-06-03"
        hide-trigger />
      <yc-date-picker
        default-value="2019-06-03"
        hide-trigger />
    </yc-space>
  </yc-space>
</template>
```

</details>
