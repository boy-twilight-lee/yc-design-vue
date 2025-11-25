### 按钮模式

指定 `mode` 为 `button` 来使用带按钮的数字输入框。

<div class="cell-demo vp-raw">
   <yc-input-number
    :style="{ width: '320px' }"
    placeholder="Please Enter"
    :default-value="500"
    mode="button"
    class="input-demo" />
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-input-number
    :style="{ width: '320px' }"
    placeholder="Please Enter"
    :default-value="500"
    mode="button"
    class="input-demo" />
</template>
```

</details>
