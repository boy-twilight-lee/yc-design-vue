### 标签的颜色

我们提供多种预设色彩的标签样式，通过 `color` 设置不同颜色。如果预设值不能满足你的需求，`color` 字段也可以设置自定义色值。

<div class="cell-demo vp-raw">
  <yc-space wrap>
    <yc-tag
      v-for="(color, index) of colors"
      :key="index"
      :color="color"
      closable
      >{{ color }}</yc-tag
    >
  </yc-space>
  <h3 style="margin:24px 0 20px 0;">Custom Color:</h3>
  <yc-space wrap>
    <yc-tag
      v-for="(color, index) of custom"
      :key="index"
      :color="color"
      closable
      >{{ color }}</yc-tag
    >
  </yc-space>
</div>

<script setup>
const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];
const custom = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space wrap>
    <yc-tag
      v-for="(color, index) of colors"
      :key="index"
      :color="color"
      closable
      >{{ color }}</yc-tag
    >
  </yc-space>
  <h3>Custom Color:</h3>
  <yc-space wrap>
    <yc-tag
      v-for="(color, index) of custom"
      :key="index"
      :color="color"
      closable
      >{{ color }}</yc-tag
    >
  </yc-space>
</template>

<script setup>
const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];
const custom = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
];
</script>
```

</details>
