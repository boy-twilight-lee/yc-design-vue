# ColorPicker 颜色选择器

用于选择颜色，支持多种颜色格式。

## 何时使用

- 需要选择颜色时，如主题定制、样式设置等
- 需要展示颜色预览时
- 需要支持多种颜色格式时

## 基础用法

最简单的用法，选择颜色。

```vue
<template>
  <YcColorPicker v-model="color" />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 默认值

通过 `defaultValue` 属性设置默认颜色。

```vue
<template>
  <YcColorPicker :default-value="#f50" />
</template>
```

## 颜色格式

通过 `format` 属性设置颜色格式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcColorPicker v-model="hexColor" format="hex" />
    <YcColorPicker v-model="rgbColor" format="rgb" />
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const hexColor = ref('#1890ff');
const rgbColor = ref('rgb(24, 144, 255)');
</script>
```

## 显示文本

通过 `showText` 属性显示颜色值文本。

```vue
<template>
  <YcColorPicker v-model="color" show-text />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 显示历史颜色

通过 `showHistory` 属性显示历史选择的颜色。

```vue
<template>
  <YcColorPicker v-model="color" show-history />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 显示预设颜色

通过 `showPreset` 属性显示预设颜色。

```vue
<template>
  <YcColorPicker v-model="color" show-preset />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 自定义预设颜色

通过 `presetColors` 属性自定义预设颜色。

```vue
<template>
  <YcColorPicker 
    v-model="color" 
    show-preset 
    :preset-colors="presetColors"
  />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
const presetColors = ref([
  '#f50',
  '#2f54eb',
  '#faad14',
  '#52c41a',
  '#fa541c',
  '#13c2c2',
  '#722ed1',
  '#eb2f96'
]);
</script>
```

## 自定义历史颜色

通过 `historyColors` 属性自定义历史颜色。

```vue
<template>
  <YcColorPicker 
    v-model="color" 
    show-history 
    :history-colors="historyColors"
  />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
const historyColors = ref([
  '#1890ff',
  '#f50',
  '#52c41a'
]);
</script>
```

## 尺寸设置

通过 `size` 属性设置颜色选择器尺寸。

```vue
<template>
  <YcSpace>
    <YcColorPicker v-model="color" size="mini" />
    <YcColorPicker v-model="color" size="small" />
    <YcColorPicker v-model="color" size="medium" />
    <YcColorPicker v-model="color" size="large" />
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 禁用状态

通过 `disabled` 属性禁用颜色选择器。

```vue
<template>
  <YcColorPicker v-model="color" disabled />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 禁用透明度

通过 `disabledAlpha` 属性禁用透明度调节。

```vue
<template>
  <YcColorPicker v-model="color" :disabled-alpha="true" />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 隐藏触发器

通过 `hideTrigger` 属性隐藏触发器，只显示颜色面板。

```vue
<template>
  <YcColorPicker v-model="color" :hide-trigger="true" />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</template>
```

## 触发器属性

通过 `triggerProps` 属性自定义触发器行为。

```vue
<template>
  <YcColorPicker 
    v-model="color" 
    :trigger-props="{ 
      popup-visible: true,
      'popup-placement': 'bottom'
    }"
  />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');
</script>
```

## 事件处理

监听颜色变化和弹窗显示状态变化。

```vue
<template>
  <YcColorPicker 
    v-model="color"
    @change="onChange"
    @popup-visible-change="onPopupVisibleChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');

const onChange = (value) => {
  console.log('颜色变化:', value);
};

const onPopupVisibleChange = (visible, color) => {
  console.log('弹窗状态变化:', { visible, color });
};
</script>
```

## 受控用法

通过 `v-model` 控制颜色值。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcColorPicker v-model="color" />
    <div>当前颜色: {{ color }}</div>
    <YcButton @click="resetColor">重置颜色</YcButton>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#1890ff');

const resetColor = () => {
  color.value = '#1890ff';
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 当前选中的颜色 | `string` | - |
| defaultValue | 默认颜色 | `string` | - |
| format | 颜色格式 | `ColorFormat` | - |
| size | 尺寸 | `Size` | - |
| showText | 是否显示颜色值文本 | `boolean` | - |
| showHistory | 是否显示历史颜色 | `boolean` | - |
| showPreset | 是否显示预设颜色 | `boolean` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| disabledAlpha | 是否禁用透明度 | `boolean` | - |
| hideTrigger | 是否隐藏触发器 | `boolean` | - |
| triggerProps | 触发器属性 | `TriggerProps` | - |
| historyColors | 历史颜色列表 | `string[]` | - |
| presetColors | 预设颜色列表 | `string[]` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 颜色变化时触发 | `(value: string)` |
| change | 颜色变化时触发 | `(value: string)` |
| popup-visible-change | 弹窗显示状态变化时触发 | `(visible: boolean, color: string)` |

### Types

```typescript
type ColorFormat = 'hex' | 'rgb';
```

## 注意事项

1. 颜色值支持十六进制和RGB格式
2. 预设颜色和历史颜色会自动保存到本地存储
3. 禁用透明度时，颜色值将不包含alpha通道
4. 触发器属性可以控制弹窗的显示位置和行为

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-color-picker {
  /* 颜色选择器容器 */
}

.yc-color-picker-trigger {
  /* 触发器 */
}

.yc-color-picker-panel {
  /* 颜色面板 */
}

.yc-color-picker-history {
  /* 历史颜色 */
}

.yc-color-picker-preset {
  /* 预设颜色 */
}
```
