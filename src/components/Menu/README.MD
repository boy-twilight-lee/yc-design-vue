### Menu Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `theme` | 菜单的主题 | `Theme` | `'light'` |
| `mode` | 菜单的模式，可选值为 `vertical`, `horizontal` | `MenuMode` | `'vertical'` |
| `levelIndent` | 每级菜单的缩进 | `number` | `24` |
| `autoOpen` | 是否默认展开所有多级菜单 | `boolean` | `false` |
| `collapsed` | 是否折叠菜单 | `boolean` | `-` |
| `defaultCollapsed` | 默认是否折叠菜单（非受控状态） | `boolean` | `false` |
| `collapsedWidth` | 折叠后的宽度 | `number \| string` | `48` |
| `accordion` | 是否开启手风琴模式 | `boolean` | `false` |
| `showCollapseButton` | 是否显示折叠按钮 | `boolean` | `false` |
| `selectedKeys` | 选中的菜单项 key | `string` | `-` |
| `defaultSelectedKeys` | 默认选中的菜单项 key（非受控状态） | `string` | `-` |
| `openKeys` | 展开的子菜单 key 数组 | `string[]` | `-` |
| `defaultOpenKeys` | 默认展开的子菜单 key 数组（非受控状态） | `string[]` | `[]` |
| `breakpoint` | 触发响应式布局的断点 | `BreakpointName` | `-` |
| `triggerProps` | 弹出模式下可接受所有 `Trigger` 的 `Props` | `TriggerProps` | `-` |
| `tooltipProps` | 菜单项收起时 `Tooltip` 的 `Props` | `TooltipProps` | `-` |
| `autoOpenSelected` | 是否自动展开选中的菜单项 | `boolean` | `false` |
| `autoScrollIntoView` | 是否自动滚动选中项目到可视区域 | `boolean` | `false` |
| `scrollConfig` | 滚动到可视区域的配置 | `ScrollIntoViewOptions` | `-` |
| `popupMaxHeight` | 弹出菜单的最大高度 | `PopupMaxHeight` | `true` |

### Menu Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:selectedKeys` | `selectedKeys` 改变时触发 | `value: string` |
| `update:openKeys` | `openKeys` 改变时触发 | `value: string` |
| `update:collapsed` | `collapsed` 改变时触发 | `value: boolean` |
| `collapse` | 折叠状态改变时触发 | `collapsed: boolean, type: 'clickTrigger' \| 'responsive'` |
| `menu-item-click` | 点击菜单项时触发 | `key: string` |
| `sub-menu-click` | 点击子菜单时触发 | `key: string, openKeys: string[]` |

### Menu Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 菜单的内容 |

---

### SubMenu Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `path` | 子菜单的唯一标识 | `string` | `-` |
| `title` | 子菜单的标题 | `string` | `-` |
| `selectable` | 是否在子菜单标题上显示选中态 | `boolean` | `false` |
| `popup` | 是否强制作为弹出式菜单 | `boolean` | `-` |
| `popupMaxHeight` | 弹出菜单的最大高度 | `PopupMaxHeight` | `true` |

### SubMenu Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 子菜单的内容 |
| `title` | 子菜单的标题 |
| `icon` | 子菜单的图标 |
| `expand-icon-down` | 向下展开的图标 |

---

### MenuItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `path` | 菜单项的唯一标识 | `string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |

### MenuItem Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 菜单项的内容 |
| `icon` | 菜单项的图标 |
| `suffix` | 菜单项的后缀 |

---

### MenuItemGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 菜单项分组的标题 | `string` | `-` |

### MenuItemGroup Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 菜单项分组的内容 |
| `title` | 菜单项分组的标题 |