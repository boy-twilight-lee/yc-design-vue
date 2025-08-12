# Menu 导航菜单

为网站提供导航功能的菜单列表。

## 何时使用

- 需要为网站提供导航时
- 需要展示多级菜单结构时
- 需要响应式菜单时

## 基础用法

最简单的菜单用法。

```vue
<template>
  <YcMenu :selected-keys="selectedKeys" @menu-item-click="onMenuItemClick">
    <YcMenuItem key="home">
      <template #icon>
        <YcIcon-home />
      </template>
      首页
    </YcMenuItem>
    <YcMenuItem key="user">
      <template #icon>
        <YcIcon-user />
      </template>
      用户管理
    </YcMenuItem>
    <YcMenuItem key="setting">
      <template #icon>
        <YcIcon-setting />
      </template>
      系统设置
    </YcMenuItem>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');

const onMenuItemClick = (key) => {
  selectedKeys.value = key;
  console.log('选中菜单项:', key);
};
</script>
```

## 菜单模式

通过 `mode` 属性设置菜单模式。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>垂直菜单</h4>
      <YcMenu mode="vertical" :selected-keys="selectedKeys">
        <YcMenuItem key="home">首页</YcMenuItem>
        <YcMenuItem key="user">用户管理</YcMenuItem>
        <YcMenuItem key="setting">系统设置</YcMenuItem>
      </YcMenu>
    </div>
    
    <div>
      <h4>水平菜单</h4>
      <YcMenu mode="horizontal" :selected-keys="selectedKeys">
        <YcMenuItem key="home">首页</YcMenuItem>
        <YcMenuItem key="user">用户管理</YcMenuItem>
        <YcMenuItem key="setting">系统设置</YcMenuItem>
      </YcMenu>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
</script>
```

## 子菜单

通过 `YcSubMenu` 组件创建多级菜单。

```vue
<template>
  <YcMenu 
    mode="vertical" 
    :selected-keys="selectedKeys"
    :open-keys="openKeys"
    @menu-item-click="onMenuItemClick"
    @sub-menu-click="onSubMenuClick"
  >
    <YcMenuItem key="home">
      <template #icon>
        <YcIcon-home />
      </template>
      首页
    </YcMenuItem>
    
    <YcSubMenu key="user" title="用户管理">
      <template #icon>
        <YcIcon-user />
      </template>
      <YcMenuItem key="user-list">用户列表</YcMenuItem>
      <YcMenuItem key="user-add">添加用户</YcMenuItem>
      <YcMenuItem key="user-role">角色管理</YcMenuItem>
    </YcSubMenu>
    
    <YcSubMenu key="system" title="系统管理">
      <template #icon>
        <YcIcon-setting />
      </template>
      <YcMenuItem key="system-config">系统配置</YcMenuItem>
      <YcMenuItem key="system-log">系统日志</YcMenuItem>
    </YcSubMenu>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
const openKeys = ref(['user']);

const onMenuItemClick = (key) => {
  selectedKeys.value = key;
  console.log('选中菜单项:', key);
};

const onSubMenuClick = (key, openKeys) => {
  console.log('子菜单点击:', key, openKeys);
};
</script>
```

## 菜单项分组

通过 `YcMenuItemGroup` 组件对菜单项进行分组。

```vue
<template>
  <YcMenu mode="vertical" :selected-keys="selectedKeys">
    <YcMenuItemGroup title="基础功能">
      <YcMenuItem key="home">
        <template #icon>
          <YcIcon-home />
        </template>
        首页
      </YcMenuItem>
      <YcMenuItem key="dashboard">
        <template #icon>
          <YcIcon-dashboard />
        </template>
        仪表盘
      </YcMenuItem>
    </YcMenuItemGroup>
    
    <YcMenuItemGroup title="用户管理">
      <YcMenuItem key="user-list">
        <template #icon>
          <YcIcon-user />
        </template>
        用户列表
      </YcMenuItem>
      <YcMenuItem key="user-add">
        <template #icon>
          <YcIcon-user-add />
        </template>
        添加用户
      </YcMenuItem>
    </YcMenuItemGroup>
    
    <YcMenuItemGroup title="系统设置">
      <YcMenuItem key="setting">
        <template #icon>
          <YcIcon-setting />
        </template>
        系统配置
      </YcMenuItem>
      <YcMenuItem key="log">
        <template #icon>
          <YcIcon-file-text />
        </template>
        系统日志
      </YcMenuItem>
    </YcMenuItemGroup>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
</script>
```

## 折叠菜单

通过 `collapsed` 属性启用菜单折叠功能。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcButton @click="toggleCollapsed">
      {{ collapsed ? '展开菜单' : '折叠菜单' }}
    </YcButton>
    
    <YcMenu 
      mode="vertical" 
      :collapsed="collapsed"
      :selected-keys="selectedKeys"
      :open-keys="openKeys"
    >
      <YcMenuItem key="home">
        <template #icon>
          <YcIcon-home />
        </template>
        <span v-show="!collapsed">首页</span>
      </YcMenuItem>
      
      <YcSubMenu key="user" title="用户管理">
        <template #icon>
          <YcIcon-user />
        </template>
        <span v-show="!collapsed">用户管理</span>
        <YcMenuItem key="user-list">用户列表</YcMenuItem>
        <YcMenuItem key="user-add">添加用户</YcMenuItem>
      </YcSubMenu>
      
      <YcSubMenu key="system" title="系统管理">
        <template #icon>
          <YcIcon-setting />
        </template>
        <span v-show="!collapsed">系统管理</span>
        <YcMenuItem key="system-config">系统配置</YcMenuItem>
        <YcMenuItem key="system-log">系统日志</YcMenuItem>
      </YcSubMenu>
    </YcMenu>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const collapsed = ref(false);
const selectedKeys = ref('home');
const openKeys = ref(['user']);

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>
```

## 手风琴模式

通过 `accordion` 属性启用手风琴模式，同时只能展开一个子菜单。

```vue
<template>
  <YcMenu 
    mode="vertical" 
    :selected-keys="selectedKeys"
    :open-keys="openKeys"
    :accordion="true"
    @sub-menu-click="onSubMenuClick"
  >
    <YcMenuItem key="home">
      <template #icon>
        <YcIcon-home />
      </template>
      首页
    </YcMenuItem>
    
    <YcSubMenu key="user" title="用户管理">
      <template #icon>
        <YcIcon-user />
      </template>
      <YcMenuItem key="user-list">用户列表</YcMenuItem>
      <YcMenuItem key="user-add">添加用户</YcMenuItem>
    </YcSubMenu>
    
    <YcSubMenu key="system" title="系统管理">
      <template #icon>
        <YcIcon-setting />
      </template>
      <YcMenuItem key="system-config">系统配置</YcMenuItem>
      <YcMenuItem key="system-log">系统日志</YcMenuItem>
    </YcSubMenu>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
const openKeys = ref(['user']);

const onSubMenuClick = (key, openKeys) => {
  console.log('子菜单点击:', key, openKeys);
};
</script>
```

## 菜单主题

通过 `theme` 属性设置菜单主题。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>深色主题</h4>
      <YcMenu 
        mode="vertical" 
        theme="dark"
        :selected-keys="selectedKeys"
      >
        <YcMenuItem key="home">首页</YcMenuItem>
        <YcMenuItem key="user">用户管理</YcMenuItem>
        <YcMenuItem key="setting">系统设置</YcMenuItem>
      </YcMenu>
    </div>
    
    <div>
      <h4>浅色主题</h4>
      <YcMenu 
        mode="vertical" 
        theme="light"
        :selected-keys="selectedKeys"
      >
        <YcMenuItem key="home">首页</YcMenuItem>
        <YcMenuItem key="user">用户管理</YcMenuItem>
        <YcMenuItem key="setting">系统设置</YcMenuItem>
      </YcMenu>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
</script>
```

## 禁用菜单项

通过 `disabled` 属性禁用菜单项。

```vue
<template>
  <YcMenu mode="vertical" :selected-keys="selectedKeys">
    <YcMenuItem key="home">
      <template #icon>
        <YcIcon-home />
      </template>
      首页
    </YcMenuItem>
    
    <YcMenuItem key="user" disabled>
      <template #icon>
        <YcIcon-user />
      </template>
      用户管理（已禁用）
    </YcMenuItem>
    
    <YcMenuItem key="setting">
      <template #icon>
        <YcIcon-setting />
      </template>
      系统设置
    </YcMenuItem>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
</script>
```

## 自定义图标

通过插槽自定义菜单项的图标和后缀。

```vue
<template>
  <YcMenu mode="vertical" :selected-keys="selectedKeys">
    <YcMenuItem key="home">
      <template #icon>
        <YcIcon-home style="color: #1890ff;" />
      </template>
      <template #suffix>
        <YcBadge :count="5" />
      </template>
      首页
    </YcMenuItem>
    
    <YcMenuItem key="user">
      <template #icon>
        <YcIcon-user style="color: #52c41a;" />
      </template>
      <template #suffix>
        <YcTag color="green">新</YcTag>
      </template>
      用户管理
    </YcMenuItem>
    
    <YcMenuItem key="setting">
      <template #icon>
        <YcIcon-setting style="color: #faad14;" />
      </template>
      <template #suffix>
        <YcIcon-lock style="color: #666;" />
      </template>
      系统设置
    </YcMenuItem>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const selectedKeys = ref('home');
</script>
```

## 响应式菜单

通过 `breakpoint` 属性设置响应式断点。

```vue
<template>
  <YcMenu 
    mode="vertical" 
    :collapsed="collapsed"
    :selected-keys="selectedKeys"
    :open-keys="openKeys"
    breakpoint="lg"
    @collapse="onCollapse"
  >
    <YcMenuItem key="home">
      <template #icon>
        <YcIcon-home />
      </template>
      <span v-show="!collapsed">首页</span>
    </YcMenuItem>
    
    <YcSubMenu key="user" title="用户管理">
      <template #icon>
        <YcIcon-user />
      </template>
      <span v-show="!collapsed">用户管理</span>
      <YcMenuItem key="user-list">用户列表</YcMenuItem>
      <YcMenuItem key="user-add">添加用户</YcMenuItem>
    </YcSubMenu>
    
    <YcSubMenu key="system" title="系统管理">
      <template #icon>
        <YcIcon-setting />
      </template>
      <span v-show="!collapsed">系统管理</span>
      <YcMenuItem key="system-config">系统配置</YcMenuItem>
      <YcMenuItem key="system-log">系统日志</YcMenuItem>
    </YcSubMenu>
  </YcMenu>
</template>

<script setup>
import { ref } from 'vue';

const collapsed = ref(false);
const selectedKeys = ref('home');
const openKeys = ref(['user']);

const onCollapse = (collapsed, type) => {
  console.log('菜单折叠:', collapsed, type);
};
</script>
```

## 完整示例

一个完整的菜单使用示例。

```vue
<template>
  <div class="page">
    <h2>导航菜单示例</h2>
    
    <div class="menu-container">
      <YcMenu 
        mode="vertical" 
        :collapsed="collapsed"
        :selected-keys="selectedKeys"
        :open-keys="openKeys"
        :accordion="true"
        theme="dark"
        @menu-item-click="onMenuItemClick"
        @sub-menu-click="onSubMenuClick"
        @collapse="onCollapse"
      >
        <!-- 基础功能 -->
        <YcMenuItemGroup title="基础功能">
          <YcMenuItem key="home">
            <template #icon>
              <YcIcon-home />
            </template>
            <span v-show="!collapsed">首页</span>
          </YcMenuItem>
          
          <YcMenuItem key="dashboard">
            <template #icon>
              <YcIcon-dashboard />
            </template>
            <span v-show="!collapsed">仪表盘</span>
          </YcMenuItem>
        </YcMenuItemGroup>
        
        <!-- 用户管理 -->
        <YcSubMenu key="user" title="用户管理">
          <template #icon>
            <YcIcon-user />
          </template>
          <span v-show="!collapsed">用户管理</span>
          
          <YcMenuItem key="user-list">
            <template #icon>
              <YcIcon-user />
            </template>
            用户列表
          </YcMenuItem>
          
          <YcMenuItem key="user-add">
            <template #icon>
              <YcIcon-user-add />
            </template>
            添加用户
          </YcMenuItem>
          
          <YcMenuItem key="user-role">
            <template #icon>
              <YcIcon-team />
            </template>
            角色管理
          </YcMenuItem>
        </YcSubMenu>
        
        <!-- 内容管理 -->
        <YcSubMenu key="content" title="内容管理">
          <template #icon>
            <YcIcon-file-text />
          </template>
          <span v-show="!collapsed">内容管理</span>
          
          <YcMenuItem key="article-list">
            <template #icon>
              <YcIcon-file-text />
            </template>
            文章列表
          </YcMenuItem>
          
          <YcMenuItem key="article-add">
            <template #icon>
              <YcIcon-plus />
            </template>
            发布文章
          </YcMenuItem>
          
          <YcMenuItem key="category">
            <template #icon>
              <YcIcon-folder />
            </template>
            分类管理
          </YcMenuItem>
        </YcSubMenu>
        
        <!-- 系统管理 -->
        <YcSubMenu key="system" title="系统管理">
          <template #icon>
            <YcIcon-setting />
          </template>
          <span v-show="!collapsed">系统管理</span>
          
          <YcMenuItem key="system-config">
            <template #icon>
              <YcIcon-setting />
            </template>
            系统配置
          </YcMenuItem>
          
          <YcMenuItem key="system-log">
            <template #icon>
              <YcIcon-file-text />
            </template>
            系统日志
          </YcMenuItem>
          
          <YcMenuItem key="backup">
            <template #icon>
              <YcIcon-save />
            </template>
            数据备份
          </YcMenuItem>
        </YcSubMenu>
        
        <!-- 帮助中心 -->
        <YcMenuItem key="help">
          <template #icon>
            <YcIcon-question-circle />
          </template>
          <span v-show="!collapsed">帮助中心</span>
        </YcMenuItem>
      </YcMenu>
    </div>
    
    <div class="content-area">
      <div class="content-header">
        <YcButton @click="toggleCollapsed" style="margin-right: 16px;">
          {{ collapsed ? '展开菜单' : '折叠菜单' }}
        </YcButton>
        <span>当前选中: {{ selectedKeys }}</span>
      </div>
      
      <div class="content-body">
        <h3>{{ getCurrentPageTitle() }}</h3>
        <p>这是 {{ getCurrentPageTitle() }} 页面的内容...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const collapsed = ref(false);
const selectedKeys = ref('home');
const openKeys = ref(['user']);

const pageTitleMap = {
  home: '首页',
  dashboard: '仪表盘',
  'user-list': '用户列表',
  'user-add': '添加用户',
  'user-role': '角色管理',
  'article-list': '文章列表',
  'article-add': '发布文章',
  category: '分类管理',
  'system-config': '系统配置',
  'system-log': '系统日志',
  backup: '数据备份',
  help: '帮助中心'
};

const getCurrentPageTitle = () => {
  return pageTitleMap[selectedKeys.value] || '未知页面';
};

const onMenuItemClick = (key) => {
  selectedKeys.value = key;
  console.log('选中菜单项:', key);
};

const onSubMenuClick = (key, openKeys) => {
  console.log('子菜单点击:', key, openKeys);
};

const onCollapse = (collapsed, type) => {
  console.log('菜单折叠:', collapsed, type);
};

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped>
.page {
  display: flex;
  height: 100vh;
}

.menu-container {
  width: 256px;
  background: #001529;
  transition: width 0.2s;
}

.menu-container.collapsed {
  width: 80px;
}

.content-area {
  flex: 1;
  padding: 24px;
  background: #f0f2f5;
}

.content-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px;
  background: white;
  border-radius: 6px;
}

.content-body {
  background: white;
  padding: 24px;
  border-radius: 6px;
  min-height: 400px;
}

.content-body h3 {
  margin-top: 0;
  margin-bottom: 16px;
}
</style>
```

## API

### Menu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题 | `Theme` | `'light'` |
| mode | 菜单模式 | `MenuMode` | `'vertical'` |
| levelIndent | 缩进宽度 | `number` | `24` |
| autoOpen | 是否自动展开 | `boolean` | `false` |
| collapsed | 是否折叠 | `boolean` | - |
| defaultCollapsed | 默认是否折叠 | `boolean` | `false` |
| collapsedWidth | 折叠时宽度 | `number \| string` | `80` |
| accordion | 是否启用手风琴模式 | `boolean` | `false` |
| showCollapseButton | 是否显示折叠按钮 | `boolean` | `false` |
| selectedKeys | 选中的菜单项 | `string` | - |
| defaultSelectedKeys | 默认选中的菜单项 | `string` | - |
| openKeys | 展开的子菜单 | `string[]` | - |
| defaultOpenKeys | 默认展开的子菜单 | `string[]` | - |
| breakpoint | 响应式断点 | `BreakpointName` | - |
| triggerProps | 触发器属性 | `TriggerProps` | - |
| tooltipProps | 提示框属性 | `TooltipProps` | - |
| autoOpenSelected | 是否自动展开选中项 | `boolean` | `false` |
| autoScrollIntoView | 是否自动滚动到视图 | `boolean` | `false` |
| scrollConfig | 滚动配置 | `ScrollIntoViewOptions` | - |
| popupMaxHeight | 弹出菜单最大高度 | `PopupMaxHeight` | - |

### SubMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| path | 路径 | `string` | - |
| title | 标题 | `string` | - |
| selectable | 是否可选 | `boolean` | `false` |
| popup | 是否弹出显示 | `boolean` | `false` |
| popupMaxHeight | 弹出菜单最大高度 | `PopupMaxHeight` | - |

### MenuItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| path | 路径 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:selectedKeys | 选中菜单项变化时触发 | `(value: string)` |
| update:openKeys | 展开子菜单变化时触发 | `(value: string[])` |
| update:collapsed | 折叠状态变化时触发 | `(value: boolean)` |
| collapse | 折叠状态变化时触发 | `(collapsed: boolean, type: 'clickTrigger' \| 'responsive')` |
| menu-item-click | 菜单项点击时触发 | `(key: string)` |
| sub-menu-click | 子菜单点击时触发 | `(key: string, openKeys: string[])` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 菜单内容 | - |
| title | 标题内容 | - |
| icon | 图标 | - |
| suffix | 后缀内容 | - |
| expand-icon-down | 展开图标 | - |

## 注意事项

1. 菜单组件支持多种模式和主题
2. 可以通过插槽自定义图标和内容
3. 支持响应式设计和折叠功能
4. 手风琴模式确保同时只展开一个子菜单

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-menu {
  /* 菜单容器 */
}

.yc-menu-item {
  /* 菜单项 */
}

.yc-sub-menu {
  /* 子菜单 */
}

.yc-menu-item-group {
  /* 菜单项分组 */
}
```
