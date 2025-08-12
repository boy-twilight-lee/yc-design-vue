# Result 结果

## 介绍

Result 结果组件用于反馈一系列操作任务的处理结果，常用于表单提交、操作完成后的结果展示。

## 基础用法

### 基本使用

最简单的结果展示。

```vue
<template>
  <yc-result 
    status="success" 
    title="提交成功" 
    subtitle="您的表单已成功提交，我们会尽快处理。"
  />
</template>
```

### 不同状态

通过 `status` 属性设置不同的结果状态。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-result 
      status="success" 
      title="操作成功" 
      subtitle="您的操作已成功完成"
    />
    
    <yc-result 
      status="info" 
      title="信息提示" 
      subtitle="这是一条信息提示"
    />
    
    <yc-result 
      status="warning" 
      title="警告提示" 
      subtitle="请注意检查相关信息"
    />
    
    <yc-result 
      status="error" 
      title="操作失败" 
      subtitle="操作失败，请重试或联系管理员"
    />
  </yc-space>
</template>
```

### 错误页面

使用预定义的错误状态。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-result 
      status="403" 
      title="403" 
      subtitle="抱歉，您无权访问该页面"
    />
    
    <yc-result 
      status="404" 
      title="404" 
      subtitle="抱歉，您访问的页面不存在"
    />
    
    <yc-result 
      status="500" 
      title="500" 
      subtitle="抱歉，服务器出现错误"
    />
  </yc-space>
</template>
```

### 带操作按钮

在结果页面添加操作按钮。

```vue
<template>
  <yc-result 
    status="success" 
    title="支付成功" 
    subtitle="您的订单已支付成功，商品将在24小时内发货"
  >
    <template #extra>
      <yc-space>
        <yc-button type="primary" @click="goToOrders">查看订单</yc-button>
        <yc-button @click="goHome">返回首页</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>

<script setup>
const goToOrders = () => {
  console.log('跳转到订单页面')
}

const goHome = () => {
  console.log('返回首页')
}
</script>
```

### 自定义图标

使用插槽自定义图标。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-result 
      title="自定义图标" 
      subtitle="这是一个自定义图标的结果页面"
    >
      <template #icon>
        <yc-icon-star style="color: #faad14; font-size: 72px;" />
      </template>
      <template #extra>
        <yc-button type="primary">继续操作</yc-button>
      </template>
    </yc-result>
    
    <yc-result>
      <template #icon>
        <yc-avatar size="large" style="background-color: #1890ff;">
          <yc-icon-user />
        </yc-avatar>
      </template>
      <template #title>
        <h3>欢迎加入</h3>
      </template>
      <template #subtitle>
        <p>您已成功注册账户，现在可以开始使用我们的服务了</p>
      </template>
      <template #extra>
        <yc-space>
          <yc-button type="primary">开始使用</yc-button>
          <yc-button>稍后再说</yc-button>
        </yc-space>
      </template>
    </yc-result>
  </yc-space>
</template>
```

### 自定义内容

使用插槽自定义标题、副标题和额外内容。

```vue
<template>
  <yc-result status="success">
    <template #title>
      <h2 style="color: #52c41a;">恭喜您！</h2>
    </template>
    
    <template #subtitle>
      <div style="margin-bottom: 16px;">
        <p>您的账户已激活成功，现在您可以：</p>
        <ul style="text-align: left; margin: 16px 0;">
          <li>访问完整功能</li>
          <li>享受会员特权</li>
          <li>获得技术支持</li>
        </ul>
      </div>
    </template>
    
    <template #extra>
      <yc-space direction="vertical" size="large">
        <yc-space>
          <yc-button type="primary" size="large">立即体验</yc-button>
          <yc-button size="large">个人中心</yc-button>
        </yc-space>
        
        <yc-divider />
        
        <div style="color: #666;">
          <p>遇到问题？</p>
          <yc-space>
            <yc-link>帮助文档</yc-link>
            <yc-link>联系客服</yc-link>
          </yc-space>
        </div>
      </yc-space>
    </template>
  </yc-result>
</template>
```

### 复杂场景

结合其他组件创建复杂的结果页面。

```vue
<template>
  <yc-result 
    status="info" 
    title="等待审核" 
    subtitle="您的申请已提交，我们会在3个工作日内完成审核"
  >
    <template #extra>
      <yc-space direction="vertical" size="large">
        <yc-card title="申请详情" style="width: 400px;">
          <yc-descriptions :column="1">
            <yc-descriptions-item label="申请类型">企业认证</yc-descriptions-item>
            <yc-descriptions-item label="提交时间">2024-01-15 14:30:25</yc-descriptions-item>
            <yc-descriptions-item label="预计完成">2024-01-18 17:00:00</yc-descriptions-item>
            <yc-descriptions-item label="当前状态">
              <yc-tag color="blue">审核中</yc-tag>
            </yc-descriptions-item>
          </yc-descriptions>
        </yc-card>
        
        <yc-space>
          <yc-button type="primary">查看进度</yc-button>
          <yc-button>修改申请</yc-button>
          <yc-button>取消申请</yc-button>
        </yc-space>
        
        <yc-alert 
          message="审核期间" 
          description="如需修改申请信息，请及时联系我们" 
          type="info" 
          show-icon 
        />
      </yc-space>
    </template>
  </yc-result>
</template>
```

### 空状态结果

用于空状态的结果页面。

```vue
<template>
  <yc-result>
    <template #icon>
      <yc-empty-icon style="font-size: 64px; color: #d9d9d9;" />
    </template>
    
    <template #title>
      <h3>暂无数据</h3>
    </template>
    
    <template #subtitle>
      <p>当前没有可显示的内容</p>
    </template>
    
    <template #extra>
      <yc-space>
        <yc-button type="primary">创建内容</yc-button>
        <yc-button>刷新页面</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>
```

## API

### Result Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| status | 结果状态 | `'info' \| 'success' \| 'warning' \| 'error' \| '403' \| '404' \| '500' \| null` | `'info'` |
| title | 标题 | `string` | `-` |
| subtitle | 副标题 | `string` | `-` |

### Result Slots

| 插槽名 | 描述 |
|--------|------|
| icon | 自定义图标 |
| title | 自定义标题 |
| subtitle | 自定义副标题 |
| extra | 自定义额外内容 |
| default | 自定义内容 |

## 类型定义

```typescript
export interface ResultProps {
  status?: ResultStatus;
  title?: string;
  subtitle?: string;
}

export type ResultStatus = 
  | 'info' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | '403' 
  | '404' 
  | '500' 
  | null;
```

## 设计原则

- **信息层次**：通过图标、标题、副标题建立清晰的信息层次
- **情感表达**：通过不同颜色和图标传达不同的情感状态
- **操作引导**：提供明确的后续操作指引
- **视觉平衡**：合理的间距和布局创造良好的视觉体验

## 注意事项

1. 选择合适的状态类型以准确传达结果信息
2. 标题应简洁明了，副标题可以提供更多详细信息
3. 操作按钮应提供明确的下一步指引
4. 404、403、500 等错误状态会使用预定义的图标
5. 结果页面通常用作页面级组件，占据整个内容区域