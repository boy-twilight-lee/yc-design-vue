### 弹窗偏移量

通过 `popup-translate` 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-trigger>
      <yc-button>BOTTOM</yc-button>
      <template #content>
        <div class="trigger-demo-translate">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger :popup-translate="[100, 20]">
      <yc-button>BOTTOM OFFSET[100, 20]</yc-button>
      <template #content>
        <div class="trigger-demo-translate">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger :popup-translate="[-100, 20]">
      <yc-button>BOTTOM OFFSET[-100, 20]</yc-button>
      <template #content>
        <div class="trigger-demo-translate">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
  </yc-space>
</div>

<style scoped>
.trigger-demo-translate {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-trigger>
      <yc-button>BOTTOM</yc-button>
      <template #content>
        <div class="trigger-demo-translate">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger :popup-translate="[100, 20]">
      <yc-button>BOTTOM OFFSET[100, 20]</yc-button>
      <template #content>
        <div class="trigger-demo-translate">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
    <yc-trigger :popup-translate="[-100, 20]">
      <yc-button>BOTTOM OFFSET[-100, 20]</yc-button>
      <template #content>
        <div class="trigger-demo-translate">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
  </yc-space>
</template>

<style scoped>
.trigger-demo-translate {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
```

</details>
