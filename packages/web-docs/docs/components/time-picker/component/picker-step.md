### 定制步长

通过设置 `step`，可以定制需要显示的时、分、秒的步长。

<div class="cell-demo vp-raw">
  <yc-time-picker
    defaultValue="10:25:30"
    :step="{
      hour: 2,
      minute: 5,
      second: 10,
    }"
    style="width: 194px;" />
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
    defaultValue="10:25:30"
    :step="{
      hour: 2,
      minute: 5,
      second: 10,
    }"
    style="width: 194px;" />
</template>
```

</details>
