# Badge 徽标

出现在按钮、图标旁的数字或状态标记。

## 何时使用

- 需要展示新消息数量或未读消息数
- 需要展示状态标记，如处理中、成功、警告等
- 需要展示通知数量或提醒信息

## 基础用法

展示徽标数字。

```vue
<template>
  <YcBadge :count="5">
    <YcButton>消息</YcButton>
  </YcBadge>
</template>
```

## 状态徽标

通过 `status` 属性设置徽标状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcBadge status="normal" text="正常" />
    <YcBadge status="processing" text="处理中" />
    <YcBadge status="success" text="成功" />
    <YcBadge status="warning" text="警告" />
    <YcBadge status="danger" text="错误" />
  </YcSpace>
</template>
```

## 自定义颜色

通过 `color` 属性自定义徽标颜色。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcBadge color="blue" text="蓝色" />
    <YcBadge color="green" text="绿色" />
    <YcBadge color="orange" text="橙色" />
    <YcBadge color="red" text="红色" />
    <YcBadge color="#f50" text="自定义色值" />
  </YcSpace>
</template>
```

## 点状徽标

通过 `dot` 属性显示点状徽标。

```vue
<template>
  <YcBadge dot>
    <YcButton>通知</YcButton>
  </YcBadge>
</template>
```

## 自定义徽标内容

通过 `content` 插槽自定义徽标内容。

```vue
<template>
  <YcBadge :count="5">
    <YcButton>消息</YcButton>
    <template #content>
      <YcIcon-notification style="color: #f50" />
    </template>
  </YcBadge>
</template>
```

## 最大数值

通过 `maxCount` 属性设置最大显示数值。

```vue
<template>
  <YcSpace size="large">
    <YcBadge :count="99" :max-count="99">
      <YcButton>消息</YcButton>
    </YcBadge>
    <YcBadge :count="100" :max-count="99">
      <YcButton>消息</YcButton>
    </YcBadge>
    <YcBadge :count="1000" :max-count="99">
      <YcButton>消息</YcButton>
    </YcBadge>
  </YcSpace>
</template>
```

## 偏移位置

通过 `offset` 属性调整徽标位置。

```vue
<template>
  <YcSpace size="large">
    <YcBadge :count="5" :offset="[0, 0]">
      <YcButton>消息</YcButton>
    </YcBadge>
    <YcBadge :count="5" :offset="[10, 10]">
      <YcButton>消息</YcButton>
    </YcBadge>
    <YcBadge :count="5" :offset="[-10, -10]">
      <YcButton>消息</YcButton>
    </YcBadge>
  </YcSpace>
</template>
```

## 独立使用

徽标可以独立使用，不包裹任何元素。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcBadge :count="5" />
    <YcBadge status="success" text="成功" />
    <YcBadge dot />
  </YcSpace>
</template>
```

## 自定义样式

通过 `dotStyle` 属性自定义徽标样式。

```vue
<template>
  <YcBadge :count="5" :dot-style="{ backgroundColor: '#f50', color: 'white' }">
    <YcButton>消息</YcButton>
  </YcBadge>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 展示的数字，大于 maxCount 时显示为 maxCount+ | `number` | - |
| dot | 不展示数字，只有一个小红点 | `boolean` | `false` |
| dotStyle | 自定义点的样式 | `CSSProperties` | `{}` |
| maxCount | 最大值，超过最大值会显示为 maxCount+ | `number` | `99` |
| offset | 设置状态点的位置偏移 | `[number, number]` | `[0, 0]` |
| color | 自定义徽标颜色 | `string` | - |
| status | 设置徽标为状态点 | `BadgeStatus` | - |
| text | 状态点的文本 | `string` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 徽标包裹的内容 |
| content | 自定义徽标内容 |

### Types

```typescript
interface BadgeProps {
  text?: string;
  dot?: boolean;
  dotStyle?: CSSProperties;
  maxCount?: number;
  offset?: number[];
  color?: string;
  status?: BadgeStatus;
  count?: number;
}

interface BadgeSlots {
  default(): void;
  content(): void;
}

type BadgeStatus = 'normal' | 'processing' | 'success' | 'warning' | 'danger';
```

## 注意事项

1. 当 `count` 为 0 时，徽标不会显示
2. `status` 和 `color` 属性主要用于状态徽标
3. `offset` 数组的第一个值是水平偏移，第二个值是垂直偏移
4. 徽标会自动根据内容调整大小
5. 独立使用时，徽标会显示为行内元素

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-badge {
  /* 徽标容器 */
}

.yc-badge-number {
  /* 数字徽标 */
}

.yc-badge-dot {
  /* 点状徽标 */
}

.yc-badge-status {
  /* 状态徽标 */
}

.yc-badge-text {
  /* 文本徽标 */
}

.yc-badge-custom-dot {
  /* 自定义徽标 */
}
```
