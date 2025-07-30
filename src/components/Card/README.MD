好的，这是为您生成的 Card、CardMeta 和 CardGrid 组件字段说明文档，以表格形式呈现。

### Card Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `bordered` | 是否显示边框 | `boolean` | `true` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |
| `hoverable` | 是否可悬浮 | `boolean` | `false` |
| `size` | 卡片的尺寸 | `'medium'` \| `'small'` | `'medium'` |
| `headerStyle` | 卡片头部的样式 | `CSSProperties` | `-` |
| `bodyStyle` | 卡片内容的样式 | `CSSProperties` | `-` |
| `title` | 卡片标题 | `string` | `-` |
| `extra` | 卡片右上角的操作区 | `string` | `-` |

### Card Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `actions` | 卡片的行动点，显示在卡片底部 |
| `cover` | 卡片的封面 |
| `extra` | 卡片右上角的操作区 |
| `title` | 卡片标题 |
| `default` | 卡片内容 |

---

### CardMeta Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 标题 | `string` | `-` |
| `description` | 描述 | `string` | `-` |

### CardMeta Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `description` | 描述 |
| `title` | 标题 |
| `avatar` | 头像 |

---

### CardGrid Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `hoverable` | 是否可悬浮 | `boolean` | `false` |

### CardGrid Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 网格内容 |