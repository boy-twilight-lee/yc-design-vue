### 底部固定

当页面滚动或浏览器窗口改变时，元素向下滚动到距底部一定距离时固定。

<div class="cell-demo vp-raw">
  <yc-affix
    :offset-bttom="120"
    style="z-index:1001"
 >
    <yc-button type="primary">120px to affix bottom</yc-button>
  </yc-affix>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-affix :offset-bttom="120">
    <yc-button type="primary">120px to affix bottom</yc-button>
  </yc-affix>
</template>
```

</details>
