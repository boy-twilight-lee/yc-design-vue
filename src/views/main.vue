<template>
  <div class="container">
    <yc-menu v-model:selected-keys="keys" show-collapse-button class="sider">
      <yc-menu-item v-for="item in menus" :key="item.path" :path="item.path">
        {{ item.title }}
      </yc-menu-item>
    </yc-menu>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const keys = ref('dev');
const menus = [
  {
    title: '开发',
    path: 'dev',
  },
];

watch(
  () => keys.value,
  () => {
    router.push({
      name: keys.value,
    });
  }
);

watch(
  () => route.name,
  () => {
    keys.value = route.name as string;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  .sider,
  .main {
    flex-shrink: 0;
  }
  .sider {
    width: 260px;
    border-right: 1px solid rgb(229, 230, 235);
  }
  .main {
    padding: 20px;
    flex: 1;
    overflow: auto;
  }
}
</style>
