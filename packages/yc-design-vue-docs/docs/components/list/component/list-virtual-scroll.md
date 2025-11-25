### 无限长列表

通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。

<div class="cell-demo vp-raw">
  <h3 :style="{ color: 'var(--color-text-2)' }">10000 items</h3>
  <yc-list
    :maxHeight="560"
    :virtualListProps="{
      estimateSize: 103,
      count: ()=> list.length,
    }"
    :data="list">
    <template #item="{ item, index }">
      <yc-list-item :key="index">
        <yc-list-item-meta
          :title="item.title"
          :description="item.description">
          <template #avatar>
            <yc-avatar shape="square"> A </yc-avatar>
          </template>
        </yc-list-item-meta>
      </yc-list-item>
    </template>
  </yc-list>
</div>

<script setup>
import { reactive } from 'vue';
const list = reactive(
  Array(10000)
    .fill(null)
    .map((_, index) => {
      const prefix = `0000${index}`.slice(-5);
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      };
    })
);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <h3 :style="{ color: 'var(--color-text-2)' }">10000 items</h3>
  <yc-list
    :maxHeight="560"
    :virtualListProps="{
      estimateSize: 103,
      count: () => list.length,
    }"
    :data="list">
    <template #item="{ item, index }">
      <yc-list-item :key="index">
        <yc-list-item-meta
          :title="item.title"
          :description="item.description">
          <template #avatar>
            <yc-avatar shape="square"> A </yc-avatar>
          </template>
        </yc-list-item-meta>
      </yc-list-item>
    </template>
  </yc-list>
</template>

<script setup>
import { reactive } from 'vue';
const list = reactive(
  Array(10000)
    .fill(null)
    .map((_, index) => {
      const prefix = `0000${index}`.slice(-5);
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      };
    })
);
</script>
```

</details>
