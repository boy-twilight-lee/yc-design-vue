# Drawer 抽屉

从屏幕边缘滑出的抽屉面板。

## 何时使用

- 需要从屏幕边缘滑出展示更多内容时
- 需要在不离开当前页面的情况下展示详细信息时
- 需要展示表单、设置面板等辅助内容时

## 基础用法

最简单的用法，从右侧滑出抽屉。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer v-model:visible="visible" title="抽屉标题">
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
```

## 位置设置

通过 `placement` 属性设置抽屉出现的位置。

```vue
<template>
  <YcSpace>
    <YcButton @click="placement = 'left'">左侧</YcButton>
    <YcButton @click="placement = 'right'">右侧</YcButton>
    <YcButton @click="placement = 'top'">顶部</YcButton>
    <YcButton @click="placement = 'bottom'">底部</YcButton>
  </YcSpace>
  
  <YcDrawer 
    v-model:visible="visible" 
    :placement="placement"
    title="抽屉标题"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const placement = ref('right');
</script>
```

## 尺寸设置

通过 `width` 和 `height` 属性设置抽屉尺寸。

```vue
<template>
  <YcSpace>
    <YcButton @click="openDrawer('small')">小尺寸</YcButton>
    <YcButton @click="openDrawer('medium')">中等尺寸</YcButton>
    <YcButton @click="openDrawer('large')">大尺寸</YcButton>
  </YcSpace>
  
  <YcDrawer 
    v-model:visible="visible" 
    :width="drawerWidth"
    :height="drawerHeight"
    title="抽屉标题"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const drawerWidth = ref(250);
const drawerHeight = ref(250);

const openDrawer = (size) => {
  if (size === 'small') {
    drawerWidth.value = 200;
    drawerHeight.value = 200;
  } else if (size === 'medium') {
    drawerWidth.value = 400;
    drawerHeight.value = 300;
  } else if (size === 'large') {
    drawerWidth.value = 600;
    drawerHeight.value = 400;
  }
  visible.value = true;
};
</script>
```

## 自定义头部

通过 `header` 插槽自定义头部内容。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer v-model:visible="visible">
    <template #header>
      <div style="display: flex; align-items: center; gap: 8px;">
        <YcIcon-settings style="color: #1890ff;" />
        <span>设置面板</span>
        <YcTag color="blue">新</YcTag>
      </div>
    </template>
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
```

## 自定义底部

通过 `footer` 插槽自定义底部内容。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer v-model:visible="visible" title="抽屉标题">
    <p>抽屉内容</p>
    <template #footer>
      <YcSpace>
        <YcButton @click="visible = false">关闭</YcButton>
        <YcButton type="primary" @click="handleSave">保存</YcButton>
        <YcButton type="primary" @click="handleSaveAndClose">保存并关闭</YcButton>
      </YcSpace>
    </template>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const handleSave = () => {
  console.log('保存数据');
};

const handleSaveAndClose = () => {
  handleSave();
  visible.value = false;
};
</script>
```

## 隐藏头部或底部

通过 `header` 和 `footer` 属性控制头部和底部的显示。

```vue
<template>
  <YcSpace>
    <YcButton @click="openDrawer(true, true)">显示头部和底部</YcButton>
    <YcButton @click="openDrawer(false, true)">隐藏头部</YcButton>
    <YcButton @click="openDrawer(true, false)">隐藏底部</YcButton>
    <YcButton @click="openDrawer(false, false)">隐藏头部和底部</YcButton>
  </YcSpace>
  
  <YcDrawer 
    v-model:visible="visible" 
    :header="showHeader"
    :footer="showFooter"
    title="抽屉标题"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const showHeader = ref(true);
const showFooter = ref(true);

const openDrawer = (header, footer) => {
  showHeader.value = header;
  showFooter.value = footer;
  visible.value = true;
};
</script>
```

## 自定义按钮

通过 `okButtonProps` 和 `cancelButtonProps` 自定义按钮属性。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer 
    v-model:visible="visible" 
    title="抽屉标题"
    :ok-button-props="{ type: 'primary', danger: true }"
    :cancel-button-props="{ type: 'dashed' }"
    ok-text="删除"
    cancel-text="取消"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
```

## 加载状态

通过 `okLoading` 属性显示确认按钮的加载状态。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer 
    v-model:visible="visible" 
    title="抽屉标题"
    :ok-loading="loading"
    @ok="handleOk"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const loading = ref(false);

const handleOk = async () => {
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('操作完成');
    visible.value = false;
  } finally {
    loading.value = false;
  }
};
</script>
```

## 遮罩层设置

通过 `mask` 和 `maskClosable` 属性控制遮罩层。

```vue
<template>
  <YcSpace>
    <YcButton @click="openDrawer(true, true)">有遮罩，可点击关闭</YcButton>
    <YcButton @click="openDrawer(true, false)">有遮罩，不可点击关闭</YcButton>
    <YcButton @click="openDrawer(false, false)">无遮罩</YcButton>
  </YcSpace>
  
  <YcDrawer 
    v-model:visible="visible" 
    title="抽屉标题"
    :mask="showMask"
    :mask-closable="maskClosable"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const showMask = ref(true);
const maskClosable = ref(true);

const openDrawer = (mask, closable) => {
  showMask.value = mask;
  maskClosable.value = closable;
  visible.value = true;
};
</script>
```

## 关闭按钮设置

通过 `closable` 属性控制关闭按钮的显示。

```vue
<template>
  <YcSpace>
    <YcButton @click="openDrawer(true)">显示关闭按钮</YcButton>
    <YcButton @click="openDrawer(false)">隐藏关闭按钮</YcButton>
  </YcSpace>
  
  <YcDrawer 
    v-model:visible="visible" 
    title="抽屉标题"
    :closable="showCloseButton"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const showCloseButton = ref(true);

const openDrawer = (closable) => {
  showCloseButton.value = closable;
  visible.value = true;
};
</script>
```

## 服务调用

通过 `DrawerService` 以服务方式调用抽屉。

```vue
<template>
  <YcButton @click="openDrawer">服务方式打开抽屉</YcButton>
</template>

<script setup>
import { DrawerService } from 'yc-design-vue';

const openDrawer = () => {
  DrawerService.open({
    title: '服务抽屉',
    content: '这是通过服务方式打开的抽屉',
    width: 400,
    onOk: () => {
      console.log('确认操作');
    },
    onCancel: () => {
      console.log('取消操作');
    }
  });
};
</script>
```

## 事件处理

监听抽屉的各种事件。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer 
    v-model:visible="visible" 
    title="抽屉标题"
    @before-open="onBeforeOpen"
    @open="onOpen"
    @before-close="onBeforeClose"
    @close="onClose"
    @ok="onOk"
    @cancel="onCancel"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const onBeforeOpen = () => {
  console.log('即将打开');
};

const onOpen = () => {
  console.log('已打开');
};

const onBeforeClose = () => {
  console.log('即将关闭');
};

const onClose = () => {
  console.log('已关闭');
};

const onOk = () => {
  console.log('确认操作');
  visible.value = false;
};

const onCancel = () => {
  console.log('取消操作');
  visible.value = false;
};
</script>
```

## 自定义样式

通过 `drawerStyle` 属性自定义抽屉样式。

```vue
<template>
  <YcButton @click="visible = true">打开抽屉</YcButton>
  <YcDrawer 
    v-model:visible="visible" 
    title="抽屉标题"
    :drawer-style="customStyle"
  >
    <p>抽屉内容</p>
  </YcDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const customStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white'
};
</script>
```

## 完整示例

一个完整的抽屉使用示例。

```vue
<template>
  <div class="page">
    <YcButton type="primary" @click="openUserDrawer">编辑用户信息</YcButton>
    
    <YcDrawer 
      v-model:visible="userDrawerVisible" 
      title="用户信息编辑"
      placement="right"
      width="500"
      :ok-loading="saving"
      @ok="saveUserInfo"
    >
      <YcForm layout="vertical">
        <YcFormItem label="用户名">
          <YcInput v-model="userForm.username" placeholder="请输入用户名" />
        </YcFormItem>
        
        <YcFormItem label="邮箱">
          <YcInput v-model="userForm.email" placeholder="请输入邮箱" />
        </YcFormItem>
        
        <YcFormItem label="手机号">
          <YcInput v-model="userForm.phone" placeholder="请输入手机号" />
        </YcFormItem>
        
        <YcFormItem label="地址">
          <YcTextarea v-model="userForm.address" placeholder="请输入地址" />
        </YcFormItem>
      </YcForm>
    </YcDrawer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const userDrawerVisible = ref(false);
const saving = ref(false);

const userForm = reactive({
  username: '',
  email: '',
  phone: '',
  address: ''
});

const openUserDrawer = () => {
  // 模拟加载用户数据
  userForm.username = '张三';
  userForm.email = 'zhangsan@example.com';
  userForm.phone = '13800138000';
  userForm.address = '北京市朝阳区';
  userDrawerVisible.value = true;
};

const saveUserInfo = async () => {
  saving.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('保存用户信息:', userForm);
    userDrawerVisible.value = false;
  } finally {
    saving.value = false;
  }
};
</script>

<style scoped>
.page {
  padding: 24px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | - |
| defaultVisible | 默认是否可见 | `boolean` | `false` |
| placement | 抽屉位置 | `DrawerPlacement` | `'right'` |
| title | 标题 | `string` | `''` |
| mask | 是否显示遮罩 | `boolean` | `true` |
| maskClosable | 点击遮罩是否关闭 | `boolean` | `true` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| okText | 确认按钮文字 | `string` | `'确认'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| okLoading | 确认按钮加载状态 | `boolean` | `false` |
| okButtonProps | 确认按钮属性 | `ButtonProps` | `{}` |
| cancelButtonProps | 取消按钮属性 | `ButtonProps` | `{}` |
| unmountOnClose | 关闭时是否销毁子元素 | `boolean` | `false` |
| width | 宽度 | `number \| string` | `250` |
| height | 高度 | `number \| string` | `250` |
| popupContainer | 弹窗挂载容器 | `PopupContainer` | - |
| drawerStyle | 抽屉样式 | `CSSProperties` | `{}` |
| escToClose | 按ESC键是否关闭 | `boolean` | `true` |
| renderToBody | 是否渲染到body | `boolean` | `true` |
| header | 是否显示头部 | `boolean` | `true` |
| footer | 是否显示底部 | `boolean` | `true` |
| hideCancel | 是否隐藏取消按钮 | `boolean` | `false` |
| onBeforeCancel | 取消前回调 | `OnBeforeCancel` | - |
| onBeforeOk | 确认前回调 | `OnBeforeOk` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:visible | 可见性变化时触发 | `(value: boolean)` |
| ok | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | `(event: MouseEvent \| KeyboardEvent)` |
| before-open | 打开前触发 | - |
| open | 打开后触发 | - |
| before-close | 关闭前触发 | - |
| close | 关闭后触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 抽屉内容 |
| header | 自定义头部 |
| footer | 自定义底部 |
| title | 自定义标题 |

### Types

```typescript
type DrawerPlacement = 'right' | 'left' | 'top' | 'bottom';
```

## 注意事项

1. 抽屉组件支持四个方向的滑出
2. 宽度和高度会根据位置自动调整
3. 可以通过服务方式调用，无需在模板中声明
4. 支持键盘ESC键关闭

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-drawer-wrapper {
  /* 抽屉包装器 */
}

.yc-drawer-mask {
  /* 遮罩层 */
}

.yc-drawer-container {
  /* 抽屉容器 */
}

.yc-drawer-header {
  /* 抽屉头部 */
}

.yc-drawer-body {
  /* 抽屉内容 */
}

.yc-drawer-footer {
  /* 抽屉底部 */
}
```
