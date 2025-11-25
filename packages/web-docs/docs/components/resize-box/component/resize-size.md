### 受控的高宽

`ResizeBox` 的 `width` 和 `height` 都支持 `v-model`。

<div class="cell-demo vp-raw">
  <div>
    <yc-resize-box
      :directions="['right', 'bottom']"
      :style="{ minWidth: '100px', maxWidth: '100%', textAlign: 'center' }"
      v-model:width="width"
      v-model:height="height">
      <yc-typography-paragraph
        >We are building the future of content discovery and
        creation.</yc-typography-paragraph
      >
      <yc-divider />
      <yc-typography-paragraph>
        ByteDance's content platforms enable people to enjoy content powered by
        AI technology. We inform, entertain, and inspire people across language,
        culture and geography.
      </yc-typography-paragraph>
      <yc-divider>ByteDance</yc-divider>
      <yc-typography-paragraph
        >Yiming Zhang is the founder and CEO of
        ByteDance.</yc-typography-paragraph
      >
    </yc-resize-box>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const width = ref(500);
const height = ref(200);
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
    <yc-resize-box
      :directions="['right', 'bottom']"
      :style="{ minWidth: '100px', maxWidth: '100%', textAlign: 'center' }"
      v-model:width="width"
      v-model:height="height">
      <yc-typography-paragraph
        >We are building the future of content discovery and
        creation.</yc-typography-paragraph
      >
      <yc-divider />
      <yc-typography-paragraph>
        ByteDance's content platforms enable people to enjoy content powered by
        AI technology. We inform, entertain, and inspire people across language,
        culture and geography.
      </yc-typography-paragraph>
      <yc-divider>ByteDance</yc-divider>
      <yc-typography-paragraph
        >Yiming Zhang is the founder and CEO of
        ByteDance.</yc-typography-paragraph
      >
    </yc-resize-box>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const width = ref(500);
const height = ref(200);
</script>
```

</details>
