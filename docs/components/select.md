# Select 选择器

下拉选择器组件。

## 何时使用

- 当用户需要从一组选项中进行选择时
- 当选项较多，需要搜索和筛选时
- 当需要多选或单选时

## 基础用法

最简单的选择器用法。

```vue
<template>
  <YcSelect v-model="value" placeholder="请选择">
    <YcOption value="option1">选项1</YcOption>
    <YcOption value="option2">选项2</YcOption>
    <YcOption value="option3">选项3</YcOption>
  </YcSelect>
  
  <div>当前选中: {{ value }}</div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## 选项配置

通过 `options` 属性配置选项。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>字符串数组</h4>
      <YcSelect v-model="value1" :options="['选项1', '选项2', '选项3']" />
    </div>
    
    <div>
      <h4>对象数组</h4>
      <YcSelect v-model="value2" :options="objectOptions" />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');

const objectOptions = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' }
];
</script>
```

## 多选模式

通过 `multiple` 属性启用多选模式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>单选模式</h4>
      <YcSelect v-model="singleValue" placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
      <div>选中: {{ singleValue }}</div>
    </div>
    
    <div>
      <h4>多选模式</h4>
      <YcSelect v-model="multipleValue" multiple placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
        <YcOption value="option4">选项4</YcOption>
      </YcSelect>
      <div>选中: {{ multipleValue }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const singleValue = ref('');
const multipleValue = ref([]);
</script>
```

## 搜索功能

通过 `allowSearch` 属性启用搜索功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无搜索</h4>
      <YcSelect v-model="value1" placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
    </div>
    
    <div>
      <h4>有搜索</h4>
      <YcSelect v-model="value2" :allow-search="true" placeholder="请输入搜索">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
        <YcOption value="option4">选项4</YcOption>
        <YcOption value="option5">选项5</YcOption>
      </YcSelect>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
```

## 尺寸设置

通过 `size` 属性设置选择器尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcSelect v-model="value" size="small" placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcSelect v-model="value" size="large" placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## 禁用状态

通过 `disabled` 属性禁用选择器。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常状态</h4>
      <YcSelect v-model="value" placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
    </div>
    
    <div>
      <h4>禁用状态</h4>
      <YcSelect v-model="value" disabled placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## 完整示例

一个完整的选择器使用示例。

```vue
<template>
  <div class="page">
    <h2>Select 选择器示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSelect v-model="basicValue" placeholder="请选择">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
      </YcSelect>
      
      <div>当前选中: {{ basicValue }}</div>
    </div>
    
    <div class="section">
      <h3>多选模式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>单选模式</h4>
          <YcSelect v-model="singleValue" placeholder="请选择">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
          </YcSelect>
          <div>选中: {{ singleValue }}</div>
        </div>
        
        <div>
          <h4>多选模式</h4>
          <YcSelect v-model="multipleValue" multiple placeholder="请选择">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
            <YcOption value="option4">选项4</YcOption>
          </YcSelect>
          <div>选中: {{ multipleValue }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>搜索功能</h3>
      <YcSelect v-model="searchValue" :allow-search="true" placeholder="请输入搜索">
        <YcOption value="option1">选项1</YcOption>
        <YcOption value="option2">选项2</YcOption>
        <YcOption value="option3">选项3</YcOption>
        <YcOption value="option4">选项4</YcOption>
        <YcOption value="option5">选项5</YcOption>
      </YcSelect>
    </div>
    
    <div class="section">
      <h3>尺寸设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcSelect v-model="sizeValue" size="small" placeholder="请选择">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
          </YcSelect>
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcSelect v-model="sizeValue" size="large" placeholder="请选择">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
          </YcSelect>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>状态控制</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>正常状态</h4>
          <YcSelect v-model="stateValue" placeholder="请选择">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
          </YcSelect>
        </div>
        
        <div>
          <h4>禁用状态</h4>
          <YcSelect v-model="stateValue" disabled placeholder="请选择">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
          </YcSelect>
        </div>
        
        <div>
          <h4>加载状态</h4>
          <YcSelect v-model="stateValue" :loading="true" placeholder="加载中...">
            <YcOption value="option1">选项1</YcOption>
            <YcOption value="option2">选项2</YcOption>
            <YcOption value="option3">选项3</YcOption>
          </YcSelect>
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicValue = ref('');

// 多选模式
const singleValue = ref('');
const multipleValue = ref([]);

// 搜索功能
const searchValue = ref('');

// 尺寸设置
const sizeValue = ref('');

// 状态控制
const stateValue = ref('');
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

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| multiple | 是否多选 | `boolean` | `false` |
| modelValue | 绑定值 | `SelectValue` | - |
| defaultValue | 默认值 | `SelectValue` | - |
| size | 选择器尺寸 | `Size` | `'medium'` |
| placeholder | 占位符 | `string` | - |
| loading | 是否加载中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `true` |
| allowSearch | 是否允许搜索 | `boolean` | `false` |
| options | 选项配置 | `SelectOptions` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: SelectValue)` |
| change | 选择变化时触发 | `(value: SelectValue)` |
| search | 搜索时触发 | `(value: string)` |
| popup-visible-change | 弹出层可见性变化时触发 | `(value: boolean)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 选项内容 | - |
| trigger | 触发器 | - |
| prefix | 前缀 | - |
| empty | 空状态内容 | - |

### SelectValue

| 类型 | 说明 |
| --- | --- |
| `string \| number \| boolean \| ObjectData` | 单选值 |
| `(string \| number \| boolean \| ObjectData)[]` | 多选值 |

## 注意事项

1. 多选模式下，`modelValue` 应该是数组类型
2. 搜索功能需要设置 `allowSearch` 为 `true`
3. 可以通过插槽自定义选项、标签等内容

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-select {
  /* 选择器容器 */
}

.yc-select-trigger {
  /* 触发器 */
}

.yc-select-dropdown {
  /* 下拉菜单 */
}

.yc-select-option {
  /* 选项 */
}

.yc-select-option-selected {
  /* 选中状态的选项 */
}

.yc-select-option-disabled {
  /* 禁用状态的选项 */
}
```
