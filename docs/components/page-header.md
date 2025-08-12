# PageHeader 页头

## 介绍

PageHeader 页头组件用于声明页面的主题，包含了用户所关注的最重要的信息，使用户快速理解当前页面是什么以及它的功能。

## 基础用法

```vue
<template>
  <yc-page-header 
    title="页面标题" 
    subtitle="页面副标题"
    @back="handleBack"
  />
</template>

<script setup>
const handleBack = () => {
  console.log('返回上一页')
}
</script>
```

## API

### PageHeader Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| title | 标题 | `string` | `-` |
| subtitle | 副标题 | `string` | `-` |
| show-back | 是否显示返回按钮 | `boolean` | `true` |

### PageHeader Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| back | 点击返回按钮时触发 | `-` |