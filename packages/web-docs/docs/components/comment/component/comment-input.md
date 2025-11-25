### 回复框

评论框配合回复框使用

<div class="cell-demo vp-raw">
  <yc-comment
    align="right"
    author="Balzac"
    avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
    content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process."
    datetime="1 hour">
    <template #actions>
      <span class="action"> <IconMessage /> Reply </span>
    </template>
    <yc-comment
      align="right"
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp">
      <template #actions>
        <yc-button
          key="0"
          type="secondary">
          Cancel
        </yc-button>
        <yc-button
          key="1"
          type="primary">
          Reply
        </yc-button>
      </template>
      <template #content>
        <yc-input placeholder="Here is you content." />
      </template>
    </yc-comment>
  </yc-comment>
</div>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}
.action:hover {
  background: var(--color-fill-3);
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
  <yc-comment
    align="right"
    author="Balzac"
    avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
    content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process."
    datetime="1 hour">
    <template #actions>
      <span class="action"> <IconMessage /> Reply </span>
    </template>
    <yc-comment
      align="right"
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp">
      <template #actions>
        <yc-button
          key="0"
          type="secondary">
          Cancel
        </yc-button>
        <yc-button
          key="1"
          type="primary">
          Reply
        </yc-button>
      </template>
      <template #content>
        <yc-input placeholder="Here is you content." />
      </template>
    </yc-comment>
  </yc-comment>
</template>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}
.action:hover {
  background: var(--color-fill-3);
}
</style>
```

</details>
