### 自定义轴线样式

自定义轴线的示例。

<div class="cell-demo vp-raw">
  <yc-timeline>
    <yc-timeline-item
      label="2017-03-10"
      lineType="dashed">
      The first milestone
      <br />
      <yc-typography-text
        type="secondary"
        :style="{ fontSize: '12px', marginTop: '4px' }">
        This is a descriptive message
      </yc-typography-text>
    </yc-timeline-item>
    <yc-timeline-item
      label="2018-05-12"
      lineType="dashed">
      The second milestone
      <br />
      <yc-typography-text
        type="secondary"
        :style="{ fontSize: '12px', marginTop: '4px' }">
        This is a descriptive message
      </yc-typography-text>
    </yc-timeline-item>
    <yc-timeline-item
      label="2020-09-30"
      lineType="dashed">
      The third milestone
      <br />
      <yc-typography-text
        type="secondary"
        :style="{ fontSize: '12px', marginTop: '4px' }">
        This is a descriptive message
      </yc-typography-text>
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
      lineType="dashed">
      The first milestone
      <br />
      <yc-typography-text
        type="secondary"
        :style="{ fontSize: '12px', marginTop: '4px' }">
        This is a descriptive message
      </yc-typography-text>
    </yc-timeline-item>
    <yc-timeline-item
      label="2018-05-12"
      lineType="dashed">
      The second milestone
      <br />
      <yc-typography-text
        type="secondary"
        :style="{ fontSize: '12px', marginTop: '4px' }">
        This is a descriptive message
      </yc-typography-text>
    </yc-timeline-item>
    <yc-timeline-item
      label="2020-09-30"
      lineType="dashed">
      The third milestone
      <br />
      <yc-typography-text
        type="secondary"
        :style="{ fontSize: '12px', marginTop: '4px' }">
        This is a descriptive message
      </yc-typography-text>
    </yc-timeline-item>
  </yc-timeline>
</template>
```

</details>
