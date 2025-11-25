### 前置、后置标签

通过指定 `prepend` 和 `append` 插槽在输入框前后添加元素。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear>
      <template #prepend> +86 </template>
    </yc-input>
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear>
      <template #append> RMB </template>
    </yc-input>

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
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear>
      <template #prepend> +86 </template>
    </yc-input>
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear>
      <template #append> RMB </template>
    </yc-input>

    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear
      prepend="+86">
    </yc-input>
    <yc-input
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear
      append="RMB">
    </yc-input>
  </yc-space>
</template>
```

</details>
