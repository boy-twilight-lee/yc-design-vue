# AutoComplete 自动完成

## 介绍

AutoComplete 自动完成组件是输入框的扩展，当输入内容时提供相关建议。

## 基础用法

### 基本使用

```vue
<template>
  <yc-auto-complete 
    v-model="value" 
    :data="options"
    placeholder="请输入内容"
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = ref(['Vue', 'React', 'Angular', 'JavaScript', 'TypeScript'])
</script>
```

### 自定义数据源

```vue
<template>
  <yc-auto-complete 
    v-model="value" 
    :data="filteredOptions"
    @input="handleInput"
    placeholder="搜索用户"
  />
</template>

<script setup>
import { ref, computed } from 'vue'

const value = ref('')
const users = ref([
  { label: '张三', value: 'zhangsan' },
  { label: '李四', value: 'lisi' },
  { label: '王五', value: 'wangwu' }
])

const filteredOptions = computed(() => {
  if (!value.value) return users.value
  return users.value.filter(user => 
    user.label.includes(value.value)
  )
})

const handleInput = (val) => {
  // 处理输入逻辑
}
</script>
```

## API

### AutoComplete Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue | 绑定值 | `string` | `-` |
| data | 数据源 | `Array` | `[]` |
| placeholder | 占位文本 | `string` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |

### AutoComplete Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| input | 输入时触发 | `(value: string)` |
| select | 选择选项时触发 | `(value: any)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |