### Mention Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定值 | `string` | `-` |
| `defaultValue` | 默认值（非受控状态） | `string` | `''` |
| `data` | 可供选择的数据 | `SelectOptions` | `[]` |
| `prefix` | 触发提及功能的字符 | `string \| string[]` | `'@'` |
| `split` | 选中项和内容的分隔符 | `string` | `' '` |
| `type` | 输入框的类型 | `'input' \| 'textarea'` | `'input'` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |

### Mention Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | 绑定值改变时触发 | `value: string` |
| `change` | 值改变时触发 | `value: string` |
| `search` | 用户搜索时触发 | `value: string` |
| `select` | 选中选项时触发 | `value: SelectValue` |
| `focus` | 获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 失去焦点时触发 | `ev: FocusEvent` |
| `clear` | 点击清除按钮时触发 | `ev: MouseEvent` |
| `input` | 用户输入时触发 | `value: string, ev: Event` |

### Mention Expose

| 方法名 | 描述 |
| :--- | :--- |
| `focus` | 使输入框获取焦点 |
| `blur` | 使输入框失去焦点 |

### Mention Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `option` | 自定义备选项 | `scope: { data: ObjectData }` |