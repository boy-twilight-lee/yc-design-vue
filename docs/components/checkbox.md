# Checkbox 复选框

在一组可选项中进行多项选择。

## 何时使用

- 在一组可选项中进行多项选择时
- 单独使用可以表示两种状态之间的切换
- 和 `CheckboxGroup` 组合使用时，提供全选/全不选功能

## 基础用法

最简单的用法，单独使用。

```vue
<template>
  <YcCheckbox v-model="checked">复选框</YcCheckbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## 默认选中

通过 `defaultChecked` 属性设置默认选中状态。

```vue
<template>
  <YcCheckbox :default-checked="true">默认选中</YcCheckbox>
</template>
```

## 禁用状态

通过 `disabled` 属性禁用复选框。

```vue
<template>
  <YcSpace>
    <YcCheckbox disabled>禁用状态</YcCheckbox>
    <YcCheckbox disabled :default-checked="true">禁用且选中</YcCheckbox>
  </YcSpace>
</template>
```

## 半选状态

通过 `indeterminate` 属性设置半选状态。

```vue
<template>
  <YcCheckbox :indeterminate="true">半选状态</YcCheckbox>
</template>
```

## 复选框组

使用 `CheckboxGroup` 组件进行多项选择。

```vue
<template>
  <YcCheckboxGroup v-model="checkedList">
    <YcCheckbox value="1">选项1</YcCheckbox>
    <YcCheckbox value="2">选项2</YcCheckbox>
    <YcCheckbox value="3">选项3</YcCheckbox>
  </YcCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['1']);
</script>
```

## 选项配置

通过 `options` 属性配置选项。

```vue
<template>
  <YcCheckboxGroup v-model="checkedList" :options="options" />
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['1']);
const options = ref([
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' }
]);
</script>
```

## 最大选择数量

通过 `max` 属性限制最大选择数量。

```vue
<template>
  <YcCheckboxGroup v-model="checkedList" :max="2">
    <YcCheckbox value="1">选项1</YcCheckbox>
    <YcCheckbox value="2">选项2</YcCheckbox>
    <YcCheckbox value="3">选项3</YcCheckbox>
    <YcCheckbox value="4">选项4</YcCheckbox>
  </YcCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['1']);
</script>
```

## 排列方向

通过 `direction` 属性设置排列方向。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCheckboxGroup v-model="checkedList" direction="horizontal">
      <YcCheckbox value="1">选项1</YcCheckbox>
      <YcCheckbox value="2">选项2</YcCheckbox>
      <YcCheckbox value="3">选项3</YcCheckbox>
    </YcCheckboxGroup>
    
    <YcCheckboxGroup v-model="checkedList" direction="vertical">
      <YcCheckbox value="1">选项1</YcCheckbox>
      <YcCheckbox value="2">选项2</YcCheckbox>
      <YcCheckbox value="3">选项3</YcCheckbox>
    </YcCheckboxGroup>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['1']);
</script>
```

## 禁用组

通过 `disabled` 属性禁用整个复选框组。

```vue
<template>
  <YcCheckboxGroup v-model="checkedList" disabled>
    <YcCheckbox value="1">选项1</YcCheckbox>
    <YcCheckbox value="2">选项2</YcCheckbox>
    <YcCheckbox value="3">选项3</YcCheckbox>
  </YcCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['1']);
</script>
```

## 自定义复选框

通过 `checkbox` 插槽自定义复选框样式。

```vue
<template>
  <YcCheckbox v-model="checked">
    <template #checkbox="{ checked, disabled }">
      <div :class="['custom-checkbox', { checked, disabled }]">
        <YcIcon-check v-if="checked" />
      </div>
    </template>
    自定义复选框
  </YcCheckbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>

<style scoped>
.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.custom-checkbox.checked {
  background: #1890ff;
  border-color: #1890ff;
  color: white;
}

.custom-checkbox.disabled {
  background: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}
</style>
```

## 事件处理

监听复选框变化事件。

```vue
<template>
  <YcCheckbox @change="onChange">复选框</YcCheckbox>
</template>

<script setup>
const onChange = (checked, ev) => {
  console.log('复选框变化:', { checked, ev });
};
</script>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 是否选中 | `boolean` | - |
| defaultChecked | 默认是否选中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| value | 复选框的值 | `CheckboxValue` | - |
| indeterminate | 是否为半选状态 | `boolean` | `false` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 选中的值列表 | `CheckboxValue[]` | - |
| defaultValue | 默认选中的值列表 | `CheckboxValue[]` | `[]` |
| max | 最大选择数量 | `number` | - |
| options | 选项配置 | `(CheckboxOption \| CheckboxValue)[]` | - |
| direction | 排列方向 | `Direction` | - |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 值变化时触发 | `(value: boolean \| CheckboxValue[])` |
| change | 值变化时触发 | `(value: boolean \| CheckboxValue[], ev?: Event)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 复选框标签内容 | - |
| checkbox | 自定义复选框 | `{ checked: boolean, disabled: boolean }` |
| label | 自定义标签 | `{ data: ObjectData }` |

### Types

```typescript
type CheckboxValue = string | number | boolean;

type CheckboxOption = (
  | CheckboxValue
  | {
      label?: string;
      value: CheckboxValue;
      disabled?: boolean;
      indeterminate?: boolean;
    }
)[];
```

## 注意事项

1. 复选框组的值必须是数组类型
2. 半选状态通常用于全选/全不选功能
3. 最大选择数量限制会在达到上限时禁用未选中的选项
4. 选项配置支持字符串、数字、布尔值或对象形式

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-checkbox {
  /* 复选框容器 */
}

.yc-checkbox-input {
  /* 复选框输入框 */
}

.yc-checkbox-checked {
  /* 选中状态 */
}

.yc-checkbox-disabled {
  /* 禁用状态 */
}

.yc-checkbox-indeterminate {
  /* 半选状态 */
}
```
