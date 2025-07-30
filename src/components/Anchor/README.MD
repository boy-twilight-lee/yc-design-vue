好的，这是为您生成的 Anchor 和 AnchorLink 组件字段说明文档，以表格形式呈现。

### Anchor Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `boundary` | 滚动到指定锚点时，元素在滚动容器中的对齐方式。`number` 类型时表示距离顶部的偏移量（px） | `AnchorBoundary` | `'start'` |
| `lineLess` | 是否不显示左侧的时间轴 | `boolean` | `false` |
| `scrollContainer` | 指定滚动容器，默认为 `window` | `TargetContainer` | `window` |
| `changeHash` | 是否在点击锚点后改变页面 URL 的 hash 值 | `boolean` | `true` |
| `smooth` | 是否开启平滑滚动 | `boolean` | `true` |

### Anchor Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 用于放置 `AnchorLink` 组件 |

### AnchorLink Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 锚点链接的显示文本 | `string` | `-` |
| `href` | 锚点链接，对应页面上元素的 `id` | `string` | `-` |

### AnchorLink Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 自定义锚点链接的内容 |
| `sublist` | 用于嵌套下一级的锚点链接 |