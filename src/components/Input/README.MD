### Input Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 输入框的绑定值 | `string` | `-` |
| `defaultValue` | 输入框的默认值（非受控状态） | `string` | `''` |
| `size` | 输入框的尺寸 | `Size` | `'medium'` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `placeholder` | 输入框的占位符 | `string` | `-` |
| `maxLength` | 输入框的最大长度。传入对象时可设置是否只在超过长度时展示错误状态。 | `MaxLength` | `-` |
| `wordLength` | 自定义字符长度的计算方法 | `WordLength` | `-` |
| `wordSlice` | 自定义 `maxLength` 超出时的截取方法 | `WordSlice` | `-` |
| `showWordLimit` | 是否显示字数统计 | `boolean` | `false` |
| `inputAttrs` | 传递给原生 `input` 元素的属性 | `ObjectData` | `-` |
| `isPassword` | 是否为密码输入框 | `boolean` | `false` |
| `visibility` | 密码是否可见（受控） | `boolean` | `false` |
| `defaultVisibility` | 密码默认是否可见（非受控状态） | `boolean` | `false` |
| `invisibleButton` | 是否显示密码切换按钮 | `boolean` | `true` |
| `showInput` | 是否显示输入框 | `boolean` | `true` |

### Input Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: string` |
| `update:visibility` | `v-model:visibility` 绑定值改变时触发 | `value: boolean` |
| `input` | 输入时触发 | `value: string, ev: Event` |
| `change` | 值改变时触发 | `value: string, ev: Event` |
| `visibility-change` | 密码可见性改变时触发 | `value: boolean` |
| `pressEnter` | 按下回车键时触发 | `ev: KeyboardEvent` |
| `keydown` | 键盘按下时触发 | `ev: KeyboardEvent` |
| `clear` | 点击清空按钮时触发 | `ev: MouseEvent` |
| `focus` | 获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 失去焦点时触发 | `ev: FocusEvent` |

### Input Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `prefix` | 输入框前缀 |
| `suffix` | 输入框后缀 |
| `prepend` | 输入框前置标签 |
| `append` | 输入框后置标签 |
| `label` | 输入框的标签 |

### Input Expose

| 方法名 | 描述 |
| :--- | :--- |
| `focus` | 使输入框获取焦点 |
| `blur` | 使输入框失去焦点 |
| `getInputRef` | 获取原生 `input` 元素 |