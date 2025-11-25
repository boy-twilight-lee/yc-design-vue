### 小红点

设置 `dot`，即可只显示小红点而不显示数字。`count > 0` 时才显示

<div class="cell-demo vp-raw">
  <yc-space :size="40">
    <yc-badge :count="9" dot :offset="[6, -2]">
      <a href="#">Link</a>
    </yc-badge>
    <yc-badge :count="9" dot :offset="[2, -2]">
      <IconNotification
        :style="{ color: '#888', fontSize: '18px', verticalAlign: '-3px' }"
      />
    </yc-badge>
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
    <yc-badge
      :count="9"
      dot
      :offset="[6, -2]">
      <a href="#">Link</a>
    </yc-badge>
    <yc-badge
      :count="9"
      dot
      :offset="[2, -2]">
      <IconNotification
        :style="{ color: '#888', fontSize: '18px', verticalAlign: '-3px' }" />
    </yc-badge>
  </yc-space>
</template>
```

</details>
