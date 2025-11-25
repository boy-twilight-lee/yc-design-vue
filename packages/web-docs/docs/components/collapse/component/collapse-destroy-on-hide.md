### 隐藏时销毁

通过设置 `destroy-on-hide` 可以让面板内容在隐藏时销毁。

<div class="cell-demo vp-raw">
  <yc-collapse
    :default-active-key="['1', 2]"
    destroy-on-hide>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="1">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      :path="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="3"
      :show-expand-icon="false">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
  </yc-collapse>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-collapse
    :default-active-key="['1', 2]"
    destroy-on-hide>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="1">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      :path="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="3"
      :show-expand-icon="false">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
  </yc-collapse>
</template>
```

</details>
