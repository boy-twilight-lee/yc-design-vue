### 基本用法

对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。

<div class="cell-demo vp-raw">
  <div class="divider-demo">
    <p>A design is a plan or specification for the construction of an object.</p>
    <yc-divider />
    <p>A design is a plan or specification for the construction of an object.</p>
    <yc-divider dashed />
    <p>A design is a plan or specification for the construction of an object.</p>
    <yc-divider :size="2" style="border-bottom-style: dotted" />
    <p>A design is a plan or specification for the construction of an object.</p>
  </div>
  <div class="divider-demo" style="marginTop: 48px">
    <div class="flex-box">
      <span class="avatar"><IconImage style="width:16px;height:16px;"/></span>
      <div class="content">
        <yc-typography-title :heading="6">Image</yc-typography-title>
        May 4, 2010
      </div>
    </div>
    <yc-divider class="half-divider" />
    <div class="flex-box">
      <span class="avatar"><IconUser style="width:16px;height:16px;"/></span>
      <div class="content">
        <yc-typography-title :heading="6">Avatar</yc-typography-title>
        May 4, 2010
      </div>
    </div>
    <yc-divider class="half-divider" />
    <div class="flex-box">
      <span class="avatar"><IconPen style="width:16px;height:16px;" /></span>
      <div class="content">
        <yc-typography-title :heading="6">Icon</yc-typography-title>
        May 4, 2010
      </div>
    </div>
  </div>
</div>

<style scoped>
.divider-demo {
  box-sizing: border-box;
  width: 560px;
  padding: 24px;
  border: 30px solid rgb(var(--gray-2));
}
.half-divider {
  left: 55px;
  width: calc(100% - 55px);
  min-width: auto;
  margin: 16px 0;
}
.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-box .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  color: var(--color-text-2);
  font-size: 16px;
  background-color: var(--color-fill-3);
  border-radius: 50%;
}
.flex-box .content {
  flex: 1;
  color: var(--color-text-2);
  font-size: 12px;
  line-height: 20px;
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
  <div class="cell-demo vp-raw">
    <div class="divider-demo">
      <p>
        A design is a plan or specification for the construction of an object.
      </p>
      <yc-divider />
      <p>
        A design is a plan or specification for the construction of an object.
      </p>
      <yc-divider dashed />
      <p>
        A design is a plan or specification for the construction of an object.
      </p>
      <yc-divider
        :size="2"
        style="border-bottom-style: dotted" />
      <p>
        A design is a plan or specification for the construction of an object.
      </p>
    </div>
    <div
      class="divider-demo"
      style="marginTop: 48px">
      <div class="flex-box">
        <span class="avatar"
          ><IconImage style="width:16px;height:16px;"
        /></span>
        <div class="content">
          <yc-typography-title :heading="6">Image</yc-typography-title>
          May 4, 2010
        </div>
      </div>
      <yc-divider class="half-divider" />
      <div class="flex-box">
        <span class="avatar"><IconUser style="width:16px;height:16px;" /></span>
        <div class="content">
          <yc-typography-title :heading="6">Avatar</yc-typography-title>
          May 4, 2010
        </div>
      </div>
      <yc-divider class="half-divider" />
      <div class="flex-box">
        <span class="avatar"><IconPen style="width:16px;height:16px;" /></span>
        <div class="content">
          <yc-typography-title :heading="6">Icon</yc-typography-title>
          May 4, 2010
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider-demo {
  box-sizing: border-box;
  width: 560px;
  padding: 24px;
  border: 30px solid rgb(var(--gray-2));
}
.half-divider {
  left: 55px;
  width: calc(100% - 55px);
  min-width: auto;
  margin: 16px 0;
}
.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-box .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  color: var(--color-text-2);
  font-size: 16px;
  background-color: var(--color-fill-3);
  border-radius: 50%;
}
.flex-box .content {
  flex: 1;
  color: var(--color-text-2);
  font-size: 12px;
  line-height: 20px;
}
</style>
```

</details>
