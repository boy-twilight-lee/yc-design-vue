### 自定义评分字符

可以将星星替换为其他字符，比如表情、字母，数字，字体图标甚至中文。

<div class="cell-demo vp-raw">
  <yc-rate :default-value="2">
    <template #character="{ index }">
      <icon-check v-if="index < 3" />
      <icon-close v-else />
    </template>
  </yc-rate>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-rate :default-value="2">
    <template #character="{ index }">
      <icon-check v-if="index < 3" />
      <icon-close v-else />
    </template>
  </yc-rate>
</template>
```

</details>
