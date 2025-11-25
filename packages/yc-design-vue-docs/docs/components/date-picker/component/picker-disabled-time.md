### 不可选取的时间

使用 `disabledDate` 可以禁用某些日期。使用 `disabledTime` 可以禁用时间，需要配合 `showTime` 使用。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-date-picker
      style="width: 200px; margin-right: 24px; margin-bottom: 24px;"
      :disabledDate="(current) => dayjs(current).isBefore(dayjs())" />
    <yc-date-picker
      style="width: 200px; margin-right: 24px; margin-bottom: 24px;"
      show-time
      :disabledDate="(current) => dayjs(current).isBefore(dayjs())"
      :disabledTime="getDisabledTime" />
  </yc-space>
</div>

<script setup>
import dayjs from 'dayjs';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function getDisabledTime(date) {
  return {
    disabledHours: () => range(6, 24),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => range(30, 60),
  };
}

function getDisabledRangeTime(date, type) {
  return {
    disabledHours: () => (type === 'start' ? range(0, 6) : range(6, 24)),
    disabledMinutes: () => (type === 'end' ? range(0, 30) : [31, 60]),
    disabledSeconds: () => range(30, 60),
  };
}
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-date-picker
      style="width: 200px; margin-right: 24px; margin-bottom: 24px;"
      :disabledDate="(current) => dayjs(current).isBefore(dayjs())" />
    <yc-date-picker
      style="width: 200px; margin-right: 24px; margin-bottom: 24px;"
      show-time
      :disabledDate="(current) => dayjs(current).isBefore(dayjs())"
      :disabledTime="getDisabledTime" />
  </yc-space>
</template>

<script setup>
import dayjs from 'dayjs';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function getDisabledTime(date) {
  return {
    disabledHours: () => range(6, 24),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => range(30, 60),
  };
}

function getDisabledRangeTime(date, type) {
  return {
    disabledHours: () => (type === 'start' ? range(0, 6) : range(6, 24)),
    disabledMinutes: () => (type === 'end' ? range(0, 30) : [31, 60]),
    disabledSeconds: () => range(30, 60),
  };
}
</script>
```

</details>
