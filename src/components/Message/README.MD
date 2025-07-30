### Message 方法

`Message` 组件提供了一系列静态方法，用于在全局展示反馈信息。

| 方法名 | 描述 | 参数 | 返回值 |
| :--- | :--- | :--- | :--- |
| `info` | 显示信息提示 | `config: string \| MessageConfig` | `MessageReturn` |
| `success` | 显示成功提示 | `config: string \| MessageConfig` | `MessageReturn` |
| `warning` | 显示警告提示 | `config: string \| MessageConfig` | `MessageReturn` |
| `error` | 显示错误提示 | `config: string \| MessageConfig` | `MessageReturn` |
| `loading` | 显示加载中提示 | `config: string \| MessageConfig` | `MessageReturn` |
| `normal` | 显示普通提示 | `config: string \| MessageConfig` | `MessageReturn` |
| `clear` | 清除指定位置的所有消息 | `position: MessagePostion` | `void` |

### MessageConfig

调用 `info`, `success` 等方法时，可以传入一个字符串作为内容，也可以传入一个 `MessageConfig` 对象进行详细配置。

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `content` | 消息内容 | `RenderContent` | `-` |
| `id` | 消息的唯一标识 | `string` | `-` |
| `icon` | 自定义图标 | `RenderFunction` | `-` |
| `showIcon` | 是否显示图标 | `boolean` | `true` |
| `closable` | 是否显示关闭按钮 | `boolean` | `false` |
| `duration` | 消息显示的持续时间，单位为毫秒。设置为 `0` 则不会自动关闭 | `number` | `3000` |
| `onClose` | 关闭时的回调函数 | `(id: string \| number) => void` | `-` |
| `resetOnHover` | 鼠标悬浮时是否重置关闭倒计时 | `boolean` | `false` |
| `position` | 消息弹出的位置，可选值为 `'top'` 或 `'bottom'` | `MessagePostion` | `'top'` |

*注意: `isReset` 和 `onDestory` 是内部使用的属性，在此未列出。*

### MessageReturn

每次调用提示方法都会返回一个对象，其中包含以下方法：

| 方法名 | 描述 |
| :--- | :--- |
| `close` | 用于手动关闭当前消息 |