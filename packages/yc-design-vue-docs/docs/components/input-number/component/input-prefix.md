### 前缀与后缀

通过指定 `prefix` 和 `suffix` 插槽来在输入框内添加前缀和后缀。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear>
      <template #prefix>
        <icon-user />
      </template>
    </yc-input-number>
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear
      hide-button>
      <template #suffix>
        <icon-info-circle />
      </template>
    </yc-input-number>
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
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear>
      <template #prefix>
        <icon-user />
      </template>
    </yc-input-number>
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      allow-clear
      hide-button>
      <template #suffix>
        <icon-info-circle />
      </template>
    </yc-input-number>
  </yc-space>
</template>
```

</details>
