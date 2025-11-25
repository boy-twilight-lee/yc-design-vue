### 带有面包屑

在页头中展示面包屑。

<div class="cell-demo vp-raw">
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <yc-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="ArcoDesign"
      subtitle="ArcoDesign Vue 2.0"
      :show-back="false">
      <template #breadcrumb>
        <yc-breadcrumb>
          <yc-breadcrumb-item>Home</yc-breadcrumb-item>
          <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
          <yc-breadcrumb-item>News</yc-breadcrumb-item>
        </yc-breadcrumb>
      </template>
      <template #extra>
        <yc-radio-group
          type="button"
          default-value="large">
          <yc-radio value="mini">Mini</yc-radio>
          <yc-radio value="small">Small</yc-radio>
          <yc-radio value="large">Large</yc-radio>
        </yc-radio-group>
      </template>
    </yc-page-header>
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
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <yc-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="ArcoDesign"
      subtitle="ArcoDesign Vue 2.0"
      :show-back="false">
      <template #breadcrumb>
        <yc-breadcrumb>
          <yc-breadcrumb-item>Home</yc-breadcrumb-item>
          <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
          <yc-breadcrumb-item>News</yc-breadcrumb-item>
        </yc-breadcrumb>
      </template>
      <template #extra>
        <yc-radio-group
          type="button"
          default-value="large">
          <yc-radio value="mini">Mini</yc-radio>
          <yc-radio value="small">Small</yc-radio>
          <yc-radio value="large">Large</yc-radio>
        </yc-radio-group>
      </template>
    </yc-page-header>
  </div>
</template>
```

</details>
