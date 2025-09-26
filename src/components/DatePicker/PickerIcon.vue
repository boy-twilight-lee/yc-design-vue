<template>
  <div class="yc-picker-header-icon">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.yc-picker-header-icon {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-right: 2px;
  margin-left: 2px;
  color: var(--color-text-2);
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  background-color: var(--color-bg-popup);
  border-radius: 50%;
  transition: all 0.1s cubic-bezier(0, 0, 1, 1);
  user-select: none;
  &:hover {
    background-color: var(--color-fill-3);
  }
}
</style>
