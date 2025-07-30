### ResizeBox Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `width` | 宽度 | `number` | `-` |
| `height` | 高度 | `number` | `-` |
| `component` | 渲染的 `DOM` 标签 | `string` | `'div'` |
| `directions` | 可进行伸缩的边角，可选值为 `'left'`, `'right'`, `'top'`, `'bottom'` | `ResizeBoxDirection[]` | `['right', 'bottom']` |

### ResizeBox Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:width` | `v-model:width` 绑定值改变时触发 | `value: number` |
| `update:height` | `v-model:height` 绑定值改变时触发 | `value: number` |
| `moving-start` | 开始拖拽调整大小时触发 | `ev: MouseEvent` |
| `moving` | 正在拖拽调整大小时触发 | `size: { width: number; height: number }, ev: MouseEvent` |
| `moving-end` | 结束拖拽调整大小时触发 | `ev: MouseEvent` |

### ResizeBox Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 伸缩框的内容 | `-` |
| `resize-trigger` | 自定义伸缩手柄 | `scope: { direction: ResizeBoxDirection }` |
| `resize-trigger-icon` | 自定义伸缩手柄的图标 | `scope: { direction: ResizeBoxDirection }` |