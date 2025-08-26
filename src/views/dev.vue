<template>
  <div class="test">
    <yc-row align="center" :style="{ marginBottom: '24px' }">
      <yc-checkbox
        :checked="!!pendingProps.direction"
        @change="(v) => onChange({ direction: v ? 'horizontal' : 'vertical' })"
      >
        horizontal &nbsp; &nbsp;
      </yc-checkbox>
      <yc-checkbox
        :checked="!!pendingProps.reverse"
        @change="(v) => onChange({ reverse: v })"
      >
        reverse &nbsp; &nbsp;
      </yc-checkbox>
      <yc-checkbox
        :checked="!!pendingProps.pending"
        @change="
          (v) => onChange({ pending: v ? 'This is a pending dot' : false })
        "
      >
        pending &nbsp; &nbsp;
      </yc-checkbox>

      <yc-checkbox
        :checked="!!pendingProps.hasPendingDot"
        @change="(v) => onChange({ hasPendingDot: v })"
      >
        custom pendingDot
      </yc-checkbox>
    </yc-row>
    <yc-timeline v-bind="pendingProps">
      <template v-if="pendingProps.hasPendingDot" #dot>
        <IconFire :style="{ color: '#e70a0a' }" />
      </template>
      <yc-timeline-item label="2017-03-10" dotColor="#52C419">
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item label="2018-05-12" dotColor="#F5222D">
        The second milestone
      </yc-timeline-item>
      <yc-timeline-item label="2020-09-30"
        >The third milestone</yc-timeline-item
      >
    </yc-timeline>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const pendingProps = ref({});
const onChange = (newProps) => {
  pendingProps.value = {
    ...pendingProps.value,
    ...newProps,
  };
};
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.grid-demo {
  .yc-col,
  .arco-col {
    height: 48px;
    line-height: 48px;
    color: var(--color-white);
    text-align: center;
    &:nth-child(2n + 1) {
      background-color: var(--color-primary-light-4);
    }
    &:nth-child(2n) {
      background-color: rgba(22, 93, 255, 0.9);
    }
  }
}
</style>
