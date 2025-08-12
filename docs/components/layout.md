# Layout 布局

页面整体布局框架。

## 何时使用

- 需要页面整体布局时
- 需要侧边栏导航时
- 需要响应式布局时

## 基础用法

最简单的布局，包含头部、内容区和底部。

```vue
<template>
  <YcLayout>
    <YcLayoutHeader>Header</YcLayoutHeader>
    <YcLayoutContent>Content</YcLayoutContent>
    <YcLayoutFooter>Footer</YcLayoutFooter>
  </YcLayout>
</template>
```

## 侧边栏布局

包含侧边栏的布局。

```vue
<template>
  <YcLayout>
    <YcLayoutSider>Sider</YcLayoutSider>
    <YcLayout>
      <YcLayoutHeader>Header</YcLayoutHeader>
      <YcLayoutContent>Content</YcLayoutContent>
      <YcLayoutFooter>Footer</YcLayoutFooter>
    </YcLayout>
  </YcLayout>
</template>
```

## 顶部侧边栏布局

侧边栏在顶部的布局。

```vue
<template>
  <YcLayout>
    <YcLayoutHeader>Header</YcLayoutHeader>
    <YcLayout>
      <YcLayoutSider>Sider</YcLayoutSider>
      <YcLayoutContent>Content</YcLayoutContent>
    </YcLayout>
    <YcLayoutFooter>Footer</YcLayoutFooter>
  </YcLayout>
</template>
```

## 可折叠侧边栏

通过 `collapsible` 属性启用侧边栏折叠功能。

```vue
<template>
  <YcLayout>
    <YcLayoutSider 
      v-model:collapsed="collapsed"
      :collapsible="true"
    >
      <div class="sider-content">
        <div class="logo">Logo</div>
        <YcMenu mode="inline" :collapsed="collapsed">
          <YcMenuItem key="1">
            <YcIcon-home />
            <span>首页</span>
          </YcMenuItem>
          <YcMenuItem key="2">
            <YcIcon-user />
            <span>用户</span>
          </YcMenuItem>
          <YcMenuItem key="3">
            <YcIcon-setting />
            <span>设置</span>
          </YcMenuItem>
        </YcMenu>
      </div>
    </YcLayoutSider>
    
    <YcLayout>
      <YcLayoutHeader>
        <YcButton 
          type="text" 
          @click="collapsed = !collapsed"
        >
          <YcIcon-menu />
        </YcButton>
      </YcLayoutHeader>
      <YcLayoutContent>Content</YcLayoutContent>
    </YcLayout>
  </YcLayout>
</template>

<script setup>
import { ref } from 'vue';

const collapsed = ref(false);
</script>

<style scoped>
.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
</style>
```

## 自定义触发器

通过 `trigger` 插槽自定义折叠触发器。

```vue
<template>
  <YcLayout>
    <YcLayoutSider 
      v-model:collapsed="collapsed"
      :collapsible="true"
    >
      <div class="sider-content">
        <div class="logo">Logo</div>
        <YcMenu mode="inline" :collapsed="collapsed">
          <YcMenuItem key="1">首页</YcMenuItem>
          <YcMenuItem key="2">用户</YcMenuItem>
          <YcMenuItem key="3">设置</YcMenuItem>
        </YcMenu>
      </div>
      
      <template #trigger="{ collapsed }">
        <div class="custom-trigger">
          <YcIcon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </div>
      </template>
    </YcLayoutSider>
    
    <YcLayout>
      <YcLayoutHeader>Header</YcLayoutHeader>
      <YcLayoutContent>Content</YcLayoutContent>
    </YcLayout>
  </YcLayout>
</template>

<script setup>
import { ref } from 'vue';

const collapsed = ref(false);
</script>

<style scoped>
.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.custom-trigger {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  cursor: pointer;
}

.custom-trigger:hover {
  background: #1890ff;
}
</style>
```

## 响应式侧边栏

通过 `breakpoint` 属性设置响应式断点。

```vue
<template>
  <YcLayout>
    <YcLayoutSider 
      v-model:collapsed="collapsed"
      :collapsible="true"
      breakpoint="lg"
      @breakpoint="onBreakpoint"
    >
      <div class="sider-content">
        <div class="logo">Logo</div>
        <YcMenu mode="inline" :collapsed="collapsed">
          <YcMenuItem key="1">首页</YcMenuItem>
          <YcMenuItem key="2">用户</YcMenuItem>
          <YcMenuItem key="3">设置</YcMenuItem>
        </YcMenu>
      </div>
    </YcLayoutSider>
    
    <YcLayout>
      <YcLayoutHeader>
        <YcButton 
          type="text" 
          @click="collapsed = !collapsed"
        >
          <YcIcon-menu />
        </YcButton>
      </YcLayoutHeader>
      <YcLayoutContent>Content</YcLayoutContent>
    </YcLayout>
  </YcLayout>
</template>

<script setup>
import { ref } from 'vue';

const collapsed = ref(false);

const onBreakpoint = (collapsed) => {
  console.log('响应式断点触发:', collapsed);
};
</script>

<style scoped>
.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
</style>
```

## 侧边栏主题

通过 `theme` 属性设置侧边栏主题。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>深色主题</h4>
      <YcLayout style="height: 200px;">
        <YcLayoutSider theme="dark">
          <div class="sider-content">
            <div class="logo">Logo</div>
            <YcMenu mode="inline" theme="dark">
              <YcMenuItem key="1">首页</YcMenuItem>
              <YcMenuItem key="2">用户</YcMenuItem>
              <YcMenuItem key="3">设置</YcMenuItem>
            </YcMenu>
          </div>
        </YcLayoutSider>
        <YcLayoutContent>Content</YcLayoutContent>
      </YcLayout>
    </div>
    
    <div>
      <h4>浅色主题</h4>
      <YcLayout style="height: 200px;">
        <YcLayoutSider theme="light">
          <div class="sider-content">
            <div class="logo light">Logo</div>
            <YcMenu mode="inline" theme="light">
              <YcMenuItem key="1">首页</YcMenuItem>
              <YcMenuItem key="2">用户</YcMenuItem>
              <YcMenuItem key="3">设置</YcMenuItem>
            </YcMenu>
          </div>
        </YcLayoutSider>
        <YcLayoutContent>Content</YcLayoutContent>
      </YcLayout>
    </div>
  </YcSpace>
</template>

<style scoped>
.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.logo.light {
  background: #f0f0f0;
  color: #333;
}
</style>
```

## 可调整尺寸侧边栏

通过 `resizeDirections` 属性启用尺寸调整功能。

```vue
<template>
  <YcLayout>
    <YcLayoutSider 
      :resize-directions="['right']"
      :width="siderWidth"
      @resize="onResize"
    >
      <div class="sider-content">
        <div class="logo">Logo</div>
        <YcMenu mode="inline">
          <YcMenuItem key="1">首页</YcMenuItem>
          <YcMenuItem key="2">用户</YcMenuItem>
          <YcMenuItem key="3">设置</YcMenuItem>
        </YcMenu>
      </div>
    </YcLayoutSider>
    
    <YcLayout>
      <YcLayoutHeader>Header</YcLayoutHeader>
      <YcLayoutContent>Content</YcLayoutContent>
    </YcLayout>
  </YcLayout>
</template>

<script setup>
import { ref } from 'vue';

const siderWidth = ref(200);

const onResize = (width) => {
  siderWidth.value = width;
};
</script>

<style scoped>
.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
</style>
```

## 完整示例

一个完整的布局示例。

```vue
<template>
  <YcLayout class="app-layout">
    <!-- 侧边栏 -->
    <YcLayoutSider 
      v-model:collapsed="collapsed"
      :collapsible="true"
      theme="dark"
      breakpoint="lg"
    >
      <div class="sider-content">
        <div class="logo">
          <YcIcon-setting style="margin-right: 8px;" />
          <span v-show="!collapsed">管理系统</span>
        </div>
        
        <YcMenu 
          mode="inline" 
          theme="dark"
          :collapsed="collapsed"
          :selected-keys="selectedKeys"
          @select="onMenuSelect"
        >
          <YcMenuItem key="dashboard">
            <YcIcon-dashboard />
            <span>仪表盘</span>
          </YcMenuItem>
          <YcMenuItem key="users">
            <YcIcon-user />
            <span>用户管理</span>
          </YcMenuItem>
          <YcMenuItem key="settings">
            <YcIcon-setting />
            <span>系统设置</span>
          </YcMenuItem>
        </YcMenu>
      </div>
    </YcLayoutSider>
    
    <!-- 主内容区 -->
    <YcLayout>
      <!-- 头部 -->
      <YcLayoutHeader class="app-header">
        <div class="header-left">
          <YcButton 
            type="text" 
            @click="collapsed = !collapsed"
            class="trigger-btn"
          >
            <YcIcon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
          </YcButton>
          <h1 class="app-title">管理系统</h1>
        </div>
        
        <div class="header-right">
          <YcSpace>
            <YcButton type="text">
              <YcIcon-bell />
            </YcButton>
            <YcButton type="text">
              <YcIcon-user />
            </YcButton>
          </YcSpace>
        </div>
      </YcLayoutHeader>
      
      <!-- 内容区 -->
      <YcLayoutContent class="app-content">
        <div class="content-wrapper">
          <YcBreadcrumb style="margin-bottom: 16px;">
            <YcBreadcrumbItem>首页</YcBreadcrumbItem>
            <YcBreadcrumbItem>{{ currentPage }}</YcBreadcrumbItem>
          </YcBreadcrumb>
          
          <div class="page-content">
            <h2>{{ currentPage }}</h2>
            <p>这是 {{ currentPage }} 页面的内容...</p>
          </div>
        </div>
      </YcLayoutContent>
      
      <!-- 底部 -->
      <YcLayoutFooter class="app-footer">
        <div class="footer-content">
          <p>&copy; 2024 管理系统. All rights reserved.</p>
        </div>
      </YcLayoutFooter>
    </YcLayout>
  </YcLayout>
</template>

<script setup>
import { ref, computed } from 'vue';

const collapsed = ref(false);
const selectedKeys = ref(['dashboard']);

const currentPage = computed(() => {
  const key = selectedKeys.value[0];
  const pageMap = {
    dashboard: '仪表盘',
    users: '用户管理',
    settings: '系统设置'
  };
  return pageMap[key] || '首页';
});

const onMenuSelect = ({ key }) => {
  selectedKeys.value = [key];
};
</script>

<style scoped>
.app-layout {
  height: 100vh;
}

.sider-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001529;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 0 16px;
}

.app-header {
  background: white;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-left {
  display: flex;
  align-items: center;
}

.trigger-btn {
  margin-right: 16px;
}

.app-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.app-content {
  padding: 24px;
  background: #f0f2f5;
}

.content-wrapper {
  background: white;
  padding: 24px;
  border-radius: 6px;
  min-height: 400px;
}

.page-content h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

.app-footer {
  text-align: center;
  background: white;
  border-top: 1px solid #f0f0f0;
}

.footer-content {
  color: #666;
}
</style>
```

## API

### Layout Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasSider | 是否包含侧边栏 | `boolean` | - |

### LayoutSider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题 | `Theme` | `'dark'` |
| collapsed | 是否折叠 | `boolean` | - |
| defaultCollapsed | 默认是否折叠 | `boolean` | `false` |
| collapsible | 是否可折叠 | `boolean` | `false` |
| width | 宽度 | `number` | `200` |
| collapsedWidth | 折叠时宽度 | `number` | `80` |
| reverseArrow | 是否反转箭头 | `boolean` | `false` |
| breakpoint | 响应式断点 | `BreakpointName` | - |
| hideTrigger | 是否隐藏触发器 | `boolean` | `false` |
| resizeDirections | 可调整尺寸的方向 | `ResizeDirections` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:collapsed | 折叠状态变化时触发 | `(collapsed: boolean)` |
| collapse | 折叠状态变化时触发 | `(collapsed: boolean, type: 'clickTrigger' \| 'responsive')` |
| breakpoint | 响应式断点触发时触发 | `(collapsed: boolean)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 布局内容 | - |
| trigger | 自定义触发器 | `{ collapsed: boolean }` |

## 注意事项

1. Layout 组件会自动检测是否包含侧边栏
2. 侧边栏支持响应式折叠和手动折叠
3. 可以通过插槽自定义折叠触发器
4. 支持多种主题和尺寸调整

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-layout {
  /* 布局容器 */
}

.yc-layout-header {
  /* 头部 */
}

.yc-layout-content {
  /* 内容区 */
}

.yc-layout-footer {
  /* 底部 */
}

.yc-layout-sider {
  /* 侧边栏 */
}
```
