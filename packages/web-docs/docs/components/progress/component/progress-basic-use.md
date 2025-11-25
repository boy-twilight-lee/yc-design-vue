### 基本用法

简单的进度条。

<div class="cell-demo vp-raw">
  <yc-progress
    :percent="0.2"
    :style="{ width: '50%' }" />
  <br />
  <br />
  <yc-progress
    :percent="0.3"
    :style="{ width: '50%' }">
    <template v-slot:text="scope"> 进度 {{ scope.percent * 100 }}% </template>
  </yc-progress>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-progress
    :percent="0.2"
    :style="{ width: '50%' }" />
  <br />
  <br />
  <yc-progress
    :percent="0.3"
    :style="{ width: '50%' }">
    <template v-slot:text="scope"> 进度 {{ scope.percent * 100 }}% </template>
  </yc-progress>
</template>
```

</details>
