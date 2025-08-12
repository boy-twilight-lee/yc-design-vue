# Watermark 水印

## 介绍

Watermark 水印组件用于为页面添加水印，防止信息泄露，支持文字和图片水印。

## 基础用法

### 基本使用

最简单的文字水印。

```vue
<template>
  <yc-watermark content="YC Design Vue">
    <div style="height: 300px; background: #f5f5f5; padding: 20px;">
      <yc-card title="内容区域">
        <p>这是带有水印的内容区域。</p>
        <p>水印会覆盖在内容上方，起到保护作用。</p>
      </yc-card>
    </div>
  </yc-watermark>
</template>
```

### 多行文字水印

传入字符串数组实现多行水印。

```vue
<template>
  <yc-watermark :content="['YC Design Vue', '保密文档']">
    <div style="height: 300px; background: #f5f5f5; padding: 20px;">
      <yc-card title="多行水印">
        <p>支持多行文字水印显示。</p>
        <p>每一行都会独立显示。</p>
      </yc-card>
    </div>
  </yc-watermark>
</template>
```

### 图片水印

使用图片作为水印。

```vue
<template>
  <yc-watermark 
    image="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
    :width="100"
    :height="100"
  >
    <div style="height: 400px; background: #f5f5f5; padding: 20px;">
      <yc-card title="图片水印">
        <p>使用图片作为水印效果。</p>
        <p>可以设置图片的宽高来控制水印大小。</p>
      </yc-card>
    </div>
  </yc-watermark>
</template>
```

### 调整透明度

通过 `alpha` 属性调整水印透明度。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <h4>透明度 0.3</h4>
      <yc-watermark content="YC Design Vue" :alpha="0.3">
        <div style="height: 150px; background: #f5f5f5; padding: 20px;">
          <p>低透明度水印</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>透明度 0.8</h4>
      <yc-watermark content="YC Design Vue" :alpha="0.8">
        <div style="height: 150px; background: #f5f5f5; padding: 20px;">
          <p>高透明度水印</p>
        </div>
      </yc-watermark>
    </div>
  </yc-space>
</template>
```

### 设置间距和偏移

通过 `gap` 和 `offset` 属性调整水印布局。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <h4>默认间距</h4>
      <yc-watermark content="YC Design Vue">
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>默认间距的水印</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>大间距</h4>
      <yc-watermark content="YC Design Vue" :gap="[200, 100]">
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>间距为 [200px, 100px] 的水印</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>有偏移</h4>
      <yc-watermark content="YC Design Vue" :offset="[50, 50]">
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>偏移 [50px, 50px] 的水印</p>
        </div>
      </yc-watermark>
    </div>
  </yc-space>
</template>
```

### 旋转角度

通过 `rotate` 属性设置水印旋转角度。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <h4>旋转 -20 度</h4>
      <yc-watermark content="YC Design Vue" :rotate="-20">
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>向左倾斜的水印</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>旋转 45 度</h4>
      <yc-watermark content="YC Design Vue" :rotate="45">
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>倾斜 45 度的水印</p>
        </div>
      </yc-watermark>
    </div>
  </yc-space>
</template>
```

### 自定义字体

通过 `font` 属性自定义水印字体样式。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <h4>大字体红色</h4>
      <yc-watermark 
        content="YC Design Vue" 
        :font="{
          fontSize: 24,
          color: '#ff4d4f',
          fontWeight: 'bold'
        }"
      >
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>自定义字体样式的水印</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>斜体蓝色</h4>
      <yc-watermark 
        content="YC Design Vue" 
        :font="{
          fontSize: 18,
          color: '#1890ff',
          fontStyle: 'italic',
          fontFamily: 'Arial'
        }"
      >
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>斜体蓝色水印</p>
        </div>
      </yc-watermark>
    </div>
  </yc-space>
</template>
```

### 层级设置

通过 `z-index` 属性设置水印层级。

```vue
<template>
  <yc-watermark content="YC Design Vue" :z-index="1000">
    <div style="height: 300px; background: #f5f5f5; padding: 20px; position: relative;">
      <yc-card title="高层级水印">
        <p>水印的层级为 1000</p>
        <div 
          style="
            position: absolute; 
            top: 50px; 
            right: 50px; 
            background: white; 
            padding: 10px; 
            border: 1px solid #d9d9d9;
            z-index: 999;
          "
        >
          这个元素在水印下方
        </div>
      </yc-card>
    </div>
  </yc-watermark>
</template>
```

### 错开排列

通过 `staggered` 属性设置水印错开排列。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <h4>常规排列</h4>
      <yc-watermark content="YC Design Vue" :staggered="false">
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>水印整齐排列</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>错开排列</h4>
      <yc-watermark content="YC Design Vue" staggered>
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>水印错开排列，提高防伪效果</p>
        </div>
      </yc-watermark>
    </div>
  </yc-space>
</template>
```

### 灰度图片

通过 `grayscale` 属性将图片水印转为灰度。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <div>
      <h4>彩色图片水印</h4>
      <yc-watermark 
        image="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        :width="80"
        :height="80"
        :grayscale="false"
      >
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>彩色图片水印</p>
        </div>
      </yc-watermark>
    </div>
    
    <div>
      <h4>灰度图片水印</h4>
      <yc-watermark 
        image="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/placeholder_light.png"
        :width="80"
        :height="80"
        grayscale
      >
        <div style="height: 200px; background: #f5f5f5; padding: 20px;">
          <p>灰度图片水印</p>
        </div>
      </yc-watermark>
    </div>
  </yc-space>
</template>
```

### 防篡改

通过 `anti-tamper` 属性开启防篡改功能。

```vue
<template>
  <yc-watermark content="保密文档 - 禁止外传" anti-tamper>
    <div style="height: 300px; background: #f5f5f5; padding: 20px;">
      <yc-card title="防篡改水印">
        <p>开启防篡改功能后，水印会监控自身状态。</p>
        <p>当水印被删除或修改时，会自动恢复。</p>
        <yc-alert 
          message="提示" 
          description="尝试在开发者工具中删除水印元素，会发现水印会自动恢复。" 
          type="info"
          style="margin-top: 16px;" 
        />
      </yc-card>
    </div>
  </yc-watermark>
</template>
```

## API

### Watermark Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| content | 水印文字内容 | `string \| string[]` | `-` |
| image | 水印图片 | `string` | `-` |
| width | 水印宽度 | `number` | `120` |
| height | 水印高度 | `number` | `64` |
| gap | 水印间距 | `[number, number]` | `[100, 100]` |
| offset | 水印偏移量 | `[number, number]` | `[0, 0]` |
| rotate | 水印旋转角度 | `number` | `-22` |
| font | 字体样式 | `WatermarkFont` | `-` |
| z-index | 水印层级 | `number` | `9` |
| alpha | 水印透明度 | `number` | `0.15` |
| grayscale | 图片是否灰度化 | `boolean` | `false` |
| repeat | 是否重复 | `boolean` | `true` |
| staggered | 是否错开排列 | `boolean` | `true` |
| anti-tamper | 防篡改 | `boolean` | `false` |

### Watermark Slots

| 插槽名 | 描述 |
|--------|------|
| default | 需要添加水印的内容 |

## 类型定义

```typescript
export interface WatermarkProps {
  content?: string | string[];
  image?: string;
  width?: number;
  height?: number;
  gap?: number[];
  offset?: number[];
  rotate?: number;
  font?: WatermarkFont;
  zIndex?: number;
  alpha?: number;
  grayscale?: boolean;
  repeat?: boolean;
  staggered?: boolean;
  antiTamper?: boolean;
}

export interface WatermarkFont {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
}
```

## 设计原则

- **安全防护**：通过水印防止信息泄露和未授权使用
- **视觉平衡**：水印不应过度干扰正常内容的阅读
- **防篡改**：提供防篡改机制，确保水印不被轻易删除
- **灵活配置**：支持多种样式和布局选项

## 注意事项

1. 水印透明度建议设置在 0.1-0.3 之间，既能起到防护作用又不影响阅读
2. 图片水印建议使用 PNG 格式以支持透明背景
3. 防篡改功能会消耗一定的性能，建议仅在必要时开启
4. 水印的层级应高于内容，但不宜过高以免影响页面交互
5. 多行文字水印会自动计算高度，建议不超过 3 行