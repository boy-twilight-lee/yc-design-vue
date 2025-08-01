### Scrollbar Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 滚动条的类型，可选值为 `'track'`（轨道式）或 `'embed'`（内嵌式） | `TackType` | `'track'` |
| `outerClass` | 外层容器的自定义类名 | `ClassName` | `-` |
| `outerStyle` | 外层容器的自定义样式 | `CSSProperties` | `-` |
| `scrollbar` | 是否使用真实滚动条 | `boolean` | `true` |

### Scrollbar Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `scroll` | 滚动时触发 | `left: number, top: number, ev: Event` |

### Scrollbar Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 滚动区域的内容 |

### Scrollbar Expose

| 方法名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `scrollTo` | 滚动到指定位置 | `options: ScrollOptions` |
| `scrollLeft` | 设置水平滚动距离 | `left: number` |
| `scrollTop` | 设置垂直滚动距离 | `top: number` |
| `getScrollRef` | 获取滚动的 DOM 元素 | `-` |