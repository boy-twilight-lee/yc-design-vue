# InputTag 输入标签

## 介绍

输入标签组件用于输入多个标签，支持自动创建、格式化显示等功能，常用于标签管理、关键词输入等场景。

## 基础用法

### 基本使用

最简单的标签输入用法。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-tag v-model="tags" placeholder="输入标签后按回车" />
    <p>当前标签：{{ tags }}</p>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref(['Vue', 'React', 'Angular'])
</script>
```

### 不同尺寸

提供大、中、小三种尺寸。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-tag v-model="largeTags" size="large" placeholder="大尺寸" />
    <yc-input-tag v-model="mediumTags" placeholder="默认尺寸" />
    <yc-input-tag v-model="smallTags" size="small" placeholder="小尺寸" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const largeTags = ref(['Large', 'Tag'])
const mediumTags = ref(['Medium', 'Tag'])
const smallTags = ref(['Small', 'Tag'])
</script>
```

### 禁用状态

通过 `disabled` 属性禁用输入标签。

```vue
<template>
  <yc-input-tag :model-value="['Disabled', 'Tags']" disabled />
</template>
```

### 只读状态

通过 `readonly` 属性设置为只读状态。

```vue
<template>
  <yc-input-tag :model-value="['Readonly', 'Tags']" readonly />
</template>
```

### 错误状态

通过 `error` 属性显示错误状态。

```vue
<template>
  <yc-input-tag v-model="errorTags" error placeholder="错误状态" />
</template>

<script setup>
import { ref } from 'vue'

const errorTags = ref(['Error', 'State'])
</script>
```

### 限制标签数量

通过 `max-tag-count` 属性限制显示的标签数量。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-tag 
      v-model="manyTags" 
      :max-tag-count="3" 
      placeholder="最多显示3个标签"
    />
    <p>实际标签数量：{{ manyTags.length }}</p>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const manyTags = ref(['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6'])
</script>
```

### 保留输入值

通过 `retain-input-value` 属性控制是否保留输入值。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>不保留输入值（默认）</p>
      <yc-input-tag v-model="tags1" placeholder="输入后按回车" />
    </div>
    
    <div>
      <p>保留输入值</p>
      <yc-input-tag 
        v-model="tags2" 
        retain-input-value 
        placeholder="输入后按回车"
      />
    </div>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const tags1 = ref(['Vue'])
const tags2 = ref(['React'])
</script>
```

### 唯一值

通过 `unique-value` 属性确保标签值唯一。

```vue
<template>
  <yc-input-tag 
    v-model="uniqueTags" 
    unique-value 
    placeholder="重复标签会被忽略"
  />
</template>

<script setup>
import { ref } from 'vue'

const uniqueTags = ref(['JavaScript', 'TypeScript'])
</script>
```

### 格式化标签

使用 `format-tag` 属性自定义标签格式化。

```vue
<template>
  <yc-input-tag 
    v-model="formattedTags" 
    :format-tag="formatTag"
    placeholder="输入标签"
  />
</template>

<script setup>
import { ref } from 'vue'

const formattedTags = ref([
  { label: 'Vue.js', value: 'vue', category: 'framework' },
  { label: 'React', value: 'react', category: 'framework' }
])

const formatTag = (data) => {
  return `[${data.category}] ${data.label}`
}
</script>
```

### 自定义标签

使用插槽自定义标签的显示。

```vue
<template>
  <yc-input-tag v-model="customTags" placeholder="自定义标签样式">
    <template #tag="{ tag }">
      <yc-tag 
        :color="getTagColor(tag.value)" 
        closable
        @close="removeTag(tag.value)"
      >
        <yc-icon-star v-if="tag.important" />
        {{ tag.label }}
      </yc-tag>
    </template>
  </yc-input-tag>
</template>

<script setup>
import { ref } from 'vue'

const customTags = ref([
  { label: 'Vue', value: 'vue', important: true },
  { label: 'React', value: 'react', important: false },
  { label: 'Angular', value: 'angular', important: false }
])

const getTagColor = (value) => {
  const colors = { vue: 'green', react: 'blue', angular: 'red' }
  return colors[value] || 'gray'
}

const removeTag = (value) => {
  const index = customTags.value.findIndex(tag => tag.value === value)
  if (index > -1) {
    customTags.value.splice(index, 1)
  }
}
</script>
```

### 前缀后缀

使用插槽添加前缀和后缀内容。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-tag v-model="prefixTags">
      <template #prefix>
        <yc-icon-tag />
      </template>
    </yc-input-tag>
    
    <yc-input-tag v-model="suffixTags">
      <template #suffix>
        <yc-icon-plus />
      </template>
    </yc-input-tag>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const prefixTags = ref(['Frontend', 'Backend'])
const suffixTags = ref(['JavaScript', 'Python'])
</script>
```

### 事件处理

监听各种事件。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-input-tag 
      v-model="eventTags"
      @focus="handleFocus"
      @blur="handleBlur"
      @press-enter="handlePressEnter"
      @remove="handleRemove"
      @clear="handleClear"
      placeholder="测试事件"
    />
    
    <yc-space direction="vertical">
      <div v-for="log in eventLogs" :key="log" style="font-size: 12px; color: #666;">
        {{ log }}
      </div>
    </yc-space>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const eventTags = ref(['Event', 'Test'])
const eventLogs = ref([])

const addLog = (message) => {
  eventLogs.value.unshift(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLogs.value.length > 5) {
    eventLogs.value.pop()
  }
}

const handleFocus = () => addLog('获得焦点')
const handleBlur = () => addLog('失去焦点')
const handlePressEnter = () => addLog('按下回车键')
const handleRemove = (value) => addLog(`删除标签: ${value}`)
const handleClear = () => addLog('清空所有标签')
</script>
```

## API

### InputTag Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue (v-model) | 绑定值 | `InputTagValue` | `[]` |
| default-value | 默认值 | `InputTagValue` | `[]` |
| input-value (v-model) | 输入框的值 | `string` | `-` |
| default-input-value | 输入框的默认值 | `string` | `-` |
| placeholder | 输入框占位文本 | `string` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| error | 是否为错误状态 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| allow-clear | 是否允许清空 | `boolean` | `false` |
| size | 尺寸 | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| max-tag-count | 最多显示的标签个数 | `number` | `-` |
| retain-input-value | 是否保留输入框的值 | `boolean \| { create?: boolean; blur?: boolean }` | `false` |
| format-tag | 格式化标签的函数 | `(data: TagData) => string` | `-` |
| unique-value | 是否唯一值 | `boolean` | `false` |
| tag-nowrap | 标签是否不换行 | `boolean` | `false` |
| field-names | 自定义字段名 | `Record<string, string>` | `-` |
| allow-create | 是否允许创建 | `boolean` | `true` |

### InputTag Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| input | 输入框输入时触发 | `(value: string)` |
| input-value-change | 输入框值改变时触发 | `(value: string, ev: Event)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |
| press-enter | 按下回车键时触发 | `(ev: KeyboardEvent)` |
| remove | 删除标签时触发 | `(value: number \| string, ev: MouseEvent \| KeyboardEvent)` |
| clear | 点击清除按钮时触发 | `(ev: MouseEvent)` |

### InputTag Slots

| 插槽名 | 描述 | 参数 |
|--------|------|------|
| tag | 自定义标签 | `{ tag: TagData }` |
| prefix | 前缀内容 | `-` |
| suffix | 后缀内容 | `-` |

### InputTag Methods

| 方法名 | 描述 | 参数 |
|--------|------|------|
| focus | 使输入框获得焦点 | `-` |
| blur | 使输入框失去焦点 | `-` |

## 类型定义

```typescript
export interface InputTagProps {
  modelValue?: InputTagValue;
  defaultValue?: InputTagValue;
  inputValue?: string;
  defaultInputValue?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  readonly?: boolean;
  allowClear?: boolean;
  size?: Size;
  maxTagCount?: number;
  retainInputValue?: InputRetainValue;
  formatTag?: FormatTag;
  uniqueValue?: boolean;
  tagNowrap?: boolean;
  allowCreate?: boolean;
}

export type TagData = {
  id?: string;
  label: string;
  value: string | number;
  closeable?: boolean;
  tagProps?: TagProps;
} | ObjectData;

export type InputTagValue = (string | number | TagData)[];
export type InputRetainValue = boolean | { create?: boolean; blur?: boolean };
export type FormatTag = (data: TagData) => string;
```

## 设计原则

- **输入便捷**：支持键盘快捷操作，提高输入效率
- **视觉清晰**：标签之间有合适的间距和视觉区分
- **交互友好**：支持鼠标和键盘操作
- **功能完整**：支持格式化、唯一性检查、数量限制等功能

## 注意事项

1. 默认情况下按回车键会创建新标签
2. 使用 `unique-value` 可以防止重复标签
3. `format-tag` 函数只影响显示，不影响实际值
4. 可以通过 `retain-input-value` 控制输入完成后是否清空输入框
5. 自定义标签时需要手动处理删除逻辑