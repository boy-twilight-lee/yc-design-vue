### Layout

#### Layout Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `hasSider` | 表示子元素里有 `Sider`，一般不用指定。可用于服务端渲染时避免样式闪动。 | `boolean` | `false` |

#### Layout Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default`| 布局的内容，通常是 `LayoutHeader`, `LayoutContent`, `LayoutFooter`, `LayoutSider` 组件。 |

---

### LayoutHeader

#### LayoutHeader Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 顶部布局的内容 |

---

### LayoutContent

#### LayoutContent Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 内容部分 |

---

### LayoutFooter

#### LayoutFooter Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 底部布局的内容 |

---

### LayoutSider

#### LayoutSider Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `theme` | 主题 | `Theme` (`'dark'` \| `'light'`) | `'light'` |
| `collapsed` | 当前收起状态 | `boolean` | `-` |
| `defaultCollapsed`| 默认的收起状态（非受控状态） | `boolean` | `false` |
| `collapsible` | 是否可收起 | `boolean` | `false` |
| `width` | 侧边栏的宽度 | `number` | `200` |
| `collapsedWidth`| 收起时的宽度 | `number` | `48` |
| `reverseArrow` | 翻转折叠提示箭头的方向，当 `Sider` 在右边时可用 | `boolean` | `false` |
| `breakpoint` | 触发响应式布局的断点 | `BreakpointName` | `-` |
| `hideTrigger` | 是否隐藏触发器 | `boolean` | `false` |
| `resizeDirections`| 允许调整宽度的方向 | `Array<'left' \| 'right' \| 'top' \| 'bottom'>`| `[]` |

#### LayoutSider Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:collapsed`| `v-model:collapsed` 绑定值改变时触发 | `collapsed: boolean` |
| `collapse` | 展开-收起时的回调 | `collapsed: boolean, type: 'clickTrigger' \| 'responsive'` |
| `breakpoint` | 触发响应式布局断点时的回调 | `collapsed: boolean` |

#### LayoutSider Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 侧边栏的内容 | `-` |
| `trigger` | 自定义底部触发器 | `scope: { collapsed