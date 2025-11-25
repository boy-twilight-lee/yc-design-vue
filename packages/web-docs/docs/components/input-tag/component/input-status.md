### 输入框状态

输入框有禁用、只读和错误三种状态。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-tag
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      disabled />
    <yc-input-tag
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      readonly />
    <yc-input-tag
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      error />
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-tag
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      disabled />
    <yc-input-tag
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      readonly />
    <yc-input-tag
      :default-value="['test']"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      error />
  </yc-space>
</template>
```

</details>
