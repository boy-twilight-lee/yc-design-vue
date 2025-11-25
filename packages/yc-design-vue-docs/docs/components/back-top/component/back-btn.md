### 自定义按钮

可以自定义返回按钮。

<div class="cell-demo vp-raw">
  <div class="wrapper">
    <ul id="custom-demo" ref="listRef">
      <li
        v-for="(_, index) of Array(40)"
        :key="index">
        This is the content
      </li>
    </ul>
    <yc-back-top
      :target-container="listRef"
      :style="{ position: 'absolute' }">
      <yc-button>UP</yc-button>
    </yc-back-top>
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
    <ul id="custom-demo">
      <li
        v-for="(_, index) of Array(40)"
        :key="index">
        This is the content
      </li>
    </ul>
    <yc-back-top :style="{ position: 'absolute' }">
      <yc-button>UP</yc-button>
    </yc-back-top>
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
