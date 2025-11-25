### 完整功能

完整功能

<div class="cell-demo vp-raw">
  <yc-result
    status="error"
    title="No internet ">
    <template #icon>
      <IconFaceFrownFill />
    </template>
    <template #subtitle> DNS_PROBE_FINISHED_NO_INTERNET </template>
    <template #extra>
      <yc-button type="primary">Refresh</yc-button>
    </template>
    <yc-typography style="background: var(--color-fill-2); padding: 24px;">
      <yc-typography-paragraph>Try:</yc-typography-paragraph>
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
      </ul>
    </yc-typography>
  </yc-result>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-result
    status="error"
    title="No internet ">
    <template #icon>
      <IconFaceFrownFill />
    </template>
    <template #subtitle> DNS_PROBE_FINISHED_NO_INTERNET </template>

    <template #extra>
      <yc-button type="primary">Refresh</yc-button>
    </template>
    <yc-typography style="background: var(--color-fill-2); padding: 24px;">
      <yc-typography-paragraph>Try:</yc-typography-paragraph>
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
      </ul>
    </yc-typography>
  </yc-result>
</template>
```

</details>
