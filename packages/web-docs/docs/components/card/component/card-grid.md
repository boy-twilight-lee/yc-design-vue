### 栅格卡片

在系统概览页面常常和栅格进行配合。

<div class="cell-demo vp-raw">
  <div
    :style="{
      boxSizing: 'border-box',
      width: '100%',
      padding: '40px',
      backgroundColor: 'var(--color-fill-2)',
    }"
  >
    <yc-row :gutter="20" :style="{ marginBottom: '20px' }">
      <yc-col :span="8">
        <yc-card title="Arco Card" :bordered="false" :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
      <yc-col :span="8">
        <yc-card title="Arco Card" :bordered="false" :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
      <yc-col :span="8">
        <yc-card title="Arco Card" :bordered="false" :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
    </yc-row>
    <yc-row :gutter="20">
      <yc-col :span="16">
        <yc-card title="Arco Card" :bordered="false" :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
      <yc-col :span="8">
        <yc-card title="Arco Card" :bordered="false" :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
    </yc-row>
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
      boxSizing: 'border-box',
      width: '100%',
      padding: '40px',
      backgroundColor: 'var(--color-fill-2)',
    }">
    <yc-row
      :gutter="20"
      :style="{ marginBottom: '20px' }">
      <yc-col :span="8">
        <yc-card
          title="Arco Card"
          :bordered="false"
          :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
      <yc-col :span="8">
        <yc-card
          title="Arco Card"
          :bordered="false"
          :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
      <yc-col :span="8">
        <yc-card
          title="Arco Card"
          :bordered="false"
          :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
    </yc-row>
    <yc-row :gutter="20">
      <yc-col :span="16">
        <yc-card
          title="Arco Card"
          :bordered="false"
          :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
      <yc-col :span="8">
        <yc-card
          title="Arco Card"
          :bordered="false"
          :style="{ width: '100%' }">
          <template #extra>
            <yc-link>More</yc-link>
          </template>
          Card content
        </yc-card>
      </yc-col>
    </yc-row>
  </div>
</template>
```

</details>
