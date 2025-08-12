# Tooltip 文字提示

文字提示组件。

## 何时使用

- 当鼠标悬停在某个元素上时，需要显示提示信息
- 当需要为复杂操作提供说明时
- 当需要显示额外的上下文信息时

## 基础用法

最简单的文字提示用法。

```vue
<template>
  <YcSpace size="large">
    <YcTooltip content="这是一个提示信息">
      <YcButton>悬停查看提示</YcButton>
    </YcTooltip>
    
    <YcTooltip content="这是另一个提示信息">
      <YcButton>另一个提示</YcButton>
    </YcTooltip>
  </YcSpace>
</template>
```

## 提示位置

通过 `position` 属性设置提示位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>顶部位置</h4>
      <YcSpace size="small">
        <YcTooltip content="顶部提示" position="top">
          <YcButton>顶部</YcButton>
        </YcTooltip>
        <YcTooltip content="左上提示" position="tl">
          <YcButton>左上</YcButton>
        </YcTooltip>
        <YcTooltip content="右上提示" position="tr">
          <YcButton>右上</YcButton>
        </YcTooltip>
      </YcSpace>
    </div>
    
    <div>
      <h4>底部位置</h4>
      <YcSpace size="small">
        <YcTooltip content="底部提示" position="bottom">
          <YcButton>底部</YcButton>
        </YcTooltip>
        <YcTooltip content="左下提示" position="bl">
          <YcButton>左下</YcButton>
        </YcTooltip>
        <YcTooltip content="右下提示" position="br">
          <YcButton>右下</YcButton>
        </YcTooltip>
      </YcSpace>
    </div>
    
    <div>
      <h4>左右位置</h4>
      <YcSpace size="small">
        <YcTooltip content="左侧提示" position="left">
          <YcButton>左侧</YcButton>
        </YcTooltip>
        <YcTooltip content="右侧提示" position="right">
          <YcButton>右侧</YcButton>
        </YcTooltip>
      </YcSpace>
    </div>
  </YcSpace>
</template>
```

## 提示内容

通过 `content` 属性或插槽设置提示内容。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>文本内容</h4>
      <YcTooltip content="这是一个简单的文本提示">
        <YcButton>文本提示</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>HTML内容</h4>
      <YcTooltip content="<strong>粗体文本</strong> <em>斜体文本</em>">
        <YcButton>HTML提示</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>插槽内容</h4>
      <YcTooltip>
        <template #content>
          <div class="custom-tooltip">
            <div class="tooltip-title">自定义提示</div>
            <div class="tooltip-content">
              <p>这是第一行内容</p>
              <p>这是第二行内容</p>
            </div>
          </div>
        </template>
        <YcButton>插槽提示</YcButton>
      </YcTooltip>
    </div>
  </YcSpace>
</template>

<style scoped>
.custom-tooltip {
  padding: 8px;
}

.tooltip-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.tooltip-content {
  color: #666;
}

.tooltip-content p {
  margin: 4px 0;
}
</style>
```

## 提示样式

通过属性自定义提示样式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认样式</h4>
      <YcTooltip content="默认样式的提示">
        <YcButton>默认样式</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>自定义背景色</h4>
      <YcTooltip 
        content="自定义背景色的提示"
        background-color="#52c41a"
      >
        <YcButton>绿色背景</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>自定义样式类</h4>
      <YcTooltip 
        content="自定义样式类的提示"
        content-class="custom-tooltip-class"
      >
        <YcButton>自定义样式类</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>自定义内联样式</h4>
      <YcTooltip 
        content="自定义内联样式的提示"
        :content-style="{ 
          backgroundColor: '#ff4d4f', 
          color: 'white',
          padding: '12px',
          borderRadius: '8px'
        }"
      >
        <YcButton>自定义内联样式</YcButton>
      </YcTooltip>
    </div>
  </YcSpace>
</template>

<style>
.custom-tooltip-class {
  background-color: #1890ff !important;
  color: white !important;
  padding: 12px !important;
  border-radius: 8px !important;
}
</style>
```

## 迷你提示

通过 `mini` 属性启用迷你提示。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>普通提示</h4>
      <YcTooltip content="这是一个普通的提示信息">
        <YcButton>普通提示</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>迷你提示</h4>
      <YcTooltip content="这是一个迷你提示" :mini="true">
        <YcButton>迷你提示</YcButton>
      </YcTooltip>
    </div>
  </YcSpace>
</template>
```

## 箭头样式

通过属性自定义箭头样式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认箭头</h4>
      <YcTooltip content="默认箭头的提示">
        <YcButton>默认箭头</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>自定义箭头样式类</h4>
      <YcTooltip 
        content="自定义箭头样式类的提示"
        arrow-class="custom-arrow-class"
      >
        <YcButton>自定义箭头样式类</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>自定义箭头内联样式</h4>
      <YcTooltip 
        content="自定义箭头内联样式的提示"
        :arrow-style="{ 
          borderColor: '#52c41a',
          borderWidth: '8px'
        }"
      >
        <YcButton>自定义箭头内联样式</YcButton>
      </YcTooltip>
    </div>
  </YcSpace>
</template>

<style>
.custom-arrow-class {
  border-color: #ff4d4f !important;
  border-width: 8px !important;
}
</style>
```

## 触发方式

通过 `triggerProps` 属性设置触发方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>悬停触发（默认）</h4>
      <YcTooltip content="悬停触发的提示">
        <YcButton>悬停触发</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>点击触发</h4>
      <YcTooltip 
        content="点击触发的提示"
        :trigger-props="{ trigger: 'click' }"
      >
        <YcButton>点击触发</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>焦点触发</h4>
      <YcTooltip 
        content="焦点触发的提示"
        :trigger-props="{ trigger: 'focus' }"
      >
        <YcButton>焦点触发</YcButton>
      </YcTooltip>
    </div>
    
    <div>
      <h4>手动控制</h4>
      <YcTooltip 
        content="手动控制的提示"
        v-model:popup-visible="tooltipVisible"
      >
        <YcButton @click="toggleTooltip">
          {{ tooltipVisible ? '隐藏提示' : '显示提示' }}
        </YcButton>
      </YcTooltip>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const tooltipVisible = ref(false);

const toggleTooltip = () => {
  tooltipVisible.value = !tooltipVisible.value;
};
</script>
```

## 完整示例

一个完整的文字提示组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Tooltip 文字提示示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace size="large">
        <YcTooltip content="这是一个提示信息">
          <YcButton>悬停查看提示</YcButton>
        </YcTooltip>
        
        <YcTooltip content="这是另一个提示信息">
          <YcButton>另一个提示</YcButton>
        </YcTooltip>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>提示位置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>顶部位置</h4>
          <YcSpace size="small">
            <YcTooltip content="顶部提示" position="top">
              <YcButton>顶部</YcButton>
            </YcTooltip>
            <YcTooltip content="左上提示" position="tl">
              <YcButton>左上</YcButton>
            </YcTooltip>
            <YcTooltip content="右上提示" position="tr">
              <YcButton>右上</YcButton>
            </YcTooltip>
          </YcSpace>
        </div>
        
        <div>
          <h4>底部位置</h4>
          <YcSpace size="small">
            <YcTooltip content="底部提示" position="bottom">
              <YcButton>底部</YcButton>
            </YcTooltip>
            <YcTooltip content="左下提示" position="bl">
              <YcButton>左下</YcButton>
            </YcTooltip>
            <YcTooltip content="右下提示" position="br">
              <YcButton>右下</YcButton>
            </YcTooltip>
          </YcSpace>
        </div>
        
        <div>
          <h4>左右位置</h4>
          <YcSpace size="small">
            <YcTooltip content="左侧提示" position="left">
              <YcButton>左侧</YcButton>
            </YcTooltip>
            <YcTooltip content="右侧提示" position="right">
              <YcButton>右侧</YcButton>
            </YcTooltip>
          </YcSpace>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>提示内容</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>文本内容</h4>
          <YcTooltip content="这是一个简单的文本提示">
            <YcButton>文本提示</YcButton>
          </YcTooltip>
        </div>
        
        <div>
          <h4>插槽内容</h4>
          <YcTooltip>
            <template #content>
              <div class="custom-tooltip">
                <div class="tooltip-title">自定义提示</div>
                <div class="tooltip-content">
                  <p>这是第一行内容</p>
                  <p>这是第二行内容</p>
                </div>
              </div>
            </template>
            <YcButton>插槽提示</YcButton>
          </YcTooltip>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>提示样式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认样式</h4>
          <YcTooltip content="默认样式的提示">
            <YcButton>默认样式</YcButton>
          </YcTooltip>
        </div>
        
        <div>
          <h4>自定义背景色</h4>
          <YcTooltip 
            content="自定义背景色的提示"
            background-color="#52c41a"
          >
            <YcButton>绿色背景</YcButton>
          </YcTooltip>
        </div>
        
        <div>
          <h4>自定义内联样式</h4>
          <YcTooltip 
            content="自定义内联样式的提示"
            :content-style="{ 
              backgroundColor: '#ff4d4f', 
              color: 'white',
              padding: '12px',
              borderRadius: '8px'
            }"
          >
            <YcButton>自定义内联样式</YcButton>
          </YcTooltip>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>迷你提示</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>普通提示</h4>
          <YcTooltip content="这是一个普通的提示信息">
            <YcButton>普通提示</YcButton>
          </YcTooltip>
        </div>
        
        <div>
          <h4>迷你提示</h4>
          <YcTooltip content="这是一个迷你提示" :mini="true">
            <YcButton>迷你提示</YcButton>
          </YcTooltip>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>触发方式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>悬停触发（默认）</h4>
          <YcTooltip content="悬停触发的提示">
            <YcButton>悬停触发</YcButton>
          </YcTooltip>
        </div>
        
        <div>
          <h4>点击触发</h4>
          <YcTooltip 
            content="点击触发的提示"
            :trigger-props="{ trigger: 'click' }"
          >
            <YcButton>点击触发</YcButton>
          </YcTooltip>
        </div>
        
        <div>
          <h4>手动控制</h4>
          <YcTooltip 
            content="手动控制的提示"
            v-model:popup-visible="tooltipVisible"
          >
            <YcButton @click="toggleTooltip">
              {{ tooltipVisible ? '隐藏提示' : '显示提示' }}
            </YcButton>
          </YcTooltip>
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tooltipVisible = ref(false);

const toggleTooltip = () => {
  tooltipVisible.value = !tooltipVisible.value;
};
</script>

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

.custom-tooltip {
  padding: 8px;
}

.tooltip-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.tooltip-content {
  color: #666;
}

.tooltip-content p {
  margin: 4px 0;
}
</style>
```

## API

### Tooltip Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| popupVisible | 是否显示弹出层 | `boolean` | - |
| defaultPopupVisible | 默认是否显示弹出层 | `boolean` | `false` |
| content | 提示内容 | `string` | - |
| position | 提示位置 | `TriggerPostion` | `'top'` |
| mini | 是否迷你提示 | `boolean` | `false` |
| backgroundColor | 背景色 | `string` | - |
| contentClass | 内容样式类 | `ClassName` | - |
| contentStyle | 内容内联样式 | `CSSProperties` | - |
| arrowClass | 箭头样式类 | `ClassName` | - |
| arrowStyle | 箭头内联样式 | `CSSProperties` | - |
| popupContainer | 弹出层容器 | `PopupContainer` | - |
| triggerProps | 触发器属性 | `TriggerProps` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:popupVisible | 弹出层显示状态变化时触发 | `(value: boolean)` |
| popup-visible-change | 弹出层显示状态变化时触发 | `(value: boolean)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 触发元素 | - |
| content | 提示内容 | - |

### Expose

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| hide | 隐藏提示 | - |
| show | 显示提示 | - |

## 注意事项

1. 提示内容支持文本和HTML格式
2. 可以通过插槽自定义复杂的提示内容
3. 支持多种触发方式和位置
4. 可以通过样式属性完全自定义外观

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-tooltip {
  /* 提示容器 */
}

.yc-tooltip-content {
  /* 提示内容 */
}

.yc-tooltip-arrow {
  /* 提示箭头 */
}

.yc-tooltip-mini {
  /* 迷你提示 */
}

.yc-tooltip-trigger {
  /* 触发元素 */
}
```
