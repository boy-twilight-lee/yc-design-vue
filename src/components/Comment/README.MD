### Comment Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `author` | 作者 | `string` | `-` |
| `avatar` | 头像，可以是图片地址或 `Avatar` 组件 | `string` | `-` |
| `content` | 评论内容 | `string` | `-` |
| `datetime` | 日期时间 | `string` | `-` |
| `align` | 操作和时间的对齐方式 | `CommentAlign` | `'left'` |

### Comment Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `avatar` | 自定义头像 |
| `author` | 自定义作者 |
| `datetime` | 自定义日期时间 |
| `content` | 评论内容 |
| `actions` | 评论操作项，通常放置在评论内容下面 |
| `default` | 嵌套评论 |