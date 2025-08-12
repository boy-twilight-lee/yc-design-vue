# Progress 进度条

展示操作的当前进度。

## 何时使用

- 需要展示操作进度时
- 需要显示文件上传进度时
- 需要展示任务完成度时

## 基础用法

最简单的进度条用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcProgress :percent="30" />
    <YcProgress :percent="50" />
    <YcProgress :percent="80" />
    <YcProgress :percent="100" />
  </YcSpace>
</template>
```

## 进度条类型

通过 `type` 属性设置进度条类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>线形进度条</h4>
      <YcProgress type="line" :percent="60" />
    </div>
    
    <div>
      <h4>圆形进度条</h4>
      <YcProgress type="circle" :percent="60" />
    </div>
  </YcSpace>
</template>
```

## 进度条状态

通过 `status` 属性设置进度条状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常状态</h4>
      <YcProgress :percent="60" status="normal" />
    </div>
    
    <div>
      <h4>成功状态</h4>
      <YcProgress :percent="100" status="success" />
    </div>
    
    <div>
      <h4>警告状态</h4>
      <YcProgress :percent="80" status="warning" />
    </div>
    
    <div>
      <h4>危险状态</h4>
      <YcProgress :percent="40" status="danger" />
    </div>
  </YcSpace>
</template>
```

## 进度条尺寸

通过 `size` 属性设置进度条尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcProgress :percent="60" size="small" />
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcProgress :percent="60" size="medium" />
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcProgress :percent="60" size="large" />
    </div>
  </YcSpace>
</template>
```

## 自定义颜色

通过 `color` 属性自定义进度条颜色。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>单色进度条</h4>
      <YcProgress :percent="60" color="#1890ff" />
    </div>
    
    <div>
      <h4>渐变色进度条</h4>
      <YcProgress 
        :percent="60" 
        :color="gradientColor" 
      />
    </div>
    
    <div>
      <h4>分段颜色进度条</h4>
      <YcProgress 
        :percent="60" 
        :color="segmentColor" 
      />
    </div>
  </YcSpace>
</template>

<script setup>
const gradientColor = {
  '0%': '#108ee9',
  '100%': '#87d068'
};

const segmentColor = {
  '0%': '#108ee9',
  '50%': '#87d068',
  '100%': '#f50'
};
</script>
```

## 自定义轨道颜色

通过 `trackColor` 属性自定义进度条轨道颜色。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认轨道颜色</h4>
      <YcProgress :percent="60" />
    </div>
    
    <div>
      <h4>自定义轨道颜色</h4>
      <YcProgress 
        :percent="60" 
        track-color="#f0f0f0" 
      />
    </div>
    
    <div>
      <h4>深色轨道</h4>
      <YcProgress 
        :percent="60" 
        track-color="#333" 
        color="#fff"
      />
    </div>
  </YcSpace>
</template>
```

## 自定义宽度

通过 `strokeWidth` 和 `width` 属性自定义进度条宽度。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认宽度</h4>
      <YcProgress :percent="60" />
    </div>
    
    <div>
      <h4>细进度条</h4>
      <YcProgress :percent="60" :stroke-width="4" />
    </div>
    
    <div>
      <h4>粗进度条</h4>
      <YcProgress :percent="60" :stroke-width="20" />
    </div>
    
    <div>
      <h4>自定义容器宽度</h4>
      <YcProgress :percent="60" :width="300" />
    </div>
  </YcSpace>
</template>
```

## 隐藏文字

通过 `showText` 属性控制是否显示进度文字。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>显示文字</h4>
      <YcProgress :percent="60" :show-text="true" />
    </div>
    
    <div>
      <h4>隐藏文字</h4>
      <YcProgress :percent="60" :show-text="false" />
    </div>
  </YcSpace>
</template>
```

## 动画效果

通过 `animation` 属性启用动画效果。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无动画</h4>
      <YcProgress :percent="60" :animation="false" />
    </div>
    
    <div>
      <h4>有动画</h4>
      <YcProgress :percent="60" :animation="true" />
    </div>
  </YcSpace>
</template>
```

## 动态进度

动态更新进度值。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcProgress :percent="percent" />
    
    <YcSpace>
      <YcButton @click="startProgress">开始进度</YcButton>
      <YcButton @click="resetProgress">重置进度</YcButton>
      <YcButton @click="completeProgress">完成进度</YcButton>
    </YcSpace>
    
    <div>当前进度: {{ percent }}%</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const percent = ref(0);
let progressInterval = null;

const startProgress = () => {
  if (progressInterval) return;
  
  progressInterval = setInterval(() => {
    if (percent.value < 100) {
      percent.value += Math.random() * 10;
      if (percent.value > 100) {
        percent.value = 100;
      }
    } else {
      clearInterval(progressInterval);
      progressInterval = null;
    }
  }, 200);
};

const resetProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  percent.value = 0;
};

const completeProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  percent.value = 100;
};
</script>
```

## 分段进度条

通过 `steps` 属性创建分段进度条。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>5 段进度条</h4>
      <YcProgress :percent="60" :steps="5" />
    </div>
    
    <div>
      <h4>10 段进度条</h4>
      <YcProgress :percent="60" :steps="10" />
    </div>
    
    <div>
      <h4>20 段进度条</h4>
      <YcProgress :percent="60" :steps="20" />
    </div>
  </YcSpace>
</template>
```

## 圆形进度条尺寸

圆形进度条支持不同的尺寸设置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸圆形</h4>
      <YcProgress 
        type="circle" 
        :percent="60" 
        size="small" 
      />
    </div>
    
    <div>
      <h4>中等尺寸圆形</h4>
      <YcProgress 
        type="circle" 
        :percent="60" 
        size="medium" 
      />
    </div>
    
    <div>
      <h4>大尺寸圆形</h4>
      <YcProgress 
        type="circle" 
        :percent="60" 
        size="large" 
      />
    </div>
    
    <div>
      <h4>自定义宽度圆形</h4>
      <YcProgress 
        type="circle" 
        :percent="60" 
        :width="200" 
        :stroke-width="20" 
      />
    </div>
  </YcSpace>
</template>
```

## 完整示例

一个完整的进度条使用示例。

```vue
<template>
  <div class="page">
    <h2>Progress 进度条示例</h2>
    
    <div class="section">
      <h3>基础进度条</h3>
      <YcSpace direction="vertical" size="large">
        <YcProgress :percent="30" />
        <YcProgress :percent="50" />
        <YcProgress :percent="80" />
        <YcProgress :percent="100" />
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>进度条类型</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>线形进度条</h4>
          <YcProgress type="line" :percent="60" />
        </div>
        
        <div>
          <h4>圆形进度条</h4>
          <YcProgress type="circle" :percent="60" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>进度条状态</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>正常状态</h4>
          <YcProgress :percent="60" status="normal" />
        </div>
        
        <div>
          <h4>成功状态</h4>
          <YcProgress :percent="100" status="success" />
        </div>
        
        <div>
          <h4>警告状态</h4>
          <YcProgress :percent="80" status="warning" />
        </div>
        
        <div>
          <h4>危险状态</h4>
          <YcProgress :percent="40" status="danger" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>进度条尺寸</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcProgress :percent="60" size="small" />
        </div>
        
        <div>
          <h4>中等尺寸</h4>
          <YcProgress :percent="60" size="medium" />
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcProgress :percent="60" size="large" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义颜色</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>单色进度条</h4>
          <YcProgress :percent="60" color="#1890ff" />
        </div>
        
        <div>
          <h4>渐变色进度条</h4>
          <YcProgress 
            :percent="60" 
            :color="gradientColor" 
          />
        </div>
        
        <div>
          <h4>分段颜色进度条</h4>
          <YcProgress 
            :percent="60" 
            :color="segmentColor" 
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义宽度</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>细进度条</h4>
          <YcProgress :percent="60" :stroke-width="4" />
        </div>
        
        <div>
          <h4>粗进度条</h4>
          <YcProgress :percent="60" :stroke-width="20" />
        </div>
        
        <div>
          <h4>自定义容器宽度</h4>
          <YcProgress :percent="60" :width="300" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>分段进度条</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>5 段进度条</h4>
          <YcProgress :percent="60" :steps="5" />
        </div>
        
        <div>
          <h4>10 段进度条</h4>
          <YcProgress :percent="60" :steps="10" />
        </div>
        
        <div>
          <h4>20 段进度条</h4>
          <YcProgress :percent="60" :steps="20" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>动态进度</h3>
      <YcSpace direction="vertical" size="large">
        <YcProgress :percent="dynamicPercent" />
        
        <YcSpace>
          <YcButton @click="startDynamicProgress">开始进度</YcButton>
          <YcButton @click="resetDynamicProgress">重置进度</YcButton>
          <YcButton @click="completeDynamicProgress">完成进度</YcButton>
        </YcSpace>
        
        <div>当前进度: {{ dynamicPercent }}%</div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>圆形进度条</h3>
      <YcSpace wrap>
        <div class="circle-progress-item">
          <h4>小尺寸</h4>
          <YcProgress 
            type="circle" 
            :percent="60" 
            size="small" 
          />
        </div>
        
        <div class="circle-progress-item">
          <h4>中等尺寸</h4>
          <YcProgress 
            type="circle" 
            :percent="60" 
            size="medium" 
          />
        </div>
        
        <div class="circle-progress-item">
          <h4>大尺寸</h4>
          <YcProgress 
            type="circle" 
            :percent="60" 
            size="large" 
          />
        </div>
        
        <div class="circle-progress-item">
          <h4>自定义宽度</h4>
          <YcProgress 
            type="circle" 
            :percent="60" 
            :width="200" 
            :stroke-width="20" 
          />
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dynamicPercent = ref(0);
let dynamicProgressInterval = null;

const gradientColor = {
  '0%': '#108ee9',
  '100%': '#87d068'
};

const segmentColor = {
  '0%': '#108ee9',
  '50%': '#87d068',
  '100%': '#f50'
};

const startDynamicProgress = () => {
  if (dynamicProgressInterval) return;
  
  dynamicProgressInterval = setInterval(() => {
    if (dynamicPercent.value < 100) {
      dynamicPercent.value += Math.random() * 10;
      if (dynamicPercent.value > 100) {
        dynamicPercent.value = 100;
      }
    } else {
      clearInterval(dynamicProgressInterval);
      dynamicProgressInterval = null;
    }
  }, 200);
};

const resetDynamicProgress = () => {
  if (dynamicProgressInterval) {
    clearInterval(dynamicProgressInterval);
    dynamicProgressInterval = null;
  }
  dynamicPercent.value = 0;
};

const completeDynamicProgress = () => {
  if (dynamicProgressInterval) {
    clearInterval(dynamicProgressInterval);
    dynamicProgressInterval = null;
  }
  dynamicPercent.value = 100;
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

.circle-progress-item {
  text-align: center;
  margin: 16px;
}

.circle-progress-item h4 {
  margin-bottom: 16px;
}
</style>
```

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 进度条类型 | `ProgressType` | `'line'` |
| size | 进度条尺寸 | `Size` | `'medium'` |
| percent | 进度百分比 | `number` | `0` |
| steps | 分段进度条段数 | `number` | - |
| animation | 是否启用动画 | `boolean` | `true` |
| strokeWidth | 进度条宽度 | `number` | `6` |
| width | 容器宽度 | `number` | - |
| color | 进度条颜色 | `ProgressColor` | - |
| trackColor | 轨道颜色 | `string` | - |
| showText | 是否显示进度文字 | `boolean` | `true` |
| status | 进度条状态 | `ProgressStatus` | `'normal'` |

### ProgressType

| 类型 | 说明 |
| --- | --- |
| `'line'` | 线形进度条 |
| `'circle'` | 圆形进度条 |

### ProgressColor

| 类型 | 说明 |
| --- | --- |
| `string` | 单色 |
| `Record<string, string>` | 渐变色或分段色 |

### ProgressStatus

| 状态 | 说明 |
| --- | --- |
| `'normal'` | 正常状态 |
| `'success'` | 成功状态 |
| `'warning'` | 警告状态 |
| `'danger'` | 危险状态 |

## 注意事项

1. `percent` 属性接受 0-100 之间的数值
2. 圆形进度条在 `type="circle"` 时生效
3. 分段进度条通过 `steps` 属性设置段数
4. 渐变色通过对象形式设置，键为百分比，值为颜色值

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-progress {
  /* 进度条容器 */
}

.yc-progress-line {
  /* 线形进度条 */
}

.yc-progress-circle {
  /* 圆形进度条 */
}

.yc-progress-bar {
  /* 进度条轨道 */
}

.yc-progress-bar-fill {
  /* 进度条填充 */
}

.yc-progress-text {
  /* 进度文字 */
}
```
