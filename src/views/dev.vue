<template>
  <div class="test">
    <a-button-group type="primary">
      <a-button>测试</a-button>
      <a-button>测试</a-button>
      <a-button>测试</a-button>
      <a-button>测试</a-button>
    </a-button-group>
    <yc-button-group type="primary">
      <a-button>测试</a-button>
      <a-button>测试</a-button>
      <a-button>测试</a-button>
      <a-button>测试</a-button>
    </yc-button-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
// document.body.setAttribute('arco-theme', 'dark');
const isDark = useDark({
  selector: 'body',
  attribute: 'yc-design-theme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: 'light',
});
isDark.value = true;
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
