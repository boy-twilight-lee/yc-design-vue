### Split Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `component` | 渲染的 `DOM` 标签 | `string` | `'div'` |
| `direction` | 分割的方向 | `Direction` | `'horizontal'` |
| `size` | 第一个面板的大小，传入 `0-1` 之间的数字代表百分比 | `number \| string` | `0.5` |
| `defaultSize` | 默认大小（非受控状态） | `number \| string` | `0.5` |
| `min` | 第一个面板的最小尺寸 | `number` | `-` |
| `max` | 第一个面板的最大尺寸 | `number` | `-` |
| `disabled` | 是否禁用拖拽调整 | `boolean` | `false` |

### Split Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:size` | `v-model:size` 绑定值改变时触发 | `value: number` |
| `moving-start` | 开始拖拽时触发 | `-` |
| `moving` | 拖拽中时触发 | `-` |
| `moving-end` | 拖拽结束时触发 | `-` |

### Split Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `resize-trigger-icon` | 自定义分割线上的图标 |
| `resize-trigger` | 自定义分割线 |
| `first` | 第一个面板（左侧或上方面板） |
| `second` | 第二个面板（右侧或下方面板） |