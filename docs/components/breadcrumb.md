# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时
- 需要告诉用户"我在哪里"
- 需要提供导航功能，让用户能够回到上一个层级

## 基础用法

最简单的用法，通过 `BreadcrumbItem` 子组件来定义面包屑项。

```vue
<template>
  <YcBreadcrumb>
    <YcBreadcrumbItem>首页</YcBreadcrumbItem>
    <YcBreadcrumbItem>产品</YcBreadcrumbItem>
    <YcBreadcrumbItem>详情</YcBreadcrumbItem>
  </YcBreadcrumb>
</template>
```

## 路由配置

通过 `routes` 属性配置面包屑路由，支持自动生成。

```vue
<template>
  <YcBreadcrumb :routes="routes" />
</template>

<script setup>
import { ref } from 'vue';

const routes = ref([
  { label: '首页', path: '/' },
  { label: '产品', path: '/products' },
  { label: '详情', path: '/products/detail' }
]);
</script>
```

## 自定义分隔符

通过 `separator` 属性自定义分隔符。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcBreadcrumb separator="/">
      <YcBreadcrumbItem>首页</YcBreadcrumbItem>
      <YcBreadcrumbItem>产品</YcBreadcrumbItem>
      <YcBreadcrumbItem>详情</YcBreadcrumbItem>
    </YcBreadcrumb>
    
    <YcBreadcrumb separator=">">
      <YcBreadcrumbItem>首页</YcBreadcrumbItem>
      <YcBreadcrumbItem>产品</YcBreadcrumbItem>
      <YcBreadcrumbItem>详情</YcBreadcrumbItem>
    </YcBreadcrumb>
    
    <YcBreadcrumb separator="-">
      <YcBreadcrumbItem>首页</YcBreadcrumbItem>
      <YcBreadcrumbItem>产品</YcBreadcrumbItem>
      <YcBreadcrumbItem>详情</YcBreadcrumbItem>
    </YcBreadcrumb>
  </YcSpace>
</template>
```

## 自定义分隔符图标

通过 `separator` 插槽自定义分隔符图标。

```vue
<template>
  <YcBreadcrumb>
    <YcBreadcrumbItem>首页</YcBreadcrumbItem>
    <YcBreadcrumbItem>产品</YcBreadcrumbItem>
    <YcBreadcrumbItem>详情</YcBreadcrumbItem>
    <template #separator>
      <YcIcon-right />
    </template>
  </YcBreadcrumb>
</template>
```

## 最大显示数量

通过 `maxCount` 属性限制显示的面包屑项数量，超出部分会显示省略号。

```vue
<template>
  <YcBreadcrumb :max-count="3">
    <YcBreadcrumbItem>首页</YcBreadcrumbItem>
    <YcBreadcrumbItem>产品分类</YcBreadcrumbItem>
    <YcBreadcrumbItem>电子产品</YcBreadcrumbItem>
    <YcBreadcrumbItem>手机</YcBreadcrumbItem>
    <YcBreadcrumbItem>详情</YcBreadcrumbItem>
  </YcBreadcrumb>
</template>
```

## 下拉菜单

通过 `droplist` 属性为面包屑项添加下拉菜单。

```vue
<template>
  <YcBreadcrumb>
    <YcBreadcrumbItem>首页</YcBreadcrumbItem>
    <YcBreadcrumbItem 
      :droplist="[
        { label: '电子产品', path: '/electronics' },
        { label: '服装', path: '/clothing' },
        { label: '食品', path: '/food' }
      ]"
    >
      产品分类
    </YcBreadcrumbItem>
    <YcBreadcrumbItem>详情</YcBreadcrumbItem>
  </YcBreadcrumb>
</template>
```

## 自定义渲染

通过 `item-render` 插槽自定义面包屑项的渲染方式。

```vue
<template>
  <YcBreadcrumb :routes="routes">
    <template #item-render="{ route, routes, paths }">
      <YcBreadcrumbItem :path="route.path">
        <YcIcon-home v-if="route.index === 0" />
        {{ route.label }}
      </YcBreadcrumbItem>
    </template>
  </YcBreadcrumb>
</template>

<script setup>
import { ref } from 'vue';

const routes = ref([
  { label: '首页', path: '/' },
  { label: '产品', path: '/products' },
  { label: '详情', path: '/products/detail' }
]);
</script>
```

## 自定义链接

通过 `customUrl` 属性自定义链接生成逻辑。

```vue
<template>
  <YcBreadcrumb :routes="routes" :custom-url="customUrl" />
</template>

<script setup>
import { ref } from 'vue';

const routes = ref([
  { label: '首页', path: '/' },
  { label: '产品', path: '/products' },
  { label: '详情', path: '/products/detail' }
]);

const customUrl = (paths) => {
  return `https://example.com${paths.join('/')}`;
};
</script>
```

## 隐藏分隔符

通过 `showSeparator` 属性控制是否显示分隔符。

```vue
<template>
  <YcBreadcrumb>
    <YcBreadcrumbItem>首页</YcBreadcrumbItem>
    <YcBreadcrumbItem :show-separator="false">产品</YcBreadcrumbItem>
    <YcBreadcrumbItem>详情</YcBreadcrumbItem>
  </YcBreadcrumb>
</template>
```

## API

### Breadcrumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxCount | 最大显示的面包屑项数量 | `number` | `0` |
| routes | 面包屑路由配置 | `BreadcrumbRoute[]` | `[]` |
| separator | 分隔符 | `BreadcrumbSeparator` | `''` |
| customUrl | 自定义链接生成函数 | `CustomUrl` | - |

### BreadcrumbItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 自定义分隔符 | `BreadcrumbSeparator` | - |
| droplist | 下拉菜单数据 | `BreadcrumbRoute[]` | - |
| dropdownProps | 下拉菜单属性 | `DropdownProps` | - |
| path | 链接地址 | `string` | - |
| showSeparator | 是否显示分隔符 | `boolean` | `true` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 面包屑项内容 | - |
| item-render | 自定义面包屑项渲染 | `{ route, routes, paths }` |
| more-icon | 更多图标 | - |
| separator | 自定义分隔符 | - |

### Types

```typescript
interface BreadcrumbProps {
  maxCount?: number;
  routes?: BreadcrumbRoute[];
  separator?: BreadcrumbSeparator;
  customUrl?: CustomUrl;
}

interface BreadcrumbItemProps {
  separator?: BreadcrumbSeparator;
  droplist?: BreadcrumbRoute[];
  dropdownProps?: DropdownProps;
  path?: string;
  showSeparator?: boolean;
}

interface BreadcrumbRoute {
  label?: string;
  path?: string;
  index?: number;
  children?: BreadcrumbRoute[];
}

type CustomUrl = (path: string[]) => string;
type BreadcrumbSeparator = string | number;
```

## 注意事项

1. 当使用 `routes` 属性时，组件会自动生成面包屑项
2. `maxCount` 为 0 时表示不限制显示数量
3. 面包屑项会自动处理链接跳转，需要确保 `path` 属性正确
4. 分隔符可以通过插槽自定义为图标或其他内容
5. 下拉菜单支持多级嵌套结构

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-breadcrumb {
  /* 面包屑容器 */
}

.yc-breadcrumb-item {
  /* 面包屑项 */
}

.yc-breadcrumb-separator {
  /* 分隔符 */
}

.yc-breadcrumb-more {
  /* 更多图标 */
}
```
