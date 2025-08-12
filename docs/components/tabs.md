# Tabs 标签页

标签页组件。

## 何时使用

- 提供平级的区域将大块内容进行收纳和展现，保持界面整洁
- 当内容需要分组展示时
- 当需要切换不同视图时

## 基础用法

最简单的标签页用法。

```vue
<template>
  <YcTabs v-model:active-key="activeKey">
    <YcTabPane key="tab1" title="标签1">
      标签1的内容
    </YcTabPane>
    <YcTabPane key="tab2" title="标签2">
      标签2的内容
    </YcTabPane>
    <YcTabPane key="tab3" title="标签3">
      标签3的内容
    </YcTabPane>
  </YcTabs>
  
  <div style="margin-top: 16px;">
    当前激活的标签: {{ activeKey }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeKey = ref('tab1');
</script>
```

## 标签页类型

通过 `type` 属性设置标签页类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>线条类型</h4>
      <YcTabs v-model:active-key="activeKey1" type="line">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>卡片类型</h4>
      <YcTabs v-model:active-key="activeKey2" type="card">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>胶囊类型</h4>
      <YcTabs v-model:active-key="activeKey3" type="capsule">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey1 = ref('tab1');
const activeKey2 = ref('tab1');
const activeKey3 = ref('tab1');
</script>
```

## 标签页位置

通过 `position` 属性设置标签页位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>顶部位置</h4>
      <YcTabs v-model:active-key="activeKey1" position="top">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>左侧位置</h4>
      <YcTabs v-model:active-key="activeKey2" position="left">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>右侧位置</h4>
      <YcTabs v-model:active-key="activeKey3" position="right">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>底部位置</h4>
      <YcTabs v-model:active-key="activeKey4" position="bottom">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey1 = ref('tab1');
const activeKey2 = ref('tab1');
const activeKey3 = ref('tab1');
const activeKey4 = ref('tab1');
</script>
```

## 标签页尺寸

通过 `size` 属性设置标签页尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcTabs v-model:active-key="activeKey1" size="small">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcTabs v-model:active-key="activeKey2" size="medium">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcTabs v-model:active-key="activeKey3" size="large">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey1 = ref('tab1');
const activeKey2 = ref('tab1');
const activeKey3 = ref('tab1');
</script>
```

## 可编辑标签页

通过 `editable` 属性启用可编辑功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>不可编辑</h4>
      <YcTabs v-model:active-key="activeKey1">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>可编辑</h4>
      <YcTabs 
        v-model:active-key="activeKey2" 
        :editable="true"
        :show-add-button="true"
        @add="addTab"
        @delete="deleteTab"
      >
        <YcTabPane 
          v-for="tab in tabs" 
          :key="tab.key" 
          :title="tab.title"
          :closable="tab.closable"
        >
          {{ tab.content }}
        </YcTabPane>
      </YcTabs>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey1 = ref('tab1');
const activeKey2 = ref('tab1');

const tabs = ref([
  { key: 'tab1', title: '标签1', content: '标签1的内容', closable: false },
  { key: 'tab2', title: '标签2', content: '标签2的内容', closable: true },
  { key: 'tab3', title: '标签3', content: '标签3的内容', closable: true }
]);

const addTab = () => {
  const newTabKey = `tab${tabs.value.length + 1}`;
  tabs.value.push({
    key: newTabKey,
    title: `新标签${tabs.value.length + 1}`,
    content: `新标签${tabs.value.length + 1}的内容`,
    closable: true
  });
  activeKey2.value = newTabKey;
};

const deleteTab = (targetKey) => {
  const targetIndex = tabs.value.findIndex(tab => tab.key === targetKey);
  tabs.value.splice(targetIndex, 1);
  
  if (activeKey2.value === targetKey) {
    activeKey2.value = tabs.value[0]?.key || '';
  }
};
</script>
```

## 触发方式

通过 `trigger` 属性设置标签页触发方式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>点击触发</h4>
      <YcTabs v-model:active-key="activeKey1" trigger="click">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>悬停触发</h4>
      <YcTabs v-model:active-key="activeKey2" trigger="hover">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey1 = ref('tab1');
const activeKey2 = ref('tab1');
</script>
```

## 自定义标签标题

通过插槽自定义标签标题。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认标题</h4>
      <YcTabs v-model:active-key="activeKey1">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
    </div>
    
    <div>
      <h4>自定义标题</h4>
      <YcTabs v-model:active-key="activeKey2">
        <YcTabPane key="tab1">
          <template #title>
            <span class="custom-title">
              <span class="title-icon">📊</span>
              <span class="title-text">数据统计</span>
            </span>
          </template>
          数据统计的内容
        </YcTabPane>
        <YcTabPane key="tab2">
          <template #title>
            <span class="custom-title">
              <span class="title-icon">⚙️</span>
              <span class="title-text">系统设置</span>
            </span>
          </template>
          系统设置的内容
        </YcTabPane>
        <YcTabPane key="tab3">
          <template #title>
            <span class="custom-title">
              <span class="title-icon">👤</span>
              <span class="title-text">用户管理</span>
            </span>
          </template>
          用户管理的内容
        </YcTabPane>
      </YcTabs>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey1 = ref('tab1');
const activeKey2 = ref('tab1');
</script>

<style scoped>
.custom-title {
  display: flex;
  align-items: center;
  gap: 6px;
}

.title-icon {
  font-size: 14px;
}

.title-text {
  font-weight: 500;
}
</style>
```

## 额外操作

通过 `extra` 插槽添加额外操作。

```vue
<template>
  <YcTabs v-model:active-key="activeKey">
    <template #extra>
      <YcSpace>
        <YcButton size="small" @click="refreshData">
          <template #icon>
            <span>🔄</span>
          </template>
          刷新
        </YcButton>
        <YcButton size="small" @click="exportData">
          <template #icon>
            <span>📥</span>
          </template>
          导出
        </YcButton>
      </YcSpace>
    </template>
    
    <YcTabPane key="tab1" title="标签1">
      <div>标签1的内容</div>
      <div>最后刷新时间: {{ lastRefreshTime }}</div>
    </YcTabPane>
    <YcTabPane key="tab2" title="标签2">
      <div>标签2的内容</div>
      <div>最后刷新时间: {{ lastRefreshTime }}</div>
    </YcTabPane>
    <YcTabPane key="tab3" title="标签3">
      <div>标签3的内容</div>
      <div>最后刷新时间: {{ lastRefreshTime }}</div>
    </YcTabPane>
  </YcTabs>
</template>

<script setup>
import { ref } from 'vue';

const activeKey = ref('tab1');
const lastRefreshTime = ref('未刷新');

const refreshData = () => {
  lastRefreshTime.value = new Date().toLocaleString();
  console.log('刷新数据');
};

const exportData = () => {
  console.log('导出数据');
};
</script>
```

## 禁用标签页

通过 `disabled` 属性禁用标签页。

```vue
<template>
  <YcTabs v-model:active-key="activeKey">
    <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
    <YcTabPane key="tab2" title="标签2" disabled>标签2的内容（禁用）</YcTabPane>
    <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
  </YcTabs>
  
  <div style="margin-top: 16px;">
    当前激活的标签: {{ activeKey }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeKey = ref('tab1');
</script>
```

## 事件处理

监听标签页的各种事件。

```vue
<template>
  <YcTabs 
    v-model:active-key="activeKey"
    @change="onChange"
    @tab-click="onTabClick"
  >
    <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
    <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
    <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
  </YcTabs>
  
  <div style="margin-top: 16px;">
    <div>当前激活的标签: {{ activeKey }}</div>
    <div>变化次数: {{ changeCount }}</div>
    <div>点击次数: {{ clickCount }}</div>
  </div>
  
  <YcSpace style="margin-top: 16px;">
    <YcButton @click="setActiveTab('tab1')">切换到标签1</YcButton>
    <YcButton @click="setActiveTab('tab2')">切换到标签2</YcButton>
    <YcButton @click="setActiveTab('tab3')">切换到标签3</YcButton>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const activeKey = ref('tab1');
const changeCount = ref(0);
const clickCount = ref(0);

const onChange = (key) => {
  changeCount.value++;
  console.log('标签页变化:', key);
};

const onTabClick = (key) => {
  clickCount.value++;
  console.log('标签页点击:', key);
};

const setActiveTab = (key) => {
  activeKey.value = key;
};
</script>
```

## 完整示例

一个完整的标签页组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Tabs 标签页示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcTabs v-model:active-key="basicActiveKey">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
      
      <div style="margin-top: 16px;">
        当前激活的标签: {{ basicActiveKey }}
      </div>
    </div>
    
    <div class="section">
      <h3>标签页类型</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>线条类型</h4>
          <YcTabs v-model:active-key="typeActiveKey1" type="line">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
        
        <div>
          <h4>卡片类型</h4>
          <YcTabs v-model:active-key="typeActiveKey2" type="card">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
        
        <div>
          <h4>胶囊类型</h4>
          <YcTabs v-model:active-key="typeActiveKey3" type="capsule">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>标签页位置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>顶部位置</h4>
          <YcTabs v-model:active-key="positionActiveKey1" position="top">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
        
        <div>
          <h4>左侧位置</h4>
          <YcTabs v-model:active-key="positionActiveKey2" position="left">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>标签页尺寸</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcTabs v-model:active-key="sizeActiveKey1" size="small">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcTabs v-model:active-key="sizeActiveKey2" size="large">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>可编辑标签页</h3>
      <YcTabs 
        v-model:active-key="editableActiveKey" 
        :editable="true"
        :show-add-button="true"
        @add="addTab"
        @delete="deleteTab"
      >
        <YcTabPane 
          v-for="tab in editableTabs" 
          :key="tab.key" 
          :title="tab.title"
          :closable="tab.closable"
        >
          {{ tab.content }}
        </YcTabPane>
      </YcTabs>
    </div>
    
    <div class="section">
      <h3>触发方式</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>点击触发</h4>
          <YcTabs v-model:active-key="triggerActiveKey1" trigger="click">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
        
        <div>
          <h4>悬停触发</h4>
          <YcTabs v-model:active-key="triggerActiveKey2" trigger="hover">
            <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
            <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
            <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
          </YcTabs>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义标签标题</h4>
      <YcTabs v-model:active-key="customTitleActiveKey">
        <YcTabPane key="tab1">
          <template #title>
            <span class="custom-title">
              <span class="title-icon">📊</span>
              <span class="title-text">数据统计</span>
            </span>
          </template>
          数据统计的内容
        </YcTabPane>
        <YcTabPane key="tab2">
          <template #title>
            <span class="custom-title">
              <span class="title-icon">⚙️</span>
              <span class="title-text">系统设置</span>
            </span>
          </template>
          系统设置的内容
        </YcTabPane>
        <YcTabPane key="tab3">
          <template #title>
            <span class="custom-title">
              <span class="title-icon">👤</span>
              <span class="title-text">用户管理</span>
            </span>
          </template>
          用户管理的内容
        </YcTabPane>
      </YcTabs>
    </div>
    
    <div class="section">
      <h3>额外操作</h3>
      <YcTabs v-model:active-key="extraActiveKey">
        <template #extra>
          <YcSpace>
            <YcButton size="small" @click="refreshData">
              <template #icon>
                <span>🔄</span>
              </template>
              刷新
            </YcButton>
            <YcButton size="small" @click="exportData">
              <template #icon>
                <span>📥</span>
              </template>
              导出
            </YcButton>
          </YcSpace>
        </template>
        
        <YcTabPane key="tab1" title="标签1">
          <div>标签1的内容</div>
          <div>最后刷新时间: {{ lastRefreshTime }}</div>
        </YcTabPane>
        <YcTabPane key="tab2" title="标签2">
          <div>标签2的内容</div>
          <div>最后刷新时间: {{ lastRefreshTime }}</div>
        </YcTabPane>
        <YcTabPane key="tab3" title="标签3">
          <div>标签3的内容</div>
          <div>最后刷新时间: {{ lastRefreshTime }}</div>
        </YcTabPane>
      </YcTabs>
    </div>
    
    <div class="section">
      <h3>禁用标签页</h3>
      <YcTabs v-model:active-key="disabledActiveKey">
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2" disabled>标签2的内容（禁用）</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
      
      <div style="margin-top: 16px;">
        当前激活的标签: {{ disabledActiveKey }}
      </div>
    </div>
    
    <div class="section">
      <h3>事件处理</h3>
      <YcTabs 
        v-model:active-key="eventActiveKey"
        @change="onChange"
        @tab-click="onTabClick"
      >
        <YcTabPane key="tab1" title="标签1">标签1的内容</YcTabPane>
        <YcTabPane key="tab2" title="标签2">标签2的内容</YcTabPane>
        <YcTabPane key="tab3" title="标签3">标签3的内容</YcTabPane>
      </YcTabs>
      
      <div style="margin-top: 16px;">
        <div>当前激活的标签: {{ eventActiveKey }}</div>
        <div>变化次数: {{ changeCount }}</div>
        <div>点击次数: {{ clickCount }}</div>
      </div>
      
      <YcSpace style="margin-top: 16px;">
        <YcButton @click="setEventActiveTab('tab1')">切换到标签1</YcButton>
        <YcButton @click="setEventActiveTab('tab2')">切换到标签2</YcButton>
        <YcButton @click="setEventActiveTab('tab3')">切换到标签3</YcButton>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicActiveKey = ref('tab1');

// 标签页类型
const typeActiveKey1 = ref('tab1');
const typeActiveKey2 = ref('tab1');
const typeActiveKey3 = ref('tab1');

// 标签页位置
const positionActiveKey1 = ref('tab1');
const positionActiveKey2 = ref('tab1');

// 标签页尺寸
const sizeActiveKey1 = ref('tab1');
const sizeActiveKey2 = ref('tab1');

// 可编辑标签页
const editableActiveKey = ref('tab1');
const editableTabs = ref([
  { key: 'tab1', title: '标签1', content: '标签1的内容', closable: false },
  { key: 'tab2', title: '标签2', content: '标签2的内容', closable: true },
  { key: 'tab3', title: '标签3', content: '标签3的内容', closable: true }
]);

// 触发方式
const triggerActiveKey1 = ref('tab1');
const triggerActiveKey2 = ref('tab1');

// 自定义标签标题
const customTitleActiveKey = ref('tab1');

// 额外操作
const extraActiveKey = ref('tab1');
const lastRefreshTime = ref('未刷新');

// 禁用标签页
const disabledActiveKey = ref('tab1');

// 事件处理
const eventActiveKey = ref('tab1');
const changeCount = ref(0);
const clickCount = ref(0);

// 可编辑标签页方法
const addTab = () => {
  const newTabKey = `tab${editableTabs.value.length + 1}`;
  editableTabs.value.push({
    key: newTabKey,
    title: `新标签${editableTabs.value.length + 1}`,
    content: `新标签${editableTabs.value.length + 1}的内容`,
    closable: true
  });
  editableActiveKey.value = newTabKey;
};

const deleteTab = (targetKey) => {
  const targetIndex = editableTabs.value.findIndex(tab => tab.key === targetKey);
  editableTabs.value.splice(targetIndex, 1);
  
  if (editableActiveKey.value === targetKey) {
    editableActiveKey.value = editableTabs.value[0]?.key || '';
  }
};

// 额外操作方法
const refreshData = () => {
  lastRefreshTime.value = new Date().toLocaleString();
  console.log('刷新数据');
};

const exportData = () => {
  console.log('导出数据');
};

// 事件处理方法
const onChange = (key) => {
  changeCount.value++;
  console.log('标签页变化:', key);
};

const onTabClick = (key) => {
  clickCount.value++;
  console.log('标签页点击:', key);
};

const setEventActiveTab = (key) => {
  eventActiveKey.value = key;
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
  align-items: center;
  gap: 6px;
}

.title-icon {
  font-size: 14px;
}

.title-text {
  font-weight: 500;
}
</style>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活的标签页 | `TabKey` | - |
| defaultActiveKey | 默认激活的标签页 | `TabKey` | - |
| position | 标签页位置 | `TabPositon` | `'top'` |
| size | 标签页尺寸 | `Size` | `'medium'` |
| type | 标签页类型 | `TabType` | `'line'` |
| direction | 标签页方向 | `Direction` | `'horizontal'` |
| editable | 是否可编辑 | `boolean` | `false` |
| showAddButton | 是否显示添加按钮 | `boolean` | `false` |
| destoryOnHide | 隐藏时是否销毁 | `boolean` | `false` |
| justify | 是否两端对齐 | `boolean` | `false` |
| animation | 是否启用动画 | `boolean` | `true` |
| headerPadding | 是否启用头部内边距 | `boolean` | `false` |
| autoSwitch | 是否自动切换 | `boolean` | `false` |
| hideContent | 是否隐藏内容 | `boolean` | `false` |
| trigger | 触发方式 | `TabTrigger` | `'click'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:activeKey | 激活标签页变化时触发 | `(value: TabKey)` |
| change | 标签页变化时触发 | `(value: TabKey)` |
| tab-click | 标签页点击时触发 | `(value: TabKey)` |
| add | 添加标签页时触发 | - |
| delete | 删除标签页时触发 | `(value: TabKey)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| extra | 额外操作 | - |
| default | 标签页内容 | - |

### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标签页标题 | `string` | - |
| path | 标签页路径 | `TabKey` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| closable | 是否可关闭 | `boolean` | `false` |
| destoryOnHide | 隐藏时是否销毁 | `boolean` | `false` |

### TabPane Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 标签页内容 | - |
| title | 标签页标题 | - |

### TabKey

| 类型 | 说明 |
| --- | --- |
| `string \| number` | 标签页键值类型 |

### TabType

| 类型 | 说明 |
| --- | --- |
| `'line'` | 线条类型 |
| `'card'` | 卡片类型 |
| `'card-gutter'` | 卡片间隔类型 |
| `'text'` | 文字类型 |
| `'rounded'` | 圆角类型 |
| `'capsule'` | 胶囊类型 |

### TabPositon

| 类型 | 说明 |
| --- | --- |
| `'left'` | 左侧 |
| `'right'` | 右侧 |
| `'bottom'` | 底部 |
| `'top'` | 顶部 |

### TabTrigger

| 类型 | 说明 |
| --- | --- |
| `'click'` | 点击触发 |
| `'hover'` | 悬停触发 |

## 注意事项

1. 标签页内容可以通过插槽自定义
2. 可编辑模式下，第一个标签页通常不可关闭
3. 左侧和右侧位置适合垂直布局
4. 悬停触发适合快速预览内容

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-tabs {
  /* 标签页容器 */
}

.yc-tabs-header {
  /* 标签页头部 */
}

.yc-tabs-nav {
  /* 标签页导航 */
}

.yc-tabs-tab {
  /* 标签页标签 */
}

.yc-tabs-tab-active {
  /* 激活状态的标签 */
}

.yc-tabs-tab-disabled {
  /* 禁用状态的标签 */
}

.yc-tabs-content {
  /* 标签页内容 */
}

.yc-tabs-tabpane {
  /* 标签页面板 */
}

.yc-tabs-tabpane-active {
  /* 激活状态的面板 */
}

.yc-tabs-ink-bar {
  /* 下划线指示器 */
}

.yc-tabs-add-button {
  /* 添加按钮 */
}

.yc-tabs-close-button {
  /* 关闭按钮 */
}
```
