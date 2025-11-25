### 渐变进度条

`color` 传入对象时， 会作为 `linear-gradient` 的属性值设置渐变色。

<div class="cell-demo vp-raw">
  <div>
    <yc-progress
      :percent="0.8"
      :style="{ width: '50%' }"
      :color="{
        '0%': 'rgb(var(--primary-6))',
        '100%': 'rgb(var(--success-6))',
      }" />
    <br />
    <br />
    <yc-progress
      :percent="1"
      :style="{ width: '50%' }"
      :color="{
        '0%': 'rgb(var(--primary-6))',
        '100%': 'rgb(var(--success-6))',
      }" />
    <br />
    <br />
    <yc-space size="large">
      <yc-progress
        type="circle"
        :percent="0.8"
        :style="{ width: '50%' }"
        :color="{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }" />
      <yc-progress
        type="circle"
        :percent="1"
        :style="{ width: '50%' }"
        :color="{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }" />
    </yc-space>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-progress
      :percent="0.8"
      :style="{ width: '50%' }"
      :color="{
        '0%': 'rgb(var(--primary-6))',
        '100%': 'rgb(var(--success-6))',
      }" />
    <br />
    <br />

    <yc-progress
      :percent="1"
      :style="{ width: '50%' }"
      :color="{
        '0%': 'rgb(var(--primary-6))',
        '100%': 'rgb(var(--success-6))',
      }" />
    <br />
    <br />
    <yc-space size="large">
      <yc-progress
        type="circle"
        :percent="0.8"
        :style="{ width: '50%' }"
        :color="{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }" />

      <yc-progress
        type="circle"
        :percent="1"
        :style="{ width: '50%' }"
        :color="{
          '0%': 'rgb(var(--primary-6))',
          '100%': 'rgb(var(--success-6))',
        }" />
    </yc-space>
  </div>
</template>
```

</details>
