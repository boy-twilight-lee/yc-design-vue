### Select Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `multiple` | 是否开启多选模式 | `boolean` | `false` |
| `modelValue` | 绑定的值 | `SelectValue` | `-` |
| `defaultValue` | 默认值（非受控状态） | `SelectValue` | `multiple ? [] : undefined` |
| `inputValue` | 输入框的值 | `string` | `-` |
| `defaultInputValue` | 输入框的默认值（非受控状态） | `string` | `''` |
| `size` | 选择框的尺寸 | `Size` | `'medium'` |
| `placeholder` | 占位符 | `string` | `-` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `allowSearch` | 是否允许搜索 | `boolean` | `false` |
| `allowCreate` | 是否允许创建条目 | `boolean` | `false` |
| `maxTagCount` | 多选模式下最多显示多少个 `tag` | `number` | `0` (不限制) |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `bordered` | 是否显示边框 | `boolean` | `true` |
| `defaultActivefirstOption` | 是否默认高亮第一个选项 | `boolean` | `true` |
| `popupVisible` | 弹出框是否可见 | `boolean` | `-` |
| `defaultPopupVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `unmountonClose` | 关闭时是否卸载节点 | `boolean` | `false` |
| `filterOption` | 选项过滤方法 | `FilterOption` | `true` |
| `options` | 配置选项 | `SelectOptions` | `[]` |
| `virtualListProps` | 虚拟列表配置 | `VirtualListProps` | `-` |
| `triggerProps` | 可接受所有 `Trigger` 的 `Props` | `TriggerProps` | `-` |
| `formatLabel` | 格式化显示选中的值 | `FormatLabel` | `-` |
| `fallbackOption` | 当值不在选项中时，如何渲染该值 | `FallbackOption` | `-` |
| `showExtraOptions` | 是否在下拉菜单中显示额外创建的选项 | `boolean` | `true` |
| `valueKey` | 用于从 `ObjectData` 中获取值的键名 | `string` | `'value'` |
| `searchDelay` | 搜索延迟，单位毫秒 | `number` | `500` |
| `limit` | 多选时最多选择的数量 | `number` | `0` (不限制) |
| `fieldNames` | 自定义 `options` 中的字段 | `Record<string, string>` | `-` |
| `scrollbar` | 是否使用自定义滚动条 | `boolean` | `true` |
| `showHeaderOnEmpty` | 空状态时是否显示下拉框头部 | `boolean` | `false` |
| `showFooterOnEmpty` | 空状态时是否显示下拉框底部 | `boolean` | `false` |
| `tagNowrap` | 多选时标签是否不换行 | `boolean` | `false` |
| `hotkeys` | 是否开启快捷键支持 | `boolean` | `false` |
| `showEmpty` | 是否在无数据时展示 `empty` 插槽 | `boolean` | `true` |

### Select Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: SelectValue` |
| `update:inputValue` | `v-model:inputValue` 绑定值改变时触发 | `value: string` |
| `update:popupVisible` | `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `change` | 值改变时触发 | `value: SelectValue` |
| `input-value-change` | 输入框值改变时触发 | `value: string` |
| `clear` | 点击清除按钮时触发 | `-` |
| `remove` | 多选模式下移除 `tag` 时触发 | `index: number \| string, ev: Event` |
| `search` | 用户搜索时触发 | `value: string` |
| `exceedLimit` | 超出数量限制时触发 | `value: SelectValue, ev?: MouseEvent` |
| `popup-visible-change` | 弹出框显示或隐藏时触发 | `value: boolean` |
| `dropdown-scroll` | 下拉列表滚动时触发 | `ev: Event` |
| `dropdown-reach-bottom` | 下拉列表滚动到底部时触发 | `ev: Event` |
| `select` | 选中选项时触发 | `value: SelectValue` |

### Select Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 自定义选项，需传入 `Option` 或 `Optgroup` 组件 | `-` |
| `trigger` | 自定义触发元素 | `-` |
| `prefix` | 选择框的前缀 | `-` |
| `search-icon` | 自定义搜索图标 | `-` |
| `loading-icon` | 自定义加载图标 | `-` |
| `arrow-icon` | 自定义箭头图标 | `-` |
| `footer` | 下拉列表的页脚 | `-` |
| `header` | 下拉列表的页眉 | `-` |
| `label` | 自定义 `tag` 内容（多选时）或触发器显示内容（单选时） | `scope: { data: ObjectData }` |
| `option` | 自定义选项内容（使用 `options` 时） | `scope: { data: ObjectData }` |
| `empty` | 无数据时显示的内容 | `-` |

### Select Expose

| 方法名 | 描述 |
| :--- | :--- |
| `focus` | 使选择框获取焦点 |
| `blur` | 使选择框失去焦点 |
| `getPopupRef` | 获取弹出框的实例 |

---

### Option Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `label` | 选项的文本 | `string` | `-` |
| `value` | 选项的值 | `SelectValue` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `tagProps` | 多选模式下，设置此选项 `tag` 的 `Props` | `TagProps` | `-` |
| `id` | 选项的唯一 `id` | `string` | `-` |
| `isFallbackOption` | 是否为 `fallback` 选项 | `boolean` | `false` |

### Option Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 选项的内容 |
| `icon` | 选项的图标 |
| `suffix` | 选项的后缀 |

---

### Optgroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `label` | 分组的标题 | `string` | `-` |

### Optgroup Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 分组的内容，需传入 `Option` 组件 |
| `label` | 自定义分组标题 |