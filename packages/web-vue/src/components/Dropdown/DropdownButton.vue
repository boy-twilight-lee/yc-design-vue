<template>
  <yc-button-group :disabled="disabled" :type="type" :size="size">
    <yc-button v-bind="buttonProps" @click="(ev) => $emit('click', ev)">
      <slot />
    </yc-button>
    <yc-dropdown
      :popup-visible="popupVisible"
      :default-popup-visible="defaultPopupVisible"
      :trigger="trigger"
      :position="position"
      :popup-container="popupContainer"
      :hide-on-select="hideOnSelect"
      :disabled="disabled"
      v-bind="$attrs"
      @select="(v) => $emit('select', v)"
      @popup-visible-change="(v) => $emit('popup-visible-change', v)"
    >
      <yc-button v-bind="buttonProps">
        <template #icon>
          <slot name="icon">
            <icon-more />
          </slot>
        </template>
      </yc-button>
      <template #content>
        <slot name="content" />
      </template>
    </yc-dropdown>
  </yc-button-group>
</template>

<script lang="ts" setup>
import { DropdownButtonProps, DoptionValue, DropdownButtonSlots } from './type';
import { IconMore } from '@shared/icons';
import YcDropdown from './Dropdown.vue';
import {
  default as YcButton,
  ButtonGroup as YcButtonGroup,
} from '@/components/Button';
defineOptions({
  name: 'DropdownButton',
});
defineSlots<DropdownButtonSlots>();
withDefaults(defineProps<DropdownButtonProps>(), {
  popupVisible: undefined,
  defaultPopupVisible: false,
  trigger: 'click',
  position: 'br',
  popupContainer: undefined,
  disabled: false,
  type: 'secondary',
  size: undefined,
  buttonProps: () => {
    return {};
  },
  hideOnSelect: true,
});
defineEmits<{
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'click', ev: MouseEvent): void;
  (e: 'select', value: DoptionValue): void;
}>();
</script>
