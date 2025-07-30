### Carousel Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `current` | 当前展示的幻灯片索引 | `number` | `-` |
| `defaultCurrent` | 默认展示的幻灯片索引（非受控状态） | `number` | `0` |
| `autoPlay` | 是否自动播放。可传入对象进行更详细的配置 | `boolean` \| `{ interval?: number; hoverToPause?: boolean }` | `false` |
| `moveSpeed` | 切换动画的速度 (ms) | `number` | `500` |
| `animationName` | 切换动画的类型 | `'slide'` \| `'fade'` | `'slide'` |
| `trigger` | 指示器的触发方式 | `'click'` \| `'hover'` | `'click'` |
| `direction` | 走马灯的移动方向 | `Direction` (`'horizontal'` \| `'vertical'`) | `'horizontal'` |
| `showArrow` | 切换箭头的显示时机 | `'always'` \| `'hover'` \| `'never'` | `'hover'` |
| `arrowClass` | 切换箭头的类名 | `ClassName` | `-` |
| `indicatorType` | 指示器的类型 | `'line'` \| `'dot'` \| `'slider'` \| `'never'` | `'dot'` |
| `indicatorPosition` | 指示器的位置 | `'bottom'` \| `'top'` \| `'left'` \| `'right'` \| `'outer'` | `'bottom'` |
| `indicatorClass` | 指示器的类名 | `ClassName` | `-` |
| `transitionTimingFunction` | 动画的缓动函数 | `string` | `'ease'` |

### Carousel Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:current` | 当前幻灯片索引改变时触发 | `index: number` |
| `change` | 幻灯片切换时触发 | `index: number, preIndex: number, isManual: boolean` |

### Carousel Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 用于放置 `CarouselItem` 组件 |

---

### CarouselItem Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 幻灯片项的内容 |