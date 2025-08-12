# Slider 滑块

滑块组件。

## 何时使用

- 当用户需要在数值范围内进行选择时
- 当需要设置连续或离散的数值时
- 当需要范围选择时

## 基础用法

最简单的滑块用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSlider v-model="value" />
    <div>当前值: {{ value }}</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
</script>
```

## 范围设置

通过 `min` 和 `max` 属性设置滑块的范围。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认范围 (0-100)</h4>
      <YcSlider v-model="value1" />
      <div>值: {{ value1 }}</div>
    </div>
    
    <div>
      <h4>自定义范围 (0-200)</h4>
      <YcSlider v-model="value2" :min="0" :max="200" />
      <div>值: {{ value2 }}</div>
    </div>
    
    <div>
      <h4>负值范围 (-100-100)</h4>
      <YcSlider v-model="value3" :min="-100" :max="100" />
      <div>值: {{ value3 }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(100);
const value3 = ref(0);
</script>
```

## 步长设置

通过 `step` 属性设置滑块的步长。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认步长 (1)</h4>
      <YcSlider v-model="value1" />
      <div>值: {{ value1 }}</div>
    </div>
    
    <div>
      <h4>步长为 5</h4>
      <YcSlider v-model="value2" :step="5" />
      <div>值: {{ value2 }}</div>
    </div>
    
    <div>
      <h4>步长为 10</h4>
      <YcSlider v-model="value3" :step="10" />
      <div>值: {{ value3 }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(50);
const value3 = ref(50);
</script>
```

## 范围选择

通过 `range` 属性启用范围选择。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>单选滑块</h4>
      <YcSlider v-model="singleValue" />
      <div>值: {{ singleValue }}</div>
    </div>
    
    <div>
      <h4>范围选择滑块</h4>
      <YcSlider v-model="rangeValue" range />
      <div>范围: {{ rangeValue[0] }} - {{ rangeValue[1] }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const singleValue = ref(50);
const rangeValue = ref([20, 80]);
</script>
```

## 标记显示

通过 `marks` 属性显示标记。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无标记</h4>
      <YcSlider v-model="value1" />
    </div>
    
    <div>
      <h4>有标记</h4>
      <YcSlider v-model="value2" :marks="marks" />
    </div>
    
    <div>
      <h4>自定义标记</h4>
      <YcSlider v-model="value3" :marks="customMarks" />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(50);
const value3 = ref(50);

const marks = {
  0: '0°C',
  25: '25°C',
  50: '50°C',
  75: '75°C',
  100: '100°C'
};

const customMarks = {
  0: '很差',
  25: '一般',
  50: '良好',
  75: '优秀',
  100: '完美'
};
</script>
```

## 方向设置

通过 `direction` 属性设置滑块方向。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>水平方向</h4>
      <YcSlider v-model="value1" direction="horizontal" />
      <div>值: {{ value1 }}</div>
    </div>
    
    <div>
      <h4>垂直方向</h4>
      <div style="height: 200px; display: flex; align-items: center;">
        <YcSlider v-model="value2" direction="vertical" />
      </div>
      <div>值: {{ value2 }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(50);
</script>
```

## 输入框显示

通过 `showInput` 属性显示输入框。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无输入框</h4>
      <YcSlider v-model="value1" />
      <div>值: {{ value1 }}</div>
    </div>
    
    <div>
      <h4>有输入框</h4>
      <YcSlider v-model="value2" :show-input="true" />
      <div>值: {{ value2 }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(50);
</script>
```

## 提示显示

通过 `showTooltip` 属性控制提示显示。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无提示</h4>
      <YcSlider v-model="value1" :show-tooltip="false" />
      <div>值: {{ value1 }}</div>
    </div>
    
    <div>
      <h4>有提示</h4>
      <YcSlider v-model="value2" :show-tooltip="true" />
      <div>值: {{ value2 }}</div>
    </div>
    
    <div>
      <h4>自定义提示格式</h4>
      <YcSlider 
        v-model="value3" 
        :show-tooltip="true"
        :format-tooltip="customFormat"
      />
      <div>值: {{ value3 }}%</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(50);
const value3 = ref(50);

const customFormat = (value) => `${value}%`;
</script>
```

## 刻度显示

通过 `showTicks` 属性显示刻度。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无刻度</h4>
      <YcSlider v-model="value1" />
    </div>
    
    <div>
      <h4>有刻度</h4>
      <YcSlider v-model="value2" :show-ticks="true" />
    </div>
    
    <div>
      <h4>刻度和标记</h4>
      <YcSlider 
        v-model="value3" 
        :show-ticks="true"
        :marks="marks"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(50);
const value2 = ref(50);
const value3 = ref(50);

const marks = {
  0: '0',
  25: '25',
  50: '50',
  75: '75',
  100: '100'
};
</script>
```

## 禁用状态

通过 `disabled` 属性禁用滑块。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常状态</h4>
      <YcSlider v-model="value" />
      <div>值: {{ value }}</div>
    </div>
    
    <div>
      <h4>禁用状态</h4>
      <YcSlider v-model="value" disabled />
      <div>值: {{ value }}（禁用）</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
</script>
```

## 事件处理

监听滑块的变化事件。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSlider 
      v-model="value" 
      @change="onChange"
    />
    
    <div>当前值: {{ value }}</div>
    <div>变化次数: {{ changeCount }}</div>
    
    <YcSpace>
      <YcButton @click="setValue(0)">设为0</YcButton>
      <YcButton @click="setValue(50)">设为50</YcButton>
      <YcButton @click="setValue(100)">设为100</YcButton>
    </YcSpace>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
const changeCount = ref(0);

const onChange = (newValue) => {
  changeCount.value++;
  console.log('滑块值变化:', newValue);
};

const setValue = (val) => {
  value.value = val;
};
</script>
```

## 完整示例

一个完整的滑块使用示例。

```vue
<template>
  <div class="page">
    <h2>Slider 滑块示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSlider v-model="basicValue" />
      <div>当前值: {{ basicValue }}</div>
    </div>
    
    <div class="section">
      <h3>范围设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认范围 (0-100)</h4>
          <YcSlider v-model="rangeValue1" />
          <div>值: {{ rangeValue1 }}</div>
        </div>
        
        <div>
          <h4>自定义范围 (0-200)</h4>
          <YcSlider v-model="rangeValue2" :min="0" :max="200" />
          <div>值: {{ rangeValue2 }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>步长设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>步长为 5</h4>
          <YcSlider v-model="stepValue1" :step="5" />
          <div>值: {{ stepValue1 }}</div>
        </div>
        
        <div>
          <h4>步长为 10</h4>
          <YcSlider v-model="stepValue2" :step="10" />
          <div>值: {{ stepValue2 }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>范围选择</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>单选滑块</h4>
          <YcSlider v-model="singleValue" />
          <div>值: {{ singleValue }}</div>
        </div>
        
        <div>
          <h4>范围选择滑块</h4>
          <YcSlider v-model="rangeSelectValue" range />
          <div>范围: {{ rangeSelectValue[0] }} - {{ rangeSelectValue[1] }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>标记显示</h3>
      <YcSlider v-model="marksValue" :marks="marks" />
      <div>值: {{ marksValue }}</div>
    </div>
    
    <div class="section">
      <h3>方向设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>水平方向</h4>
          <YcSlider v-model="directionValue1" direction="horizontal" />
          <div>值: {{ directionValue1 }}</div>
        </div>
        
        <div>
          <h4>垂直方向</h4>
          <div style="height: 200px; display: flex; align-items: center;">
            <YcSlider v-model="directionValue2" direction="vertical" />
          </div>
          <div>值: {{ directionValue2 }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>输入框显示</h3>
      <YcSlider v-model="inputValue" :show-input="true" />
      <div>值: {{ inputValue }}</div>
    </div>
    
    <div class="section">
      <h3>提示显示</h3>
      <YcSlider 
        v-model="tooltipValue" 
        :show-tooltip="true"
        :format-tooltip="customFormat"
      />
      <div>值: {{ tooltipValue }}%</div>
    </div>
    
    <div class="section">
      <h3>刻度显示</h3>
      <YcSlider 
        v-model="ticksValue" 
        :show-ticks="true"
        :marks="ticksMarks"
      />
      <div>值: {{ ticksValue }}</div>
    </div>
    
    <div class="section">
      <h3>状态控制</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>正常状态</h4>
          <YcSlider v-model="stateValue" />
          <div>值: {{ stateValue }}</div>
        </div>
        
        <div>
          <h4>禁用状态</h4>
          <YcSlider v-model="stateValue" disabled />
          <div>值: {{ stateValue }}（禁用）</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>事件处理</h3>
      <YcSlider 
        v-model="eventValue" 
        @change="onChange"
      />
      
      <div>当前值: {{ eventValue }}</div>
      <div>变化次数: {{ changeCount }}</div>
      
      <YcSpace>
        <YcButton @click="setEventValue(0)">设为0</YcButton>
        <YcButton @click="setEventValue(50)">设为50</YcButton>
        <YcButton @click="setEventValue(100)">设为100</YcButton>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicValue = ref(50);

// 范围设置
const rangeValue1 = ref(50);
const rangeValue2 = ref(100);

// 步长设置
const stepValue1 = ref(50);
const stepValue2 = ref(50);

// 范围选择
const singleValue = ref(50);
const rangeSelectValue = ref([20, 80]);

// 标记显示
const marksValue = ref(50);
const marks = {
  0: '0°C',
  25: '25°C',
  50: '50°C',
  75: '75°C',
  100: '100°C'
};

// 方向设置
const directionValue1 = ref(50);
const directionValue2 = ref(50);

// 输入框显示
const inputValue = ref(50);

// 提示显示
const tooltipValue = ref(50);
const customFormat = (value) => `${value}%`;

// 刻度显示
const ticksValue = ref(50);
const ticksMarks = {
  0: '0',
  25: '25',
  50: '50',
  75: '75',
  100: '100'
};

// 状态控制
const stateValue = ref(50);

// 事件处理
const eventValue = ref(50);
const changeCount = ref(0);

const onChange = (newValue) => {
  changeCount.value++;
  console.log('滑块值变化:', newValue);
};

const setEventValue = (val) => {
  eventValue.value = val;
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
</style>
```

## API

### Slider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `SliderValue` | - |
| defaultValue | 默认值 | `SliderValue` | - |
| step | 步长 | `number` | `1` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| marks | 标记 | `Record<number, string>` | - |
| direction | 方向 | `Direction` | `'horizontal'` |
| disabled | 是否禁用 | `boolean` | `false` |
| showTicks | 是否显示刻度 | `boolean` | `false` |
| showInput | 是否显示输入框 | `boolean` | `false` |
| range | 是否范围选择 | `boolean` | `false` |
| showTooltip | 是否显示提示 | `boolean` | `true` |
| formatTooltip | 提示格式化函数 | `FormatTooltip` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: SliderValue)` |
| change | 值变化时触发 | `(value: SliderValue)` |

### SliderValue

| 类型 | 说明 |
| --- | --- |
| `number` | 单选值 |
| `number[]` | 范围选择值 |

### FormatTooltip

| 类型 | 说明 |
| --- | --- |
| `(value: number) => string` | 提示格式化函数 |

## 注意事项

1. 范围选择模式下，`modelValue` 应该是数组类型
2. 垂直方向需要设置容器高度
3. 标记和刻度可以同时使用
4. 提示格式化函数可以自定义显示内容

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-slider {
  /* 滑块容器 */
}

.yc-slider-rail {
  /* 滑块轨道 */
}

.yc-slider-track {
  /* 滑块轨道填充 */
}

.yc-slider-handle {
  /* 滑块手柄 */
}

.yc-slider-handle:hover {
  /* 滑块手柄悬停状态 */
}

.yc-slider-handle-active {
  /* 滑块手柄激活状态 */
}

.yc-slider-marks {
  /* 标记容器 */
}

.yc-slider-mark {
  /* 标记 */
}

.yc-slider-mark-text {
  /* 标记文字 */
}

.yc-slider-ticks {
  /* 刻度容器 */
}

.yc-slider-tick {
  /* 刻度 */
}
```
