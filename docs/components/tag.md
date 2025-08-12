# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度
- 进行分类
- 可关闭的标签，用于可编辑的标签组

## 基础用法

最简单的标签用法。

```vue
<template>
  <YcSpace size="small">
    <YcTag>标签1</YcTag>
    <YcTag>标签2</YcTag>
    <YcTag>标签3</YcTag>
  </YcSpace>
</template>
```

## 标签颜色

通过 `color` 属性设置标签颜色。

```vue
<template>
  <YcSpace size="small">
    <YcTag color="blue">蓝色标签</YcTag>
    <YcTag color="green">绿色标签</YcTag>
    <YcTag color="red">红色标签</YcTag>
    <YcTag color="orange">橙色标签</YcTag>
    <YcTag color="purple">紫色标签</YcTag>
  </YcSpace>
</template>
```

## 标签尺寸

通过 `size` 属性设置标签尺寸。

```vue
<template>
  <YcSpace size="small">
    <div>
      <h4>小尺寸</h4>
      <YcTag size="small">小标签</YcTag>
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcTag size="medium">中等标签</YcTag>
    </div>
    
    <div>
      <h4>大尺寸</h4>
      <YcTag size="large">大标签</YcTag>
    </div>
  </YcSpace>
</template>
```

## 标签边框

通过 `bordered` 属性控制标签边框。

```vue
<template>
  <YcSpace size="small">
    <div>
      <h4>无边框</h4>
      <YcTag :bordered="false">无边框标签</YcTag>
    </div>
    
    <div>
      <h4>有边框</h4>
      <YcTag :bordered="true">有边框标签</YcTag>
    </div>
  </YcSpace>
</template>
```

## 可关闭标签

通过 `closable` 属性启用可关闭功能。

```vue
<template>
  <YcSpace size="small">
    <div>
      <h4>不可关闭</h4>
      <YcTag>不可关闭标签</YcTag>
    </div>
    
    <div>
      <h4>可关闭</h4>
      <YcTag 
        v-for="tag in closableTags" 
        :key="tag"
        :closable="true"
        @close="closeTag(tag)"
      >
        {{ tag }}
      </YcTag>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const closableTags = ref(['标签1', '标签2', '标签3']);

const closeTag = (tag) => {
  const index = closableTags.value.indexOf(tag);
  if (index > -1) {
    closableTags.value.splice(index, 1);
  }
};
</script>
```

## 可选择标签

通过 `checkable` 属性启用可选择功能。

```vue
<template>
  <YcSpace size="small">
    <div>
      <h4>不可选择</h4>
      <YcTag>不可选择标签</YcTag>
    </div>
    
    <div>
      <h4>可选择</h4>
      <YcTag 
        v-for="tag in checkableTags" 
        :key="tag.key"
        :checkable="true"
        :checked="tag.checked"
        @check="checkTag(tag)"
      >
        {{ tag.name }}
      </YcTag>
    </div>
    
    <div>已选择的标签: {{ selectedTags.join(', ') }}</div>
  </YcSpace>
</template>

<script setup>
import { ref, computed } from 'vue';

const checkableTags = ref([
  { key: 'tag1', name: '标签1', checked: false },
  { key: 'tag2', name: '标签2', checked: true },
  { key: 'tag3', name: '标签3', checked: false }
]);

const selectedTags = computed(() => {
  return checkableTags.value
    .filter(tag => tag.checked)
    .map(tag => tag.name);
});

const checkTag = (tag) => {
  tag.checked = !tag.checked;
};
</script>
```

## 加载状态

通过 `loading` 属性显示加载状态。

```vue
<template>
  <YcSpace size="small">
    <div>
      <h4>正常状态</h4>
      <YcTag>正常标签</YcTag>
    </div>
    
    <div>
      <h4>加载状态</h4>
      <YcTag :loading="true">加载中标签</YcTag>
    </div>
    
    <div>
      <h4>动态加载</h4>
      <YcTag :loading="isLoading" @click="toggleLoading">
        {{ isLoading ? '加载中' : '点击加载' }}
      </YcTag>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const toggleLoading = () => {
  if (!isLoading.value) {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  }
};
</script>
```

## 完整示例

一个完整的标签组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Tag 标签示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSpace size="small">
        <YcTag>标签1</YcTag>
        <YcTag>标签2</YcTag>
        <YcTag>标签3</YcTag>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>标签颜色</h3>
      <YcSpace size="small">
        <YcTag color="blue">蓝色标签</YcTag>
        <YcTag color="green">绿色标签</YcTag>
        <YcTag color="red">红色标签</YcTag>
        <YcTag color="orange">橙色标签</YcTag>
        <YcTag color="purple">紫色标签</YcTag>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>标签尺寸</h3>
      <YcSpace size="small">
        <div>
          <h4>小尺寸</h4>
          <YcTag size="small">小标签</YcTag>
        </div>
        
        <div>
          <h4>中等尺寸</h4>
          <YcTag size="medium">中等标签</YcTag>
        </div>
        
        <div>
          <h4>大尺寸</h4>
          <YcTag size="large">大标签</YcTag>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>标签边框</h3>
      <YcSpace size="small">
        <div>
          <h4>无边框</h4>
          <YcTag :bordered="false">无边框标签</YcTag>
        </div>
        
        <div>
          <h4>有边框</h4>
          <YcTag :bordered="true">有边框标签</YcTag>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>可关闭标签</h3>
      <YcSpace size="small">
        <YcTag 
          v-for="tag in closableTags" 
          :key="tag"
          :closable="true"
          @close="closeTag(tag)"
        >
          {{ tag }}
        </YcTag>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>可选择标签</h3>
      <YcSpace size="small">
        <YcTag 
          v-for="tag in checkableTags" 
          :key="tag.key"
          :checkable="true"
          :checked="tag.checked"
          @check="checkTag(tag)"
        >
          {{ tag.name }}
        </YcTag>
      </YcSpace>
      
      <div style="margin-top: 16px;">
        已选择的标签: {{ selectedTags.join(', ') }}
      </div>
    </div>
    
    <div class="section">
      <h3>加载状态</h3>
      <YcSpace size="small">
        <div>
          <h4>正常状态</h4>
          <YcTag>正常标签</YcTag>
        </div>
        
        <div>
          <h4>加载状态</h4>
          <YcTag :loading="true">加载中标签</YcTag>
        </div>
        
        <div>
          <h4>动态加载</h4>
          <YcTag :loading="isLoading" @click="toggleLoading">
            {{ isLoading ? '加载中' : '点击加载' }}
          </YcTag>
        </div>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 可关闭标签
const closableTags = ref(['标签1', '标签2', '标签3']);

// 可选择标签
const checkableTags = ref([
  { key: 'tag1', name: '标签1', checked: false },
  { key: 'tag2', name: '标签2', checked: true },
  { key: 'tag3', name: '标签3', checked: false }
]);

// 加载状态
const isLoading = ref(false);

// 计算属性
const selectedTags = computed(() => {
  return checkableTags.value
    .filter(tag => tag.checked)
    .map(tag => tag.name);
});

// 方法
const closeTag = (tag) => {
  const index = closableTags.value.indexOf(tag);
  if (index > -1) {
    closableTags.value.splice(index, 1);
  }
};

const checkTag = (tag) => {
  tag.checked = !tag.checked;
};

const toggleLoading = () => {
  if (!isLoading.value) {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  }
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
</style>
```

## API

### Tag Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 标签颜色 | `string` | - |
| size | 标签尺寸 | `TagSize` | `'medium'` |
| bordered | 是否有边框 | `boolean` | `true` |
| visible | 是否可见 | `boolean` | - |
| defaultVisible | 默认是否可见 | `boolean` | `true` |
| loading | 是否加载中 | `boolean` | `false` |
| closable | 是否可关闭 | `boolean` | `false` |
| checkable | 是否可选择 | `boolean` | `false` |
| checked | 是否已选择 | `boolean` | - |
| defaultChecked | 默认是否已选择 | `boolean` | `false` |
| nowrap | 是否不换行 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:visible | 可见性变化时触发 | `(value: boolean)` |
| update:checked | 选择状态变化时触发 | `(value: boolean)` |
| close | 关闭时触发 | `(ev: MouseEvent, value?: string)` |
| check | 选择状态变化时触发 | `(value: boolean, ev: MouseEvent)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 标签内容 | - |
| icon | 标签图标 | - |
| close-icon | 关闭图标 | - |

### TagSize

| 类型 | 说明 |
| --- | --- |
| `'small'` | 小尺寸 |
| `'medium'` | 中等尺寸 |
| `'large'` | 大尺寸 |

## 注意事项

1. 可关闭标签需要监听 `close` 事件来处理关闭逻辑
2. 可选择标签需要监听 `check` 事件来处理选择逻辑
3. 标签颜色支持预设颜色和自定义颜色值
4. 加载状态下标签不可交互

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-tag {
  /* 标签容器 */
}

.yc-tag-small {
  /* 小尺寸标签 */
}

.yc-tag-medium {
  /* 中等尺寸标签 */
}

.yc-tag-large {
  /* 大尺寸标签 */
}

.yc-tag-bordered {
  /* 有边框标签 */
}

.yc-tag-loading {
  /* 加载状态标签 */
}

.yc-tag-closable {
  /* 可关闭标签 */
}

.yc-tag-checkable {
  /* 可选择标签 */
}

.yc-tag-checked {
  /* 已选择标签 */
}
```
