### 组合按钮

通过 `<yc-button-group>` 属性 组件使按钮以组合方式出现。可用在同级多项操作中。

<div class='cell-demo vp-raw'>
  <yc-space direction="vertical">
    <yc-button-group>
      <yc-button>Publish</yc-button>
      <yc-button>
        <template #icon>
          <icon-down />
        </template>
      </yc-button>
    </yc-button-group>
    <yc-button-group>
      <yc-button>Publish</yc-button>
      <yc-button>
        <template #icon>
          <icon-more />
        </template>
      </yc-button>
    </yc-button-group>
    <yc-button-group>
      <yc-button type="primary">
        <icon-left />
        Prev
      </yc-button>
      <yc-button type="primary">
        Next
        <icon-right />
      </yc-button>
    </yc-button-group>
    <yc-space size="large">
      <yc-button-group type="primary">
        <yc-button> copy </yc-button>
        <yc-button> cut </yc-button>
        <yc-button> find </yc-button>
      </yc-button-group>
      <yc-button-group type="primary" status="warning">
        <yc-button> <template #icon><icon-heart-fill /></template> </yc-button>
        <yc-button> <template #icon><icon-star-fill /></template> </yc-button>
        <yc-button> <template #icon><icon-thumb-up-fill /></template> </yc-button>
      </yc-button-group>
      <yc-button-group size="small" disabled>
        <yc-button> prev </yc-button>
        <yc-button> next </yc-button>
      </yc-button-group>
    </yc-space>
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
  <yc-space direction="vertical">
    <yc-button-group>
      <yc-button>Publish</yc-button>
      <yc-button>
        <template #icon>
          <icon-down />
        </template>
      </yc-button>
    </yc-button-group>
    <yc-button-group>
      <yc-button>Publish</yc-button>
      <yc-button>
        <template #icon>
          <icon-more />
        </template>
      </yc-button>
    </yc-button-group>
    <yc-button-group>
      <yc-button type="primary">
        <icon-left />
        Prev
      </yc-button>
      <yc-button type="primary">
        Next
        <icon-right />
      </yc-button>
    </yc-button-group>
    <yc-space size="large">
      <yc-button-group type="primary">
        <yc-button> copy </yc-button>
        <yc-button> cut </yc-button>
        <yc-button> find </yc-button>
      </yc-button-group>
      <yc-button-group
        type="primary"
        status="warning">
        <yc-button>
          <template #icon><icon-heart-fill /></template>
        </yc-button>
        <yc-button>
          <template #icon><icon-star-fill /></template>
        </yc-button>
        <yc-button>
          <template #icon><icon-thumb-up-fill /></template>
        </yc-button>
      </yc-button-group>
      <yc-button-group
        size="small"
        disabled>
        <yc-button> prev </yc-button>
        <yc-button> next </yc-button>
      </yc-button-group>
    </yc-space>
  </yc-space>
</template>
```

</details>
