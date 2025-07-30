### Badge Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `text` | 自定义徽标内容，`count` 优先 | `string` | `-` |
| `dot` | 是否显示为小红点 | `boolean` | `false` |
| `dotStyle` | 小红点的样式 | `CSSProperties` | `-` |
| `maxCount` | 展示的封顶值，当 `count` 超过 `maxCount` 时，会显示为 `maxCount+` | `number` | `99` |
| `offset` | 徽标位置的偏移量，格式为 `[x, y]` | `number[]` | `[0, 0]` |
| `color` | 自定义徽标颜色 | `string` | `-` |
| `status` | 设置徽标为状态点 | `'normal'` \| `'processing'` \| `'success'` \| `'warning'` \| `'danger'` | `'normal'` |
| `count` | 展示的数字 | `number` | `0` |

### Badge Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 需要被附加徽标的元素 |
| `content` | 自定义徽标内容 |