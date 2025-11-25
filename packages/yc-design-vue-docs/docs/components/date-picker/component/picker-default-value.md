### 默认值

日期输入器有默认值的情况。

<div class="cell-demo vp-raw">
  <yc-date-picker
    defaultValue="2019-06-03"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-date-picker
    defaultValue="2019-06-03"
    @select="onSelect"
    @change="onChange"
    :style="{ ...style, width: '240px' }" />
  <yc-date-picker
    showTime
    defaultValue="2019-06-03 08:00:00"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-year-picker
    defaultValue="2019"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-month-picker
    defaultValue="2019-06"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-week-picker
    default-value="2019-08-02" />
</div>

<script setup>
import dayjs from 'dayjs';
function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}
function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}
const style = { width: '200px', marginBottom: '24px', marginRight: '24px' };
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
    defaultValue="2019-06-03"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-date-picker
    defaultValue="2019-06-03"
    @select="onSelect"
    @change="onChange"
    :style="{ ...style, width: '240px' }" />
  <yc-date-picker
    showTime
    defaultValue="2019-06-03 08:00:00"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-year-picker
    defaultValue="2019"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-month-picker
    defaultValue="2019-06"
    @select="onSelect"
    @change="onChange"
    :style="style" />
  <yc-week-picker
    defaultValue="2019-08-02"
    @select="onSelect"
    @change="onChange"
    :style="style" />
</template>

<script setup>
function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}
function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}
const style = { width: '200px', marginBottom: '24px', marginRight: '24px' };
</script>
```

</details>
