### Grid

#### Grid Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `cols` | 定义栅格的列数。可以是一个数字，也可以是响应式对象，用于在不同断点下设置不同的列数。 | `number` \| `ResponsiveValue` | `24` |
| `rowGap` | 栅格的行间距。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `0` |
| `colGap` | 栅格的列间距。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `0` |
| `collapsed` | 是否折叠 | `boolean` | `false` |
| `collapsedRows` | 折叠时保留的行数 | `number` | `1` |

#### Grid Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 用于放置 `GridItem` 组件 |

---

### GridItem

#### GridItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `span` | 占用的列数。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `1` |
| `offset` | 左侧的偏移列数。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `0` |
| `suffix` | 是否为后缀元素。后缀元素会自动排到最后。 | `boolean` | `false` |

#### GridItem Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | `GridItem` 的内容。 | `scope: { overflow: boolean }` |

---

### GridRow (栅格行 - 基于 Flex)

#### GridRow Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `gutter` | 栅格间隔，可以是水平和垂直间隔，也可以是响应式对象。 | `Gutter` \| `[Gutter, Gutter]` | `0` |
| `justify` | 水平对齐方式 | `'start'` \| `'center'` \| `'end'` \| `'space-around'` \| `'space-between'` | `'start'` |
| `align` | 垂直对齐方式 | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'start'` |
| `div` | 是否使用 `div` 标签替代 `Row` 标签 | `boolean` | `false` |
| `wrap` | 是否自动换行 | `boolean` | `true` |

#### GridRow Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 用于放置 `GridCol` 组件 |

---

### GridCol (栅格列 - 基于 Flex)

#### GridCol Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `span` | 栅格占位格数 (0-24)。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `24` |
| `offset` | 栅格左侧的间隔格数。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `0` |
| `order` | 栅格顺序。可以是数字或响应式对象。 | `number` \| `ResponsiveValue` | `0` |
| `flex` | `flex` 布局属性。可以是数字或响应式对象。 | `GridColFlex` \| `ResponsiveValue` | `-` |

#### GridCol Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | `GridCol` 的内容 |