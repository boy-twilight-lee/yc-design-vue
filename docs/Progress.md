### Progress Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `type` | 进度条的类型，可选值为 `'line'` 或 `'circle'` | `ProgressType` | `'line'` |
| `size` | 进度条的尺寸 | `Size` | `'medium'` |
| `percent` | 进度百分比 | `number` | `0` |
| `steps` | 进度条的步数（仅在 `type` 为 `line` 时可用） | `number` | `-` |
| `animation` | 是否显示动画 | `boolean` | `false` |
| `strokeWidth` | 进度条的线宽 | `number` | `-` |
| `width` | 进度条的宽度（`type` 为 `circle` 时为画布宽度） | `number` | `-` |
| `color` | 进度条的颜色，可以传入字符串或表示渐变的对象 | `ProgressColor` | `-` |
| `trackColor` | 进度条轨道的颜色 | `string` | `-` |
| `showText` | 是否显示进度文本 | `boolean` | `true` |
| `status` | 进度条的状态，可选值为 `'normal'`, `'success'`, `'warning'`, `'danger'` | `ProgressStatus` | `'normal'` |