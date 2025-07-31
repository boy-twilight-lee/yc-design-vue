### Breadcrumb Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `maxCount` | 最多显示的面包屑数量，超出部分会折叠 | `number` | `0` (表示不折叠) |
| `routes` | 通过数据配置面包屑 | `BreadcrumbRoute[]` | `[]` |
| `separator` | 分隔符 | `string` \| `number` | `'/'` |
| `customUrl` | 自定义链接地址 | `(path: string[]) => string` | `-` |

### Breadcrumb Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 用于放置 `BreadcrumbItem` 组件 | `-` |
| `item-render` | 自定义渲染面包屑，`routes` 属性生效 | `{ route, routes, paths }` |
| `more-icon` | 自定义折叠部分的图标 | `-` |
| `separator` | 自定义分隔符 | `-` |

---

### BreadcrumbItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `separator` | 分隔符 | `string` \| `number` | `'/'` |
| `droplist` | 下拉菜单的内容 | `BreadcrumbRoute[]` | `[]` |
| `dropdownProps` | 下拉菜单的属性，参考 `Dropdown` 组件 | `DropdownProps` | `{}` |
| `path` | 路由路径，用于生成链接 | `string` | `-` |
| `showSeparator` | 是否显示分隔符 | `boolean` | `true` |

### BreadcrumbItem Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 面包屑项的内容 |
| `droplist` | 自定义下拉菜单的内容 |
| `separator` | 自定义分隔符 |