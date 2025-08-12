# TimePicker 时间选择器

时间选择器组件。

## 何时使用

- 当用户需要选择一个时间点时
- 当用户需要选择一个时间范围时
- 当需要精确控制时间选择时

## 基础用法

最简单的时间选择器用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcTimePicker v-model="time" placeholder="请选择时间" />
    <div>选择的时间: {{ time }}</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const time = ref('');
</script>
```

## 时间范围选择

通过 `type="time-range"` 启用时间范围选择。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>单个时间</h4>
      <YcTimePicker v-model="singleTime" placeholder="请选择时间" />
      <div>选择的时间: {{ singleTime }}</div>
    </div>
    
    <div>
      <h4>时间范围</h4>
      <YcTimePicker 
        v-model="rangeTime" 
        type="time-range"
        placeholder="['开始时间', '结束时间']"
      />
      <div>开始时间: {{ rangeTime?.[0] }}</div>
      <div>结束时间: {{ rangeTime?.[1] }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const singleTime = ref('');
const rangeTime = ref([]);
</script>
```

## 时间格式

通过 `format` 属性设置时间格式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认格式 (HH:mm:ss)</h4>
      <YcTimePicker v-model="time1" placeholder="默认格式" />
    </div>
    
    <div>
      <h4>小时分钟格式 (HH:mm)</h4>
      <YcTimePicker v-model="time2" format="HH:mm" placeholder="小时分钟格式" />
    </div>
    
    <div>
      <h4>12小时制格式 (hh:mm:ss A)</h4>
      <YcTimePicker v-model="time3" format="hh:mm:ss A" placeholder="12小时制格式" />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('');
const time2 = ref('');
const time3 = ref('');
</script>
```

## 时间步长

通过 `step` 属性设置时间步长。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认步长</h4>
      <YcTimePicker v-model="time1" placeholder="默认步长" />
    </div>
    
    <div>
      <h4>30分钟步长</h4>
      <YcTimePicker 
        v-model="time2" 
        :step="{ minute: 30 }"
        placeholder="30分钟步长"
      />
    </div>
    
    <div>
      <h4>自定义步长</h4>
      <YcTimePicker 
        v-model="time3" 
        :step="{ hour: 2, minute: 15, second: 30 }"
        placeholder="自定义步长"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('');
const time2 = ref('');
const time3 = ref('');
</script>
```

## 禁用时间

通过 `disabledHours`、`disabledMinutes`、`disabledSeconds` 属性禁用特定时间。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>禁用特定小时</h4>
      <YcTimePicker 
        v-model="time1" 
        :disabled-hours="() => [0, 1, 2, 3, 4, 5, 6, 22, 23]"
        placeholder="禁用凌晨和深夜时间"
      />
    </div>
    
    <div>
      <h4>禁用特定分钟</h4>
      <YcTimePicker 
        v-model="time2" 
        :disabled-minutes="() => [0, 15, 30, 45]"
        placeholder="禁用整点和刻钟"
      />
    </div>
    
    <div>
      <h4>禁用特定秒数</h4>
      <YcTimePicker 
        v-model="time3" 
        :disabled-seconds="() => [0, 30]"
        placeholder="禁用整秒和半秒"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('');
const time2 = ref('');
const time3 = ref('');
</script>
```

## 尺寸设置

通过 `size` 属性设置时间选择器尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcTimePicker v-model="time1" size="small" placeholder="小尺寸" />
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcTimePicker v-model="time2" size="medium" placeholder="中等尺寸" />
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcTimePicker v-model="time3" size="large" placeholder="大尺寸" />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('');
const time2 = ref('');
const time3 = ref('');
</script>
```

## 清除功能

通过 `allowClear` 属性启用清除功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>不可清除</h4>
      <YcTimePicker v-model="time1" placeholder="不可清除" />
    </div>
    
    <div>
      <h4>可清除</h4>
      <YcTimePicker 
        v-model="time2" 
        :allow-clear="true"
        placeholder="可清除"
        @clear="onClear"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('');
const time2 = ref('');

const onClear = () => {
  console.log('时间已清除');
};
</script>
```

## 完整示例

一个完整的时间选择器组件使用示例。

```vue
<template>
  <div class="page">
    <h2>TimePicker 时间选择器示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcTimePicker v-model="basicTime" placeholder="请选择时间" />
      <div style="margin-top: 16px;">选择的时间: {{ basicTime }}</div>
    </div>
    
    <div class="section">
      <h3>时间范围选择</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>单个时间</h4>
          <YcTimePicker v-model="singleTime" placeholder="请选择时间" />
          <div>选择的时间: {{ singleTime }}</div>
        </div>
        
        <div>
          <h4>时间范围</h4>
          <YcTimePicker 
            v-model="rangeTime" 
            type="time-range"
            placeholder="['开始时间', '结束时间']"
          />
          <div>开始时间: {{ rangeTime?.[0] }}</div>
          <div>结束时间: {{ rangeTime?.[1] }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>时间格式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认格式 (HH:mm:ss)</h4>
          <YcTimePicker v-model="formatTime1" placeholder="默认格式" />
        </div>
        
        <div>
          <h4>小时分钟格式 (HH:mm)</h4>
          <YcTimePicker v-model="formatTime2" format="HH:mm" placeholder="小时分钟格式" />
        </div>
        
        <div>
          <h4>12小时制格式 (hh:mm:ss A)</h4>
          <YcTimePicker v-model="formatTime3" format="hh:mm:ss A" placeholder="12小时制格式" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>时间步长</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认步长</h4>
          <YcTimePicker v-model="stepTime1" placeholder="默认步长" />
        </div>
        
        <div>
          <h4>30分钟步长</h4>
          <YcTimePicker 
            v-model="stepTime2" 
            :step="{ minute: 30 }"
            placeholder="30分钟步长"
          />
        </div>
        
        <div>
          <h4>自定义步长</h4>
          <YcTimePicker 
            v-model="stepTime3" 
            :step="{ hour: 2, minute: 15, second: 30 }"
            placeholder="自定义步长"
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>禁用时间</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>禁用特定小时</h4>
          <YcTimePicker 
            v-model="disabledTime1" 
            :disabled-hours="() => [0, 1, 2, 3, 4, 5, 6, 22, 23]"
            placeholder="禁用凌晨和深夜时间"
          />
        </div>
        
        <div>
          <h4>禁用特定分钟</h4>
          <YcTimePicker 
            v-model="disabledTime2" 
            :disabled-minutes="() => [0, 15, 30, 45]"
            placeholder="禁用整点和刻钟"
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>尺寸设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcTimePicker v-model="sizeTime1" size="small" placeholder="小尺寸" />
        </div>
        
        <div>
          <h4>中等尺寸</h4>
          <YcTimePicker v-model="sizeTime2" size="medium" placeholder="中等尺寸" />
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcTimePicker v-model="sizeTime3" size="large" placeholder="大尺寸" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>清除功能</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>不可清除</h4>
          <YcTimePicker v-model="clearTime1" placeholder="不可清除" />
        </div>
        
        <div>
          <h4>可清除</h4>
          <YcTimePicker 
            v-model="clearTime2" 
            :allow-clear="true"
            placeholder="可清除"
            @clear="onClear"
          />
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicTime = ref('');

// 时间范围选择
const singleTime = ref('');
const rangeTime = ref([]);

// 时间格式
const formatTime1 = ref('');
const formatTime2 = ref('');
const formatTime3 = ref('');

// 时间步长
const stepTime1 = ref('');
const stepTime2 = ref('');
const stepTime3 = ref('');

// 禁用时间
const disabledTime1 = ref('');
const disabledTime2 = ref('');

// 尺寸设置
const sizeTime1 = ref('');
const sizeTime2 = ref('');
const sizeTime3 = ref('');

// 清除功能
const clearTime1 = ref('');
const clearTime2 = ref('');

// 方法
const onClear = () => {
  console.log('时间已清除');
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

### TimePicker Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 时间选择器类型 | `TimePickerType` | `'time'` |
| modelValue | 绑定值 | `TimePickerValue` | - |
| defaultValue | 默认值 | `TimePickerValue` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| error | 是否错误状态 | `boolean` | `false` |
| format | 时间格式 | `string` | `'HH:mm:ss'` |
| placeholder | 占位符 | `string \| string[]` | - |
| size | 尺寸 | `Size` | `'medium'` |
| step | 时间步长 | `{ hour?: number; minute?: number; second?: number }` | - |
| disabledHours | 禁用的小时 | `DisabledHours` | - |
| disabledMinutes | 禁用的分钟 | `DisabledMinutes` | - |
| disabledSeconds | 禁用的秒数 | `DisabledSeconds` | - |
| hideDisabledOptions | 是否隐藏禁用的选项 | `boolean` | `false` |
| disableConfirm | 是否禁用确认 | `boolean` | `false` |
| position | 弹出位置 | `TimePickerPosition` | - |
| popupVisible | 是否显示弹出层 | `boolean` | - |
| defaultPopupVisible | 默认是否显示弹出层 | `boolean` | `false` |
| unmountOnClose | 关闭时是否卸载 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: TimePickerValue)` |
| update:popupVisible | 弹出层显示状态变化时触发 | `(value: boolean)` |
| change | 时间变化时触发 | `(timeString, time)` |
| select | 选择时间时触发 | `(timeString, time)` |
| clear | 清除时触发 | - |
| popup-visible-change | 弹出层显示状态变化时触发 | `(value: boolean)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| prefix | 前缀图标 | - |
| suffix-icon | 后缀图标 | - |
| extra | 额外内容 | - |

### TimePickerType

| 类型 | 说明 |
| --- | --- |
| `'time'` | 单个时间选择 |
| `'time-range'` | 时间范围选择 |

### TimePickerPosition

| 类型 | 说明 |
| --- | --- |
| `'top'` | 顶部 |
| `'tl'` | 左上 |
| `'tr'` | 右上 |
| `'bottom'` | 底部 |
| `'bl'` | 左下 |
| `'br'` | 右下 |

### DisabledHours

| 类型 | 说明 |
| --- | --- |
| `() => number[]` | 返回禁用的小时数组 |

### DisabledMinutes

| 类型 | 说明 |
| --- | --- |
| `(selectedHour?: number) => number[]` | 根据选中的小时返回禁用的分钟数组 |

### DisabledSeconds

| 类型 | 说明 |
| --- | --- |
| `(selectedHour?: number, selectedMinute?: number) => number[]` | 根据选中的小时和分钟返回禁用的秒数数组 |

## 注意事项

1. 时间范围选择时，`placeholder` 应该是一个数组
2. 时间格式支持多种格式，如 `HH:mm:ss`、`hh:mm:ss A` 等
3. 禁用时间功能可以精确控制可选时间范围
4. 时间步长可以分别设置小时、分钟、秒的步长

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-time-picker {
  /* 时间选择器容器 */
}

.yc-time-picker-disabled {
  /* 禁用状态 */
}

.yc-time-picker-error {
  /* 错误状态 */
}

.yc-time-picker-readonly {
  /* 只读状态 */
}

.yc-time-picker-panel {
  /* 时间选择面板 */
}

.yc-time-picker-cell {
  /* 时间单元格 */
}

.yc-time-picker-cell-disabled {
  /* 禁用的时间单元格 */
}
```
