### 无边框卡片

设置 `bordered` 为 `false` 来使用无边框卡片。

<div class="cell-demo vp-raw">
  <div
    :style="{
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px',
      backgroundColor: 'var(--color-fill-2)',
    }"
  >
    <yc-card :style="{ width: '360px' }" title="Arco Card" :bordered="false">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content
      <br />
      Card content
    </yc-card>
    <yc-card
      :style="{ width: '360px', marginLeft: '24px' }"
      title="Hover me"
      hoverable
      :bordered="false"
    >
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content
      <br />
      Card content
    </yc-card>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div
    :style="{
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px',
      backgroundColor: 'var(--color-fill-2)',
    }">
    <yc-card
      :style="{ width: '360px' }"
      title="Arco Card"
      :bordered="false">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content
      <br />
      Card content
    </yc-card>
    <yc-card
      :style="{ width: '360px', marginLeft: '24px' }"
      title="Hover me"
      hoverable
      :bordered="false">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      Card content
      <br />
      Card content
    </yc-card>
  </div>
</template>
```

</details>
