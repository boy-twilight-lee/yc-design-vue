### 照片墙

通过设置 `list-type="picture-card"` 开启照片墙模式。

<div class="cell-demo vp-raw">
  <yc-upload
    list-type="picture-card"
    :default-file-list="fileList"
    image-preview />
</div>

<script setup>
const fileList = [
  {
    uid: '-2',
    name: '20200717-103937.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    uid: '-1',
    name: 'hahhahahahaha.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  },
];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-upload
    list-type="picture-card"
    :default-file-list="fileList"
    image-preview />
</template>

<script setup>
const fileList = [
  {
    uid: '-2',
    name: '20200717-103937.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  },
  {
    uid: '-1',
    name: 'hahhahahahaha.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  },
];
</script>
```

</details>
