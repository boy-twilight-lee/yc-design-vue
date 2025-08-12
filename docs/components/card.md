# Card 卡片

通用卡片容器，支持标题、内容、操作区域等。

## 何时使用

- 需要展示包含标题、内容、操作等信息的容器
- 需要展示图片、描述、操作按钮等组合内容
- 需要网格布局的卡片展示

## 基础用法

最简单的用法，包含标题和内容。

```vue
<template>
  <YcCard title="卡片标题">
    <p>卡片内容</p>
  </YcCard>
</template>
```

## 无边框卡片

通过 `bordered` 属性控制是否显示边框。

```vue
<template>
  <YcCard title="无边框卡片" :bordered="false">
    <p>卡片内容</p>
  </YcCard>
</template>
```

## 可悬停卡片

通过 `hoverable` 属性添加悬停效果。

```vue
<template>
  <YcCard title="可悬停卡片" hoverable>
    <p>鼠标悬停时会有阴影效果</p>
  </YcCard>
</template>
```

## 加载状态

通过 `loading` 属性显示加载状态。

```vue
<template>
  <YcCard title="加载中" :loading="true">
    <p>卡片内容</p>
  </YcCard>
</template>
```

## 卡片尺寸

通过 `size` 属性控制卡片尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCard title="默认尺寸" size="medium">
      <p>默认尺寸的卡片</p>
    </YcCard>
    <YcCard title="小尺寸" size="small">
      <p>小尺寸的卡片</p>
    </YcCard>
  </YcSpace>
</template>
```

## 自定义头部

通过 `title` 和 `extra` 插槽自定义头部内容。

```vue
<template>
  <YcCard>
    <template #title>
      <YcIcon-user style="margin-right: 8px;" />
      用户信息
    </template>
    <template #extra>
      <YcButton size="small">编辑</YcButton>
    </template>
    <p>卡片内容</p>
  </YcCard>
</template>
```

## 卡片封面

通过 `cover` 插槽添加封面图片。

```vue
<template>
  <YcCard title="带封面的卡片">
    <template #cover>
      <img src="https://via.placeholder.com/300x200" alt="封面图片" />
    </template>
    <p>卡片内容</p>
  </YcCard>
</template>
```

## 卡片操作

通过 `actions` 插槽添加操作按钮。

```vue
<template>
  <YcCard title="带操作的卡片">
    <p>卡片内容</p>
    <template #actions>
      <YcButton type="text">设置</YcButton>
      <YcButton type="text">编辑</YcButton>
      <YcButton type="text">更多</YcButton>
    </template>
  </YcCard>
</template>
```

## 卡片元信息

使用 `CardMeta` 组件展示元信息。

```vue
<template>
  <YcCard>
    <template #cover>
      <img src="https://via.placeholder.com/300x200" alt="封面图片" />
    </template>
    <YcCardMeta
      title="卡片标题"
      description="这是一段描述文字，介绍卡片的主要内容。"
    />
  </YcCard>
</template>
```

## 卡片网格

使用 `CardGrid` 组件创建网格布局。

```vue
<template>
  <YcCard title="卡片网格">
    <YcCardGrid>内容1</YcCardGrid>
    <YcCardGrid>内容2</YcCardGrid>
    <YcCardGrid>内容3</YcCardGrid>
    <YcCardGrid>内容4</YcCardGrid>
  </YcCard>
</template>
```

## 自定义样式

通过 `headerStyle` 和 `bodyStyle` 属性自定义样式。

```vue
<template>
  <YcCard
    title="自定义样式"
    :header-style="{ backgroundColor: '#f0f0f0' }"
    :body-style="{ padding: '24px' }"
  >
    <p>自定义样式的卡片</p>
  </YcCard>
</template>
```

## API

### Card Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否有边框 | `boolean` | `true` |
| loading | 是否显示加载状态 | `boolean` | `false` |
| hoverable | 是否可悬停 | `boolean` | `false` |
| size | 卡片尺寸 | `CardSize` | - |
| headerStyle | 头部样式 | `CSSProperties` | `{}` |
| bodyStyle | 内容区域样式 | `CSSProperties` | `{}` |
| title | 卡片标题 | `string` | `''` |
| extra | 额外操作区域 | `string` | `''` |

### CardMeta Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |

### CardGrid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hoverable | 是否可悬停 | `boolean` | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| actions | 卡片操作区域 |
| cover | 卡片封面 |
| extra | 额外操作区域 |
| title | 卡片标题 |
| default | 卡片内容 |

### Types

```typescript
interface CardProps {
  bordered?: boolean;
  loading?: boolean;
  hoverable?: boolean;
  size?: CardSize;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  title?: string;
  extra?: string;
}

type CardSize = 'medium' | 'small';
```

## 注意事项

1. 当使用 `CardMeta` 时，`actions` 插槽不会显示
2. `CardGrid` 会自动创建网格布局
3. 加载状态会覆盖卡片内容
4. 悬停效果需要配合 CSS 样式实现

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-card {
  /* 卡片容器 */
}

.yc-card-header {
  /* 卡片头部 */
}

.yc-card-body {
  /* 卡片内容 */
}

.yc-card-actions {
  /* 卡片操作区域 */
}

.yc-card-cover {
  /* 卡片封面 */
}
```
