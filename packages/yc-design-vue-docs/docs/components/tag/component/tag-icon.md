### 带图标的标签

可通过 `icon` 插槽在标签中加入图标。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-tag color="gray">
      <template #icon>
        <icon-github />
      </template>
      Github
    </yc-tag>
    <yc-tag color="orangered">
      <template #icon>
        <icon-gitlab />
      </template>
      Gitlab
    </yc-tag>
    <yc-tag color="blue">
      <template #icon>
        <icon-twitter />
      </template>
      Twitter
    </yc-tag>
    <yc-tag color="arcoblue">
      <template #icon>
        <icon-facebook />
      </template>
      Facebook
    </yc-tag>
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
  <yc-space>
    <yc-tag color="gray">
      <template #icon>
        <icon-github />
      </template>
      Github
    </yc-tag>
    <yc-tag color="orangered">
      <template #icon>
        <icon-gitlab />
      </template>
      Gitlab
    </yc-tag>
    <yc-tag color="blue">
      <template #icon>
        <icon-twitter />
      </template>
      Twitter
    </yc-tag>
    <yc-tag color="arcoblue">
      <template #icon>
        <icon-facebook />
      </template>
      Facebook
    </yc-tag>
  </yc-space>
</template>
```

</details>
