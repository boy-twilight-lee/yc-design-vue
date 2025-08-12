# Steps 步骤条

## 介绍

步骤条用于引导用户按照流程完成任务，显示任务的进度和状态。

## 基础用法

### 基本使用

最简单的步骤条用法。

```vue
<template>
  <yc-steps :current="1">
    <yc-step title="步骤一" description="这是步骤一的描述" />
    <yc-step title="步骤二" description="这是步骤二的描述" />
    <yc-step title="步骤三" description="这是步骤三的描述" />
  </yc-steps>
</template>
```

### 可切换步骤

设置 `changeable` 属性允许点击切换步骤。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-steps v-model:current="current" changeable>
      <yc-step title="开始" description="开始使用" />
      <yc-step title="进行中" description="正在处理" />
      <yc-step title="等待" description="等待结果" />
      <yc-step title="完成" description="处理完成" />
    </yc-steps>
    
    <yc-space>
      <yc-button @click="prev" :disabled="current <= 0">上一步</yc-button>
      <yc-button type="primary" @click="next" :disabled="current >= 3">下一步</yc-button>
    </yc-space>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const current = ref(0)

const prev = () => {
  if (current.value > 0) {
    current.value--
  }
}

const next = () => {
  if (current.value < 3) {
    current.value++
  }
}
</script>
```

### 不同类型

通过 `type` 属性设置不同的步骤条类型。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>默认类型</p>
      <yc-steps :current="1" type="default">
        <yc-step title="步骤一" />
        <yc-step title="步骤二" />
        <yc-step title="步骤三" />
      </yc-steps>
    </div>
    
    <div>
      <p>箭头类型</p>
      <yc-steps :current="1" type="arrow">
        <yc-step title="步骤一" />
        <yc-step title="步骤二" />
        <yc-step title="步骤三" />
      </yc-steps>
    </div>
    
    <div>
      <p>点状类型</p>
      <yc-steps :current="1" type="dot">
        <yc-step title="步骤一" description="描述信息" />
        <yc-step title="步骤二" description="描述信息" />
        <yc-step title="步骤三" description="描述信息" />
      </yc-steps>
    </div>
    
    <div>
      <p>导航类型</p>
      <yc-steps :current="1" type="navigation">
        <yc-step title="步骤一" />
        <yc-step title="步骤二" />
        <yc-step title="步骤三" />
      </yc-steps>
    </div>
  </yc-space>
</template>
```

### 垂直步骤条

设置 `direction` 为 `vertical` 显示垂直步骤条。

```vue
<template>
  <yc-steps :current="1" direction="vertical">
    <yc-step title="登录" description="用户登录系统" />
    <yc-step title="验证" description="验证用户信息" />
    <yc-step title="选择" description="选择相关选项" />
    <yc-step title="完成" description="完成所有设置" />
  </yc-steps>
</template>
```

### 标签位置

通过 `label-placement` 设置标签的位置。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <p>水平标签（默认）</p>
      <yc-steps :current="1" label-placement="horizontal">
        <yc-step title="步骤一" description="这是描述" />
        <yc-step title="步骤二" description="这是描述" />
        <yc-step title="步骤三" description="这是描述" />
      </yc-steps>
    </div>
    
    <div>
      <p>垂直标签</p>
      <yc-steps :current="1" label-placement="vertical">
        <yc-step title="步骤一" description="这是描述" />
        <yc-step title="步骤二" description="这是描述" />
        <yc-step title="步骤三" description="这是描述" />
      </yc-steps>
    </div>
  </yc-space>
</template>
```

### 步骤状态

可以为每个步骤设置不同的状态。

```vue
<template>
  <yc-steps :current="1">
    <yc-step title="完成" status="finish" />
    <yc-step title="进行中" status="process" />
    <yc-step title="错误" status="error" />
    <yc-step title="等待" status="wait" />
  </yc-steps>
</template>
```

### 自定义图标

使用插槽自定义步骤的图标。

```vue
<template>
  <yc-steps :current="1">
    <yc-step title="登录">
      <template #icon>
        <yc-icon-user />
      </template>
    </yc-step>
    <yc-step title="验证">
      <template #icon>
        <yc-icon-check />
      </template>
    </yc-step>
    <yc-step title="完成">
      <template #icon>
        <yc-icon-success />
      </template>
    </yc-step>
  </yc-steps>
</template>
```

### 小型步骤条

设置 `small` 属性显示小型步骤条。

```vue
<template>
  <yc-steps :current="1" small>
    <yc-step title="步骤一" />
    <yc-step title="步骤二" />
    <yc-step title="步骤三" />
    <yc-step title="步骤四" />
  </yc-steps>
</template>
```

### 无连接线

设置 `line-less` 属性隐藏连接线。

```vue
<template>
  <yc-steps :current="1" line-less>
    <yc-step title="步骤一" description="描述信息" />
    <yc-step title="步骤二" description="描述信息" />
    <yc-step title="步骤三" description="描述信息" />
  </yc-steps>
</template>
```

### 自定义内容

使用插槽自定义步骤的内容。

```vue
<template>
  <yc-steps :current="1" direction="vertical">
    <yc-step title="步骤一">
      <template #description>
        <div>
          <p>这是第一步的详细描述</p>
          <p>包含更多的操作说明</p>
        </div>
      </template>
    </yc-step>
    <yc-step title="步骤二">
      <template #description>
        <div>
          <p>这是第二步的详细描述</p>
          <yc-button size="small">查看详情</yc-button>
        </div>
      </template>
    </yc-step>
    <yc-step title="步骤三">
      <template #description>
        <p>这是第三步的描述</p>
      </template>
    </yc-step>
  </yc-steps>
</template>
```

## API

### Steps Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| current (v-model) | 当前步骤 | `number` | `0` |
| default-current | 默认当前步骤 | `number` | `0` |
| type | 步骤条类型 | `'default' \| 'arrow' \| 'dot' \| 'navigation'` | `'default'` |
| direction | 显示方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| label-placement | 标签放置位置 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| status | 指定当前步骤的状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'` |
| line-less | 是否隐藏连接线 | `boolean` | `false` |
| small | 是否为小型步骤条 | `boolean` | `false` |
| changeable | 是否可以点击切换 | `boolean` | `false` |

### Steps Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| change | 点击步骤时触发 | `(step: number, ev: Event)` |

### Steps Slots

| 插槽名 | 描述 |
|--------|------|
| default | 步骤内容 |

### Step Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| title | 步骤标题 | `string` | `-` |
| description | 步骤描述 | `string` | `-` |
| status | 步骤状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |

### Step Slots

| 插槽名 | 描述 | 参数 |
|--------|------|------|
| icon | 自定义图标 | `{ step: number, status: StepStatus }` |
| node | 自定义节点 | `{ step: number, status: StepStatus }` |
| description | 自定义描述 | `-` |
| default | 自定义标题 | `-` |

## 类型定义

```typescript
export interface StepsProps {
  type?: StepType;
  direction?: Direction;
  labelPlacement?: Direction;
  current?: number;
  defaultCurrent?: number;
  status?: StepStatus;
  lineLess?: boolean;
  small?: boolean;
  changeable?: boolean;
}

export interface StepProps {
  title?: string;
  description?: string;
  status?: StepStatus;
  disabled?: boolean;
}

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
export type StepType = 'default' | 'arrow' | 'dot' | 'navigation';
```

## 设计原则

- **流程清晰**：明确显示当前进度和后续步骤
- **状态明确**：通过不同颜色和图标表示各种状态
- **交互友好**：支持点击切换和键盘导航
- **布局灵活**：支持水平和垂直两种布局方式

## 注意事项

1. `current` 从 0 开始计算，表示当前激活的步骤索引
2. 当设置 `changeable` 为 `true` 时，用户可以点击步骤进行切换
3. 单个步骤的 `status` 会覆盖全局的 `status` 设置
4. 垂直模式下建议使用描述信息以获得更好的视觉效果
5. 导航类型的步骤条通常用于页面级的流程导航