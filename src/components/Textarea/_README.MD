### Textarea Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定的值 | `string` | `-` |
| `defaultValue` | 默认值（非受控状态） | `string` | `''` |
| `placeholder` | 占位符 | `string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `maxLength` | 最大长度限制 | `MaxLength` | `-` |
| `showWordLimit` | 是否显示字数限制 | `boolean` | `false` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `autoSize` | 是否自适应高度 | `AutoSize` | `false` |
| `wordLength` | 自定义字数计算规则 | `WordLength` | `-` |
| `wordSlice` | 自定义字数超出时的裁剪规则 | `WordSlice` | `-` |
| `enterPrevent` | 是否阻止回车键的默认行为 | `boolean` | `false` |
| `showMirror` | 是否显示用于内部计算的镜像元素 | `boolean` | `false` |

### Textarea Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: string` |
| `input` | 输入时触发 | `value: string, ev: Event` |
| `change` | 值改变后触发 | `value: string, ev: Event` |
| `clear` | 点击清除按钮时触发 | `ev: MouseEvent` |
| `focus` | 获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 失去焦点时触发 | `ev: FocusEvent` |
| `keydown` | 按键按下时触发 | `ev: KeyboardEvent` |

### Textarea Expose

| 方法名 | 描述 |
| :--- | :--- |
| `focus` | 使文本域获取焦点 |
| `blur` | 使文本域失去焦点 |
| `getInputRef` | 获取 `textarea` 元素的实例 |
| `getMirrorRef` | 获取用于计算高度的镜像元素的实例 |