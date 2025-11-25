### 透明底色

默认是没有底色的，如果有需要可以通过style或类名设置不同底色。

<div class="cell-demo vp-raw">
  <div
    :style="{
      backgroundImage:
        'radial-gradient(var(--color-fill-3) 1px, rgba(0, 0, 0, 0) 1px)',
      backgroundSize: '16px 16px',
      padding: '28px',
    }">
    <yc-page-header
      title="ArcoDesign"
      subtitle="ArcoDesign Vue 2.0">
      <template #breadcrumb>
        <yc-breadcrumb>
          <yc-breadcrumb-item>Home</yc-breadcrumb-item>
          <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
          <yc-breadcrumb-item>News</yc-breadcrumb-item>
        </yc-breadcrumb>
      </template>
      <template #extra>
        <yc-radio-group type="button">
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
  <div
    :style="{
      backgroundImage:
        'radial-gradient(var(--color-fill-3) 1px, rgba(0, 0, 0, 0) 1px)',
      backgroundSize: '16px 16px',
      padding: '28px',
    }">
    <yc-page-header
      title="ArcoDesign"
      subtitle="ArcoDesign Vue 2.0">
      <template #breadcrumb>
        <yc-breadcrumb>
          <yc-breadcrumb-item>Home</yc-breadcrumb-item>
          <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
          <yc-breadcrumb-item>News</yc-breadcrumb-item>
        </yc-breadcrumb>
      </template>
      <template #extra>
        <yc-radio-group type="button">
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
