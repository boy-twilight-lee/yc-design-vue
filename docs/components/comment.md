# Comment 评论

对网站内容的评论、讨论等。

## 何时使用

- 对网站内容的评论、讨论等
- 展示用户反馈、评价等
- 需要嵌套评论的场景

## 基础用法

最简单的用法，包含作者、头像、内容和时间。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容"
    datetime="2024-01-15 14:30:00"
  />
</template>
```

## 嵌套评论

通过插槽实现嵌套评论。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容"
    datetime="2024-01-15 14:30:00"
  >
    <YcComment
      author="李四"
      avatar="https://via.placeholder.com/32x32"
      content="这是对张三评论的回复"
      datetime="2024-01-15 15:00:00"
    />
    <YcComment
      author="王五"
      avatar="https://via.placeholder.com/32x32"
      content="这是另一条回复"
      datetime="2024-01-15 16:00:00"
    />
  </YcComment>
</template>
```

## 自定义头像

通过 `avatar` 插槽自定义头像内容。

```vue
<template>
  <YcComment
    author="张三"
    content="这是一条评论内容"
    datetime="2024-01-15 14:30:00"
  >
    <template #avatar>
      <YcAvatar style="background-color: #87d068">
        <YcIcon-user />
      </YcAvatar>
    </template>
  </YcComment>
</template>
```

## 自定义作者

通过 `author` 插槽自定义作者内容。

```vue
<template>
  <YcComment
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容"
    datetime="2024-01-15 14:30:00"
  >
    <template #author>
      <span style="color: #1890ff; font-weight: bold;">张三</span>
      <YcTag color="blue" style="margin-left: 8px;">VIP用户</YcTag>
    </template>
  </YcComment>
</template>
```

## 自定义时间

通过 `datetime` 插槽自定义时间显示。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容"
  >
    <template #datetime>
      <YcTooltip content="2024-01-15 14:30:00">
        <span>2小时前</span>
      </YcTooltip>
    </template>
  </YcComment>
</template>
```

## 自定义内容

通过 `content` 插槽自定义评论内容。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    datetime="2024-01-15 14:30:00"
  >
    <template #content>
      <div>
        <p>这是一条评论内容</p>
        <YcImage
          width="200"
          src="https://via.placeholder.com/200x150"
          alt="评论图片"
        />
      </div>
    </template>
  </YcComment>
</template>
```

## 操作区域

通过 `actions` 插槽添加操作按钮。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容"
    datetime="2024-01-15 14:30:00"
  >
    <template #actions>
      <YcSpace>
        <YcButton type="text" size="small">
          <YcIcon-like />
          点赞
        </YcButton>
        <YcButton type="text" size="small">
          <YcIcon-message />
          回复
        </YcButton>
        <YcButton type="text" size="small">
          <YcIcon-share />
          分享
        </YcButton>
      </YcSpace>
    </template>
  </YcComment>
</template>
```

## 对齐方式

通过 `align` 属性设置对齐方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcComment
      author="张三"
      avatar="https://via.placeholder.com/40x40"
      content="左对齐的评论"
      datetime="2024-01-15 14:30:00"
      align="left"
    />
    
    <YcComment
      author="李四"
      avatar="https://via.placeholder.com/40x40"
      content="右对齐的评论"
      datetime="2024-01-15 14:30:00"
      align="right"
    />
  </YcSpace>
</template>
```

## 复杂对齐

通过对象形式设置不同元素的对齐方式。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容"
    datetime="2024-01-15 14:30:00"
    :align="{ datetime: 'right', actions: 'left' }"
  >
    <template #actions>
      <YcSpace>
        <YcButton type="text" size="small">点赞</YcButton>
        <YcButton type="text" size="small">回复</YcButton>
      </YcSpace>
    </template>
  </YcComment>
</template>
```

## 完整示例

一个包含所有功能的完整评论示例。

```vue
<template>
  <YcComment
    author="张三"
    avatar="https://via.placeholder.com/40x40"
    content="这是一条评论内容，可以包含很长的文字描述。"
    datetime="2024-01-15 14:30:00"
  >
    <template #actions>
      <YcSpace>
        <YcButton type="text" size="small">
          <YcIcon-like />
          点赞 (12)
        </YcButton>
        <YcButton type="text" size="small">
          <YcIcon-message />
          回复 (3)
        </YcButton>
        <YcButton type="text" size="small">
          <YcIcon-share />
          分享
        </YcButton>
      </YcSpace>
    </template>
    
    <!-- 嵌套评论 -->
    <YcComment
      author="李四"
      avatar="https://via.placeholder.com/32x32"
      content="这是对张三评论的回复"
      datetime="2024-01-15 15:00:00"
    >
      <template #actions>
        <YcSpace>
          <YcButton type="text" size="small">点赞</YcButton>
          <YcButton type="text" size="small">回复</YcButton>
        </YcSpace>
      </template>
    </YcComment>
  </YcComment>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| author | 评论作者 | `string` | `''` |
| avatar | 头像地址 | `string` | `''` |
| content | 评论内容 | `string` | `''` |
| datetime | 评论时间 | `string` | `''` |
| align | 对齐方式 | `CommentAlign` | `'left'` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| avatar | 自定义头像 |
| author | 自定义作者 |
| datetime | 自定义时间 |
| content | 自定义内容 |
| actions | 操作区域 |
| default | 嵌套评论 |

### Types

```typescript
type CommentAlign = 
  | 'left' 
  | 'right' 
  | { 
      datetime?: 'left' | 'right'; 
      actions?: 'left' | 'right' 
    };
```

## 注意事项

1. 嵌套评论会自动调整头像尺寸
2. 对齐方式可以全局设置，也可以针对特定元素设置
3. 所有插槽都是可选的，可以根据需要组合使用
4. 头像会自动根据是否有子评论调整尺寸

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-comment {
  /* 评论容器 */
}

.yc-comment-avatar {
  /* 头像区域 */
}

.yc-comment-inner {
  /* 评论内容区域 */
}

.yc-comment-title {
  /* 标题区域（作者和时间） */
}

.yc-comment-content {
  /* 评论内容 */
}

.yc-comment-actions {
  /* 操作区域 */
}

.yc-comment-inner-comment {
  /* 嵌套评论 */
}
```
