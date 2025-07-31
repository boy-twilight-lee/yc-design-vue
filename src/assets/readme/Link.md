### Link Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `href` | 链接地址 | `string` | `-` |
| `icon` | 是否显示图标 | `boolean` | `false` |
| `status` | 链接的状态，可选值为 `normal`, `warning`, `success`, `danger` | `LinkStatus` | `'normal'` |
| `hoverable` | 鼠标悬浮时是否显示下划线 | `boolean` | `true` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `loading` | 是否为加载中状态 | `boolean` | `false` |

### Link Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `click` | 点击链接时触发 | `event: MouseEvent` |
| `dblclick` | 双击链接时触发 | `event: MouseEvent` |
| `contextmenu` | 右键点击链接时触发 | `event: MouseEvent` |

### Link Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 链接的默认内容 |
| `icon` | 自定义图标 |