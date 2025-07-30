### Switch Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定的值 | `SwitchValue` | `-` |
| `defaultChecked` | 默认选中状态（非受控状态） | `SwitchValue` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |
| `type` | 开关的类型，可选值为 `'circle'`, `'round'`, `'line'` | `SwitchType` | `'circle'` |
| `size` | 开关的尺寸，可选值为 `'small'`, `'medium'` | `SwitchSize` | `'medium'` |
| `checkedValue` | 选中时的值 | `SwitchValue` | `true` |
| `uncheckedValue` | 未选中时的值 | `SwitchValue` | `false` |
| `checkedColor` | 选中时的背景色 | `string` | `-` |
| `uncheckedColor` | 未选中时的背景色 | `string` | `-` |
| `checkedText` | 选中时的内容 | `string` | `-` |
| `uncheckedText` | 未选中时的内容 | `string` | `-` |
| `beforeChange` | 状态改变前的回调，返回 `false` 或 `Promise` 的 `reject` 状态可阻止改变 | `BeforeChange` | `-` |

### Switch Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: SwitchValue` |
| `change` | 状态改变时触发 | `value: SwitchValue, ev: Event` |
| `focus` | 获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 失去焦点时触发 | `ev: FocusEvent` |

### Switch Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `checked-icon` | 自定义选中状态的图标 |
| `unchecked-icon` | 自定义未选中状态的图标 |
| `checked` | 自定义选中状态的内容 |
| `unchecked` | 自定义未选中状态的内容 |