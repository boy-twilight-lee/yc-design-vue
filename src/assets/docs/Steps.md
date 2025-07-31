### Steps Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 步骤条的类型，可选值为 `'default'`, `'arrow'`, `'dot'`, `'navigation'` | `StepType` | `'default'` |
| `direction` | 步骤条的方向 | `Direction` | `'horizontal'` |
| `labelPlacement` | 标签的位置 | `Direction` | `'horizontal'` |
| `current` | 当前步骤 | `number` | `-` |
| `defaultCurrent` | 默认的当前步骤（非受控状态） | `number` | `1` |
| `status` | 当前步骤的状态，可选值为 `'wait'`, `'process'`, `'finish'`, `'error'` | `StepStatus` | `'process'` |
| `lineLess` | 是否隐藏连接线 | `boolean` | `false` |
| `small` | 是否使用小型步骤条 | `boolean` | `false` |
| `changeable` | 是否可以点击切换步骤 | `boolean` | `false` |

### Steps Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `change` | 点击步骤时触发 | `step: number, ev: Event` |
| `update:current` | `v-model:current` 绑定值改变时触发 | `step: number` |

### Steps Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 步骤条的内容，需要传入 `Step` 组件 |

---

### Step Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `title` | 步骤的标题 | `string` | `-` |
| `description` | 步骤的描述 | `string` | `-` |
| `status` | 步骤的状态，会覆盖 `Steps` 的 `status` | `StepStatus` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |

### Step Slots

| 插槽名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `node` | 自定义节点 | `scope: { step: number; status: StepStatus }` |
| `icon` | 自定义图标 | `scope: { step: number; status: StepStatus }` |
| `description` | 自定义描述内容 | `-` |
| `default` | 步骤的标题内容 | `-` |