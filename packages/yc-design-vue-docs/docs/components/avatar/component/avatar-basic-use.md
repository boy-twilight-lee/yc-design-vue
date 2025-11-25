### 基本用法

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-avatar>A</yc-avatar>
    <yc-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </yc-avatar>
    <yc-avatar :style="{ backgroundColor: '#14a9f8' }">Arco</yc-avatar>
    <yc-avatar :style="{ backgroundColor: '#00d0b6' }">Design</yc-avatar>
    <yc-avatar>
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </yc-avatar>
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
  <yc-space size="large">
    <yc-avatar>A</yc-avatar>
    <yc-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </yc-avatar>
    <yc-avatar :style="{ backgroundColor: '#14a9f8' }">Arco</yc-avatar>
    <yc-avatar :style="{ backgroundColor: '#00d0b6' }">Design</yc-avatar>
    <yc-avatar>
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
    </yc-avatar>
  </yc-space>
</template>
```

</details>
