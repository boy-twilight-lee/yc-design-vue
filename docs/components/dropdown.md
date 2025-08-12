# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素
- 点击下拉菜单，可以展开更多操作
- 支持子菜单、分组等复杂结构

## 基础用法

最简单的用法，点击触发下拉菜单。

```vue
<template>
  <YcDropdown>
    <YcButton>
      下拉菜单
      <YcIcon-down />
    </YcButton>
    <template #content>
      <YcDoption value="1">选项1</YcDoption>
      <YcDoption value="2">选项2</YcDoption>
      <YcDoption value="3">选项3</YcDoption>
    </template>
  </YcDropdown>
</template>
```

## 触发方式

通过 `trigger` 属性设置触发方式。

```vue
<template>
  <YcSpace>
    <YcDropdown trigger="click">
      <YcButton>点击触发</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
      </template>
    </YcDropdown>
    
    <YcDropdown trigger="hover">
      <YcButton>悬停触发</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
    
    <YcDropdown trigger="contextmenu">
      <YcButton>右键触发</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
  </YcSpace>
</template>
```

## 位置设置

通过 `position` 属性设置下拉菜单出现的位置。

```vue
<template>
  <YcSpace wrap>
    <YcDropdown position="top">
      <YcButton>顶部</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
    
    <YcDropdown position="bottom">
      <YcButton>底部</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
    
    <YcDropdown position="tl">
      <YcButton>左上</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
    
    <YcDropdown position="tr">
      <YcButton>右上</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
    
    <YcDropdown position="bl">
      <YcButton>左下</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
    
    <YcDropdown position="br">
      <YcButton>右下</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
  </YcSpace>
</template>
```

## 选项配置

通过 `value` 属性设置选项值，通过 `disabled` 属性禁用选项。

```vue
<template>
  <YcDropdown @select="onSelect">
    <YcButton>选项配置</YcButton>
    <template #content>
      <YcDoption value="1">选项1</YcDoption>
      <YcDoption value="2" disabled>禁用选项</YcDoption>
      <YcDoption value="3">选项3</YcDoption>
    </template>
  </YcDropdown>
</template>

<script setup>
const onSelect = (value, ev) => {
  console.log('选择的值:', value);
};
</script>
```

## 选项图标

通过 `icon` 插槽为选项添加图标。

```vue
<template>
  <YcDropdown>
    <YcButton>选项图标</YcButton>
    <template #content>
      <YcDoption value="1">
        <template #icon>
          <YcIcon-edit style="margin-right: 8px;" />
        </template>
        编辑
      </YcDoption>
      <YcDoption value="2">
        <template #icon>
          <YcIcon-delete style="margin-right: 8px;" />
        </template>
        删除
      </YcDoption>
      <YcDoption value="3">
        <template #icon>
          <YcIcon-copy style="margin-right: 8px;" />
        </template>
        复制
      </YcDoption>
    </template>
  </YcDropdown>
</template>
```

## 选项后缀

通过 `suffix` 插槽为选项添加后缀内容。

```vue
<template>
  <YcDropdown>
    <YcButton>选项后缀</YcButton>
    <template #content>
      <YcDoption value="1">
        编辑
        <template #suffix>
          <YcTag size="small" color="blue">新</YcTag>
        </template>
      </YcDoption>
      <YcDoption value="2">
        删除
        <template #suffix>
          <YcTag size="small" color="red">危险</YcTag>
        </template>
      </YcDoption>
      <YcDoption value="3">
        复制
        <template #suffix>
          <YcIcon-copy style="color: #999;" />
        </template>
      </YcDoption>
    </template>
  </YcDropdown>
</template>
```

## 选项分组

通过 `Dgroup` 组件对选项进行分组。

```vue
<template>
  <YcDropdown>
    <YcButton>选项分组</YcButton>
    <template #content>
      <YcDgroup title="文件操作">
        <YcDoption value="new">新建</YcDoption>
        <YcDoption value="open">打开</YcDoption>
        <YcDoption value="save">保存</YcDoption>
      </YcDgroup>
      
      <YcDgroup title="编辑操作">
        <YcDoption value="cut">剪切</YcDoption>
        <YcDoption value="copy">复制</YcDoption>
        <YcDoption value="paste">粘贴</YcDoption>
      </YcDgroup>
    </template>
  </YcDropdown>
</template>
```

## 子菜单

通过 `Dsubmenu` 组件创建子菜单。

```vue
<template>
  <YcDropdown>
    <YcButton>子菜单</YcButton>
    <template #content>
      <YcDoption value="1">选项1</YcDoption>
      <YcDsubmenu>
        <template #default>
          <span>子菜单</span>
          <YcIcon-right style="margin-left: 8px;" />
        </template>
        <template #content>
          <YcDoption value="sub1">子选项1</YcDoption>
          <YcDoption value="sub2">子选项2</YcDoption>
        </template>
      </YcDsubmenu>
      <YcDoption value="3">选项3</YcDoption>
    </template>
  </YcDropdown>
</template>
```

## 子菜单触发方式

通过 `trigger` 属性设置子菜单的触发方式。

```vue
<template>
  <YcSpace>
    <YcDropdown>
      <YcButton>悬停触发子菜单</YcButton>
      <template #content>
        <YcDsubmenu trigger="hover">
          <template #default>
            <span>悬停触发</span>
            <YcIcon-right style="margin-left: 8px;" />
          </template>
          <template #content>
            <YcDoption value="sub1">子选项1</YcDoption>
            <YcDoption value="sub2">子选项2</YcDoption>
          </template>
        </YcDsubmenu>
      </template>
    </YcDropdown>
    
    <YcDropdown>
      <YcButton>点击触发子菜单</YcButton>
      <template #content>
        <YcDsubmenu trigger="click">
          <template #default>
            <span>点击触发</span>
            <YcIcon-right style="margin-left: 8px;" />
          </template>
          <template #content>
            <YcDoption value="sub1">子选项1</YcDoption>
            <YcDoption value="sub2">子选项2</YcDoption>
          </template>
        </YcDsubmenu>
      </template>
    </YcDropdown>
  </YcSpace>
</template>
```

## 按钮下拉菜单

通过 `DropdownButton` 组件创建按钮样式的下拉菜单。

```vue
<template>
  <YcSpace>
    <YcDropdownButton>
      <template #default>
        按钮下拉
      </template>
      <template #icon>
        <YcIcon-down />
      </template>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
        <YcDoption value="3">选项3</YcDoption>
      </template>
    </YcDropdownButton>
    
    <YcDropdownButton type="primary">
      <template #default>
        主要按钮
      </template>
      <template #icon>
        <YcIcon-down />
      </template>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
      </template>
    </YcDropdownButton>
    
    <YcDropdownButton type="dashed">
      <template #default>
        虚线按钮
      </template>
      <template #icon>
        <YcIcon-down />
      </template>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
      </template>
    </YcDropdownButton>
  </YcSpace>
</template>
```

## 受控显示

通过 `v-model` 控制下拉菜单的显示状态。

```vue
<template>
  <YcSpace direction="vertical">
    <YcSpace>
      <YcButton @click="visible = true">显示</YcButton>
      <YcButton @click="visible = false">隐藏</YcButton>
    </YcSpace>
    
    <YcDropdown v-model:popup-visible="visible">
      <YcButton>受控显示</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
        <YcDoption value="3">选项3</YcDoption>
      </template>
    </YcDropdown>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
```

## 最大高度

通过 `popupMaxHeight` 属性设置下拉菜单的最大高度。

```vue
<template>
  <YcSpace>
    <YcDropdown :popup-max-height="100">
      <YcButton>限制高度</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
        <YcDoption value="3">选项3</YcDoption>
        <YcDoption value="4">选项4</YcDoption>
        <YcDoption value="5">选项5</YcDoption>
        <YcDoption value="6">选项6</YcDoption>
      </template>
    </YcDropdown>
    
    <YcDropdown :popup-max-height="false">
      <YcButton>不限制高度</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
        <YcDoption value="3">选项3</YcDoption>
      </template>
    </YcDropdown>
  </YcSpace>
</template>
```

## 主题设置

通过 `theme` 属性设置下拉菜单的主题。

```vue
<template>
  <YcSpace>
    <YcDropdown theme="light">
      <YcButton>浅色主题</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcDoption>
      </template>
    </YcDropdown>
    
    <YcDropdown theme="dark">
      <YcButton>深色主题</YcButton>
      <template #content>
        <YcDoption value="1">选项1</YcDoption>
        <YcDoption value="2">选项2</YcOption>
      </template>
    </YcDropdown>
  </YcSpace>
</template>
```

## 底部内容

通过 `footer` 插槽添加底部内容。

```vue
<template>
  <YcDropdown>
    <YcButton>底部内容</YcButton>
    <template #content>
      <YcDoption value="1">选项1</YcDoption>
      <YcDoption value="2">选项2</YcDoption>
      <YcDoption value="3">选项3</YcDoption>
    </template>
    <template #footer>
      <div style="padding: 8px 12px; border-top: 1px solid #f0f0f0;">
        <YcButton size="small" type="text">更多操作</YcButton>
      </div>
    </template>
  </YcDropdown>
</template>
```

## 事件处理

监听下拉菜单的各种事件。

```vue
<template>
  <YcDropdown 
    @select="onSelect"
    @popup-visible-change="onVisibleChange"
  >
    <YcButton>事件处理</YcButton>
    <template #content>
      <YcDoption value="1">选项1</YcDoption>
      <YcDoption value="2">选项2</YcDoption>
      <YcDoption value="3">选项3</YcDoption>
    </template>
  </YcDropdown>
</template>

<script setup>
const onSelect = (value, ev) => {
  console.log('选择的值:', value);
};

const onVisibleChange = (visible) => {
  console.log('显示状态变化:', visible);
};
</script>
```

## 完整示例

一个完整的下拉菜单使用示例。

```vue
<template>
  <div class="page">
    <YcSpace direction="vertical" size="large">
      <div>
        <h3>基础下拉菜单</h3>
        <YcDropdown @select="onSelect">
          <YcButton>
            操作菜单
            <YcIcon-down style="margin-left: 4px;" />
          </YcButton>
          <template #content>
            <YcDoption value="edit">
              <template #icon>
                <YcIcon-edit style="margin-right: 8px;" />
              </template>
              编辑
            </YcDoption>
            <YcDoption value="delete">
              <template #icon>
                <YcIcon-delete style="margin-right: 8px;" />
              </template>
              删除
            </YcDoption>
            <YcDoption value="copy">
              <template #icon>
                <YcIcon-copy style="margin-right: 8px;" />
              </template>
              复制
            </YcDoption>
          </template>
        </YcDropdown>
      </div>
      
      <div>
        <h3>分组下拉菜单</h3>
        <YcDropdown>
          <YcButton>分组菜单</YcButton>
          <template #content>
            <YcDgroup title="文件操作">
              <YcDoption value="new">新建</YcDoption>
              <YcDoption value="open">打开</YcDoption>
              <YcDoption value="save">保存</YcDoption>
            </YcDgroup>
            
            <YcDgroup title="编辑操作">
              <YcDoption value="cut">剪切</YcDoption>
              <YcDoption value="copy">复制</YcDoption>
              <YcDoption value="paste">粘贴</YcDoption>
            </YcDgroup>
          </template>
        </YcDropdown>
      </div>
      
      <div>
        <h3>子菜单</h3>
        <YcDropdown>
          <YcButton>子菜单</YcButton>
          <template #content>
            <YcDoption value="1">选项1</YcDoption>
            <YcDsubmenu>
              <template #default>
                <span>更多操作</span>
                <YcIcon-right style="margin-left: 8px;" />
              </template>
              <template #content>
                <YcDoption value="sub1">子选项1</YcDoption>
                <YcDoption value="sub2">子选项2</YcDoption>
              </template>
            </YcDsubmenu>
            <YcDoption value="3">选项3</YcDoption>
          </template>
        </YcDropdown>
      </div>
    </YcSpace>
  </div>
</template>

<script setup>
const onSelect = (value, ev) => {
  console.log('选择的值:', value);
};
</script>

<style scoped>
.page {
  padding: 24px;
}
</style>
```

## API

### Dropdown Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| popupVisible | 是否显示下拉菜单 | `boolean` | - |
| defaultPopupVisible | 默认是否显示 | `boolean` | `false` |
| trigger | 触发方式 | `TriggerType` | `'click'` |
| position | 下拉菜单位置 | `DropdownPosition` | `'bottom'` |
| popupContainer | 弹窗挂载容器 | `PopupContainer` | - |
| hideOnSelect | 选择后是否隐藏 | `boolean` | `true` |
| alignPoint | 是否对齐到触发点 | `boolean` | `false` |
| triggerProps | 触发器属性 | `TriggerProps` | `{}` |
| popupMaxHeight | 最大高度 | `number \| boolean` | `200` |
| theme | 主题 | `Theme` | `'light'` |

### Doption Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | `DoptionValue` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| isSubmenu | 是否为子菜单 | `boolean` | - |
| isActive | 是否激活 | `boolean` | - |

### Dsubmenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `boolean` | `false` |
| trigger | 触发方式 | `DsubmenuTrigger` | - |
| position | 位置 | `DsubmenuPosition` | - |
| popupVisible | 是否显示 | `boolean` | - |
| defaultPopupVisible | 默认是否显示 | `boolean` | - |
| triggerProps | 触发器属性 | `TriggerProps` | - |
| popupMaxHeight | 最大高度 | `number` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:popupVisible | 显示状态变化时触发 | `(value: boolean)` |
| popup-visible-change | 显示状态变化时触发 | `(value: boolean)` |
| select | 选择选项时触发 | `(value: DoptionValue, ev: MouseEvent)` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发器内容 |
| content | 下拉菜单内容 |
| footer | 底部内容 |
| icon | 选项图标 |
| suffix | 选项后缀 |

### Types

```typescript
type DoptionValue = string | number | boolean | ObjectData;
type DropdownPosition = 'top' | 'tr' | 'tl' | 'bottom' | 'br' | 'bl';
type DsubmenuTrigger = 'hover' | 'click';
type DsubmenuPosition = 'rt' | 'lt';
```

## 注意事项

1. 下拉菜单支持多种触发方式和位置
2. 子菜单可以嵌套使用，支持悬停和点击触发
3. 选项分组可以更好地组织菜单结构
4. 支持键盘导航和无障碍访问

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-dropdown {
  /* 下拉菜单容器 */
}

.yc-dropdown-list {
  /* 选项列表 */
}

.yc-dropdown-item {
  /* 选项项 */
}

.yc-dropdown-group {
  /* 选项分组 */
}

.yc-dropdown-submenu {
  /* 子菜单 */
}

.yc-dropdown-footer {
  /* 底部内容 */
}
```
