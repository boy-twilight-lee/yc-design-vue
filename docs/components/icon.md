# Icon 图标

语义化的矢量图标。

## 何时使用

- 需要展示图标时
- 需要自定义图标时
- 需要图标动画效果时

## 基础用法

最简单的用法，展示图标。

```vue
<template>
  <YcIcon type="home" />
</template>
```

## 图标类型

通过 `type` 属性指定图标类型。

```vue
<template>
  <YcSpace>
    <YcIcon type="home" />
    <YcIcon type="user" />
    <YcIcon type="setting" />
    <YcIcon type="search" />
    <YcIcon type="heart" />
    <YcIcon type="star" />
  </YcSpace>
</template>
```

## 图标尺寸

通过 `size` 属性设置图标尺寸。

```vue
<template>
  <YcSpace align="center">
    <YcIcon type="home" :size="16" />
    <YcIcon type="home" :size="24" />
    <YcIcon type="home" :size="32" />
    <YcIcon type="home" :size="48" />
    <YcIcon type="home" :size="64" />
  </YcSpace>
</template>
```

## 响应式尺寸

通过数组形式设置响应式尺寸。

```vue
<template>
  <YcIcon type="home" :size="[24, 32]" />
</template>
```

## 图标旋转

通过 `rotate` 属性设置图标旋转角度。

```vue
<template>
  <YcSpace>
    <YcIcon type="arrow-right" :rotate="0" />
    <YcIcon type="arrow-right" :rotate="90" />
    <YcIcon type="arrow-right" :rotate="180" />
    <YcIcon type="arrow-right" :rotate="270" />
  </YcSpace>
</template>
```

## 旋转动画

通过 `spin` 属性启用旋转动画。

```vue
<template>
  <YcSpace>
    <YcIcon type="loading" :spin="true" />
    <YcIcon type="refresh" :spin="true" />
    <YcIcon type="sync" :spin="true" />
  </YcSpace>
</template>
```

## 自定义图标

通过插槽自定义图标内容。

```vue
<template>
  <YcIcon :size="32">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  </YcIcon>
</template>
```

## 图标颜色

通过CSS设置图标颜色。

```vue
<template>
  <YcSpace>
    <YcIcon type="heart" style="color: #ff4d4f;" />
    <YcIcon type="star" style="color: #faad14;" />
    <YcIcon type="check" style="color: #52c41a;" />
    <YcIcon type="info" style="color: #1890ff;" />
    <YcIcon type="warning" style="color: #fa8c16;" />
  </YcSpace>
</template>
```

## 图标组合

组合多个图标创建复杂图标。

```vue
<template>
  <div class="icon-combination">
    <YcIcon type="play" :size="16" style="color: white;" />
    <YcIcon type="circle" :size="32" style="color: #1890ff;" />
  </div>
</template>

<style scoped>
.icon-combination {
  position: relative;
  display: inline-block;
}

.icon-combination .yc-icon:first-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
```

## 图标按钮

将图标作为按钮使用。

```vue
<template>
  <YcSpace>
    <YcButton type="text" size="small">
      <YcIcon type="edit" style="margin-right: 4px;" />
      编辑
    </YcButton>
    
    <YcButton type="text" size="small">
      <YcIcon type="delete" style="margin-right: 4px;" />
      删除
    </YcButton>
    
    <YcButton type="text" size="small">
      <YcIcon type="eye" style="margin-right: 4px;" />
      查看
    </YcButton>
  </YcSpace>
</template>
```

## 图标链接

将图标作为链接使用。

```vue
<template>
  <YcSpace>
    <a href="#" class="icon-link">
      <YcIcon type="github" />
      <span>GitHub</span>
    </a>
    
    <a href="#" class="icon-link">
      <YcIcon type="twitter" />
      <span>Twitter</span>
    </a>
    
    <a href="#" class="icon-link">
      <YcIcon type="linkedin" />
      <span>LinkedIn</span>
    </a>
  </YcSpace>
</template>

<style scoped>
.icon-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  text-decoration: none;
}

.icon-link:hover {
  color: #1890ff;
}
</style>
```

## 图标状态

通过不同的图标表示不同的状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div class="status-item">
      <YcIcon type="check-circle" style="color: #52c41a;" />
      <span>成功</span>
    </div>
    
    <div class="status-item">
      <YcIcon type="info-circle" style="color: #1890ff;" />
      <span>信息</span>
    </div>
    
    <div class="status-item">
      <YcIcon type="warning" style="color: #faad14;" />
      <span>警告</span>
    </div>
    
    <div class="status-item">
      <YcIcon type="close-circle" style="color: #ff4d4f;" />
      <span>错误</span>
    </div>
  </YcSpace>
</template>

<style scoped>
.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
```

## 图标加载

使用旋转的加载图标。

```vue
<template>
  <YcSpace>
    <YcIcon type="loading" :spin="true" />
    <span>加载中...</span>
  </YcSpace>
</template>
```

## 完整示例

一个完整的图标使用示例。

```vue
<template>
  <div class="page">
    <h2>图标使用示例</h2>
    
    <div class="section">
      <h3>基础图标</h3>
      <YcSpace wrap>
        <YcIcon type="home" />
        <YcIcon type="user" />
        <YcIcon type="setting" />
        <YcIcon type="search" />
        <YcIcon type="heart" />
        <YcIcon type="star" />
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>不同尺寸</h3>
      <YcSpace align="center">
        <YcIcon type="home" :size="16" />
        <YcIcon type="home" :size="24" />
        <YcIcon type="home" :size="32" />
        <YcIcon type="home" :size="48" />
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>图标旋转</h3>
      <YcSpace>
        <YcIcon type="arrow-right" :rotate="0" />
        <YcIcon type="arrow-right" :rotate="90" />
        <YcIcon type="arrow-right" :rotate="180" />
        <YcIcon type="arrow-right" :rotate="270" />
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>旋转动画</h3>
      <YcSpace>
        <YcIcon type="loading" :spin="true" />
        <YcIcon type="refresh" :spin="true" />
        <YcIcon type="sync" :spin="true" />
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>彩色图标</h3>
      <YcSpace>
        <YcIcon type="heart" style="color: #ff4d4f;" />
        <YcIcon type="star" style="color: #faad14;" />
        <YcIcon type="check" style="color: #52c41a;" />
        <YcIcon type="info" style="color: #1890ff;" />
      </YcSpace>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 24px;
}

.section {
  margin-bottom: 24px;
}

.section h3 {
  margin-bottom: 16px;
  color: #333;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 图标类型 | `string` | - |
| size | 图标尺寸 | `number \| string \| number[]` | `'1em'` |
| rotate | 旋转角度 | `number` | - |
| spin | 是否旋转 | `boolean` | `false` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义图标内容 |

## 注意事项

1. 图标组件支持SVG图标和自定义图标
2. 尺寸可以通过数字、字符串或数组设置
3. 旋转角度以度为单位
4. 旋转动画适用于加载状态图标

## 样式定制

组件提供了样式类，可以通过 CSS 进行定制：

```css
.yc-icon {
  /* 图标容器 */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## 图标库

组件库内置了丰富的图标，包括：

- **导航图标**：home, user, setting, search等
- **操作图标**：edit, delete, copy, paste等
- **状态图标**：check, close, warning, info等
- **箭头图标**：arrow-up, arrow-down, arrow-left, arrow-right等
- **媒体图标**：play, pause, stop, volume等
- **社交图标**：github, twitter, linkedin等

通过合理使用图标，可以提升用户界面的美观性和可用性。
