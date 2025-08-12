### Avatar Props

| 参数名             | 描述                                                                                             | 类型                                             | 默认值     |
| :----------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------- | :--------- |
| `shape`            | 头像的形状                                                                                       | `'square'` \| `'round'`                          | `'round'`  |
| `imageUrl`         | 图片头像的地址                                                                                   | `string`                                         | `-`        |
| `size`             | 头像的尺寸（px）                                                                                 | `number`                                         | `40`       |
| `autoFixFontSize`  | 是否根据头像尺寸自动调整字体大小                                                                 | `boolean`                                        | `true`     |
| `triggerType`      | 可点击头像的交互类型                                                                             | `'mask'` \| `'button'`                           | `'button'` |
| `triggerIconStyle` | 交互图标的样式                                                                                   | `CSSProperties`                                  | `-`        |
| `objectFit`        | 图片的适应方式，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | `'cover'` \| `'contain'` \| `'fill'` \| `'none'` | `'cover'`  |

### Avatar Emits

| 事件名  | 描述               | 参数             |
| :------ | :----------------- | :--------------- |
| `click` | 点击头像时触发     | `ev: MouseEvent` |
| `error` | 图片加载失败时触发 | `ev: Event`      |
| `load`  | 图片加载成功时触发 | `ev: Event`      |

### Avatar Slots

| 插槽名         | 描述                         |
| :------------- | :--------------------------- |
| `default`      | 自定义头像展示内容，例如文字 |
| `trigger-icon` | 自定义交互图标               |

---

### AvatarGroup Props

| 参数名                   | 描述                                        | 类型                    | 默认值    |
| :----------------------- | :------------------------------------------ | :---------------------- | :-------- |
| `shape`                  | 头像组内所有头像的形状                      | `'square'` \| `'round'` | `'round'` |
| `size`                   | 头像组内所有头像的尺寸（px）                | `number`                | `40`      |
| `autoFixFontSize`        | 是否根据头像尺寸自动调整字体大小            | `boolean`               | `true`    |
| `maxCount`               | 最多显示的数量，超出部分会收起              | `number`                | `0`       |
| `zIndexAscend`           | 头像组内头像的 `z-index` 是否递增           | `boolean`               | `false`   |
| `maxStyle`               | 超出部分省略号的样式                        | `CSSProperties`         | `-`       |
| `maxPopoverTriggerProps` | 超出部分省略号的弹出框 `Trigger` 组件的参数 | `TriggerProps`          | `-`       |

### AvatarGroup Slots

| 插槽名    | 描述                   |
| :-------- | :--------------------- |
| `default` | 用于放置 `Avatar` 组件 |
