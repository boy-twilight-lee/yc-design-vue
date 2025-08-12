# 组件总览

YC Design Vue 提供了丰富的组件，涵盖企业级应用中常见的各种场景。所有组件都使用 `yc-` 前缀，确保与您的项目不会产生命名冲突。

## 通用组件

### Button 按钮
用于开始一个即时操作。

```vue
<yc-button type="primary">主要按钮</yc-button>
<yc-button>默认按钮</yc-button>
```

### Icon 图标
提供了一套常用的图标集合。

```vue
<yc-icon-search />
<yc-icon-settings />
<yc-icon-user />
```

### Typography 排版
用于展示标题、段落、文本等。

```vue
<yc-typography-title :level="1">标题1</yc-typography-title>
<yc-typography-paragraph>段落文本</yc-typography-paragraph>
```

## 布局组件

### Grid 栅格
24 栅格系统，快速创建页面布局。

```vue
<yc-row>
  <yc-col :span="12">左侧内容</yc-col>
  <yc-col :span="12">右侧内容</yc-col>
</yc-row>
```

### Layout 布局
页面整体布局框架。

```vue
<yc-layout>
  <yc-layout-header>头部</yc-layout-header>
  <yc-layout-content>内容</yc-layout-content>
  <yc-layout-footer>底部</yc-layout-footer>
</yc-layout>
```

### Space 间距
设置组件之间的间距。

```vue
<yc-space>
  <yc-button>按钮1</yc-button>
  <yc-button>按钮2</yc-button>
</yc-space>
```

### Divider 分割线
区隔内容的分割线。

```vue
<yc-divider />
<yc-divider orientation="left">左侧文字</yc-divider>
```

## 导航组件

### Menu 导航菜单
为网站提供导航功能的菜单。

```vue
<yc-menu mode="horizontal">
  <yc-menu-item key="1">首页</yc-menu-item>
  <yc-menu-item key="2">产品</yc-menu-item>
  <yc-menu-item key="3">关于</yc-menu-item>
</yc-menu>
```

### Tabs 标签页
选项卡切换组件。

```vue
<yc-tabs>
  <yc-tab-pane key="1" title="标签1">内容1</yc-tab-pane>
  <yc-tab-pane key="2" title="标签2">内容2</yc-tab-pane>
</yc-tabs>
```

### Breadcrumb 面包屑
显示当前页面在系统层级结构中的位置。

```vue
<yc-breadcrumb>
  <yc-breadcrumb-item>首页</yc-breadcrumb-item>
  <yc-breadcrumb-item>产品</yc-breadcrumb-item>
  <yc-breadcrumb-item>详情</yc-breadcrumb-item>
</yc-breadcrumb>
```

### Pagination 分页
采用分页的形式分隔长列表。

```vue
<yc-pagination
  :total="100"
  :current="1"
  :page-size="10"
  show-total
/>
```

### Steps 步骤条
引导用户按照流程完成任务。

```vue
<yc-steps :current="1">
  <yc-step title="第一步" description="描述信息" />
  <yc-step title="第二步" description="描述信息" />
  <yc-step title="第三步" description="描述信息" />
</yc-steps>
```

### Anchor 锚点
用于跳转到页面指定位置。

```vue
<yc-anchor>
  <yc-anchor-link href="#basic" title="基础用法" />
  <yc-anchor-link href="#api" title="API" />
</yc-anchor>
```

## 数据录入

### Input 输入框
通过鼠标或键盘输入字符。

```vue
<yc-input v-model="value" placeholder="请输入内容" />
<yc-input-search v-model="searchValue" placeholder="搜索" />
<yc-input-number v-model="number" :min="0" :max="100" />
<yc-input-tag v-model="tags" placeholder="请输入标签" />
```

### Select 选择器
下拉选择器。

```vue
<yc-select v-model="value" placeholder="请选择">
  <yc-option value="1" label="选项1" />
  <yc-option value="2" label="选项2" />
</yc-select>
```

### Checkbox 复选框
在一组可选项中进行多项选择。

```vue
<yc-checkbox v-model="checked">复选框</yc-checkbox>
<yc-checkbox-group v-model="checkedList">
  <yc-checkbox value="1">选项1</yc-checkbox>
  <yc-checkbox value="2">选项2</yc-checkbox>
</yc-checkbox-group>
```

### Radio 单选框
在一组可选项中进行单项选择。

```vue
<yc-radio v-model="value" value="1">选项1</yc-radio>
<yc-radio-group v-model="value">
  <yc-radio value="1">选项1</yc-radio>
  <yc-radio value="2">选项2</yc-radio>
</yc-radio-group>
```

### Switch 开关
开关选择器。

```vue
<yc-switch v-model="checked" />
<yc-switch v-model="checked" size="small" />
```

### Slider 滑块
滑动输入条。

```vue
<yc-slider v-model="value" :min="0" :max="100" />
<yc-slider v-model="range" range />
```

### Rate 评分
评分组件。

```vue
<yc-rate v-model="value" />
<yc-rate v-model="value" :count="10" />
```

### Cascader 级联选择器
级联选择器。

```vue
<yc-cascader
  v-model="value"
  :options="options"
  placeholder="请选择"
/>
```

### DatePicker 日期选择器
日期选择器。

```vue
<yc-date-picker v-model="date" placeholder="请选择日期" />
<yc-date-picker v-model="dateRange" range />
```

### TimePicker 时间选择器
时间选择器。

```vue
<yc-time-picker v-model="time" placeholder="请选择时间" />
```

### ColorPicker 颜色选择器
颜色选择器。

```vue
<yc-color-picker v-model="color" />
```

### Transfer 穿梭框
双栏穿梭选择框。

```vue
<yc-transfer
  v-model="targetKeys"
  :data="data"
  :titles="['源数据', '目标数据']"
/>
```

## 数据展示

### Table 表格
展示行列数据。

```vue
<yc-table :columns="columns" :data="data" />
```

### List 列表
展示列表数据。

```vue
<yc-list :data="listData">
  <template #item="{ item }">
    <yc-list-item>
      <yc-list-item-meta
        title="标题"
        description="描述信息"
      />
    </yc-list-item>
  </template>
</yc-list>
```

### Card 卡片
通用卡片容器。

```vue
<yc-card title="卡片标题">
  <p>卡片内容</p>
</yc-card>
```

### Descriptions 描述列表
成组展示多个只读字段。

```vue
<yc-descriptions title="用户信息" :column="2">
  <yc-descriptions-item label="用户名">张三</yc-descriptions-item>
  <yc-descriptions-item label="邮箱">zhangsan@example.com</yc-descriptions-item>
</yc-descriptions>
```

### Empty 空状态
空状态时的展示占位图。

```vue
<yc-empty description="暂无数据" />
```

### Progress 进度条
展示操作的当前进度。

```vue
<yc-progress :percent="50" />
<yc-progress :percent="80" status="success" />
```

### Skeleton 骨架屏
在需要等待加载内容时提供一个占位图形组合。

```vue
<yc-skeleton :rows="3" />
```

### Statistic 统计数值
展示统计数值。

```vue
<yc-statistic title="总销售额" :value="112893" prefix="¥" />
```

### Tag 标签
进行标记和分类的小标签。

```vue
<yc-tag>标签</yc-tag>
<yc-tag color="blue">蓝色标签</yc-tag>
```

### Timeline 时间轴
垂直展示的时间流信息。

```vue
<yc-timeline>
  <yc-timeline-item>创建项目</yc-timeline-item>
  <yc-timeline-item>完成设计</yc-timeline-item>
  <yc-timeline-item>开始开发</yc-timeline-item>
</yc-timeline>
```

### Badge 徽标
出现在按钮、图标旁的数字或状态标记。

```vue
<yc-badge :count="5">
  <yc-button>消息</yc-button>
</yc-badge>
```

### Avatar 头像
用来代表用户或事物。

```vue
<yc-avatar>用户</yc-avatar>
<yc-avatar src="https://example.com/avatar.jpg" />
```

### Image 图片
图片容器。

```vue
<yc-image
  width="200"
  src="https://example.com/image.jpg"
  alt="示例图片"
/>
```

## 反馈组件

### Modal 对话框
模态对话框。

```vue
<yc-modal v-model:visible="visible" title="标题">
  <p>对话框内容</p>
</yc-modal>
```

### Drawer 抽屉
从屏幕边缘滑出的抽屉面板。

```vue
<yc-drawer v-model:visible="visible" title="抽屉标题">
  <p>抽屉内容</p>
</yc-drawer>
```

### Message 全局提示
全局展示操作反馈信息。

```vue
<yc-button @click="showMessage">显示消息</yc-button>

<script setup>
import { Message } from 'yc-design-vue'

const showMessage = () => {
  Message.success('操作成功')
}
</script>
```

### Notification 通知提醒
全局展示通知提醒信息。

```vue
<yc-button @click="showNotification">显示通知</yc-button>

<script setup>
import { Notification } from 'yc-design-vue'

const showNotification = () => {
  Notification.info({
    title: '通知标题',
    content: '通知内容'
  })
}
</script>
```

### Popconfirm 气泡确认框
点击元素时弹出确认框。

```vue
<yc-popconfirm
  content="确定要删除吗？"
  @ok="handleDelete"
>
  <yc-button>删除</yc-button>
</yc-popconfirm>
```

### Popover 气泡卡片
弹出层。

```vue
<yc-popover content="气泡内容">
  <yc-button>点击显示气泡</yc-button>
</yc-popover>
```

### Tooltip 文字提示
简单的文字提示气泡框。

```vue
<yc-tooltip content="提示内容">
  <yc-button>鼠标悬停显示提示</yc-button>
</yc-tooltip>
```

### Alert 警告
警告提示，展现需要关注的信息。

```vue
<yc-alert message="这是一条警告信息" type="warning" />
<yc-alert message="这是一条成功信息" type="success" />
```

### Result 结果
用于反馈一系列操作任务的处理结果。

```vue
<yc-result
  status="success"
  title="提交成功"
  sub-title="请耐心等待，我们会尽快处理您的请求"
/>
```

### Spin 加载中
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

```vue
<yc-spin />
<yc-spin size="large" />
```

## 其他组件

### Affix 固钉
将页面元素钉在可视范围。

```vue
<yc-affix :offset-top="100">
  <yc-button>固定在顶部100px处</yc-button>
</yc-affix>
```

### BackTop 回到顶部
返回页面顶部的操作按钮。

```vue
<yc-back-top />
<yc-back-top :right="100" :bottom="100" />
```

### ConfigProvider 全局配置
为组件库提供统一的全局化配置。

```vue
<yc-config-provider :locale="zhCN">
  <app />
</yc-config-provider>
```

### ResizeBox 调整尺寸
可调整尺寸的容器。

```vue
<yc-resize-box>
  <div>左侧内容</div>
  <div>右侧内容</div>
</yc-resize-box>
```

### Scrollbar 滚动条
自定义滚动条。

```vue
<yc-scrollbar height="200px">
  <div style="height: 400px;">长内容</div>
</yc-scrollbar>
```

### Split 分割面板
可拖拽的分割面板。

```vue
<yc-split>
  <div>左侧面板</div>
  <div>右侧面板</div>
</yc-split>
```

### Trigger 触发器
下拉菜单、气泡确认框、文字提示等组件的触发器。

```vue
<yc-trigger
  popup-visible
  popup="触发内容"
>
  <yc-button>触发器</yc-button>
</yc-trigger>
```

### Watermark 水印
为页面添加水印。

```vue
<yc-watermark content="YC Design Vue">
  <div>页面内容</div>
</yc-watermark>
```

## 组件使用原则

- **一致性**：所有组件都遵循统一的设计语言和交互模式
- **可用性**：组件设计注重用户体验，提供清晰的视觉反馈
- **可访问性**：支持键盘导航，提供适当的 ARIA 属性
- **响应性**：组件在不同尺寸下都有良好的显示效果
- **可定制性**：提供丰富的配置选项，满足不同的设计需求

## 快速开始

要开始使用这些组件，请参考 [快速上手](/guide/) 指南，了解如何安装和配置 YC Design Vue。
