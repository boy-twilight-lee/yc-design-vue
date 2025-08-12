# ConfigProvider 全局配置

为组件库提供统一的全局化配置。

## 何时使用

- 需要为整个应用或某个区域设置统一的组件配置
- 需要自定义组件的默认行为，如尺寸、层级、弹窗容器等
- 需要统一管理组件的全局设置

## 基础用法

最简单的用法，为子组件提供全局配置。

```vue
<template>
  <YcConfigProvider :size="'large'" :z-index="2000">
    <YcButton>大尺寸按钮</YcButton>
    <YcInput placeholder="大尺寸输入框" />
  </YcConfigProvider>
</template>
```

## 尺寸配置

通过 `size` 属性设置所有子组件的默认尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcConfigProvider size="mini">
      <YcSpace>
        <YcButton>迷你按钮</YcButton>
        <YcInput placeholder="迷你输入框" />
        <YcSelect placeholder="迷你选择器" />
      </YcSpace>
    </YcConfigProvider>
    
    <YcConfigProvider size="small">
      <YcSpace>
        <YcButton>小尺寸按钮</YcButton>
        <YcInput placeholder="小尺寸输入框" />
        <YcSelect placeholder="小尺寸选择器" />
      </YcSpace>
    </YcConfigProvider>
    
    <YcConfigProvider size="medium">
      <YcSpace>
        <YcButton>中等尺寸按钮</YcButton>
        <YcInput placeholder="中等尺寸输入框" />
        <YcSelect placeholder="中等尺寸选择器" />
      </YcSpace>
    </YcConfigProvider>
    
    <YcConfigProvider size="large">
      <YcSpace>
        <YcButton>大尺寸按钮</YcButton>
        <YcInput placeholder="大尺寸输入框" />
        <YcSelect placeholder="大尺寸选择器" />
      </YcSpace>
    </YcConfigProvider>
  </YcSpace>
</template>
```

## 层级配置

通过 `zIndex` 属性设置弹窗组件的默认层级。

```vue
<template>
  <YcConfigProvider :z-index="3000">
    <YcButton @click="showModal">显示模态框</YcButton>
    <YcModal v-model:visible="modalVisible" title="高层级模态框">
      <p>这个模态框的层级是 3000</p>
    </YcModal>
  </YcConfigProvider>
</template>

<script setup>
import { ref } from 'vue';

const modalVisible = ref(false);

const showModal = () => {
  modalVisible.value = true;
};
</script>
```

## 弹窗容器配置

通过 `popupContainer` 属性设置弹窗的挂载容器。

```vue
<template>
  <div>
    <YcConfigProvider popup-container="body">
      <YcButton @click="showDropdown1">挂载到 body</YcButton>
      <YcDropdown v-model:popup-visible="dropdown1Visible">
        <YcDropdownItem>选项1</YcDropdownItem>
        <YcDropdownItem>选项2</YcDropdownItem>
      </YcDropdown>
    </YcConfigProvider>
    
    <div ref="customContainer" style="position: relative; margin-top: 16px;">
      <YcConfigProvider :popup-container="customContainer">
        <YcButton @click="showDropdown2">挂载到自定义容器</YcButton>
        <YcDropdown v-model:popup-visible="dropdown2Visible">
          <YcDropdownItem>选项1</YcDropdownItem>
          <YcDropdownItem>选项2</YcDropdownItem>
        </YcDropdown>
      </YcConfigProvider>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const customContainer = ref();
const dropdown1Visible = ref(false);
const dropdown2Visible = ref(false);

const showDropdown1 = () => {
  dropdown1Visible.value = !dropdown1Visible.value;
};

const showDropdown2 = () => {
  dropdown2Visible.value = !dropdown2Visible.value;
};
</script>
```

## 滚动行为配置

通过 `updateAtScroll` 和 `scrollToClose` 属性配置滚动时的行为。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcConfigProvider :update-at-scroll="true" :scroll-to-close="false">
      <div style="height: 200px; overflow: auto; border: 1px solid #d9d9d9;">
        <div style="height: 400px; padding: 16px;">
          <YcButton @click="showDropdown1">滚动时更新位置</YcButton>
          <YcDropdown v-model:popup-visible="dropdown1Visible">
            <YcDropdownItem>选项1</YcDropdownItem>
            <YcDropdownItem>选项2</YcDropdownItem>
          </YcDropdown>
        </div>
      </div>
    </YcConfigProvider>
    
    <YcConfigProvider :update-at-scroll="true" :scroll-to-close="true">
      <div style="height: 200px; overflow: auto; border: 1px solid #d9d9d9;">
        <div style="height: 400px; padding: 16px;">
          <YcButton @click="showDropdown2">滚动时关闭</YcButton>
          <YcDropdown v-model:popup-visible="dropdown2Visible">
            <YcDropdownItem>选项1</YcDropdownItem>
            <YcDropdownItem>选项2</YcDropdownItem>
          </YcDropdown>
        </div>
      </div>
    </YcConfigProvider>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const dropdown1Visible = ref(false);
const dropdown2Visible = ref(false);

const showDropdown1 = () => {
  dropdown1Visible.value = !dropdown1Visible.value;
};

const showDropdown2 = () => {
  dropdown2Visible.value = !dropdown2Visible.value;
};
</script>
```

## 时间交换配置

通过 `exchangeTime` 属性配置时间选择器的行为。

```vue
<template>
  <YcConfigProvider :exchange-time="true">
    <YcSpace direction="vertical" size="large">
      <YcTimePicker v-model="time1" placeholder="开始时间" />
      <YcTimePicker v-model="time2" placeholder="结束时间" />
    </YcSpace>
  </YcConfigProvider>
</template>

<script setup>
import { ref } from 'vue';

const time1 = ref('');
const time2 = ref('');
</script>
```

## 嵌套配置

ConfigProvider 支持嵌套使用，内层配置会覆盖外层配置。

```vue
<template>
  <YcConfigProvider size="large" :z-index="2000">
    <div>
      <p>外层配置：大尺寸，层级 2000</p>
      <YcButton>大尺寸按钮</YcButton>
      
      <YcConfigProvider size="mini" :z-index="3000">
        <div style="margin-top: 16px;">
          <p>内层配置：迷你尺寸，层级 3000</p>
          <YcButton>迷你按钮</YcButton>
        </div>
      </YcConfigProvider>
    </div>
  </YcConfigProvider>
</template>
```

## 自定义加载状态

通过 `loading` 插槽自定义全局加载状态。

```vue
<template>
  <YcConfigProvider>
    <template #loading>
      <div class="custom-loading">
        <YcIcon-loading />
        <span>自定义加载中...</span>
      </div>
    </template>
    
    <YcSpin :spinning="true">
      <div style="height: 200px; padding: 16px;">
        内容区域
      </div>
    </YcSpin>
  </YcConfigProvider>
</template>

<style scoped>
.custom-loading {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1890ff;
}
</style>
```

## 自定义空状态

通过 `empty` 插槽自定义特定组件的空状态。

```vue
<template>
  <YcConfigProvider>
    <template #empty="{ component }">
      <div class="custom-empty">
        <YcIcon-inbox />
        <p>暂无{{ getComponentName(component) }}数据</p>
      </div>
    </template>
    
    <YcSelect placeholder="请选择" style="width: 200px;">
      <!-- 无选项 -->
    </YcSelect>
  </YcConfigProvider>
</template>

<script setup>
const getComponentName = (component) => {
  const nameMap = {
    Select: '选择',
    List: '列表',
    Transfer: '穿梭框'
  };
  return nameMap[component] || '数据';
};
</script>

<style scoped>
.custom-empty {
  text-align: center;
  color: #999;
}

.custom-empty .yc-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
</style>
```

## 完整应用示例

一个完整的应用配置示例。

```vue
<template>
  <YcConfigProvider
    size="medium"
    :z-index="1000"
    popup-container="body"
    :update-at-scroll="true"
    :scroll-to-close="false"
    :exchange-time="true"
  >
    <div class="app">
      <header class="app-header">
        <h1>我的应用</h1>
        <YcButton type="primary">登录</YcButton>
      </header>
      
      <main class="app-main">
        <YcSpace direction="vertical" size="large">
          <YcInput placeholder="请输入用户名" />
          <YcSelect placeholder="请选择角色">
            <YcOption value="admin">管理员</YcOption>
            <YcOption value="user">普通用户</YcOption>
          </YcSelect>
          <YcButton type="primary">提交</YcButton>
        </YcSpace>
      </main>
    </div>
  </YcConfigProvider>
</template>

<style scoped>
.app {
  padding: 24px;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.app-main {
  max-width: 600px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zIndex | 弹窗组件的默认层级 | `number` | `1001` |
| size | 组件的默认尺寸 | `Size` | `'medium'` |
| popupContainer | 弹窗的挂载容器 | `PopupContainer` | `'body'` |
| updateAtScroll | 滚动时是否更新弹窗位置 | `boolean` | `true` |
| scrollToClose | 滚动时是否关闭弹窗 | `boolean` | `false` |
| exchangeTime | 时间选择器是否支持时间交换 | `boolean` | `true` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 子组件内容 | - |
| loading | 自定义加载状态 | - |
| empty | 自定义空状态 | `{ component: EmptyComponent }` |

### Types

```typescript
type EmptyComponent = 'Select' | 'List' | 'Transfer';
```

## 注意事项

1. ConfigProvider 应该包裹在应用的最外层或需要配置的区域
2. 内层配置会覆盖外层配置，实现局部定制
3. 弹窗容器配置会影响所有弹窗组件的挂载位置
4. 滚动行为配置主要影响下拉菜单、选择器等弹窗组件

## 样式定制

ConfigProvider 本身不提供样式类，它通过 provide/inject 机制向子组件提供配置信息。子组件会根据这些配置自动调整样式和行为。
