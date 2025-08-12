# Image 图片

## 介绍

图片组件用于展示图片，支持加载状态、错误处理、预览功能等。

## 基础用法

### 基本使用

最简单的图片展示用法。

```vue
<template>
  <yc-image 
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
    width="200"
    height="200"
  />
</template>
```

### 填充模式

通过 `fit` 属性设置图片的填充模式。

```vue
<template>
  <yc-space>
    <div>
      <p>fill</p>
      <yc-image 
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        width="200"
        height="200"
        fit="fill"
      />
    </div>
    <div>
      <p>contain</p>
      <yc-image 
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        width="200"
        height="200"
        fit="contain"
      />
    </div>
    <div>
      <p>cover</p>
      <yc-image 
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        width="200"
        height="200"
        fit="cover"
      />
    </div>
    <div>
      <p>none</p>
      <yc-image 
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        width="200"
        height="200"
        fit="none"
      />
    </div>
    <div>
      <p>scale-down</p>
      <yc-image 
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        width="200"
        height="200"
        fit="scale-down"
      />
    </div>
  </yc-space>
</template>
```

### 加载状态

图片加载过程中会显示加载状态。

```vue
<template>
  <yc-space>
    <yc-image 
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
      width="200"
      height="200"
      show-loader
    />
    
    <!-- 自定义加载状态 -->
    <yc-image 
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
      width="200"
      height="200"
    >
      <template #loader>
        <div style="text-align: center; padding: 50px;">
          <yc-spin />
          <p>加载中...</p>
        </div>
      </template>
    </yc-image>
  </yc-space>
</template>
```

### 错误状态

图片加载失败时显示错误状态。

```vue
<template>
  <yc-space>
    <!-- 默认错误状态 -->
    <yc-image 
      src="https://invalid-url.com/image.png"
      width="200"
      height="200"
    />
    
    <!-- 自定义错误状态 -->
    <yc-image 
      src="https://invalid-url.com/image.png"
      width="200"
      height="200"
    >
      <template #error>
        <div style="text-align: center; padding: 50px; color: #999;">
          <yc-icon-image-close style="font-size: 24px; margin-bottom: 8px;" />
          <p>加载失败</p>
        </div>
      </template>
    </yc-image>
  </yc-space>
</template>
```

### 图片预览

设置 `preview` 属性开启图片预览功能。

```vue
<template>
  <yc-space>
    <yc-image 
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
      width="200"
      height="200"
      preview
    />
    
    <!-- 受控的预览 -->
    <yc-image 
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
      width="200"
      height="200"
      :preview-visible="previewVisible"
      @preview-visible-change="previewVisible = $event"
    />
    
    <yc-button @click="previewVisible = true">
      预览图片
    </yc-button>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue'

const previewVisible = ref(false)
</script>
```

### 图片组预览

使用 `ImagePreviewGroup` 组件实现多图预览。

```vue
<template>
  <yc-image-preview-group>
    <yc-space>
      <yc-image 
        v-for="(src, index) in images"
        :key="index"
        :src="src"
        width="200"
        height="200"
        fit="cover"
        preview
      />
    </yc-space>
  </yc-image-preview-group>
</template>

<script setup>
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png'
]
</script>
```

### 标题和描述

为图片添加标题和描述信息。

```vue
<template>
  <yc-space>
    <yc-image 
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
      width="200"
      height="200"
      title="风景图片"
      description="这是一张美丽的风景图片"
    />
    
    <!-- 自定义额外内容 -->
    <yc-image 
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
      width="200"
      height="200"
      title="风景图片"
    >
      <template #extra>
        <yc-space>
          <yc-button size="small" type="text">编辑</yc-button>
          <yc-button size="small" type="text">删除</yc-button>
        </yc-space>
      </template>
    </yc-image>
  </yc-space>
</template>
```

### 预览操作栏

自定义预览模式下的操作栏。

```vue
<template>
  <yc-image 
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
    width="200"
    height="200"
    preview
  >
    <template #preview-actions>
      <yc-image-preview-action name="download" @click="handleDownload">
        <yc-icon-download />
      </yc-image-preview-action>
      <yc-image-preview-action name="share" @click="handleShare">
        <yc-icon-share />
      </yc-image-preview-action>
    </template>
  </yc-image>
</template>

<script setup>
const handleDownload = () => {
  console.log('下载图片')
}

const handleShare = () => {
  console.log('分享图片')
}
</script>
```

## API

### Image Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| src | 图片地址 | `string` | `-` |
| width | 图片宽度 | `number \| string` | `-` |
| height | 图片高度 | `number \| string` | `-` |
| title | 图片标题 | `string` | `-` |
| description | 图片描述 | `string` | `-` |
| fit | 图片填充模式 | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `-` |
| alt | 图片的替代文字 | `string` | `-` |
| hide-footer | 是否隐藏底部信息 | `boolean \| 'never'` | `false` |
| footer-position | 底部信息位置 | `'inner' \| 'outer'` | `'inner'` |
| show-loader | 是否显示加载状态 | `boolean` | `true` |
| preview | 是否开启预览 | `boolean` | `false` |
| preview-visible | 预览是否可见（受控） | `boolean` | `-` |
| default-preview-visible | 预览默认是否可见 | `boolean` | `false` |
| preview-props | 预览的配置项 | `ImagePreviewProps` | `-` |

### Image Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| preview-visible-change | 预览显示状态改变时触发 | `(visible: boolean)` |

### Image Slots

| 插槽名 | 描述 |
|--------|------|
| error | 自定义错误状态 |
| error-icon | 自定义错误图标 |
| loader | 自定义加载状态 |
| extra | 自定义额外内容 |
| preview-actions | 自定义预览操作栏 |

### ImagePreviewGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| src-list | 图片地址列表 | `string[]` | `-` |
| current | 当前显示的图片索引 | `number` | `-` |
| default-current | 默认显示的图片索引 | `number` | `0` |
| infinite | 是否无限循环 | `boolean` | `false` |
| visible | 预览是否可见 | `boolean` | `-` |
| default-visible | 预览默认是否可见 | `boolean` | `false` |
| mask-closable | 点击蒙层是否关闭 | `boolean` | `true` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| actions-layout | 操作栏布局 | `string[]` | `['fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize']` |
| esc-to-close | 按 ESC 键是否关闭 | `boolean` | `true` |

### ImagePreviewGroup Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| change | 切换图片时触发 | `(index: number)` |
| visible-change | 预览显示状态改变时触发 | `(visible: boolean)` |

### ImagePreviewGroup Slots

| 插槽名 | 描述 |
|--------|------|
| actions | 自定义操作栏 |
| default | 图片内容 |

## 类型定义

```typescript
export interface ImageProps {
  src?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  description?: string;
  fit?: ImageObjectFit;
  alt?: string;
  hideFooter?: HideFooter;
  footerPosition?: FooterPosition;
  showLoader?: boolean;
  preview?: boolean;
  previewVisible?: boolean;
  defaultPreviewVisible?: boolean;
  previewProps?: ImagePreviewProps;
}

export type ImageObjectFit = 
  | 'contain' 
  | 'cover' 
  | 'fill' 
  | 'none' 
  | 'scale-down';

export type HideFooter = boolean | 'never';
export type FooterPosition = 'inner' | 'outer';
```

## 设计原则

- **加载体验**：提供友好的加载和错误状态
- **预览功能**：支持图片预览和缩放操作
- **响应式**：适配不同尺寸和填充模式
- **可定制性**：支持自定义加载、错误状态和操作栏

## 注意事项

1. 图片地址无效时会自动显示错误状态
2. 预览功能需要设置 `preview` 属性为 `true`
3. 使用 `ImagePreviewGroup` 可以实现多图预览和切换
4. `fit` 属性对应 CSS 的 `object-fit` 属性
5. 自定义加载状态时建议保持一致的尺寸避免布局抖动