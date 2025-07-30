### InputNumber Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 数字输入框的绑定值 | `InputNumberValue` (`number` \| `string`) | `-` |
| `defaultValue` | 默认值（非受控状态） | `InputNumberValue` | `undefined` |
| `mode` | 控制按钮的展现形式 | `'embed'` \| `'button'` | `'embed'` |
| `precision` | 数字精度 | `number` | `0` |
| `step` | 每次改变的步长 | `number` | `1` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `max` | 最大值 | `number` | `Infinity` |
| `min` | 最小值 | `number` | `-Infinity` |
| `placeholder` | 输入框的占位符 | `string` | `-` |
| `hideButton` | 是否隐藏控制按钮 | `boolean` | `false` |
| `size` | 输入框的尺寸 | `Size` | `'medium'` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `modelEvent` | `v-model` 绑定的更新事件 | `'change'` \| `'input'` | `'change'` |
| `formatter` | 自定义格式化展示值的方法 | `(value: string) => string` | `-` |
| `parser` | 自定义将格式化后的值反解析为数字字符串的方法 | `(value: string) => string` | `-` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `inputAttrs` | 传递给原生 `input` 元素的属性 | `ObjectData` | `-` |

### InputNumber Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: InputNumberValue` |
| `input` | 输入时触发 | `value: InputNumberValue, ev: Event` |
| `change` | 值改变时触发 | `value: InputNumberValue, ev: Event` |
| `focus` | 获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 失去焦点时触发 | `ev: FocusEvent` |
| `clear` | 点击清空按钮时触发 | `ev: MouseEvent` |
| `keydown` | 键盘按下时触发 | `ev: KeyboardEvent` |
| `pressEnter` | 按下回车键时触发 | `ev: KeyboardEvent` |

### InputNumber Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `plus` | 自定义增加按钮 |
| `minus` | 自定义减少按钮 |
| `prefix` | 输入框前缀 |
| `suffix` | 输入框后缀 |
| `prepend` | 输入框前置标签 |
| `append` | 输入框后置标签 |
| `label` | 输入框的标签 |

### InputNumber Expose

| 方法名 | 描述 |
| :--- | :--- |
| `focus` | 使输入框获取焦点 |
| `blur` | 使输入框失去焦点 |


