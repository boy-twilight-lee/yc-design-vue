# Popover 气泡卡片

## 介绍

Popover 气泡卡片是一种轻量级的弹出式信息展示组件，用于显示更多的信息或操作选项。

## 基础用法

### 基本使用

最简单的气泡卡片用法。

```vue
<template>
  <yc-popover title="标题" content="这是气泡卡片的内容">
    <yc-button>点击显示</yc-button>
  </yc-popover>
</template>
```

### 触发方式

通过 `trigger` 属性设置不同的触发方式。

```vue
<template>
  <yc-space>
    <yc-popover 
      title="点击触发" 
      content="点击按钮显示气泡卡片" 
      trigger="click"
    >
      <yc-button>点击触发</yc-button>
    </yc-popover>
    
    <yc-popover 
      title="悬停触发" 
      content="鼠标悬停显示气泡卡片" 
      trigger="hover"
    >
      <yc-button>悬停触发</yc-button>
    </yc-popover>
    
    <yc-popover 
      title="聚焦触发" 
      content="获得焦点时显示气泡卡片" 
      trigger="focus"
    >
      <yc-button>聚焦触发</yc-button>
    </yc-popover>
  </yc-space>
</template>
```

### 弹出位置

通过 `position` 属性设置气泡卡片的弹出位置。

```vue
<template>
  <div style="margin: 100px; text-align: center;">
    <yc-space direction="vertical" size="large">
      <yc-space>
        <yc-popover content="左上方弹出" position="tl">
          <yc-button>TL</yc-button>
        </yc-popover>
        <yc-popover content="上方弹出" position="top">
          <yc-button>Top</yc-button>
        </yc-popover>
        <yc-popover content="右上方弹出" position="tr">
          <yc-button>TR</yc-button>
        </yc-popover>
      </yc-space>
      
      <yc-space>
        <yc-popover content="左侧弹出" position="left">
          <yc-button>Left</yc-button>
        </yc-popover>
        <yc-popover content="右侧弹出" position="right">
          <yc-button>Right</yc-button>
        </yc-popover>
      </yc-space>
      
      <yc-space>
        <yc-popover content="左下方弹出" position="bl">
          <yc-button>BL</yc-button>
        </yc-popover>
        <yc-popover content="下方弹出" position="bottom">
          <yc-button>Bottom</yc-button>
        </yc-popover>
        <yc-popover content="右下方弹出" position="br">
          <yc-button>BR</yc-button>
        </yc-popover>
      </yc-space>
    </yc-space>
  </div>
</template>
```

### 自定义内容

使用插槽自定义气泡卡片的标题和内容。

```vue
<template>
  <yc-space>
    <yc-popover>
      <template #title>
        <yc-space>
          <yc-icon-info />
          <span>用户信息</span>
        </yc-space>
      </template>
      <template #content>
        <div style="width: 200px;">
          <yc-space direction="vertical" size="small">
            <div><strong>姓名：</strong>张三</div>
            <div><strong>职位：</strong>前端工程师</div>
            <div><strong>部门：</strong>技术部</div>
            <yc-space style="margin-top: 12px;">
              <yc-button size="small" type="primary">查看详情</yc-button>
              <yc-button size="small">发送消息</yc-button>
            </yc-space>
          </div>
        </div>
      </template>
      <yc-avatar>张</yc-avatar>
    </yc-popover>
    
    <yc-popover>
      <template #content>
        <div>
          <p style="margin: 0 0 12px 0;">选择操作：</p>
          <yc-space direction="vertical" size="small">
            <yc-button size="small" long>编辑</yc-button>
            <yc-button size="small" long>复制</yc-button>
            <yc-button size="small" long status="danger">删除</yc-button>
          </yc-space>
        </div>
      </template>
      <yc-button>更多操作</yc-button>
    </yc-popover>
  </yc-space>
</template>
```

### 受控模式

通过 `popup-visible` 属性控制气泡卡片的显示状态。

```vue
<template>
  <yc-space>
    <yc-popover 
      title="受控气泡卡片" 
      content="这是一个受控的气泡卡片"
      :popup-visible="visible"
      @popup-visible-change="visible = $event"
    >
      <yc-button>受控气泡卡片</yc-button>
    </yc-popover>
    
    <yc-button @click="visible = !visible">
      {{ visible ? '隐藏' : '显示' }}气泡卡片
    </yc-button>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
```

### 嵌套信息

展示复杂的嵌套信息结构。

```vue
<template>
  <yc-popover trigger="click">
    <template #title>产品详情</template>
    <template #content>
      <div style="width: 300px;">
        <yc-space direction="vertical" size="medium">
          <div>
            <img 
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
              style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px;"
            />
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0;">YC Design 组件库</h4>
            <p style="margin: 0; color: #666; line-height: 1.5;">
              基于 Vue 3 和 TypeScript 构建的现代化企业级 UI 组件库，
              提供丰富的组件和完整的设计语言。
            </p>
          </div>
          
          <yc-space style="width: 100%;" align="center">
            <yc-space>
              <yc-tag>Vue 3</yc-tag>
              <yc-tag>TypeScript</yc-tag>
              <yc-tag>Vite</yc-tag>
            </yc-space>
            <div style="flex: 1;"></div>
            <span style="color: #f53f3f; font-weight: bold;">¥299</span>
          </yc-space>
          
          <yc-space style="width: 100%;">
            <yc-button type="primary" long>立即购买</yc-button>
            <yc-button long>加入购物车</yc-button>
          </yc-space>
        </yc-space>
      </div>
    </template>
    <yc-button>查看产品</yc-button>
  </yc-popover>
</template>
```

### 自定义样式

通过 `content-class` 和 `content-style` 自定义样式。

```vue
<template>
  <yc-space>
    <yc-popover 
      title="自定义样式" 
      content="这是自定义样式的气泡卡片"
      :content-style="{ backgroundColor: '#f0f9ff', color: '#1e40af', border: '1px solid #3b82f6' }"
    >
      <yc-button>自定义背景</yc-button>
    </yc-popover>
    
    <yc-popover 
      title="无箭头" 
      content="这个气泡卡片没有箭头"
      :arrow-style="{ display: 'none' }"
    >
      <yc-button>无箭头</yc-button>
    </yc-popover>
  </yc-space>
</template>
```

### 表单中的使用

在表单中使用气泡卡片提供帮助信息。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-input placeholder="用户名" style="width: 200px;" />
      <yc-popover 
        title="用户名规则" 
        trigger="click"
        position="right"
      >
        <template #content>
          <div style="width: 250px;">
            <p style="margin: 0 0 8px 0;">用户名要求：</p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>长度 3-20 个字符</li>
              <li>只能包含字母、数字和下划线</li>
              <li>不能以数字开头</li>
              <li>不能使用系统保留词</li>
            </ul>
          </div>
        </template>
        <yc-button size="small" type="text">
          <yc-icon-info />
        </yc-button>
      </yc-popover>
    </yc-space>
    
    <yc-space>
      <yc-input type="password" placeholder="密码" style="width: 200px;" />
      <yc-popover 
        title="密码强度" 
        trigger="hover"
        position="right"
      >
        <template #content>
          <div style="width: 200px;">
            <p style="margin: 0 0 8px 0;">密码强度要求：</p>
            <yc-space direction="vertical" size="small">
              <div style="color: #52c41a;">✓ 至少 8 个字符</div>
              <div style="color: #ff4d4f;">✗ 包含大小写字母</div>
              <div style="color: #ff4d4f;">✗ 包含数字</div>
              <div style="color: #ff4d4f;">✗ 包含特殊字符</div>
            </yc-space>
          </div>
        </template>
        <yc-button size="small" type="text">
          <yc-icon-exclamation />
        </yc-button>
      </yc-popover>
    </yc-space>
  </yc-space>
</template>
```

## API

### Popover Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| popup-visible (v-model) | 弹出框是否可见 | `boolean` | `-` |
| default-popup-visible | 弹出框默认是否可见 | `boolean` | `false` |
| title | 气泡卡片标题 | `string` | `-` |
| content | 气泡卡片内容 | `string` | `-` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `'hover'` |
| position | 弹出位置 | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | `'top'` |
| content-class | 内容区域类名 | `string \| string[]` | `-` |
| content-style | 内容区域样式 | `CSSProperties` | `-` |
| arrow-class | 箭头类名 | `string \| string[]` | `-` |
| arrow-style | 箭头样式 | `CSSProperties` | `-` |
| popup-container | 弹出框的挂载容器 | `string \| HTMLElement \| () => HTMLElement` | `'body'` |
| trigger-props | Trigger 组件属性 | `TriggerProps` | `-` |

### Popover Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| popup-visible-change | 弹出框显示状态改变时触发 | `(visible: boolean)` |

### Popover Slots

| 插槽名 | 描述 |
|--------|------|
| default | 触发元素 |
| title | 自定义标题 |
| content | 自定义内容 |

### Popover Methods

| 方法名 | 描述 | 参数 |
|--------|------|------|
| show | 显示气泡卡片 | `-` |
| hide | 隐藏气泡卡片 | `-` |

## 类型定义

```typescript
export interface PopoverProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  title?: string;
  content?: string;
  trigger?: TriggerType;
  position?: TriggerPosition;
  contentClass?: ClassName;
  contentStyle?: CSSProperties;
  arrowClass?: ClassName;
  arrowStyle?: CSSProperties;
  popupContainer?: PopupContainer;
  triggerProps?: TriggerProps;
}
```

## 设计原则

- **信息层次**：合理组织信息层次，突出重点内容
- **交互友好**：提供多种触发方式，适应不同使用场景  
- **位置智能**：根据触发元素位置智能调整弹出方向
- **内容丰富**：支持文本、图片、按钮等多种内容类型

## 注意事项

1. 与 Tooltip 的区别：Popover 可以承载更复杂的内容和交互
2. 避免在 Popover 中放置过多内容，影响用户体验
3. 在移动端使用时要注意触发区域的大小和交互方式
4. 可以通过 `trigger-props` 传递更多的触发器配置
5. 建议为重要的 Popover 提供关闭按钮或明确的关闭方式