# Space 间距

## 介绍

Space 组件用于设置组件之间的间距，避免组件紧贴在一起，让页面布局更加美观。

## 基础用法

### 基本使用

最简单的间距用法，默认为水平方向。

```vue
<template>
  <yc-space>
    <yc-button>按钮1</yc-button>
    <yc-button>按钮2</yc-button>
    <yc-button>按钮3</yc-button>
  </yc-space>
</template>
```

### 垂直间距

设置 `direction` 为 `vertical` 显示垂直间距。

```vue
<template>
  <yc-space direction="vertical">
    <yc-button>按钮1</yc-button>
    <yc-button>按钮2</yc-button>
    <yc-button>按钮3</yc-button>
  </yc-space>
</template>
```

### 间距大小

通过 `size` 属性设置间距大小，支持预设值和数字。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>小间距</p>
      <yc-space size="small">
        <yc-button>按钮1</yc-button>
        <yc-button>按钮2</yc-button>
        <yc-button>按钮3</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>中等间距（默认）</p>
      <yc-space size="medium">
        <yc-button>按钮1</yc-button>
        <yc-button>按钮2</yc-button>
        <yc-button>按钮3</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>大间距</p>
      <yc-space size="large">
        <yc-button>按钮1</yc-button>
        <yc-button>按钮2</yc-button>
        <yc-button>按钮3</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>自定义间距（24px）</p>
      <yc-space :size="24">
        <yc-button>按钮1</yc-button>
        <yc-button>按钮2</yc-button>
        <yc-button>按钮3</yc-button>
      </yc-space>
    </div>
  </yc-space>
</template>
```

### 对齐方式

通过 `align` 属性设置子元素的对齐方式。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>起始对齐（默认）</p>
      <yc-space align="start">
        <yc-button>短按钮</yc-button>
        <yc-button size="large">大尺寸按钮</yc-button>
        <yc-button>短按钮</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>居中对齐</p>
      <yc-space align="center">
        <yc-button>短按钮</yc-button>
        <yc-button size="large">大尺寸按钮</yc-button>
        <yc-button>短按钮</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>结束对齐</p>
      <yc-space align="end">
        <yc-button>短按钮</yc-button>
        <yc-button size="large">大尺寸按钮</yc-button>
        <yc-button>短按钮</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>基线对齐</p>
      <yc-space align="baseline">
        <yc-button>短按钮</yc-button>
        <yc-button size="large">大尺寸按钮</yc-button>
        <yc-button>短按钮</yc-button>
      </yc-space>
    </div>
  </yc-space>
</template>
```

### 自动换行

设置 `wrap` 属性允许子元素换行。

```vue
<template>
  <div style="width: 300px; border: 1px dashed #ccc; padding: 16px;">
    <yc-space wrap>
      <yc-button v-for="i in 10" :key="i">按钮{{ i }}</yc-button>
    </yc-space>
  </div>
</template>
```

### 填充模式

设置 `fill` 属性让子元素填充整个空间。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>默认模式</p>
      <yc-space>
        <yc-button>按钮1</yc-button>
        <yc-button>按钮2</yc-button>
        <yc-button>按钮3</yc-button>
      </yc-space>
    </div>
    
    <div>
      <p>填充模式</p>
      <yc-space fill>
        <yc-button>按钮1</yc-button>
        <yc-button>按钮2</yc-button>
        <yc-button>按钮3</yc-button>
      </yc-space>
    </div>
  </yc-space>
</template>
```

### 分隔符

使用 `split` 插槽添加分隔符。

```vue
<template>
  <yc-space>
    <template #split>
      <yc-divider direction="vertical" />
    </template>
    <yc-button>按钮1</yc-button>
    <yc-button>按钮2</yc-button>
    <yc-button>按钮3</yc-button>
  </yc-space>
</template>
```

### 复杂布局示例

结合不同属性创建复杂的布局。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <!-- 表单布局 -->
    <yc-card title="用户信息">
      <yc-space direction="vertical" size="medium" fill>
        <yc-space>
          <span style="width: 80px; display: inline-block;">姓名：</span>
          <yc-input placeholder="请输入姓名" />
        </yc-space>
        <yc-space>
          <span style="width: 80px; display: inline-block;">邮箱：</span>
          <yc-input placeholder="请输入邮箱" />
        </yc-space>
        <yc-space>
          <span style="width: 80px; display: inline-block;">电话：</span>
          <yc-input placeholder="请输入电话" />
        </yc-space>
        <yc-space>
          <yc-button type="primary">保存</yc-button>
          <yc-button>取消</yc-button>
        </yc-space>
      </yc-space>
    </yc-card>
    
    <!-- 操作按钮组 -->
    <yc-card title="操作栏">
      <yc-space wrap>
        <yc-button type="primary">新增</yc-button>
        <yc-button>编辑</yc-button>
        <yc-button>删除</yc-button>
        <yc-divider direction="vertical" />
        <yc-button>导出</yc-button>
        <yc-button>导入</yc-button>
        <yc-divider direction="vertical" />
        <yc-button>刷新</yc-button>
      </yc-space>
    </yc-card>
    
    <!-- 标签组 -->
    <yc-card title="标签">
      <yc-space wrap>
        <yc-tag v-for="tag in tags" :key="tag" closable>{{ tag }}</yc-tag>
      </yc-space>
    </yc-card>
  </yc-space>
</template>

<script setup>
const tags = ['Vue', 'React', 'Angular', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js']
</script>
```

## API

### Space Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| align | 对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | `'start'` |
| direction | 间距方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |
| fill | 是否让 Space 变为一个块级元素，填充整个父元素 | `boolean` | `false` |
| size | 间距大小 | `'mini' \| 'small' \| 'medium' \| 'large' \| number` | `'medium'` |

### Space Slots

| 插槽名 | 描述 |
|--------|------|
| default | 需要添加间距的元素 |
| split | 分隔符 |

## 类型定义

```typescript
export interface SpaceProps {
  align?: SpaceAlign;
  direction?: Direction;
  wrap?: boolean;
  fill?: boolean;
  size?: Size | number;
}

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
```

## 设计原则

- **视觉平衡**：通过合理的间距让页面布局更加平衡
- **一致性**：保持相同类型元素的间距一致
- **响应式**：在不同屏幕尺寸下保持良好的间距效果
- **易用性**：提供简单易用的 API，降低使用成本

## 注意事项

1. `size` 支持预设值（mini、small、medium、large）和数字
2. 在垂直模式下，`wrap` 属性无效
3. `fill` 模式下，子元素会平均分布并填充整个容器宽度
4. 使用分隔符时，分隔符会出现在每两个子元素之间
5. 对齐方式仅在交叉轴方向上生效（水平布局时影响垂直对齐，垂直布局时影响水平对齐）