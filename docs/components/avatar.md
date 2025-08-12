# Avatar 头像

用来代表用户或事物，支持图片、文字或图标。

## 何时使用

- 需要展示用户头像时
- 需要展示事物图标时
- 需要展示用户列表时

## 基础用法

最简单的用法，支持文字、图片、图标。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <YcAvatar>U</YcAvatar>
    <YcAvatar>
      <YcIcon name="user" />
    </YcAvatar>
    <YcAvatar image-url="https://example.com/avatar.jpg" />
  </div>
</template>
```

## 不同尺寸

通过 `size` 属性设置头像尺寸。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <YcAvatar :size="24">S</YcAvatar>
    <YcAvatar :size="32">M</YcAvatar>
    <YcAvatar :size="40">L</YcAvatar>
    <YcAvatar :size="48">XL</YcAvatar>
  </div>
</template>
```

## 不同形状

通过 `shape` 属性设置头像形状。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <YcAvatar shape="round">圆形</YcAvatar>
    <YcAvatar shape="square">方形</YcAvatar>
  </div>
</template>
```

## 自动调整字体大小

通过 `autoFixFontSize` 属性自动调整文字大小以适应头像尺寸。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <YcAvatar :size="32" :auto-fix-font-size="true">长文本</YcAvatar>
    <YcAvatar :size="32" :auto-fix-font-size="false">长文本</YcAvatar>
  </div>
</template>
```

## 图片填充方式

通过 `objectFit` 属性设置图片的填充方式。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <YcAvatar 
      :size="60" 
      image-url="https://example.com/avatar.jpg" 
      object-fit="cover"
    />
    <YcAvatar 
      :size="60" 
      image-url="https://example.com/avatar.jpg" 
      object-fit="contain"
    />
  </div>
</template>
```

## 触发器图标

通过 `trigger-icon` 插槽添加触发器图标。

```vue
<template>
  <YcAvatar :size="60" image-url="https://example.com/avatar.jpg">
    <template #trigger-icon>
      <YcIcon name="camera" />
    </template>
  </YcAvatar>
</template>
```

## 触发器类型

通过 `triggerType` 属性设置触发器类型。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <YcAvatar :size="60" image-url="https://example.com/avatar.jpg" trigger-type="mask">
      <template #trigger-icon>
        <YcIcon name="camera" />
      </template>
    </YcAvatar>
    <YcAvatar :size="60" image-url="https://example.com/avatar.jpg" trigger-type="button">
      <template #trigger-icon>
        <YcIcon name="camera" />
      </template>
    </YcAvatar>
  </div>
</template>
```

## 头像组

通过 `AvatarGroup` 组件展示多个头像。

```vue
<template>
  <YcAvatarGroup :max-count="3">
    <YcAvatar image-url="https://example.com/avatar1.jpg" />
    <YcAvatar image-url="https://example.com/avatar2.jpg" />
    <YcAvatar image-url="https://example.com/avatar3.jpg" />
    <YcAvatar image-url="https://example.com/avatar4.jpg" />
    <YcAvatar image-url="https://example.com/avatar5.jpg" />
  </YcAvatarGroup>
</template>
```

## 头像组最大显示数量

通过 `maxCount` 属性控制头像组最大显示数量。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <YcAvatarGroup :max-count="2">
      <YcAvatar image-url="https://example.com/avatar1.jpg" />
      <YcAvatar image-url="https://example.com/avatar2.jpg" />
      <YcAvatar image-url="https://example.com/avatar3.jpg" />
    </YcAvatarGroup>
    
    <YcAvatarGroup :max-count="5">
      <YcAvatar image-url="https://example.com/avatar1.jpg" />
      <YcAvatar image-url="https://example.com/avatar2.jpg" />
      <YcAvatar image-url="https://example.com/avatar3.jpg" />
    </YcAvatarGroup>
  </div>
</template>
```

## 头像组层级控制

通过 `zIndexAscend` 属性控制头像组的层级顺序。

```vue
<template>
  <div style="display: flex; gap: 16px;">
    <YcAvatarGroup :z-index-ascend="false">
      <YcAvatar image-url="https://example.com/avatar1.jpg" />
      <YcAvatar image-url="https://example.com/avatar2.jpg" />
      <YcAvatar image-url="https://example.com/avatar3.jpg" />
    </YcAvatarGroup>
    
    <YcAvatarGroup :z-index-ascend="true">
      <YcAvatar image-url="https://example.com/avatar1.jpg" />
      <YcAvatar image-url="https://example.com/avatar2.jpg" />
      <YcAvatar image-url="https://example.com/avatar3.jpg" />
    </YcAvatarGroup>
  </div>
</template>
```

## 事件监听

监听头像的各种事件。

```vue
<template>
  <YcAvatar 
    image-url="https://example.com/avatar.jpg"
    @click="onClick"
    @load="onLoad"
    @error="onError"
  />
</template>

<script setup>
const onClick = (ev) => {
  console.log('头像被点击', ev);
};

const onLoad = (ev) => {
  console.log('图片加载成功', ev);
};

const onError = (ev) => {
  console.log('图片加载失败', ev);
};
</script>
```

## API

### Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像形状 | `'square' \| 'round'` | - |
| imageUrl | 图片地址 | `string` | - |
| size | 头像尺寸 | `number` | - |
| autoFixFontSize | 是否自动调整字体大小 | `boolean` | - |
| triggerType | 触发器类型 | `'mask' \| 'button'` | `'button'` |
| triggerIconStyle | 触发器图标样式 | `CSSProperties` | `() => ({})` |
| objectFit | 图片填充方式 | `'cover' \| 'contain' \| 'fill' \| 'none'` | `'cover'` |

### AvatarGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像形状 | `'square' \| 'round'` | `'round'` |
| size | 头像尺寸 | `number` | `40` |
| autoFixFontSize | 是否自动调整字体大小 | `boolean` | `true` |
| maxCount | 最大显示数量 | `number` | `0` |
| zIndexAscend | 层级是否递增 | `boolean` | `false` |
| maxStyle | 最大数量头像样式 | `CSSProperties` | `() => ({})` |
| maxPopoverTriggerProps | 最大数量弹窗属性 | `TriggerProps` | `() => ({})` |

### Avatar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `(ev: MouseEvent)` |
| error | 图片加载失败时触发 | `(ev: Event)` |
| load | 图片加载成功时触发 | `(ev: Event)` |

### Avatar Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 头像内容（文字、图标等） |
| trigger-icon | 触发器图标 |

### AvatarGroup Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 头像列表 |

### Types

```typescript
interface AvatarProps {
  shape?: AvatarShape;
  imageUrl?: string;
  size?: number;
  autoFixFontSize?: boolean;
  triggerType?: AvatarTriggerType;
  triggerIconStyle?: CSSProperties;
  objectFit?: ObjectFit;
}

interface AvatarGroupProps {
  shape?: AvatarShape;
  size?: number;
  autoFixFontSize?: boolean;
  maxCount?: number;
  zIndexAscend?: boolean;
  maxStyle?: CSSProperties;
  maxPopoverTriggerProps?: TriggerProps;
}

interface AvatarEmits {
  (e: 'click', ev: MouseEvent): void;
  (e: 'error', ev: Event): void;
  (e: 'load', ev: Event): void;
}

interface AvatarSlots {
  default(): void;
  'trigger-icon'(): void;
}

interface AvatarGroupSlots {
  default(): void;
}

type AvatarShape = 'square' | 'round';
type AvatarTriggerType = 'mask' | 'button';
type ObjectFit = 'cover' | 'contain' | 'fill' | 'none';
```

## 注意事项

1. 当不设置 `size` 属性时，头像会继承父组件的尺寸设置
2. `autoFixFontSize` 属性会自动调整文字大小以适应头像尺寸
3. 头像组支持通过 `maxCount` 限制显示数量，超出部分会显示为 `+N` 的形式
4. 头像组支持通过 `zIndexAscend` 控制层级顺序
5. 触发器图标支持两种类型：`mask`（遮罩）和 `button`（按钮）
6. 图片加载失败时会显示默认的错误图标
