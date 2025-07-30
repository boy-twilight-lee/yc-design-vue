### Dropdown

#### Dropdown Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `popupVisible` | 下拉框是否显示 | `boolean` | `-` |
| `defaultPopupVisible`| 默认是否显示（非受控状态） | `boolean` | `false` |
| `trigger` | 触发方式 | `TriggerType` | `'hover'` |
| `position` | 弹出位置 | `'top'` \| `'tr'` \| `'tl'` \| `'bottom'` \| `'br'` \| `'bl'` | `'bottom'` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `hideOnSelect` | 点击选项后是否隐藏弹出框 | `boolean` | `true` |
| `alignPoint` | 是否对齐鼠标位置 | `boolean` | `false` |
| `triggerProps` | `Trigger` 组件的参数 | `TriggerProps` | `{}` |
| `popupMaxHeight` | 弹出框的最大高度 | `number` \| `boolean` | `true` |
| `theme` | 主题 | `Theme` (`'dark'` \| `'light'`) | `'light'` |

#### Dropdown Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:popupVisible`| `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `popup-visible-change`| 弹出框显示/隐藏时触发 | `value: boolean` |
| `select` | 点击选项时触发 | `value: DoptionValue, ev: MouseEvent` |

#### Dropdown Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 触发下拉框的元素 |
| `content` | 下拉框的内容 |
| `footer` | 下拉框的页脚 |

#### Dropdown Expose

| 方法名 | 描述 |
| :--- | :--- |
| `show` | 显示下拉框 |
| `hide` | 隐藏下拉框 |

---

### Doption (Dropdown Option)

#### Doption Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `value` | 选项的值 | `DoptionValue` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `isSubmenu` | 是否为子菜单 | `boolean` | `false` |
| `isActive` | 是否为激活状态 | `boolean` | `false` |

#### Doption Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 选项的内容 |
| `icon` | 选项的图标 |
| `suffix` | 选项的后缀 |

---

### Dsubmenu (Dropdown Submenu)

#### Dsubmenu Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `trigger` | 触发方式 | `'hover'` \| `'click'` | `'hover'` |
| `position` | 弹出位置 | `'rt'` \| `'lt'` | `'rt'` |
| `popupVisible` | 弹出框是否显示 | `boolean` | `-` |
| `defaultPopupVisible`| 默认是否显示（非受控状态） | `boolean` | `false` |
| `triggerProps` | `Trigger` 组件的参数 | `TriggerProps` | `{}` |
| `popupMaxHeight` | 弹出框的最大高度 | `number` | `-` |

#### Dsubmenu Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:popupVisible`| `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `popup-visible-change`| 弹出框显示/隐藏时触发 | `value: boolean` |

#### Dsubmenu Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `content` | 子菜单的内容 |
| `default` | 触发子菜单的元素 |
| `footer` | 子菜单的页脚 |

---

### Dgroup (Dropdown Group)

#### Dgroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 分组标题 | `string` | `-` |

#### Dgroup Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `title` | 自定义分组标题 |
| `default` | 分组的内容 |

---

### DropdownButton

#### DropdownButton Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `popupVisible` | 下拉框是否显示 | `boolean` | `-` |
| `defaultPopupVisible`| 默认是否显示（非受控状态） | `boolean` | `false` |
| `trigger` | 触发方式 | `TriggerType` | `'hover'` |
| `position` | 弹出位置 | `DropdownPosition` | `'bottom'` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `type` | 按钮类型 | `ButtonType` | `'secondary'` |
| `size` | 尺寸 | `Size` | `'medium'` |
| `buttonProps` | 按钮的属性 | `ButtonProps` | `{}` |
| `hideOnSelect` | 点击选项后是否隐藏弹出框 | `boolean` | `true` |

#### DropdownButton Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `content` | 下拉框的内容 |
| `default` | 按钮的内容 |
| `icon` | 按钮右侧的图标 |