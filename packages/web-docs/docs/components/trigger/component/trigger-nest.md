### 多层嵌套

弹出层可以嵌套在另一个弹出层内。

<div class="cell-demo vp-raw">
  <yc-trigger trigger="click">
    <yc-button>Click Me</yc-button>
    <template #content>
      <div class="trigger-demo-nest">
        <yc-empty />
        <yc-trigger
          trigger="click"
          position="right">
          <yc-button>click Me</yc-button>
          <template #content>
            <div class="trigger-demo-nest">
              <yc-empty />
              <yc-trigger
                trigger="click"
                position="right">
                <yc-button>Click Me</yc-button>
                <template #content>
                  <div class="trigger-demo-nest">
                    <yc-empty />
                    <yc-trigger
                      trigger="click"
                      position="right">
                      <yc-button>click Me</yc-button>
                      <template #content>
                        <yc-empty class="trigger-demo-nest" />
                      </template>
                    </yc-trigger>
                  </div>
                </template>
              </yc-trigger>
            </div>
          </template>
        </yc-trigger>
      </div>
    </template>
  </yc-trigger>
</div>

<style scoped>
.trigger-demo-nest {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}

.trigger-demo-nest-popup-content {
  text-align: right;
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
  <yc-trigger trigger="click">
    <yc-button>Click Me</yc-button>
    <template #content>
      <div class="trigger-demo-nest">
        <yc-empty />
        <yc-trigger
          trigger="click"
          position="right">
          <yc-button>click Me</yc-button>
          <template #content>
            <div class="trigger-demo-nest">
              <yc-empty />
              <yc-trigger
                trigger="click"
                position="right">
                <yc-button>Click Me</yc-button>
                <template #content>
                  <div class="trigger-demo-nest">
                    <yc-empty />
                    <yc-trigger
                      trigger="click"
                      position="right">
                      <yc-button>click Me</yc-button>
                      <template #content>
                        <yc-empty class="trigger-demo-nest" />
                      </template>
                    </yc-trigger>
                  </div>
                </template>
              </yc-trigger>
            </div>
          </template>
        </yc-trigger>
      </div>
    </template>
  </yc-trigger>
</template>

<style scoped>
.trigger-demo-nest {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}

.trigger-demo-nest-popup-content {
  text-align: right;
}
</style>
```

</details>
