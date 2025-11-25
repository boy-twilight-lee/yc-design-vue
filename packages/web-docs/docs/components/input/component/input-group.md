### 输入框组合

通过 `input-group` 可以组合使用输入框。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-group>
      <yc-input
        :style="{ width: '160px' }"
        placeholder="first" />
      <yc-input
        :style="{ width: '160px' }"
        placeholder="second" />
    </yc-input-group>
    <yc-input-group>
      <yc-select
        :options="['Option1', 'Option2', 'Option3']"
        :style="{ width: '160px' }"
        placeholder="first" />
      <yc-input
        :style="{ width: '160px' }"
        placeholder="second" />
    </yc-input-group>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-group>
      <yc-input
        :style="{ width: '160px' }"
        placeholder="first" />
      <yc-input
        :style="{ width: '160px' }"
        placeholder="second" />
    </yc-input-group>
    <yc-input-group>
      <yc-select
        :options="['Option1', 'Option2', 'Option3']"
        :style="{ width: '160px' }"
        placeholder="first" />
      <yc-input
        :style="{ width: '160px' }"
        placeholder="second" />
    </yc-input-group>
  </yc-space>
</template>
```

</details>
