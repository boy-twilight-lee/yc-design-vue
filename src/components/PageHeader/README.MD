### PageHeader Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 页头主标题 | `string` | `-` |
| `subtitle` | 页头副标题 | `string` | `-` |
| `showBack` | 是否显示返回按钮 | `boolean` | `true` |

### PageHeader Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `back` | 点击返回按钮时触发 | `ev: Event` |

### PageHeader Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 内容区域 |
| `breadcrumb` | 面包屑区域 |
| `back-icon` | 自定义返回图标 |
| `title` | 自定义主标题 |
| `subtitle` | 自定义副标题 |
| `extra` | 操作区，显示在页头右侧 |