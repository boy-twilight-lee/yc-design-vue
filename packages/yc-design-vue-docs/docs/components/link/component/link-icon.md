### 图标

通过 `icon` 设置带图标的链接，设置为 `true` 时候显示默认图标。

 <div class='cell-demo vp-raw'>
    <yc-space>
      <yc-link href="link" icon>Link</yc-link>
      <yc-link href="link" disabled icon>Link</yc-link>
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
  <div>
    <yc-space>
      <yc-link
        href="link"
        icon
        >Link</yc-link
      >
      <yc-link
        href="link"
        disabled
        icon
        >Link</yc-link
      >
    </yc-space>
  </div>
  <div>
    <yc-space>
      <yc-link href="link">
        <template #icon>
          <icon-edit />
        </template>
        Link
      </yc-link>
      <yc-link
        href="link"
        disabled>
        <template #icon>
          <icon-edit />
        </template>
        Link
      </yc-link>
    </yc-space>
  </div>
</template>
```

</details>
