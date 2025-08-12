# Typography 排版

## 介绍

Typography 排版组件用于展示文本内容，支持标题、段落、文本等多种文本类型，提供丰富的文本样式和交互功能。

## 基础用法

### 标题

使用 `TypographyTitle` 组件展示不同级别的标题。

```vue
<template>
  <yc-space direction="vertical">
    <yc-typography-title :heading="1">一级标题 h1</yc-typography-title>
    <yc-typography-title :heading="2">二级标题 h2</yc-typography-title>
    <yc-typography-title :heading="3">三级标题 h3</yc-typography-title>
    <yc-typography-title :heading="4">四级标题 h4</yc-typography-title>
    <yc-typography-title :heading="5">五级标题 h5</yc-typography-title>
    <yc-typography-title :heading="6">六级标题 h6</yc-typography-title>
  </yc-space>
</template>
```

### 文本

使用 `TypographyText` 组件展示行内文本。

```vue
<template>
  <yc-space direction="vertical">
    <yc-typography-text>默认文本</yc-typography-text>
    <yc-typography-text type="secondary">次要文本</yc-typography-text>
    <yc-typography-text type="success">成功文本</yc-typography-text>
    <yc-typography-text type="warning">警告文本</yc-typography-text>
    <yc-typography-text type="danger">危险文本</yc-typography-text>
    <yc-typography-text disabled>禁用文本</yc-typography-text>
  </yc-space>
</template>
```

### 段落

使用 `TypographyParagraph` 组件展示段落文本。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-typography-paragraph>
      这是一个普通的段落。段落组件用于展示较长的文本内容，支持多行显示和换行。
      文本内容可以包含各种格式和样式。
    </yc-typography-paragraph>
    
    <yc-typography-paragraph blockquote>
      这是一个引用段落。引用段落通常用于展示重要的引用内容或者特殊说明。
      它会有特殊的样式来区别于普通段落。
    </yc-typography-paragraph>
    
    <yc-typography-paragraph spacing="close">
      这是一个紧密间距的段落。通过设置 spacing 属性，可以调整段落的行间距。
      紧密间距适用于内容较多，需要节省空间的场景。
    </yc-typography-paragraph>
  </yc-space>
</template>
```

## 文本样式

### 文本装饰

提供多种文本装饰样式。

```vue
<template>
  <yc-space direction="vertical">
    <yc-typography-text bold>加粗文本</yc-typography-text>
    <yc-typography-text mark>标记文本</yc-typography-text>
    <yc-typography-text underline>下划线文本</yc-typography-text>
    <yc-typography-text delete>删除线文本</yc-typography-text>
    <yc-typography-text code>代码文本</yc-typography-text>
  </yc-space>
</template>
```

### 组合样式

可以组合使用多种样式。

```vue
<template>
  <yc-space direction="vertical">
    <yc-typography-text bold type="primary">加粗主要文本</yc-typography-text>
    <yc-typography-text mark underline>标记下划线文本</yc-typography-text>
    <yc-typography-text code type="success">成功代码文本</yc-typography-text>
  </yc-space>
</template>
```

## 交互功能

### 可编辑

设置 `editable` 属性让文本可编辑。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-typography-text 
      v-model:edit-text="editableText" 
      editable
      @change="handleChange"
    >
      {{ editableText }}
    </yc-typography-text>
    
    <yc-typography-paragraph 
      v-model:edit-text="editableParagraph" 
      editable
      @edit-start="handleEditStart"
      @edit-end="handleEditEnd"
    >
      {{ editableParagraph }}
    </yc-typography-paragraph>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const editableText = ref('这是可编辑的文本，点击编辑图标可以修改')
const editableParagraph = ref('这是可编辑的段落内容。您可以点击编辑按钮来修改这段文字，编辑完成后点击确认或按下 Enter 键保存更改。')

const handleChange = (value) => {
  console.log('文本已修改:', value)
}

const handleEditStart = () => {
  console.log('开始编辑')
}

const handleEditEnd = () => {
  console.log('结束编辑')
}
</script>
```

### 可复制

设置 `copyable` 属性让文本可复制。

```vue
<template>
  <yc-space direction="vertical">
    <yc-typography-text copyable>
      这段文本可以复制，点击复制图标
    </yc-typography-text>
    
    <yc-typography-paragraph 
      copyable 
      copy-text="自定义复制内容"
      @copy="handleCopy"
    >
      这段文本可以复制，复制的内容是自定义的
    </yc-typography-paragraph>
  </yc-space>
</template>

<script setup>
const handleCopy = (text) => {
  console.log('已复制:', text)
}
</script>
```

### 省略

设置 `ellipsis` 属性实现文本省略。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div style="width: 200px;">
      <yc-typography-text ellipsis>
        这是一段很长的文本，会被省略显示，超出部分用省略号表示
      </yc-typography-text>
    </div>
    
    <div style="width: 300px;">
      <yc-typography-paragraph :ellipsis="{ rows: 2, expandable: true }">
        这是一段很长的段落文本，设置了多行省略和可展开功能。
        当文本超过指定行数时，会显示省略号，用户可以点击展开查看完整内容。
        这种功能在展示列表项或卡片内容时非常有用，既能保持布局整洁，
        又能让用户在需要时查看完整信息。
      </yc-typography-paragraph>
    </div>
    
    <div style="width: 300px;">
      <yc-typography-paragraph 
        :ellipsis="{ 
          rows: 3, 
          expandable: true,
          ellipsisStr: '...',
          suffix: '--YC Design'
        }"
      >
        这是一段带有自定义省略字符和后缀的文本。可以自定义省略字符、
        后缀内容等。这种灵活的配置方式可以满足不同的设计需求，
        让文本展示更加符合产品的整体风格和用户体验要求。
        同时支持多行省略和展开收起功能。
      </yc-typography-paragraph>
    </div>
  </yc-space>
</template>
```

## API

### Typography Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| type | 文本类型 | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | 是否加粗 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| mark | 是否标记 | `boolean` | `false` |
| underline | 是否下划线 | `boolean` | `false` |
| delete | 是否删除线 | `boolean` | `false` |
| code | 是否代码样式 | `boolean` | `false` |
| editable | 是否可编辑 | `boolean` | `false` |
| editing (v-model) | 是否处于编辑状态 | `boolean` | `false` |
| edit-text (v-model) | 编辑的文本内容 | `string` | `-` |
| copyable | 是否可复制 | `boolean` | `false` |
| copy-text | 复制的文本内容 | `string` | `-` |
| copy-delay | 复制成功提示的延迟时间 | `number` | `3000` |
| ellipsis | 省略配置 | `boolean \| EllipsisConfig` | `false` |

### TypographyTitle Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| heading | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |

### TypographyParagraph Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| blockquote | 是否为引用样式 | `boolean` | `false` |
| spacing | 行间距类型 | `'default' \| 'close'` | `'default'` |

### Typography Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| edit-start | 开始编辑时触发 | `-` |
| change | 编辑完成时触发 | `(value: string)` |
| edit-end | 结束编辑时触发 | `-` |
| copy | 复制时触发 | `(value: string)` |
| ellipsis | 省略状态变化时触发 | `(isEllipsis: boolean)` |
| expand | 展开状态变化时触发 | `(expanded: boolean)` |

### Typography Slots

| 插槽名 | 描述 | 参数 |
|--------|------|------|
| default | 文本内容 | `-` |
| expand-node | 自定义展开节点 | `{ expanded: boolean }` |
| copy-icon | 自定义复制图标 | `{ copied: boolean }` |
| copy-tooltip | 自定义复制提示 | `{ copied: boolean }` |

## 类型定义

```typescript
export interface TypographyBaseProps {
  tag?: string;
  type?: TypographyType;
  bold?: boolean;
  disabled?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  code?: boolean;
  editable?: boolean;
  editing?: boolean;
  editText?: string;
  copyable?: boolean;
  copyText?: string;
  copyDelay?: number;
  ellipsis?: boolean | EllipsisConfig;
}

export interface TypographyTitleProps {
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TypographyParagraphProps {
  blockquote?: boolean;
  spacing?: 'default' | 'close';
}

export type EllipsisConfig = {
  rows?: number;
  expandable?: boolean;
  ellipsisStr?: string;
  suffix?: string;
  showTooltip?: boolean | { type: 'tooltip' | 'popover'; props: Record<string, any> };
  css?: boolean;
};

export type TypographyType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
```

## 注意事项

1. 可编辑文本在编辑模式下支持 Enter 键确认和 Escape 键取消
2. 复制功能需要浏览器支持 Clipboard API
3. 省略功能支持单行和多行省略，多行省略需要指定行数
4. 可展开的省略文本支持自定义展开/收起节点
5. 标题组件会根据 `heading` 属性渲染对应的 HTML 标签（h1-h6）