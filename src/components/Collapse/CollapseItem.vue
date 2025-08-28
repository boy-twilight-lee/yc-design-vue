<template>
  <div
    :class="[
      'yc-collapse-item',
      `yc-collapse-item-expand-icon-${expandIconPosition}`,
      {
        'yc-collapse-item-disabled': disabled,
      },
    ]"
  >
    <div role="button" class="yc-collapse-item-header" @click="handleClick">
      <icon-button v-if="showExpandIcon" class="yc-collapse-item-header-icon">
        <slot
          name="expand-icon"
          :active="computedActiveKey.includes(path)"
          :disabled="disabled"
          :position="expandIconPosition"
        >
          <component
            v-if="slots['expand-icon']"
            :is="
              () =>
                slots['expand-icon']?.({
                  active: computedActiveKey.includes(path),
                  disabled,
                  position: expandIconPosition,
                })
            "
          />
          <icon-right
            v-else
            color="rgb(107, 119, 133)"
            :rotate="
              computedActiveKey.includes(path)
                ? 90
                : expandIconPosition == 'left'
                  ? 0
                  : 180
            "
          />
        </slot>
      </icon-button>
      <div class="yc-collapse-item-header-title text-ellipsis">
        <slot name="header">
          {{ header }}
        </slot>
      </div>
      <div v-if="$slots.extra" class="yc-collapse-item-header-extra">
        <slot name="extra" />
      </div>
    </div>
    <expand-transition>
      <div
        v-if="!destroyOnHide || computedActiveKey.includes(path)"
        v-show="computedActiveKey.includes(path)"
        role="region"
        class="yc-collapse-item-content"
      >
        <div class="yc-collapse-item-content-box">
          <slot />
        </div>
      </div>
    </expand-transition>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { CollapseItemProps, CollapseItemSlots } from './type';
import useContext from './hooks/useContext';
import { IconRight } from '@shared/icons';
import { IconButton, ExpandTransition } from '@shared/components';
defineOptions({
  name: 'CollapseItem',
});
defineSlots<CollapseItemSlots>();
const props = withDefaults(defineProps<CollapseItemProps>(), {
  path: '',
  header: '',
  disabled: false,
  showExpandIcon: undefined,
  destroyOnHide: undefined,
});
const { path, disabled } = toRefs(props);
// 注入数据
const {
  slots,
  computedActiveKey,
  accordion,
  expandIconPosition,
  showExpandIcon,
  destroyOnHide,
} = useContext().inject(props);
// 处理点击
const handleClick = () => {
  if (disabled.value) return;
  if (computedActiveKey.value.includes(path.value)) {
    computedActiveKey.value = computedActiveKey.value.filter(
      (item) => item != path.value
    );
  } else {
    if (accordion.value) {
      computedActiveKey.value = [path.value];
    } else {
      computedActiveKey.value.push(path.value);
    }
  }
};
</script>

<style lang="less" scoped>
@import './style/collapse-item.less';
</style>
