# Alert 警告

用于页面中展示重要的提示信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时
- 当某个操作需要用户确认，而这个操作又比较危险时
- 当系统出现错误时，需要向用户显示错误信息

## 基础用法

最简单的用法，适用于简短的警告提示。

```vue
<template>
  <YcAlert>这是一条默认的警告信息</YcAlert>
</template>
```

## 不同类型

Alert 组件提供了四种类型：`success`、`warning`、`info`、`error`。

```vue
<template>
  <YcAlert type="success">这是一条成功信息</YcAlert>
  <YcAlert type="warning">这是一条警告信息</YcAlert>
  <YcAlert type="info">这是一条信息</YcAlert>
  <YcAlert type="error">这是一条错误信息</YcAlert>
</template>
```

## 带标题

通过 `title` 属性或 `title` 插槽设置标题。

```vue
<template>
  <YcAlert title="带标题的警告">
    这是一条带标题的警告信息
  </YcAlert>
  
  <YcAlert>
    <template #title>
      <span style="color: #1890ff;">自定义标题样式</span>
    </template>
    这是一条自定义标题样式的警告信息
  </YcAlert>
</template>
```

## 可关闭

通过 `closable` 属性设置是否可关闭。

```vue
<template>
  <YcAlert closable>
    这是一条可关闭的警告信息
  </YcAlert>
</template>
```

## 不显示图标

通过 `showIcon` 属性设置是否显示图标。

```vue
<template>
  <YcAlert :show-icon="false">
    这是一条不显示图标的警告信息
  </YcAlert>
</template>
```

## 居中显示

通过 `center` 属性设置内容居中显示。

```vue
<template>
  <YcAlert center>
    这是一条居中显示的警告信息
  </YcAlert>
</template>
```

## 横幅样式

通过 `banner` 属性设置横幅样式，通常用于页面顶部。

```vue
<template>
  <YcAlert banner>
    这是一条横幅样式的警告信息
  </YcAlert>
</template>
```

## 自定义图标

通过 `icon` 插槽自定义图标。

```vue
<template>
  <YcAlert>
    <template #icon>
      <YcIcon name="star" />
    </template>
    这是一条自定义图标的警告信息
  </YcAlert>
</template>
```

## 自定义操作

通过 `action` 插槽添加操作按钮。

```vue
<template>
  <YcAlert>
    这是一条带操作按钮的警告信息
    <template #action>
      <YcButton size="small" type="primary">查看详情</YcButton>
    </template>
  </YcAlert>
</template>
```

## 自定义关闭按钮

通过 `close-element` 插槽自定义关闭按钮。

```vue
<template>
  <YcAlert closable>
    这是一条自定义关闭按钮的警告信息
    <template #close-element>
      <YcButton size="small">关闭</YcButton>
    </template>
  </YcAlert>
</template>
```

## 监听关闭事件

通过 `@close` 和 `@after-close` 事件监听关闭操作。

```vue
<template>
  <YcAlert closable @close="onClose" @after-close="onAfterClose">
    这是一条可关闭的警告信息
  </YcAlert>
</template>

<script setup>
const onClose = (ev) => {
  console.log('关闭按钮被点击', ev);
};

const onAfterClose = () => {
  console.log('警告框已关闭');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 警告类型 | `'warning' \| 'success' \| 'info' \| 'error' \| 'normal'` | `'info'` |
| showIcon | 是否显示图标 | `boolean` | `true` |
| closable | 是否可关闭 | `boolean` | `false` |
| title | 警告标题 | `string` | - |
| banner | 是否显示为横幅样式 | `boolean` | `false` |
| center | 是否居中显示 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发 | `(ev: MouseEvent)` |
| after-close | 关闭动画结束后触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 警告内容 |
| icon | 自定义图标 |
| title | 自定义标题 |
| action | 自定义操作区域 |
| close-element | 自定义关闭按钮 |

### Types

```typescript
interface AlertProps {
  type?: AlertType;
  showIcon?: boolean;
  closable?: boolean;
  title?: string;
  banner?: boolean;
  center?: boolean;
}

interface AlertEmits {
  (e: 'close', ev: MouseEvent): void;
  (e: 'after-close'): void;
}

interface AlertSlots {
  default(): void;
  icon(): void;
  title(): void;
  action(): void;
  'close-element'(): void;
}

type AlertType = 'warning' | 'success' | 'info' | 'error' | 'normal';
```

## 注意事项

1. 当设置 `banner` 属性时，`center` 属性会自动生效
2. 关闭操作会触发 `close` 事件，关闭动画结束后会触发 `after-close` 事件
3. 可以通过插槽完全自定义图标、标题、操作区域和关闭按钮
4. 组件支持过渡动画，关闭时会平滑消失
