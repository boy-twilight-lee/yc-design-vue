### 多级菜单

带有多级菜单的下拉框。

<div class="cell-demo vp-raw">
  <yc-dropdown>
    <yc-button>Click Me</yc-button>
    <template #content>
      <yc-doption>Option 1</yc-doption>
      <yc-dsubmenu value="option-1">
        <template #default>Option 2</template>
        <template #content>
          <yc-doption>Option 2-1</yc-doption>
          <yc-dsubmenu
            value="option-2-2"
            trigger="hover">
            <template #default>Option 2-2</template>
            <template #content>
              <yc-doption>Option 2-1</yc-doption>
              <yc-doption>Option 2-2</yc-doption>
              <yc-doption>Option 2-3</yc-doption>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center;">
                <yc-button>Click</yc-button>
              </div>
            </template>
          </yc-dsubmenu>
          <yc-doption>Option 2-3</yc-doption>
        </template>
      </yc-dsubmenu>
      <yc-doption>Option 3</yc-doption>
    </template>
  </yc-dropdown>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-dropdown>
    <yc-button>Click Me</yc-button>
    <template #content>
      <yc-doption>Option 1</yc-doption>
      <yc-dsubmenu value="option-1">
        <template #default>Option 2</template>
        <template #content>
          <yc-doption>Option 2-1</yc-doption>
          <yc-dsubmenu
            value="option-2-2"
            trigger="hover">
            <template #default>Option 2-2</template>
            <template #content>
              <yc-doption>Option 2-1</yc-doption>
              <yc-doption>Option 2-2</yc-doption>
              <yc-doption>Option 2-3</yc-doption>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center;">
                <yc-button>Click</yc-button>
              </div>
            </template>
          </yc-dsubmenu>
          <yc-doption>Option 2-3</yc-doption>
        </template>
      </yc-dsubmenu>
      <yc-doption>Option 3</yc-doption>
    </template>
  </yc-dropdown>
</template>
```

</details>
