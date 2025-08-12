# Input 输入框

## 介绍

输入框用于收集用户输入的信息。

## 基础用法

### 基础输入框

最基础的输入框用法。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input v-model="input1" placeholder="请输入内容" />
    <yc-input v-model="input2" placeholder="禁用状态" disabled />
    <yc-input v-model="input3" placeholder="只读状态" readonly />
  </yc-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('禁用内容')
const input3 = ref('只读内容')
</script>
```

### 输入框尺寸

输入框有三种尺寸：大、中、小。默认为中等尺寸。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input size="large" placeholder="大尺寸输入框" />
    <yc-input placeholder="中尺寸输入框" />
    <yc-input size="small" placeholder="小尺寸输入框" />
  </yc-space>
</template>
```

### 输入框状态

输入框有四种状态：正常、成功、警告、错误。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input placeholder="正常状态" />
    <yc-input status="success" placeholder="成功状态" />
    <yc-input status="warning" placeholder="警告状态" />
    <yc-input status="error" placeholder="错误状态" />
  </yc-space>
</template>
```

### 带前缀和后缀

输入框可以添加前缀和后缀图标或文字。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input>
      <template #prefix>
        <yc-icon-search />
      </template>
      <template #suffix>
        <yc-icon-close-circle-fill />
      </template>
    </yc-input>
    
    <yc-input>
      <template #prefix>https://</template>
      <template #suffix>.com</template>
    </yc-input>
  </yc-space>
</template>
```

### 密码输入框

密码输入框会自动隐藏输入内容。

```vue
<template>
  <yc-input v-model="password" type="password" placeholder="请输入密码" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
</script>
```

### 文本域

文本域用于输入多行文本。

```vue
<template>
  <yc-textarea v-model="content" placeholder="请输入多行文本" :rows="4" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('')
</script>
```

### 搜索输入框

搜索输入框带有搜索按钮。

```vue
<template>
  <yc-input-search
    v-model="searchText"
    placeholder="请输入搜索内容"
    search-button
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchText = ref('')

const handleSearch = (value: string) => {
  console.log('搜索:', value)
}
</script>
```

### 数字输入框

数字输入框用于输入数字，支持步进器。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-number v-model="number1" placeholder="请输入数字" />
    <yc-input-number
      v-model="number2"
      :min="0"
      :max="100"
      :step="5"
      placeholder="0-100，步长5"
    />
  </yc-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const number1 = ref(0)
const number2 = ref(0)
</script>
```

### 标签输入框

标签输入框用于输入多个标签。

```vue
<template>
  <yc-input-tag
    v-model="tags"
    placeholder="请输入标签，按回车确认"
    :max-tag-count="5"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['标签1', '标签2'])
</script>
```

## API

### Input Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| model-value / v-model | 绑定值 | `string \| number` | `-` |
| type | 输入框类型 | `'text' \| 'password' \| 'number' \| 'email' \| 'url' \| 'tel'` | `'text'` |
| size | 输入框尺寸 | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| status | 输入框状态 | `'normal' \| 'success' \| 'warning' \| 'error'` | `'normal'` |
| placeholder | 输入框占位符 | `string` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| allow-clear | 是否允许清空 | `boolean` | `false` |
| max-length | 最大输入长度 | `number` | `-` |
| show-word-limit | 是否显示字数统计 | `boolean` | `false` |
| auto-size | 自适应内容高度 | `boolean \| { minRows: number; maxRows: number }` | `false` |

### Input Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| input | 输入时触发 | `(value: string \| number, ev: Event)` |
| change | 值改变时触发 | `(value: string \| number)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |
| clear | 清空时触发 | `-` |
| keydown | 按下键盘时触发 | `(ev: KeyboardEvent)` |
| keyup | 松开键盘时触发 | `(ev: KeyboardEvent)` |
| enter | 按下回车时触发 | `(ev: KeyboardEvent)` |

### Input Slots

| 插槽名 | 描述 |
|--------|------|
| default | 输入框的内容 |
| prefix | 输入框前缀 |
| suffix | 输入框后缀 |

### InputSearch Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| search-button | 是否显示搜索按钮 | `boolean` | `false` |
| loading | 搜索按钮是否处于加载状态 | `boolean` | `false` |
| button-text | 搜索按钮文字 | `string` | `'搜索'` |

### InputSearch Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| search | 点击搜索按钮时触发 | `(value: string \| number)` |

### InputNumber Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| model-value / v-model | 绑定值 | `number` | `-` |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |
| step | 步长 | `number` | `1` |
| precision | 精度 | `number` | `-` |
| hide-button | 是否隐藏步进器 | `boolean` | `false` |
| formatter | 格式化函数 | `(value: number) => string` | `-` |
| parser | 解析函数 | `(value: string) => number` | `-` |

### InputNumber Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| change | 值改变时触发 | `(value: number)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |

### InputTag Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| model-value / v-model | 绑定值 | `string[]` | `[]` |
| placeholder | 占位符 | `string` | `-` |
| max-tag-count | 最大标签数量 | `number` | `-` |
| allow-duplicates | 是否允许重复标签 | `boolean` | `false` |
| validate-tag | 标签验证函数 | `(tag: string, tags: string[]) => boolean \| string` | `-` |

### InputTag Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| change | 标签改变时触发 | `(tags: string[])` |
| remove | 移除标签时触发 | `(tag: string, index: number)` |
| add | 添加标签时触发 | `(tag: string)` |

## 类型定义

```typescript
export interface InputProps {
  modelValue?: string | number;
  type?: InputType;
  size?: Size;
  status?: InputStatus;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  allowClear?: boolean;
  maxLength?: number;
  showWordLimit?: boolean;
  autoSize?: boolean | { minRows: number; maxRows: number };
}

export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void;
  (e: 'input', value: string | number, ev: Event): void;
  (e: 'change', value: string | number): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'clear'): void;
  (e: 'keydown', ev: KeyboardEvent): void;
  (e: 'keyup', ev: KeyboardEvent): void;
  (e: 'enter', ev: KeyboardEvent): void;
}

export interface InputSlots {
  default(): void;
  prefix(): void;
  suffix(): void;
}

export type InputType = 'text' | 'password' | 'number' | 'email' | 'url' | 'tel';
export type InputStatus = 'normal' | 'success' | 'warning' | 'error';
```

## 设计原则

- **一致性**：输入框的视觉样式和行为保持一致
- **可用性**：提供清晰的视觉反馈，帮助用户理解当前状态
- **可访问性**：支持键盘导航，提供适当的 ARIA 属性
- **响应性**：在不同尺寸下都有良好的显示效果

## 注意事项

1. 输入框的值会自动进行类型转换
2. 密码输入框会自动隐藏输入内容
3. 数字输入框支持键盘上下箭头调整数值
4. 标签输入框会自动去重，除非设置 `allow-duplicates` 为 `true`
5. 搜索输入框的回车键会触发搜索事件
6. 文本域支持自动调整高度，但需要设置 `auto-size` 属性
