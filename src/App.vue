<template>
  <div class="test">
    <div style="width: 300px">
      <yc-select>
        <yc-optgroup label="测试">
          <yc-option value="1">1</yc-option>
          <yc-option value="1">2</yc-option>
        </yc-optgroup>
      </yc-select>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  }
}
</style>
