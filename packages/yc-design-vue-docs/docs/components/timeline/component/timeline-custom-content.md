### 自定义节点内容

自定义节点内容

<div class="cell-demo vp-raw">
  <yc-timeline>
    <yc-timeline-item
      label="2017-03-10"
      dotColor="#00B42A">
      The first milestone
    </yc-timeline-item>
    <yc-timeline-item label="2018-05-22">The second milestone</yc-timeline-item>
    <yc-timeline-item
      label="2020-06-22"
      dotColor="#F53F3F">
      The third milestone
      <IconExclamationCircleFill
        :style="{ color: 'F53F3F', fontSize: '12px', marginLeft: '4px' }" />
    </yc-timeline-item>
    <yc-timeline-item
      label="2020-09-30"
      dotColor="#C9CDD4">
      The fourth milestone
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
    <yc-timeline-item
      label="2017-03-10"
      dotColor="#00B42A">
      The first milestone
    </yc-timeline-item>
    <yc-timeline-item label="2018-05-22">The second milestone</yc-timeline-item>
    <yc-timeline-item
      label="2020-06-22"
      dotColor="#F53F3F">
      The third milestone
      <IconExclamationCircleFill
        :style="{ color: 'F53F3F', fontSize: '12px', marginLeft: '4px' }" />
    </yc-timeline-item>
    <yc-timeline-item
      label="2020-09-30"
      dotColor="#C9CDD4">
      The fourth milestone
    </yc-timeline-item>
  </yc-timeline>
</template>
```

</details>
