### Descriptions Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `data` | 描述列表的数据 | `DescData[]` | `[]` |
| `column` | 一行 `DescriptionsItem` 的数量，可以是大中小不同尺寸下的数量 | `number` \| `ResponsiveValue` | `3` |
| `title` | 描述列表的标题 | `string` | `-` |
| `layout` | 描述布局 | `'horizontal'` \| `'vertical'` \| `'inline-horizontal'` \| `'inline-vertical'` | `'horizontal'` |
| `align` | 文本的对齐方式 | `DescriptionsAlign` | `'left'` |
| `size` | 描述列表的尺寸 | `Size` | `'medium'` |
| `bordered` | 是否显示边框 | `boolean` | `false` |
| `labelStyle` | `label` 的样式 | `CSSProperties` | `-` |
| `valueStyle` | `value` 的样式 | `CSSProperties` | `-` |
| `tableLayout` | `table` 的 `table-layout` 属性，`bordered` 为 `true` 时生效 | `'auto'` \| `'fixed'` | `'auto'` |

### Descriptions Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 用于放置 `DescriptionsItem` 组件 | `-` |
| `value` | 自定义 `value` 内容，`data` 模式生效 | `scope: { value: string; index: number; data: DescData }` |
| `label` | 自定义 `label` 内容，`data` 模式生效 | `scope: { label: string; index: number; data: DescData }` |
| `title` | 自定义标题 | `-` |

---

### DescriptionsItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `span` | 占用的列数 | `number` | `1` |
| `label` | `label` 的内容 | `string` | `-` |

### DescriptionsItem Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | `value` 的内容 |
| `label` | 自定义 `label` |