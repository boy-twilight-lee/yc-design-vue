### Notification 方法

`Notification` 组件提供了一系列静态方法，用于在全局展示通知提醒框。

| 方法名 | 描述 | 参数 | 返回值 |
| :--- | :--- | :--- | :--- |
| `info` | 显示信息通知 | `config: string \| NotificationConfig` | `NotificationReturn` |
| `success` | 显示成功通知 | `config: string \| NotificationConfig` | `NotificationReturn` |
| `warning` | 显示警告通知 | `config: string \| NotificationConfig` | `NotificationReturn` |
| `error` | 显示错误通知 | `config: string \| NotificationConfig` | `NotificationReturn` |
| `remove` | 根据 `id` 移除指定的通知 | `id: string` | `void` |
| `clear` | 清除指定位置的所有通知 | `position: NotificationPosition` | `void` |

### NotificationConfig

调用 `info`, `success` 等方法时，可以传入一个字符串作为内容，也可以传入一个 `NotificationConfig` 对象进行详细配置。

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `content` | 通知内容 | `RenderContent` | `-` |
| `title` | 通知标题 | `RenderContent` | `-` |
| `icon` | 自定义图标 | `RenderFunction` | `-` |
| `id` | 通知的唯一标识 | `string` | `-` |
| `style` | 自定义内联样式 | `CSSProperties` | `-` |
| `class` | 自定义 CSS 类名 | `ClassName` | `-` |
| `showIcon` | 是否显示图标 | `boolean` | `true` |
| `closable` | 是否显示关闭按钮 | `boolean` | `true` |
| `duration` | 通知显示的持续时间，单位为毫秒。设置为 `0` 则不会自动关闭 | `number` | `4500` |
| `footer` | 自定义页脚 | `RenderFunction` | `-` |
| `closeIcon` | 自定义关闭图标 | `RenderFunction` | `-` |
| `onClose` | 关闭时的回调函数 | `(id: string \| number) => void` | `-` |
| `position` | 通知弹出的位置，可选值为 `'topLeft'`, `'topRight'`, `'bottomLeft'`, `'bottomRight'` | `NotificationPosition` | `'topRight'` |

*注意: `isReset` 和 `onDestory` 是内部使用的属性，在此未列出。*

### NotificationReturn

每次调用通知方法（除 `remove` 和 `clear` 外）都会返回一个对象，其中包含以下方法：

| 方法名 | 描述 |
| :--- | :--- |
| `close` | 用于手动关闭当前通知 |