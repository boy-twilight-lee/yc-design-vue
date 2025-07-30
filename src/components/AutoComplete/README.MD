### AutoComplete Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 自动完成的绑定值 | `string` | `-` |
| `defaultValue` | 自动完成的默认值（非受控状态） | `string` | `''` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `data` | 自动完成的数据源 | `SelectOptions` | `[]` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `strict` | 是否开启严格模式，仅允许选择 seçenek 中的值 | `boolean` | `false` |
| `filterOption` | 自定义过滤选项的方法 | `(inputValue: string, option: SelectOptionData) => boolean` | `-` |
| `triggerProps` | `Trigger` 组件的参数 | `TriggerProps` | `{}` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `vistualListProps` | 传递给 `VirtualList` 的参数，用于开启虚拟滚动 | `VirtualListProps` | `{}` |
| `isSelectSetValue` | 是否在选择时更新输入框的值 | `boolean` | `true` |
| `isSearch` | 是否为搜索模式 | `boolean` | `false` |
| `type` | 输入框的类型 | `'textarea'` \| `'input'` | `'input'` |

### AutoComplete Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: string` |
| `change` | 值改变时触发 | `value: string` |
| `search` | 用户搜索时触发 | `value: string` |
| `select` | 选择选项时触发 | `value: string` |
| `clear` | 点击清空按钮时触发 | `ev?: Event` |
| `dropdown-scroll` | 下拉列表滚动时触发 | `ev?: Event` |
| `dropdown-reach-bottom` | 下拉列表滚动到底部时触发 | `ev?: Event` |
| `blur` | 输入框失去焦点时触发 | `ev: FocusEvent` |
| `focus` | 输入框获取焦点时触发 | `ev: FocusEvent` |
| `input` | 输入框内容改变时触发 | `value: string, ev: Event` |
| `keydown` | 键盘按下时触发 | `ev: KeyboardEvent` |

### AutoComplete Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `option` | 自定义选项的内容，参数为 `{ data: ObjectData }` |
| `footer` | 下拉框的页脚 |
| `trigger` | 自定义触发元素 |

### AutoComplete Expose

| 方法名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `focus` | 使输入框获取焦点 | `-` |
| `blur` | 使输入框失去焦点 | `-` |
| `getInputRef` | 获取输入框元素的实例 | `-` |
| `getMirrorRef` | 获取用于计算 `textarea` 高度的镜像元素的实例 | `-` |
| `updatePosition` | 更新弹出框的位置 | `x: number, y: number` |