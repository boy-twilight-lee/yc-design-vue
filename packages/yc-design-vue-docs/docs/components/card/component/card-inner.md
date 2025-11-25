### 内部卡片

卡片中可以嵌套其他卡片组件。

<div class="cell-demo vp-raw">
  <yc-card title="Arco Card">
    <yc-card :style="{ marginBottom: '20px' }" title="Inner Card Title">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Inner Card Content
    </yc-card>
    <yc-card title="Inner Card Title">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Inner Card Content
    </yc-card>
  </yc-card>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-card title="Arco Card">
    <yc-card
      :style="{ marginBottom: '20px' }"
      title="Inner Card Title">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Inner Card Content
    </yc-card>
    <yc-card title="Inner Card Title">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Inner Card Content
    </yc-card>
  </yc-card>
</template>
```

</details>
