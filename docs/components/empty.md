# Empty 空状态

空状态时的展示占位图。

## 何时使用

- 当没有数据时，用于占位提示
- 当搜索结果为空时，用于友好提示
- 当网络异常时，用于错误状态展示

## 基础用法

最简单的用法，展示默认的空状态。

```vue
<template>
  <YcEmpty />
</template>
```

## 自定义描述

通过 `description` 属性自定义描述文字。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcEmpty description="暂无数据" />
    <YcEmpty description="暂无搜索结果" />
    <YcEmpty description="网络异常，请稍后重试" />
  </YcSpace>
</template>
```

## 自定义图片

通过 `imgSrc` 属性自定义图片。

```vue
<template>
  <YcEmpty 
    description="暂无数据" 
    img-src="https://via.placeholder.com/200x150/f5f5f5/999?text=暂无数据"
  />
</template>
```

## 自定义图片插槽

通过 `image` 插槽完全自定义图片内容。

```vue
<template>
  <YcEmpty description="暂无数据">
    <template #image>
      <YcIcon-inbox style="font-size: 64px; color: #d9d9d9;" />
    </template>
  </YcEmpty>
</template>
```

## 在列表中使用

在列表组件中展示空状态。

```vue
<template>
  <div>
    <YcList :data="listData" />
    <YcEmpty v-if="!listData.length" description="暂无列表数据" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([]);
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义描述文字 | `string` | `'暂无数据'` |
| imgSrc | 自定义图片地址 | `string` | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| image | 自定义图片内容 |

## 注意事项

1. Empty 组件主要用于数据为空时的占位展示
2. 可以通过插槽完全自定义图片内容
3. 建议根据不同的空状态场景选择合适的描述文字和图片
4. 在列表、表格等组件中，通常配合 `v-if` 使用
