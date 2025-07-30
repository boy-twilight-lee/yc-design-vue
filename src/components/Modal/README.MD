### Modal Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `visible` | 对话框是否可见 | `boolean` | `-` |
| `defaultVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `width` | 对话框的宽度 | `number \| string` | `520` |
| `top` | 对话框距离顶部的高度 | `number` | `100` |
| `mask` | 是否显示遮罩层 | `boolean` | `true` |
| `title` | 标题 | `string` | `-` |
| `titleAlign` | 标题的对齐方向，可选值为 `'start'`, `'center'` | `ModalTitleAlign` | `'start'` |
| `alignCenter` | 是否垂直居中显示 | `boolean` | `true` |
| `unmountOnClose` | 关闭时是否卸载节点 | `boolean` | `false` |
| `maskClosable` | 点击遮罩层是否可以关闭 | `boolean` | `true` |
| `hideCancel` | 是否隐藏取消按钮 | `boolean` | `false` |
| `closable` | 是否显示右上角的关闭按钮 | `boolean` | `true` |
| `okText` | 确认按钮的文案 | `string` | `'确定'` |
| `cancelText` | 取消按钮的文案 | `string` | `'取消'` |
| `okLoading` | 确认按钮是否为加载中状态 | `boolean` | `false` |
| `okButtonProps` | 确认按钮的 props | `ButtonProps` | `-` |
| `cancelButtonProps` | 取消按钮的 props | `ButtonProps` | `-` |
| `footer` | 是否显示页脚 | `boolean` | `true` |
| `renderToBody` | 是否将对话框挂载到 `body` 元素下 | `boolean` | `true` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `maskStyle` | 遮罩层的样式 | `CSSProperties` | `-` |
| `modalClass` | 对话框的自定义类名 | `ClassName` | `-` |
| `modalStyle` | 对话框的样式 | `CSSProperties` | `-` |
| `escToClose` | 是否支持按下 `ESC` 键关闭 | `boolean` | `true` |
| `draggable` | 是否可以拖拽 | `boolean` | `false` |
| `fullscreen` | 是否全屏显示 | `boolean` | `false` |
| `maskAnimationName` | 遮罩层的动画类名 | `string` | `'fade'` |
| `modalAnimationName` | 对话框的动画类名 | `string` | `'zoom'` |
| `bodyClass` | 对话框内容部分的类名 | `ClassName` | `-` |
| `bodyStyle` | 对话框内容部分的样式 | `CSSProperties` | `-` |
| `hideTitle` | 是否隐藏标题 | `boolean` | `false` |
| `simple` | 是否开启简约模式 | `boolean` | `false` |
| `onBeforeCancel` | 取消前回调，返回 `false` 可阻止关闭 | `OnBeforeCancel` | `-` |
| `onBeforeOk` | 确认前回调，返回 `false` 可阻止关闭 | `OnBeforeOk` | `-` |

### Modal Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:visible` | `visible` 属性改变时触发 | `value: boolean` |
| `ok` | 点击确认按钮时触发 | `-` |
| `cancel` | 点击取消或关闭按钮时触发 | `ev: MouseEvent \| KeyboardEvent` |
| `open` | 对话框打开时触发 | `-` |
| `before-open` | 对话框打开前触发 | `-` |
| `close` | 对话框关闭时触发 | `-` |
| `before-close` | 对话框关闭前触发 | `-` |

### Modal Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 对话框内容 |
| `header` | 自定义页眉 |
| `footer` | 自定义页脚 |
| `title` | 自定义标题 |

---

### Modal 方法

`Modal` 组件也提供了一系列函数式调用的方法，用于快速创建和管理对话框。

| 方法名 | 描述 | 参数 | 返回值 |
| :--- | :--- | :--- | :--- |
| `open` | 打开一个普通对话框 | `props: ModalConfig` | `ModalReturn` |
| `success` | 打开一个成功状态的对话框 | `props: ModalConfig` | `ModalReturn` |
| `error` | 打开一个错误状态的对话框 | `props: ModalConfig` | `ModalReturn` |
| `warning` | 打开一个警告状态的对话框 | `props: ModalConfig` | `ModalReturn` |
| `info` | 打开一个信息状态的对话框 | `props: ModalConfig` | `ModalReturn` |
| `confirm` | 打开一个确认对话框 | `props: ModalConfig` | `ModalReturn` |

### ModalConfig

函数式调用时传入的配置对象，它继承了大部分 `ModalProps` 的属性，并增加了一些特有的配置。

| 参数名 | 描述 | 类型 |
| :--- | :--- | :--- |
| `title` | 标题 | `RenderContent` |
| `content` | 内容 | `RenderContent` |
| `type` | 对话框类型（用于 `info`, `success` 等方法） | `ModalType` |
| `onOk` | 点击确认按钮的回调 | `() => void \| Promise<void>` |
| `onCancel` | 点击取消按钮的回调 | `() => void \| Promise<void>` |
| `onOpen` | 对话框打开后的回调 | `() => void` |
| `onClose` | 对话框关闭后的回调 | `() => void` |
| `onBeforeOpen` | 对话框打开前的回调 | `() => void` |
| `onBeforeClose` | 对话框关闭前的回调 | `() => void` |
| `...` | 其他 `ModalProps` 中的属性 | `...` |

### ModalReturn

函数式调用会返回一个对象，包含以下方法：

| 方法名 | 描述 |
| :--- | :--- |
| `close` | 关闭当前对话框 |
| `update` | 更新当前对话框的配置 |