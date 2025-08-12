# Grid 栅格系统

24 栅格系统。

## 何时使用

- 需要按照规则进行页面布局时
- 需要响应式布局时
- 需要精确控制元素位置和大小关系时

## 基础用法

最简单的栅格布局。

```vue
<template>
  <YcGrid>
    <YcGridItem :span="8">col-8</YcGridItem>
    <YcGridItem :span="8">col-8</YcGridItem>
    <YcGridItem :span="8">col-8</YcGridItem>
  </YcGrid>
</template>
```

## 栅格列数

通过 `cols` 属性设置栅格列数。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>12列栅格</h4>
      <YcGrid :cols="12">
        <YcGridItem :span="6">col-6</YcGridItem>
        <YcGridItem :span="6">col-6</YcGridItem>
      </YcGrid>
    </div>
    
    <div>
      <h4>24列栅格</h4>
      <YcGrid :cols="24">
        <YcGridItem :span="8">col-8</YcGridItem>
        <YcGridItem :span="8">col-8</YcGridItem>
        <YcGridItem :span="8">col-8</YcGridItem>
      </YcGrid>
    </div>
  </YcSpace>
</template>
```

## 栅格项跨度

通过 `span` 属性设置栅格项的跨度。

```vue
<template>
  <YcGrid>
    <YcGridItem :span="6">col-6</YcGridItem>
    <YcGridItem :span="6">col-6</YcGridItem>
    <YcGridItem :span="6">col-6</YcGridItem>
    <YcGridItem :span="6">col-6</YcGridItem>
  </YcGrid>
  
  <YcGrid style="margin-top: 16px;">
    <YcGridItem :span="8">col-8</YcGridItem>
    <YcGridItem :span="8">col-8</YcGridItem>
    <YcGridItem :span="8">col-8</YcGridItem>
  </YcGrid>
  
  <YcGrid style="margin-top: 16px;">
    <YcGridItem :span="12">col-12</YcGridItem>
    <YcGridItem :span="12">col-12</YcGridItem>
  </YcGrid>
</template>
```

## 栅格项偏移

通过 `offset` 属性设置栅格项的偏移量。

```vue
<template>
  <YcGrid>
    <YcGridItem :span="6" :offset="6">col-6 col-offset-6</YcGridItem>
    <YcGridItem :span="6" :offset="6">col-6 col-offset-6</YcGridItem>
  </YcGrid>
  
  <YcGrid style="margin-top: 16px;">
    <YcGridItem :span="8" :offset="8">col-8 col-offset-8</YcGridItem>
    <YcGridItem :span="8">col-8</YcGridItem>
  </YcGrid>
</template>
```

## 响应式布局

通过对象形式设置响应式属性。

```vue
<template>
  <YcGrid>
    <YcGridItem :span="{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }">
      <div class="grid-item">响应式栅格项</div>
    </YcGridItem>
    <YcGridItem :span="{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }">
      <div class="grid-item">响应式栅格项</div>
    </YcGridItem>
    <YcGridItem :span="{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }">
      <div class="grid-item">响应式栅格项</div>
    </YcGridItem>
    <YcGridItem :span="{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }">
      <div class="grid-item">响应式栅格项</div>
    </YcGridItem>
    <YcGridItem :span="{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }">
      <div class="grid-item">响应式栅格项</div>
    </YcGridItem>
    <YcGridItem :span="{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }">
      <div class="grid-item">响应式栅格项</div>
    </YcGridItem>
  </YcGrid>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 栅格间距

通过 `rowGap` 和 `colGap` 属性设置栅格间距。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无间距</h4>
      <YcGrid :row-gap="0" :col-gap="0">
        <YcGridItem :span="8">
          <div class="grid-item">col-8</div>
        </YcGridItem>
        <YcGridItem :span="8">
          <div class="grid-item">col-8</div>
        </YcGridItem>
        <YcGridItem :span="8">
          <div class="grid-item">col-8</div>
        </YcGridItem>
      </YcGrid>
    </div>
    
    <div>
      <h4>有间距</h4>
      <YcGrid :row-gap="16" :col-gap="16">
        <YcGridItem :span="8">
          <div class="grid-item">col-8</div>
        </YcGridItem>
        <YcGridItem :span="8">
          <div class="grid-item">col-8</div>
        </YcGridItem>
        <YcGridItem :span="8">
          <div class="grid-item">col-8</div>
        </YcGridItem>
      </YcGrid>
    </div>
  </YcSpace>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 响应式间距

通过对象形式设置响应式间距。

```vue
<template>
  <YcGrid 
    :row-gap="{ xs: 8, sm: 12, md: 16, lg: 20, xl: 24 }"
    :col-gap="{ xs: 8, sm: 12, md: 16, lg: 20, xl: 24 }"
  >
    <YcGridItem :span="8">
      <div class="grid-item">col-8</div>
    </YcGridItem>
    <YcGridItem :span="8">
      <div class="grid-item">col-8</div>
    </YcGridItem>
    <YcGridItem :span="8">
      <div class="grid-item">col-8</div>
    </YcGridItem>
  </YcGrid>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 栅格行

使用 `GridRow` 和 `GridCol` 组件进行更灵活的布局。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcGridRow :gutter="16">
      <YcGridCol :span="8">
        <div class="grid-item">col-8</div>
      </YcGridCol>
      <YcGridCol :span="8">
        <div class="grid-item">col-8</div>
      </YcGridCol>
      <YcGridCol :span="8">
        <div class="grid-item">col-8</div>
      </YcGridCol>
    </YcGridRow>
    
    <YcGridRow :gutter="16">
      <YcGridCol :span="6">
        <div class="grid-item">col-6</div>
      </YcGridCol>
      <YcGridCol :span="6">
        <div class="grid-item">col-6</div>
      </YcGridCol>
      <YcGridCol :span="6">
        <div class="grid-item">col-6</div>
      </YcGridCol>
      <YcGridCol :span="6">
        <div class="grid-item">col-6</div>
      </YcGridCol>
    </YcGridRow>
  </YcSpace>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 栅格行对齐

通过 `justify` 属性设置栅格行的水平对齐方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>start (默认)</h4>
      <YcGridRow :gutter="16" justify="start">
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>center</h4>
      <YcGridRow :gutter="16" justify="center">
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>end</h4>
      <YcGridRow :gutter="16" justify="end">
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>space-between</h4>
      <YcGridRow :gutter="16" justify="space-between">
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>space-around</h4>
      <YcGridRow :gutter="16" justify="space-around">
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
        <YcGridCol :span="6">
          <div class="grid-item">col-6</div>
        </YcGridCol>
      </YcGridRow>
    </div>
  </YcSpace>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 栅格行垂直对齐

通过 `align` 属性设置栅格行的垂直对齐方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>start</h4>
      <YcGridRow :gutter="16" align="start" style="height: 100px;">
        <YcGridCol :span="8">
          <div class="grid-item">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 60px;">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 80px;">col-8</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>center</h4>
      <YcGridRow :gutter="16" align="center" style="height: 100px;">
        <YcGridCol :span="8">
          <div class="grid-item">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 60px;">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 80px;">col-8</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>end</h4>
      <YcGridRow :gutter="16" align="end" style="height: 100px;">
        <YcGridCol :span="8">
          <div class="grid-item">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 60px;">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 80px;">col-8</div>
        </YcGridCol>
      </YcGridRow>
    </div>
    
    <div>
      <h4>stretch (默认)</h4>
      <YcGridRow :gutter="16" align="stretch" style="height: 100px;">
        <YcGridCol :span="8">
          <div class="grid-item">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 60px;">col-8</div>
        </YcGridCol>
        <YcGridCol :span="8">
          <div class="grid-item" style="height: 80px;">col-8</div>
        </YcGridCol>
      </YcGridRow>
    </div>
  </YcSpace>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 栅格列排序

通过 `order` 属性设置栅格列的顺序。

```vue
<template>
  <YcGridRow :gutter="16">
    <YcGridCol :span="8" :order="3">
      <div class="grid-item order-3">order-3</div>
    </YcGridCol>
    <YcGridCol :span="8" :order="1">
      <div class="grid-item order-1">order-1</div>
    </YcGridCol>
    <YcGridCol :span="8" :order="2">
      <div class="grid-item order-2">order-2</div>
    </YcGridCol>
  </YcGridRow>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}

.order-1 { background: #e6f7ff; }
.order-2 { background: #f6ffed; }
.order-3 { background: #fff7e6; }
</style>
```

## 栅格列弹性

通过 `flex` 属性设置栅格列的弹性。

```vue
<template>
  <YcGridRow :gutter="16">
    <YcGridCol :span="8" flex="auto">
      <div class="grid-item">flex: auto</div>
    </YcGridCol>
    <YcGridCol :span="8" flex="1">
      <div class="grid-item">flex: 1</div>
    </YcGridCol>
    <YcGridCol :span="8" flex="2">
      <div class="grid-item">flex: 2</div>
    </YcGridCol>
  </YcGridRow>
</template>

<style scoped>
.grid-item {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 完整示例

一个完整的栅格布局示例。

```vue
<template>
  <div class="page">
    <h2>页面布局示例</h2>
    
    <!-- 头部 -->
    <YcGridRow :gutter="16" style="margin-bottom: 16px;">
      <YcGridCol :span="24">
        <div class="header">页面头部</div>
      </YcGridCol>
    </YcGridRow>
    
    <!-- 主体内容 -->
    <YcGridRow :gutter="16" style="margin-bottom: 16px;">
      <!-- 侧边栏 -->
      <YcGridCol :span="{ xs: 24, md: 6 }">
        <div class="sidebar">侧边栏</div>
      </YcGridCol>
      
      <!-- 主内容区 -->
      <YcGridCol :span="{ xs: 24, md: 18 }">
        <div class="main-content">
          <h3>主内容区</h3>
          
          <!-- 内容卡片 -->
          <YcGrid :cols="12" :row-gap="16" :col-gap="16">
            <YcGridItem :span="{ xs: 12, sm: 6, md: 4 }">
              <div class="card">卡片 1</div>
            </YcGridItem>
            <YcGridItem :span="{ xs: 12, sm: 6, md: 4 }">
              <div class="card">卡片 2</div>
            </YcGridItem>
            <YcGridItem :span="{ xs: 12, sm: 6, md: 4 }">
              <div class="card">卡片 3</div>
            </YcGridItem>
            <YcGridItem :span="{ xs: 12, sm: 6, md: 4 }">
              <div class="card">卡片 4</div>
            </YcGridItem>
            <YcGridItem :span="{ xs: 12, sm: 6, md: 4 }">
              <div class="card">卡片 5</div>
            </YcGridItem>
            <YcGridItem :span="{ xs: 12, sm: 6, md: 4 }">
              <div class="card">卡片 6</div>
            </YcGridItem>
          </YcGrid>
        </div>
      </YcGridCol>
    </YcGridRow>
    
    <!-- 底部 -->
    <YcGridRow :gutter="16">
      <YcGridCol :span="24">
        <div class="footer">页面底部</div>
      </YcGridCol>
    </YcGridRow>
  </div>
</template>

<style scoped>
.page {
  padding: 24px;
}

.header {
  background: #1890ff;
  color: white;
  padding: 16px;
  text-align: center;
  border-radius: 6px;
}

.sidebar {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 6px;
  height: 200px;
}

.main-content {
  background: #fafafa;
  padding: 16px;
  border-radius: 6px;
}

.card {
  background: white;
  padding: 16px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  background: #f0f0f0;
  padding: 16px;
  text-align: center;
  border-radius: 6px;
}
</style>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cols | 栅格列数 | `number \| ResponsiveValue` | `24` |
| rowGap | 行间距 | `number \| ResponsiveValue` | `0` |
| colGap | 列间距 | `number \| ResponsiveValue` | `0` |
| collapsed | 是否折叠 | `boolean` | `false` |
| collapsedRows | 折叠行数 | `number` | `1` |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格项跨度 | `number \| ResponsiveValue` | - |
| offset | 栅格项偏移量 | `number \| ResponsiveValue` | - |
| suffix | 是否为后缀 | `boolean` | - |

### GridRow Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间距 | `Gutter \| [Gutter, Gutter]` | - |
| justify | 水平对齐方式 | `GridRowJustify` | - |
| align | 垂直对齐方式 | `GridRowAlign` | - |
| div | 是否渲染为div | `boolean` | - |
| wrap | 是否换行 | `boolean` | - |

### GridCol Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格列跨度 | `number \| ResponsiveValue` | - |
| offset | 栅格列偏移量 | `number \| ResponsiveValue` | - |
| order | 栅格列顺序 | `number \| ResponsiveValue` | - |
| flex | 栅格列弹性 | `GridColFlex \| ResponsiveValue` | - |

### Types

```typescript
type ResponsiveValue<T = number | string> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
};

type GridRowJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between';
type GridRowAlign = 'start' | 'center' | 'end' | 'stretch';
type GridColFlex = number | string | 'initial' | 'auto' | 'none';
type Gutter = number | ResponsiveValue;
```

## 注意事项

1. 栅格系统基于24列设计，可以灵活组合
2. 响应式属性支持断点设置
3. 间距可以通过对象形式设置响应式值
4. 栅格行和栅格列提供了更灵活的布局控制

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-grid {
  /* 栅格容器 */
}

.yc-grid-item {
  /* 栅格项 */
}

.yc-grid-row {
  /* 栅格行 */
}

.yc-grid-col {
  /* 栅格列 */
}
```
