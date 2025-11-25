### 最多展示标签数量

设置最多展示标签数量。

<div class="cell-demo vp-raw">
  <yc-input-tag
    :default-value="['one', 'two', 'three', 'four']"
    :style="{ width: '380px' }"
    placeholder="Please Enter"
    :max-tag-count="3"
    allow-clear />
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-input-tag
    :default-value="['one', 'two', 'three', 'four']"
    :style="{ width: '380px' }"
    placeholder="Please Enter"
    :max-tag-count="3"
    allow-clear />
</template>
```

</details>
