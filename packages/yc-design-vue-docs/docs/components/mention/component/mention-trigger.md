### 自定义触发字符

指定 `prefix` 来自定义触发字符。默认为 `@`，可以自定义为任意字符。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    style="width: 100%">
    <yc-mention
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      placeholder="input @" />
    <yc-mention
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      prefix="#"
      placeholder="input #" />
    <yc-mention
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      prefix="$"
      placeholder="input $" />
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
    size="large"
    style="width: 100%">
    <yc-mention
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      placeholder="input @" />
    <yc-mention
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      prefix="#"
      placeholder="input #" />
    <yc-mention
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      prefix="$"
      placeholder="input $" />
  </yc-space>
</template>
```

</details>
