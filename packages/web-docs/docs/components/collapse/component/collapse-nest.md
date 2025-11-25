### 嵌套面板

面板多层嵌套。

<div class="cell-demo vp-raw">
  <yc-collapse
    :default-active-key="['1', 2]"
    destroy-on-hide>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="1">
      <yc-collapse
        :default-active-key="['1.1']"
        destroy-on-hide>
        <yc-collapse-item
          header="Beijing Toutiao Technology Co., Ltd."
          path="1.1">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </yc-collapse-item>
        <yc-collapse-item
          header="Beijing Toutiao Technology Co., Ltd."
          path="1.2">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </yc-collapse-item>
      </yc-collapse>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      :path="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="3">
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
      <yc-collapse
        :default-active-key="['1.1']"
        destroy-on-hide>
        <yc-collapse-item
          header="Beijing Toutiao Technology Co., Ltd."
          path="1.1">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </yc-collapse-item>
        <yc-collapse-item
          header="Beijing Toutiao Technology Co., Ltd."
          path="1.2">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </yc-collapse-item>
      </yc-collapse>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      :path="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
    <yc-collapse-item
      header="Beijing Toutiao Technology Co., Ltd."
      path="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </yc-collapse-item>
  </yc-collapse>
</template>
```

</details>
