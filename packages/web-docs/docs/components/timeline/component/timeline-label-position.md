### 标签文本位置

通过 `labelPosition` 可以设置标签文本的位置。

<div class="cell-demo vp-raw">
  <div>
    <yc-row align="center">
      <yc-typography-text>labelPosition: &nbsp; &nbsp;</yc-typography-text>
      <yc-radio-group
        @change="onLabelPositionChange"
        :modelValue="pos">
        <yc-radio value="same">same</yc-radio>
        <yc-radio value="relative">relative</yc-radio>
      </yc-radio-group>
    </yc-row>
    <yc-row
      align="center"
      :style="{ margin: '20px 0px 24px' }">
      <yc-typography-text>mode: &nbsp; &nbsp;</yc-typography-text>
      <yc-radio-group
        @change="onModeChange"
        :modelValue="mode">
        <yc-radio value="left">left</yc-radio>
        <yc-radio value="right">right</yc-radio>
        <yc-radio value="alternate">alternate</yc-radio>
      </yc-radio-group>
    </yc-row>
    <yc-timeline
      :mode="mode"
      :labelPosition="pos">
      <yc-timeline-item
        label="2017-03-10"
        dotColor="#52C419">
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2018-05-12"
        dotColor="#F5222D"
        labelPosition="same">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2020-09-30"
        position="bottom">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const mode = ref('left');
const pos = ref('same');
const onLabelPositionChange = (_pos) => {
  pos.value = _pos;
};
const onModeChange = (_mode) => {
  mode.value = _mode;
};
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-row align="center">
      <yc-typography-text>labelPosition: &nbsp; &nbsp;</yc-typography-text>
      <yc-radio-group
        @change="onLabelPositionChange"
        :modelValue="pos">
        <yc-radio value="same">same</yc-radio>
        <yc-radio value="relative">relative</yc-radio>
      </yc-radio-group>
    </yc-row>
    <yc-row
      align="center"
      :style="{ margin: '20px 0px 24px' }">
      <yc-typography-text>mode: &nbsp; &nbsp;</yc-typography-text>
      <yc-radio-group
        @change="onModeChange"
        :modelValue="mode">
        <yc-radio value="left">left</yc-radio>
        <yc-radio value="right">right</yc-radio>
        <yc-radio value="alternate">alternate</yc-radio>
      </yc-radio-group>
    </yc-row>
    <yc-timeline
      :mode="mode"
      :labelPosition="pos">
      <yc-timeline-item
        label="2017-03-10"
        dotColor="#52C419">
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2018-05-12"
        dotColor="#F5222D"
        labelPosition="same">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item
        label="2020-09-30"
        position="bottom">
        The third milestone
      </yc-timeline-item>
    </yc-timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mode = ref('left');
const pos = ref('same');
const onLabelPositionChange = (_pos) => {
  pos.value = _pos;
};
const onModeChange = (_mode) => {
  mode.value = _mode;
};
</script>
```

</details>
