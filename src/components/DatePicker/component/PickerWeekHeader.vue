<template>
  <div class="yc-picker-week-list">
    <div class="yc-picker-week-list-item"></div>
    <div v-for="v in weekHeaders" :key="v" class="yc-picker-week-list-item">
      {{ v }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { DayStartOfWeek } from '../type';
import { useI18n } from '@shared/utils';
const props = defineProps<{
  locale: Record<string, any>;
  dayStartOfWeek: DayStartOfWeek;
  abbreviation: boolean;
}>();
const { locale, dayStartOfWeek, abbreviation } = toRefs(props);
// 国际化
const { t } = useI18n();
// headers
const weekHeaders = computed(() => {
  const baseDays = [0, 1, 2, 3, 4, 5, 6];
  const days = [
    ...baseDays.slice(dayStartOfWeek.value || 0),
    ...baseDays.slice(0, dayStartOfWeek.value || 0),
  ];
  const map = Object.fromEntries(
    [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ].map((v, i) => [i, v])
  );
  return days.map((v) => {
    const localeKey = `week.${abbreviation.value ? 'short' : 'long'}.${map[v]}`;
    const tKey = `datePicker.week.${abbreviation.value ? 'short' : 'long'}.${map[v]}`;
    return locale.value?.[localeKey] || t(tKey);
  });
});
</script>

<style lang="less">
@import '../style/picker.less';
</style>
