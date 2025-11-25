### 更灵活的内容展示

使用 `Card.Meta` 支持更加灵活的内容（封面、头像、 标题、描述信息）

<div class="cell-demo vp-raw">
  <yc-card hoverable :style="{ width: '360px' }">
    <template #cover>
      <div
        :style="{
          height: '204px',
          overflow: 'hidden',
        }"
      >
        <img
          :style="{ width: '100%', transform: 'translateY(-20px)' }"
          alt="dessert"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
        />
      </div>
    </template>
    <yc-card-meta title="Card Title">
      <template #description>
        Card content <br />
        Card content
      </template>
    </yc-card-meta>
  </yc-card>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-card
    hoverable
    :style="{ width: '360px' }">
    <template #cover>
      <div
        :style="{
          height: '204px',
          overflow: 'hidden',
        }">
        <img
          :style="{ width: '100%', transform: 'translateY(-20px)' }"
          alt="dessert"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp" />
      </div>
    </template>
    <yc-card-meta title="Card Title">
      <template #description>
        Card content <br />
        Card content
      </template>
    </yc-card-meta>
  </yc-card>
</template>
```

</details>
