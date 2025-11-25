### 自定义标签

可以通过 `label` 插槽自定义标签

<div class="cell-demo vp-raw">
  <yc-timeline>
    <yc-timeline-item>
      Code Review
      <template #label>
        <yc-tag>
          <template #icon>
            <icon-check-circle-fill />
          </template>
          Passed
        </yc-tag>
      </template>
    </yc-timeline-item>
  </yc-timeline>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-timeline>
    <yc-timeline-item>
      Code Review
      <template #label>
        <yc-tag>
          <template #icon>
            <icon-check-circle-fill />
          </template>
          Passed
        </yc-tag>
      </template>
    </yc-timeline-item>
  </yc-timeline>
</template>
```

</details>
