# AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

- 需要一个可以搜索/选择的输入框时
- 当用户需要从一组选项中选择时
- 当需要提供输入建议时

## 基础用法

最简单的用法，通过 `data` 属性提供选项数据。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    placeholder="请输入内容"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry'
];
</script>
```

## 自定义过滤

通过 `filterOption` 属性自定义过滤逻辑。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    :filter-option="filterOption"
    placeholder="自定义过滤"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' }
];

const filterOption = (inputValue, option) => {
  return option.label.toLowerCase().includes(inputValue.toLowerCase());
};
</script>
```

## 严格模式

通过 `strict` 属性启用严格模式，只允许选择预设的选项。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    :strict="true"
    placeholder="严格模式"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = ['Apple', 'Banana', 'Cherry'];
</script>
```

## 禁用状态

通过 `disabled` 属性禁用组件。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    :disabled="true"
    placeholder="禁用状态"
  />
</template>
```

## 允许清空

通过 `allowClear` 属性控制是否允许清空输入。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    :allow-clear="true"
    placeholder="允许清空"
  />
</template>
```

## 文本域模式

通过 `type` 属性设置为文本域模式。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    type="textarea"
    placeholder="文本域模式"
  />
</template>
```

## 自定义选项渲染

通过 `option` 插槽自定义选项的渲染。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    placeholder="自定义选项"
  >
    <template #option="{ data }">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>🍎</span>
        <span>{{ data.label }}</span>
        <span style="color: #999;">({{ data.value }})</span>
      </div>
    </template>
  </YcAutoComplete>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' }
];
</script>
```

## 自定义触发器

通过 `trigger` 插槽自定义触发器。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    placeholder="自定义触发器"
  >
    <template #trigger>
      <YcInput
        v-model="value"
        placeholder="自定义输入框"
        style="width: 300px;"
      />
    </template>
  </YcAutoComplete>
</template>
```

## 自定义底部内容

通过 `footer` 插槽添加底部内容。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    placeholder="带底部内容"
  >
    <template #footer>
      <div style="padding: 8px; text-align: center; border-top: 1px solid #f0f0f0;">
        <YcButton size="small" type="primary">添加新选项</YcButton>
      </div>
    </template>
  </YcAutoComplete>
</template>
```

## 事件监听

监听各种事件。

```vue
<template>
  <YcAutoComplete
    v-model="value"
    :data="options"
    placeholder="监听事件"
    @search="onSearch"
    @select="onSelect"
    @change="onChange"
    @clear="onClear"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = ['Apple', 'Banana', 'Cherry'];

const onSearch = (searchValue) => {
  console.log('搜索:', searchValue);
};

const onSelect = (selectedValue) => {
  console.log('选择:', selectedValue);
};

const onChange = (changedValue) => {
  console.log('变化:', changedValue);
};

const onClear = () => {
  console.log('清空');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `string` | - |
| defaultValue | 默认值 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| data | 选项数据 | `SelectOptions` | `() => []` |
| popupContainer | 弹出层容器 | `PopupContainer` | - |
| strict | 是否严格模式 | `boolean` | `false` |
| filterOption | 自定义过滤函数 | `(inputValue: string, option: SelectOptionData) => boolean` | - |
| triggerProps | 触发器属性 | `TriggerProps` | `() => ({})` |
| allowClear | 是否允许清空 | `boolean` | `true` |
| vistualListProps | 虚拟列表属性 | `VirtualListProps` | - |
| isSelectSetValue | 选择时是否设置值 | `boolean` | `true` |
| isSearch | 是否启用搜索 | `boolean` | `true` |
| type | 输入框类型 | `'textarea' \| 'input'` | `'input'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 值更新时触发 | `(value: string)` |
| change | 值改变时触发 | `(value: string)` |
| search | 搜索时触发 | `(value: string)` |
| select | 选择选项时触发 | `(value: string)` |
| clear | 清空时触发 | `(ev?: Event)` |
| dropdown-scroll | 下拉框滚动时触发 | `(ev?: Event)` |
| dropdown-reach-bottom | 下拉框触底时触发 | `(ev?: Event)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| input | 输入时触发 | `(value: string, ev: Event)` |
| keydown | 按键按下时触发 | `(ev: KeyboardEvent)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| option | 自定义选项渲染 | `{ data: ObjectData }` |
| footer | 底部内容 | - |
| trigger | 自定义触发器 | - |

### Expose

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 聚焦 | - |
| blur | 失焦 | - |
| getInputRef | 获取输入框引用 | - |
| getMirrorRef | 获取镜像引用 | - |
| updatePosition | 更新位置 | `(x: number, y: number)` |

### Types

```typescript
interface AutoCompleteProps {
  modelValue?: string;
  defaultValue?: string;
  disabled?: boolean;
  data?: SelectOptions;
  popupContainer?: PopupContainer;
  strict?: boolean;
  filterOption?: (inputValue: string, option: SelectOptionData) => boolean;
  triggerProps?: TriggerProps;
  allowClear?: boolean;
  vistualListProps?: VirtualListProps;
  isSelectSetValue?: boolean;
  isSearch?: boolean;
  type?: 'textarea' | 'input';
}

interface AutoCompleteEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'search', value: string): void;
  (e: 'select', value: string): void;
  (e: 'clear', ev?: Event): void;
  (e: 'dropdown-scroll', ev?: Event): void;
  (e: 'dropdown-reach-bottom', ev?: Event): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'input', value: string, ev: Event): void;
  (e: 'keydown', ev: KeyboardEvent): void;
}

interface AutoCompleteSlots {
  option(scope: { data: ObjectData }): void;
  footer(): void;
  trigger(): void;
}

interface AutoCompleteExpose {
  focus(): void;
  blur(): void;
  getInputRef(): HTMLInputElement | HTMLTextAreaElement | undefined;
  getMirrorRef(): HTMLDivElement | undefined;
  updatePosition(x: number, y: number): void;
}
```

## 注意事项

1. 组件基于 Select 组件实现，继承了大部分 Select 的功能
2. 支持输入框和文本域两种模式
3. 可以通过插槽完全自定义选项渲染、触发器和底部内容
4. 支持虚拟滚动，适合大量数据的场景
5. 严格模式下只允许选择预设选项，不允许自由输入
