### 只使用面板

只用颜色选择面板。

<div class="cell-demo vp-raw">
  <yc-space :size="32">
    <yc-color-picker
      defaultValue="#165DFF"
      hideTrigger
      showHistory
      showPreset />
    <yc-color-picker
      defaultValue="#12D2AC"
      disabled
      hideTrigger
      showPreset />
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
  <yc-space :size="32">
    <yc-color-picker
      defaultValue="#165DFF"
      hideTrigger
      showHistory
      showPreset />
    <yc-color-picker
      defaultValue="#12D2AC"
      disabled
      hideTrigger
      showPreset />
  </yc-space>
</template>
```

</details>
