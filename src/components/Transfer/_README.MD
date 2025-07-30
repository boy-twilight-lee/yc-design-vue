### Transfer Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `data` | 穿梭框的数据 | `TransferItem[]` | `[]` |
| `modelValue` | 目标选择框中的值 | `string[]` | `-` |
| `defaultValue` | 目标选择框中默认的值（非受控状态） | `string[]` | `[]` |
| `selected` | 选中的数据 | `string[]` | `-` |
| `defaultSelected` | 默认选中的数据（非受控状态） | `string[]` | `[]` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `simple` | 是否开启简约模式 | `boolean` | `false` |
| `oneWay` | 是否开启单向模式 | `boolean` | `false` |
| `showSearch` | 是否显示搜索框 | `boolean` | `false` |
| `showSelectAll` | 是否显示全选 | `boolean` | `true` |
| `title` | 两个穿梭框的标题 | `string[]` | `['源数据', '目标数据']` |
| `sourceInputSearchProps` | 自定义源穿梭框的 `Input` 组件属性 | `InputProps` | `-` |
| `targetInputSearchProps` | 自定义目标穿梭框的 `Input` 组件属性 | `InputProps` | `-` |

### Transfer Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:selected` | `v-model:selected` 绑定值改变时触发 | `value: TransferItemValue[]` |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: TransferItemValue[]` |
| `change` | 目标选择框中值改变时触发 | `value: TransferItemValue[]` |
| `select` | 选中项改变时触发 | `value: TransferItemValue[]` |
| `search` | 搜索时触发 | `value: string, type: 'target' \| 'source'` |

### Transfer Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `source` | 源面板内容 | `scope: { data: TransferItem[], selectedKeys: string[], onSelect: (value: TransferItemValue[]) => void }` |
| `target` | 目标面板内容 | `scope: { data: TransferItem[], selectedKeys: string[], onSelect: (value: TransferItemValue[]) => void }` |
| `source-title` | 源面板标题 | `scope: { countTotal: number, countSelected: number, ... }` |
| `target-title` | 目标面板标题 | `scope: { countTotal: number, countSelected: number, ... }` |
| `to-source-icon` | 自定义移动到源面板的按钮图标 | `-` |
| `to-target-icon` | 自定义移动到目标面板的按钮图标 | `-` |
| `item` | 自定义列表项 | `scope: { value: string; label: string }` |