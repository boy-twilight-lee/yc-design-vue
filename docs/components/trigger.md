# Trigger 触发器

触发器组件。

## 何时使用

- 当需要控制弹出层的显示和隐藏时
- 当需要自定义触发逻辑时
- 当需要精确控制弹出层位置时

## 基础用法

最简单的触发器用法。

```vue
<template>
  <YcTrigger>
    <YcButton>悬停查看内容</YcButton>
    <template #content>
      <div class="popup-content">
        这是弹出层的内容
      </div>
    </template>
  </YcTrigger>
</template>

<style scoped>
.popup-content {
  padding: 12px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
```

## 触发方式

通过 `trigger` 属性设置触发方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>悬停触发（默认）</h4>
      <YcTrigger trigger="hover">
        <YcButton>悬停触发</YcButton>
        <template #content>
          <div class="popup-content">悬停触发的内容</div>
        </template>
      </YcTrigger>
    </div>
    
    <div>
      <h4>点击触发</h4>
      <YcTrigger trigger="click">
        <YcButton>点击触发</YcButton>
        <template #content>
          <div class="popup-content">点击触发的内容</div>
        </template>
      </YcTrigger>
    </div>
    
    <div>
      <h4>焦点触发</h4>
      <YcTrigger trigger="focus">
        <YcInput placeholder="焦点触发" />
        <template #content>
          <div class="popup-content">焦点触发的内容</div>
        </template>
      </YcTrigger>
    </div>
  </YcSpace>
</template>

<style scoped>
.popup-content {
  padding: 12px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
```

## 弹出位置

通过 `position` 属性设置弹出位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>顶部位置</h4>
      <YcSpace size="small">
        <YcTrigger position="top">
          <YcButton>顶部</YcButton>
          <template #content>
            <div class="popup-content">顶部位置</div>
          </template>
        </YcTrigger>
        <YcTrigger position="tl">
          <YcButton>左上</YcButton>
          <template #content>
            <div class="popup-content">左上位置</div>
          </template>
        </YcTrigger>
        <YcTrigger position="tr">
          <YcButton>右上</YcButton>
          <template #content>
            <div class="popup-content">右上位置</div>
          </template>
        </YcTrigger>
      </YcSpace>
    </div>
    
    <div>
      <h4>底部位置</h4>
      <YcSpace size="small">
        <YcTrigger position="bottom">
          <YcButton>底部</YcButton>
          <template #content>
            <div class="popup-content">底部位置</div>
          </template>
        </YcTrigger>
        <YcTrigger position="bl">
          <YcButton>左下</YcButton>
          <template #content>
            <div class="popup-content">左下位置</div>
          </template>
        </YcTrigger>
        <YcTrigger position="br">
          <YcButton>右下</YcButton>
          <template #content>
            <div class="popup-content">右下位置</div>
          </template>
        </YcTrigger>
      </YcSpace>
    </div>
  </YcSpace>
</template>

<style scoped>
.popup-content {
  padding: 12px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
```

## 手动控制

通过 `v-model:popupVisible` 手动控制弹出层显示状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcTrigger v-model:popup-visible="popupVisible">
      <YcButton @click="togglePopup">
        {{ popupVisible ? '隐藏' : '显示' }}弹出层
      </YcButton>
      <template #content>
        <div class="popup-content">
          <p>手动控制的弹出层</p>
          <YcButton size="small" @click="popupVisible = false">
            关闭
          </YcButton>
        </div>
      </template>
    </YcTrigger>
    
    <YcSpace>
      <YcButton @click="showPopup">显示</YcButton>
      <YcButton @click="hidePopup">隐藏</YcButton>
    </YcSpace>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const popupVisible = ref(false);

const togglePopup = () => {
  popupVisible.value = !popupVisible.value;
};

const showPopup = () => {
  popupVisible.value = true;
};

const hidePopup = () => {
  popupVisible.value = false;
};
</script>

<style scoped>
.popup-content {
  padding: 12px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
```

## 完整示例

一个完整的触发器组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Trigger 触发器示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcTrigger>
        <YcButton>悬停查看内容</YcButton>
        <template #content>
          <div class="popup-content">
            这是弹出层的内容
          </div>
        </template>
      </YcTrigger>
    </div>
    
    <div class="section">
      <h3>触发方式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>悬停触发（默认）</h4>
          <YcTrigger trigger="hover">
            <YcButton>悬停触发</YcButton>
            <template #content>
              <div class="popup-content">悬停触发的内容</div>
            </template>
          </YcTrigger>
        </div>
        
        <div>
          <h4>点击触发</h4>
          <YcTrigger trigger="click">
            <YcButton>点击触发</YcButton>
            <template #content>
              <div class="popup-content">点击触发的内容</div>
            </template>
          </YcTrigger>
        </div>
        
        <div>
          <h4>焦点触发</h4>
          <YcTrigger trigger="focus">
            <YcInput placeholder="焦点触发" />
            <template #content>
              <div class="popup-content">焦点触发的内容</div>
            </template>
          </YcTrigger>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>弹出位置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>顶部位置</h4>
          <YcSpace size="small">
            <YcTrigger position="top">
              <YcButton>顶部</YcButton>
              <template #content>
                <div class="popup-content">顶部位置</div>
              </template>
            </YcTrigger>
            <YcTrigger position="tl">
              <YcButton>左上</YcButton>
              <template #content>
                <div class="popup-content">左上位置</div>
              </template>
            </YcTrigger>
            <YcTrigger position="tr">
              <YcButton>右上</YcButton>
              <template #content>
                <div class="popup-content">右上位置</div>
              </template>
            </YcTrigger>
          </YcSpace>
        </div>
        
        <div>
          <h4>底部位置</h4>
          <YcSpace size="small">
            <YcTrigger position="bottom">
              <YcButton>底部</YcButton>
              <template #content>
                <div class="popup-content">底部位置</div>
              </template>
            </YcTrigger>
            <YcTrigger position="bl">
              <YcButton>左下</YcButton>
              <template #content>
                <div class="popup-content">左下位置</div>
              </template>
            </YcTrigger>
            <YcTrigger position="br">
              <YcButton>右下</YcButton>
              <template #content>
                <div class="popup-content">右下位置</div>
              </template>
            </YcTrigger>
          </YcSpace>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>手动控制</h3>
      <YcSpace direction="vertical" size="large">
        <YcTrigger v-model:popup-visible="popupVisible">
          <YcButton @click="togglePopup">
            {{ popupVisible ? '隐藏' : '显示' }}弹出层
          </YcButton>
          <template #content>
            <div class="popup-content">
              <p>手动控制的弹出层</p>
              <YcButton size="small" @click="popupVisible = false">
                关闭
              </YcButton>
            </div>
          </template>
        </YcTrigger>
        
        <YcSpace>
          <YcButton @click="showPopup">显示</YcButton>
          <YcButton @click="hidePopup">隐藏</YcButton>
        </YcSpace>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const popupVisible = ref(false);

const togglePopup = () => {
  popupVisible.value = !popupVisible.value;
};

const showPopup = () => {
  popupVisible.value = true;
};

const hidePopup = () => {
  popupVisible.value = false;
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

.popup-content {
  padding: 12px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
```

## API

### Trigger Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| popupVisible | 是否显示弹出层 | `boolean` | - |
| defaultPopupVisible | 默认是否显示弹出层 | `boolean` | `false` |
| trigger | 触发方式 | `TriggerType` | `'hover'` |
| position | 弹出位置 | `TriggerPostion` | `'top'` |
| disabled | 是否禁用 | `boolean` | `false` |
| popupOffset | 弹出层偏移量 | `number` | - |
| showArrow | 是否显示箭头 | `boolean` | - |
| popuphoverStay | 悬停时是否保持显示 | `boolean` | - |
| blurToClose | 失焦时是否关闭 | `boolean` | - |
| clickToClose | 点击时是否关闭 | `boolean` | - |
| clickOutsideToClose | 点击外部时是否关闭 | `boolean` | - |
| unmountOnClose | 关闭时是否卸载 | `boolean` | - |
| contentClass | 内容样式类 | `ClassName` | - |
| contentStyle | 内容内联样式 | `CSSProperties` | - |
| arrowClass | 箭头样式类 | `ClassName` | - |
| arrowStyle | 箭头内联样式 | `CSSProperties` | - |
| animationName | 动画名称 | `string` | - |
| duration | 动画持续时间 | `number` | - |
| mouseEnterDelay | 鼠标进入延迟 | `number` | - |
| mouseLeaveDelay | 鼠标离开延迟 | `number` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:popupVisible | 弹出层显示状态变化时触发 | `(value: boolean)` |
| popup-visible-change | 弹出层显示状态变化时触发 | `(value: boolean)` |
| show | 显示时触发 | - |
| hide | 隐藏时触发 | - |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 触发元素 | - |
| content | 弹出层内容 | - |

### Expose

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| hide | 隐藏弹出层 | - |
| show | 显示弹出层 | - |
| updatePosition | 更新位置 | `(x: number, y: number)` |

### TriggerType

| 类型 | 说明 |
| --- | --- |
| `'hover'` | 悬停触发 |
| `'click'` | 点击触发 |
| `'focus'` | 焦点触发 |
| `'contextMenu'` | 右键菜单触发 |

### TriggerPostion

| 类型 | 说明 |
| --- | --- |
| `'top'` | 顶部 |
| `'tl'` | 左上 |
| `'tr'` | 右上 |
| `'bottom'` | 底部 |
| `'bl'` | 左下 |
| `'br'` | 右下 |
| `'left'` | 左侧 |
| `'right'` | 右侧 |

## 注意事项

1. 触发器组件是其他弹出层组件的基础
2. 支持多种触发方式和位置
3. 可以通过属性精确控制动画效果
4. 支持手动控制显示状态
