# Transfer 穿梭框

穿梭框组件。

## 何时使用

- 当需要在两个集合间移动数据时
- 当需要批量操作数据时
- 当需要数据分类管理时

## 基础用法

最简单的穿梭框用法。

```vue
<template>
  <YcTransfer 
    v-model="targetKeys"
    :data="transferData"
    :titles="['源数据', '目标数据']"
  />
  
  <div style="margin-top: 16px;">
    已选择的数据: {{ targetKeys }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const targetKeys = ref(['1', '3']);

const transferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);
</script>
```

## 搜索功能

通过 `showSearch` 属性启用搜索功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无搜索功能</h4>
      <YcTransfer 
        v-model="targetKeys1"
        :data="transferData"
        :titles="['源数据', '目标数据']"
      />
    </div>
    
    <div>
      <h4>有搜索功能</h4>
      <YcTransfer 
        v-model="targetKeys2"
        :data="transferData"
        :titles="['源数据', '目标数据']"
        :show-search="true"
        @search="onSearch"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const targetKeys1 = ref(['1']);
const targetKeys2 = ref(['1']);

const transferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);

const onSearch = (value, type) => {
  console.log('搜索:', value, '类型:', type);
};
</script>
```

## 全选功能

通过 `showSelectAll` 属性启用全选功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无全选功能</h4>
      <YcTransfer 
        v-model="targetKeys1"
        :data="transferData"
        :titles="['源数据', '目标数据']"
      />
    </div>
    
    <div>
      <h4>有全选功能</h4>
      <YcTransfer 
        v-model="targetKeys2"
        :data="transferData"
        :titles="['源数据', '目标数据']"
        :show-select-all="true"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const targetKeys1 = ref(['1']);
const targetKeys2 = ref(['1']);

const transferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);
</script>
```

## 自定义标题

通过 `titles` 属性或插槽自定义标题。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>通过属性设置标题</h4>
      <YcTransfer 
        v-model="targetKeys1"
        :data="transferData"
        :titles="['待选择数据', '已选择数据']"
      />
    </div>
    
    <div>
      <h4>通过插槽自定义标题</h4>
      <YcTransfer 
        v-model="targetKeys2"
        :data="transferData"
      >
        <template #source-title="{ countTotal, countSelected, onClear }">
          <div class="custom-title">
            <span>源数据 ({{ countSelected }}/{{ countTotal }})</span>
            <YcButton size="small" @click="onClear">清空</YcButton>
          </div>
        </template>
        
        <template #target-title="{ countTotal, countSelected, onClear }">
          <div class="custom-title">
            <span>目标数据 ({{ countSelected }}/{{ countTotal }})</span>
            <YcButton size="small" @click="onClear">清空</YcButton>
          </div>
        </template>
      </YcTransfer>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const targetKeys1 = ref(['1']);
const targetKeys2 = ref(['1']);

const transferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);
</script>

<style scoped>
.custom-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
```

## 完整示例

一个完整的穿梭框组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Transfer 穿梭框示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcTransfer 
        v-model="basicTargetKeys"
        :data="basicTransferData"
        :titles="['源数据', '目标数据']"
      />
      
      <div style="margin-top: 16px;">
        已选择的数据: {{ basicTargetKeys }}
      </div>
    </div>
    
    <div class="section">
      <h3>搜索功能</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>无搜索功能</h4>
          <YcTransfer 
            v-model="searchTargetKeys1"
            :data="searchTransferData"
            :titles="['源数据', '目标数据']"
          />
        </div>
        
        <div>
          <h4>有搜索功能</h4>
          <YcTransfer 
            v-model="searchTargetKeys2"
            :data="searchTransferData"
            :titles="['源数据', '目标数据']"
            :show-search="true"
            @search="onSearch"
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>全选功能</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>无全选功能</h4>
          <YcTransfer 
            v-model="selectAllTargetKeys1"
            :data="selectAllTransferData"
            :titles="['源数据', '目标数据']"
          />
        </div>
        
        <div>
          <h4>有全选功能</h4>
          <YcTransfer 
            v-model="selectAllTargetKeys2"
            :data="selectAllTransferData"
            :titles="['源数据', '目标数据']"
            :show-select-all="true"
          />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义标题</h3>
      <YcTransfer 
        v-model="customTitleTargetKeys"
        :data="customTitleTransferData"
      >
        <template #source-title="{ countTotal, countSelected, onClear }">
          <div class="custom-title">
            <span>源数据 ({{ countSelected }}/{{ countTotal }})</span>
            <YcButton size="small" @click="onClear">清空</YcButton>
          </div>
        </template>
        
        <template #target-title="{ countTotal, countSelected, onClear }">
          <div class="custom-title">
            <span>目标数据 ({{ countSelected }}/{{ countTotal }})</span>
            <YcButton size="small" @click="onClear">清空</YcButton>
          </div>
        </template>
      </YcTransfer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicTargetKeys = ref(['1']);
const basicTransferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);

// 搜索功能
const searchTargetKeys1 = ref(['1']);
const searchTargetKeys2 = ref(['1']);
const searchTransferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);

// 全选功能
const selectAllTargetKeys1 = ref(['1']);
const selectAllTargetKeys2 = ref(['1']);
const selectAllTransferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);

// 自定义标题
const customTitleTargetKeys = ref(['1']);
const customTitleTransferData = ref([
  { label: '数据1', value: '1' },
  { label: '数据2', value: '2' },
  { label: '数据3', value: '3' },
  { label: '数据4', value: '4' },
  { label: '数据5', value: '5' }
]);

// 方法
const onSearch = (value, type) => {
  console.log('搜索:', value, '类型:', type);
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

.custom-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
```

## API

### Transfer Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据源 | `TransferItem[]` | - |
| modelValue | 绑定值 | `string[]` | - |
| defaultValue | 默认值 | `string[]` | - |
| selected | 已选择的数据 | `string[]` | - |
| defaultSelected | 默认已选择的数据 | `string[]` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| simple | 是否简单模式 | `boolean` | `false` |
| oneWay | 是否单向模式 | `boolean` | `false` |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| showSelectAll | 是否显示全选 | `boolean` | `false` |
| title | 标题 | `string[]` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:selected | 已选择数据变化时触发 | `(value: TransferItemValue[])` |
| update:modelValue | 绑定值变化时触发 | `(value: TransferItemValue[])` |
| change | 数据变化时触发 | `(value: TransferItemValue[])` |
| select | 选择变化时触发 | `(value: TransferItemValue[])` |
| search | 搜索时触发 | `(value: string, type: 'target' \| 'source')` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| source | 源数据面板 | `DefaultSlots` |
| target | 目标数据面板 | `DefaultSlots` |
| source-title | 源数据标题 | `TitleSlots` |
| target-title | 目标数据标题 | `TitleSlots` |
| to-source-icon | 向左箭头图标 | - |
| to-target-icon | 向右箭头图标 | - |
| item | 数据项 | `{ value: string; label: string }` |

### TransferItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 显示文本 | `string` | - |
| value | 数据值 | `TransferItemValue` | - |
| disabled | 是否禁用 | `boolean` | `false` |

### TransferItemValue

| 类型 | 说明 |
| --- | --- |
| `string \| number` | 数据值类型 |

## 注意事项

1. 数据源需要包含 `label` 和 `value` 字段
2. 可以通过插槽完全自定义面板内容
3. 搜索功能支持实时过滤
4. 全选功能可以批量操作数据
