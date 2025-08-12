# OverflowList 溢出列表

## 介绍

OverflowList 溢出列表组件当列表项超出容器宽度时，自动隐藏多余项目并显示省略标识。

## 基础用法

```vue
<template>
  <yc-overflow-list :items="items" />
</template>

<script setup>
const items = ref(['项目1', '项目2', '项目3', '项目4', '项目5'])
</script>
```

## API

### OverflowList Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| items | 列表项 | `Array` | `[]` |
| max-count | 最大显示数量 | `number` | `-` |