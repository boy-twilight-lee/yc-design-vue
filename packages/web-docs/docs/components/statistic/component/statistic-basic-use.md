### 基本用法

当需要突出某个或某组数字或展示带描述的统计类数据时使用。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-statistic
      title="Downloads"
      :value="125670"
      show-group-separator />
    <yc-statistic
      extra="Comments"
      :value="40509"
      :precision="2" />
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
  <yc-space size="large">
    <yc-statistic
      title="Downloads"
      :value="125670"
      show-group-separator />
    <yc-statistic
      extra="Comments"
      :value="40509"
      :precision="2" />
  </yc-space>
</template>
```

</details>
