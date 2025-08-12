# Mention 提及

## 介绍

Mention 提及组件用于在输入中提及某人或某事，常用于评论、聊天等场景。

## 基础用法

### 基本使用

```vue
<template>
  <yc-mention 
    v-model="value" 
    :options="users"
    placeholder="输入 @ 提及用户"
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const users = ref([
  { label: '张三', value: 'zhangsan' },
  { label: '李四', value: 'lisi' },
  { label: '王五', value: 'wangwu' }
])
</script>
```

### 自定义触发字符

```vue
<template>
  <yc-mention 
    v-model="value" 
    :options="tags"
    prefix="#"
    placeholder="输入 # 添加标签"
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const tags = ref([
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' }
])
</script>
```

## API

### Mention Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue | 绑定值 | `string` | `-` |
| options | 提及选项 | `Array` | `[]` |
| prefix | 触发字符 | `string` | `'@'` |
| placeholder | 占位文本 | `string` | `-` |