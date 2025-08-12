# Cascader 级联选择器

## 介绍

级联选择器用于从多层级的数据结构中选择选项，常用于地域选择、部门选择等场景。

## 基础用法

### 基本使用

最简单的用法，点击选项即可展开子级选项。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-cascader 
      v-model="value1" 
      :options="options" 
      placeholder="请选择地区" 
    />
    <p>选中值：{{ value1 }}</p>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([])

const options = [
  {
    label: '浙江省',
    value: 'zhejiang',
    children: [
      {
        label: '杭州市',
        value: 'hangzhou',
        children: [
          { label: '西湖区', value: 'xihu' },
          { label: '拱墅区', value: 'gongshu' }
        ]
      },
      {
        label: '温州市',
        value: 'wenzhou',
        children: [
          { label: '鹿城区', value: 'lucheng' },
          { label: '瓯海区', value: 'ouhai' }
        ]
      }
    ]
  },
  {
    label: '江苏省',
    value: 'jiangsu',
    children: [
      {
        label: '南京市',
        value: 'nanjing',
        children: [
          { label: '鼓楼区', value: 'gulou' },
          { label: '玄武区', value: 'xuanwu' }
        ]
      }
    ]
  }
]
</script>
```

### 多选模式

设置 `multiple` 属性可以开启多选模式。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-cascader 
      v-model="value2" 
      :options="options" 
      placeholder="请选择地区（多选）" 
      multiple
    />
    <p>选中值：{{ value2 }}</p>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value2 = ref([])
// options 同上
</script>
```

### 可搜索

设置 `allow-search` 属性开启搜索功能。

```vue
<template>
  <yc-cascader 
    v-model="value3" 
    :options="options" 
    placeholder="搜索地区" 
    allow-search
  />
</template>

<script setup>
import { ref } from 'vue'

const value3 = ref([])
</script>
```

### 触发方式

通过 `expand-trigger` 属性设置触发子菜单的方式。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>点击触发（默认）</p>
      <yc-cascader 
        v-model="value4" 
        :options="options" 
        expand-trigger="click" 
      />
    </div>
    <div>
      <p>悬停触发</p>
      <yc-cascader 
        v-model="value5" 
        :options="options" 
        expand-trigger="hover" 
      />
    </div>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const value4 = ref([])
const value5 = ref([])
</script>
```

### 自定义显示

可以自定义选项的显示内容。

```vue
<template>
  <yc-cascader 
    v-model="value6" 
    :options="customOptions" 
    placeholder="选择部门"
  >
    <template #option="{ data }">
      <span>{{ data.label }}</span>
      <span style="color: #999; margin-left: 8px;">{{ data.count }}</span>
    </template>
  </yc-cascader>
</template>

<script setup>
import { ref } from 'vue'

const value6 = ref([])

const customOptions = [
  {
    label: '技术部',
    value: 'tech',
    count: '(15人)',
    children: [
      { label: '前端组', value: 'frontend', count: '(8人)' },
      { label: '后端组', value: 'backend', count: '(7人)' }
    ]
  },
  {
    label: '产品部',
    value: 'product', 
    count: '(10人)',
    children: [
      { label: '产品组', value: 'pm', count: '(6人)' },
      { label: '设计组', value: 'design', count: '(4人)' }
    ]
  }
]
</script>
```

### 不同尺寸

提供大、中、小三种尺寸。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-cascader size="large" :options="options" placeholder="大尺寸" />
    <yc-cascader :options="options" placeholder="默认尺寸" />
    <yc-cascader size="small" :options="options" placeholder="小尺寸" />
  </yc-space>
</template>
```

### 禁用状态

通过 `disabled` 属性禁用级联选择器。

```vue
<template>
  <yc-cascader :options="options" placeholder="禁用状态" disabled />
</template>
```

## API

### Cascader Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue (v-model) | 绑定值 | `CascaderValue` | `-` |
| default-value | 默认值 | `CascaderValue` | `-` |
| options | 可选项数据源 | `CascaderOption[]` | `[]` |
| multiple | 是否多选 | `boolean` | `false` |
| size | 尺寸 | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| placeholder | 输入框占位文本 | `string` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| error | 是否为错误状态 | `boolean` | `false` |
| allow-search | 是否支持搜索 | `boolean` | `false` |
| allow-clear | 是否支持清除 | `boolean` | `false` |
| expand-trigger | 次级菜单的触发方式 | `'click' \| 'hover'` | `'click'` |
| popup-visible | 弹出框是否可见 | `boolean` | `-` |
| default-popup-visible | 弹出框默认是否可见 | `boolean` | `false` |
| format-label | 格式化显示标签 | `(options: CascaderOption[]) => string` | `-` |
| max-tag-count | 多选时最多显示的标签数量 | `number` | `-` |
| loading | 是否为加载状态 | `boolean` | `false` |
| search-delay | 搜索防抖延时 | `number` | `500` |
| filter-option | 自定义搜索逻辑 | `(inputValue: string, option: CascaderOption) => boolean` | `-` |

### Cascader Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| change | 选择完成后触发 | `(value: CascaderValue)` |
| input-value-change | 输入框值改变时触发 | `(value: string)` |
| clear | 点击清除按钮时触发 | `-` |
| search | 搜索时触发 | `(value: string)` |
| popup-visible-change | 弹出框显示状态改变时触发 | `(visible: boolean)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |

### Cascader Slots

| 插槽名 | 描述 | 参数 |
|--------|------|------|
| label | 自定义标签显示 | `{ data: CascaderOption }` |
| option | 自定义选项显示 | `{ data: CascaderOption }` |
| prefix | 前缀内容 | `-` |
| arrow-icon | 自定义箭头图标 | `-` |
| loading-icon | 自定义加载图标 | `-` |
| search-icon | 自定义搜索图标 | `-` |
| empty | 自定义空状态 | `-` |

## 类型定义

```typescript
export interface CascaderProps {
  pathMode?: boolean;
  multiple?: boolean;
  modelValue?: CascaderValue;
  defaultValue?: CascaderValue;
  options?: CascaderOption[];
  disabled?: boolean;
  error?: boolean;
  size?: Size;
  allowSearch?: boolean;
  allowClear?: boolean;
  expandTrigger?: ExpandTrigger;
  placeholder?: string;
  filterOption?: (inputValue: string, option: CascaderOption) => boolean;
  maxTagCount?: number;
  formatLabel?: (options: CascaderOption[]) => string;
  loading?: boolean;
  searchDelay?: number;
}

export type CascaderValue = 
  | CascaderOptionValue 
  | CascaderOptionValue[] 
  | CascaderOptionValue[][];

export type CascaderOptionValue = string | number | Record<string, any>;

export interface CascaderOption {
  label?: string;
  value?: CascaderOptionValue;
  disabled?: boolean;
  children?: CascaderOption[];
  isLeaf?: boolean;
}

export type ExpandTrigger = 'click' | 'hover';
```

## 设计原则

- **层次清晰**：通过合理的视觉层级展示数据层次结构
- **操作便捷**：支持多种触发方式和交互模式
- **反馈及时**：选择过程中提供清晰的视觉反馈
- **功能完整**：支持搜索、多选、清除等常用功能

## 注意事项

1. 数据源 `options` 必须是树形结构，每个节点可包含 `children` 属性
2. 多选模式下，`modelValue` 为二维数组，每个元素代表一条选择路径
3. 搜索功能会在所有层级的选项中进行匹配
4. 使用 `format-label` 可以自定义选中后的显示格式
5. 懒加载场景可通过 `load-more` 属性动态加载子节点数据