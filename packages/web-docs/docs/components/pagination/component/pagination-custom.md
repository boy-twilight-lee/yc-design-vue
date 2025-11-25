### 自定义分页按钮

可以通过插槽自定义分页按钮内容

<div class="cell-demo vp-raw">
  <yc-pagination :total="200">
    <template #page-item="{ page }"> - {{ page }} - </template>
    <template #page-item-step="{ type }">
      <icon-send
        :style="
          type === 'previous' ? { transform: `rotate(180deg)` } : undefined
        " />
    </template>
    <template #page-item-ellipsis>
      <icon-sun-fill />
    </template>
  </yc-pagination>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-pagination :total="200">
    <template #page-item="{ page }"> - {{ page }} - </template>
    <template #page-item-step="{ type }">
      <icon-send
        :style="
          type === 'previous' ? { transform: `rotate(180deg)` } : undefined
        " />
    </template>
    <template #page-item-ellipsis>
      <icon-sun-fill />
    </template>
  </yc-pagination>
</template>
```

</details>
