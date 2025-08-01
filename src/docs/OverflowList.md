### OverflowList Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `min` | 容器中保留的最少项目数 | `number` | `1` |
| `margin` | 项目之间的间距 | `number` | `0` |
| `from` | 溢出部分的位置，可选值为 `'start'` 或 `'end'` | `OverflowListFrom` | `'end'` |

### OverflowList Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `change` | 可见项目数量变化时触发 | `value: number` |

### OverflowList Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 列表的默认内容，通常放置可被折叠的列表项 |
| `overflow` | 当列表项溢出时，用于显示折叠指示符的内容 |