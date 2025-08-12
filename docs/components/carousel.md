# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 需要展示一组图片或卡片
- 需要轮播展示内容
- 需要自动播放的展示组件

## 基础用法

最简单的用法，包含多个轮播项。

```vue
<template>
  <YcCarousel>
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
</template>
```

## 自动播放

通过 `autoPlay` 属性开启自动播放。

```vue
<template>
  <YcCarousel :auto-play="true">
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
</template>
```

## 自定义自动播放

通过对象形式配置自动播放参数。

```vue
<template>
  <YcCarousel :auto-play="{ interval: 3000, hoverToPause: true }">
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
</template>
```

## 指示器类型

通过 `indicatorType` 属性设置指示器类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCarousel indicator-type="line">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel indicator-type="dot">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel indicator-type="slider">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
  </YcSpace>
</template>
```

## 指示器位置

通过 `indicatorPosition` 属性设置指示器位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCarousel indicator-position="bottom">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel indicator-position="top">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel indicator-position="left">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel indicator-position="right">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
  </YcSpace>
</template>
```

## 箭头控制

通过 `showArrow` 属性控制箭头显示。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCarousel show-arrow="always">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel show-arrow="hover">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel show-arrow="never">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
  </YcSpace>
</template>
```

## 动画效果

通过 `animationName` 属性设置动画效果。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCarousel animation-name="slide">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
    
    <YcCarousel animation-name="fade">
      <YcCarouselItem>1</YcCarouselItem>
      <YcCarouselItem>2</YcCarouselItem>
      <YcCarouselItem>3</YcCarouselItem>
    </YcCarousel>
  </YcSpace>
</template>
```

## 垂直方向

通过 `direction` 属性设置轮播方向。

```vue
<template>
  <YcCarousel direction="vertical" :auto-play="true">
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
</template>
```

## 受控用法

通过 `v-model` 控制当前显示的轮播项。

```vue
<template>
  <YcCarousel v-model:current="currentIndex">
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
  <div style="margin-top: 16px;">
    当前索引: {{ currentIndex }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentIndex = ref(0);
</script>
```

## 事件处理

监听轮播变化事件。

```vue
<template>
  <YcCarousel @change="onChange">
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
</template>

<script setup>
const onChange = (index, preIndex, isManual) => {
  console.log('轮播变化:', { index, preIndex, isManual });
};
</script>
```

## 自定义样式

通过 `arrowClass` 和 `indicatorClass` 自定义样式类。

```vue
<template>
  <YcCarousel 
    arrow-class="custom-arrow"
    indicator-class="custom-indicator"
  >
    <YcCarouselItem>1</YcCarouselItem>
    <YcCarouselItem>2</YcCarouselItem>
    <YcCarouselItem>3</YcCarouselItem>
    <YcCarouselItem>4</YcCarouselItem>
  </YcCarousel>
</template>

<style scoped>
.custom-arrow {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.custom-indicator {
  background: rgba(0, 0, 0, 0.3);
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前显示的轮播项索引 | `number` | - |
| defaultCurrent | 默认显示的轮播项索引 | `number` | `0` |
| autoPlay | 是否自动播放 | `AutoPlay` | `false` |
| moveSpeed | 移动速度 | `number` | - |
| animationName | 动画效果 | `CarouselAnimationName` | - |
| trigger | 指示器触发方式 | `IndicatorTrigger` | - |
| direction | 轮播方向 | `Direction` | - |
| showArrow | 箭头显示方式 | `CarouselShowArrow` | - |
| arrowClass | 箭头样式类 | `ClassName` | - |
| indicatorType | 指示器类型 | `IndicatorType` | - |
| indicatorPosition | 指示器位置 | `IndicatorPosition` | - |
| indicatorClass | 指示器样式类 | `ClassName` | - |
| transitionTimingFunction | 过渡时间函数 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:current | 当前索引变化时触发 | `(index: number)` |
| change | 轮播变化时触发 | `(index: number, preIndex: number, isManual: boolean)` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 轮播项内容 |

### Types

```typescript
type CarouselAnimationName = 'slide' | 'fade';
type CarouselShowArrow = 'always' | 'hover' | 'never';
type AutoPlay = boolean | { interval?: number; hoverToPause?: boolean };
type IndicatorPosition = 'bottom' | 'top' | 'left' | 'right' | 'outer';
type IndicatorType = 'line' | 'dot' | 'slider' | 'never';
type IndicatorTrigger = 'click' | 'hover';
```

## 注意事项

1. 轮播项会自动适应容器大小
2. 自动播放时，鼠标悬停会暂停播放
3. 指示器位置为 `outer` 时会显示在容器外部
4. 垂直方向轮播时，指示器位置建议使用 `left` 或 `right`

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-carousel {
  /* 轮播容器 */
}

.yc-carousel-item {
  /* 轮播项 */
}

.yc-carousel-arrow {
  /* 箭头按钮 */
}

.yc-carousel-indicator {
  /* 指示器 */
}
```
