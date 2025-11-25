### 弹出位置

`popconfirm` 支持 12 个不同的方位。分别为：`上左` `上` `上右` `下左` `下` `下右` `左上` `左` `左下` `右上` `右` `右下`。

<div class="cell-demo vp-raw">
  <div :style="{position: 'relative', width: '440px', height: '280px'}">
    <yc-popconfirm content="This is a Popconfirm" position="tl">
      <yc-button class="button" :style="{position: 'absolute',top:'0',left:'70px'}">TL</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="top">
      <yc-button class="button" :style="{position: 'absolute',top:'0',left:'180px'}">TOP</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="tr">
      <yc-button class="button" :style="{position: 'absolute',top:'0',left:'290px'}">TR</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="bl">
      <yc-button class="button" :style="{position: 'absolute',top:'240px',left:'70px'}">BL</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="bottom">
      <yc-button class="button" :style="{position: 'absolute',top:'240px',left:'180px'}">BOTTOM</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="br">
      <yc-button class="button" :style="{position: 'absolute',top:'240px',left:'290px'}">BR</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="lt">
      <yc-button class="button" :style="{position: 'absolute',top:'60px',left:'10px'}">LT</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="left">
      <yc-button class="button" :style="{position: 'absolute',top:'120px',left:'10px'}">LEFT</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="lb">
      <yc-button class="button" :style="{position: 'absolute',top:'180px',left:'10px'}">LB</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="rt">
      <yc-button class="button" :style="{position: 'absolute',top:'60px',left:'350px'}">RT</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="right">
      <yc-button class="button" :style="{position: 'absolute',top:'120px',left:'350px'}">RIGHT</yc-button>
    </yc-popconfirm>
    <yc-popconfirm content="This is a Popconfirm" position="rb">
      <yc-button class="button" :style="{position: 'absolute',top:'180px',left:'350px'}">RB</yc-button>
    </yc-popconfirm>
  </div>
</div>

<style scoped lang="less">
.button{
  width: 100px;
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
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <yc-popconfirm
      content="This is a Popconfirm"
      position="tl">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '70px' }"
        >TL</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="top">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '180px' }"
        >TOP</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="tr">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '0', left: '290px' }"
        >TR</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="bl">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '70px' }"
        >BL</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="bottom">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '180px' }"
        >BOTTOM</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="br">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '240px', left: '290px' }"
        >BR</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="lt">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '60px', left: '10px' }"
        >LT</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="left">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '120px', left: '10px' }"
        >LEFT</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="lb">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '180px', left: '10px' }"
        >LB</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="rt">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '60px', left: '350px' }"
        >RT</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="right">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '120px', left: '350px' }"
        >RIGHT</yc-button
      >
    </yc-popconfirm>
    <yc-popconfirm
      content="This is a Popconfirm"
      position="rb">
      <yc-button
        class="button"
        :style="{ position: 'absolute', top: '180px', left: '350px' }"
        >RB</yc-button
      >
    </yc-popconfirm>
  </div>
</template>

<style scoped lang="less">
.button {
  width: 100px;
}
</style>
```

</details>
