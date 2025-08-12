# Popconfirm 气泡确认框

## 介绍

气泡确认框是一种轻量级的确认对话框，在用户点击目标元素时弹出，用于确认操作。

## 基础用法

### 基本使用

最简单的气泡确认框用法。

```vue
<template>
  <yc-popconfirm content="确定要删除这条数据吗？" @ok="handleOk" @cancel="handleCancel">
    <yc-button status="danger">删除</yc-button>
  </yc-popconfirm>
</template>

<script setup>
const handleOk = () => {
  console.log('确认删除')
}

const handleCancel = () => {
  console.log('取消删除')
}
</script>
```

### 不同类型

通过 `type` 属性设置不同的确认框类型。

```vue
<template>
  <yc-space>
    <yc-popconfirm 
      content="这是一条普通信息确认" 
      type="info"
      @ok="handleOk"
    >
      <yc-button>信息</yc-button>
    </yc-popconfirm>
    
    <yc-popconfirm 
      content="确认执行成功操作？" 
      type="success"
      @ok="handleOk"
    >
      <yc-button>成功</yc-button>
    </yc-popconfirm>
    
    <yc-popconfirm 
      content="这个操作有风险，确认继续？" 
      type="warning"
      @ok="handleOk"
    >
      <yc-button>警告</yc-button>
    </yc-popconfirm>
    
    <yc-popconfirm 
      content="确定要执行此危险操作吗？" 
      type="error"
      @ok="handleOk"
    >
      <yc-button status="danger">错误</yc-button>
    </yc-popconfirm>
  </yc-space>
</template>

<script setup>
const handleOk = () => {
  console.log('确认操作')
}
</script>
```

### 自定义按钮文字

通过 `ok-text` 和 `cancel-text` 自定义按钮文字。

```vue
<template>
  <yc-space>
    <yc-popconfirm 
      content="确定要保存修改吗？" 
      ok-text="保存"
      cancel-text="放弃"
      @ok="handleSave"
      @cancel="handleDiscard"
    >
      <yc-button type="primary">保存修改</yc-button>
    </yc-popconfirm>
    
    <yc-popconfirm 
      content="确定要提交表单吗？" 
      ok-text="提交"
      cancel-text="取消"
      @ok="handleSubmit"
    >
      <yc-button>提交表单</yc-button>
    </yc-popconfirm>
  </yc-space>
</template>

<script setup>
const handleSave = () => {
  console.log('保存修改')
}

const handleDiscard = () => {
  console.log('放弃修改')
}

const handleSubmit = () => {
  console.log('提交表单')
}
</script>
```

### 弹出位置

通过 `position` 属性设置弹出位置。

```vue
<template>
  <div style="margin: 100px;">
    <yc-space size="large">
      <yc-popconfirm content="顶部提示" position="top">
        <yc-button>上方</yc-button>
      </yc-popconfirm>
      
      <yc-popconfirm content="左侧提示" position="left">
        <yc-button>左侧</yc-button>
      </yc-popconfirm>
      
      <yc-popconfirm content="右侧提示" position="right">
        <yc-button>右侧</yc-button>
      </yc-popconfirm>
      
      <yc-popconfirm content="底部提示" position="bottom">
        <yc-button>下方</yc-button>
      </yc-popconfirm>
    </yc-space>
  </div>
</template>
```

### 加载状态

设置 `ok-loading` 属性显示加载状态。

```vue
<template>
  <yc-popconfirm 
    content="确定要删除吗？删除后无法恢复" 
    :ok-loading="loading"
    @ok="handleDelete"
  >
    <yc-button status="danger">删除</yc-button>
  </yc-popconfirm>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleDelete = () => {
  loading.value = true
  
  // 模拟异步操作
  setTimeout(() => {
    loading.value = false
    console.log('删除完成')
  }, 2000)
}
</script>
```

### 自定义内容

使用插槽自定义确认框的内容和图标。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-popconfirm @ok="handleOk">
      <template #content>
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">确认删除</p>
          <p style="margin: 0; color: #666;">
            删除后数据将无法恢复，请谨慎操作
          </p>
        </div>
      </template>
      <yc-button status="danger">删除数据</yc-button>
    </yc-popconfirm>
    
    <yc-popconfirm @ok="handleOk">
      <template #icon>
        <yc-icon-exclamation style="color: #faad14;" />
      </template>
      <template #content>
        <div>
          <p style="margin: 0;">这是一个自定义图标的确认框</p>
        </div>
      </template>
      <yc-button>自定义图标</yc-button>
    </yc-popconfirm>
  </yc-space>
</template>

<script setup>
const handleOk = () => {
  console.log('确认操作')
}
</script>
```

### 受控模式

通过 `popup-visible` 属性控制确认框的显示。

```vue
<template>
  <yc-space>
    <yc-popconfirm 
      content="这是受控的确认框" 
      :popup-visible="visible"
      @popup-visible-change="visible = $event"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <yc-button>受控确认框</yc-button>
    </yc-popconfirm>
    
    <yc-button @click="visible = !visible">
      {{ visible ? '隐藏' : '显示' }}确认框
    </yc-button>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const handleOk = () => {
  console.log('确认')
  visible.value = false
}

const handleCancel = () => {
  console.log('取消')
  visible.value = false
}
</script>
```

### 异步处理

使用 `onBeforeOk` 进行异步处理。

```vue
<template>
  <yc-popconfirm 
    content="确定要提交数据吗？" 
    :on-before-ok="handleBeforeOk"
    @ok="handleOk"
  >
    <yc-button type="primary">异步提交</yc-button>
  </yc-popconfirm>
</template>

<script setup>
const handleBeforeOk = (done) => {
  console.log('开始异步处理...')
  
  // 模拟异步操作
  setTimeout(() => {
    const success = Math.random() > 0.5
    
    if (success) {
      console.log('处理成功')
      done(true) // 关闭确认框
    } else {
      console.log('处理失败')
      done(false) // 保持确认框打开
    }
  }, 1000)
}

const handleOk = () => {
  console.log('确认操作完成')
}
</script>
```

## API

### Popconfirm Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| content | 确认框内容 | `string` | `-` |
| position | 弹出位置 | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | `'top'` |
| popup-visible (v-model) | 弹出框是否可见 | `boolean` | `-` |
| default-popup-visible | 弹出框默认是否可见 | `boolean` | `false` |
| type | 确认框类型 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| ok-text | 确认按钮文字 | `string` | `'确定'` |
| cancel-text | 取消按钮文字 | `string` | `'取消'` |
| ok-loading | 确认按钮是否加载中 | `boolean` | `false` |
| ok-button-props | 确认按钮属性 | `ButtonProps` | `-` |
| cancel-button-props | 取消按钮属性 | `ButtonProps` | `-` |
| content-class | 内容区域类名 | `string \| string[]` | `-` |
| content-style | 内容区域样式 | `CSSProperties` | `-` |
| arrow-class | 箭头类名 | `string \| string[]` | `-` |
| arrow-style | 箭头样式 | `CSSProperties` | `-` |
| popup-container | 弹出框的挂载容器 | `string \| HTMLElement \| () => HTMLElement` | `'body'` |
| on-before-ok | 确认前的回调函数 | `(done: (closed: boolean) => void) => void` | `-` |
| on-before-cancel | 取消前的回调函数 | `(done: (closed: boolean) => void) => void` | `-` |
| trigger-props | Trigger 组件属性 | `TriggerProps` | `-` |

### Popconfirm Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| popup-visible-change | 弹出框显示状态改变时触发 | `(visible: boolean)` |
| ok | 点击确认按钮时触发 | `-` |
| cancel | 点击取消按钮时触发 | `-` |

### Popconfirm Slots

| 插槽名 | 描述 |
|--------|------|
| default | 触发元素 |
| content | 自定义内容 |
| icon | 自定义图标 |

### Popconfirm Methods

| 方法名 | 描述 | 参数 |
|--------|------|------|
| show | 显示确认框 | `-` |
| hide | 隐藏确认框 | `-` |

## 类型定义

```typescript
export interface PopconfirmProps {
  content?: string;
  position?: TriggerPosition;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  type?: PopconfirmType;
  okText?: string;
  cancelText?: string;
  okLoading?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  onBeforeOk?: OnBeforeOk;
  onBeforeCancel?: OnBeforeCancel;
}

export type PopconfirmType = 'info' | 'success' | 'warning' | 'error';
```

## 设计原则

- **轻量级**：比 Modal 更轻量，适合简单的确认场景
- **就近原则**：在触发元素附近显示，保持上下文连贯
- **明确反馈**：提供明确的确认和取消选项
- **防误操作**：通过二次确认防止用户误操作

## 注意事项

1. 适用于简单的确认场景，复杂内容建议使用 Modal
2. 确认框会根据触发元素的位置自动调整弹出方向
3. 支持异步处理，可在 `onBeforeOk` 中处理异步逻辑
4. 在移动端使用时要注意触发区域的大小
5. 避免在确认框中放置过多内容，保持简洁