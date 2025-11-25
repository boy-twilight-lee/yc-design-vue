### 颜色

我们提供多种预设色彩的徽标样式。如果预设值不能满足你的需求，`color` 字段也可以设置自定义色值。

<div class="cell-demo vp-raw">
  <div>
    <yc-badge
      v-for="color in colors"
      :key="color"
      :color="color"
      :text="color"
      :style="{ marginRight: '24px' }" />
  </div>
  <br />
  <div>
    <yc-badge
      v-for="color in customColors"
      :key="color"
      :color="color"
      :text="color"
      :style="{ marginRight: '24px' }" />
  </div>
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
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

const customColors = [
  '#F53F3F',
  '#7816FF',
  '#00B42A',
  '#165DFF',
  '#FF7D00',
  '#EB0AA4',
  '#7BC616',
  '#86909C',
  '#B71DE8',
  '#0FC6C2',
  '#FFB400',
  '#168CFF',
  '#FF5722',
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
  <div>
    <yc-badge
      v-for="color in colors"
      :key="color"
      :color="color"
      :text="color"
      :style="{ marginRight: '24px' }" />
  </div>
  <br />
  <div>
    <yc-badge
      v-for="color in customColors"
      :key="color"
      :color="color"
      :text="color"
      :style="{ marginRight: '24px' }" />
  </div>
</template>

<script setup>
const color = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

const customColors = [
  '#F53F3F',
  '#7816FF',
  '#00B42A',
  '#165DFF',
  '#FF7D00',
  '#EB0AA4',
  '#7BC616',
  '#86909C',
  '#B71DE8',
  '#0FC6C2',
  '#FFB400',
  '#168CFF',
  '#FF5722',
];
</script>
```

</details>
