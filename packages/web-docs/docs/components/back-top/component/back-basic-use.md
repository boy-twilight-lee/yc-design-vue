### 交互按钮

当容器滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮。

<div class="cell-demo vp-raw">
  <div class="wrapper">
    <ul id="basic-demo" ref="listRef">
      <li
        v-for="(_, index) of Array(40)"
        :key="index">
        This is the content
      </li>
    </ul>
    <yc-back-top
      :target-container="listRef"
      :style="{ position: 'absolute' }" />
  </div>
</div>

<script lang="ts" setup>
import { ref } from 'vue';
const listRef = ref()
</script>

<style scoped lang="less">
.wrapper {
  position: relative;

  ul {
    height: 200px;
    overflow-y: auto;

    li {
      line-height: 30px;
    }
  }
}
</style>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div class="wrapper">
    <ul id="basic-demo">
      <li
        v-for="(_, index) of Array(40)"
        :key="index">
        This is the content
      </li>
    </ul>
    <yc-back-top
      target-container="#basic-demo"
      :style="{ position: 'absolute' }" />
  </div>
</template>

<style scoped lang="less">
.wrapper {
  position: relative;

  ul {
    height: 200px;
    overflow-y: auto;

    li {
      line-height: 30px;
    }
  }
}
</style>
```

</details>
