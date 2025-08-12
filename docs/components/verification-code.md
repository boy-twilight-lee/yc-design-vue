# VerificationCode 验证码

## 介绍

VerificationCode 验证码组件用于验证码输入，支持多种输入模式。

## 基础用法

```vue
<template>
  <yc-verification-code 
    v-model="code" 
    :length="6"
    @complete="handleComplete"
  />
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')

const handleComplete = (value) => {
  console.log('验证码输入完成:', value)
}
</script>
```

### 不同类型

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-verification-code v-model="code1" type="number" placeholder="数字" />
    <yc-verification-code v-model="code2" type="text" placeholder="字母" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const code1 = ref('')
const code2 = ref('')
</script>
```

## API

### VerificationCode Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue | 绑定值 | `string` | `-` |
| length | 验证码长度 | `number` | `4` |
| type | 输入类型 | `'number' \| 'text'` | `'number'` |
| disabled | 是否禁用 | `boolean` | `false` |

### VerificationCode Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| complete | 输入完成时触发 | `(value: string)` |
| change | 输入改变时触发 | `(value: string)` |