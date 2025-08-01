### InputTag Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 标签的绑定值 | `InputTagValue` | `-` |
| `defaultValue` | 默认值（非受控状态） | `InputTagValue` | `[]` |
| `inputValue` | 输入框的绑定值 | `string` | `-` |
| `defaultInputValue` | 输入框的默认值（非受控状态） | `string` | `''` |
| `placeholder` | 输入框的占位符 | `string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `size` | 输入框的尺寸 | `Size` | `'medium'` |
| `maxTagCount` | 最多显示的标签数量，超出部分会省略 | `number` | `0` (不限制) |
| `retainInputValue` | 是否在失焦或创建标签后保留输入框内容 | `InputRetainValue` | `false` |
| `formatTag` | 格式化标签显示 | `FormatTag` | `-` |
| `uniqueValue` | 是否保证标签值的唯一性 | `boolean` | `false` |
| `tagNowrap` | 标签是否不换行 | `boolean` | `false` |
| `fieldNames` | 自定义 `TagData` 中的字段 | `Record<string, string>` | `-` |
| `allowCreate` | 是否允许通过输入创建标签 | `boolean` | `true` |

### InputTag Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: InputTagValue` |
| `update:inputValue` | `v-model:inputValue` 绑定值改变时触发 | `value: string` |
| `input` | 输入时触发 (**请使用 `input-value-change`**) | `value: string` |
| `input-value-change` | 输入框值改变时触发 | `value: string, ev: Event` |
| `focus` | 获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 失去焦点时触发 | `ev: FocusEvent` |
| `press-enter` | 按下回车键时触发 | `ev: KeyboardEvent` |
| `remove` | 移除标签时触发 | `value: number \| string, ev: MouseEvent \| KeyboardEvent` |
| `clear` | 点击清空按钮时触发 | `ev: MouseEvent` |

### InputTag Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `tag` | 自定义标签内容 | `scope: { tag: ObjectData }` |
| `prefix` | 输入框前缀 | `-` |
| `suffix` | 输入框后缀 | `-` |

### InputTag Expose

| 方法名 | 描述 |
| :--- | :--- |
| `focus` | 使输入框获取焦点 |
| `blur` | 使输入框失去焦点 |

