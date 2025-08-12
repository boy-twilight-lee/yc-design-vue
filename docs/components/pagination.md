# Pagination 分页

采用分页的形式分隔长列表，减轻页面加载压力，提升用户体验。

## 何时使用

- 当有大量数据需要分页展示时
- 当需要用户快速定位到特定页面时
- 当需要控制每页显示的数据量时

## 基础用法

最简单的分页用法。

```vue
<template>
  <YcPagination 
    :total="100" 
    :current="current"
    @change="onChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);

const onChange = (page) => {
  current.value = page;
  console.log('当前页:', page);
};
</script>
```

## 分页大小

通过 `pageSize` 属性设置每页显示的数据量。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>每页 10 条</h4>
      <YcPagination 
        :total="100" 
        :current="current1"
        :page-size="10"
        @change="onChange1"
      />
    </div>
    
    <div>
      <h4>每页 20 条</h4>
      <YcPagination 
        :total="100" 
        :current="current2"
        :page-size="20"
        @change="onChange2"
      />
    </div>
    
    <div>
      <h4>每页 50 条</h4>
      <YcPagination 
        :total="100" 
        :current="current3"
        :page-size="50"
        @change="onChange3"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const current1 = ref(1);
const current2 = ref(1);
const current3 = ref(1);

const onChange1 = (page) => {
  current1.value = page;
};

const onChange2 = (page) => {
  current2.value = page;
};

const onChange3 = (page) => {
  current3.value = page;
};
</script>
```

## 分页大小选择器

通过 `showPageSize` 属性启用分页大小选择器。

```vue
<template>
  <YcPagination 
    :total="1000" 
    :current="current"
    :page-size="pageSize"
    :show-page-size="true"
    :page-size-options="[10, 20, 50, 100]"
    @change="onChange"
    @page-size-change="onPageSizeChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);
const pageSize = ref(20);

const onChange = (page) => {
  current.value = page;
  console.log('当前页:', page);
};

const onPageSizeChange = (size) => {
  pageSize.value = size;
  current.value = 1; // 切换分页大小时重置到第一页
  console.log('分页大小:', size);
};
</script>
```

## 总数显示

通过 `showTotal` 属性显示数据总数。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认总数显示</h4>
      <YcPagination 
        :total="1000" 
        :current="current1"
        :show-total="true"
        @change="onChange1"
      />
    </div>
    
    <div>
      <h4>自定义总数显示</h4>
      <YcPagination 
        :total="1000" 
        :current="current2"
        :show-total="true"
        @change="onChange2"
      >
        <template #total="{ total }">
          共 {{ total }} 条记录
        </template>
      </YcPagination>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const current1 = ref(1);
const current2 = ref(1);

const onChange1 = (page) => {
  current1.value = page;
};

const onChange2 = (page) => {
  current2.value = page;
};
</script>
```

## 快速跳转

通过 `showJumper` 属性启用快速跳转功能。

```vue
<template>
  <YcPagination 
    :total="1000" 
    :current="current"
    :show-jumper="true"
    @change="onChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);

const onChange = (page) => {
  current.value = page;
  console.log('跳转到第', page, '页');
};
</script>
```

## 简单模式

通过 `simple` 属性启用简单分页模式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>标准分页</h4>
      <YcPagination 
        :total="1000" 
        :current="current1"
        @change="onChange1"
      />
    </div>
    
    <div>
      <h4>简单分页</h4>
      <YcPagination 
        :total="1000" 
        :current="current2"
        :simple="true"
        @change="onChange2"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const current1 = ref(1);
const current2 = ref(1);

const onChange1 = (page) => {
  current1.value = page;
};

const onChange2 = (page) => {
  current2.value = page;
};
</script>
```

## 分页尺寸

通过 `size` 属性设置分页组件的尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcPagination 
        :total="100" 
        :current="current1"
        size="small"
        @change="onChange1"
      />
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcPagination 
        :total="100" 
        :current="current2"
        size="medium"
        @change="onChange2"
      />
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcPagination 
        :total="100" 
        :current="current3"
        size="large"
        @change="onChange3"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const current1 = ref(1);
const current2 = ref(1);
const current3 = ref(1);

const onChange1 = (page) => {
  current1.value = page;
};

const onChange2 = (page) => {
  current2.value = page;
};

const onChange3 = (page) => {
  current3.value = page;
};
</script>
```

## 自定义样式

通过 `pageItemStyle` 和 `activePageItemStyle` 属性自定义分页项的样式。

```vue
<template>
  <YcPagination 
    :total="100" 
    :current="current"
    :page-item-style="pageItemStyle"
    :active-page-item-style="activePageItemStyle"
    @change="onChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);

const pageItemStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '4px',
  margin: '0 4px'
};

const activePageItemStyle = {
  border: '1px solid #1890ff',
  backgroundColor: '#1890ff',
  color: 'white',
  borderRadius: '4px',
  margin: '0 4px'
};

const onChange = (page) => {
  current.value = page;
};
</script>
```

## 隐藏单页

通过 `hideOnSinglePage` 属性在只有一页时隐藏分页组件。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>显示单页分页</h4>
      <YcPagination 
        :total="10" 
        :current="current1"
        :page-size="10"
        @change="onChange1"
      />
    </div>
    
    <div>
      <h4>隐藏单页分页</h4>
      <YcPagination 
        :total="10" 
        :current="current2"
        :page-size="10"
        :hide-on-single-page="true"
        @change="onChange2"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const current1 = ref(1);
const current2 = ref(1);

const onChange1 = (page) => {
  current1.value = page;
};

const onChange2 = (page) => {
  current2.value = page;
};
</script>
```

## 禁用状态

通过 `disabled` 属性禁用分页组件。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常分页</h4>
      <YcPagination 
        :total="100" 
        :current="current1"
        @change="onChange1"
      />
    </div>
    
    <div>
      <h4>禁用分页</h4>
      <YcPagination 
        :total="100" 
        :current="current2"
        :disabled="true"
        @change="onChange2"
      />
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const current1 = ref(1);
const current2 = ref(1);

const onChange1 = (page) => {
  current1.value = page;
};

const onChange2 = (page) => {
  current2.value = page;
};
</script>
```

## 完整示例

一个完整的分页使用示例。

```vue
<template>
  <div class="page">
    <h2>分页组件示例</h2>
    
    <div class="section">
      <h3>数据展示</h3>
      <div class="data-table">
        <div class="table-header">
          <span>姓名</span>
          <span>年龄</span>
          <span>城市</span>
        </div>
        <div 
          v-for="item in currentPageData" 
          :key="item.id" 
          class="table-row"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
          <span>{{ item.city }}</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h3>分页控制</h3>
      <YcPagination 
        :total="total"
        :current="current"
        :page-size="pageSize"
        :show-total="true"
        :show-page-size="true"
        :show-jumper="true"
        :page-size-options="[5, 10, 20, 50]"
        @change="onPageChange"
        @page-size-change="onPageSizeChange"
      >
        <template #total="{ total }">
          共 {{ total }} 条记录，当前第 {{ current }}/{{ Math.ceil(total / pageSize) }} 页
        </template>
      </YcPagination>
    </div>
    
    <div class="section">
      <h3>分页信息</h3>
      <div class="pagination-info">
        <p><strong>当前页：</strong>{{ current }}</p>
        <p><strong>每页条数：</strong>{{ pageSize }}</p>
        <p><strong>总条数：</strong>{{ total }}</p>
        <p><strong>总页数：</strong>{{ Math.ceil(total / pageSize) }}</p>
        <p><strong>当前页数据：</strong>{{ currentPageData.length }} 条</p>
      </div>
    </div>
    
    <div class="section">
      <h3>其他分页样式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>简单分页</h4>
          <YcPagination 
            :total="total" 
            :current="current"
            :simple="true"
            @change="onPageChange"
          />
        </div>
        
        <div>
          <h4>小尺寸分页</h4>
          <YcPagination 
            :total="total" 
            :current="current"
            size="small"
            @change="onPageChange"
          />
        </div>
        
        <div>
          <h4>自定义样式分页</h4>
          <YcPagination 
            :total="total" 
            :current="current"
            :page-item-style="customPageItemStyle"
            :active-page-item-style="customActivePageItemStyle"
            @change="onPageChange"
          />
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const current = ref(1);
const pageSize = ref(10);
const total = ref(0);
const allData = ref([]);

// 模拟数据
const generateData = () => {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i,
      name: `用户 ${i}`,
      age: Math.floor(Math.random() * 50) + 18,
      city: ['北京', '上海', '广州', '深圳', '杭州'][Math.floor(Math.random() * 5)]
    });
  }
  return data;
};

// 当前页数据
const currentPageData = computed(() => {
  const start = (current.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allData.value.slice(start, end);
});

// 分页变化
const onPageChange = (page) => {
  current.value = page;
  console.log('切换到第', page, '页');
};

// 分页大小变化
const onPageSizeChange = (size) => {
  pageSize.value = size;
  current.value = 1; // 重置到第一页
  console.log('分页大小改为', size);
};

// 自定义样式
const customPageItemStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
  margin: '0 6px',
  padding: '8px 12px',
  transition: 'all 0.3s'
};

const customActivePageItemStyle = {
  border: '1px solid #1890ff',
  backgroundColor: '#1890ff',
  color: 'white',
  borderRadius: '6px',
  margin: '0 6px',
  padding: '8px 12px',
  transition: 'all 0.3s'
};

onMounted(() => {
  allData.value = generateData();
  total.value = allData.value.length;
});
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

.data-table {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #fafafa;
  padding: 12px;
  font-weight: 600;
  color: #333;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 12px;
  border-top: 1px solid #f0f0f0;
}

.table-row:hover {
  background: #f5f5f5;
}

.pagination-info {
  background: #f9f9f9;
  padding: 16px;
  border-radius: 6px;
}

.pagination-info p {
  margin: 8px 0;
  color: #666;
}

.pagination-info strong {
  color: #333;
}
</style>
```

## API

### Pagination Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| total | 数据总数 | `number` | - |
| current | 当前页数 | `number` | - |
| defaultCurrent | 默认当前页数 | `number` | `1` |
| pageSize | 每页条数 | `number` | `10` |
| defaultPageSize | 默认每页条数 | `number` | `10` |
| disabled | 是否禁用 | `boolean` | `false` |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | `boolean` | `false` |
| simple | 是否使用简单分页器 | `boolean` | `false` |
| showTotal | 是否显示总数 | `boolean` | `false` |
| showMore | 是否显示更多按钮 | `boolean` | `false` |
| showJumper | 是否显示快速跳转 | `boolean` | `false` |
| showPageSize | 是否显示分页大小选择器 | `boolean` | `false` |
| pageSizeOptions | 分页大小选项 | `number[]` | `[10, 20, 50, 100]` |
| pageSizeProps | 分页大小选择器属性 | `SelectProps` | - |
| size | 分页器尺寸 | `Size` | `'medium'` |
| pageItemStyle | 分页项样式 | `CSSProperties` | - |
| activePageItemStyle | 激活分页项样式 | `CSSProperties` | - |
| baseSize | 基础分页大小 | `number` | - |
| bufferSize | 缓冲区大小 | `number` | - |
| autoAdjust | 是否自动调整 | `boolean` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:current | 当前页变化时触发 | `(current: number)` |
| update:pageSize | 分页大小变化时触发 | `(pageSize: number)` |
| change | 页码变化时触发 | `(current: number)` |
| page-size-change | 分页大小变化时触发 | `(pageSize: number)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| total | 总数显示 | `{ total: number }` |
| page-item-ellipsis | 省略号 | - |
| page-item-step | 上一步/下一步按钮 | `{ type: 'previous' \| 'next' }` |
| page-item | 分页项 | `{ page: number }` |

## 注意事项

1. `total` 属性是必需的，用于计算总页数
2. 切换分页大小时，建议重置当前页到第一页
3. 可以通过插槽自定义总数显示、分页项等内容的样式
4. 支持响应式设计，适配不同屏幕尺寸

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-pagination {
  /* 分页容器 */
}

.yc-pagination-item {
  /* 分页项 */
}

.yc-pagination-item-active {
  /* 激活的分页项 */
}

.yc-pagination-prev,
.yc-pagination-next {
  /* 上一步/下一步按钮 */
}

.yc-pagination-jumper {
  /* 快速跳转 */
}

.yc-pagination-options {
  /* 分页大小选择器 */
}
```
