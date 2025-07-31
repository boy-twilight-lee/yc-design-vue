### List Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `data` | 列表数据 | `ObjectData[]` | `[]` |
| `size` | 列表尺寸，可选值为 `'small'`, `'medium'`, `'large'` | `ListSize` | `'medium'` |
| `bordered` | 是否显示边框 | `boolean` | `true` |
| `split` | 是否显示分割线 | `boolean` | `true` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |
| `hoverable` | 是否显示鼠标悬浮效果 | `boolean` | `false` |
| `paginationProps` | 分页配置 | `PaginationProps` | `-` |
| `gridProps` | 列表栅格配置 | `GridProps` | `-` |
| `maxHeight` | 列表最大高度 | `number \| string` | `-` |
| `bottomOffset` | 距离底部多少距离时触发 `reach-bottom` 事件 | `number` | `0` |
| `virtualListProps` | 虚拟列表配置 | `VirtualListProps` | `-` |
| `scrollbar` | 是否显示滚动条 | `boolean` | `true` |

### List Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `scroll` | 列表滚动时触发 | `ev: Event` |
| `reach-bottom` | 列表滚动到底部时触发 | `ev: Event` |
| `page-change` | 分页页码改变时触发 | `value: number` |
| `page-size-change` | 分页每页数量改变时触发 | `value: number` |

### List Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `empty` | 列表为空时显示的内容 | `-` |
| `header` | 列表头部 | `-` |
| `footer` | 列表底部 | `-` |
| `default` | 列表内容 | `-` |
| `scroll-loading` | 滚动加载时显示的内容 | `-` |
| `item` | 列表项 | `scope: { index: number; item: ObjectData }` |

---

### ListItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `actionLayout` | 操作区域的布局方向 | `Direction` | `'horizontal'` |

### ListItem Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 列表项内容 |
| `meta` | 列表项元数据 |
| `extra` | 列表项额外内容 |
| `actions` | 列表项操作 |

---

### ListItemMeta Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 列表项标题 | `string` | `-` |
| `description` | 列表项描述 | `string` | `-` |

### ListItemMeta Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `avatar` | 列表项头像 |
| `title` | 列表项标题 |
| `description` | 列表项描述 |