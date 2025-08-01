
### Pagination Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `total` | 数据总数 | `number` | `0` |
| `current` | 当前页码 | `number` | `-` |
| `defaultCurrent` | 默认的当前页码（非受控状态） | `number` | `1` |
| `pageSize` | 每页的条数 | `number` | `-` |
| `defaultPageSize` | 默认的每页条数（非受控状态） | `number` | `10` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `hideOnSinglePage` | 只有一页时是否隐藏分页器 | `boolean` | `false` |
| `simple` | 是否为简约模式 | `boolean` | `false` |
| `showTotal` | 是否显示数据总数 | `boolean` | `false` |
| `showMore` | 是否显示更多页面跳转按钮 | `boolean` | `false` |
| `showJumper` | 是否显示快速跳转 | `boolean` | `false` |
| `showPageSize` | 是否显示每页条数切换器 | `boolean` | `false` |
| `pageSizeOptions` | 每页条数切换器的选项 | `number[]` | `[10, 20, 30, 40, 50]` |
| `pageSizeProps` | 每页条数切换器的 Select 组件属性 | `SelectProps` | `-` |
| `size` | 分页器尺寸 | `Size` | `'medium'` |
| `pageItemStyle` | 分页按钮的样式 | `CSSProperties` | `-` |
| `activePageItemStyle` | 当前页分页按钮的样式 | `CSSProperties` | `-` |
| `baseSize` | 基础显示的页码数量 | `number` | `7` |
| `bufferSize` | 页码的缓冲区大小 | `number` | `3` |
| `autoAdjust` | 是否自动调整宽度 | `boolean` | `true` |

### Pagination Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:current` | `v-model:current` 绑定值改变时触发 | `current: number` |
| `update:pageSize` | `v-model:pageSize` 绑定值改变时触发 | `pageSize: number` |
| `change` | 页码改变时触发 | `current: number` |
| `page-size-change` | 每页条数改变时触发 | `pageSize: number` |

### Pagination Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `total` | 自定义总数展示 | `scope: { total: number }` |
| `page-item-ellipsis` | 自定义省略号元素 | `-` |
| `page-item-step` | 自定义上一步/下一步按钮 | `scope: { type: 'previous' \| 'next' }` |
| `page-item` | 自定义分页按钮 | `scope: { page: number }` |