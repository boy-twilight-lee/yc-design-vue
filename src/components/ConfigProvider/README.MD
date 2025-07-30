### ConfigProvider Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `zIndex` | 全局配置弹出框的 `z-index` | `number` | `-` |
| `size` | 全局配置组件的尺寸 | `Size` | `'medium'` |
| `popupContainer` | 全局配置弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `updateAtScroll` | 全局配置滚动时是否更新弹出框位置 | `boolean` | `false` |
| `scrollToClose` | 全局配置滚动时是否关闭弹出框 | `boolean` | `false` |
| `exchangeTime` | 是否交换时间，可能用于时间范围选择器等组件 | `boolean` | `false` |

### ConfigProvider Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 需要应用全局配置的组件内容 | `-` |
| `loading` | 全局配置加载中状态 | `-` |
| `empty` | 全局配置空状态 | `scope: { component: EmptyComponent }` |