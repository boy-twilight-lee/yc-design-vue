### Slider Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定的值 | `SliderValue` | `-` |
| `defaultValue` | 默认值（非受控状态） | `SliderValue` | `0` |
| `step` | 步长。必须大于 0，且可被 `(max - min)` 整除 | `number` | `1` |
| `min` | 最小值 | `number` | `0` |
| `marks` | 刻度标记，`key` 的类型必须为 `number` 且在 `min` 和 `max` 范围内 | `Record<number, string>` | `{}` |
| `max` | 最大值 | `number` | `100` |
| `direction` | 滑块的方向 | `Direction` | `'horizontal'` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `showTicks` | 是否显示刻度线 | `boolean` | `false` |
| `showInput` | 是否显示输入框（仅在单滑块模式下生效） | `boolean` | `false` |
| `range` | 是否开启范围选择 | `boolean` | `false` |
| `showTooltip` | 是否显示提示框 | `boolean` | `true` |
| `formatTooltip` | 格式化提示框显示的内容 | `FormatTooltip` | `(value) => value` |

### Slider Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: SliderValue` |
| `change` | 值改变后触发 | `value: SliderValue` |