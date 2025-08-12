# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容较长时，为用户提供快速回到顶部的功能
- 常用于长列表、长文章、仪表板等页面

## 基础用法

最简单的用法，点击按钮回到顶部。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <p>长内容...</p>
      <YcBackTop />
    </div>
  </div>
</template>
```

## 自定义样式

通过插槽自定义回到顶部按钮的样式。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <p>长内容...</p>
      <YcBackTop>
        <div class="custom-back-top">
          <YcIcon-arrow-up />
          <span>回到顶部</span>
        </div>
      </YcBackTop>
    </div>
  </div>
</template>

<style scoped>
.custom-back-top {
  background: #1890ff;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
```

## 设置显示高度

通过 `visibleHeight` 属性设置滚动多少距离后显示回到顶部按钮。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <p>长内容...</p>
      <YcBackTop :visible-height="100">
        滚动100px后显示
      </YcBackTop>
    </div>
  </div>
</template>
```

## 指定滚动容器

通过 `targetContainer` 属性指定滚动容器。

```vue
<template>
  <div ref="scrollContainer" style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <p>长内容...</p>
      <YcBackTop :target-container="scrollContainer">
        指定容器内回到顶部
      </YcBackTop>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref();
</script>
```

## 自定义动画

通过 `duration` 和 `easeing` 属性自定义回到顶部的动画效果。

```vue
<template>
  <div style="height: 200px; overflow: auto;">
    <div style="height: 1000px;">
      <p>长内容...</p>
      <YcBackTop :duration="500" easeing="bounceOut">
        自定义动画效果
      </YcBackTop>
    </div>
  </div>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visibleHeight | 滚动多少距离后显示回到顶部按钮 | `number` | `200` |
| targetContainer | 指定滚动容器 | `TargetContainer` | - |
| easeing | 动画缓动函数 | `string` | `'quadOut'` |
| duration | 动画持续时间（毫秒） | `number` | `200` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义回到顶部按钮内容 |

### Types

```typescript
interface BackTopProps {
  visibleHeight?: number;
  targetContainer?: TargetContainer;
  easeing?: string;
  duration?: number;
}

interface BackTopSlots {
  default(): void;
}
```

## 注意事项

1. 如果不指定 `targetContainer`，组件会自动查找第一个可滚动的父元素
2. `easeing` 属性支持 b-tween 库的所有缓动函数
3. 组件使用绝对定位，确保父容器设置了相对定位
4. 默认情况下，组件显示在右下角，可以通过 CSS 自定义位置

## 样式定制

组件提供了基础的样式类，可以通过 CSS 进行定制：

```css
.yc-back-top {
  /* 自定义位置 */
  right: 100px;
  bottom: 100px;
  
  /* 自定义样式 */
  background: #1890ff;
  color: white;
  border-radius: 50%;
}
```
