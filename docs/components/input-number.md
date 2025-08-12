# InputNumber 数字输入框

## 介绍

数字输入框用于输入数字类型的数据，支持键盘输入和按钮操作，可设置数值范围、精度等。

## 基础用法

### 基本使用

最简单的数字输入框用法。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-number v-model="value1" placeholder="请输入数字" />
    <p>当前值：{{ value1 }}</p>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
</script>
```

### 步进器模式

通过 `mode` 属性设置不同的步进器模式。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>嵌入模式（默认）</p>
      <yc-input-number v-model="value2" mode="embed" />
    </div>
    <div>
      <p>按钮模式</p>
      <yc-input-number v-model="value3" mode="button" />
    </div>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value2 = ref(0)
const value3 = ref(0)
</script>
```

### 设置步长

使用 `step` 属性设置每次改变的步长。

```vue
<template>
  <yc-space>
    <yc-input-number v-model="value4" :step="1" placeholder="步长 1" />
    <yc-input-number v-model="value5" :step="5" placeholder="步长 5" />
    <yc-input-number v-model="value6" :step="0.1" placeholder="步长 0.1" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value4 = ref(0)
const value5 = ref(0)
const value6 = ref(0)
</script>
```

### 设置精度

使用 `precision` 属性设置数值精度。

```vue
<template>
  <yc-space>
    <yc-input-number v-model="value7" :precision="0" placeholder="整数" />
    <yc-input-number v-model="value8" :precision="2" placeholder="保留2位小数" />
    <yc-input-number v-model="value9" :precision="4" placeholder="保留4位小数" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value7 = ref(0)
const value8 = ref(0)
const value9 = ref(0)
</script>
```

### 设置范围

使用 `min` 和 `max` 属性设置数值范围。

```vue
<template>
  <yc-space>
    <yc-input-number v-model="value10" :min="0" placeholder="最小值 0" />
    <yc-input-number v-model="value11" :max="100" placeholder="最大值 100" />
    <yc-input-number v-model="value12" :min="0" :max="100" placeholder="0-100" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value10 = ref(0)
const value11 = ref(0)
const value12 = ref(50)
</script>
```

### 格式化显示

使用 `formatter` 和 `parser` 属性格式化显示和解析输入。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>货币格式</p>
      <yc-input-number 
        v-model="value13" 
        :formatter="(value) => `¥ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
        :parser="(value) => value.replace(/¥\\s?|(,*)/g, '')"
      />
    </div>
    <div>
      <p>百分比格式</p>
      <yc-input-number 
        v-model="value14" 
        :formatter="(value) => `${value}%`"
        :parser="(value) => value.replace('%', '')"
      />
    </div>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value13 = ref(1000)
const value14 = ref(50)
</script>
```

### 不同尺寸

提供大、中、小三种尺寸。

```vue
<template>
  <yc-space>
    <yc-input-number size="large" placeholder="大尺寸" />
    <yc-input-number placeholder="默认尺寸" />
    <yc-input-number size="small" placeholder="小尺寸" />
  </yc-space>
</template>
```

### 禁用状态

通过 `disabled` 属性禁用输入框。

```vue
<template>
  <yc-space>
    <yc-input-number :model-value="100" disabled />
    <yc-input-number :model-value="100" disabled mode="button" />
  </yc-space>
</template>
```

### 只读状态 

通过 `readonly` 属性设置为只读状态。

```vue
<template>
  <yc-input-number :model-value="100" readonly />
</template>
```

### 隐藏按钮

通过 `hide-button` 属性隐藏步进按钮。

```vue
<template>
  <yc-input-number v-model="value15" hide-button placeholder="隐藏按钮" />
</template>

<script setup>
import { ref } from 'vue'

const value15 = ref(0)
</script>
```

### 错误状态

通过 `error` 属性显示错误状态。

```vue
<template>
  <yc-input-number v-model="value16" error placeholder="错误状态" />
</template>

<script setup>
import { ref } from 'vue'

const value16 = ref(0)
</script>
```

### 前缀后缀

使用插槽添加前缀和后缀内容。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-number v-model="value17">
      <template #prefix>$</template>
    </yc-input-number>
    
    <yc-input-number v-model="value18">
      <template #suffix>元</template>
    </yc-input-number>
    
    <yc-input-number v-model="value19">
      <template #prepend>价格</template>
      <template #append>.00</template>
    </yc-input-number>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value17 = ref(100)
const value18 = ref(100)
const value19 = ref(100)
</script>
```

## API

### InputNumber Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue (v-model) | 绑定值 | `number \| string` | `-` |
| default-value | 默认值 | `number \| string` | `-` |
| mode | 步进器模式 | `'embed' \| 'button'` | `'embed'` |
| precision | 数值精度 | `number` | `-` |
| step | 数字变化步长 | `number` | `1` |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| error | 是否为错误状态 | `boolean` | `false` |
| size | 尺寸 | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| placeholder | 输入框占位文本 | `string` | `-` |
| hide-button | 是否隐藏步进按钮 | `boolean` | `false` |
| allow-clear | 是否允许清空 | `boolean` | `false` |
| formatter | 格式化函数 | `(value: string) => string` | `-` |
| parser | 解析函数 | `(value: string) => string` | `-` |
| model-event | 触发 v-model 的事件 | `'change' \| 'input'` | `'change'` |

### InputNumber Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| input | 输入框内容变化时触发 | `(value: number \| string, ev: Event)` |
| change | 仅在输入框失去焦点或按下回车时触发 | `(value: number \| string, ev: Event)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |
| clear | 点击清除按钮时触发 | `(ev: MouseEvent)` |
| keydown | 键盘按下时触发 | `(ev: KeyboardEvent)` |
| press-enter | 按下回车键时触发 | `(ev: KeyboardEvent)` |

### InputNumber Slots

| 插槽名 | 描述 |
|--------|------|
| plus | 自定义加号按钮 |
| minus | 自定义减号按钮 |
| prefix | 前缀内容 |
| suffix | 后缀内容 |
| prepend | 前置内容 |
| append | 后置内容 |
| label | 标签内容 |

### InputNumber Methods

| 方法名 | 描述 | 参数 |
|--------|------|------|
| focus | 使输入框获得焦点 | `-` |
| blur | 使输入框失去焦点 | `-` |

## 类型定义

```typescript
export interface InputNumberProps {
  modelValue?: InputNumberValue;
  defaultValue?: InputNumberValue;
  mode?: InputNumberMode;
  precision?: number;
  step?: number;
  disabled?: boolean;
  error?: boolean;
  max?: number;
  min?: number;
  placeholder?: string;
  hideButton?: boolean;
  size?: Size;
  allowClear?: boolean;
  formatter?: InputNumberFormatter;
  parser?: InputNumberParser;
  readonly?: boolean;
}

export type InputNumberValue = number | string;
export type InputNumberMode = 'embed' | 'button';
export type InputNumberFormatter = (value: string) => string;
export type InputNumberParser = (value: string) => string;
```

## 设计原则

- **数值准确**：确保输入和显示的数值准确性
- **交互友好**：提供多种输入方式，支持键盘和鼠标操作
- **反馈清晰**：数值变化时提供及时的视觉反馈
- **功能完整**：支持格式化、范围限制、精度控制等功能

## 注意事项

1. 当设置 `precision` 时，输入的数值会自动格式化为指定精度
2. `formatter` 只影响显示，不影响实际的数值
3. 使用 `parser` 时需要确保能正确解析 `formatter` 格式化后的字符串
4. 数值超出 `min`/`max` 范围时会自动调整到边界值
5. 在受控模式下，建议监听 `change` 事件而非 `input` 事件