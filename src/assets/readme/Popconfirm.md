### Popconfirm Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `content` | 确认框的内容 | `string` | `-` |
| `position` | 弹出位置 | `TriggerPostion` | `'top'` |
| `popupVisible` | 确认框是否可见 | `boolean` | `-` |
| `defaultPopupVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `type` | 确认框的类型，可选值为 `'info'`, `'success'`, `'warning'`, `'error'` | `PopconfirmType` | `'info'` |
| `okText` | 确认按钮的文案 | `string` | `'确定'` |
| `cancelText` | 取消按钮的文案 | `string` | `'取消'` |
| `okLoading` | 确认按钮是否为加载中状态 | `boolean` | `false` |
| `okButtonProps` | 确认按钮的 props | `ButtonProps` | `-` |
| `cancelButtonProps` | 取消按钮的 props | `ButtonProps` | `-` |
| `contentClass` | 内容区域的类名 | `ClassName` | `-` |
| `contentStyle` | 内容区域的样式 | `CSSProperties` | `-` |
| `arrowClass` | 箭头的类名 | `ClassName` | `-` |
| `arrowStyle` | 箭头的样式 | `CSSProperties` | `-` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `onBeforeOk` | 确认前回调，返回 `false` 可阻止关闭 | `OnBeforeOk` | `-` |
| `onBeforeCancel` | 取消前回调，返回 `false` 可阻止关闭 | `OnBeforeCancel` | `-` |
| `triggerProps` | 可接受所有 `Trigger` 的 `Props` | `TriggerProps` | `-` |

### Popconfirm Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:popupVisible` | `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `popup-visible-change` | 确认框显示或隐藏时触发 | `value: boolean` |
| `ok` | 点击确认按钮时触发 | `-` |
| `cancel` | 点击取消按钮时触发 | `-` |

### Popconfirm Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 触发确认框的元素 |
| `content` | 自定义确认框的内容 |
| `icon` | 自定义确认框的图标 |

### Popconfirm Expose

| 方法名 | 描述 |
| :--- | :--- |
| `hide` | 隐藏确认框 |
| `show` | 显示确认框 |