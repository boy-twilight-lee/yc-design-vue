# Statistic 统计数值

## 介绍

统计数值组件用于突出显示某个统计数值，支持数字动画、格式化显示、倒计时等功能。

## 基础用法

### 基本使用

最简单的统计数值展示。

```vue
<template>
  <yc-space>
    <yc-statistic title="总用户数" :value="11280" />
    <yc-statistic title="销售额" :value="93123" prefix="¥" />
    <yc-statistic title="增长率" :value="17.28" suffix="%" />
  </yc-space>
</template>
```

### 数字精度

通过 `precision` 属性设置数字精度。

```vue
<template>
  <yc-space>
    <yc-statistic title="精确度 0" :value="112893" :precision="0" />
    <yc-statistic title="精确度 2" :value="112893.234" :precision="2" />
    <yc-statistic title="精确度 4" :value="112893.23456" :precision="4" />
  </yc-space>
</template>
```

### 千分位分隔符

通过 `show-group-separator` 属性显示千分位分隔符。

```vue
<template>
  <yc-space>
    <yc-statistic 
      title="无分隔符" 
      :value="1234567" 
      :show-group-separator="false" 
    />
    <yc-statistic 
      title="有分隔符" 
      :value="1234567" 
      show-group-separator 
    />
    <yc-statistic 
      title="自定义分隔符" 
      :value="1234567" 
      separator="_"
      show-group-separator 
    />
  </yc-space>
</template>
```

### 数字动画

通过 `animation` 属性开启数字变化动画。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-statistic 
        title="动画效果" 
        :value="animationValue" 
        animation
        :animation-duration="2000"
      />
      <yc-statistic 
        title="从指定值开始" 
        :value="animationValue" 
        :value-from="0"
        animation
      />
    </yc-space>
    
    <yc-button @click="changeValue">改变数值</yc-button>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const animationValue = ref(1234)

const changeValue = () => {
  animationValue.value = Math.floor(Math.random() * 10000)
}
</script>
```

### 自定义格式

使用 `format` 属性自定义数值格式。

```vue
<template>
  <yc-space>
    <yc-statistic 
      title="时间格式" 
      :value="new Date()" 
      format="YYYY-MM-DD HH:mm:ss"
    />
    <yc-statistic 
      title="百分比" 
      :value="0.75" 
      format="0.00%"
    />
    <yc-statistic 
      title="货币格式" 
      :value="12345.67" 
      format="¥0,0.00"
    />
  </yc-space>
</template>
```

### 自定义样式

通过 `value-style` 属性自定义数值样式。

```vue
<template>
  <yc-space>
    <yc-statistic 
      title="自定义颜色" 
      :value="123456" 
      :value-style="{ color: '#3f8600' }"
    />
    <yc-statistic 
      title="自定义大小" 
      :value="123456" 
      :value-style="{ fontSize: '32px', fontWeight: 'bold' }"
    />
    <yc-statistic 
      title="危险数值" 
      :value="-123456" 
      :value-style="{ color: '#cf1322' }"
    />
  </yc-space>
</template>
```

### 使用插槽

使用插槽自定义标题、前缀、后缀等内容。

```vue
<template>
  <yc-space>
    <yc-statistic :value="1128">
      <template #title>
        <yc-space>
          <yc-icon-user />
          <span>活跃用户</span>
        </yc-space>
      </template>
      <template #suffix>
        <span style="color: #3f8600;">
          <yc-icon-arrow-up />
        </span>
      </template>
    </yc-statistic>
    
    <yc-statistic :value="93123">
      <template #title>
        <yc-space>
          <yc-icon-money />
          <span>总收入</span>
        </yc-space>
      </template>
      <template #prefix>¥</template>
      <template #extra>
        <yc-tag color="green">+12%</yc-tag>
      </template>
    </yc-statistic>
  </yc-space>
</template>
```

### 倒计时

使用 `Countdown` 组件实现倒计时功能。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-countdown 
        title="活动结束倒计时" 
        :value="deadline" 
        format="DD 天 HH:mm:ss"
        @finish="handleFinish"
      />
      
      <yc-countdown 
        title="简单倒计时" 
        :value="simpleDeadline" 
        format="HH:mm:ss"
        @finish="handleSimpleFinish"
      />
    </yc-space>
    
    <yc-button @click="resetCountdown">重置倒计时</yc-button>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const deadline = ref(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30) // 2天30秒后
const simpleDeadline = ref(Date.now() + 1000 * 60 * 5) // 5分钟后

const handleFinish = () => {
  console.log('活动结束倒计时完成')
}

const handleSimpleFinish = () => {
  console.log('简单倒计时完成')
}

const resetCountdown = () => {
  deadline.value = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
  simpleDeadline.value = Date.now() + 1000 * 60 * 5
}
</script>
```

### 卡片中的统计

在卡片中展示统计数据。

```vue
<template>
  <yc-space>
    <yc-card>
      <yc-statistic 
        title="今日访问量" 
        :value="12580" 
        :value-style="{ color: '#3f8600' }"
        animation
      >
        <template #suffix>
          <yc-icon-arrow-up style="color: #3f8600;" />
        </template>
      </yc-statistic>
    </yc-card>
    
    <yc-card>
      <yc-statistic 
        title="转化率" 
        :value="58.32" 
        suffix="%" 
        :precision="2"
        :value-style="{ color: '#1890ff' }"
      >
        <template #extra>
          <yc-tag color="blue">+2.1%</yc-tag>
        </template>
      </yc-statistic>
    </yc-card>
    
    <yc-card>
      <yc-statistic 
        title="活动剩余时间" 
        format="HH:mm:ss"
      >
        <template #value>
          <yc-countdown 
            :value="Date.now() + 1000 * 60 * 30" 
            format="HH:mm:ss"
          />
        </template>
      </yc-statistic>
    </yc-card>
  </yc-space>
</template>
```

### 占位符

当数值为空时显示占位符。

```vue
<template>
  <yc-space>
    <yc-statistic title="有数据" :value="12345" />
    <yc-statistic title="无数据" :value="null" placeholder="暂无数据" />
    <yc-statistic title="自定义占位符" :value="undefined" placeholder="--" />
  </yc-space>
</template>
```

## API

### Statistic Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| title | 标题 | `string` | `-` |
| value | 数值 | `number \| Date` | `-` |
| format | 格式化字符串 | `string` | `-` |
| extra | 额外内容 | `string` | `-` |
| precision | 数值精度 | `number` | `-` |
| separator | 千分位分隔符 | `string` | `','` |
| show-group-separator | 是否显示千分位分隔符 | `boolean` | `true` |
| animation | 是否开启动画 | `boolean` | `false` |
| animation-duration | 动画持续时间（毫秒） | `number` | `2000` |
| value-from | 动画起始值 | `number` | `-` |
| placeholder | 占位符 | `string` | `-` |
| value-style | 数值样式 | `CSSProperties` | `-` |
| start | 是否开始动画 | `boolean` | `true` |

### Statistic Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| finish | 动画完成时触发 | `-` |

### Statistic Slots

| 插槽名 | 描述 |
|--------|------|
| title | 自定义标题 |
| prefix | 自定义前缀 |
| suffix | 自定义后缀 |
| extra | 自定义额外内容 |
| value | 自定义数值 |

### Countdown Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| title | 标题 | `string` | `-` |
| value | 目标时间 | `number` | `-` |
| now | 当前时间 | `number` | `Date.now()` |
| format | 格式化字符串 | `string` | `'HH:mm:ss'` |
| start | 是否开始倒计时 | `boolean` | `true` |
| value-style | 数值样式 | `CSSProperties` | `-` |

### Countdown Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| finish | 倒计时结束时触发 | `-` |

### Countdown Slots

| 插槽名 | 描述 |
|--------|------|
| title | 自定义标题 |

## 类型定义

```typescript
export interface StatisticProps {
  title?: string;
  value?: StatisticValue;
  format?: string;
  extra?: string;
  precision?: number;
  separator?: string;
  showGroupSeparator?: boolean;
  animation?: boolean;
  animationDuration?: number;
  valueFrom?: number;
  placeholder?: string;
  valueStyle?: CSSProperties;
  start?: boolean;
}

export interface CountdownProps {
  title?: string;
  value?: number;
  now?: number;
  format?: string;
  start?: boolean;
  valueStyle?: CSSProperties;
}

export type StatisticValue = number | Date;
```

## 设计原则

- **数据突出**：通过大字体和对比色突出显示重要数据
- **信息层次**：合理组织标题、数值、额外信息的层次关系
- **动画流畅**：数字变化动画自然流畅，增强用户体验
- **格式灵活**：支持多种数值格式，适应不同业务场景

## 注意事项

1. 动画效果会在数值变化时自动触发
2. 倒计时组件会在到达目标时间时停止并触发 `finish` 事件
3. `format` 属性支持 moment.js 格式化语法
4. 千分位分隔符只对数字类型生效
5. 使用动画时建议设置合适的 `animation-duration` 以获得最佳体验