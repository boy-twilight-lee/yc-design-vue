### 自定义状态

自定义状态。需要传入指定的图标

<div class="cell-demo vp-raw">
   <yc-result
    :status="null"
    title="This is title content"
    subtitle="This is subtitle content">
    <template #icon>
      <IconFaceSmileFill />
    </template>
    <template #extra>
      <yc-space>
        <yc-button type="secondary">Again</yc-button>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-result
    :status="null"
    title="This is title content"
    subtitle="This is subtitle content">
    <template #icon>
      <IconFaceSmileFill />
    </template>
    <template #extra>
      <yc-space>
        <yc-button type="secondary">Again</yc-button>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>
```

</details>
