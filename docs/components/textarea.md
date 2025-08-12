# Textarea 文本域

多行文本输入框。

## 何时使用

- 需要用户输入多行文本时
- 需要用户输入长文本内容时
- 需要用户输入描述性内容时

## 基础用法

最简单的文本域用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcTextarea v-model="value" placeholder="请输入内容" />
    <div>输入的内容: {{ value }}</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## 字数限制

通过 `maxLength` 和 `showWordLimit` 属性设置字数限制。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无字数限制</h4>
      <YcTextarea v-model="value1" placeholder="请输入内容" />
    </div>
    
    <div>
      <h4>有字数限制</h4>
      <YcTextarea 
        v-model="value2" 
        :max-length="100"
        :show-word-limit="true"
        placeholder="最多输入100个字符"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
```

## 自动调整大小

通过 `autoSize` 属性启用自动调整大小。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>固定大小</h4>
      <YcTextarea v-model="value1" placeholder="固定大小的文本域" />
    </div>
    
    <div>
      <h4>自动调整大小</h4>
      <YcTextarea 
        v-model="value2" 
        :auto-size="true"
        placeholder="自动调整大小的文本域"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
```

## 清除功能

通过 `allowClear` 属性启用清除功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>不可清除</h4>
      <YcTextarea v-model="value1" placeholder="不可清除的文本域" />
    </div>
    
    <div>
      <h4>可清除</h4>
      <YcTextarea 
        v-model="value2" 
        :allow-clear="true"
        placeholder="可清除的文本域"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
```

## 完整示例

一个完整的文本域组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Textarea 文本域示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcTextarea v-model="basicValue" placeholder="请输入内容" />
      <div style="margin-top: 16px;">输入的内容: {{ basicValue }}</div>
    </div>
    
    <div class="section">
      <h3>字数限制</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>无字数限制</h4>
          <YcTextarea v-model="limitValue1" placeholder="请输入内容" />
        </div>
        
        <div>
          <h4>有字数限制</h4>
          <YcTextarea 
            v-model="limitValue2" 
            :max-length="100"
            :show-word-limit="true"
            placeholder="最多输入100个字符"
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自动调整大小</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>固定大小</h4>
          <YcTextarea v-model="autoSizeValue1" placeholder="固定大小的文本域" />
        </div>
        
        <div>
          <h4>自动调整大小</h4>
          <YcTextarea 
            v-model="autoSizeValue2" 
            :auto-size="true"
            placeholder="自动调整大小的文本域"
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>清除功能</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>不可清除</h4>
          <YcTextarea v-model="clearValue1" placeholder="不可清除的文本域" />
        </div>
        
        <div>
          <h4>可清除</h4>
          <YcTextarea 
            v-model="clearValue2" 
            :allow-clear="true"
            placeholder="可清除的文本域"
          />
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicValue = ref('');

// 字数限制
const limitValue1 = ref('');
const limitValue2 = ref('');

// 自动调整大小
const autoSizeValue1 = ref('');
const autoSizeValue2 = ref('');

// 清除功能
const clearValue1 = ref('');
const clearValue2 = ref('');
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

### Textarea Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `string` | - |
| defaultValue | 默认值 | `string` | - |
| placeholder | 占位符 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| error | 是否错误状态 | `boolean` | `false` |
| maxLength | 最大长度 | `MaxLength` | - |
| showWordLimit | 是否显示字数限制 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| autoSize | 自动调整大小 | `AutoSize` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: string)` |
| input | 输入时触发 | `(value: string, ev: Event)` |
| change | 值变化时触发 | `(value: string, ev: Event)` |
| clear | 清除时触发 | `(ev: MouseEvent)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |

### AutoSize

| 类型 | 说明 |
| --- | --- |
| `boolean` | 是否启用自动调整大小 |
| `{ minRows?: number; maxRows?: number }` | 自定义行数范围 |

## 注意事项

1. 字数限制功能需要配合 `showWordLimit` 使用
2. 自动调整大小功能适合动态内容场景
3. 清除功能需要监听 `clear` 事件
4. 错误状态通常用于表单验证
