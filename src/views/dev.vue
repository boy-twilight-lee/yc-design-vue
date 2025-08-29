<template>
  <div class="test">
    <yc-anchor>
      <yc-anchor-link href="#basic">Basic</yc-anchor-link>
      <yc-anchor-link href="#line-less">LineLess Mode</yc-anchor-link>
      <yc-anchor-link href="#affix">
        Affix
        <template #sublist>
          <yc-anchor-link href="#boundary">Scroll Boundary</yc-anchor-link>
          <yc-anchor-link href="#hash">Hash mode</yc-anchor-link>
        </template>
      </yc-anchor-link>
    </yc-anchor>
    <a-anchor>
      <a-anchor-link href="#basic">Basic</a-anchor-link>
      <a-anchor-link href="#line-less">LineLess Mode</a-anchor-link>
      <a-anchor-link href="#affix">
        Affix
        <template #sublist>
          <a-anchor-link href="#boundary">Scroll Boundary</a-anchor-link>
          <a-anchor-link href="#hash">Hash mode</a-anchor-link>
        </template>
      </a-anchor-link>
    </a-anchor>
  </div>
</template>

<script lang="ts" setup>
// document.documentElement.setAttribute('a-design-dark', '');
// document.body.setAttribute('arco-theme', 'dark');
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: #17171a;
  gap: 10px;
}
</style>
