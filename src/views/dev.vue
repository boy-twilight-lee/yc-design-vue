<template>
  <div class="test">
    <yc-list :gridProps="{ cols: 4 }" :bordered="false">
      <yc-list-item>
        <yc-list>
          <template #header>Platform</template>
          <yc-list-item>iOS</yc-list-item>
          <yc-list-item>Android</yc-list-item>
          <yc-list-item>Web</yc-list-item>
        </yc-list>
      </yc-list-item>
      <yc-list-item>
        <yc-list>
          <template #header>Framework</template>
          <yc-list-item>Angular</yc-list-item>
          <yc-list-item>Vue</yc-list-item>
          <yc-list-item>React</yc-list-item>
        </yc-list>
      </yc-list-item>
      <yc-list-item>
        <yc-list>
          <template #header>Language</template>
          <yc-list-item>C++</yc-list-item>
          <yc-list-item>JavaScript</yc-list-item>
          <yc-list-item>Python</yc-list-item>
        </yc-list>
      </yc-list-item>
      <yc-list-item>
        <yc-list>
          <template #header>Component</template>
          <yc-list-item>Button</yc-list-item>
          <yc-list-item>Breadcrumb</yc-list-item>
          <yc-list-item>Transfer</yc-list-item>
        </yc-list>
      </yc-list-item>
    </yc-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .button {
    width: 100px;
  }
}
</style>
