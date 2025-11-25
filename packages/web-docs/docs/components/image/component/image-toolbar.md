### 自定义预览操作栏

通过设置 `actionsLayout` 可以调整预览操作栏中功能按钮的顺序，同时可以过滤功能按钮，只有在 `actionsLayout` 中的按钮才会出现。

<div class="cell-demo vp-raw">
  <yc-image
    width="200"
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    :preview-props="{
      actionsLayout: ['rotateRight', 'zoomIn', 'zoomOut'],
    }">
    <template #preview-actions>
      <yc-image-preview-action
        name="下载"
        @click="download"
        ><icon-download
      /></yc-image-preview-action>
    </template>
  </yc-image>
</div>

<script setup>
const download = () => {
  console.log('点击下载图片');
};
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-image
    width="200"
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    :preview-props="{
      actionsLayout: ['rotateRight', 'zoomIn', 'zoomOut'],
    }">
    <template #preview-actions>
      <yc-image-preview-action
        name="下载"
        @click="download"
        ><icon-download
      /></yc-image-preview-action>
    </template>
  </yc-image>
</template>

<script setup>
const download = () => {
  console.log('点击下载图片');
};
</script>
```

</details>
