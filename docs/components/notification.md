# Notification 通知提醒

全局展示通知提醒信息。

## 何时使用

- 需要向用户显示重要信息时
- 需要显示操作结果时
- 需要显示系统通知时

## 基础用法

最简单的用法，通过 `Notification.info()` 等方法调用。

```vue
<template>
  <YcSpace>
    <YcButton @click="showInfo">显示信息</YcButton>
    <YcButton @click="showSuccess">显示成功</YcButton>
    <YcButton @click="showWarning">显示警告</YcButton>
    <YcButton @click="showError">显示错误</YcButton>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';

const showInfo = () => {
  Notification.info({
    title: '信息通知',
    content: '这是一条信息通知'
  });
};

const showSuccess = () => {
  Notification.success({
    title: '成功通知',
    content: '操作成功完成！'
  });
};

const showWarning = () => {
  Notification.warning({
    title: '警告通知',
    content: '请注意这个警告信息'
  });
};

const showError = () => {
  Notification.error({
    title: '错误通知',
    content: '操作失败，请重试'
  });
};
</script>
```

## 通知类型

Notification 组件支持多种通知类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showInfo">信息通知</YcButton>
      <YcButton @click="showSuccess">成功通知</YcButton>
      <YcButton @click="showWarning">警告通知</YcButton>
      <YcButton @click="showError">错误通知</YcButton>
    </YcSpace>
    
    <div>
      <h4>通知类型说明：</h4>
      <ul>
        <li><strong>info</strong>：信息通知，蓝色样式</li>
        <li><strong>success</strong>：成功通知，绿色样式</li>
        <li><strong>warning</strong>：警告通知，橙色样式</li>
        <li><strong>error</strong>：错误通知，红色样式</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';

const showInfo = () => {
  Notification.info({
    title: '信息通知',
    content: '这是一条信息通知'
  });
};

const showSuccess = () => {
  Notification.success({
    title: '成功通知',
    content: '这是一条成功通知'
  });
};

const showWarning = () => {
  Notification.warning({
    title: '警告通知',
    content: '这是一条警告通知'
  });
};

const showError = () => {
  Notification.error({
    title: '错误通知',
    content: '这是一条错误通知'
  });
};
</script>
```

## 通知位置

通过 `position` 属性设置通知显示位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace wrap>
      <YcButton @click="showTopLeft">左上角</YcButton>
      <YcButton @click="showTopRight">右上角</YcButton>
      <YcButton @click="showBottomLeft">左下角</YcButton>
      <YcButton @click="showBottomRight">右下角</YcButton>
    </YcSpace>
    
    <div>
      <h4>位置说明：</h4>
      <ul>
        <li><strong>topLeft</strong>：页面左上角</li>
        <li><strong>topRight</strong>：页面右上角（默认）</li>
        <li><strong>bottomLeft</strong>：页面左下角</li>
        <li><strong>bottomRight</strong>：页面右下角</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';

const showTopLeft = () => {
  Notification.info({
    title: '左上角通知',
    content: '这条通知显示在页面左上角',
    position: 'topLeft'
  });
};

const showTopRight = () => {
  Notification.info({
    title: '右上角通知',
    content: '这条通知显示在页面右上角',
    position: 'topRight'
  });
};

const showBottomLeft = () => {
  Notification.info({
    title: '左下角通知',
    content: '这条通知显示在页面左下角',
    position: 'bottomLeft'
  });
};

const showBottomRight = () => {
  Notification.info({
    title: '右下角通知',
    content: '这条通知显示在页面右下角',
    position: 'bottomRight'
  });
};
</script>
```

## 自定义图标

通过 `icon` 属性自定义通知图标。

```vue
<template>
  <YcSpace>
    <YcButton @click="showCustomIcon">自定义图标</YcButton>
    <YcButton @click="showNoIcon">无图标</YcButton>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';
import { h } from 'vue';

const showCustomIcon = () => {
  Notification.info({
    title: '自定义图标通知',
    content: '这是一条带自定义图标的通知',
    icon: () => h('span', { style: 'color: #1890ff; font-size: 16px;' }, '⭐')
  });
};

const showNoIcon = () => {
  Notification.info({
    title: '无图标通知',
    content: '这是一条不带图标的通知',
    showIcon: false
  });
};
</script>
```

## 关闭控制

通过 `closable` 和 `duration` 属性控制通知的关闭行为。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showClosable">可关闭通知</YcButton>
      <YcButton @click="showAutoClose">自动关闭通知</YcButton>
      <YcButton @click="showPersistent">持久通知</YcButton>
    </YcSpace>
    
    <div>
      <h4>关闭控制说明：</h4>
      <ul>
        <li><strong>closable: true</strong>：显示关闭按钮，用户可手动关闭</li>
        <li><strong>duration: 4500</strong>：4.5秒后自动关闭（默认）</li>
        <li><strong>duration: 0</strong>：不自动关闭，需要手动关闭</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';

const showClosable = () => {
  Notification.info({
    title: '可关闭通知',
    content: '这是一条可关闭的通知',
    closable: true,
    duration: 0
  });
};

const showAutoClose = () => {
  Notification.success({
    title: '自动关闭通知',
    content: '这条通知将在3秒后自动关闭',
    duration: 3000
  });
};

const showPersistent = () => {
  Notification.warning({
    title: '持久通知',
    content: '这是一条持久通知，不会自动关闭',
    duration: 0,
    closable: true
  });
};
</script>
```

## 通知内容

支持字符串和复杂内容的通知。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showSimpleNotification">简单文本</YcButton>
      <YcButton @click="showRichNotification">富文本内容</YcButton>
      <YcButton @click="showCustomNotification">自定义组件</YcButton>
    </YcSpace>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';
import { h } from 'vue';

const showSimpleNotification = () => {
  Notification.info({
    title: '简单通知',
    content: '这是一条简单的文本通知'
  });
};

const showRichNotification = () => {
  Notification.success({
    title: '富文本通知',
    content: h('div', [
      h('h4', { style: 'margin: 0 0 8px 0;' }, '操作成功'),
      h('p', { style: 'margin: 0 0 4px 0;' }, '您的请求已成功处理'),
      h('p', { style: 'color: #666; font-size: 12px; margin: 0;' }, '时间：2024-01-15 10:30')
    ])
  });
};

const showCustomNotification = () => {
  Notification.info({
    title: '自定义通知',
    content: h('div', { class: 'custom-notification' }, [
      h('div', { class: 'notification-header' }, [
        h('span', { class: 'notification-title' }, '系统通知'),
        h('span', { class: 'notification-time' }, '刚刚')
      ]),
      h('div', { class: 'notification-content' }, '您有一条新的系统通知，请及时查看。')
    ])
  });
};
</script>

<style scoped>
.custom-notification {
  padding: 8px 0;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.notification-title {
  font-weight: 600;
  color: #333;
}

.notification-time {
  font-size: 12px;
  color: #999;
}

.notification-content {
  color: #666;
  line-height: 1.5;
}
</style>
```

## 通知管理

通过返回的实例管理通知。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showNotification">显示通知</YcButton>
      <YcButton @click="closeNotification" :disabled="!notificationInstance">关闭通知</YcButton>
      <YcButton @click="clearAllNotifications">清空所有通知</YcButton>
    </YcSpace>
    
    <div>
      <h4>通知管理说明：</h4>
      <ul>
        <li>调用 Notification 方法会返回一个实例</li>
        <li>通过实例的 <code>close()</code> 方法可以手动关闭通知</li>
        <li>通过 <code>Notification.clear()</code> 方法可以清空指定位置的所有通知</li>
        <li>通过 <code>Notification.remove()</code> 方法可以移除指定ID的通知</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';
import { Notification } from 'yc-ui';

const notificationInstance = ref(null);

const showNotification = () => {
  notificationInstance.value = Notification.info({
    title: '可管理的通知',
    content: '这是一条可管理的通知',
    duration: 0,
    closable: true
  });
};

const closeNotification = () => {
  if (notificationInstance.value) {
    notificationInstance.value.close();
    notificationInstance.value = null;
  }
};

const clearAllNotifications = () => {
  Notification.clear('topRight');
  Notification.clear('topLeft');
  Notification.clear('bottomRight');
  Notification.clear('bottomLeft');
  notificationInstance.value = null;
};
</script>
```

## 自定义关闭图标

通过 `closeIcon` 属性自定义关闭图标。

```vue
<template>
  <YcSpace>
    <YcButton @click="showCustomCloseIcon">自定义关闭图标</YcButton>
    <YcButton @click="showCustomCloseElement">自定义关闭元素</YcButton>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';
import { h } from 'vue';

const showCustomCloseIcon = () => {
  Notification.info({
    title: '自定义关闭图标',
    content: '这条通知使用了自定义的关闭图标',
    closeIcon: () => h('span', { style: 'color: #ff4d4f; font-size: 16px;' }, '❌')
  });
};

const showCustomCloseElement = () => {
  Notification.info({
    title: '自定义关闭元素',
    content: '这条通知使用了自定义的关闭元素',
    closeIconElement: () => h('div', { 
      style: 'background: #1890ff; color: white; padding: 2px 6px; border-radius: 3px; cursor: pointer;' 
    }, '关闭')
  });
};
</script>
```

## 通知底部

通过 `footer` 属性添加通知底部内容。

```vue
<template>
  <YcSpace>
    <YcButton @click="showWithFooter">带底部通知</YcButton>
  </YcSpace>
</template>

<script setup>
import { Notification } from 'yc-ui';
import { h } from 'vue';

const showWithFooter = () => {
  Notification.info({
    title: '带底部的通知',
    content: '这是一条带底部内容的通知',
    footer: () => h('div', { 
      style: 'border-top: 1px solid #f0f0f0; padding-top: 8px; margin-top: 8px;' 
    }, [
      h('span', { style: 'color: #666; font-size: 12px;' }, '底部信息：'),
      h('a', { 
        href: '#', 
        style: 'color: #1890ff; text-decoration: none; margin-left: 8px;' 
      }, '查看详情')
    ])
  });
};
</script>
```

## 完整示例

一个完整的通知使用示例。

```vue
<template>
  <div class="page">
    <h2>Notification 通知提醒示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace wrap>
        <YcButton @click="showInfo">信息通知</YcButton>
        <YcButton @click="showSuccess">成功通知</YcButton>
        <YcButton @click="showWarning">警告通知</YcButton>
        <YcButton @click="showError">错误通知</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>位置控制</h3>
      <YcSpace wrap>
        <YcButton @click="showTopLeft">左上角</YcButton>
        <YcButton @click="showTopRight">右上角</YcButton>
        <YcButton @click="showBottomLeft">左下角</YcButton>
        <YcButton @click="showBottomRight">右下角</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>关闭控制</h3>
      <YcSpace wrap>
        <YcButton @click="showClosableNotification">可关闭</YcButton>
        <YcButton @click="showAutoCloseNotification">自动关闭</YcButton>
        <YcButton @click="showPersistentNotification">持久通知</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>通知管理</h3>
      <YcSpace wrap>
        <YcButton @click="showManagedNotification">显示通知</YcButton>
        <YcButton @click="closeManagedNotification" :disabled="!managedNotificationInstance">
          关闭通知
        </YcButton>
        <YcButton @click="clearAllNotifications">清空所有</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>富文本内容</h3>
      <YcButton @click="showRichContentNotification">显示富文本</YcButton>
    </div>
    
    <div class="section">
      <h3>自定义图标</h3>
      <YcSpace wrap>
        <YcButton @click="showCustomIconNotification">自定义图标</YcButton>
        <YcButton @click="showNoIconNotification">无图标</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>高级功能</h3>
      <YcSpace wrap>
        <YcButton @click="showCustomCloseIconNotification">自定义关闭图标</YcButton>
        <YcButton @click="showWithFooterNotification">带底部通知</YcButton>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Notification } from 'yc-ui';
import { h } from 'vue';

const managedNotificationInstance = ref(null);

// 基础用法
const showInfo = () => {
  Notification.info({
    title: '信息通知',
    content: '这是一条信息通知'
  });
};

const showSuccess = () => {
  Notification.success({
    title: '成功通知',
    content: '操作成功完成！'
  });
};

const showWarning = () => {
  Notification.warning({
    title: '警告通知',
    content: '请注意这个警告信息'
  });
};

const showError = () => {
  Notification.error({
    title: '错误通知',
    content: '操作失败，请重试'
  });
};

// 位置控制
const showTopLeft = () => {
  Notification.info({
    title: '左上角通知',
    content: '这条通知显示在页面左上角',
    position: 'topLeft'
  });
};

const showTopRight = () => {
  Notification.info({
    title: '右上角通知',
    content: '这条通知显示在页面右上角',
    position: 'topRight'
  });
};

const showBottomLeft = () => {
  Notification.info({
    title: '左下角通知',
    content: '这条通知显示在页面左下角',
    position: 'bottomLeft'
  });
};

const showBottomRight = () => {
  Notification.info({
    title: '右下角通知',
    content: '这条通知显示在页面右下角',
    position: 'bottomRight'
  });
};

// 关闭控制
const showClosableNotification = () => {
  Notification.info({
    title: '可关闭通知',
    content: '这是一条可关闭的通知',
    closable: true,
    duration: 0
  });
};

const showAutoCloseNotification = () => {
  Notification.success({
    title: '自动关闭通知',
    content: '这条通知将在3秒后自动关闭',
    duration: 3000
  });
};

const showPersistentNotification = () => {
  Notification.warning({
    title: '持久通知',
    content: '这是一条持久通知，不会自动关闭',
    duration: 0,
    closable: true
  });
};

// 通知管理
const showManagedNotification = () => {
  managedNotificationInstance.value = Notification.info({
    title: '可管理的通知',
    content: '这是一条可管理的通知',
    duration: 0,
    closable: true
  });
};

const closeManagedNotification = () => {
  if (managedNotificationInstance.value) {
    managedNotificationInstance.value.close();
    managedNotificationInstance.value = null;
  }
};

const clearAllNotifications = () => {
  Notification.clear('topRight');
  Notification.clear('topLeft');
  Notification.clear('bottomRight');
  Notification.clear('bottomLeft');
  managedNotificationInstance.value = null;
};

// 富文本内容
const showRichContentNotification = () => {
  Notification.success({
    title: '富文本通知',
    content: h('div', [
      h('h4', { style: 'margin: 0 0 8px 0;' }, '操作成功'),
      h('p', { style: 'margin: 0 0 4px 0;' }, '您的请求已成功处理'),
      h('p', { style: 'color: #666; font-size: 12px; margin: 0;' }, '时间：2024-01-15 10:30')
    ])
  });
};

// 自定义图标
const showCustomIconNotification = () => {
  Notification.info({
    title: '自定义图标通知',
    content: '这是一条带自定义图标的通知',
    icon: () => h('span', { style: 'color: #1890ff; font-size: 16px;' }, '⭐')
  });
};

const showNoIconNotification = () => {
  Notification.info({
    title: '无图标通知',
    content: '这是一条不带图标的通知',
    showIcon: false
  });
};

// 高级功能
const showCustomCloseIconNotification = () => {
  Notification.info({
    title: '自定义关闭图标',
    content: '这条通知使用了自定义的关闭图标',
    closeIcon: () => h('span', { style: 'color: #ff4d4f; font-size: 16px;' }, '❌')
  });
};

const showWithFooterNotification = () => {
  Notification.info({
    title: '带底部的通知',
    content: '这是一条带底部内容的通知',
    footer: () => h('div', { 
      style: 'border-top: 1px solid #f0f0f0; padding-top: 8px; margin-top: 8px;' 
    }, [
      h('span', { style: 'color: #666; font-size: 12px;' }, '底部信息：'),
      h('a', { 
        href: '#', 
        style: 'color: #1890ff; text-decoration: none; margin-left: 8px;' 
      }, '查看详情')
    ])
  });
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
</style>
```

## API

### Notification 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Notification.info | 显示信息通知 | `string \| NotificationConfig` | `NotificationReturn` |
| Notification.success | 显示成功通知 | `string \| NotificationConfig` | `NotificationReturn` |
| Notification.warning | 显示警告通知 | `string \| NotificationConfig` | `NotificationReturn` |
| Notification.error | 显示错误通知 | `string \| NotificationConfig` | `NotificationReturn` |
| Notification.remove | 移除指定通知 | `string` | - |
| Notification.clear | 清空指定位置的通知 | `NotificationPosition` | `NotificationReturn` |

### NotificationConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 通知类型 | `NotificationType` | - |
| content | 通知内容 | `RenderContent` | - |
| title | 通知标题 | `RenderContent` | - |
| icon | 自定义图标 | `RenderFunction` | - |
| id | 通知唯一标识 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| class | 自定义类名 | `ClassName` | - |
| showIcon | 是否显示图标 | `boolean` | `true` |
| closable | 是否可关闭 | `boolean` | `true` |
| duration | 自动关闭时间（毫秒） | `number` | `4500` |
| isReset | 是否重置 | `boolean` | `false` |
| footer | 底部内容 | `RenderFunction` | - |
| closeIcon | 自定义关闭图标 | `RenderFunction` | - |
| closeIconElement | 自定义关闭元素 | `RenderFunction` | - |
| onClose | 关闭回调 | `(id: string \| number) => void` | - |
| onDestory | 销毁回调 | `(id: string \| number) => void` | - |
| position | 显示位置 | `NotificationPosition` | `'topRight'` |

### NotificationReturn

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| close | 关闭通知的方法 | `() => void` |

### NotificationType

| 类型 | 说明 |
| --- | --- |
| `'info'` | 信息通知 |
| `'success'` | 成功通知 |
| `'warning'` | 警告通知 |
| `'error'` | 错误通知 |

### NotificationPosition

| 位置 | 说明 |
| --- | --- |
| `'topLeft'` | 页面左上角 |
| `'topRight'` | 页面右上角 |
| `'bottomLeft'` | 页面左下角 |
| `'bottomRight'` | 页面右下角 |

## 注意事项

1. Notification 是一个全局方法，不需要在模板中使用
2. 通知会自动堆叠显示，支持多条通知同时显示
3. 可以通过返回的实例手动关闭通知
4. 支持自定义图标、关闭图标和底部内容
5. 可以通过配置控制通知的显示位置和关闭行为

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-notification {
  /* 通知容器 */
}

.yc-notification-info {
  /* 信息通知 */
}

.yc-notification-success {
  /* 成功通知 */
}

.yc-notification-warning {
  /* 警告通知 */
}

.yc-notification-error {
  /* 错误通知 */
}
```
