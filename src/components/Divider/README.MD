### Divider Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `direction` | 分割线的方向 | `Direction` (`'horizontal'` \| `'vertical'`) | `'horizontal'` |
| `orientation` | 分割线文字的位置 | `'left'` \| `'center'` \| `'right'` | `'center'` |
| `type` | 分割线的类型 | `'solid'` \| `'dashed'` \| `'dotted'` \| `'double'` | `'solid'` |
| `size` | 分割线的尺寸，`direction` 为 `vertical` 时为高度，`horizontal` 时为宽度 | `number` | `1` (px) |
| `margin` | 分割线的边距，`direction` 为 `vertical` 时为左右边距，`horizontal` 时为上下边距 | `number` | `-` |

### Divider Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 分割线的文字内容 |