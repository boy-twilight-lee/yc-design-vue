### 幽灵节点

当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，通过 `slot#pending-dot` 定制其轴点。

<div class="cell-demo vp-raw">
  <yc-row
    align="center"
    :style="{ marginBottom: '24px' }">
    <yc-checkbox
      :checked="!!pendingProps.direction"
      @change="(v) => onChange({ direction: v ? 'horizontal' : 'vertical' })">
      horizontal &nbsp; &nbsp;
    </yc-checkbox>
    <yc-checkbox
      :checked="!!pendingProps.reverse"
      @change="(v) => onChange({ reverse: v })">
      reverse &nbsp; &nbsp;
    </yc-checkbox>
    <yc-checkbox
      :checked="!!pendingProps.pending"
      @change="
        (v) => onChange({ pending: v ? 'This is a pending dot' : false })
      ">
      pending &nbsp; &nbsp;
    </yc-checkbox>
    <yc-checkbox
      :checked="!!pendingProps.hasPendingDot"
      @change="(v) => onChange({ hasPendingDot: v })">
      custom pendingDot
    </yc-checkbox>
  </yc-row>
  <yc-timeline v-bind="pendingProps">
    <template
      v-if="pendingProps.hasPendingDot"
      #dot>
      <IconFire :style="{ color: '#e70a0a' }" />
    </template>
    <yc-timeline-item
      label="2017-03-10"
      dotColor="#52C419">
      The first milestone
    </yc-timeline-item>
    <yc-timeline-item
      label="2018-05-12"
      dotColor="#F5222D">
      The second milestone
    </yc-timeline-item>
    <yc-timeline-item label="2020-09-30">The third milestone</yc-timeline-item>
  </yc-timeline>
</div>

<script setup>
import { ref } from 'vue';
const pendingProps = ref({});
const onChange = (newProps) => {
  pendingProps.value = {
    ...pendingProps.value,
    ...newProps,
  };
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
  <yc-row
    align="center"
    :style="{ marginBottom: '24px' }">
    <yc-checkbox
      :checked="!!pendingProps.direction"
      @change="(v) => onChange({ direction: v ? 'horizontal' : 'vertical' })">
      horizontal &nbsp; &nbsp;
    </yc-checkbox>
    <yc-checkbox
      :checked="!!pendingProps.reverse"
      @change="(v) => onChange({ reverse: v })">
      reverse &nbsp; &nbsp;
    </yc-checkbox>
    <yc-checkbox
      :checked="!!pendingProps.pending"
      @change="
        (v) => onChange({ pending: v ? 'This is a pending dot' : false })
      ">
      pending &nbsp; &nbsp;
    </yc-checkbox>

    <yc-checkbox
      :checked="!!pendingProps.hasPendingDot"
      @change="(v) => onChange({ hasPendingDot: v })">
      custom pendingDot
    </yc-checkbox>
  </yc-row>
  <yc-timeline v-bind="pendingProps">
    <template
      v-if="pendingProps.hasPendingDot"
      #dot>
      <IconFire :style="{ color: '#e70a0a' }" />
    </template>
    <yc-timeline-item
      label="2017-03-10"
      dotColor="#52C419">
      The first milestone
    </yc-timeline-item>
    <yc-timeline-item
      label="2018-05-12"
      dotColor="#F5222D">
      The second milestone
    </yc-timeline-item>
    <yc-timeline-item label="2020-09-30">The third milestone</yc-timeline-item>
  </yc-timeline>
</template>

<script setup>
import { ref } from 'vue';
const pendingProps = ref({});
const onChange = (newProps) => {
  pendingProps.value = {
    ...pendingProps.value,
    ...newProps,
  };
};
</script>
```

</details>
