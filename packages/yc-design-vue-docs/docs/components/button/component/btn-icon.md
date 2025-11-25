### 图标按钮

按钮可以嵌入图标。在只设置图标时，按钮的宽高相等。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button type="primary">
      <template #icon>
        <icon-plus />
      </template>
    </yc-button>
    <yc-button type="primary">
      <template #icon>
        <icon-delete />
      </template>
      <template #default>Delete</template>
    </yc-button>
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
  <yc-space>
    <yc-button type="primary">
      <template #icon>
        <icon-plus />
      </template>
    </yc-button>
    <yc-button type="primary">
      <template #icon>
        <icon-delete />
      </template>
      <!-- Use the default slot to avoid extra spaces -->
      <template #default>Delete</template>
    </yc-button>
  </yc-space>
</template>
```

</details>
