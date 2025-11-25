### 大小和形状

通过设置 `size` 字段，可以调节头像的大小，默认大小为 `40px`。设置 `shape` 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。

<div class="cell-demo vp-raw">
  <yc-space size="large" direction="vertical">
    <yc-space size="large">
      <yc-avatar :size="64">Arco</yc-avatar>
      <yc-avatar :size="40">Arco</yc-avatar>
      <yc-avatar :size="32">Arco</yc-avatar>
      <yc-avatar :size="24">Arco</yc-avatar>
    </yc-space>
    <yc-space size="large">
      <yc-avatar :size="64" shape="square">Arco</yc-avatar>
      <yc-avatar :size="40" shape="square">Arco</yc-avatar>
      <yc-avatar :size="32" shape="square">Arco</yc-avatar>
      <yc-avatar :size="24" shape="square">Arco</yc-avatar>
    </yc-space>
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
    size="large"
    direction="vertical">
    <yc-space size="large">
      <yc-avatar :size="64">Arco</yc-avatar>
      <yc-avatar :size="40">Arco</yc-avatar>
      <yc-avatar :size="32">Arco</yc-avatar>
      <yc-avatar :size="24">Arco</yc-avatar>
    </yc-space>
    <yc-space size="large">
      <yc-avatar
        :size="64"
        shape="square"
        >Arco</yc-avatar
      >
      <yc-avatar
        :size="40"
        shape="square"
        >Arco</yc-avatar
      >
      <yc-avatar
        :size="32"
        shape="square"
        >Arco</yc-avatar
      >
      <yc-avatar
        :size="24"
        shape="square"
        >Arco</yc-avatar
      >
    </yc-space>
  </yc-space>
</template>
```

</details>
