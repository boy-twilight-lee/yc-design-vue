# Descriptions 描述列表

成组展示多个只读字段。

## 何时使用

- 需要展示多个字段信息时，如用户信息、产品详情等
- 需要以表格形式展示键值对数据时
- 需要响应式布局的描述列表时

## 基础用法

最简单的用法，通过 `DescriptionsItem` 子组件定义描述项。

```vue
<template>
  <YcDescriptions title="用户信息">
    <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
    <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    <YcDescriptionsItem label="地址">北京市朝阳区</YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## 数据配置

通过 `data` 属性配置描述数据。

```vue
<template>
  <YcDescriptions title="产品信息" :data="productData" />
</template>

<script setup>
import { ref } from 'vue';

const productData = ref([
  { label: '产品名称', value: 'iPhone 15' },
  { label: '产品型号', value: 'A3092' },
  { label: '产品颜色', value: '深空黑色' },
  { label: '存储容量', value: '256GB' },
  { label: '产品价格', value: '¥6999' },
  { label: '上市时间', value: '2024-09-22' }
]);
</script>
```

## 列数设置

通过 `column` 属性设置每行显示的列数。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDescriptions title="2列布局" :column="2">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
      <YcDescriptionsItem label="地址">北京市朝阳区</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="4列布局" :column="4">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
      <YcDescriptionsItem label="地址">北京市朝阳区</YcDescriptionsItem>
    </YcDescriptions>
  </YcSpace>
</template>
```

## 响应式列数

通过对象形式设置响应式列数。

```vue
<template>
  <YcDescriptions 
    title="响应式列数" 
    :column="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }"
  >
    <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
    <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    <YcDescriptionsItem label="地址">北京市朝阳区</YcDescriptionsItem>
    <YcDescriptionsItem label="职业">软件工程师</YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## 布局方式

通过 `layout` 属性设置布局方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDescriptions title="水平布局" layout="horizontal" :column="3">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="垂直布局" layout="vertical" :column="3">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="内联水平布局" layout="inline-horizontal" :column="3">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="内联垂直布局" layout="inline-vertical" :column="3">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    </YcDescriptions>
  </YcSpace>
</template>
```

## 边框样式

通过 `bordered` 属性添加边框。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDescriptions title="无边框" :bordered="false">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="有边框" :bordered="true">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
      <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    </YcDescriptions>
  </YcSpace>
</template>
```

## 尺寸设置

通过 `size` 属性设置描述列表的尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDescriptions title="迷你尺寸" size="mini">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="小尺寸" size="small">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="中等尺寸" size="medium">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="大尺寸" size="large">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
  </YcSpace>
</template>
```

## 对齐方式

通过 `align` 属性设置对齐方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcDescriptions title="左对齐" align="left">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="居中对齐" align="center">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
    
    <YcDescriptions title="右对齐" align="right">
      <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
      <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    </YcDescriptions>
  </YcSpace>
</template>
```

## 复杂对齐

通过对象形式设置标签和值的不同对齐方式。

```vue
<template>
  <YcDescriptions 
    title="复杂对齐" 
    :align="{ label: 'right', value: 'left' }"
  >
    <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
    <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## 自定义标签

通过 `label` 插槽自定义标签内容。

```vue
<template>
  <YcDescriptions title="自定义标签">
    <YcDescriptionsItem>
      <template #label>
        <YcIcon-user style="margin-right: 4px;" />
        用户名
      </template>
      张三
    </YcDescriptionsItem>
    <YcDescriptionsItem>
      <template #label>
        <YcIcon-mail style="margin-right: 4px;" />
        邮箱
      </template>
      zhangsan@example.com
    </YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## 自定义值

通过 `value` 插槽自定义值内容。

```vue
<template>
  <YcDescriptions title="自定义值">
    <YcDescriptionsItem label="状态">
      <template #value="{ value, index, data }">
        <YcTag :color="getStatusColor(data.value)">
          {{ data.value }}
        </YcTag>
      </template>
    </YcDescriptionsItem>
    <YcDescriptionsItem label="头像">
      <template #value="{ value, index, data }">
        <YcAvatar src="https://via.placeholder.com/32x32" />
      </template>
    </YcDescriptionsItem>
  </YcDescriptions>
</template>

<script setup>
const getStatusColor = (status) => {
  const colorMap = {
    active: 'green',
    inactive: 'red',
    pending: 'orange'
  };
  return colorMap[status] || 'default';
};
</script>
```

## 自定义标题

通过 `title` 插槽自定义标题内容。

```vue
<template>
  <YcDescriptions>
    <template #title>
      <div style="display: flex; align-items: center; gap: 8px;">
        <YcIcon-info style="color: #1890ff;" />
        <span>用户详细信息</span>
        <YcTag color="blue">VIP</YcTag>
      </div>
    </template>
    <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
    <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## 跨列设置

通过 `span` 属性设置描述项跨列数。

```vue
<template>
  <YcDescriptions title="跨列设置" :column="4">
    <YcDescriptionsItem label="用户名" :span="2">张三</YcDescriptionsItem>
    <YcDescriptionsItem label="邮箱" :span="2">zhangsan@example.com</YcDescriptionsItem>
    <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
    <YcDescriptionsItem label="地址" :span="3">北京市朝阳区某某街道某某小区</YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## 样式定制

通过 `labelStyle` 和 `valueStyle` 属性自定义样式。

```vue
<template>
  <YcDescriptions 
    title="自定义样式"
    :label-style="{ color: '#1890ff', fontWeight: 'bold' }"
    :value-style="{ color: '#666', fontStyle: 'italic' }"
  >
    <YcDescriptionsItem label="用户名">张三</YcDescriptionsItem>
    <YcDescriptionsItem label="邮箱">zhangsan@example.com</YcDescriptionsItem>
    <YcDescriptionsItem label="手机号">13800138000</YcDescriptionsItem>
  </YcDescriptions>
</template>
```

## API

### Descriptions Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 描述数据 | `DescData[]` | `[]` |
| column | 列数 | `DescriptionsColumn` | `3` |
| title | 标题 | `string` | `''` |
| layout | 布局方式 | `DescriptionsLayout` | `'horizontal'` |
| align | 对齐方式 | `DescriptionsAlign` | `'left'` |
| size | 尺寸 | `Size` | - |
| bordered | 是否有边框 | `boolean` | `false` |
| labelStyle | 标签样式 | `CSSProperties` | `{}` |
| valueStyle | 值样式 | `CSSProperties` | `{}` |
| tableLayout | 表格布局 | `TableLayout` | `'auto'` |

### DescriptionsItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 跨列数 | `number` | `1` |
| label | 标签 | `string` | - |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 描述项内容 | - |
| value | 自定义值 | `{ value: string, index: number, data: DescData }` |
| label | 自定义标签 | `{ label: string, index: number, data: DescData }` |
| title | 自定义标题 | - |

### Types

```typescript
interface DescData {
  label?: string | RenderContent;
  value?: string | RenderContent;
  span?: number;
}

type TextAlign = 'left' | 'right' | 'center';
type DescriptionsAlign = TextAlign | { label?: TextAlign; value?: TextAlign };
type DescriptionsColumn = number | ResponsiveValue;
type DescriptionsLayout = 'horizontal' | 'vertical' | 'inline-horizontal' | 'inline-vertical';
type TableLayout = 'auto' | 'fixed';
```

## 注意事项

1. 列数设置会影响自动换行和布局
2. 跨列设置需要确保总列数不超过设置的列数
3. 响应式列数支持断点设置
4. 边框样式会影响整体视觉效果

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-descriptions {
  /* 描述列表容器 */
}

.yc-descriptions-title {
  /* 标题 */
}

.yc-descriptions-body {
  /* 主体内容 */
}

.yc-descriptions-table {
  /* 表格 */
}

.yc-descriptions-row {
  /* 行 */
}

.yc-descriptions-item-label {
  /* 标签 */
}

.yc-descriptions-item-value {
  /* 值 */
}
```
