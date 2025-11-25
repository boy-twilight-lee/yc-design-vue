### 带图标的选项

通过 `icon` 插槽在选项前添加图标。

<div class="cell-demo vp-raw">
  <yc-dropdown>
    <yc-button>Click Me</yc-button>
    <template #content>
      <yc-doption>
        <template #icon>
          <icon-location />
        </template>
        <template #default>Option 1</template>
      </yc-doption>
      <yc-doption>
        <template #icon>
          <icon-location />
        </template>
        <template #default>Option 2</template>
      </yc-doption>
      <yc-doption>
        <template #icon>
          <icon-location />
        </template>
        <template #default>Option 3</template>
      </yc-doption>
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
      <yc-doption>
        <template #icon>
          <icon-location />
        </template>
        <template #default>Option 1</template>
      </yc-doption>
      <yc-doption>
        <template #icon>
          <icon-location />
        </template>
        <template #default>Option 2</template>
      </yc-doption>
      <yc-doption>
        <template #icon>
          <icon-location />
        </template>
        <template #default>Option 3</template>
      </yc-doption>
    </template>
  </yc-dropdown>
</template>
```

</details>
