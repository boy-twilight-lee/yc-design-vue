<template>
  <yc-input-number
    v-model="computedValue"
    :min="min"
    :max="max"
    :disabled="disabled"
    hide-button
    @blur="handleSet"
    @press-enter="handleSet"
  />
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import useContext from './hooks/useContext';
import YcInputNumber from '@/components/InputNumber';
const props = defineProps<{
  type: 'start' | 'end';
}>();
const { type } = toRefs(props);
// 接收注入
const {
  min,
  max,
  disabled,
  startValue,
  endValue,
  tempStartValue,
  tempEndValue,
} = useContext().inject();
// 计算值
const computedValue = computed({
  get() {
    return type.value == 'start' ? tempStartValue.value : tempEndValue.value;
  },
  set(val) {
    if (type.value == 'start') {
      tempStartValue.value = val;
    } else {
      tempEndValue.value = val;
    }
  },
});
// 处理设置
const handleSet = () => {
  if (type.value == 'start') {
    startValue.value = computedValue.value;
  } else {
    endValue.value = computedValue.value;
  }
};
</script>

<style lang="less" scoped>
@import './style/slider.less';
</style>
