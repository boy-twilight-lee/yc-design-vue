# Affix 固钉

将页面元素钉在可视范围内。

## 何时使用

- 当内容区域比较长，需要滚动页面时，有些内容需要固定在可视区域中
- 常用于页面导航、操作按钮等场景

## 基础用法

最简单的用法，不设置任何属性。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <YcAffix>
        <YcButton type="primary">固定在顶部</YcButton>
      </YcAffix>
    </div>
  </div>
</template>
```

## 固定顶部

设置 `offsetTop` 属性，元素距离顶部多少距离时固定。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <YcAffix :offset-top="50">
        <YcButton type="primary">距离顶部50px时固定</YcButton>
      </YcAffix>
    </div>
  </div>
</template>
```

## 固定底部

设置 `offsetBottom` 属性，元素距离底部多少距离时固定。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <YcAffix :offset-bottom="50">
        <YcButton type="primary">距离底部50px时固定</YcButton>
      </YcAffix>
    </div>
  </div>
</template>
```

## 指定容器

通过 `target` 属性指定滚动容器。

```vue
<template>
  <div ref="scrollContainer" style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <YcAffix :target="scrollContainer" :offset-top="50">
        <YcButton type="primary">指定容器内固定</YcButton>
      </YcAffix>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref();
</script>
```

## 监听固定状态变化

通过 `@change` 事件监听固定状态的变化。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <YcAffix :offset-top="50" @change="onChange">
        <YcButton type="primary">监听状态变化</YcButton>
      </YcAffix>
    </div>
  </div>
  <p>当前状态: {{ isFixed ? '已固定' : '未固定' }}</p>
</template>

<script setup>
import { ref } from 'vue';

const isFixed = ref(false);

const onChange = (fixed) => {
  isFixed.value = fixed;
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetTop | 距离顶部多少距离时固定 | `number` | `0` |
| offsetBottom | 距离底部多少距离时固定 | `number` | - |
| target | 指定滚动容器 | `TargetContainer` | - |
| targetContainer | 指定目标容器 | `TargetContainer` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 固定状态改变时触发 | `(fixed: boolean)` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 需要固定的内容 |

### Expose

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| updatePosition | 手动更新位置 | - |

### Types

```typescript
interface AffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  target?: TargetContainer;
  targetContainer?: TargetContainer;
}

interface AffixEmits {
  (e: 'change', fixed: boolean): void;
}

interface AffixSlots {
  default(): void;
}

interface AffixExpose {
  updatePosition(): void;
}
```

## 注意事项

1. 当 `offsetTop` 和 `offsetBottom` 同时设置时，`offsetBottom` 优先级更高
2. 如果不指定 `target`，组件会自动查找第一个可滚动的父元素
3. 组件会自动监听容器大小变化，无需手动处理
4. 固定状态下，组件会保持原有的宽高，避免布局跳动
