<template>
  <div class="test">
    <div style="width: 800px">
      <div>span</div>
      <yc-row class="grid-demo">
        <yc-col :span="12">
          <div>12 - 50%</div>
        </yc-col>
        <yc-col :span="12">
          <div>12 - 50%</div>
        </yc-col>
      </yc-row>
      <yc-row class="grid-demo">
        <yc-col :span="8">
          <div>8 - 33.33%</div>
        </yc-col>
        <yc-col :span="8">
          <div>8 - 33.33%</div>
        </yc-col>
        <yc-col :span="8">
          <div>8 - 33.33%</div>
        </yc-col>
      </yc-row>
      <div>flex</div>
      <a-row class="grid-demo" style="margin-bottom: 16px">
        <a-col flex="100px">
          <div>100px</div>
        </a-col>
        <a-col flex="auto">
          <div>auto</div>
        </a-col>
      </a-row>
      <a-row class="grid-demo" style="margin-bottom: 16px">
        <a-col flex="100px">
          <div>100px</div>
        </a-col>
        <a-col flex="auto">
          <div>auto</div>
        </a-col>
        <a-col flex="100px">
          <div>100px</div>
        </a-col>
      </a-row>
      <a-row class="grid-demo" style="margin-bottom: 16px">
        <a-col :flex="3">
          <div>3 / 12</div>
        </a-col>
        <a-col :flex="4">
          <div>4 / 12</div>
        </a-col>
        <a-col :flex="5">
          <div>5 / 12</div>
        </a-col>
      </a-row>
      <yc-row class="grid-demo" style="margin-bottom: 16px">
        <yc-col flex="100px">
          <div>100px</div>
        </yc-col>
        <yc-col flex="auto">
          <div>auto</div>
        </yc-col>
      </yc-row>
      <yc-row class="grid-demo" style="margin-bottom: 16px">
        <yc-col flex="100px">
          <div>100px</div>
        </yc-col>
        <yc-col flex="auto">
          <div>auto</div>
        </yc-col>
        <yc-col flex="100px">
          <div>100px</div>
        </yc-col>
      </yc-row>
      <yc-row class="grid-demo" style="margin-bottom: 16px">
        <yc-col :flex="3">
          <div>3 / 12</div>
        </yc-col>
        <yc-col :flex="4">
          <div>4 / 12</div>
        </yc-col>
        <yc-col :flex="5">
          <div>5 / 12</div>
        </yc-col>
      </yc-row>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
