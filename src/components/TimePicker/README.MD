### TimePicker Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 选择器的类型，可选值为 `'time'` 或 `'time-range'` | `TimePickerType` | `'time'` |
| `modelValue` | 绑定的值 | `TimePickerValue` | `-` |
| `defaultValue` | 默认值（非受控状态） | `TimePickerValue` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `format` | 显示的时间格式 | `string` | `'HH:mm:ss'` |
| `placeholder` | 占位符 | `string \| string[]` | `-` |
| `size` | 选择器的尺寸 | `Size` | `'medium'` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `step` | 时间步长设置 | `{ hour?: number; minute?: number; second?: number }` | `{}` |
| `disabledHours` | 禁用的小时选项 | `() => number[]` | `-` |
| `disabledMinutes` | 禁用的分钟选项 | `(selectedHour?: number) => number[]` | `-` |
| `disabledSeconds` | 禁用的秒数选项 | `(selectedHour?: number, selectedMinute?: number) => number[]` | `-` |
| `hideDisabledOptions` | 是否隐藏禁用的选项 | `boolean` | `false` |
| `disableConfirm` | 是否禁用确认步骤，选择后将直接关闭 | `boolean` | `false` |
| `position` | 弹出位置 | `TimePickerPosition` | `'bl'` |
| `popupVisible` | 弹出框是否可见 | `boolean` | `-` |
| `defaultPopupVisible` | 默认是否可见（非受控状态） | `boolean` | `false` |
| `triggerProps` | 可接受所有 `Trigger` 的 `Props` | `TriggerProps` | `-` |
| `unmountOnClose` | 关闭时是否卸载节点 | `boolean` | `false` |

### TimePicker Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: TimePickerValue` |
| `update:popupVisible` | `v-model:popupVisible` 绑定值改变时触发 | `value: boolean` |
| `change` | 值改变后（点击确认按钮）触发 | `timeString: string \| (string \| undefined)[], time: Date \| (Date \| undefined)[]` |
| `select` | 选择时间时触发 | `timeString: string \| (string \| undefined)[], time: Date \| (Date \| undefined)[]` |
| `clear` | 点击清除按钮时触发 | `-` |
| `popup-visible-change` | 弹出框显示或隐藏时触发 | `value: boolean` |

### TimePicker Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `prefix` | 选择框的前缀 |
| `suffix-icon` | 自定义选择框的后缀图标 |
| `extra` | 弹出框的附加内容，显示在底部 |