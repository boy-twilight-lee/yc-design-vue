### 列表元素

使用 `list-item-meta` 组件可快速指定头像、标题、文字。

<div class="cell-demo vp-raw">
   <yc-list>
    <yc-list-item
      v-for="idx in 4"
      :key="idx">
      <yc-list-item-meta
        title="Beijing Bytedance Technology Co., Ltd."
        description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.">
        <template #avatar>
          <yc-avatar shape="square">
            <img
              alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </yc-avatar>
        </template>
      </yc-list-item-meta>
    </yc-list-item>
  </yc-list>
</div>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-list>
    <yc-list-item
      v-for="idx in 4"
      :key="idx">
      <yc-list-item-meta
        title="Beijing Bytedance Technology Co., Ltd."
        description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.">
        <template #avatar>
          <yc-avatar shape="square">
            <img
              alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </yc-avatar>
        </template>
      </yc-list-item-meta>
    </yc-list-item>
  </yc-list>
</template>
```

</details>
