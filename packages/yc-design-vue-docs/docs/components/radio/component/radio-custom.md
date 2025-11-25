### 自定义单选框

使用 #radio 插槽自定义复选框的展示

<div class="cell-demo vp-raw">
    <yc-radio-group>
      <template
        v-for="item in 2"
        :key="item">
        <yc-radio :value="item">
          <template #radio="{ checked }">
            <yc-space
              align="start"
              class="custom-radio-card"
              :class="{ 'custom-radio-card-checked': checked }">
              <div className="custom-radio-card-mask">
                <div className="custom-radio-card-mask-dot" />
              </div>
              <div>
                <div className="custom-radio-card-title">
                  radio Card {{ item }}
                </div>
                <yc-typography-text type="secondary">
                  this is a text
                </yc-typography-text>
              </div>
            </yc-space>
          </template>
        </yc-radio>
      </template>
    </yc-radio-group>
</div>

<style scoped>
.custom-radio-card {
  padding: 10px 16px;
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
  width: 250px;
  box-sizing: border-box;
}

.custom-radio-card-mask {
  height: 14px;
  width: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid var(--color-border-2);
  box-sizing: border-box;
}

.custom-radio-card-mask-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.custom-radio-card-title {
  color: var(--color-text-1);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.custom-radio-card:hover,
.custom-radio-card-checked,
.custom-radio-card:hover .custom-radio-card-mask,
.custom-radio-card-checked .custom-radio-card-mask {
  border-color: rgb(var(--primary-6));
}

.custom-radio-card-checked {
  background-color: var(--color-primary-light-1);
}

.custom-radio-card:hover .custom-radio-card-title,
.custom-radio-card-checked .custom-radio-card-title {
  color: rgb(var(--primary-6));
}

.custom-radio-card-checked .custom-radio-card-mask-dot {
  background-color: rgb(var(--primary-6));
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
  <yc-radio-group default-value="1">
    <yc-radio value="1">
      <template #radio="{ checked }">
        <yc-tag
          :checked="checked"
          checkable
          >This is a tag radio 1</yc-tag
        >
      </template>
    </yc-radio>
    <yc-radio value="2">
      <template #radio="{ checked }">
        <yc-tag
          :checked="checked"
          checkable
          >This is a tag radio 2</yc-tag
        >
      </template>
    </yc-radio>
    <yc-radio value="3">
      <template #radio="{ checked }">
        <yc-tag
          :checked="checked"
          checkable
          >This is a tag radio 3</yc-tag
        >
      </template>
    </yc-radio>
  </yc-radio-group>

  <div :style="{ marginTop: '20px' }">
    <yc-radio-group>
      <template
        v-for="item in 2"
        :key="item">
        <yc-radio :value="item">
          <template #radio="{ checked }">
            <yc-space
              align="start"
              class="custom-radio-card"
              :class="{ 'custom-radio-card-checked': checked }">
              <div className="custom-radio-card-mask">
                <div className="custom-radio-card-mask-dot" />
              </div>
              <div>
                <div className="custom-radio-card-title">
                  radio Card {{ item }}
                </div>
                <yc-typography-text type="secondary">
                  this is a text
                </yc-typography-text>
              </div>
            </yc-space>
          </template>
        </yc-radio>
      </template>
    </yc-radio-group>
  </div>
</template>

<style scoped>
.custom-radio-card {
  padding: 10px 16px;
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
  width: 250px;
  box-sizing: border-box;
}

.custom-radio-card-mask {
  height: 14px;
  width: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid var(--color-border-2);
  box-sizing: border-box;
}

.custom-radio-card-mask-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.custom-radio-card-title {
  color: var(--color-text-1);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.custom-radio-card:hover,
.custom-radio-card-checked,
.custom-radio-card:hover .custom-radio-card-mask,
.custom-radio-card-checked .custom-radio-card-mask {
  border-color: rgb(var(--primary-6));
}

.custom-radio-card-checked {
  background-color: var(--color-primary-light-1);
}

.custom-radio-card:hover .custom-radio-card-title,
.custom-radio-card-checked .custom-radio-card-title {
  color: rgb(var(--primary-6));
}

.custom-radio-card-checked .custom-radio-card-mask-dot {
  background-color: rgb(var(--primary-6));
}
</style>
```

</details>
