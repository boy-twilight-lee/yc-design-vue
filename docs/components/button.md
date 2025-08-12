# Button 按钮

## 介绍

按钮用于开始一个即时操作。

## 基础用法

### 按钮类型

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-space>
      <yc-button type="primary">主要按钮</yc-button>
      <yc-button>默认按钮</yc-button>
      <yc-button type="dashed">虚线按钮</yc-button>
      <yc-button type="outline">描边按钮</yc-button>
      <yc-button type="text">文本按钮</yc-button>
    </yc-space>
    <yc-space>
      <yc-button type="primary" status="success">成功按钮</yc-button>
      <yc-button type="primary" status="warning">警告按钮</yc-button>
      <yc-button type="primary" status="danger">危险按钮</yc-button>
    </yc-space>
  </yc-space>
</template>
```

### 按钮尺寸

按钮有三种尺寸：大、中、小。默认为中等尺寸。

```vue
<template>
  <yc-space>
    <yc-button size="large">大按钮</yc-button>
    <yc-button>中按钮</yc-button>
    <yc-button size="small">小按钮</yc-button>
  </yc-space>
</template>
```

### 按钮形状

按钮有三种形状：方形、圆角、圆形。

```vue
<template>
  <yc-space>
    <yc-button shape="square">方形按钮</yc-button>
    <yc-button>圆角按钮</yc-button>
    <yc-button shape="circle">圆形按钮</yc-button>
  </yc-space>
</template>
```

### 按钮状态

按钮有四种状态：正常、加载中、禁用、危险。

```vue
<template>
  <yc-space>
    <yc-button>正常按钮</yc-button>
    <yc-button loading>加载中</yc-button>
    <yc-button disabled>禁用按钮</yc-button>
    <yc-button status="danger">危险按钮</yc-button>
  </yc-space>
</template>
```

### 按钮组

按钮组用于将多个按钮组合在一起，形成一组相关的操作。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-button-group>
      <yc-button>按钮1</yc-button>
      <yc-button>按钮2</yc-button>
      <yc-button>按钮3</yc-button>
    </yc-button-group>
    
    <yc-button-group>
      <yc-button type="primary">按钮1</yc-button>
      <yc-button type="primary">按钮2</yc-button>
      <yc-button type="primary">按钮3</yc-button>
    </yc-button-group>
  </yc-space>
</template>
```

### 图标按钮

按钮可以包含图标，图标可以放在按钮的左侧或右侧。

```vue
<template>
  <yc-space>
    <yc-button>
      <template #icon>
        <yc-icon-search />
      </template>
      搜索
    </yc-button>
    
    <yc-button type="primary">
      上传
      <template #icon>
        <yc-icon-upload />
      </template>
    </yc-button>
    
    <yc-button shape="circle">
      <template #icon>
        <yc-icon-settings />
      </template>
    </yc-button>
  </yc-space>
</template>
```

### 长按钮

长按钮会占满父容器的宽度。

```vue
<template>
  <yc-space direction="vertical" size="large">
    <yc-button long>长按钮</yc-button>
    <yc-button type="primary" long>主要长按钮</yc-button>
  </yc-space>
</template>
```

## API

### Button Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| type | 按钮的类型 | `'primary' \| 'secondary' \| 'dashed' \| 'outline' \| 'text'` | `-` |
| status | 按钮的状态 | `'normal' \| 'success' \| 'warning' \| 'danger'` | `'normal'` |
| size | 按钮的尺寸 | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| shape | 按钮的形状 | `'square' \| 'round' \| 'circle'` | `'round'` |
| long | 按钮是否撑满父容器宽度 | `boolean` | `false` |
| loading | 按钮是否处于加载状态 | `boolean` | `false` |
| disabled | 按钮是否禁用 | `boolean` | `false` |
| html-type | 按钮的 HTML 类型 | `'button' \| 'submit' \| 'reset'` | `'button'` |
| href | 链接按钮的地址 | `string` | `-` |

### Button Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| click | 点击按钮时触发 | `(ev: MouseEvent)` |
| mousedown | 鼠标按下时触发 | `(ev: MouseEvent)` |
| mouseup | 鼠标抬起时触发 | `(ev: MouseEvent)` |
| dblclick | 双击时触发 | `(ev: MouseEvent)` |
| contextmenu | 右键点击时触发 | `(ev: MouseEvent)` |

### Button Slots

| 插槽名 | 描述 |
|--------|------|
| default | 按钮的内容 |
| icon | 按钮的图标 |

### ButtonGroup Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| type | 按钮组的类型 | `'primary' \| 'secondary' \| 'dashed' \| 'outline' \| 'text'` | `-` |
| status | 按钮组的状态 | `'normal' \| 'success' \| 'warning' \| 'danger'` | `'normal'` |
| size | 按钮组的尺寸 | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 按钮组是否禁用 | `boolean` | `false` |

### ButtonGroup Slots

| 插槽名 | 描述 |
|--------|------|
| default | 按钮组的内容 |

## 类型定义

```typescript
export interface ButtonProps {
  type?: ButtonType;
  shape?: ButtonShape;
  status?: ButtonStatus;
  size?: Size;
  long?: boolean;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: ButtonHtmlType;
  href?: string;
}

export interface ButtonEmits {
  (e: 'mousedown', event: MouseEvent): void;
  (e: 'mouseup', event: MouseEvent): void;
  (e: 'click', event: MouseEvent): void;
  (e: 'dblclick', event: MouseEvent): void;
  (e: 'contextmenu', event: MouseEvent): void;
}

export interface ButtonSlots {
  default(): void;
  icon(): void;
}

export type ButtonStatus = 'normal' | 'warning' | 'success' | 'danger';
export type ButtonShape = 'square' | 'circle' | 'round';
export type ButtonType = 'primary' | 'secondary' | 'dashed' | 'outline' | 'text';
export type ButtonHtmlType = 'button' | 'reset' | 'submit';
```

## 设计原则

- **一致性**：按钮的视觉样式和行为保持一致
- **可用性**：按钮的状态变化清晰，用户能够理解当前状态
- **可访问性**：支持键盘导航，提供适当的 ARIA 属性
- **响应性**：按钮在不同尺寸下都有良好的显示效果

## 注意事项

1. 主按钮在同一个操作区域最多出现一次
2. 禁用状态的按钮不会触发任何事件
3. 加载状态的按钮会显示加载动画，并且不可点击
4. 按钮组中的按钮会自动继承按钮组的样式属性
5. 图标按钮建议使用 `shape="circle"` 来获得更好的视觉效果
