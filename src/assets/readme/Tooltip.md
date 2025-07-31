### Tooltip Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `popupVisible` | 弹出框是否可见 | `boolean` | `-` |
| `defaultPopupVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `content` | 弹出框的内容 | `string` | `-` |
| `position` | 弹出位置 | `TriggerPostion` | `'top'` |
| `mini` | 是否为迷你模式 | `boolean` | `false` |
| `backgroundColor` | 弹出框的背景色 | `string` | `-` |
| `contentClass` | 内容区域的类名 | `ClassName` | `-` |
| `contentStyle` | 内容区域的样式 | `CSSProperties` | `-` |
| `arrowClass` | 箭头的类名 | `ClassName` | `-` |
| `arrowStyle` | 箭头的样式 | `CSSProperties` | `-` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `triggerProps` | 可接受所有 `Trigger` 的 `Props` | `TriggerProps` | `-` |

### Tooltip Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:popupVisible` | `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `popup-visible-change` | 弹出框显示或隐藏时触发 | `value: boolean` |

### Tooltip Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 触发弹出框的元素 |
| `content` | 自定义弹出框的内容 |

### Tooltip Expose

| 方法名 | 描述 |
| :--- | :--- |
| `hide` | 隐藏弹出框 |
| `show` | 显示弹出框 |