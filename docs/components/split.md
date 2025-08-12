# Split 分割面板

## 介绍

Split 分割面板组件可以将一个区域分割为多个可调整尺寸的面板。

## 基础用法

```vue
<template>
  <yc-split style="height: 300px;">
    <template #first>
      <div style="padding: 20px; background: #f5f5f5;">
        左侧面板
      </div>
    </template>
    <template #second>
      <div style="padding: 20px; background: #fafafa;">
        右侧面板
      </div>
    </template>
  </yc-split>
</template>
```

### 垂直分割

```vue
<template>
  <yc-split direction="vertical" style="height: 300px;">
    <template #first>
      <div style="padding: 20px; background: #f5f5f5;">
        上方面板
      </div>
    </template>
    <template #second>
      <div style="padding: 20px; background: #fafafa;">
        下方面板
      </div>
    </template>
  </yc-split>
</template>
```

## API

### Split Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| direction | 分割方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 第一个面板的尺寸 | `number \| string` | `0.5` |
| min | 第一个面板的最小尺寸 | `number \| string` | `0` |
| max | 第一个面板的最大尺寸 | `number \| string` | `1` |