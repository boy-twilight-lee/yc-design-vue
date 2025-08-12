# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开
- 常用于常见问题、说明文档等场景

## 基础用法

最简单的用法，可以同时展开多个面板。

```vue
<template>
  <YcCollapse>
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板3" path="3">
      <p>这是第三个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 手风琴模式

通过 `accordion` 属性开启手风琴模式，同时只能展开一个面板。

```vue
<template>
  <YcCollapse :accordion="true">
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板3" path="3">
      <p>这是第三个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 默认展开

通过 `defaultActiveKey` 属性设置默认展开的面板。

```vue
<template>
  <YcCollapse :default-active-key="['1', '3']">
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板3" path="3">
      <p>这是第三个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 受控用法

通过 `v-model` 控制展开的面板。

```vue
<template>
  <YcCollapse v-model:active-key="activeKeys">
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板3" path="3">
      <p>这是第三个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
  <div style="margin-top: 16px;">
    当前展开的面板: {{ activeKeys.join(', ') }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeKeys = ref(['1']);
</script>
```

## 无边框模式

通过 `bordered` 属性控制是否显示边框。

```vue
<template>
  <YcCollapse :bordered="false">
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板3" path="3">
      <p>这是第三个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 自定义展开图标

通过 `expandIcon` 插槽自定义展开图标。

```vue
<template>
  <YcCollapse>
    <YcCollapseItem header="面板1" path="1">
      <template #expand-icon="{ active, disabled, position }">
        <YcIcon-right 
          :class="{ 'rotate-90': active }" 
          style="transition: transform 0.3s;"
        />
      </template>
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <template #expand-icon="{ active, disabled, position }">
        <YcIcon-right 
          :class="{ 'rotate-90': active }" 
          style="transition: transform 0.3s;"
        />
      </template>
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
```

## 展开图标位置

通过 `expandIconPosition` 属性设置展开图标的位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcCollapse expand-icon-position="left">
      <YcCollapseItem header="左侧图标" path="1">
        <p>展开图标在左侧</p>
      </YcCollapseItem>
    </YcCollapse>
    
    <YcCollapse expand-icon-position="right">
      <YcCollapseItem header="右侧图标" path="2">
        <p>展开图标在右侧</p>
      </YcCollapseItem>
    </YcCollapse>
  </YcSpace>
</template>
```

## 隐藏展开图标

通过 `showExpandIcon` 属性隐藏展开图标。

```vue
<template>
  <YcCollapse :show-expand-icon="false">
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 自定义头部

通过 `header` 插槽自定义面板头部内容。

```vue
<template>
  <YcCollapse>
    <YcCollapseItem path="1">
      <template #header>
        <div style="display: flex; align-items: center; gap: 8px;">
          <YcIcon-info style="color: #1890ff;" />
          <span>自定义头部</span>
          <YcTag color="blue">新</YcTag>
        </div>
      </template>
      <p>这是面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 额外操作区域

通过 `extra` 插槽在头部添加额外操作。

```vue
<template>
  <YcCollapse>
    <YcCollapseItem header="面板1" path="1">
      <template #extra>
        <YcButton size="small" type="text">编辑</YcButton>
      </template>
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <template #extra>
        <YcButton size="small" type="text">删除</YcButton>
      </template>
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 禁用面板

通过 `disabled` 属性禁用特定面板。

```vue
<template>
  <YcCollapse>
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2" disabled>
      <p>这个面板被禁用了</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板3" path="3">
      <p>这是第三个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 销毁隐藏内容

通过 `destroyOnHide` 属性在隐藏时销毁内容。

```vue
<template>
  <YcCollapse :destroy-on-hide="true">
    <YcCollapseItem header="面板1" path="1">
      <p>这个面板隐藏时内容会被销毁</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这个面板隐藏时内容会被保留</p>
    </YcCollapseItem>
  </YcCollapse>
</template>
```

## 事件处理

监听折叠面板变化事件。

```vue
<template>
  <YcCollapse @change="onChange">
    <YcCollapseItem header="面板1" path="1">
      <p>这是第一个面板的内容</p>
    </YcCollapseItem>
    <YcCollapseItem header="面板2" path="2">
      <p>这是第二个面板的内容</p>
    </YcCollapseItem>
  </YcCollapse>
</template>

<script setup>
const onChange = (activeKeys) => {
  console.log('展开的面板:', activeKeys);
};
</script>
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前展开的面板 | `CollapseValue[]` | - |
| defaultActiveKey | 默认展开的面板 | `CollapseValue[]` | `[]` |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |
| showExpandIcon | 是否显示展开图标 | `boolean` | `true` |
| expandIconPosition | 展开图标位置 | `ExpandIconPosition` | `'left'` |
| bordered | 是否有边框 | `boolean` | `true` |
| destroyOnHide | 隐藏时是否销毁内容 | `boolean` | `false` |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| path | 面板的唯一标识 | `CollapseValue` | - |
| header | 面板标题 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| showExpandIcon | 是否显示展开图标 | `boolean` | - |
| destroyOnHide | 隐藏时是否销毁内容 | `boolean` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:activeKey | 展开的面板变化时触发 | `(value: CollapseValue[])` |
| change | 展开的面板变化时触发 | `(value: CollapseValue[])` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 面板内容 | - |
| expand-icon | 自定义展开图标 | `{ active: boolean, disabled: boolean, position: 'left' \| 'right' }` |
| header | 自定义头部内容 | - |
| extra | 额外操作区域 | - |

### Types

```typescript
type CollapseValue = string | number;
type ExpandIconPosition = 'left' | 'right';
```

## 注意事项

1. 手风琴模式下，同时只能展开一个面板
2. 面板的 `path` 属性必须唯一
3. 禁用状态的面板无法展开或收起
4. 销毁隐藏内容可以提高性能，但会丢失状态

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-collapse {
  /* 折叠面板容器 */
}

.yc-collapse-item {
  /* 折叠面板项 */
}

.yc-collapse-header {
  /* 面板头部 */
}

.yc-collapse-content {
  /* 面板内容 */
}

.yc-collapse-expand-icon {
  /* 展开图标 */
}
```
