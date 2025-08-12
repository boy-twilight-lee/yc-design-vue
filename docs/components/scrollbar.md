# Scrollbar 滚动条

## 介绍

Scrollbar 滚动条组件提供了美观的自定义滚动条，替代浏览器默认滚动条。

## 基础用法

```vue
<template>
  <yc-scrollbar height="200px">
    <div style="height: 400px; padding: 20px;">
      <p v-for="i in 20" :key="i">这是第 {{ i }} 行内容</p>
    </div>
  </yc-scrollbar>  
</template>
```

## API

### Scrollbar Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| height | 容器高度 | `string \| number` | `-` |
| max-height | 最大高度 | `string \| number` | `-` |
| native | 是否使用原生滚动条 | `boolean` | `false` |