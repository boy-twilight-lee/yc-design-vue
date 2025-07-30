### Rate Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `count` | 评分的总数 | `number` | `5` |
| `modelValue` | 绑定的值 | `number` | `-` |
| `defaultValue` | 默认值（非受控状态） | `number` | `0` |
| `allowHalf` | 是否允许半选 | `boolean` | `false` |
| `allowClear` | 是否允许再次点击后清除 | `boolean` | `true` |
| `grading` | 是否开启“分级”模式，不同分数有不同颜色 | `boolean` | `false` |
| `readonly` | 是否为只读模式 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `color` | 评分的颜色，可以是单一颜色或不同分数的颜色映射 | `string \| Record<number, string>` | `-` |

### Rate Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: number` |
| `change` | 值改变时触发 | `value: number` |
| `hover-change` | 鼠标悬浮值改变时触发 | `value: number` |

### Rate Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `character` | 自定义评分图标 | `scope: { index: number }` |