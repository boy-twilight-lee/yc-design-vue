### Checkbox Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 复选框的绑定值，表示是否选中 | `boolean` | `-` |
| `defaultChecked` | 默认是否选中（非受控状态） | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `value` | `CheckboxGroup` 中 `option` 的 `value` | `CheckboxValue` | `-` |
| `indeterminate` | 是否为半选状态 | `boolean` | `false` |

### Checkbox Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: boolean` |
| `change` | 选中状态改变时触发 | `value: boolean, ev: Event` |

### Checkbox Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 复选框的内容 | `-` |
| `checkbox` | 自定义复选框 | `scope: { checked: boolean; disabled: boolean }` |

---

### CheckboxGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 复选框组的绑定值 | `CheckboxValue[]` | `-` |
| `defaultValue` | 默认选中的值（非受控状态） | `CheckboxValue[]` | `[]` |
| `max` | 最多可选的数量 | `number` | `0` (表示不限制) |
| `options` | 可选项 | `(CheckboxOption \| CheckboxValue)[]` | `[]` |
| `direction` | 复选框组的排列方向 | `Direction` (`'horizontal'` \| `'vertical'`) | `'horizontal'` |
| `disabled` | 是否禁用 | `boolean` | `false` |

### CheckboxGroup Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: CheckboxValue[]` |
| `change` | 选中项改变时触发 | `value: CheckboxValue[]` |

### CheckboxGroup Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 用于放置 `Checkbox` 组件 | `-` |
| `checkbox` | 自定义复选框 | `scope: { checked: boolean; disabled: boolean }` |
| `label` | 自定义选项的标签内容，`options` 生效 | `scope: { data: ObjectData }` |