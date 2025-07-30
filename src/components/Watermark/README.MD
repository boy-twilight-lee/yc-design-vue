### Watermark Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `content` | 水印的文本内容，可以是字符串或字符串数组 | `string \| string[]` | `-` |
| `image` | 图片水印的地址 | `string` | `-` |
| `width` | 水印的宽度 | `number` | `120` |
| `height` | 水印的高度 | `number` | `64` |
| `gap` | 水印之间的水平和垂直间距 | `number[]` | `[100, 100]` |
| `offset` | 水印距离容器左上角的偏移量 | `number[]` | `[gap[0]/2, gap[1]/2]` |
| `rotate` | 水印的旋转角度 | `number` | `-22` |
| `font` | 水印的字体样式配置 | `WatermarkFont` | `-` |
| `zIndex` | 水印的 `z-index` | `number` | `9` |
| `alpha` | 水印的透明度 | `number` | `0.15` |
| `grayscale` | 图片水印是否应用灰度 | `boolean` | `false` |
| `repeat` | 水印是否重复 | `boolean` | `true` |
| `staggered` | 是否交错排列 | `boolean` | `true` |
| `antiTamper` | 是否开启防篡改功能 | `boolean` | `true` |

### WatermarkFont

`font` 属性是一个对象，用于配置文本水印的字体样式。

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `color` | 字体颜色 | `string` | `'rgba(0,0,0,.15)'` |
| `fontSize` | 字体大小 | `number` | `16` |
| `fontFamily` | 字体 | `string` | `'sans-serif'` |
| `fontStyle` | 字体样式 | `'none' \| 'normal' \| 'italic' \| 'oblique'` | `'normal'` |
| `textAlign` | 文本对齐方式 | `'start' \| 'end' \| 'left' \| 'right' \| 'center'` | `'center'` |
| `fontWeight` | 字体粗细 | `'normal' \| 'bold' \| 'bolder' \| 'lighter' \| number` | `'normal'` |

### Watermark Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 需要添加水印的内容区域 |