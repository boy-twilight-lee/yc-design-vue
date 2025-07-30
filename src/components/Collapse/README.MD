### Collapse Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `activeKey` | 当前展开的折叠面板的 `key` | `CollapseValue[]` | `-` |
| `defaultActiveKey` | 默认展开的折叠面板的 `key`（非受控状态） | `CollapseValue[]` | `[]` |
| `accordion` | 是否开启手风琴模式 | `boolean` | `false` |
| `showExpandIcon` | 是否显示展开图标 | `boolean` | `true` |
| `expandIconPosition` | 展开图标的位置 | `'left'` \| `'right'` | `'left'` |
| `bordered` | 是否显示边框 | `boolean` | `true` |
| `destroyOnHide` | 切换时是否销毁被隐藏的面板 | `boolean` | `false` |

### Collapse Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:activekey`| `v-model:activeKey` 绑定值改变时触发 | `value: CollapseValue` |
| `change` | 展开的面板改变时触发 | `value: CollapseValue` |

### Collapse Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 用于放置 `CollapseItem` 组件 | `-` |
| `expand-icon` | 自定义展开图标 | `scope: { active: boolean; disabled: boolean; position: 'left' \| 'right' }` |

---

### CollapseItem Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `path` | 当前面板的唯一标识 | `CollapseValue` | `-` |
| `header` | 面板的标题 | `string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `showExpandIcon` | 是否显示展开图标 | `boolean` | `true` |
| `destroyOnHide` | 切换时是否销毁被隐藏的面板 | `boolean` | `false` |

### CollapseItem Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 面板的内容 | `-` |
| `header` | 自定义面板的标题 | `-` |
| `extra` | 显示在面板标题右侧的额外内容 | `-` |
| `expand-icon` | 自定义展开图标 | `scope: { active: boolean; disabled: boolean; position: 'left' \| 'right' }` |