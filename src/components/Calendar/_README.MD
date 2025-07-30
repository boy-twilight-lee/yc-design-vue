### Calendar Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 日历绑定的值 | `Date` | `-` |
| `defaultValue` | 默认值（非受控状态） | `Date` | `-` |
| `mode` | 日历的模式 | `'month'` \| `'year'` | `'month'` |
| `defaultMode` | 默认模式（非受控状态） | `'month'` \| `'year'` | `'month'` |
| `modes` | 可切换的模式 | `('month' \| 'year')[]` | `['month', 'year']` |

### Calendar Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: Date` |
| `update:mode` | 模式改变时触发 | `mode: CalendarMode` |
| `change` | 选择的日期改变时触发 | `value: Date` |
| `panel-change` | 日期面板切换时触发 | `value: Date` |

### Calendar Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `header` | 自定义日历头部内容。 | `scope: { year: number; month: number }` |
| `default` | 自定义日期单元格内容。 | `scope: { year: number; month: number; day: number }` |