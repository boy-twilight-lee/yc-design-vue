### Button Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 按钮的类型 | `'primary'` \| `'secondary'` \| `'dashed'` \| `'outline'` \| `'text'` | `'secondary'` |
| `shape` | 按钮的形状 | `'square'` \| `'circle'` \| `'round'` | `'square'` |
| `status` | 按钮的状态 | `'normal'` \| `'warning'` \| `'success'` \| `'danger'` | `'normal'` |
| `size` | 按钮的尺寸 | `Size` (`'mini'` \| `'small'` \| `'medium'` \| `'large'`) | `'medium'` |
| `long` | 按钮的宽度是否随父元素自适应 | `boolean` | `false` |
| `loading` | 按钮是否为加载中状态 | `boolean` | `false` |
| `disabled` | 按钮是否禁用 | `boolean` | `false` |
| `htmlType` | 设置 `button` 的原生 `type` 属性 | `'button'` \| `'reset'` \| `'submit'` | `'button'` |
| `href` | 设置跳转链接。设置此属性后，按钮将渲染为 `<a>` 标签 | `string` | `-` |

### Button Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `mousedown` | 鼠标按键在按钮上按下时触发 | `event: MouseEvent` |
| `mouseup` | 鼠标按键在按钮上释放时触发 | `event: MouseEvent` |
| `click` | 点击按钮时触发 | `event: MouseEvent` |
| `dblclick` | 双击按钮时触发 | `event: MouseEvent` |
| `contextmenu` | 在按钮上右键时触发 | `event: MouseEvent` |

### Button Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 按钮的内容 |
| `icon` | 按钮的图标 |

---

### ButtonGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 统一设置按钮组内所有按钮的类型 | `'primary'` \| `'secondary'` \| `'dashed'` \| `'outline'` \| `'text'` | `'secondary'` |
| `status` | 统一设置按钮组内所有按钮的状态 | `'normal'` \| `'warning'` \| `'success'` \| `'danger'` | `'normal'` |
| `shape` | 统一设置按钮组内所有按钮的形状 | `'square'` \| `'circle'` \| `'round'` | `'square'` |
| `size` | 统一设置按钮组内所有按钮的尺寸 | `Size` | `'medium'` |
| `disabled` | 统一设置按钮组内所有按钮为禁用状态 | `boolean` | `false` |

### ButtonGroup Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 用于放置 `Button` 组件 |