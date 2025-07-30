### Skeleton Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `animation` | 是否显示动画效果 | `boolean` | `false` |
| `loading` | 是否显示骨架屏 | `boolean` | `true` |

### Skeleton Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 需要被骨架屏替代的 UI 内容 |
| `content` | 自定义骨架屏内容 |

---

### SkeletonLine Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `rows` | 显示的行数 | `number` | `3` |
| `widths` | 每行的宽度 | `number[]` | `[]` |
| `lineHeight` | 每行的高度 | `number` | `16` |
| `lineSpacing` | 行间距 | `number` | `16` |

---

### SkeletonShape Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `shape` | 骨架屏图形的形状，可选值为 `'square'` 或 `'circle'` | `SkeletonShapeShape` | `'square'` |
| `size` | 骨架屏图形的尺寸，可选值为 `'small'`, `'medium'`, `'large'` | `SkeletonShapeSize` | `'medium'` |