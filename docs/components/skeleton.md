# Skeleton 骨架屏

## 介绍

骨架屏用于在内容加载过程中展示页面的大致结构，提升用户体验，避免页面长时间的白屏等待。

## 基础用法

### 基本使用

最简单的骨架屏用法，当 `loading` 为 `true` 时显示骨架屏。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-button @click="setLoading">
        {{ loading ? '加载完成' : '开始加载' }}
      </yc-button>
    </yc-space>
    
    <yc-skeleton :loading="loading">
      <template #content>
        <yc-card>
          <template #header>
            <yc-space>
              <yc-avatar>
                <img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png" />
              </yc-avatar>
              <div>
                <div>用户名</div>
                <div>描述信息</div>
              </div>
            </yc-space>
          </template>
          
          <p>这里是实际的内容，当加载完成后会显示这些内容。</p>
          <p>骨架屏主要用于在内容加载时提供视觉占位符。</p>
        </yc-card>
      </template>
    </yc-skeleton>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

const setLoading = () => {
  loading.value = !loading.value
}
</script>
```

### 自定义骨架屏

使用 `SkeletonLine` 和 `SkeletonShape` 组件自定义骨架屏布局。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-button @click="setLoading2">
      {{ loading2 ? '加载完成' : '开始加载' }}
    </yc-button>
    
    <yc-skeleton :loading="loading2">
      <!-- 自定义骨架屏 -->
      <template #default>
        <yc-space>
          <yc-skeleton-shape shape="circle" size="large" />
          <div style="flex: 1;">
            <yc-skeleton-line :rows="3" :widths="[200, 150, 100]" />
          </div>
        </yc-space>
      </template>
      
      <!-- 实际内容 -->
      <template #content>
        <yc-space>
          <yc-avatar size="large">U</yc-avatar>
          <div>
            <div style="font-weight: bold; margin-bottom: 4px;">用户信息</div>
            <div style="color: #999; margin-bottom: 4px;">这是用户的详细描述</div>
            <div style="font-size: 12px; color: #ccc;">最后更新时间</div>
          </div>
        </yc-space>
      </template>
    </yc-skeleton>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const loading2 = ref(true)

const setLoading2 = () => {
  loading2.value = !loading2.value
}
</script>
```

### 复杂布局

创建复杂的骨架屏布局。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-button @click="setLoading3">
      {{ loading3 ? '加载完成' : '开始加载' }}
    </yc-button>
    
    <yc-skeleton :loading="loading3">
      <template #default>
        <div>
          <!-- 头部区域 -->
          <yc-space style="margin-bottom: 16px;">
            <yc-skeleton-shape shape="circle" size="large" />
            <div style="flex: 1;">
              <yc-skeleton-line :rows="2" :widths="[150, 100]" />
            </div>
          </yc-space>
          
          <!-- 内容区域 -->
          <yc-skeleton-shape shape="sqaure" style="width: 100%; height: 200px; margin-bottom: 16px;" />
          
          <!-- 文本区域 -->
          <yc-skeleton-line :rows="4" :widths="['100%', '80%', '90%', '60%']" />
          
          <!-- 底部按钮区域 -->
          <yc-space style="margin-top: 16px;">
            <yc-skeleton-shape shape="sqaure" style="width: 80px; height: 32px;" />
            <yc-skeleton-shape shape="sqaure" style="width: 80px; height: 32px;" />
          </yc-space>
        </div>
      </template>
      
      <template #content>
        <yc-card>
          <template #header>
            <yc-space>
              <yc-avatar size="large">
                <img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png" />
              </yc-avatar>
              <div>
                <div style="font-weight: bold;">文章标题</div>
                <div style="color: #999; font-size: 14px;">作者 • 2024-01-01</div>
              </div>
            </yc-space>
          </template>
          
          <img 
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
            style="width: 100%; height: 200px; object-fit: cover; margin-bottom: 16px;"
          />
          
          <p>这是一篇关于设计系统的文章。设计系统是一套完整的设计标准、文档元素、组件和代码实现，用于指导产品设计和开发。</p>
          <p>通过建立设计系统，团队可以提高工作效率，保证产品的一致性，并减少重复工作。</p>
          <p>本文将介绍如何构建一套完整的设计系统，包括颜色规范、字体规范、组件库等各个方面的内容。</p>
          
          <yc-space style="margin-top: 16px;">
            <yc-button type="primary">点赞</yc-button>
            <yc-button>收藏</yc-button>
          </yc-space>
        </yc-card>
      </template>
    </yc-skeleton>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const loading3 = ref(true)

const setLoading3 = () => {
  loading3.value = !loading3.value
}
</script>
```

### 动画效果

默认情况下骨架屏包含动画效果，可以通过 `animation` 属性控制。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-button @click="toggleAnimation">
        {{ animation ? '关闭动画' : '开启动画' }}
      </yc-button>
    </yc-space>
    
    <yc-skeleton loading :animation="animation">
      <template #default>
        <yc-space>
          <yc-skeleton-shape shape="circle" />
          <yc-skeleton-line :rows="3" />
        </yc-space>
      </template>
    </yc-skeleton>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const animation = ref(true)

const toggleAnimation = () => {
  animation.value = !animation.value
}
</script>
```

### 列表骨架屏

用于列表数据的骨架屏。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-button @click="setLoading4">
      {{ loading4 ? '加载完成' : '开始加载' }}
    </yc-button>
    
    <yc-skeleton :loading="loading4">
      <template #default>
        <div v-for="i in 3" :key="i" style="margin-bottom: 16px;">
          <yc-space>
            <yc-skeleton-shape shape="circle" />
            <div style="flex: 1;">
              <yc-skeleton-line :rows="2" :widths="[200, 150]" />
            </div>
          </yc-space>
        </div>
      </template>
      
      <template #content>
        <yc-list :data="listData">
          <template #item="{ item }">
            <yc-list-item>
              <template #meta>
                <yc-list-item-meta
                  :title="item.title"
                  :description="item.description"
                >
                  <template #avatar>
                    <yc-avatar>{{ item.avatar }}</yc-avatar>
                  </template>
                </yc-list-item-meta>
              </template>
            </yc-list-item>
          </template>
        </yc-list>
      </template>
    </yc-skeleton>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const loading4 = ref(true)

const listData = [
  { title: '列表项目1', description: '这是第一个列表项的描述', avatar: 'A' },
  { title: '列表项目2', description: '这是第二个列表项的描述', avatar: 'B' },
  { title: '列表项目3', description: '这是第三个列表项的描述', avatar: 'C' }
]

const setLoading4 = () => {
  loading4.value = !loading4.value
}
</script>
```

## API

### Skeleton Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| loading | 是否显示骨架屏 | `boolean` | `true` |
| animation | 是否显示动画 | `boolean` | `true` |

### Skeleton Slots

| 插槽名 | 描述 |
|--------|------|
| default | 自定义骨架屏内容 |
| content | 实际内容 |

### SkeletonLine Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| rows | 行数 | `number` | `3` |
| widths | 每行的宽度 | `number[]` | `-` |
| line-height | 行高 | `number` | `20` |
| line-spacing | 行间距 | `number` | `15` |

### SkeletonShape Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| shape | 形状 | `'square' \| 'circle'` | `'square'` |
| size | 尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |

## 类型定义

```typescript
export interface SkeletonProps {
  animation?: boolean;
  loading?: boolean;
}

export interface SkeletonLineProps {
  rows?: number;
  widths?: number[];
  lineHeight?: number;
  lineSpacing?: number;
}

export interface SkeletonShapeProps {
  shape?: SkeletonShapeShape;
  size?: SkeletonShapeSize;
}

export type SkeletonShapeSize = 'small' | 'medium' | 'large';
export type SkeletonShapeShape = 'square' | 'circle';
```

## 设计原则

- **结构相似**：骨架屏应该与实际内容的结构尽可能相似
- **适度抽象**：不需要完全还原实际内容，重点展示布局结构
- **加载感知**：通过动画效果让用户感知到页面正在加载
- **性能友好**：骨架屏本身应该加载迅速，不影响性能

## 注意事项

1. 骨架屏的结构应该尽量与实际内容的布局保持一致
2. 使用 `loading` 属性控制是否显示骨架屏
3. 可以组合使用 `SkeletonLine` 和 `SkeletonShape` 创建复杂布局
4. 骨架屏的动画效果有助于让用户感知到页面正在加载
5. 在移动端使用时要注意骨架屏的响应式适配