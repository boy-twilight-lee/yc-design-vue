### 面板分割嵌套

面板分割可以嵌套使用。

<div class="cell-demo vp-raw">
  <div>
    <yc-split
      :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)'
      }">
      <template #first>
        <yc-typography-paragraph>Left</yc-typography-paragraph>
      </template>
      <template #second>
        <div>
          <yc-split
            direction="vertical"
            :style="{ height: '200px' }">
            <template #first
              ><yc-typography-paragraph>Top</yc-typography-paragraph></template
            >
            <template #second
              ><yc-typography-paragraph>Bottom</yc-typography-paragraph></template
            >
          </yc-split>
        </div>
      </template>
    </yc-split>

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
  <div>
    <yc-split
      :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)',
      }">
      <template #first>
        <yc-typography-paragraph>Left</yc-typography-paragraph>
      </template>
      <template #second>
        <div>
          <yc-split
            direction="vertical"
            :style="{ height: '200px' }">
            <template #first
              ><yc-typography-paragraph>Top</yc-typography-paragraph></template
            >
            <template #second
              ><yc-typography-paragraph
                >Bottom</yc-typography-paragraph
              ></template
            >
          </yc-split>
        </div>
      </template>
    </yc-split>
  </div>
</template>
```

</details>
