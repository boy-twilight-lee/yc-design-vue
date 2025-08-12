# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 需要向用户显示操作的结果时
- 需要显示成功、警告、错误等反馈信息时
- 需要显示加载状态时

## 基础用法

最简单的用法，通过 `Message.info()` 等方法调用。

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
import { Message } from 'yc-ui';

const showInfo = () => {
  Message.info('这是一条信息提示');
};

const showSuccess = () => {
  Message.success('操作成功！');
};

const showWarning = () => {
  Message.warning('这是一条警告提示');
};

const showError = () => {
  Message.error('操作失败，请重试');
};
</script>
```

## 消息类型

Message 组件支持多种消息类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showNormal">普通消息</YcButton>
      <YcButton @click="showInfo">信息消息</YcButton>
      <YcButton @click="showSuccess">成功消息</YcButton>
      <YcButton @click="showWarning">警告消息</YcButton>
      <YcButton @click="showError">错误消息</YcButton>
      <YcButton @click="showLoading">加载消息</YcButton>
    </YcSpace>
    
    <div>
      <h4>消息类型说明：</h4>
      <ul>
        <li><strong>normal</strong>：普通消息，默认样式</li>
        <li><strong>info</strong>：信息消息，蓝色样式</li>
        <li><strong>success</strong>：成功消息，绿色样式</li>
        <li><strong>warning</strong>：警告消息，橙色样式</li>
        <li><strong>error</strong>：错误消息，红色样式</li>
        <li><strong>loading</strong>：加载消息，带旋转图标</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Message } from 'yc-ui';

const showNormal = () => {
  Message.normal('这是一条普通消息');
};

const showInfo = () => {
  Message.info('这是一条信息消息');
};

const showSuccess = () => {
  Message.success('这是一条成功消息');
};

const showWarning = () => {
  Message.warning('这是一条警告消息');
};

const showError = () => {
  Message.error('这是一条错误消息');
};

const showLoading = () => {
  Message.loading('正在加载中...');
};
</script>
```

## 消息位置

通过 `position` 属性设置消息显示位置。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showTopMessage">顶部显示</YcButton>
      <YcButton @click="showBottomMessage">底部显示</YcButton>
    </YcSpace>
    
    <div>
      <h4>位置说明：</h4>
      <ul>
        <li><strong>top</strong>：消息显示在页面顶部（默认）</li>
        <li><strong>bottom</strong>：消息显示在页面底部</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Message } from 'yc-ui';

const showTopMessage = () => {
  Message.success({
    content: '消息显示在页面顶部',
    position: 'top'
  });
};

const showBottomMessage = () => {
  Message.success({
    content: '消息显示在页面底部',
    position: 'bottom'
  });
};
</script>
```

## 自定义图标

通过 `icon` 属性自定义消息图标。

```vue
<template>
  <YcSpace>
    <YcButton @click="showCustomIcon">自定义图标</YcButton>
    <YcButton @click="showNoIcon">无图标</YcButton>
  </YcSpace>
</template>

<script setup>
import { Message } from 'yc-ui';
import { YcIcon } from 'yc-ui';

const showCustomIcon = () => {
  Message.info({
    content: '这是一条带自定义图标的消息',
    icon: () => h(YcIcon, { type: 'star' })
  });
};

const showNoIcon = () => {
  Message.info({
    content: '这是一条不带图标的消息',
    showIcon: false
  });
};
</script>
```

## 关闭控制

通过 `closable` 和 `duration` 属性控制消息的关闭行为。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showClosable">可关闭消息</YcButton>
      <YcButton @click="showAutoClose">自动关闭消息</YcButton>
      <YcButton @click="showPersistent">持久消息</YcButton>
    </YcSpace>
    
    <div>
      <h4>关闭控制说明：</h4>
      <ul>
        <li><strong>closable: true</strong>：显示关闭按钮，用户可手动关闭</li>
        <li><strong>duration: 3000</strong>：3秒后自动关闭（默认）</li>
        <li><strong>duration: 0</strong>：不自动关闭，需要手动关闭</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Message } from 'yc-ui';

const showClosable = () => {
  Message.info({
    content: '这是一条可关闭的消息',
    closable: true,
    duration: 0
  });
};

const showAutoClose = () => {
  Message.success({
    content: '这条消息将在3秒后自动关闭',
    duration: 3000
  });
};

const showPersistent = () => {
  Message.warning({
    content: '这是一条持久消息，不会自动关闭',
    duration: 0,
    closable: true
  });
};
</script>
```

## 消息内容

支持字符串和复杂内容的消息。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showSimpleMessage">简单文本</YcButton>
      <YcButton @click="showRichMessage">富文本内容</YcButton>
      <YcButton @click="showCustomMessage">自定义组件</YcButton>
    </YcSpace>
  </YcSpace>
</template>

<script setup>
import { Message } from 'yc-ui';
import { h } from 'vue';

const showSimpleMessage = () => {
  Message.info('这是一条简单的文本消息');
};

const showRichMessage = () => {
  Message.success({
    content: h('div', [
      h('h4', '操作成功'),
      h('p', '您的请求已成功处理'),
      h('p', { style: 'color: #666; font-size: 12px;' }, '时间：2024-01-15 10:30')
    ])
  });
};

const showCustomMessage = () => {
  Message.info({
    content: h('div', { class: 'custom-message' }, [
      h('div', { class: 'message-header' }, [
        h('span', { class: 'message-title' }, '系统通知'),
        h('span', { class: 'message-time' }, '刚刚')
      ]),
      h('div', { class: 'message-content' }, '您有一条新的系统通知，请及时查看。')
    ])
  });
};
</script>

<style scoped>
.custom-message {
  padding: 8px 0;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.message-title {
  font-weight: 600;
  color: #333;
}

.message-time {
  font-size: 12px;
  color: #999;
}

.message-content {
  color: #666;
  line-height: 1.5;
}
</style>
```

## 消息管理

通过返回的实例管理消息。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showMessage">显示消息</YcButton>
      <YcButton @click="closeMessage" :disabled="!messageInstance">关闭消息</YcButton>
      <YcButton @click="clearAllMessages">清空所有消息</YcButton>
    </YcSpace>
    
    <div>
      <h4>消息管理说明：</h4>
      <ul>
        <li>调用 Message 方法会返回一个实例</li>
        <li>通过实例的 <code>close()</code> 方法可以手动关闭消息</li>
        <li>通过 <code>Message.clear()</code> 方法可以清空指定位置的所有消息</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-ui';

const messageInstance = ref(null);

const showMessage = () => {
  messageInstance.value = Message.info({
    content: '这是一条可管理的消息',
    duration: 0,
    closable: true
  });
};

const closeMessage = () => {
  if (messageInstance.value) {
    messageInstance.value.close();
    messageInstance.value = null;
  }
};

const clearAllMessages = () => {
  Message.clear('top');
  Message.clear('bottom');
  messageInstance.value = null;
};
</script>
```

## 加载状态

显示加载中的消息。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showLoading">显示加载</YcButton>
      <YcButton @click="closeLoading" :disabled="!loadingInstance">关闭加载</YcButton>
    </YcSpace>
    
    <div>
      <h4>加载消息说明：</h4>
      <ul>
        <li>加载消息默认不会自动关闭</li>
        <li>需要手动调用 <code>close()</code> 方法关闭</li>
        <li>适用于异步操作的加载状态提示</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-ui';

const loadingInstance = ref(null);

const showLoading = () => {
  loadingInstance.value = Message.loading({
    content: '正在处理您的请求，请稍候...',
    duration: 0
  });
};

const closeLoading = () => {
  if (loadingInstance.value) {
    loadingInstance.value.close();
    loadingInstance.value = null;
  }
};
</script>
```

## 消息配置

通过配置对象自定义消息行为。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpace>
      <YcButton @click="showCustomConfig">自定义配置</YcButton>
      <YcButton @click="showHoverReset">悬停重置</YcButton>
    </YcSpace>
    
    <div>
      <h4>配置选项说明：</h4>
      <ul>
        <li><strong>id</strong>：消息唯一标识</li>
        <li><strong>position</strong>：显示位置</li>
        <li><strong>duration</strong>：自动关闭时间</li>
        <li><strong>closable</strong>：是否可关闭</li>
        <li><strong>showIcon</strong>：是否显示图标</li>
        <li><strong>resetOnHover</strong>：悬停时重置计时器</li>
      </ul>
    </div>
  </YcSpace>
</template>

<script setup>
import { Message } from 'yc-ui';

const showCustomConfig = () => {
  Message.success({
    id: 'custom-message',
    content: '这是一条自定义配置的消息',
    position: 'bottom',
    duration: 5000,
    closable: true,
    showIcon: true
  });
};

const showHoverReset = () => {
  Message.info({
    content: '悬停此消息可以重置自动关闭计时器',
    duration: 3000,
    resetOnHover: true
  });
};
</script>
```

## 完整示例

一个完整的消息使用示例。

```vue
<template>
  <div class="page">
    <h2>Message 全局提示示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace wrap>
        <YcButton @click="showInfo">信息</YcButton>
        <YcButton @click="showSuccess">成功</YcButton>
        <YcButton @click="showWarning">警告</YcButton>
        <YcButton @click="showError">错误</YcButton>
        <YcButton @click="showLoading">加载</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>位置控制</h3>
      <YcSpace wrap>
        <YcButton @click="showTopMessage">顶部显示</YcButton>
        <YcButton @click="showBottomMessage">底部显示</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>关闭控制</h3>
      <YcSpace wrap>
        <YcButton @click="showClosableMessage">可关闭</YcButton>
        <YcButton @click="showAutoCloseMessage">自动关闭</YcButton>
        <YcButton @click="showPersistentMessage">持久消息</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>消息管理</h3>
      <YcSpace wrap>
        <YcButton @click="showManagedMessage">显示消息</YcButton>
        <YcButton @click="closeManagedMessage" :disabled="!managedMessageInstance">
          关闭消息
        </YcButton>
        <YcButton @click="clearAllMessages">清空所有</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>富文本内容</h3>
      <YcButton @click="showRichContentMessage">显示富文本</YcButton>
    </div>
    
    <div class="section">
      <h3>自定义图标</h3>
      <YcSpace wrap>
        <YcButton @click="showCustomIconMessage">自定义图标</YcButton>
        <YcButton @click="showNoIconMessage">无图标</YcButton>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>高级功能</h3>
      <YcSpace wrap>
        <YcButton @click="showHoverResetMessage">悬停重置</YcButton>
        <YcButton @click="showBottomPositionMessage">底部位置</YcButton>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-ui';
import { h } from 'vue';

const managedMessageInstance = ref(null);

// 基础用法
const showInfo = () => {
  Message.info('这是一条信息提示');
};

const showSuccess = () => {
  Message.success('操作成功！');
};

const showWarning = () => {
  Message.warning('这是一条警告提示');
};

const showError = () => {
  Message.error('操作失败，请重试');
};

const showLoading = () => {
  Message.loading('正在处理中...');
};

// 位置控制
const showTopMessage = () => {
  Message.success({
    content: '消息显示在页面顶部',
    position: 'top'
  });
};

const showBottomMessage = () => {
  Message.success({
    content: '消息显示在页面底部',
    position: 'bottom'
  });
};

// 关闭控制
const showClosableMessage = () => {
  Message.info({
    content: '这是一条可关闭的消息',
    closable: true,
    duration: 0
  });
};

const showAutoCloseMessage = () => {
  Message.success({
    content: '这条消息将在3秒后自动关闭',
    duration: 3000
  });
};

const showPersistentMessage = () => {
  Message.warning({
    content: '这是一条持久消息，不会自动关闭',
    duration: 0,
    closable: true
  });
};

// 消息管理
const showManagedMessage = () => {
  managedMessageInstance.value = Message.info({
    content: '这是一条可管理的消息',
    duration: 0,
    closable: true
  });
};

const closeManagedMessage = () => {
  if (managedMessageInstance.value) {
    managedMessageInstance.value.close();
    managedMessageInstance.value = null;
  }
};

const clearAllMessages = () => {
  Message.clear('top');
  Message.clear('bottom');
  managedMessageInstance.value = null;
};

// 富文本内容
const showRichContentMessage = () => {
  Message.success({
    content: h('div', [
      h('h4', { style: 'margin: 0 0 8px 0;' }, '操作成功'),
      h('p', { style: 'margin: 0 0 4px 0;' }, '您的请求已成功处理'),
      h('p', { style: 'color: #666; font-size: 12px; margin: 0;' }, '时间：2024-01-15 10:30')
    ])
  });
};

// 自定义图标
const showCustomIconMessage = () => {
  Message.info({
    content: '这是一条带自定义图标的消息',
    icon: () => h('span', { style: 'color: #1890ff; font-size: 16px;' }, '⭐')
  });
};

const showNoIconMessage = () => {
  Message.info({
    content: '这是一条不带图标的消息',
    showIcon: false
  });
};

// 高级功能
const showHoverResetMessage = () => {
  Message.info({
    content: '悬停此消息可以重置自动关闭计时器',
    duration: 5000,
    resetOnHover: true
  });
};

const showBottomPositionMessage = () => {
  Message.success({
    content: '这是一条显示在底部的消息',
    position: 'bottom',
    duration: 3000
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

### Message 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Message.info | 显示信息消息 | `string \| MessageConfig` | `MessageReturn` |
| Message.success | 显示成功消息 | `string \| MessageConfig` | `MessageReturn` |
| Message.warning | 显示警告消息 | `string \| MessageConfig` | `MessageReturn` |
| Message.error | 显示错误消息 | `string \| MessageConfig` | `MessageReturn` |
| Message.loading | 显示加载消息 | `string \| MessageConfig` | `MessageReturn` |
| Message.normal | 显示普通消息 | `string \| MessageConfig` | `MessageReturn` |
| Message.clear | 清空指定位置的消息 | `MessagePostion` | `MessageReturn` |

### MessageConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 消息类型 | `MessageType` | - |
| content | 消息内容 | `RenderContent` | - |
| id | 消息唯一标识 | `string` | - |
| icon | 自定义图标 | `RenderFunction` | - |
| showIcon | 是否显示图标 | `boolean` | `true` |
| closable | 是否可关闭 | `boolean` | `false` |
| duration | 自动关闭时间（毫秒） | `number` | `3000` |
| isReset | 是否重置 | `boolean` | `false` |
| onClose | 关闭回调 | `(id: string \| number) => void` | - |
| onDestory | 销毁回调 | `(id: string \| number) => void` | - |
| resetOnHover | 悬停时重置计时器 | `boolean` | `false` |
| position | 显示位置 | `MessagePostion` | `'top'` |

### MessageReturn

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| close | 关闭消息的方法 | `() => void` |

### MessageType

| 类型 | 说明 |
| --- | --- |
| `'info'` | 信息消息 |
| `'success'` | 成功消息 |
| `'warning'` | 警告消息 |
| `'error'` | 错误消息 |
| `'loading'` | 加载消息 |
| `'normal'` | 普通消息 |

### MessagePostion

| 位置 | 说明 |
| --- | --- |
| `'top'` | 页面顶部 |
| `'bottom'` | 页面底部 |

## 注意事项

1. Message 是一个全局方法，不需要在模板中使用
2. 消息会自动堆叠显示，支持多条消息同时显示
3. 可以通过返回的实例手动关闭消息
4. 支持自定义图标和富文本内容
5. 可以通过配置控制消息的显示位置和关闭行为

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-message {
  /* 消息容器 */
}

.yc-message-info {
  /* 信息消息 */
}

.yc-message-success {
  /* 成功消息 */
}

.yc-message-warning {
  /* 警告消息 */
}

.yc-message-error {
  /* 错误消息 */
}

.yc-message-loading {
  /* 加载消息 */
}
```
