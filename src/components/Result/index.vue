<template>
  <div class="yc-result">
    <div
      v-if="$slots.icon || status"
      :class="['yc-result-icon', `yc-result-icon-${status}`]"
    >
      <div class="yc-result-icon-tip">
        <slot name="icon">
          <template v-if="status">
            <img
              v-if="['403', '404', '500'].includes(status)"
              :src="TYPE_ICON_MAP[`result-${status}`]"
            />
            <component v-else :is="TYPE_ICON_MAP[`result-${status}`]" />
          </template>
        </slot>
      </div>
    </div>
    <div v-if="$slots.title || title" class="yc-result-title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div v-if="$slots.subtitle || subtitle" class="yc-result-subtitle">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </div>
    <div v-if="$slots.extra" class="yc-result-extra">
      <slot name="extra" />
    </div>
    <div v-if="$slots.default" class="yc-result-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { ResultProps, ResultSlots } from './type';
import { TYPE_ICON_MAP } from '@shared/constants';
defineOptions({
  name: 'Result',
});
defineSlots<ResultSlots>();
const props = withDefaults(defineProps<ResultProps>(), {
  status: 'info',
  title: '',
  subtitle: '',
});
const { status } = toRefs(props);
</script>

<style lang="less" scoped>
@import './style/result.less';
</style>
