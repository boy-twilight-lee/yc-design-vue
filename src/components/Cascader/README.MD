### Cascader Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `pathMode` | 值的格式是否为路径格式。开启后，`v-model` 的值会变成一个包含该节点所有父级选项的数组 | `boolean` | `false` |
| `multiple` | 是否支持多选 | `boolean` | `false` |
| `modelValue` | 级联选择器的绑定值 | `CascaderValue` | `-` |
| `defaultValue` | 级联选择器的默认值（非受控状态） | `CascaderValue` | `-` |
| `options` | 级联选择器的数据源 | `CascaderOption[]` | `[]` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `error` | 是否为错误状态 | `boolean` | `false` |
| `size` | 尺寸 | `Size` | `'medium'` |
| `allowSearch` | 是否允许搜索 | `boolean` | `false` |
| `allowClear` | 是否允许清空 | `boolean` | `false` |
| `inputValue` | 输入框的值 | `string` | `-` |
| `defaultInputValue` | 输入框的默认值（非受控状态） | `string` | `''` |
| `popupVisible` | 弹出框是否显示 | `boolean` | `-` |
| `defaultPopupVisible` | 弹出框默认是否显示（非受控状态） | `boolean` | `false` |
| `expandTrigger` | 展开下一级的触发方式 | `'click'` \| `'hover'` | `'click'` |
| `placeholder` | 输入框的占位符 | `string` | `-` |
| `filterOption` | 自定义搜索的过滤方法 | `(inputValue: string, option: CascaderOption) => boolean` | `-` |
| `popupContainer` | 弹出框的挂载容器 | `PopupContainer` | `'body'` |
| `maxTagCount` | 多选模式下，最多显示的标签数量 | `number` | `0` (表示不限制) |
| `formatLabel` | 自定义已选择项的展示 | `(options: CascaderOption[]) => string` | `-` |
| `triggerProps` | `Trigger` 组件的参数 | `TriggerProps` | `{}` |
| `loadMore` | 动态加载数据的方法 | `LoadMore` | `-` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |
| `searchOptionOnlyLabel` | 搜索时是否只匹配选项的 `label` | `boolean` | `false` |
| `searchDelay` | 搜索延迟（ms） | `number` | `500` |
| `fieldNames` | 自定义 `CascaderOption` 中的字段名 | `Record<string, string>` | `-` |
| `valueKey` | 选项 `value` 为对象时，唯一标识的 key | `string` | `'value'` |
| `fallback` | 是否为不存在于 `options` 的值显示回退样式 | `FallBack` | `true` |
| `expandChild` | 搜索时是否展开子菜单 | `boolean` | `false` |
| `tagNowrap` | 多选时，标签是否不换行 | `boolean` | `false` |

### Cascader Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: CascaderValue` |
| `update:inputValue` | 输入框值改变时触发 | `value: string` |
| `update:popupVisible` | 弹出框显示状态改变时触发 | `value: boolean` |
| `change` | 选中值改变时触发 | `value: CascaderValue` |
| `input-value-change` | 输入框值改变时触发 | `value: string` |
| `clear` | 点击清除按钮时触发 | `-` |
| `search` | 搜索时触发 | `value: string` |
| `popup-visible-change` | 弹出框显示状态改变时触发 | `value: boolean` |
| `focus` | 输入框获取焦点时触发 | `ev: FocusEvent` |
| `blur` | 输入框失去焦点时触发 | `ev: FocusEvent` |

### Cascader Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `label` | 自定义选择框的显示内容 | `scope: { data: CascaderOption }` |
| `prefix` | 选择框的前缀 | `-` |
| `arrow-icon` | 自定义箭头图标 | `-` |
| `loading-icon` | 自定义加载中图标 | `-` |
| `search-icon` | 自定义搜索图标 | `-` |
| `empty` | 选项为空时的显示内容 | `-` |
| `option` | 自定义下拉选项的内容 | `scope: { data: CascaderOption }` |