# List 列表

展示一组数据。

## 何时使用

- 需要展示一组数据时
- 需要展示复杂数据结构时
- 需要分页展示大量数据时

## 基础用法

最简单的列表用法。

```vue
<template>
  <YcList :data="listData">
    <template #item="{ item }">
      <YcListItem>
        <template #meta>
          <YcListItemMeta
            :title="item.title"
            :description="item.description"
          />
        </template>
      </YcListItem>
    </template>
  </YcList>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  { title: '列表项 1', description: '这是第一个列表项的描述' },
  { title: '列表项 2', description: '这是第二个列表项的描述' },
  { title: '列表项 3', description: '这是第三个列表项的描述' }
]);
</script>
```

## 列表项操作

通过 `actions` 插槽添加操作按钮。

```vue
<template>
  <YcList :data="listData">
    <template #item="{ item }">
      <YcListItem>
        <template #meta>
          <YcListItemMeta
            :title="item.title"
            :description="item.description"
          />
        </template>
        <template #actions>
          <YcButton type="text" size="small">编辑</YcButton>
          <YcButton type="text" size="small" danger>删除</YcButton>
        </template>
      </YcListItem>
    </template>
  </YcList>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  { title: '用户 1', description: '用户描述信息' },
  { title: '用户 2', description: '用户描述信息' },
  { title: '用户 3', description: '用户描述信息' }
]);
</script>
```

## 列表项元数据

通过 `meta` 插槽自定义元数据内容。

```vue
<template>
  <YcList :data="listData">
    <template #item="{ item }">
      <YcListItem>
        <template #meta>
          <YcListItemMeta>
            <template #avatar>
              <YcAvatar :src="item.avatar" />
            </template>
            <template #title>
              <a href="#">{{ item.title }}</a>
            </template>
            <template #description>
              <div>
                <p>{{ item.description }}</p>
                <p style="color: #666; font-size: 12px;">
                  {{ item.time }}
                </p>
              </div>
            </template>
          </YcListItemMeta>
        </template>
        <template #actions>
          <YcButton type="text" size="small">编辑</YcButton>
          <YcButton type="text" size="small" danger>删除</YcButton>
        </template>
      </YcListItem>
    </template>
  </YcList>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  { 
    title: '张三', 
    description: '前端开发工程师',
    avatar: 'https://via.placeholder.com/40x40',
    time: '2024-01-15 10:30'
  },
  { 
    title: '李四', 
    description: '后端开发工程师',
    avatar: 'https://via.placeholder.com/40x40',
    time: '2024-01-15 09:15'
  }
]);
</script>
```

## 列表尺寸

通过 `size` 属性设置列表尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcList :data="listData" size="small">
        <template #item="{ item }">
          <YcListItem>
            <template #meta>
              <YcListItemMeta
                :title="item.title"
                :description="item.description"
              />
            </template>
          </YcListItem>
        </template>
      </YcList>
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcList :data="listData" size="medium">
        <template #item="{ item }">
          <YcListItem>
            <template #meta>
              <YcListItemMeta
                :title="item.title"
                :description="item.description"
              />
            </template>
          </YcListItem>
        </template>
      </YcList>
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcList :data="listData" size="large">
        <template #item="{ item }">
          <YcListItem>
            <template #meta>
              <YcListItemMeta
                :title="item.title"
                :description="item.description"
              />
            </template>
          </YcListItem>
        </template>
      </YcList>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  { title: '列表项 1', description: '描述信息' },
  { title: '列表项 2', description: '描述信息' }
]);
</script>
```

## 列表样式

通过 `bordered` 和 `split` 属性设置列表样式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无边框</h4>
      <YcList :data="listData" :bordered="false" :split="false">
        <template #item="{ item }">
          <YcListItem>
            <template #meta>
              <YcListItemMeta
                :title="item.title"
                :description="item.description"
              />
            </template>
          </YcListItem>
        </template>
      </YcList>
    </div>
    
    <div>
      <h4>有边框</h4>
      <YcList :data="listData" :bordered="true" :split="true">
        <template #item="{ item }">
          <YcListItem>
            <template #meta>
              <YcListItemMeta
                :title="item.title"
                :description="item.description"
              />
            </template>
          </YcListItem>
        </template>
      </YcList>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  { title: '列表项 1', description: '描述信息' },
  { title: '列表项 2', description: '描述信息' }
]);
</script>
```

## 加载状态

通过 `loading` 属性显示加载状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcButton @click="toggleLoading">
      {{ loading ? '隐藏加载' : '显示加载' }}
    </YcButton>
    
    <YcList :data="listData" :loading="loading">
      <template #item="{ item }">
        <YcListItem>
          <template #meta>
            <YcListItemMeta
              :title="item.title"
              :description="item.description"
            />
          </template>
        </template>
      </template>
    </YcList>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
const listData = ref([
  { title: '列表项 1', description: '描述信息' },
  { title: '列表项 2', description: '描述信息' }
]);

const toggleLoading = () => {
  loading.value = !loading.value;
};
</script>
```

## 分页列表

通过 `paginationProps` 属性启用分页功能。

```vue
<template>
  <YcList 
    :data="currentPageData" 
    :pagination-props="paginationProps"
    @page-change="onPageChange"
    @page-size-change="onPageSizeChange"
  >
    <template #item="{ item }">
      <YcListItem>
        <template #meta>
          <YcListItemMeta
            :title="item.title"
            :description="item.description"
          />
        </template>
      </YcListItem>
    </template>
  </YcList>
</template>

<script setup>
import { ref, computed } from 'vue';

const allData = ref(Array.from({ length: 100 }, (_, i) => ({
  title: `列表项 ${i + 1}`,
  description: `这是第 ${i + 1} 个列表项的描述`
})));

const currentPage = ref(1);
const pageSize = ref(10);

const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allData.value.slice(start, end);
});

const paginationProps = computed(() => ({
  total: allData.value.length,
  current: currentPage.value,
  pageSize: pageSize.value,
  showSizeChanger: true,
  showQuickJumper: true
}));

const onPageChange = (page) => {
  currentPage.value = page;
};

const onPageSizeChange = (size) => {
  pageSize.value = size;
  currentPage.value = 1;
};
</script>
```

## 虚拟滚动

通过 `virtualListProps` 属性启用虚拟滚动。

```vue
<template>
  <YcList 
    :data="largeData"
    :virtual-list-props="virtualListProps"
    :max-height="400"
    :scrollbar="true"
  >
    <template #item="{ item }">
      <YcListItem>
        <template #meta>
          <YcListItemMeta
            :title="item.title"
            :description="item.description"
          />
        </template>
      </YcListItem>
    </template>
  </YcList>
</template>

<script setup>
import { ref } from 'vue';

const largeData = ref(Array.from({ length: 10000 }, (_, i) => ({
  title: `列表项 ${i + 1}`,
  description: `这是第 ${i + 1} 个列表项的描述`
})));

const virtualListProps = {
  itemHeight: 72,
  overscan: 5
};
</script>
```

## 列表头部和底部

通过 `header` 和 `footer` 插槽添加列表头部和底部。

```vue
<template>
  <YcList :data="listData">
    <template #header>
      <div class="list-header">
        <h3>用户列表</h3>
        <YcButton type="primary">添加用户</YcButton>
      </div>
    </template>
    
    <template #item="{ item }">
      <YcListItem>
        <template #meta>
          <YcListItemMeta
            :title="item.title"
            :description="item.description"
          />
        </template>
        <template #actions>
          <YcButton type="text" size="small">编辑</YcButton>
          <YcButton type="text" size="small" danger>删除</YcButton>
        </template>
      </YcListItem>
    </template>
    
    <template #footer>
      <div class="list-footer">
        <span>共 {{ listData.length }} 条记录</span>
      </div>
    </template>
  </YcList>
</template>

<script setup>
import { ref } from 'vue';

const listData = ref([
  { title: '用户 1', description: '用户描述信息' },
  { title: '用户 2', description: '用户描述信息' },
  { title: '用户 3', description: '用户描述信息' }
]);
</script>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.list-header h3 {
  margin: 0;
}

.list-footer {
  text-align: center;
  color: #666;
  padding: 16px 0;
}
</style>
```

## 完整示例

一个完整的列表使用示例。

```vue
<template>
  <div class="page">
    <h2>用户管理列表</h2>
    
    <YcList 
      :data="currentPageData"
      :loading="loading"
      :pagination-props="paginationProps"
      @page-change="onPageChange"
      @page-size-change="onPageSizeChange"
    >
      <template #header>
        <div class="list-header">
          <div class="header-left">
            <h3>用户列表</h3>
            <span class="total-count">共 {{ totalCount }} 条记录</span>
          </div>
          <div class="header-right">
            <YcInput 
              v-model="searchKeyword" 
              placeholder="搜索用户"
              style="width: 200px; margin-right: 16px;"
            >
              <template #prefix>
                <YcIcon-search />
              </template>
            </YcInput>
            <YcButton type="primary" @click="addUser">
              <YcIcon-plus style="margin-right: 4px;" />
              添加用户
            </YcButton>
          </div>
        </div>
      </template>
      
      <template #item="{ item }">
        <YcListItem>
          <template #meta>
            <YcListItemMeta>
              <template #avatar>
                <YcAvatar :src="item.avatar" />
              </template>
              <template #title>
                <a href="#">{{ item.name }}</a>
              </template>
              <template #description>
                <div>
                  <p>{{ item.email }}</p>
                  <p style="color: #666; font-size: 12px;">
                    创建时间：{{ item.createTime }}
                  </p>
                </div>
              </template>
            </YcListItemMeta>
          </template>
          <template #actions>
            <YcSpace>
              <YcButton type="text" size="small" @click="editUser(item)">
                <YcIcon-edit style="margin-right: 4px;" />
                编辑
              </YcButton>
              <YcButton type="text" size="small" danger @click="deleteUser(item)">
                <YcIcon-delete style="margin-right: 4px;" />
                删除
              </YcButton>
            </YcSpace>
          </template>
        </YcListItem>
      </template>
      
      <template #footer>
        <div class="list-footer">
          <YcSpace>
            <span>每页显示：</span>
            <YcSelect 
              v-model="pageSize" 
              :options="pageSizeOptions"
              style="width: 80px;"
            />
            <span>条</span>
          </YcSpace>
        </div>
      </template>
    </YcList>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const loading = ref(false);
const searchKeyword = ref('');
const currentPage = ref(1);
const pageSize = ref(10);

const allData = ref([]);
const totalCount = computed(() => allData.value.length);

const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allData.value.slice(start, end);
});

const paginationProps = computed(() => ({
  total: totalCount.value,
  current: currentPage.value,
  pageSize: pageSize.value,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total, range) => 
    `第 ${range[0]}-${range[1]} 条，共 ${total} 条`
}));

const pageSizeOptions = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 }
];

const fetchData = async () => {
  loading.value = true;
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000));
    allData.value = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `用户 ${i + 1}`,
      email: `user${i + 1}@example.com`,
      avatar: `https://via.placeholder.com/40x40?text=${i + 1}`,
      createTime: `2024-01-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
    }));
  } finally {
    loading.value = false;
  }
};

const onPageChange = (page) => {
  currentPage.value = page;
};

const onPageSizeChange = (size) => {
  pageSize.value = size;
  currentPage.value = 1;
};

const addUser = () => {
  console.log('添加用户');
};

const editUser = (user) => {
  console.log('编辑用户:', user);
};

const deleteUser = (user) => {
  console.log('删除用户:', user);
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.page {
  padding: 24px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-left h3 {
  margin: 0;
}

.total-count {
  color: #666;
  font-size: 14px;
}

.header-right {
  display: flex;
  align-items: center;
}

.list-footer {
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #f0f0f0;
}
</style>
```

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 列表数据 | `ObjectData[]` | `[]` |
| size | 列表尺寸 | `ListSize` | `'medium'` |
| bordered | 是否有边框 | `boolean` | `true` |
| split | 是否有分割线 | `boolean` | `true` |
| loading | 是否加载中 | `boolean` | `false` |
| hoverable | 是否可悬停 | `boolean` | `false` |
| paginationProps | 分页属性 | `PaginationProps` | - |
| gridProps | 栅格属性 | `GridProps` | - |
| maxHeight | 最大高度 | `number \| string` | - |
| bottomOffset | 底部偏移 | `number` | - |
| virtualListProps | 虚拟列表属性 | `VirtualListProps` | - |
| scrollbar | 是否显示滚动条 | `boolean` | `false` |

### ListItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actionLayout | 操作区域布局 | `Direction` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll | 滚动时触发 | `(ev: Event)` |
| reach-bottom | 到达底部时触发 | `(ev: Event)` |
| page-change | 页码变化时触发 | `(value: number)` |
| page-size-change | 每页条数变化时触发 | `(value: number)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 列表内容 | - |
| empty | 空状态 | - |
| header | 列表头部 | - |
| footer | 列表底部 | - |
| item | 列表项 | `{ index: number, item: ObjectData }` |
| scroll-loading | 滚动加载状态 | - |
| meta | 列表项元数据 | - |
| extra | 列表项额外内容 | - |
| actions | 列表项操作区域 | - |
| avatar | 头像 | - |
| title | 标题 | - |
| description | 描述 | - |

## 注意事项

1. 列表组件支持多种数据展示方式
2. 可以通过插槽自定义列表项内容
3. 支持分页和虚拟滚动
4. 响应式设计，适配不同屏幕尺寸

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-list {
  /* 列表容器 */
}

.yc-list-item {
  /* 列表项 */
}

.yc-list-item-meta {
  /* 列表项元数据 */
}

.yc-list-item-actions {
  /* 列表项操作区域 */
}
```
