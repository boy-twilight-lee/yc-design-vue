### Tag Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `color` | 标签的颜色，可以是预设颜色或自定义颜色值 | `string` | `-` |
| `size` | 标签的尺寸，可选值为 `'small'`, `'medium'`, `'large'` | `TagSize` | `'medium'` |
| `bordered` | 是否带边框 | `boolean` | `false` |
| `visible` | 标签是否可见 | `boolean` | `-` |
| `defaultVisible` | 默认是否可见（非受控状态） | `boolean` | `true` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |
| `closable` | 是否可关闭 | `boolean` | `false` |
| `checkable` | 是否可选中 | `boolean` | `false` |
| `checked` | 是否为选中状态 | `boolean` | `-` |
| `defaultChecked` | 默认是否为选中状态（非受控状态） | `boolean` | `false` |
| `nowrap` | 文本是否不换行 | `boolean` | `false` |

### Tag Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:visible` | `v-model:visible` 绑定值改变时触发 | `value: boolean` |
| `update:checked` | `v-model:checked` 绑定值改变时触发 | `value: boolean` |
| `close` | 点击关闭按钮时触发 | `ev: MouseEvent, value?: string` |
| `check` | 点击标签时触发（仅在 `checkable` 为 `true` 时） | `value: boolean, ev: MouseEvent` |

### Tag Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 标签的内容 |
| `icon` | 自定义标签的图标 |
| `close-icon` | 自定义关闭按钮的图标 |