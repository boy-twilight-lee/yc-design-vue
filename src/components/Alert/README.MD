### Alert Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 警告提示的类型 | `'warning'` \| `'success'` \| `'info'` \| `'error'` \| `'normal'` | `'info'` |
| `showIcon` | 是否显示图标 | `boolean` | `false` |
| `closable` | 是否可关闭 | `boolean` | `false` |
| `title` | 警告提示的标题 | `string` | `-` |
| `banner` | 是否用作顶部公告 | `boolean` | `false` |
| `center` | 文字是否居中 | `boolean` | `false` |

### Alert Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `close` | 点击关闭按钮时触发 | `ev: MouseEvent` |
| `after-close` | 关闭动画结束后触发 | `-` |

### Alert Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 警告提示的内容 |
| `icon` | 自定义图标 |
| `title` | 警告提示的标题 |
| `action` | 操作项 |
| `close-element` | 自定义关闭按钮 |