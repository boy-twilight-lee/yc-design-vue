<template>
  <div class="test">
    <div class="menu-demo">
      <yc-menu mode="horizontal" default-selected-keys="1">
        <yc-menu-item
          path="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div
            :style="{
              width: '80px',
              height: '30px',
              borderRadius: '2px',
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }"
          />
        </yc-menu-item>
        <yc-menu-item path="1">Home</yc-menu-item>
        <yc-menu-item path="2">Solution</yc-menu-item>
        <yc-menu-item path="3">Cloud Service</yc-menu-item>
        <yc-menu-item path="4">Cooperation</yc-menu-item>
      </yc-menu>
    </div>
    <div class="menu-demo">
      <a-menu mode="horizontal" default-selected-keys="1">
        <a-menu-item
          path="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div
            :style="{
              width: '80px',
              height: '30px',
              borderRadius: '2px',
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }"
          />
        </a-menu-item>
        <a-menu-item path="1">Home</a-menu-item>
        <a-menu-item path="2">Solution</a-menu-item>
        <a-menu-item path="3">Cloud Service</a-menu-item>
        <a-menu-item path="4">Cooperation</a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
</script>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
  .test {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .menu-demo {
      box-sizing: border-box;
      width: 100%;
      padding: 40px;
      background-color: var(--color-neutral-2);
    }
  }
}
</style>
