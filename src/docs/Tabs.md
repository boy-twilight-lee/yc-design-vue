### Tabs Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `activeKey` | 当前激活的标签页的 `key` | `TabKey` | `-` |
| `defaultActiveKey` | 默认激活的标签页的 `key`（非受控状态） | `TabKey` | 第一个标签页的 `key` |
| `position` | 标签页的位置，可选值为 `'left'`, `'right'`, `'bottom'`, `'top'` | `TabPositon` | `'top'` |
| `size` | 标签页的尺寸 | `Size` | `'medium'` |
| `type` | 标签页的样式类型 | `TabType` | `'line'` |
| `direction` | 标签页的方向 | `Direction` | `'horizontal'` |
| `editable` | 是否为可编辑模式（可新增和删除） | `boolean` | `false` |
| `showAddButton` | 是否显示新增按钮（仅在 `editable` 为 `true` 时生效） | `boolean` | `false` |
| `destoryOnHide` | 隐藏时是否销毁标签页内容 | `boolean` | `false` |
| `justify` | 标签头部的宽度是否自适应撑开 | `boolean` | `false` |
| `animation` | 是否开启动画 | `boolean` | `true` |
| `headerPadding` | 标签头部是否设置内边距 | `boolean` | `true` |
| `autoSwitch` | 新增或删除标签页时是否自动切换 | `boolean` | `false` |
| `hideContent` | 是否隐藏内容区域 | `boolean` | `false` |
| `trigger` | 触发切换的方式，可选值为 `'click'` 或 `'hover'` | `TabTrigger` | `'click'` |

### Tabs Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:activeKey` | `v-model:activeKey` 绑定值改变时触发 | `value: TabKey` |
| `change` | 激活的标签页改变时触发 | `value: TabKey` |
| `tab-click` | 用户点击标签页时触发 | `value: TabKey` |
| `add` | 用户点击新增按钮时触发 | `-` |
| `delete` | 用户点击删除按钮时触发 | `value: TabKey` |

### Tabs Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `extra` | 标签页头部的附加内容 |
| `default` | 标签页的内容，需要传入 `TabPane` 组件 |

---

### TabPane Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 标签页的标题 | `string` | `-` |
| `path` | 标签页的唯一标识 `key` | `TabKey` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `closable` | 是否显示关闭按钮（仅在 `Tabs` 的 `editable` 为 `true` 时生效） | `boolean` | `true` |
| `destoryOnHide` | 是否在隐藏时销毁内容，会覆盖 `Tabs` 的同名属性 | `boolean` | `false` |

### TabPane Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 标签页的内容 |
| `title` | 自定义标签页标题 |