### Drawer Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `visible` | 抽屉是否可见 | `boolean` | `-` |
| `defaultVisible` | 抽屉默认是否可见（非受控状态） | `boolean` | `false` |
| `placement` | 抽屉的弹出位置 | `'right'` \| `'left'` \| `'top'` \| `'bottom'` | `'right'` |
| `title` | 抽屉的标题 | `string` | `-` |
| `mask` | 是否显示遮罩层 | `boolean` | `true` |
| `maskClosable` | 点击遮罩层是否可以关闭 | `boolean` | `true` |
| `closable` | 是否显示关闭按钮 | `boolean` | `true` |
| `okText` | 确认按钮的文本 | `string` | `'OK'` |
| `cancelText` | 取消按钮的文本 | `string` | `'Cancel'` |
| `okLoading` | 确认按钮是否为加载中状态 | `boolean` | `false` |
| `okButtonProps` | 确认按钮的属性，参考 `Button` 组件 | `ButtonProps` | `-` |
| `cancelButtonProps` | 取消按钮的属性，参考 `Button` 组件 | `ButtonProps` | `-` |
| `unmountOnClose` | 关闭时是否卸载节点 | `boolean` | `false` |
| `width` | 抽屉的宽度（`placement` 为 `left` 或 `right` 时生效） | `number` \| `string` | `250` |
| `height` | 抽屉的高度（`placement` 为 `top` 或 `bottom` 时生效） | `number` \| `string` | `250` |
| `popupContainer` | 抽屉的挂载容器 | `PopupContainer` | `'body'` |
| `drawerStyle` | 抽屉内容的样式 | `CSSProperties` | `-` |
| `escToClose` | 是否支持按下 `ESC` 键关闭 | `boolean` | `true` |
| `renderToBody` | **[已废弃]** 是否渲染到 `body` 元素，请使用 `popupContainer` | `boolean` | `true` |
| `header` | 是否显示头部 | `boolean` | `true` |
| `footer` | 是否显示底部 | `boolean` | `true` |
| `hideCancel` | 是否隐藏取消按钮 | `boolean` | `false` |
| `onBeforeCancel` | 点击取消按钮或遮罩层前触发的回调 | `OnBeforeCancel` | `-` |
| `onBeforeOk` | 点击确认按钮前触发的回调 | `OnBeforeOk` | `-` |

### Drawer Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:visible` | `v-model:visible` 绑定值改变时触发 | `value: boolean` |
| `ok` | 点击确认按钮时触发 | `-` |
| `cancel` | 点击取消、关闭按钮或 `ESC` 键时触发 | `event: MouseEvent \| KeyboardEvent` |
| `before-open` | 抽屉打开前（动画开始前）触发 | `-` |
| `open` | 抽屉打开后（动画结束后）触发 | `-` |
| `before-close` | 抽屉关闭前（动画开始前）触发 | `-` |
| `close` | 抽屉关闭后（动画结束后）触发 | `-` |

### Drawer Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 抽屉的内容 |
| `header` | 自定义头部 |
| `footer` | 自定义底部 |
| `title` | 自定义标题 |