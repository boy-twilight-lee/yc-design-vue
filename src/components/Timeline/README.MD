### Timeline Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `reverse` | 是否反向排序 | `boolean` | `false` |
| `direction` | 时间轴方向 | `Direction` | `'vertical'` |
| `mode` | 时间轴的模式，可选值为 `'left'`, `'right'`, `'top'`, `'bottom'`, `'alternate'` | `TimelineMode` | `'left'` |
| `pending` | 是否展示幽灵节点，可以是布尔值或自定义内容 | `boolean \| string` | `false` |
| `labelPosition` | 标签的位置，可选值为 `'relative'` 或 `'same'` | `TimelineLabelPosition` | `'same'` |

### Timeline Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `dot` | 自定义幽灵节点的时间点 |
| `default` | 时间轴的内容，需要传入 `TimelineItem` 组件 |

---

### TimelineItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `dotColor` | 节点颜色 | `string` | `-` |
| `dotType` | 节点类型，可选值为 `'hollow'` 或 `'solid'` | `TimelineDotType` | `'solid'` |
| `lineType` | 连接线的类型，可选值为 `'solid'`, `'dashed'`, `'dotted'` | `TimelineLineType` | `'solid'` |
| `lineColor` | 连接线的颜色 | `string` | `-` |
| `label` | 标签内容 | `string` | `-` |
| `position` | 内容的位置，会覆盖 `Timeline` 的 `mode` | `TimelinePositon` | `-` |
| `isGhost` | 是否为幽灵节点下的最后一项（用于隐藏连接线） | `boolean` | `false` |

### TimelineItem Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `dot` | 自定义时间点 |
| `label` | 自定义标签内容 |
| `default` | 时间轴节点的内容 |