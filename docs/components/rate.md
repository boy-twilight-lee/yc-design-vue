# Rate 评分

评分组件。

## 何时使用

- 对产品或服务进行评分时
- 需要用户给出星级评价时
- 展示评分结果时

## 基础用法

最简单的评分用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcRate v-model="value" />
    <div>当前评分: {{ value }}</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
</script>
```

## 半星评分

通过 `allowHalf` 属性启用半星评分。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>整星评分</h4>
      <YcRate v-model="value1" />
      <div>评分: {{ value1 }}</div>
    </div>
    
    <div>
      <h4>半星评分</h4>
      <YcRate v-model="value2" :allow-half="true" />
      <div>评分: {{ value2 }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3.5);
</script>
```

## 自定义图标

通过 `character` 插槽自定义评分图标。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认星星</h4>
      <YcRate v-model="value1" />
    </div>
    
    <div>
      <h4>自定义图标</h4>
      <YcRate v-model="value2">
        <template #character="{ index }">
          <span class="custom-icon">{{ index < value2 ? '❤️' : '🤍' }}</span>
        </template>
      </YcRate>
    </div>
    
    <div>
      <h4>数字评分</h4>
      <YcRate v-model="value3">
        <template #character="{ index }">
          <span class="number-icon">{{ index + 1 }}</span>
        </template>
      </YcRate>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3);
const value3 = ref(3);
</script>

<style scoped>
.custom-icon {
  font-size: 20px;
}

.number-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 12px;
  color: #666;
}

.yc-rate-item-active .number-icon {
  border-color: #1890ff;
  color: #1890ff;
  background-color: #1890ff;
}
</style>
```

## 自定义颜色

通过 `color` 属性自定义评分颜色。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认颜色</h4>
      <YcRate v-model="value" />
    </div>
    
    <div>
      <h4>单色评分</h4>
      <YcRate v-model="value" color="#52c41a" />
    </div>
    
    <div>
      <h4>分段颜色</h4>
      <YcRate v-model="value" :color="gradientColor" />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);

const gradientColor = {
  1: '#f5222d',
  2: '#fa8c16',
  3: '#faad14',
  4: '#52c41a',
  5: '#1890ff'
};
</script>
```

## 评分数量

通过 `count` 属性设置评分的最大数量。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>5星评分</h4>
      <YcRate v-model="value1" :count="5" />
      <div>评分: {{ value1 }}/5</div>
    </div>
    
    <div>
      <h4>10星评分</h4>
      <YcRate v-model="value2" :count="10" />
      <div>评分: {{ value2 }}/10</div>
    </div>
    
    <div>
      <h4>3星评分</h4>
      <YcRate v-model="value3" :count="3" />
      <div>评分: {{ value3 }}/3</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(7);
const value3 = ref(2);
</script>
```

## 只读模式

通过 `readonly` 属性启用只读模式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>可编辑评分</h4>
      <YcRate v-model="value" />
      <div>评分: {{ value }}</div>
    </div>
    
    <div>
      <h4>只读评分</h4>
      <YcRate v-model="value" :readonly="true" />
      <div>评分: {{ value }}（只读）</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(4);
</script>
```

## 禁用状态

通过 `disabled` 属性禁用评分组件。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常状态</h4>
      <YcRate v-model="value" />
      <div>评分: {{ value }}</div>
    </div>
    
    <div>
      <h4>禁用状态</h4>
      <YcRate v-model="value" :disabled="true" />
      <div>评分: {{ value }}（禁用）</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
</script>
```

## 清除功能

通过 `allowClear` 属性启用清除功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>允许清除</h4>
      <YcRate v-model="value1" :allow-clear="true" />
      <div>评分: {{ value1 || '未评分' }}</div>
    </div>
    
    <div>
      <h4>不允许清除</h4>
      <YcRate v-model="value2" :allow-clear="false" />
      <div>评分: {{ value2 }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(3);
const value2 = ref(3);
</script>
```

## 事件处理

监听评分变化和悬停事件。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcRate 
      v-model="value" 
      @change="onChange"
      @hover-change="onHoverChange"
    />
    
    <div>当前评分: {{ value }}</div>
    <div>悬停评分: {{ hoverValue }}</div>
    
    <YcSpace>
      <YcButton @click="setRating(1)">设为1星</YcButton>
      <YcButton @click="setRating(3)">设为3星</YcButton>
      <YcButton @click="setRating(5)">设为5星</YcButton>
      <YcButton @click="clearRating">清除评分</YcButton>
    </YcSpace>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
const hoverValue = ref(0);

const onChange = (rating) => {
  console.log('评分变化:', rating);
};

const onHoverChange = (rating) => {
  hoverValue.value = rating;
};

const setRating = (rating) => {
  value.value = rating;
};

const clearRating = () => {
  value.value = 0;
};
</script>
```

## 完整示例

一个完整的评分使用示例。

```vue
<template>
  <div class="page">
    <h2>Rate 评分示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace direction="vertical" size="large">
        <YcRate v-model="basicValue" />
        <div>当前评分: {{ basicValue }}</div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>半星评分</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>整星评分</h4>
          <YcRate v-model="halfValue1" />
          <div>评分: {{ halfValue1 }}</div>
        </div>
        
        <div>
          <h4>半星评分</h4>
          <YcRate v-model="halfValue2" :allow-half="true" />
          <div>评分: {{ halfValue2 }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义图标</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认星星</h4>
          <YcRate v-model="iconValue1" />
        </div>
        
        <div>
          <h4>爱心图标</h4>
          <YcRate v-model="iconValue2">
            <template #character="{ index }">
              <span class="custom-icon">{{ index < iconValue2 ? '❤️' : '🤍' }}</span>
            </template>
          </YcRate>
        </div>
        
        <div>
          <h4>数字评分</h4>
          <YcRate v-model="iconValue3">
            <template #character="{ index }">
              <span class="number-icon">{{ index + 1 }}</span>
            </template>
          </YcRate>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义颜色</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认颜色</h4>
          <YcRate v-model="colorValue" />
        </div>
        
        <div>
          <h4>绿色评分</h4>
          <YcRate v-model="colorValue" color="#52c41a" />
        </div>
        
        <div>
          <h4>分段颜色</h4>
          <YcRate v-model="colorValue" :color="gradientColor" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>评分数量</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>5星评分</h4>
          <YcRate v-model="countValue1" :count="5" />
          <div>评分: {{ countValue1 }}/5</div>
        </div>
        
        <div>
          <h4>10星评分</h4>
          <YcRate v-model="countValue2" :count="10" />
          <div>评分: {{ countValue2 }}/10</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>状态控制</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>只读模式</h4>
          <YcRate v-model="stateValue" :readonly="true" />
          <div>评分: {{ stateValue }}（只读）</div>
        </div>
        
        <div>
          <h4>禁用状态</h4>
          <YcRate v-model="stateValue" :disabled="true" />
          <div>评分: {{ stateValue }}（禁用）</div>
        </div>
        
        <div>
          <h4>允许清除</h4>
          <YcRate v-model="stateValue" :allow-clear="true" />
          <div>评分: {{ stateValue || '未评分' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>事件处理</h3>
      <YcSpace direction="vertical" size="large">
        <YcRate 
          v-model="eventValue" 
          @change="onChange"
          @hover-change="onHoverChange"
        />
        
        <div>当前评分: {{ eventValue }}</div>
        <div>悬停评分: {{ hoverValue }}</div>
        
        <YcSpace>
          <YcButton @click="setRating(1)">设为1星</YcButton>
          <YcButton @click="setRating(3)">设为3星</YcButton>
          <YcButton @click="setRating(5)">设为5星</YcButton>
          <YcButton @click="clearRating">清除评分</YcButton>
        </YcSpace>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicValue = ref(3);

// 半星评分
const halfValue1 = ref(3);
const halfValue2 = ref(3.5);

// 自定义图标
const iconValue1 = ref(3);
const iconValue2 = ref(3);
const iconValue3 = ref(3);

// 自定义颜色
const colorValue = ref(3);

// 评分数量
const countValue1 = ref(3);
const countValue2 = ref(7);

// 状态控制
const stateValue = ref(4);

// 事件处理
const eventValue = ref(0);
const hoverValue = ref(0);

// 颜色配置
const gradientColor = {
  1: '#f5222d',
  2: '#fa8c16',
  3: '#faad14',
  4: '#52c41a',
  5: '#1890ff'
};

// 事件处理
const onChange = (rating) => {
  console.log('评分变化:', rating);
};

const onHoverChange = (rating) => {
  hoverValue.value = rating;
};

const setRating = (rating) => {
  eventValue.value = rating;
};

const clearRating = () => {
  eventValue.value = 0;
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

.custom-icon {
  font-size: 20px;
}

.number-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 12px;
  color: #666;
}

.yc-rate-item-active .number-icon {
  border-color: #1890ff;
  color: #1890ff;
  background-color: #1890ff;
}
</style>
```

## API

### Rate Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 评分数量 | `number` | `5` |
| modelValue | 绑定值 | `number` | - |
| defaultValue | 默认值 | `number` | `0` |
| allowHalf | 是否允许半星 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `true` |
| grading | 是否启用分级 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| color | 评分颜色 | `string \| Record<number, string>` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: number)` |
| change | 评分变化时触发 | `(value: number)` |
| hover-change | 悬停评分变化时触发 | `(value: number)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| character | 自定义字符 | `{ index: number }` |

## 注意事项

1. `count` 属性控制评分的最大数量，默认为5
2. 半星评分需要设置 `allowHalf` 为 `true`
3. 可以通过 `character` 插槽自定义评分图标
4. 支持分段颜色设置，通过对象形式配置不同评分的颜色

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-rate {
  /* 评分容器 */
}

.yc-rate-item {
  /* 评分项 */
}

.yc-rate-item-active {
  /* 激活状态的评分项 */
}

.yc-rate-item-half {
  /* 半星状态 */
}

.yc-rate-item-disabled {
  /* 禁用状态 */
}

.yc-rate-character {
  /* 评分字符 */
}
```
