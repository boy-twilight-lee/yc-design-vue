### 自定义图标

自定义开关按钮上显示的图标。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-switch>
      <template #checked-icon>
        <icon-check />
      </template>
      <template #unchecked-icon>
        <icon-close />
      </template>
    </yc-switch>
    <yc-switch type="round">
      <template #checked-icon>
        <icon-check />
      </template>
      <template #unchecked-icon>
        <icon-close />
      </template>
    </yc-switch>
    <yc-switch type="line">
      <template #checked-icon>
        <icon-check />
      </template>
      <template #unchecked-icon>
        <icon-close />
      </template>
    </yc-switch>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space size="large">
    <yc-switch>
      <template #checked-icon>
        <icon-check />
      </template>
      <template #unchecked-icon>
        <icon-close />
      </template>
    </yc-switch>
    <yc-switch type="round">
      <template #checked-icon>
        <icon-check />
      </template>
      <template #unchecked-icon>
        <icon-close />
      </template>
    </yc-switch>
    <yc-switch type="line">
      <template #checked-icon>
        <icon-check />
      </template>
      <template #unchecked-icon>
        <icon-close />
      </template>
    </yc-switch>
  </yc-space>
</template>
```

</details>
