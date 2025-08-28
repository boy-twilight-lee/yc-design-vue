<template>
  <div
    :class="[
      'yc-anchor-link-item',
      {
        'yc-anchor-link-active': curHref == href && !lineLess,
        'yc-anchor-link-lineless-active': curHref == href && lineLess,
      },
    ]"
  >
    <a :href="href" class="yc-anchor-link" @click="handleClick" ref="linkRef">
      <slot>
        {{ title }}
      </slot>
    </a>
    <div v-if="$slots.sublist" class="yc-anchor-sublist">
      <slot name="sublist" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { AnchorLinkProps, AnchorLinkSlots } from './type';
import { isNumber, getElement } from '@shared/utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'AnchorLink',
});
defineSlots<AnchorLinkSlots>();
const props = withDefaults(defineProps<AnchorLinkProps>(), {
  title: '',
  href: '',
});
const { href } = toRefs(props);
// 接收注入
const { smooth, boundary, changeHash, curHref, lineLess, scrollContainer } =
  useContext().inject();
// 处理点击
const handleClick = (e: MouseEvent) => {
  curHref.value = href.value;
  if (changeHash.value) return;
  e.preventDefault();
  const anchorDom = getElement(href.value);
  // 如果dom不存退出
  if (!anchorDom) return;
  // 如果offset是一个数字
  if (isNumber(boundary.value) && scrollContainer.value) {
    const { top: anchorTop } = anchorDom.getBoundingClientRect();
    const { top: containerTop } = scrollContainer.value.getBoundingClientRect();
    const { scrollTop } = scrollContainer.value;
    scrollContainer.value.scrollTo({
      top: anchorTop - containerTop + scrollTop - boundary.value,
      behavior: smooth.value ? 'smooth' : 'auto',
    });
  } else {
    anchorDom.scrollIntoView({
      block: boundary.value as any,
      behavior: smooth.value ? 'smooth' : 'auto',
    });
  }
};
</script>

<style lang="less" scoped>
@import './style/anchor-link.less';
</style>
