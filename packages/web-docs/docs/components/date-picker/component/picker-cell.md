### 定制日期单元格

利用具名插槽 `cell` 可以定制日期单元格。

<div class="cell-demo vp-raw">
  <yc-date-picker style="width: 200px;" >
    <template #cell="{ date }">
      <div class="yc-picker-date">
        <div
          class="yc-picker-date-value"
          :style="getCellStyle(date)">
          {{ date.getDate() }}
        </div>
      </div>
    </template>
  </yc-date-picker>
</div>

<script setup>
const highlightDates = [6, 14, 22];
const highlightStyle = {
  border: '1px solid rgb(var(--arcoblue-6))',
};
function getCellStyle(date) {
  return highlightDates.includes(date.getDate()) ? highlightStyle : {};
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
  <yc-date-picker style="width: 200px;">
    <template #cell="{ date }">
      <div class="yc-picker-date">
        <div
          class="yc-picker-date-value"
          :style="getCellStyle(date)">
          {{ date.getDate() }}
        </div>
      </div>
    </template>
  </yc-date-picker>
</template>

<script setup>
const highlightDates = [6, 14, 22];
const highlightStyle = {
  border: '1px solid rgb(var(--arcoblue-6))',
};
function getCellStyle(date) {
  return highlightDates.includes(date.getDate()) ? highlightStyle : {};
}
</script>
```

</details>
