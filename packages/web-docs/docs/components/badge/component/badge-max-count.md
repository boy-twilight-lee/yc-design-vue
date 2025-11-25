### 最大值

设置 `max-count`，可以限制最大显示的徽标数值，超过将会加 `+` 后缀。`max-count` 默认为 `99`。

<div class="cell-demo vp-raw">
  <yc-space :size="40">
    <yc-badge :max-count="10" :count="0">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
    <yc-badge :max-count="10" :count="100">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
    <yc-badge :count="100">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
    <yc-badge :max-count="999" :count="1000">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
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
  <yc-space :size="40">
    <yc-badge
      :max-count="10"
      :count="0">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
    <yc-badge
      :max-count="10"
      :count="100">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
    <yc-badge :count="100">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
    <yc-badge
      :max-count="999"
      :count="1000">
      <yc-avatar shape="square">
        <span>
          <IconUser />
        </span>
      </yc-avatar>
    </yc-badge>
  </yc-space>
</template>
```

</details>
