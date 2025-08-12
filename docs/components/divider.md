# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割
- 对行内文本/元素进行分割
- 对列表项进行分割

## 基础用法

最简单的用法，水平分割线。

```vue
<template>
  <div>
    <p>这是一段文本内容</p>
    <YcDivider />
    <p>这是另一段文本内容</p>
  </div>
</template>
```

## 带文字的分割线

通过插槽添加分割线文字。

```vue
<template>
  <div>
    <p>这是一段文本内容</p>
    <YcDivider>分割线文字</YcDivider>
    <p>这是另一段文本内容</p>
  </div>
</template>
```

## 文字位置

通过 `orientation` 属性设置文字位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDivider orientation="left">左侧文字</YcDivider>
    <YcDivider orientation="center">居中文字</YcDivider>
    <YcDivider orientation="right">右侧文字</YcDivider>
  </YcSpace>
</template>
```

## 垂直分割线

通过 `direction` 属性设置垂直分割线。

```vue
<template>
  <div style="display: flex; align-items: center;">
    <span>文字</span>
    <YcDivider direction="vertical" />
    <span>文字</span>
    <YcDivider direction="vertical" />
    <span>文字</span>
  </div>
</template>
```

## 分割线类型

通过 `type` 属性设置分割线类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDivider type="solid">实线</YcDivider>
    <YcDivider type="dashed">虚线</YcDivider>
    <YcDivider type="dotted">点线</YcDivider>
    <YcDivider type="double">双线</YcDivider>
  </YcSpace>
</template>
```

## 分割线尺寸

通过 `size` 属性设置分割线粗细。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDivider :size="1">1px 分割线</YcDivider>
    <YcDivider :size="2">2px 分割线</YcDivider>
    <YcDivider :size="4">4px 分割线</YcDivider>
    <YcDivider :size="8">8px 分割线</YcDivider>
  </YcSpace>
</template>
```

## 自定义边距

通过 `margin` 属性自定义分割线的边距。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDivider :margin="8">小边距</YcDivider>
    <YcDivider :margin="16">中等边距</YcDivider>
    <YcDivider :margin="32">大边距</YcDivider>
    <YcDivider :margin="48">超大边距</YcDivider>
  </YcSpace>
</template>
```

## 垂直分割线边距

垂直分割线的边距会自动调整。

```vue
<template>
  <div style="display: flex; align-items: center;">
    <span>文字</span>
    <YcDivider direction="vertical" :margin="8" />
    <span>文字</span>
    <YcDivider direction="vertical" :margin="16" />
    <span>文字</span>
    <YcDivider direction="vertical" :margin="24" />
    <span>文字</span>
  </div>
</template>
```

## 自定义样式

通过插槽自定义分割线内容。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDivider>
      <YcIcon-star style="color: #f50; margin-right: 8px;" />
      重要提示
    </YcDivider>
    
    <YcDivider>
      <YcTag color="blue">标签</YcTag>
      分割线
    </YcDivider>
    
    <YcDivider>
      <YcButton size="small" type="primary">按钮</YcButton>
    </YcDivider>
  </YcSpace>
</template>
```

## 列表分割

在列表中使用分割线。

```vue
<template>
  <div>
    <div class="list-item">列表项 1</div>
    <YcDivider :margin="0" />
    <div class="list-item">列表项 2</div>
    <YcDivider :margin="0" />
    <div class="list-item">列表项 3</div>
    <YcDivider :margin="0" />
    <div class="list-item">列表项 4</div>
  </div>
</template>

<style scoped>
.list-item {
  padding: 12px 0;
}
</style>
```

## 表单分割

在表单中使用分割线。

```vue
<template>
  <div>
    <YcForm layout="vertical">
      <YcFormItem label="基本信息">
        <YcInput placeholder="请输入姓名" />
        <YcInput placeholder="请输入邮箱" />
      </YcFormItem>
      
      <YcDivider>详细信息</YcDivider>
      
      <YcFormItem label="地址信息">
        <YcInput placeholder="请输入地址" />
        <YcInput placeholder="请输入城市" />
      </YcFormItem>
    </YcForm>
  </div>
</template>
```

## 卡片分割

在卡片中使用分割线。

```vue
<template>
  <YcCard title="用户信息">
    <div style="padding: 16px 0;">
      <div>用户名：张三</div>
      <div>邮箱：zhangsan@example.com</div>
    </div>
    
    <YcDivider :margin="0" />
    
    <div style="padding: 16px 0;">
      <div>手机号：13800138000</div>
      <div>地址：北京市朝阳区</div>
    </div>
  </YcCard>
</template>
```

## 响应式分割线

结合响应式设计使用分割线。

```vue
<template>
  <div>
    <div class="content-section">
      <h3>第一部分</h3>
      <p>这是第一部分的内容...</p>
    </div>
    
    <YcDivider class="responsive-divider" />
    
    <div class="content-section">
      <h3>第二部分</h3>
      <p>这是第二部分的内容...</p>
    </div>
  </div>
</template>

<style scoped>
.content-section {
  margin: 24px 0;
}

.responsive-divider {
  /* 在小屏幕上隐藏分割线 */
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
```

## 完整示例

一个完整的分割线使用示例。

```vue
<template>
  <div class="page-content">
    <h1>页面标题</h1>
    <p>这是页面的介绍内容...</p>
    
    <YcDivider>主要内容</YcDivider>
    
    <div class="content-grid">
      <div class="content-item">
        <h3>内容块 1</h3>
        <p>这是第一个内容块...</p>
      </div>
      
      <YcDivider direction="vertical" />
      
      <div class="content-item">
        <h3>内容块 2</h3>
        <p>这是第二个内容块...</p>
      </div>
    </div>
    
    <YcDivider type="dashed">分隔区域</YcDivider>
    
    <div class="footer-content">
      <p>这是页脚内容...</p>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.content-grid {
  display: flex;
  gap: 24px;
  margin: 24px 0;
}

.content-item {
  flex: 1;
}

.footer-content {
  margin-top: 24px;
  text-align: center;
  color: #666;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 分割线方向 | `Direction` | `'horizontal'` |
| orientation | 分割线文字位置 | `Orientation` | `'center'` |
| type | 分割线类型 | `DividerType` | `'solid'` |
| size | 分割线粗细 | `number` | `1` |
| margin | 分割线边距 | `number` | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 分割线文字内容 |

### Types

```typescript
type Orientation = 'left' | 'center' | 'right';
type DividerType = 'solid' | 'dashed' | 'dotted' | 'double';
```

## 注意事项

1. 垂直分割线不支持文字内容
2. 边距会根据方向自动调整
3. 分割线类型会影响视觉效果
4. 在响应式设计中注意分割线的显示

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-divider {
  /* 分割线容器 */
}

.yc-divider-direction-horizontal {
  /* 水平分割线 */
}

.yc-divider-direction-vertical {
  /* 垂直分割线 */
}

.yc-divider-text {
  /* 分割线文字 */
}

.yc-divider-text-left {
  /* 左侧文字 */
}

.yc-divider-text-center {
  /* 居中文字 */
}

.yc-divider-text-right {
  /* 右侧文字 */
}
```
