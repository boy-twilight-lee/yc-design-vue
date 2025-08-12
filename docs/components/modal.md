# Modal 对话框

## 介绍

模态对话框用于在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

### 基础对话框

最简单的对话框，包含标题、内容和操作按钮。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="visible = true">
      打开对话框
    </yc-button>
    
    <yc-modal
      v-model:visible="visible"
      title="对话框标题"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>这是对话框的内容</p>
      <p>您可以在这里放置任何内容</p>
    </yc-modal>
  </yc-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const handleOk = () => {
  visible.value = false
  console.log('点击了确定')
}

const handleCancel = () => {
  visible.value = false
  console.log('点击了取消')
}
</script>
```

### 自定义按钮

可以自定义对话框的按钮文字和样式。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="visible = true">
      自定义按钮
    </yc-button>
    
    <yc-modal
      v-model:visible="visible"
      title="自定义按钮"
      :ok-text="'保存'"
      :cancel-text="'关闭'"
      ok-type="success"
      cancel-type="outline"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>您可以自定义确定和取消按钮的文字和样式</p>
    </yc-modal>
  </yc-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const handleOk = () => {
  visible.value = false
  console.log('保存成功')
}

const handleCancel = () => {
  visible.value = false
  console.log('关闭对话框')
}
</script>
```

### 无标题对话框

可以隐藏对话框的标题栏。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="visible = true">
      无标题对话框
    </yc-button>
    
    <yc-modal
      v-model:visible="visible"
      :title="false"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>这是一个没有标题的对话框</p>
    </yc-modal>
  </yc-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const handleOk = () => {
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}
</script>
```

### 确认对话框

用于确认用户的操作，通常只有确定和取消两个按钮。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="showConfirm">
      删除确认
    </yc-button>
    
    <yc-button type="primary" @click="showConfirm2">
      自定义确认
    </yc-button>
  </yc-space>
</template>

<script setup lang="ts">
import { Modal } from 'yc-design-vue'

const showConfirm = () => {
  Modal.confirm({
    title: '确认删除',
    content: '您确定要删除这条记录吗？此操作不可恢复。',
    okText: '确定删除',
    cancelText: '取消',
    okType: 'danger',
    onOk: () => {
      console.log('确认删除')
    },
    onCancel: () => {
      console.log('取消删除')
    },
  })
}

const showConfirm2 = () => {
  Modal.confirm({
    title: '自定义确认',
    content: h('div', [
      h('p', '这是自定义的确认内容'),
      h('p', { style: 'color: #f53f3f' }, '支持 HTML 内容'),
    ]),
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      console.log('确认操作')
    },
  })
}
</script>
```

### 信息对话框

用于显示信息，通常只有一个确定按钮。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="showInfo">
      信息提示
    </yc-button>
    
    <yc-button type="primary" @click="showSuccess">
      成功提示
    </yc-button>
    
    <yc-button type="primary" @click="showWarning">
      警告提示
    </yc-button>
    
    <yc-button type="primary" @click="showError">
      错误提示
    </yc-button>
  </yc-space>
</template>

<script setup lang="ts">
import { Modal } from 'yc-design-vue'

const showInfo = () => {
  Modal.info({
    title: '信息',
    content: '这是一条信息提示',
    okText: '知道了',
  })
}

const showSuccess = () => {
  Modal.success({
    title: '成功',
    content: '操作成功完成',
    okText: '确定',
  })
}

const showWarning = () => {
  Modal.warning({
    title: '警告',
    content: '请注意这个操作可能带来的影响',
    okText: '知道了',
  })
}

const showError = () => {
  Modal.error({
    title: '错误',
    content: '操作失败，请重试',
    okText: '确定',
  })
}
</script>
```

### 异步关闭

对话框可以异步关闭，通常用于表单提交等需要等待的操作。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="visible = true">
      异步关闭
    </yc-button>
    
    <yc-modal
      v-model:visible="visible"
      title="异步关闭"
      :confirm-loading="loading"
      @ok="handleAsyncOk"
      @cancel="handleCancel"
    >
      <p>点击确定按钮后会显示加载状态，2秒后自动关闭</p>
    </yc-modal>
  </yc-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const loading = ref(false)

const handleAsyncOk = () => {
  loading.value = true
  
  // 模拟异步操作
  setTimeout(() => {
    loading.value = false
    visible.value = false
    console.log('异步操作完成')
  }, 2000)
}

const handleCancel = () => {
  visible.value = false
}
</script>
```

### 自定义内容

对话框可以包含任何自定义内容，如表单、图片等。

```vue
<template>
  <yc-space>
    <yc-button type="primary" @click="visible = true">
      自定义内容
    </yc-button>
    
    <yc-modal
      v-model:visible="visible"
      title="用户信息"
      width="600px"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <yc-form :model="form" layout="vertical">
        <yc-form-item label="用户名">
          <yc-input v-model="form.username" placeholder="请输入用户名" />
        </yc-form-item>
        <yc-form-item label="邮箱">
          <yc-input v-model="form.email" placeholder="请输入邮箱" />
        </yc-form-item>
        <yc-form-item label="描述">
          <yc-textarea v-model="form.description" placeholder="请输入描述" />
        </yc-form-item>
      </yc-form>
    </yc-modal>
  </yc-space>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const visible = ref(false)
const form = reactive({
  username: '',
  email: '',
  description: '',
})

const handleOk = () => {
  console.log('表单数据:', form)
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}
</script>
```

## API

### Modal Props

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| visible / v-model:visible | 对话框是否可见 | `boolean` | `false` |
| title | 对话框标题 | `string \| VNode \| false` | `-` |
| content | 对话框内容 | `string \| VNode` | `-` |
| width | 对话框宽度 | `string \| number` | `520` |
| height | 对话框高度 | `string \| number` | `-` |
| top | 对话框距离顶部的距离 | `string \| number` | `100` |
| centered | 是否居中显示 | `boolean` | `false` |
| mask | 是否显示遮罩层 | `boolean` | `true` |
| mask-closable | 点击遮罩层是否可以关闭 | `boolean` | `true` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| ok-text | 确定按钮文字 | `string` | `'确定'` |
| cancel-text | 取消按钮文字 | `string` | `'取消'` |
| ok-type | 确定按钮类型 | `ButtonType` | `'primary'` |
| cancel-type | 取消按钮类型 | `ButtonType` | `'outline'` |
| ok-loading | 确定按钮是否处于加载状态 | `boolean` | `false` |
| confirm-loading | 确定按钮是否处于加载状态 | `boolean` | `false` |
| ok-button-props | 确定按钮的属性 | `ButtonProps` | `-` |
| cancel-button-props | 取消按钮的属性 | `ButtonProps` | `-` |
| footer | 自定义底部内容 | `VNode \| false` | `-` |
| unmount-on-close | 关闭时是否销毁子元素 | `boolean` | `false` |
| esc-to-close | 是否支持 ESC 键关闭 | `boolean` | `true` |
| draggable | 是否可拖拽 | `boolean` | `false` |
| before-ok | 确定按钮点击前的回调 | `() => boolean \| Promise<boolean>` | `-` |
| before-cancel | 取消按钮点击前的回调 | `() => boolean \| Promise<boolean>` | `-` |

### Modal Events

| 事件名 | 描述 | 参数 |
|--------|------|------|
| ok | 点击确定按钮时触发 | `-` |
| cancel | 点击取消按钮时触发 | `-` |
| close | 对话框关闭时触发 | `-` |
| before-ok | 确定按钮点击前触发 | `-` |
| before-cancel | 取消按钮点击前触发 | `-` |

### Modal Slots

| 插槽名 | 描述 |
|--------|------|
| default | 对话框的内容 |
| title | 对话框的标题 |
| footer | 对话框的底部内容 |

### Modal 静态方法

| 方法名 | 描述 | 参数 | 返回值 |
|--------|------|------|--------|
| Modal.info | 信息对话框 | `ModalConfig` | `ModalInstance` |
| Modal.success | 成功对话框 | `ModalConfig` | `ModalInstance` |
| Modal.warning | 警告对话框 | `ModalConfig` | `ModalInstance` |
| Modal.error | 错误对话框 | `ModalConfig` | `ModalInstance` |
| Modal.confirm | 确认对话框 | `ModalConfig` | `ModalInstance` |

### ModalConfig

| 参数名 | 描述 | 类型 | 默认值 |
|--------|------|------|--------|
| title | 对话框标题 | `string \| VNode` | `-` |
| content | 对话框内容 | `string \| VNode` | `-` |
| okText | 确定按钮文字 | `string` | `'确定'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| okType | 确定按钮类型 | `ButtonType` | `'primary'` |
| cancelType | 取消按钮类型 | `ButtonType` | `'outline'` |
| onOk | 确定按钮点击回调 | `() => void` | `-` |
| onCancel | 取消按钮点击回调 | `() => void` | `-` |

## 类型定义

```typescript
export interface ModalProps {
  visible?: boolean;
  title?: string | VNode | false;
  content?: string | VNode;
  width?: string | number;
  height?: string | number;
  top?: string | number;
  centered?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  okText?: string;
  cancelText?: string;
  okType?: ButtonType;
  cancelType?: ButtonType;
  okLoading?: boolean;
  confirmLoading?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: VNode | false;
  unmountOnClose?: boolean;
  escToClose?: boolean;
  draggable?: boolean;
  beforeOk?: () => boolean | Promise<boolean>;
  beforeCancel?: () => boolean | Promise<boolean>;
}

export interface ModalEmits {
  (e: 'update:visible', visible: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel'): void;
  (e: 'close'): void;
  (e: 'beforeOk'): void;
  (e: 'beforeCancel'): void;
}

export interface ModalSlots {
  default(): void;
  title(): void;
  footer(): void;
}

export interface ModalConfig {
  title?: string | VNode;
  content?: string | VNode;
  okText?: string;
  cancelText?: string;
  okType?: ButtonType;
  cancelType?: ButtonType;
  onOk?: () => void;
  onCancel?: () => void;
}

export interface ModalInstance {
  close: () => void;
}
```

## 设计原则

- **一致性**：对话框的视觉样式和行为保持一致
- **可用性**：提供清晰的视觉反馈，帮助用户理解当前状态
- **可访问性**：支持键盘导航，提供适当的 ARIA 属性
- **响应性**：在不同尺寸下都有良好的显示效果

## 注意事项

1. 对话框会阻止页面滚动，关闭后恢复
2. 点击遮罩层默认会关闭对话框，可以通过 `mask-closable` 控制
3. 按 ESC 键默认会关闭对话框，可以通过 `esc-to-close` 控制
4. 对话框的宽度和高度可以通过 CSS 变量进行自定义
5. 异步关闭时建议使用 `confirm-loading` 属性显示加载状态
6. 自定义底部内容时，需要手动处理确定和取消的逻辑
