### 带时间的日期选择

使用 `showTime` 可以使用带时间的日期选择。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-date-picker
      style="width: 220px; margin: 0 24px 24px 0;"
      show-time
      :time-picker-props="{ defaultValue: '09:09:06' }"
      format="YYYY-MM-DD HH:mm:ss"
      @change="onChange"
      @select="onSelect"
      @ok="onOk" />
    <yc-date-picker
      style="width: 220px; margin: 0 24px 24px 0;"
      show-time
      format="YYYY-MM-DD hh:mm"
      @change="onChange"
      @select="onSelect"
      @ok="onOk" />
  </yc-space>
</div>

<script setup>
function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}
function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}
function onOk(dateString, date) {
  console.log('onOk: ', dateString, date);
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
      style="width: 220px; margin: 0 24px 24px 0;"
      show-time
      :time-picker-props="{ defaultValue: '09:09:06' }"
      format="YYYY-MM-DD HH:mm:ss"
      @change="onChange"
      @select="onSelect"
      @ok="onOk" />
    <yc-date-picker
      style="width: 220px; margin: 0 24px 24px 0;"
      show-time
      format="YYYY-MM-DD hh:mm"
      @change="onChange"
      @select="onSelect"
      @ok="onOk" />
  </yc-space>
</template>

<script setup>
function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}
function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}
function onOk(dateString, date) {
  console.log('onOk: ', dateString, date);
}
</script>
```

</details>
