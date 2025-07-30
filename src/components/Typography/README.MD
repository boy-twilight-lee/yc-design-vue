### Typography (Base Props)

这是 `Typography.Text`, `Typography.Title`, `Typography.Paragraph` 组件共有的属性。

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `tag` | 渲染的 `DOM` 标签 | `string` | `'span'` |
| `type` | 文本类型，可选值为 `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'` | `TypographyType` | `-` |
| `bold` | 是否加粗 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `mark` | 是否添加标记 | `boolean` | `false` |
| `underline` | 是否添加下划线 | `boolean` | `false` |
| `delete` | 是否添加删除线 | `boolean` | `false` |
| `code` | 是否为代码样式 | `boolean` | `false` |
| `editable` | 是否可编辑 | `boolean` | `false` |
| `editing` | 是否处于编辑状态 | `boolean` | `-` |
| `defaultEditing` | 默认是否处于编辑状态（非受控状态） | `boolean` | `false` |
| `editText` | 编辑状态下的文本内容 | `string` | `-` |
| `copyable` | 是否可复制 | `boolean` | `false` |
| `copyText` | 复制的内容，默认为组件内容 | `string` | `-` |
| `copyDelay` | 复制后，“已复制”状态的持续时间，单位毫秒 | `number` | `3000` |
| `ellipsis` | 是否开启省略，可传入配置对象 | `boolean \| EllipsisConfig` | `false` |
| `editTooltiProps` | 编辑按钮的 `Tooltip` 组件属性 | `TooltipProps` | `-` |
| `copyTooltiProps` | 复制按钮的 `Tooltip` 组件属性 | `TooltipProps` | `-` |

### Typography (Base Emits)

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:editing` | `v-model:editing` 绑定值改变时触发 | `value: boolean` |
| `update:editText` | `v-model:editText` 绑定值改变时触发 | `value: string` |
| `edit-start` | 进入编辑状态时触发 | `-` |
| `change` | 编辑完成，内容改变时触发 | `value: string` |
| `copy` | 点击复制按钮时触发 | `value: string` |
| `edit-end` | 退出编辑状态时触发 | `-` |
| `ellipsis` | 省略状态发生改变时触发 | `isEllipsis: boolean` |
| `expand` | 点击展开/折叠按钮时触发 | `expanded: boolean` |

### Typography (Base Slots)

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `default` | 排版组件的内容 | `-` |
| `expand-node` | 自定义展开/折叠节点 | `scope: { expanded: boolean }` |
| `copy-icon` | 自定义复制图标 | `scope: { copied: boolean }` |
| `copy-tooltip` | 自定义复制按钮的 `Tooltip` 内容 | `scope: { copied: boolean }` |

---

### Typography.Paragraph Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `blockquote` | 是否为引用块样式 | `boolean` | `false` |
| `spacing` | 间距类型，可选值为 `'default'` 或 `'close'` | `'default' \| 'close'` | `'default'` |

---

### Typography.Title Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `heading` | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |

---

### EllipsisConfig

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `rows` | 最多显示的行数 | `number` | `1` |
| `expandable` | 是否可展开/折叠 | `boolean` | `false` |
| `ellipsisStr` | 省略号的字符 | `string` | `'...'` |
| `suffix` | 省略时的后缀 | `string` | `-` |
| `showTooltip` | 省略时是否显示 `Tooltip` 提示 | `boolean \| { type: 'tooltip' \| 'popover'; props: Record<string, any> }` | `false` |
| `css` | 是否使用 CSS `line-clamp` 来实现省略 | `boolean` | `false` |