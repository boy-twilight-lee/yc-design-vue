<template>
  <div class="yc-anchor">
    <div v-if="!lineLess" class="yc-anchor-line-track">
      <div
        class="yc-anchor-line-slider"
        :style="{
          top: valueToPx(top),
        }"
      ></div>
    </div>
    <div class="yc-anchor-list" ref="listRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { AnchorProps, AnchorSlots } from './type';
import { valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Anchor',
});
defineSlots<AnchorSlots>();
const props = withDefaults(defineProps<AnchorProps>(), {
  boundary: 'start',
  lineLess: false,
  scrollContainer: undefined,
  changeHash: true,
  smooth: true,
});
// 获取listRef
const listRef = ref<HTMLDivElement>();
// listRef
const linkRefs = ref<HTMLDivElement[]>([]);
// 注入
const { curHref, hrefs } = useContext().provide(props, listRef);
// 计算top
const top = computed(() => {
  const curIndex = hrefs.value.findIndex((item) => item == curHref.value);
  const offset = linkRefs.value
    .slice(0, curIndex + 1)
    .map((item) => item.offsetHeight)
    .reduce((pre, cur, index) => {
      if (index == curIndex) {
        return pre + (cur - 12) / 2;
      } else {
        return pre + cur;
      }
    }, 0);
  return offset + curIndex * 2;
});
onMounted(() => {
  if (!hrefs.value.length) return;
  curHref.value = hrefs.value[0];
  linkRefs.value = [
    ...(listRef.value!.querySelectorAll(
      '.yc-anchor-link'
    ) as NodeListOf<HTMLDivElement>),
  ];
});
</script>

<style lang="less" scoped>
@import './style/anchor.less';
</style>
