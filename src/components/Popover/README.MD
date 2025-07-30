### Popover Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `popupVisible` | 弹出框是否可见 | `boolean` | `-` |
| `defaultPopupVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `title` | 弹出框的标题 | `string` | `-` |
| `content` | 弹出框的内容 | `string` | `-` |
| `trigger` | 触发行为 | `TriggerType` | `'hover'` |
| `position` | 弹出位置 | `TriggerPostion` | `'top'` |
| `contentClass` | 内容区域的类名 | `ClassName` | `-` |
| `contentStyle` | 内容区域的样式 | `CSSProperties` | `-` |
| `arrowClass` | 箭头的类名 | `ClassName` | `-` |
| `arrowStyle` | 箭头的样式 | `CSSProperties` | `-` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `triggerProps` | 可接受所有 `Trigger` 的 `Props` | `TriggerProps` | `-` |

### Popover Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:popupVisible` | `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `popup-visible-change` | 弹出框显示或隐藏时触发 | `value: boolean` |

### Popover Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 触发弹出框的元素 |
| `content` | 自定义弹出框的内容 |
| `title` | 自定义弹出框的标题 |

### Popover Expose

| 方法名 | 描述 |
| :--- | :--- |
| `hide` | 隐藏弹出框 |
| `show` | 显示弹出框 |