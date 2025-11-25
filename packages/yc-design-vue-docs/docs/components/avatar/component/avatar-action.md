### 交互按钮

可以通过 `trigger-icon` 与 `trigger-type` 来定制交互按钮，类型有 `mask (遮罩)` 和 `button (按钮)` 两种。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-avatar
      :trigger-icon-style="{ color: '#3491FA' }"
      :auto-fix-font-size="false"
      @click="toast"
      :style="{ backgroundColor: '#168CFF' }"
    >
      A
      <template #trigger-icon>
        <IconCamera />
      </template>
    </yc-avatar>
    <yc-avatar @click="toast" :style="{ backgroundColor: '#14C9C9' }">
      <IconUser />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </yc-avatar>
    <yc-avatar
      @click="toast"
      shape="square"
      :style="{ backgroundColor: '#FFC72E' }"
    >
      <IconUser />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </yc-avatar>
    <yc-avatar trigger-type="mask">
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </yc-avatar>
  </yc-space>
</div>

<script setup>
import { Message } from 'yc-design-vue';
const toast = () => {
  Message.info('Uploading...');
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
  <yc-space size="large">
    <yc-avatar
      :trigger-icon-style="{ color: '#3491FA' }"
      :auto-fix-font-size="false"
      @click="toast"
      :style="{ backgroundColor: '#168CFF' }">
      A
      <template #trigger-icon>
        <IconCamera />
      </template>
    </yc-avatar>
    <yc-avatar
      @click="toast"
      :style="{ backgroundColor: '#14C9C9' }">
      <IconUser />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </yc-avatar>
    <yc-avatar
      @click="toast"
      shape="square"
      :style="{ backgroundColor: '#FFC72E' }">
      <IconUser />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </yc-avatar>
    <yc-avatar trigger-type="mask">
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </yc-avatar>
  </yc-space>
</template>

<script setup>
import { Message } from 'yc-design-vue';
const toast = () => {
  Message.info('Uploading...');
};
</script>
```

</details>
