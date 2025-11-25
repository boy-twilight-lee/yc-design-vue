### 预设时间快捷选择

使用 `shortcuts` 可以预设时间快捷选择。

<div class="cell-demo vp-raw">
  <yc-date-picker
    style="width: 300px; margin-bottom: 24px; margin-right: 24px;"
    :shortcuts="[
      {
        label: '2 hours later',
        value: () => dayjs().add(2, 'hour').toDate(),
      },
      {
        label: 'a week later',
        value: () => dayjs().add(1, 'week').toDate(),
      },
      {
        label: 'a month later',
        value: () => dayjs().add(1, 'month').toDate(),
      },
    ]"
    show-time />
  <yc-month-picker
    style="width: 300px; margin-bottom: 24px; margin-right: 24px;"
    :shortcuts="[
      {
        label: 'last month',
        value: () => dayjs().subtract(1, 'month').toDate(),
      },
      {
        label: 'six months later',
        value: () => dayjs().add(6, 'month').toDate(),
      },
      {
        label: 'two years later',
        value: () => dayjs().add(2, 'year').toDate(),
      },
    ]" />
</div>

<script setup>
import dayjs from 'dayjs';
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-date-picker
    style="width: 300px; margin-bottom: 24px; margin-right: 24px;"
    :shortcuts="[
      {
        label: '2 hours later',
        value: () => dayjs().add(2, 'hour').toDate(),
      },
      {
        label: 'a week later',
        value: () => dayjs().add(1, 'week').toDate(),
      },
      {
        label: 'a month later',
        value: () => dayjs().add(1, 'month').toDate(),
      },
    ]"
    show-time />
  <yc-month-picker
    style="width: 300px; margin-bottom: 24px; margin-right: 24px;"
    :shortcuts="[
      {
        label: 'last month',
        value: () => dayjs().subtract(1, 'month').toDate(),
      },
      {
        label: 'six months later',
        value: () => dayjs().add(6, 'month').toDate(),
      },
      {
        label: 'two years later',
        value: () => dayjs().add(2, 'year').toDate(),
      },
    ]" />
</template>

<script setup>
import dayjs from 'dayjs';
</script>
```

</details>
