### 鼠标悬浮样式

指定 `hoverable` 来为卡片添加鼠标悬浮样式，同时你可以通过样式覆盖来自定义悬浮样式。

<div class="cell-demo vp-raw">
  <div :style="{ display: 'flex' }">
    <yc-card :style="{ width: '360px' }" title="Arco Card" hoverable>
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content <br />
      Card content
    </yc-card>
    <yc-card
      class="card-demo"
      title="Custom hover style"
      hoverable
    >
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content <br />
      Card content
    </yc-card>
  </div>
</div>

<style scoped>
.card-demo {
  width: 360px;
  margin-left: 24px;
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
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
  <div :style="{ display: 'flex' }">
    <yc-card
      :style="{ width: '360px' }"
      title="Arco Card"
      hoverable>
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content <br />
      Card content
    </yc-card>
    <yc-card
      class="card-demo"
      title="Custom hover style"
      hoverable>
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content <br />
      Card content
    </yc-card>
  </div>
</template>

<style scoped>
.card-demo {
  width: 360px;
  margin-left: 24px;
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
}
</style>
```

</details>
