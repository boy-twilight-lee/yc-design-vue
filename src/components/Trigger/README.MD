
### Trigger Props

| 参数名 | 描述 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| `popupVisible` | 弹出框是否显示 | `boolean` | `-` |
| `defaultPopupVisible` | 弹出框默认是否显示（非受控状态） | `boolean` | `false` |
| `trigger` | 触发方式 | `'hover'` \| `'click'` \| `'focus'` \| `'contextMenu'` | `'hover'` |
| `position` | 弹出框的位置 | `'top'` \| `'tl'` \| `'tr'` \| `'bottom'` \| `'bl'` \| `'br'` \| `'left'` \| `'lt'` \| `'lb'` \| `'right'` \| `'rt'` \| `'rb'` | `'bottom'` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `popupOffset` | 弹出框的偏移量（px） | `number` | `0` |
| `popupTranslate` | 弹出框的位移 | `number[]` | `-` |
| `showArrow` | 是否显示箭头 | `boolean` | `false` |
| `popuphoverStay` | 弹出框是否在鼠标移入后保持显示 | `boolean` | `true` |
| `blurToClose` | 是否在触发元素失去焦点时关闭弹出框 | `boolean` | `true` |
| `clickToClose` | 是否在点击触发元素后关闭弹出框 | `boolean` | `true` |
| `clickOutsideToClose` | 是否在点击外部区域后关闭弹出框 | `boolean` | `true` |
| `unmountOnClose` | 是否在关闭时卸载弹出框节点 | `boolean` | `false` |
| `contentClass` | 弹出框内容的类名 | `ClassName` | `-` |
| `contentStyle` | 弹出框内容的样式 | `CSSProperties` | `-` |
| `arrowClass` | 弹出框箭头的类名 | `ClassName` | `-` |
| `arrowStyle` | 弹出框箭头的样式 | `CSSProperties` | `-` |
| `animationName` | 动画类名 | `string` | `'fade-in'` |
| `duration` | 动画持续时间 | `number` | `-` |
| `mouseEnterDelay` | 鼠标移入的延迟时间（ms） | `number` | `100` |
| `mouseLeaveDelay` | 鼠标移出的延迟时间（ms） | `number` | `100` |
| `focusDelay` | 获得焦点的延迟时间（ms） | `number` | `0` |
| `autoFitPopupWidth` | 是否让弹出框的宽度和触发器对齐 | `boolean` | `false` |
| `autoFitPopupMinWidth` | 是否让弹出框的最小宽度和触发器对齐 | `boolean` | `false` |
| `popupContainer` | 弹出框的挂载容器 | `string` \| `HTMLElement` | `'body'` |
| `renderToBody` | **[已废弃]** 是否渲染到 `body` 元素，请使用 `popupContainer` | `boolean` | `true` |
| `autoFitPosition` | 是否在窗口大小改变时自动调整弹出框位置 | `boolean` | `false` |
| `updateAtScroll` | 是否在容器滚动时更新弹出框位置 | `boolean` | `false` |
| `preventFocus` | 是否阻止弹出框获取焦点 | `boolean` | `false` |
| `alignPoint` | 是否对齐鼠标位置 | `boolean` | `false` |
| `scrollToClose` | 是否在页面滚动时关闭弹出框 | `boolean` | `false` |
| `scrollToCloseDistance` | 页面滚动多少距离后关闭弹出框（px） | `number` | `100` |
| `needTransformOrigin` | 是否需要 `trasformOrigin` | `boolean` | `true` |
| `autoSetPosition` | 是否需要自由设置位置 | `boolean` | `true` |
| `onTriggerMouseenter` | 触发器 `mouseenter` 事件回调 | `() => void` | `-` |
| `onTriggerMouseleave` | 触发器 `mouseleave` 事件回调 | `() => void` | `-` |
| `onTriggerMouseclick` | 触发器 `click` 事件回调 | `() => void` | `-` |
| `onTriggerFocus` | 触发器 `focus` 事件回调 | `() => void` | `-` |
| `onTriggerBlur` | 触发器 `blur` 事件回调 | `() => void` | `-` |
| `onClickOutSide` | 点击外部区域的回调 | `() => void` | `-` |

### Trigger Emits

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:popupVisible` | 弹出框显示状态改变时触发 | `value: boolean` |
| `popup-visible-change` | 弹出框显示状态改变时触发 | `value: boolean` |
| `show` | 弹出框显示后触发 | `-` |
| `hide` | 弹出框隐藏后触发 | `-` |

### Trigger Slots

| 插槽名 | 描述 |
| :--- | :--- |
| `default` | 触发器元素 |
| `content` | 弹出框内容 |

### Trigger Expose

| 方法名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `hide` | 隐藏弹出框 | `-` |
| `show` | 显示弹出框 | `-` |
| `updatePosition` | 更新弹出框位置 | `x: number, y: number` |