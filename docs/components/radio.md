# Radio 单选框

单选框组件。

## 何时使用

- 在多个互斥的选项中进行单项选择时
- 需要用户从一组选项中选择一个时
- 需要展示选项状态时

## 基础用法

最简单的单选框用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcRadio v-model="checked" value="option1">选项 1</YcRadio>
    <YcRadio v-model="checked" value="option2">选项 2</YcRadio>
    <YcRadio v-model="checked" value="option3">选项 3</YcRadio>
    
    <div>当前选中: {{ checked }}</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref('option1');
</script>
```

## 单选组

通过 `YcRadioGroup` 组件创建单选组。

```vue
<template>
  <YcRadioGroup v-model="selectedValue" @change="onChange">
    <YcRadio value="apple">苹果</YcRadio>
    <YcRadio value="banana">香蕉</YcRadio>
    <YcRadio value="orange">橙子</YcRadio>
  </YcRadioGroup>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('apple');

const onChange = (value) => {
  console.log('选中值:', value);
};
</script>
```

## 选项配置

通过 `options` 属性配置选项。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>字符串数组</h4>
      <YcRadioGroup 
        v-model="selectedValue1" 
        :options="['选项1', '选项2', '选项3']"
      />
    </div>
    
    <div>
      <h4>对象数组</h4>
      <YcRadioGroup 
        v-model="selectedValue2" 
        :options="objectOptions"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue1 = ref('选项1');
const selectedValue2 = ref('option1');

const objectOptions = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3', disabled: true }
];
</script>
```

## 按钮样式

通过 `type="button"` 属性启用按钮样式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认样式</h4>
      <YcRadioGroup v-model="selectedValue1">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
    
    <div>
      <h4>按钮样式</h4>
      <YcRadioGroup v-model="selectedValue2" type="button">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue1 = ref('option1');
const selectedValue2 = ref('option1');
</script>
```

## 尺寸设置

通过 `size` 属性设置单选框尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcRadioGroup v-model="selectedValue" size="small">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcRadioGroup v-model="selectedValue" size="medium">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcRadioGroup v-model="selectedValue" size="large">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('option1');
</script>
```

## 布局方向

通过 `direction` 属性设置布局方向。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>水平布局</h4>
      <YcRadioGroup v-model="selectedValue" direction="horizontal">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
    
    <div>
      <h4>垂直布局</h4>
      <YcRadioGroup v-model="selectedValue" direction="vertical">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('option1');
</script>
```

## 禁用状态

通过 `disabled` 属性禁用单选框。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>禁用单个选项</h4>
      <YcRadioGroup v-model="selectedValue">
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2" disabled>选项2（禁用）</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
    
    <div>
      <h4>禁用整个组</h4>
      <YcRadioGroup v-model="selectedValue" disabled>
        <YcRadio value="option1">选项1</YcRadio>
        <YcRadio value="option2">选项2</YcRadio>
        <YcRadio value="option3">选项3</YcRadio>
      </YcRadioGroup>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('option1');
</script>
```

## 完整示例

一个完整的单选框使用示例。

```vue
<template>
  <div class="page">
    <h2>Radio 单选框示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace direction="vertical" size="large">
        <YcRadio v-model="checked" value="option1">选项 1</YcRadio>
        <YcRadio v-model="checked" value="option2">选项 2</YcRadio>
        <YcRadio v-model="checked" value="option3">选项 3</YcRadio>
        
        <div>当前选中: {{ checked }}</div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>单选组</h3>
      <YcRadioGroup v-model="selectedValue" @change="onChange">
        <YcRadio value="apple">苹果</YcRadio>
        <YcRadio value="banana">香蕉</YcRadio>
        <YcRadio value="orange">橙子</YcRadio>
      </YcRadioGroup>
      
      <div style="margin-top: 16px;">当前选中: {{ selectedValue }}</div>
    </div>
    
    <div class="section">
      <h3>按钮样式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认样式</h4>
          <YcRadioGroup v-model="buttonValue1">
            <YcRadio value="option1">选项1</YcRadio>
            <YcRadio value="option2">选项2</YcRadio>
            <YcRadio value="option3">选项3</YcRadio>
          </YcRadioGroup>
        </div>
        
        <div>
          <h4>按钮样式</h4>
          <YcRadioGroup v-model="buttonValue2" type="button">
            <YcRadio value="option1">选项1</YcRadio>
            <YcRadio value="option2">选项2</YcRadio>
            <YcRadio value="option3">选项3</YcRadio>
          </YcRadioGroup>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>尺寸设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcRadioGroup v-model="sizeValue" size="small">
            <YcRadio value="option1">选项1</YcRadio>
            <YcRadio value="option2">选项2</YcRadio>
            <YcRadio value="option3">选项3</YcRadio>
          </YcRadioGroup>
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcRadioGroup v-model="sizeValue" size="large">
            <YcRadio value="option1">选项1</YcRadio>
            <YcRadio value="option2">选项2</YcRadio>
            <YcRadio value="option3">选项3</YcRadio>
          </YcRadioGroup>
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref('option1');
const selectedValue = ref('apple');
const buttonValue1 = ref('option1');
const buttonValue2 = ref('option1');
const sizeValue = ref('option1');

const onChange = (value) => {
  console.log('选中值:', value);
};
</script>

<style scoped>
.page {
  padding: 24px;
}

.section {
  margin-bottom: 32px;
}

.section h3 {
  margin-bottom: 16px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
}

.section h4 {
  margin-bottom: 12px;
  color: #666;
}
</style>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `RadioValue` | - |
| defaultChecked | 默认是否选中 | `boolean` | `false` |
| value | 单选框的值 | `RadioValue` | - |
| type | 单选框类型 | `RadioType` | `'radio'` |
| disabled | 是否禁用 | `boolean` | `false` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `RadioValue` | - |
| defaultValue | 默认值 | `RadioValue` | - |
| size | 单选框组尺寸 | `Size` | `'medium'` |
| type | 单选框类型 | `RadioType` | `'radio'` |
| options | 选项配置 | `RadioOption` | - |
| direction | 布局方向 | `Direction` | `'horizontal'` |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: RadioValue)` |
| change | 值变化时触发 | `(value: RadioValue, ev: Event)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 标签内容 | - |
| radio | 自定义单选框 | `{ checked: boolean, disabled: boolean }` |
| label | 自定义标签 | `{ data: ObjectData }` |

### RadioValue

| 类型 | 说明 |
| --- | --- |
| `string` | 字符串值 |
| `number` | 数字值 |
| `boolean` | 布尔值 |

### RadioType

| 类型 | 说明 |
| --- | --- |
| `'radio'` | 默认单选框样式 |
| `'button'` | 按钮样式 |

### RadioOption

| 类型 | 说明 |
| --- | --- |
| `RadioValue` | 简单值 |
| `{ label?: string, value: RadioValue, disabled?: boolean }` | 对象配置 |

## 注意事项

1. 单选框组中的每个单选框必须有唯一的 `value` 值
2. 可以通过 `options` 属性快速配置选项
3. 按钮样式的单选框适合选项较少的情况
4. 支持表单验证和禁用状态

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-radio {
  /* 单选框容器 */
}

.yc-radio-input {
  /* 单选框输入框 */
}

.yc-radio-inner {
  /* 单选框内部样式 */
}

.yc-radio-checked .yc-radio-inner {
  /* 选中状态的内部样式 */
}

.yc-radio-disabled {
  /* 禁用状态 */
}

.yc-radio-group {
  /* 单选框组容器 */
}

.yc-radio-button-wrapper {
  /* 按钮样式包装器 */
}

.yc-radio-button-wrapper-checked {
  /* 按钮样式选中状态 */
}
```
