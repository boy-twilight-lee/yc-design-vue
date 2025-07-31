### Image

#### Image Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `src` | 图片资源地址 | `string` | `-` |
| `width` | 图片宽度 | `number` \| `string` | `-` |
| `height` | 图片高度 | `number` \| `string` | `-` |
| `title` | 图片标题 | `string` | `-` |
| `description` | 图片描述 | `string` | `-` |
| `fit` | 图片的适应方式 | `'contain'` \| `'cover'` \| `'fill'` \| `'none'` \| `'scale-down'` | `-` |
| `alt` | 图片的描述文字（原生 `alt` 属性） | `string` | `-` |
| `hideFooter` | 是否隐藏页脚 | `boolean` \| `'never'` | `false` |
| `footerPosition` | 页脚的位置 | `'inner'` \| `'outer'` | `'inner'` |
| `showLoader` | 是否在加载中显示 `loader` | `boolean` | `false` |
| `preview` | 是否开启预览 | `boolean` | `true` |
| `previewVisible` | 控制预览的显示 | `boolean` | `-` |
| `defaultPreviewVisible` | 默认是否显示预览（非受控状态） | `boolean` | `false` |
| `previewProps` | 传递给预览组件的属性 | `ImagePreviewProps` | `{}` |
| `footerClass` | 页脚的类名 | `ClassName` | `-` |

#### Image Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:previewVisible`| `v-model:previewVisible` 绑定值改变时触发 | `visible: boolean` |
| `preview-visible-change`| 预览显示状态改变时触发 | `visible: boolean` |

#### Image Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `error` | 图片加载失败时的占位内容 |
| `error-icon` | 图片加载失败时的图标 |
| `loader` | 图片加载中的占位内容 |
| `extra` | 页脚的操作区 |
| `preview-actions`| 自定义预览的操作项 |

---

### ImagePreview

#### ImagePreview Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `src` | 图片资源地址 | `string` | `-` |
| `visible` | 预览是否可见 | `boolean` | `-` |
| `defaultVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `maskClosable` | 点击遮罩层是否可以关闭 | `boolean` | `true` |
| `closable` | 是否显示关闭按钮 | `boolean` | `true` |
| `actionsLayout` | 操作项的布局 | `string[]` | `['rotateRight', 'zoomIn', 'zoomOut']` |
| `popupContainer` | 预览的挂载容器 | `PopupContainer` | `'body'` |
| `escToClose` | 是否支持按下 `ESC` 键关闭 | `boolean` | `true` |
| `wheelZoom` | 是否支持通过滚轮缩放 | `boolean` | `true` |
| `keyboard` | 是否支持键盘操作 | `boolean` | `true` |
| `defaultScale` | 默认缩放比例 | `number` | `1` |
| `zoomRate` | 缩放比例 | `number` | `1.1` |

#### ImagePreview Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:visible` | `v-model:visible` 绑定值改变时触发 | `value: boolean` |
| `close` | 关闭预览时触发 | `-` |

#### ImagePreview Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `actions` | 自定义操作项 |
| `arrow` | 自定义切换箭头 |

---

### ImagePreviewGroup

#### ImagePreviewGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `srcList` | 图片列表 | `string[]` | `[]` |
| `current` | 当前展示的图片索引 | `number` | `-` |
| `defaultCurrent`| 默认展示的图片索引（非受控状态） | `number` | `0` |
| `infinite` | 是否无限循环 | `boolean` | `false` |
| *(其余继承自 ImagePreviewProps)* | - | - | - |

#### ImagePreviewGroup Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:visible`| `v-model:visible` 绑定值改变时触发 | `value: boolean` |
| `update:current`| `v-model:current` 绑定值改变时触发 | `index: number` |
| `change` | 当前图片改变时触发 | `index: number` |
| `visible-change`| 预览可见状态改变时触发 | `value: boolean` |

#### ImagePreviewGroup Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `actions` | 自定义操作项 |
| `default` | 用于放置 `Image` 组件 |

---

### ImagePreviewAction

#### ImagePreviewAction Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `name` | 操作项名称 | `string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |

#### ImagePreviewAction Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `click` | 点击时触发 | `ev: MouseEvent` |
| `dblclick` | 双击时触发 | `ev: MouseEvent` |
| `contextmenu`| 右键点击时触发 | `ev: MouseEvent` |

#### ImagePreviewAction Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 操作项内容 |