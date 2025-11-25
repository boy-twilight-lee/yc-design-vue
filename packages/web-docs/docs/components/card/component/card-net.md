### 网络型内嵌卡片

通过 `Card.Grid` 来使用卡片内容区隔模式。

<div class="cell-demo vp-raw">
  <yc-card :bordered="false" :style="{ width: '100%' }">
    <yc-card-grid
      v-for="(_, index) in new Array(7)"
      :key="index"
      :hoverable="index % 2 === 0"
      :style="{ width: '25%' }"
    >
      <yc-card
        class="card-demo"
        title="Arco Card"
        :bordered="false"
      >
        <template #extra>
          <yc-link>More</yc-link>
        </template>
        <p :style="{ margin: 0 }">
          {{ index % 2 === 0 ? 'Card allow to hover' : 'Card content' }}
        </p>
      </yc-card>
    </yc-card-grid>
  </yc-card>
</div>

<style scoped>
.card-demo {
  width: 100%;
}
.card-demo :deep(.yc-card-header) {
  border: none;
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
  <yc-card
    :bordered="false"
    :style="{ width: '100%' }">
    <yc-card-grid
      v-for="(_, index) in new Array(7)"
      :key="index"
      :hoverable="index % 2 === 0"
      :style="{ width: '25%' }">
      <yc-card
        class="card-demo"
        title="Arco Card"
        :bordered="false">
        <template #extra>
          <yc-link>More</yc-link>
        </template>
        <p :style="{ margin: 0 }">
          {{ index % 2 === 0 ? 'Card allow to hover' : 'Card content' }}
        </p>
      </yc-card>
    </yc-card-grid>
  </yc-card>
</template>

<style scoped>
.card-demo {
  width: 100%;
}
.card-demo :deep(.yc-card-header) {
  border: none;
}
</style>
```

</details>
