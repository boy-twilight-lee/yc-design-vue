### Radio Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定的值 | `RadioValue` | `-` |
| `defaultChecked` | 默认是否选中（非受控状态） | `boolean` | `false` |
| `value` | 单选框的值 | `RadioValue` | `-` |
| `type` | 单选框的类型，可选值为 `'radio'` 或 `'button'` | `RadioType` | `'radio'` |
| `disabled` | 是否禁用 | `boolean` | `false` |

### Radio Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: boolean` |
| `change` | 值改变时触发 | `value: RadioValue, ev: Event` |

### Radio Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 单选框的内容 | `-` |
| `radio` | 自定义单选框 | `scope: { checked: boolean; disabled: boolean }` |

---

### RadioGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 绑定的值 | `RadioValue` | `-` |
| `defaultValue` | 默认值（非受控状态） | `RadioValue` | `-` |
| `size` | 单选框组的尺寸 | `Size` | `'medium'` |
| `type` | 单选框的类型，可选值为 `'radio'` 或 `'button'` | `RadioType` | `'radio'` |
| `options` | 用于配置单选框组的选项 | `RadioOption[]` | `[]` |
| `direction` | 单选框组的排列方向 | `Direction` | `'horizontal'` |
| `disabled` | 是否禁用 | `boolean` | `false` |

### RadioGroup Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: RadioValue` |
| `change` | 值改变时触发 | `value: RadioValue` |

### RadioGroup Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 单选框组的内容 | `-` |
| `radio` | 自定义单选框 | `scope: { checked: boolean; disabled: boolean }` |
| `label` | 自定义标签内容（当使用 `options` 时） | `scope: { data: ObjectData }` |