# ResizeBox 调整尺寸

## 介绍

ResizeBox 调整尺寸组件允许用户通过拖拽调整容器的尺寸。

## 基础用法

```vue
<template>
  <yc-resize-box 
    :width="300" 
    :height="200"
    style="border: 1px solid #d9d9d9;"
  >
    <div style="padding: 20px;">
      <p>可调整尺寸的内容区域</p>
      <p>拖拽边框可以调整大小</p>
    </div>
  </yc-resize-box>
</template>
```

## API

### ResizeBox Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| width | 初始宽度 | `number` | `-` |
| height | 初始高度 | `number` | `-` |
| min-width | 最小宽度 | `number` | `0` |
| min-height | 最小高度 | `number` | `0` |
| max-width | 最大宽度 | `number` | `Infinity` |
| max-height | 最大高度 | `number` | `Infinity` |