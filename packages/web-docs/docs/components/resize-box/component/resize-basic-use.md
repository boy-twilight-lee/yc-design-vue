### 基本用法

`ResizeBox` 伸缩框组件的基础使用。通过设置 `directions`，可以指定四条边中的哪几条边可以进行伸缩。

<div class="cell-demo vp-raw">
  <div>
    <yc-resize-box
      :directions="['right', 'bottom']"
      :style="{
        width: '500px',
        minWidth: '100px',
        maxWidth: '100%',
        height: '200px',
        textAlign: 'center',
      }">
      <yc-typography-paragraph
        >We are building the future of content discovery and
        creation.</yc-typography-paragraph
      >
      <yc-divider />
      <yc-typography-paragraph>
        ByteDance's content platforms enable people to enjoy content powered by
        AI technology. We inform, entertain, and inspire people across language,
        culture and geography.
      </yc-typography-paragraph>
      <yc-divider>ByteDance</yc-divider>
      <yc-typography-paragraph
        >Yiming Zhang is the founder and CEO of
        ByteDance.</yc-typography-paragraph
      >
    </yc-resize-box>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-resize-box
      :directions="['right', 'bottom']"
      :style="{
        width: '500px',
        minWidth: '100px',
        maxWidth: '100%',
        height: '200px',
        textAlign: 'center',
      }">
      <yc-typography-paragraph
        >We are building the future of content discovery and
        creation.</yc-typography-paragraph
      >
      <yc-divider />
      <yc-typography-paragraph>
        ByteDance's content platforms enable people to enjoy content powered by
        AI technology. We inform, entertain, and inspire people across language,
        culture and geography.
      </yc-typography-paragraph>
      <yc-divider>ByteDance</yc-divider>
      <yc-typography-paragraph
        >Yiming Zhang is the founder and CEO of
        ByteDance.</yc-typography-paragraph
      >
    </yc-resize-box>
  </div>
</template>
```

</details>
