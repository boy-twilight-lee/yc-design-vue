### 自定义节点

可以通过属性 `dotColor`、`dotType` 设置节点的颜色以及节点类型。同时可通过 `dot` 直接传入 DOM 自定义节点样式。优先级高于 `dotColor` 和 `dotType`

<div class="cell-demo vp-raw">
  <div :style="{ display: 'flex' }">
    <yc-timeline :style="{ marginRight: '40px' }">
      <yc-timeline-item
        label="2020-04-12"
        dotColor="#00B42A">
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-05-17">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-06-22">
        <template #dot>
          <IconClockCircle :style="{ fontSize: '12px', color: '#F53F3F' }" />
        </template>
        The third milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2020-06-22"
        dotColor="var(--color-fill-4)">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>
    <yc-timeline :style="{ marginRight: '40px' }">
      <yc-timeline-item label="2020-04-12">
        <template #dot>
          <IconCheck
            :style="{
              fontSize: '12px',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light-1)',
            }" />
        </template>
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-05-17">
        <template #dot>
          <IconCheck
            :style="{
              fontSize: '12px',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light-1)',
            }" />
        </template>
      </yc-timeline-item>
      <yc-timeline-item label="2020-06-22">The third milestone</yc-timeline-item>
      <yc-timeline-item
        label="2020-06-22"
        dotColor="var(--color-fill-4)">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>
    <yc-timeline>
      <yc-timeline-item label="2020-04-12">The first milestone</yc-timeline-item>
      <yc-timeline-item
        label="2020-05-17"
        dotColor="var(--color-fill-4)">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2020-06-22"
        dotColor="var(--color-fill-4)">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>
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
  <div :style="{ display: 'flex' }">
    <yc-timeline :style="{ marginRight: '40px' }">
      <yc-timeline-item
        label="2020-04-12"
        dotColor="#00B42A">
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-05-17">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-06-22">
        <template #dot>
          <IconClockCircle :style="{ fontSize: '12px', color: '#F53F3F' }" />
        </template>
        The third milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2020-06-22"
        dotColor="var(--color-fill-4)">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>

    <yc-timeline :style="{ marginRight: '40px' }">
      <yc-timeline-item label="2020-04-12">
        <template #dot>
          <IconCheck
            :style="{
              fontSize: '12px',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light-1)',
            }" />
        </template>
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-05-17">
        <template #dot>
          <IconCheck
            :style="{
              fontSize: '12px',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light-1)',
            }" />
        </template>
      </yc-timeline-item>
      <yc-timeline-item label="2020-06-22"
        >The third milestone</yc-timeline-item
      >
      <yc-timeline-item
        label="2020-06-22"
        dotColor="var(--color-fill-4)">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>

    <yc-timeline>
      <yc-timeline-item label="2020-04-12"
        >The first milestone</yc-timeline-item
      >
      <yc-timeline-item
        label="2020-05-17"
        dotColor="var(--color-fill-4)">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2020-06-22"
        dotColor="var(--color-fill-4)">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>
  </div>
</template>
```

</details>
