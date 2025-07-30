### ColorPicker Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `modelValue` | 颜色选择器的绑定值 | `string` | `-` |
| `defaultValue` | 默认值（非受控状态） | `string` | `-` |
| `format` | 值的格式 | `'hex'` \| `'rgb'` | `'hex'` |
| `size` | 尺寸 | `Size` | `'medium'` |
| `showText` | 是否在拾色器上显示当前颜色值 | `boolean` | `false` |
| `showHistory` | 是否显示历史颜色 | `boolean` | `false` |
| `showPreset` | 是否显示预设颜色 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `disabledAlpha` | 是否禁用 Alpha 透明度 | `boolean` | `false` |
| `hideTrigger` | 是否隐藏触发器 | `boolean` | `false` |
| `triggerProps` | `Trigger` 组件的参数 | `TriggerProps` | `-` |
| `historyColors` | 历史颜色的色值列表 | `string[]` | `[]` |
| `presetColors` | 预设颜色的色值列表 | `string[]` | `[]` |

### ColorPicker Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | `v-model` 绑定值改变时触发 | `value: string` |
| `change` | 选中的颜色发生改变时触发 | `value: boolean` |
| `popup-visible-change`| 弹出框显示/隐藏时触发 | `value: boolean, color: string` |