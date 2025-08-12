# Timeline 时间轴

时间轴组件。

## 何时使用

- 当有一系列信息需要按时间顺序展示时
- 当需要展示项目进度时
- 当需要展示历史记录时

## 基础用法

最简单的时间轴用法。

```vue
<template>
  <YcTimeline>
    <YcTimelineItem>创建项目 2023-01-01</YcTimelineItem>
    <YcTimelineItem>项目开发 2023-02-01</YcTimelineItem>
    <YcTimelineItem>项目测试 2023-03-01</YcTimelineItem>
    <YcTimelineItem>项目上线 2023-04-01</YcTimelineItem>
  </YcTimeline>
</template>
```

## 时间轴方向

通过 `direction` 属性设置时间轴方向。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>水平方向</h4>
      <YcTimeline direction="horizontal">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>

    <div>
      <h4>垂直方向</h4>
      <YcTimeline direction="vertical">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>
  </YcSpace>
</template>
```

## 时间轴模式

通过 `mode` 属性设置时间轴模式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>左侧模式</h4>
      <YcTimeline mode="left">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>

    <div>
      <h4>右侧模式</h4>
      <YcTimeline mode="right">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>

    <div>
      <h4>交替模式</h4>
      <YcTimeline mode="alternate">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>
  </YcSpace>
</template>
```

## 自定义节点

通过插槽自定义时间轴节点。

```vue
<template>
  <YcTimeline>
    <YcTimelineItem>
      <template #dot>
        <div class="custom-dot success">✓</div>
      </template>
      项目创建成功
    </YcTimelineItem>

    <YcTimelineItem>
      <template #dot>
        <div class="custom-dot warning">⚠</div>
      </template>
      项目开发中
    </YcTimelineItem>

    <YcTimelineItem>
      <template #dot>
        <div class="custom-dot error">✗</div>
      </template>
      项目测试失败
    </YcTimelineItem>

    <YcTimelineItem>
      <template #dot>
        <div class="custom-dot info">ℹ</div>
      </template>
      项目上线准备
    </YcTimelineItem>
  </YcTimeline>
</template>

<style scoped>
.custom-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
}

.success {
  background-color: #52c41a;
}

.warning {
  background-color: #faad14;
}

.error {
  background-color: #ff4d4f;
}

.info {
  background-color: #1890ff;
}
</style>
```

## 节点标签

通过 `label` 属性或插槽设置节点标签。

```vue
<template>
  <YcTimeline>
    <YcTimelineItem label="2023-01-01"> 项目创建 </YcTimelineItem>

    <YcTimelineItem label="2023-02-01"> 项目开发 </YcTimelineItem>

    <YcTimelineItem label="2023-03-01"> 项目测试 </YcTimelineItem>

    <YcTimelineItem label="2023-04-01"> 项目上线 </YcTimelineItem>
  </YcTimeline>
</template>
```

## 自定义标签

通过插槽自定义节点标签。

```vue
<template>
  <YcTimeline>
    <YcTimelineItem>
      <template #label>
        <div class="custom-label">
          <span class="date">2023-01-01</span>
          <span class="status success">已完成</span>
        </div>
      </template>
      项目创建
    </YcTimelineItem>

    <YcTimelineItem>
      <template #label>
        <div class="custom-label">
          <span class="date">2023-02-01</span>
          <span class="status warning">进行中</span>
        </div>
      </template>
      项目开发
    </YcTimelineItem>

    <YcTimelineItem>
      <template #label>
        <div class="custom-label">
          <span class="date">2023-03-01</span>
          <span class="status info">待开始</span>
        </div>
      </template>
      项目测试
    </YcTimelineItem>
  </YcTimeline>
</template>

<style scoped>
.custom-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.date {
  font-size: 12px;
  color: #666;
}

.status {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
}

.success {
  background-color: #52c41a;
}

.warning {
  background-color: #faad14;
}

.info {
  background-color: #1890ff;
}
</style>
```

## 节点样式

通过属性设置节点样式。

```vue
<template>
  <YcTimeline>
    <YcTimelineItem
      dot-color="#52c41a"
      dot-type="solid"
      line-type="solid"
      line-color="#52c41a"
    >
      成功状态
    </YcTimelineItem>

    <YcTimelineItem
      dot-color="#faad14"
      dot-type="hollow"
      line-type="dashed"
      line-color="#faad14"
    >
      警告状态
    </YcTimelineItem>

    <YcTimelineItem
      dot-color="#ff4d4f"
      dot-type="solid"
      line-type="dotted"
      line-color="#ff4d4f"
    >
      错误状态
    </YcTimelineItem>

    <YcTimelineItem
      dot-color="#1890ff"
      dot-type="hollow"
      line-type="solid"
      line-color="#1890ff"
    >
      信息状态
    </YcTimelineItem>
  </YcTimeline>
</template>
```

## 待处理状态

通过 `pending` 属性设置待处理状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无待处理状态</h4>
      <YcTimeline>
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>

    <div>
      <h4>有待处理状态</h4>
      <YcTimeline pending="更多步骤...">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
      </YcTimeline>
    </div>

    <div>
      <h4>自定义待处理节点</h4>
      <YcTimeline :pending="true">
        <YcTimelineItem>步骤1</YcTimelineItem>
        <YcTimelineItem>步骤2</YcTimelineItem>
        <YcTimelineItem>步骤3</YcTimelineItem>
        <YcTimelineItem>步骤4</YcTimelineItem>
        <YcTimelineItem>
          <template #dot>
            <div class="custom-dot pending">...</div>
          </template>
          更多步骤
        </YcTimelineItem>
      </YcTimeline>
    </div>
  </YcSpace>
</template>

<style scoped>
.custom-dot.pending {
  background-color: #d9d9d9;
  color: #666;
}
</style>
```

## 完整示例

一个完整的时间轴组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Timeline 时间轴示例</h2>

    <div class="section">
      <h3>基础用法</h3>
      <YcTimeline>
        <YcTimelineItem>创建项目 2023-01-01</YcTimelineItem>
        <YcTimelineItem>项目开发 2023-02-01</YcTimelineItem>
        <YcTimelineItem>项目测试 2023-03-01</YcTimelineItem>
        <YcTimelineItem>项目上线 2023-04-01</YcTimelineItem>
      </YcTimeline>
    </div>

    <div class="section">
      <h3>时间轴方向</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>水平方向</h4>
          <YcTimeline direction="horizontal">
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>

        <div>
          <h4>垂直方向</h4>
          <YcTimeline direction="vertical">
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>
      </YcSpace>
    </div>

    <div class="section">
      <h3>时间轴模式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>左侧模式</h4>
          <YcTimeline mode="left">
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>

        <div>
          <h4>右侧模式</h4>
          <YcTimeline mode="right">
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>

        <div>
          <h4>交替模式</h4>
          <YcTimeline mode="alternate">
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>
      </YcSpace>
    </div>

    <div class="section">
      <h3>自定义节点</h3>
      <YcTimeline>
        <YcTimelineItem>
          <template #dot>
            <div class="custom-dot success">✓</div>
          </template>
          项目创建成功
        </YcTimelineItem>

        <YcTimelineItem>
          <template #dot>
            <div class="custom-dot warning">⚠</div>
          </template>
          项目开发中
        </YcTimelineItem>

        <YcTimelineItem>
          <template #dot>
            <div class="custom-dot error">✗</div>
          </template>
          项目测试失败
        </YcTimelineItem>

        <YcTimelineItem>
          <template #dot>
            <div class="custom-dot info">ℹ</div>
          </template>
          项目上线准备
        </YcTimelineItem>
      </YcTimeline>
    </div>

    <div class="section">
      <h3>节点标签</h3>
      <YcTimeline>
        <YcTimelineItem label="2023-01-01"> 项目创建 </YcTimelineItem>

        <YcTimelineItem label="2023-02-01"> 项目开发 </YcTimelineItem>

        <YcTimelineItem label="2023-03-01"> 项目测试 </YcTimelineItem>

        <YcTimelineItem label="2023-04-01"> 项目上线 </YcTimelineItem>
      </YcTimeline>
    </div>

    <div class="section">
      <h3>自定义标签</h3>
      <YcTimeline>
        <YcTimelineItem>
          <template #label>
            <div class="custom-label">
              <span class="date">2023-01-01</span>
              <span class="status success">已完成</span>
            </div>
          </template>
          项目创建
        </YcTimelineItem>

        <YcTimelineItem>
          <template #label>
            <div class="custom-label">
              <span class="date">2023-02-01</span>
              <span class="status warning">进行中</span>
            </div>
          </template>
          项目开发
        </YcTimelineItem>

        <YcTimelineItem>
          <template #label>
            <div class="custom-label">
              <span class="date">2023-03-01</span>
              <span class="status info">待开始</span>
            </div>
          </template>
          项目测试
        </YcTimelineItem>
      </YcTimeline>
    </div>

    <div class="section">
      <h3>节点样式</h3>
      <YcTimeline>
        <YcTimelineItem
          dot-color="#52c41a"
          dot-type="solid"
          line-type="solid"
          line-color="#52c41a"
        >
          成功状态
        </YcTimelineItem>

        <YcTimelineItem
          dot-color="#faad14"
          dot-type="hollow"
          line-type="dashed"
          line-color="#faad14"
        >
          警告状态
        </YcTimelineItem>

        <YcTimelineItem
          dot-color="#ff4d4f"
          dot-type="solid"
          line-type="dotted"
          line-color="#ff4d4f"
        >
          错误状态
        </YcTimelineItem>

        <YcTimelineItem
          dot-color="#1890ff"
          dot-type="hollow"
          line-type="solid"
          line-color="#1890ff"
        >
          信息状态
        </YcTimelineItem>
      </YcTimeline>
    </div>

    <div class="section">
      <h3>待处理状态</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>无待处理状态</h4>
          <YcTimeline>
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>

        <div>
          <h4>有待处理状态</h4>
          <YcTimeline pending="更多步骤...">
            <YcTimelineItem>步骤1</YcTimelineItem>
            <YcTimelineItem>步骤2</YcTimelineItem>
            <YcTimelineItem>步骤3</YcTimelineItem>
            <YcTimelineItem>步骤4</YcTimelineItem>
          </YcTimeline>
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 24px;
}

.section {
  margin-bottom: 32px;
}

.section h3 {
  margin-bottom: 16px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
}

.section h4 {
  margin-bottom: 12px;
  color: #666;
}

.custom-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
}

.success {
  background-color: #52c41a;
}

.warning {
  background-color: #faad14;
}

.error {
  background-color: #ff4d4f;
}

.info {
  background-color: #1890ff;
}

.custom-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.date {
  font-size: 12px;
  color: #666;
}

.status {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
}

.status.success {
  background-color: #52c41a;
}

.status.warning {
  background-color: #faad14;
}

.status.info {
  background-color: #1890ff;
}
</style>
```

## API

### Timeline Props

| 参数          | 说明       | 类型                    | 默认值       |
| ------------- | ---------- | ----------------------- | ------------ |
| reverse       | 是否倒序   | `boolean`               | `false`      |
| direction     | 时间轴方向 | `Direction`             | `'vertical'` |
| mode          | 时间轴模式 | `TimelineMode`          | `'left'`     |
| pending       | 待处理状态 | `boolean \| string`     | -            |
| labelPosition | 标签位置   | `TimelineLabelPosition` | -            |

### Timeline Slots

| 插槽名  | 说明       | 参数 |
| ------- | ---------- | ---- |
| dot     | 自定义节点 | -    |
| default | 时间轴内容 | -    |

### TimelineItem Props

| 参数      | 说明         | 类型               | 默认值  |
| --------- | ------------ | ------------------ | ------- |
| dotColor  | 节点颜色     | `string`           | -       |
| dotType   | 节点类型     | `TimelineDotType`  | -       |
| lineType  | 线条类型     | `TimelineLineType` | -       |
| lineColor | 线条颜色     | `string`           | -       |
| label     | 标签         | `string`           | -       |
| position  | 位置         | `TimelinePositon`  | -       |
| isGhost   | 是否幽灵节点 | `boolean`          | `false` |

### TimelineItem Slots

| 插槽名  | 说明       | 参数 |
| ------- | ---------- | ---- |
| dot     | 自定义节点 | -    |
| label   | 自定义标签 | -    |
| default | 节点内容   | -    |

### TimelineMode

| 类型          | 说明     |
| ------------- | -------- |
| `'left'`      | 左侧模式 |
| `'right'`     | 右侧模式 |
| `'top'`       | 顶部模式 |
| `'bottom'`    | 底部模式 |
| `'alternate'` | 交替模式 |

### TimelineLabelPosition

| 类型         | 说明     |
| ------------ | -------- |
| `'relative'` | 相对位置 |
| `'same'`     | 相同位置 |

### TimelineDotType

| 类型       | 说明     |
| ---------- | -------- |
| `'hollow'` | 空心节点 |
| `'solid'`  | 实心节点 |

### TimelineLineType

| 类型       | 说明 |
| ---------- | ---- |
| `'solid'`  | 实线 |
| `'dashed'` | 虚线 |
| `'dotted'` | 点线 |

### TimelinePositon

| 类型       | 说明 |
| ---------- | ---- |
| `'left'`   | 左侧 |
| `'right'`  | 右侧 |
| `'top'`    | 顶部 |
| `'bottom'` | 底部 |

## 注意事项

1. 时间轴支持水平和垂直两种方向
2. 可以通过插槽自定义节点和标签
3. 支持多种模式，适合不同布局需求
4. 待处理状态可以显示更多步骤提示

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-timeline {
  /* 时间轴容器 */
}

.yc-timeline-item {
  /* 时间轴项目 */
}

.yc-timeline-item-dot {
  /* 时间轴节点 */
}

.yc-timeline-item-line {
  /* 时间轴线条 */
}

.yc-timeline-item-label {
  /* 时间轴标签 */
}

.yc-timeline-item-content {
  /* 时间轴内容 */
}

.yc-timeline-pending {
  /* 待处理状态 */
}
```
