# Link 链接

## 介绍

Link 链接组件用于页面间导航或外部链接跳转，支持不同状态和样式。

## 基础用法

### 基本使用

最简单的链接用法。

```vue
<template>
  <yc-space>
    <yc-link href="https://github.com">GitHub</yc-link>
    <yc-link href="/components/button">内部链接</yc-link>
    <yc-link @click="handleClick">点击事件</yc-link>
  </yc-space>
</template>

<script setup>
const handleClick = () => {
  console.log('链接被点击')
}
</script>
```

### 不同状态

通过 `status` 属性设置不同的链接状态。

```vue
<template>
  <yc-space direction="vertical">
    <yc-link status="normal">普通链接</yc-link>
    <yc-link status="success">成功链接</yc-link>
    <yc-link status="warning">警告链接</yc-link>
    <yc-link status="danger">危险链接</yc-link>
  </yc-space>
</template>
```

### 禁用状态

通过 `disabled` 属性禁用链接。

```vue
<template>
  <yc-space>
    <yc-link href="https://github.com">正常链接</yc-link>
    <yc-link href="https://github.com" disabled>禁用链接</yc-link>
  </yc-space>
</template>
```

### 加载状态

通过 `loading` 属性显示加载状态。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-link :loading="loading" @click="handleAsyncAction">
        {{ loading ? '加载中...' : '异步操作' }}
      </yc-link>
      <yc-button @click="toggleLoading">
        {{ loading ? '停止加载' : '开始加载' }}
      </yc-button>
    </yc-space>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleAsyncAction = () => {
  if (!loading.value) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 2000)
  }
}

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>
```

### 带图标的链接

使用 `icon` 属性或插槽添加图标。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-link icon href="https://github.com">
        <template #icon>
          <yc-icon-link />
        </template>
        外部链接
      </yc-link>
      
      <yc-link icon href="/components/button">
        <template #icon>
          <yc-icon-right />
        </template>
        内部导航
      </yc-link>
    </yc-space>
    
    <yc-space>
      <yc-link icon status="success">
        <template #icon>
          <yc-icon-check />
        </template>
        成功状态
      </yc-link>
      
      <yc-link icon status="danger">
        <template #icon>
          <yc-icon-close />
        </template>
        危险状态
      </yc-link>
    </yc-space>
  </yc-space>
</template>
```

### 悬停效果

通过 `hoverable` 属性控制悬停效果。

```vue
<template>
  <yc-space>
    <yc-link hoverable>默认悬停效果</yc-link>
    <yc-link :hoverable="false">无悬停效果</yc-link>
  </yc-space>
</template>
```

### 事件处理

监听各种点击事件。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-link 
        @click="handleClick"
        @dblclick="handleDoubleClick"
        @contextmenu="handleContextMenu"
      >
        事件测试链接
      </yc-link>
    </yc-space>
    
    <div v-if="eventLog" style="padding: 8px; background: #f5f5f5; border-radius: 4px;">
      {{ eventLog }}
    </div>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const eventLog = ref('')

const handleClick = (event) => {
  eventLog.value = '单击事件触发'
  console.log('单击事件', event)
}

const handleDoubleClick = (event) => {
  eventLog.value = '双击事件触发'
  console.log('双击事件', event)
}

const handleContextMenu = (event) => {
  event.preventDefault()
  eventLog.value = '右键菜单事件触发'
  console.log('右键菜单事件', event)
}
</script>
```

### 链接组合

不同链接的组合使用示例。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-card title="导航链接">
      <yc-space wrap>
        <yc-link href="/">首页</yc-link>
        <yc-divider direction="vertical" />
        <yc-link href="/components">组件</yc-link>
        <yc-divider direction="vertical" />
        <yc-link href="/guide">指南</yc-link>
        <yc-divider direction="vertical" />
        <yc-link href="https://github.com" icon>
          <template #icon>
            <yc-icon-link />
          </template>
          GitHub
        </yc-link>
      </yc-space>
    </yc-card>
    
    <yc-card title="操作链接">
      <yc-space>
        <yc-link status="success" @click="handleEdit">编辑</yc-link>
        <yc-link status="normal" @click="handleView">查看</yc-link>
        <yc-link status="warning" @click="handleCopy">复制</yc-link>
        <yc-link status="danger" @click="handleDelete">删除</yc-link>
      </yc-space>
    </yc-card>
    
    <yc-card title="状态链接">
      <yc-space direction="vertical" size="small">
        <yc-link icon status="success">
          <template #icon>
            <yc-icon-check />
          </template>
          任务已完成
        </yc-link>
        <yc-link icon status="warning">
          <template #icon>
            <yc-icon-exclamation />
          </template>
          需要注意
        </yc-link>
        <yc-link icon status="danger">
          <template #icon>
            <yc-icon-close />
          </template>
          操作失败
        </yc-link>
        <yc-link disabled>
          <template #icon>
            <yc-icon-loading />
          </template>
          处理中...
        </yc-link>
      </yc-space>
    </yc-card>
  </yc-space>
</template>

<script setup>
const handleEdit = () => console.log('编辑操作')
const handleView = () => console.log('查看操作') 
const handleCopy = () => console.log('复制操作')
const handleDelete = () => console.log('删除操作')
</script>
```

## API

### Link Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| href | 链接地址 | `string` | `-` |
| icon | 是否显示图标 | `boolean` | `false` |
| status | 链接状态 | `'normal' \| 'success' \| 'warning' \| 'danger'` | `'normal'` |
| hoverable | 是否有悬停效果 | `boolean` | `true` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |

### Link Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| click | 点击时触发 | `(event: MouseEvent)` |
| dblclick | 双击时触发 | `(event: MouseEvent)` |
| contextmenu | 右键点击时触发 | `(event: MouseEvent)` |

### Link Slots

| 插槽名 | 描述 |
|--------|------|
| default | 链接内容 |
| icon | 自定义图标 |

## 类型定义

```typescript
export interface LinkProps {
  href?: string;
  icon?: boolean;
  status?: LinkStatus;
  hoverable?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export type LinkStatus = 'normal' | 'warning' | 'success' | 'danger';
```

## 设计原则

- **语义明确**：通过不同状态和图标明确表达链接用途
- **交互一致**：保持与系统其他交互元素的一致性
- **状态清晰**：通过颜色和图标清晰表达链接状态
- **可访问性**：支持键盘导航和屏幕阅读器

## 注意事项

1. 设置 `href` 属性时链接会表现为标准的 `<a>` 标签
2. 禁用状态的链接不会触发任何事件
3. 加载状态会显示加载动画并禁用点击
4. 可以同时使用 `href` 和 `@click` 事件
5. 外部链接建议添加适当的图标以区分内部链接