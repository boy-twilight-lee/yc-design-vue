<template>
  <div class="yc-transfer-view">
    <!-- header -->
    <div class="yc-transfer-view-header">
      <component v-if="slots[`${type}-title`]" :is="renderTitle" />
      <template v-else>
        <span class="yc-transfer-view-header-title">
          <yc-checkbox
            v-if="showSelectAll && !simple && (!oneWay || type != 'target')"
            v-model="selectedAll"
            :indeterminate="indeterminate"
            :disabled="!curData.length || disabled"
          >
            {{ title }}
          </yc-checkbox>
          <template v-else>
            {{ title }}
          </template>
        </span>
        <span class="yc-transfer-view-header-count">
          <template v-if="!simple && (!oneWay || type != 'target')">
            {{ curSeleced.length }} / {{ curData.length }}
          </template>
          <icon-button
            v-else-if="type == 'target' && !simple"
            :size="14"
            @click="handleClear"
          >
            <icon-delete />
          </icon-button>
        </span>
      </template>
    </div>
    <!-- search -->
    <div v-if="showSearch" class="yc-transfer-view-search">
      <yc-input
        v-model="keywords"
        v-bind="inputProps"
        @input="(v) => emits('search', v, type)"
      >
        <template #suffix>
          <icon-search />
        </template>
      </yc-input>
    </div>
    <!--body-->
    <div class="yc-transfer-view-body">
      <yc-scrollbar v-if="curData.length">
        <component v-if="slots[type]" :is="renderList" />
        <div v-else role="list" class="yc-transfer-list">
          <template v-for="item in curData" :key="item.value">
            <div
              role="listitem"
              :class="[
                'yc-transfer-list-item',
                {
                  'yc-transfer-list-item-disabled': item.disabled || disabled,
                },
              ]"
              @click="handleClick(item)"
            >
              <!-- checkbox -->
              <yc-checkbox
                v-if="(!oneWay || (oneWay && type == 'source')) && !simple"
                :model-value="curSeleced.includes(item.value as string)"
                :disabled="item.disabled || disabled"
                @change="
                  (isSelected) => handleCheck(isSelected, item.value as string)
                "
              >
                <component v-if="slots.item" :is="renderItem(item)" />
                {{ slots.item ? '' : item.label }}
              </yc-checkbox>
              <template v-else>
                <span class="yc-transfer-list-item-content text-ellipsis">
                  <component v-if="slots.item" :is="renderItem(item)" />
                  {{ slots.item ? '' : item.label }}
                </span>
                <icon-button
                  v-if="type == 'target' && !simple"
                  :hover-size="20"
                >
                  <icon-close />
                </icon-button>
              </template>
            </div>
          </template>
        </div>
      </yc-scrollbar>
      <!-- 渲染empty -->
      <component :is="renderEmpty('Transfer')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { TransferItem, TransferPanelSlots, TransferItemValue } from './type';
import { IconDelete, IconClose, IconSearch } from '@shared/icons';
import useContext from './hooks/useContext';
import { getGlobalConfig } from '@shared/utils';
import YcCheckbox from '@/components/Checkbox';
import YcScrollbar from '@/components/Scrollbar';
import YcInput from '@/components/Input';
import { IconButton } from '@shared/components';
defineSlots<TransferPanelSlots>();
const props = defineProps<{
  type: 'source' | 'target';
}>();
const { type } = toRefs(props);
// configProvider
const { renderEmpty } = getGlobalConfig();
// 接收注入
const {
  computedValue,
  computedSelected,
  targetChecked,
  sourceChecked,
  sourceOptions,
  targetOptions,
  disabled,
  oneWay,
  showSearch,
  showSelectAll,
  simple,
  sourceInputSearchProps,
  targetInputSearchProps,
  slots,
  title: _title,
  emits,
} = useContext().inject();
// 搜索关键词
const keywords = ref<string>('');
// 当前的data
const curData = computed(() => {
  const options =
    type.value == 'source' ? sourceOptions.value : targetOptions.value;
  return options.filter((item) => {
    return item.label?.toLowerCase().includes(keywords.value.toLowerCase());
  });
});
// 当前的选中
const curSeleced = computed(() => {
  return type.value == 'source' ? sourceChecked.value : targetChecked.value;
});
// inputProps
const inputProps = computed(() => {
  return type.value == 'source'
    ? sourceInputSearchProps.value
    : targetInputSearchProps.value;
});
// title
const title = computed(() => {
  return type.value == 'source' ? _title.value[0] : _title.value[1];
});
// 选中所有
const selectedAll = computed({
  get() {
    return (
      !!curSeleced.value.length &&
      curSeleced.value.length == curData.value.length
    );
  },
  set(isSelected) {
    if (isSelected) {
      computedSelected.value = [
        ...new Set([
          ...computedSelected.value,
          ...curData.value.map((item) => item.value as string),
        ]),
      ];
    } else {
      const dataMap = Object.fromEntries(
        curData.value.map((item) => [item.value, item])
      );
      computedSelected.value = computedSelected.value.filter(
        (item) => !dataMap[item]
      );
    }
  },
});
// 半选
const indeterminate = computed(() => {
  return (
    !!curSeleced.value.length && curSeleced.value.length <= curData.value.length
  );
});
// 处理改变
const handleCheck = (isSelected: boolean, value: string) => {
  computedSelected.value = isSelected
    ? [...computedSelected.value, value]
    : computedSelected.value.filter((v) => v != value);
  emits('select', computedSelected.value);
};
// 处理点击数据
const handleClick = (item: TransferItem) => {
  const { value } = item;
  if (disabled.value || item.disabled) return;
  if ((!oneWay.value || type.value == 'source') && !simple.value) {
    return;
  }
  computedValue.value =
    type.value == 'source'
      ? [...computedValue.value, value as string]
      : computedValue.value.filter((v) => v != value);
};
// 处理清除数据
const handleClear = () => {
  if (disabled.value || !computedValue.value.length) return;
  computedValue.value = [];
};
// 获取title渲染函数
const renderTitle = () => {
  return slots[type.value == 'source' ? 'source-title' : 'target-title']?.({
    countTotal:
      type.value == 'source'
        ? sourceOptions.value.length
        : targetOptions.value.length,
    countSelected:
      type.value == 'source'
        ? sourceChecked.value.length
        : targetChecked.value.length,
    searchValue: keywords.value,
    checked: selectedAll.value,
    indeterminate: indeterminate.value,
    onSelectAllChange: (v: boolean) => {
      selectedAll.value = v;
    },
    onClear: handleClear,
  });
};
// 渲染item
const renderList = () => {
  return slots[type.value]?.({
    selectedKeys: curSeleced.value,
    data: curData.value,
    onSelect: (val: TransferItemValue[]) => {
      computedSelected.value = val;
    },
  });
};
// 渲染item
const renderItem = (item: TransferItem) => {
  return () => slots.item?.(item);
};
</script>

<style lang="less" scoped>
@import './style/transfer.less';
</style>
