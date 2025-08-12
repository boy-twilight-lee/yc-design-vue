# Spin 加载中

页面和区块的加载中状态。

## 何时使用

- 页面内容加载时
- 数据提交时
- 区块内容加载时
- 需要用户等待时

## 基础用法

最简单的加载中用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSpin />
    <YcSpin tip="加载中..." />
  </YcSpace>
</template>
```

## 尺寸设置

通过 `size` 属性设置加载图标尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcSpin :size="16" />
    </div>
    
    <div>
      <h4>默认尺寸</h4>
      <YcSpin />
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcSpin :size="32" />
    </div>
    
    <div>
      <h4>超大尺寸</h4>
      <YcSpin :size="48" />
    </div>
  </YcSpace>
</template>
```

## 加载状态

通过 `loading` 属性控制加载状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>加载中</h4>
      <YcSpin :loading="true" tip="加载中..." />
    </div>
    
    <div>
      <h4>加载完成</h4>
      <YcSpin :loading="false" tip="加载完成" />
    </div>
    
    <div>
      <h4>动态切换</h4>
      <YcSpin :loading="isLoading" :tip="loadingTip" />
      <YcButton @click="toggleLoading" style="margin-left: 16px;">
        {{ isLoading ? '停止加载' : '开始加载' }}
      </YcButton>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(true);
const loadingTip = ref('加载中...');

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
  loadingTip.value = isLoading.value ? '加载中...' : '加载完成';
};
</script>
```

## 点状加载

通过 `dot` 属性启用点状加载动画。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认加载</h4>
      <YcSpin tip="加载中..." />
    </div>
    
    <div>
      <h4>点状加载</h4>
      <YcSpin :dot="true" tip="加载中..." />
    </div>
    
    <div>
      <h4>不同尺寸的点状加载</h4>
      <YcSpace>
        <YcSpin :dot="true" :size="16" />
        <YcSpin :dot="true" :size="24" />
        <YcSpin :dot="true" :size="32" />
      </YcSpace>
    </div>
  </YcSpace>
</template>
```

## 隐藏图标

通过 `hideIcon` 属性隐藏加载图标。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>显示图标</h4>
      <YcSpin tip="加载中..." />
    </div>
    
    <div>
      <h4>隐藏图标</h4>
      <YcSpin :hide-icon="true" tip="加载中..." />
    </div>
  </YcSpace>
</template>
```

## 自定义图标

通过 `icon` 插槽自定义加载图标。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认图标</h4>
      <YcSpin tip="加载中..." />
    </div>
    
    <div>
      <h4>自定义图标</h4>
      <YcSpin tip="加载中...">
        <template #icon>
          <div class="custom-spin-icon">⏳</div>
        </template>
      </YcSpin>
    </div>
    
    <div>
      <h4>自定义动画图标</h4>
      <YcSpin tip="加载中...">
        <template #icon>
          <div class="custom-animation">🚀</div>
        </template>
      </YcSpin>
    </div>
  </YcSpace>
</template>

<style scoped>
.custom-spin-icon {
  font-size: 24px;
  color: #1890ff;
}

.custom-animation {
  font-size: 24px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
```

## 自定义提示

通过 `tip` 插槽自定义提示内容。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认提示</h4>
      <YcSpin tip="加载中..." />
    </div>
    
    <div>
      <h4>自定义提示</h4>
      <YcSpin>
        <template #tip>
          <div class="custom-tip">
            <span class="tip-icon">⏰</span>
            <span class="tip-text">请稍候，正在处理您的请求...</span>
          </div>
        </template>
      </YcSpin>
    </div>
    
    <div>
      <h4>动态提示</h4>
      <YcSpin>
        <template #tip>
          <div class="dynamic-tip">
            {{ dynamicTip }}
          </div>
        </template>
      </YcSpin>
      <YcButton @click="changeTip" style="margin-left: 16px;">
        切换提示
      </YcButton>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const dynamicTip = ref('正在加载数据...');

const changeTip = () => {
  const tips = [
    '正在加载数据...',
    '正在处理请求...',
    '正在验证信息...',
    '即将完成...'
  ];
  const randomIndex = Math.floor(Math.random() * tips.length);
  dynamicTip.value = tips[randomIndex];
};
</script>

<style scoped>
.custom-tip {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tip-icon {
  font-size: 16px;
}

.tip-text {
  color: #666;
}

.dynamic-tip {
  color: #1890ff;
  font-weight: 500;
}
</style>
```

## 容器加载

将加载状态应用到容器内容。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>内容加载</h4>
      <YcSpin :loading="isContentLoading" tip="内容加载中...">
        <div class="content-container">
          <p>这是页面的主要内容</p>
          <p>当 loading 为 true 时，内容会被遮罩</p>
          <p>当 loading 为 false 时，内容正常显示</p>
        </div>
      </YcSpin>
      <YcButton @click="toggleContentLoading" style="margin-top: 16px;">
        {{ isContentLoading ? '显示内容' : '隐藏内容' }}
      </YcButton>
    </div>
    
    <div>
      <h4>表格加载</h4>
      <YcSpin :loading="isTableLoading" tip="表格数据加载中...">
        <div class="table-container">
          <table class="demo-table">
            <thead>
              <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>城市</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>张三</td>
                <td>25</td>
                <td>北京</td>
              </tr>
              <tr>
                <td>李四</td>
                <td>30</td>
                <td>上海</td>
              </tr>
              <tr>
                <td>王五</td>
                <td>28</td>
                <td>广州</td>
              </tr>
            </tbody>
          </table>
        </div>
      </YcSpin>
      <YcButton @click="toggleTableLoading" style="margin-top: 16px;">
        {{ isTableLoading ? '显示表格' : '隐藏表格' }}
      </YcButton>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const isContentLoading = ref(true);
const isTableLoading = ref(false);

const toggleContentLoading = () => {
  isContentLoading.value = !isContentLoading.value;
};

const toggleTableLoading = () => {
  isTableLoading.value = !isTableLoading.value;
};
</script>

<style scoped>
.content-container {
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fafafa;
}

.table-container {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
}

.demo-table {
  width: 100%;
  border-collapse: collapse;
}

.demo-table th,
.demo-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.demo-table th {
  background: #fafafa;
  font-weight: 600;
}

.demo-table tr:hover {
  background: #f5f5f5;
}
</style>
```

## 完整示例

一个完整的加载中组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Spin 加载中示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace direction="vertical" size="large">
        <YcSpin />
        <YcSpin tip="加载中..." />
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>尺寸设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcSpin :size="16" />
        </div>
        
        <div>
          <h4>默认尺寸</h4>
          <YcSpin />
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcSpin :size="32" />
        </div>
        
        <div>
          <h4>超大尺寸</h4>
          <YcSpin :size="48" />
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>加载状态</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>动态切换</h4>
          <YcSpin :loading="isLoading" :tip="loadingTip" />
          <YcButton @click="toggleLoading" style="margin-left: 16px;">
            {{ isLoading ? '停止加载' : '开始加载' }}
          </YcButton>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>点状加载</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认加载</h4>
          <YcSpin tip="加载中..." />
        </div>
        
        <div>
          <h4>点状加载</h4>
          <YcSpin :dot="true" tip="加载中..." />
        </div>
        
        <div>
          <h4>不同尺寸的点状加载</h4>
          <YcSpace>
            <YcSpin :dot="true" :size="16" />
            <YcSpin :dot="true" :size="24" />
            <YcSpin :dot="true" :size="32" />
          </YcSpace>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义图标</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认图标</h4>
          <YcSpin tip="加载中..." />
        </div>
        
        <div>
          <h4>自定义图标</h4>
          <YcSpin tip="加载中...">
            <template #icon>
              <div class="custom-spin-icon">⏳</div>
            </template>
          </YcSpin>
        </div>
        
        <div>
          <h4>自定义动画图标</h4>
          <YcSpin tip="加载中...">
            <template #icon>
              <div class="custom-animation">🚀</div>
            </template>
          </YcSpin>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义提示</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>自定义提示</h4>
          <YcSpin>
            <template #tip>
              <div class="custom-tip">
                <span class="tip-icon">⏰</span>
                <span class="tip-text">请稍候，正在处理您的请求...</span>
              </div>
            </template>
          </YcSpin>
        </div>
        
        <div>
          <h4>动态提示</h4>
          <YcSpin>
            <template #tip>
              <div class="dynamic-tip">
                {{ dynamicTip }}
              </div>
            </template>
          </YcSpin>
          <YcButton @click="changeTip" style="margin-left: 16px;">
            切换提示
          </YcButton>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>容器加载</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>内容加载</h4>
          <YcSpin :loading="isContentLoading" tip="内容加载中...">
            <div class="content-container">
              <p>这是页面的主要内容</p>
              <p>当 loading 为 true 时，内容会被遮罩</p>
              <p>当 loading 为 false 时，内容正常显示</p>
            </div>
          </YcSpin>
          <YcButton @click="toggleContentLoading" style="margin-top: 16px;">
            {{ isContentLoading ? '显示内容' : '隐藏内容' }}
          </YcButton>
        </div>
        
        <div>
          <h4>表格加载</h4>
          <YcSpin :loading="isTableLoading" tip="表格数据加载中...">
            <div class="table-container">
              <table class="demo-table">
                <thead>
                  <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>城市</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>张三</td>
                    <td>25</td>
                    <td>北京</td>
                  </tr>
                  <tr>
                    <td>李四</td>
                    <td>30</td>
                    <td>上海</td>
                  </tr>
                  <tr>
                    <td>王五</td>
                    <td>28</td>
                    <td>广州</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </YcSpin>
          <YcButton @click="toggleTableLoading" style="margin-top: 16px;">
            {{ isTableLoading ? '显示表格' : '隐藏表格' }}
          </YcButton>
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 加载状态
const isLoading = ref(true);
const loadingTip = ref('加载中...');

// 内容加载
const isContentLoading = ref(true);

// 表格加载
const isTableLoading = ref(false);

// 动态提示
const dynamicTip = ref('正在加载数据...');

// 切换加载状态
const toggleLoading = () => {
  isLoading.value = !isLoading.value;
  loadingTip.value = isLoading.value ? '加载中...' : '加载完成';
};

// 切换内容加载
const toggleContentLoading = () => {
  isContentLoading.value = !isContentLoading.value;
};

// 切换表格加载
const toggleTableLoading = () => {
  isTableLoading.value = !isTableLoading.value;
};

// 切换提示
const changeTip = () => {
  const tips = [
    '正在加载数据...',
    '正在处理请求...',
    '正在验证信息...',
    '即将完成...'
  ];
  const randomIndex = Math.floor(Math.random() * tips.length);
  dynamicTip.value = tips[randomIndex];
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

.custom-spin-icon {
  font-size: 24px;
  color: #1890ff;
}

.custom-animation {
  font-size: 24px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.custom-tip {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tip-icon {
  font-size: 16px;
}

.tip-text {
  color: #666;
}

.dynamic-tip {
  color: #1890ff;
  font-weight: 500;
}

.content-container {
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fafafa;
}

.table-container {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
}

.demo-table {
  width: 100%;
  border-collapse: collapse;
}

.demo-table th,
.demo-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.demo-table th {
  background: #fafafa;
  font-weight: 600;
}

.demo-table tr:hover {
  background: #f5f5f5;
}
</style>
```

## API

### Spin Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 加载图标尺寸 | `number` | - |
| loading | 是否处于加载状态 | `boolean` | `true` |
| dot | 是否使用点状加载动画 | `boolean` | `false` |
| tip | 加载提示文字 | `string` | - |
| hideIcon | 是否隐藏加载图标 | `boolean` | `false` |
| isSizeInherit | 是否继承父元素尺寸 | `boolean` | - |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 加载的内容 | - |
| icon | 自定义加载图标 | - |
| tip | 自定义提示内容 | - |

## 注意事项

1. 当 `loading` 为 `true` 时，内容会被遮罩
2. 可以通过插槽自定义加载图标和提示内容
3. 点状加载动画适合轻量级的加载场景
4. 容器加载模式适合整个区块的加载状态

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-spin {
  /* 加载容器 */
}

.yc-spin-spinning {
  /* 加载状态 */
}

.yc-spin-container {
  /* 内容容器 */
}

.yc-spin-mask {
  /* 遮罩层 */
}

.yc-spin-icon {
  /* 加载图标 */
}

.yc-spin-dot {
  /* 点状加载 */
}

.yc-spin-tip {
  /* 提示文字 */
}

.yc-spin-nested-loading {
  /* 嵌套加载 */
}
```
