<template>
  <div
    :class="[
      'yc-rate',
      {
        'yc-rate-disabled': disabled,
        'yc-rate-readonly': readonly,
      },
    ]"
  >
    <div
      v-for="i in count"
      :key="i"
      class="yc-rate-character"
      :ref="(el) => (chars[i] = el as HTMLDivElement)"
    >
      <div
        v-if="allowHalf"
        class="yc-rate-character-left"
        :style="{
          color:
            (i - 0.5 <= computedValue && !curHover) || i - 0.5 <= curHover
              ? color
              : '',
        }"
        @click.stop="handleClick(i - 0.5)"
        @mouseenter="handleMouseenter(i - 0.5)"
        @mouseleave="handleMouseleave"
      >
        <slot name="character" :index="i">
          <icon-face-smile v-if="grading" />
          <icon-star v-else />
        </slot>
      </div>
      <div
        class="yc-rate-character-right"
        :style="{
          color:
            (i <= computedValue && !curHover) || i <= curHover ? color : '',
        }"
        @click="handleClick(i)"
        @mouseenter="handleMouseenter(i)"
        @mouseleave="handleMouseleave"
      >
        <slot name="character" :index="i">
          <icon-face-smile v-if="grading" />
          <icon-star v-else />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { RateProps, RateEmits, RateSlots } from './type';
import { useControlValue, isObject, sleep } from '@shared/utils';
import { IconStar, IconFaceSmile } from '@shared/icons';
defineOptions({
  name: 'Rate',
});
defineSlots<RateSlots>();
const props = withDefaults(defineProps<RateProps>(), {
  count: 5,
  modelValue: undefined,
  defaultValue: 0,
  allowHalf: false,
  grading: false,
  readonly: false,
  disabled: false,
  color: 'rgb(247, 186, 30)',
});
const emits = defineEmits<RateEmits>();
const {
  modelValue,
  defaultValue,
  readonly,
  disabled,
  count,
  allowClear,
  color: _color,
} = toRefs(props);
// char对应的el
const chars = ref<HTMLDivElement[]>([]);
// 是否动画还在播放中
let loading = false;
// 当前hover的等级
const curHover = ref<number>(0);
// 控制值
const computedValue = useControlValue<number>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', val);
  }
);
// 颜色
const color = computed(() => {
  if (isObject(_color.value)) {
    return (Object.entries(_color.value).find(
      ([key]) => curHover.value <= +key
    )?.[1] ?? 'rgb(247, 186, 30)') as string;
  } else {
    return _color.value ?? 'rgb(247, 186, 30)';
  }
});
// 点击评分
const handleClick = async (index: number) => {
  if (readonly.value || disabled.value || loading) {
    return;
  }
  computedValue.value =
    allowClear.value && computedValue.value == index ? 0 : index;
  emits('change', computedValue.value);
  loading = true;
  // 处理动画
  for (let i = 1; i <= count.value; i++) {
    if (i > computedValue.value) {
      continue;
    }
    const el = chars.value[i];
    el.classList.add('yc-rate-character-scale');
    await sleep(50);
    setTimeout(() => {
      el.classList.remove('yc-rate-character-scale');
    }, 150);
  }
  loading = false;
};
// 处理鼠标变色
let timer: NodeJS.Timeout;
const handleMouseenter = (i: number) => {
  if (readonly.value || disabled.value) return;
  if (timer) clearTimeout(timer);
  curHover.value = i;
  emits('hover-change', i);
};
const handleMouseleave = () => {
  if (readonly.value || disabled.value) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    curHover.value = 0;
  }, 100);
};
</script>

<style lang="less" scoped>
@import './style/rate.less';
@import './style/rate.less';
</style>
