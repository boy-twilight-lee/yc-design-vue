### 区分大小写

使用 `strict` 属性来指明在匹配时严格区分大小写。

<div class="cell-demo vp-raw">
  <yc-auto-complete
    :data="data"
    :style="{ width: '360px' }"
    placeholder="please enter something"
    strict />
</div>

<script setup>
const data = ['Beijing', 'Shanghai', 'Chengdu', 'WuHan'];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-auto-complete
    :data="data"
    :style="{ width: '360px' }"
    placeholder="please enter something"
    strict />
</template>

<script setup>
const data = ['Beijing', 'Shanghai', 'Chengdu', 'WuHan'];
</script>
```

</details>
