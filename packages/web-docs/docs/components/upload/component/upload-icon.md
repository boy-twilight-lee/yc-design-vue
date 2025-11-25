### 自定义图标

自定义图标

<div class="cell-demo vp-raw">
  <div>
    <div style="margin-bottom: 20px;">
      <yc-space>
        <span>Type: </span>
        <yc-radio-group v-model="type">
          <yc-radio value="text">text</yc-radio>
          <yc-radio value="picture">picture</yc-radio>
          <yc-radio value="picture-card">picture-card</yc-radio>
        </yc-radio-group>
      </yc-space>
    </div>
    <yc-upload
      action="/"
      :list-type="type"
      :default-file-list="[
        {
          uid: '-1',
          name: 'ice.png',
          url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          uid: '-3',
          name: 'light.png',
          url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
      ]"
      :custom-icon="getCustomIcon()" />
  </div>
</div>

<script setup>
import { h, ref } from 'vue';
import {
  IconUpload,
  IconFileAudio,
  IconClose,
  IconFaceFrownFill,
} from '@arco-design/web-vue/es/icon';
const type = ref('text');
const getCustomIcon = () => {
  return {
    retryIcon: () => h(IconUpload),
    cancelIcon: () => h(IconClose),
    fileIcon: () => h(IconFileAudio),
    removeIcon: () => h(IconClose),
    errorIcon: () => h(IconFaceFrownFill),
    fileName: (file) => {
      return `文件名： ${file.name}`;
    },
  };
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
  <div>
    <div style="margin-bottom: 20px;">
      <yc-space>
        <span>Type: </span>
        <yc-radio-group v-model="type">
          <yc-radio value="text">text</yc-radio>
          <yc-radio value="picture">picture</yc-radio>
          <yc-radio value="picture-card">picture-card</yc-radio>
        </yc-radio-group>
      </yc-space>
    </div>
    <yc-upload
      action="/"
      :list-type="type"
      :default-file-list="[
        {
          uid: '-1',
          name: 'ice.png',
          url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          uid: '-3',
          name: 'light.png',
          url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
      ]"
      :custom-icon="getCustomIcon()" />
  </div>
</template>

<script setup>
import { h, ref } from 'vue';
import {
  IconUpload,
  IconFileAudio,
  IconClose,
  IconFaceFrownFill,
} from '@arco-design/web-vue/es/icon';
const type = ref('text');
const getCustomIcon = () => {
  return {
    retryIcon: () => h(IconUpload),
    cancelIcon: () => h(IconClose),
    fileIcon: () => h(IconFileAudio),
    removeIcon: () => h(IconClose),
    errorIcon: () => h(IconFaceFrownFill),
    fileName: (file) => {
      return `文件名： ${file.name}`;
    },
  };
};
</script>
```

</details>
