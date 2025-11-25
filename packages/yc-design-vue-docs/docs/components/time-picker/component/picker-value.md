### 默认值

只有默认值的情况，可通过 `defaultValue` 传递。

<div class="cell-demo vp-raw">
  <yc-time-picker
    defaultValue="18:24:23"
    style="width: 194px; marginRight: 24px; marginBottom: 24px"
  />
  <yc-time-picker
    type="time-range"
    :defaultValue="['09:24:53', '18:44:33']"
    style="width: 252px; marginBottom: 24px"
  />
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-time-picker
    defaultValue="18:24:23"
    style="width: 194px; marginRight: 24px; marginBottom: 24px" />
  <yc-time-picker
    type="time-range"
    :defaultValue="['09:24:53', '18:44:33']"
    style="width: 252px; marginBottom: 24px" />
</template>
```

</details>
