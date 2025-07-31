### VerificationCode Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定的值 | `string` | `-` |
| `defaultValue` | 默认值（非受控状态） | `string` | `''` |
| `length` | 验证码的长度 | `number` | `6` |
| `size` | 输入框的尺寸 | `Size` | `'medium'` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `masked` | 是否掩码显示 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `separator` | 自定义分隔符 | `VerificationCodeSeparator` | `-` |
| `formatter` | 格式化输入值 | `VerificationCodeFormatter` | `-` |

### VerificationCode Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: string` |
| `input` | 在单个输入框输入时触发 | `value: string, ev: Event, i: number` |
| `change` | 值改变时触发 | `value: string` |
| `finish` | 输入完成时触发 | `value: string` |