<template>
  <div class="yc-page-header">
    <div class="yc-page-header-wrapper">
      <div v-if="$slots.breadcrumb" class="yc-page-header-breadcrumb">
        <slot name="breadcrumb" />
      </div>
      <div class="yc-page-header-header">
        <div class="yc-page-header-main">
          <icon-button
            :size="14"
            :hover-size="30"
            @click="$emit('back', $event)"
          >
            <slot name="back-icon">
              <icon-arrow-right />
            </slot>
          </icon-button>
          <div
            v-if="$slots.title || title"
            class="yc-page-header-title text-ellipsis"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <yc-divider
            v-if="$slots.subtitle || subtitle"
            :direction="'vertical'"
          />
          <div
            v-if="$slots.subtitle || subtitle"
            class="yc-page-header-subtitle text-ellipsis"
          >
            <slot name="subtitle">
              {{ subtitle }}
            </slot>
          </div>
        </div>
        <div v-if="$slots.extra" class="yc-page-header-extra">
          <slot name="extra" />
        </div>
      </div>
    </div>
    <div v-if="$slots.default" class="yc-page-header-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageHeaderProp, PageHeaderEmits, PageHeaderSlots } from './type';
import { IconArrowRight } from '@shared/icons';
import YcDivider from '@/components/Divider';
import { IconButton } from '@shared/components';
defineOptions({
  name: 'PageHeader',
});
defineSlots<PageHeaderSlots>();
withDefaults(defineProps<PageHeaderProp>(), {
  title: '',
  subtitle: '',
  showBack: true,
});
defineEmits<PageHeaderEmits>();
</script>

<style lang="less" scoped>
@import './style/page-header.less';
</style>
