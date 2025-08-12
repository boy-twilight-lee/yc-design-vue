# Calendar 日历

日历组件，支持月视图和年视图。

## 何时使用

- 需要展示日期信息
- 需要选择日期
- 需要展示日历视图，如日程安排、事件日历等

## 基础用法

最简单的用法，显示当前月份的日历。

```vue
<template>
  <YcCalendar />
</template>
```

## 受控用法

通过 `v-model` 控制选中的日期。

```vue
<template>
  <YcCalendar v-model="selectedDate" />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref(new Date('2024-01-15'));
</script>
```

## 默认值

通过 `defaultValue` 属性设置默认选中的日期。

```vue
<template>
  <YcCalendar :default-value="new Date('2024-01-15')" />
</template>
```

## 月视图

默认显示月视图，可以通过 `mode` 属性控制。

```vue
<template>
  <YcCalendar mode="month" />
</template>
```

## 年视图

通过 `mode` 属性切换到年视图。

```vue
<template>
  <YcCalendar mode="year" />
</template>
```

## 模式切换

通过 `modes` 属性控制可切换的模式，默认支持月视图和年视图。

```vue
<template>
  <YcCalendar :modes="['month']" />
</template>
```

## 自定义头部

通过 `header` 插槽自定义日历头部显示。

```vue
<template>
  <YcCalendar>
    <template #header="{ year, month }">
      <div style="font-size: 18px; font-weight: bold;">
        {{ year }}年{{ month }}月
      </div>
    </template>
  </YcCalendar>
</template>
```

## 自定义日期单元格

通过 `default` 插槽自定义日期单元格的显示内容。

```vue
<template>
  <YcCalendar>
    <template #default="{ year, month, day }">
      <div class="custom-cell">
        <span>{{ day }}</span>
        <div v-if="hasEvent(day)" class="event-dot"></div>
      </div>
    </template>
  </YcCalendar>
</template>

<script setup>
import { ref } from 'vue';

const hasEvent = (day) => {
  // 判断某天是否有事件
  return day % 3 === 0;
};
</script>

<style scoped>
.custom-cell {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.event-dot {
  width: 6px;
  height: 6px;
  background: #1890ff;
  border-radius: 50%;
  margin-top: 2px;
}
</style>
```

## 事件处理

监听日期变化和模式变化事件。

```vue
<template>
  <YcCalendar
    v-model="selectedDate"
    :mode="calendarMode"
    @change="onDateChange"
    @panel-change="onPanelChange"
    @update:mode="onModeChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref(new Date());
const calendarMode = ref('month');

const onDateChange = (date) => {
  console.log('日期变化:', date);
};

const onPanelChange = (date) => {
  console.log('面板变化:', date);
};

const onModeChange = (mode) => {
  console.log('模式变化:', mode);
};
</script>
```

## 禁用特定日期

通过插槽内容控制特定日期的显示状态。

```vue
<template>
  <YcCalendar>
    <template #default="{ year, month, day }">
      <div :class="{ 'disabled-date': isDisabled(year, month, day) }">
        {{ day }}
      </div>
    </template>
  </YcCalendar>
</template>

<script setup>
const isDisabled = (year, month, day) => {
  const date = new Date(year, month - 1, day);
  const today = new Date();
  return date < today;
};
</script>

<style scoped>
.disabled-date {
  color: #ccc;
  cursor: not-allowed;
}
</style>
```

## 多选日期

通过插槽实现多选日期的功能。

```vue
<template>
  <YcCalendar>
    <template #default="{ year, month, day }">
      <div 
        :class="{ 'selected-date': isSelected(year, month, day) }"
        @click="toggleDate(year, month, day)"
      >
        {{ day }}
      </div>
    </template>
  </YcCalendar>
  <div style="margin-top: 16px;">
    已选择: {{ selectedDates.join(', ') }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDates = ref([]);

const isSelected = (year, month, day) => {
  const dateStr = `${year}-${month}-${day}`;
  return selectedDates.value.includes(dateStr);
};

const toggleDate = (year, month, day) => {
  const dateStr = `${year}-${month}-${day}`;
  const index = selectedDates.value.indexOf(dateStr);
  if (index > -1) {
    selectedDates.value.splice(index, 1);
  } else {
    selectedDates.value.push(dateStr);
  }
};
</script>

<style scoped>
.selected-date {
  background: #1890ff;
  color: white;
  border-radius: 4px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 当前选中的日期 | `Date` | - |
| defaultValue | 默认选中的日期 | `Date` | `new Date()` |
| mode | 日历模式 | `CalendarMode` | - |
| defaultMode | 默认模式 | `CalendarMode` | `'month'` |
| modes | 可切换的模式列表 | `CalendarMode[]` | `['month', 'year']` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 日期变化时触发 | `(value: Date)` |
| update:mode | 模式变化时触发 | `(mode: CalendarMode)` |
| change | 日期变化时触发 | `(value: Date)` |
| panel-change | 面板变化时触发 | `(value: Date)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| header | 自定义头部内容 | `{ year: number, month: number }` |
| default | 自定义日期单元格内容 | `{ year: number, month: number, day: number }` |

### Types

```typescript
interface CalendarProps {
  modelValue?: Date;
  defaultValue?: Date;
  mode?: CalendarMode;
  defaultMode?: CalendarMode;
  modes?: CalendarMode[];
}

interface CalendarEmits {
  (e: 'update:modelValue', value: Date): void;
  (e: 'update:mode', mode: CalendarMode): void;
  (e: 'change', value: Date): void;
  (e: 'panel-change', value: Date): void;
}

interface CalendarSlots {
  header(scope: { year: number; month: number }): void;
  default(scope: { year: number; month: number; day: number }): void;
}

type CalendarMode = 'month' | 'year';
```

## 注意事项

1. 组件使用 dayjs 库处理日期，确保项目中已安装
2. 日期单元格的点击事件通过插槽内容处理
3. 月视图和年视图的切换会影响日期选择的行为
4. 自定义头部和单元格内容时，注意保持布局的一致性
5. 组件会自动处理月份和年份的边界情况

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-calendar {
  /* 日历容器 */
}

.yc-calendar-header {
  /* 日历头部 */
}

.yc-calendar-body {
  /* 日历主体 */
}

.yc-calendar-mode-month {
  /* 月视图模式 */
}

.yc-calendar-mode-year {
  /* 年视图模式 */
}
```
