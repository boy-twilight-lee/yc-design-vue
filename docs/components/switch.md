# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时
- 和 checkbox 的区别是，switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合

## 基础用法

最简单的开关用法。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSwitch v-model="checked" />
    <div>当前状态: {{ checked ? '开启' : '关闭' }}</div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## 尺寸设置

通过 `size` 属性设置开关尺寸。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>小尺寸</h4>
      <YcSwitch v-model="checked1" size="small" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>中等尺寸</h4>
      <YcSwitch v-model="checked2" size="medium" />
      <div>状态: {{ checked2 ? '开启' : '关闭' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>
```

## 类型设置

通过 `type` 属性设置开关类型。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>圆形开关</h4>
      <YcSwitch v-model="checked1" type="circle" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>圆角开关</h4>
      <YcSwitch v-model="checked2" type="round" />
      <div>状态: {{ checked2 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>线条开关</h4>
      <YcSwitch v-model="checked3" type="line" />
      <div>状态: {{ checked3 ? '开启' : '关闭' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
const checked3 = ref(false);
</script>
```

## 自定义值

通过 `checkedValue` 和 `uncheckedValue` 属性自定义开关的值。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认值 (true/false)</h4>
      <YcSwitch v-model="defaultChecked" />
      <div>值: {{ defaultChecked }}</div>
    </div>
    
    <div>
      <h4>自定义值 (on/off)</h4>
      <YcSwitch 
        v-model="customChecked" 
        checked-value="on"
        unchecked-value="off"
      />
      <div>值: {{ customChecked }}</div>
    </div>
    
    <div>
      <h4>数字值 (1/0)</h4>
      <YcSwitch 
        v-model="numberChecked" 
        :checked-value="1"
        :unchecked-value="0"
      />
      <div>值: {{ numberChecked }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const defaultChecked = ref(false);
const customChecked = ref('off');
const numberChecked = ref(0);
</script>
```

## 自定义颜色

通过 `checkedColor` 和 `uncheckedColor` 属性自定义开关颜色。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认颜色</h4>
      <YcSwitch v-model="checked1" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>自定义颜色</h4>
      <YcSwitch 
        v-model="checked2" 
        checked-color="#52c41a"
        unchecked-color="#d9d9d9"
      />
      <div>状态: {{ checked2 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>主题色</h4>
      <YcSwitch 
        v-model="checked3" 
        checked-color="#1890ff"
        unchecked-color="#bfbfbf"
      />
      <div>状态: {{ checked3 ? '开启' : '关闭' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
const checked3 = ref(false);
</script>
```

## 文字显示

通过 `checkedText` 和 `uncheckedText` 属性显示文字。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>无文字</h4>
      <YcSwitch v-model="checked1" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>有文字</h4>
      <YcSwitch 
        v-model="checked2" 
        checked-text="开启"
        unchecked-text="关闭"
      />
      <div>状态: {{ checked2 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>英文文字</h4>
      <YcSwitch 
        v-model="checked3" 
        checked-text="ON"
        unchecked-text="OFF"
      />
      <div>状态: {{ checked3 ? '开启' : '关闭' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
const checked3 = ref(false);
</script>
```

## 自定义图标

通过插槽自定义开关图标。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>默认图标</h4>
      <YcSwitch v-model="checked1" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>自定义图标</h4>
      <YcSwitch v-model="checked2">
        <template #checked-icon>
          <span class="custom-icon">✓</span>
        </template>
        <template #unchecked-icon>
          <span class="custom-icon">✗</span>
        </template>
      </YcSwitch>
      <div>状态: {{ checked2 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>表情图标</h4>
      <YcSwitch v-model="checked3">
        <template #checked-icon>
          <span class="emoji-icon">😊</span>
        </template>
        <template #unchecked-icon>
          <span class="emoji-icon">😢</span>
        </template>
      </YcSwitch>
      <div>状态: {{ checked3 ? '开启' : '关闭' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
const checked3 = ref(false);
</script>

<style scoped>
.custom-icon {
  font-size: 12px;
  font-weight: bold;
}

.emoji-icon {
  font-size: 14px;
}
</style>
```

## 加载状态

通过 `loading` 属性显示加载状态。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常状态</h4>
      <YcSwitch v-model="checked1" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>加载状态</h4>
      <YcSwitch v-model="checked2" :loading="true" />
      <div>状态: {{ checked2 ? '开启' : '关闭' }}（加载中）</div>
    </div>
    
    <div>
      <h4>动态加载</h4>
      <YcSwitch 
        v-model="checked3" 
        :loading="isLoading"
        @change="handleChange"
      />
      <div>状态: {{ checked3 ? '开启' : '关闭' }}</div>
      <div>加载状态: {{ isLoading ? '加载中' : '完成' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
const checked3 = ref(false);
const isLoading = ref(false);

const handleChange = async (value) => {
  isLoading.value = true;
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>
```

## 禁用状态

通过 `disabled` 属性禁用开关。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>正常状态</h4>
      <YcSwitch v-model="checked" />
      <div>状态: {{ checked ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>禁用状态</h4>
      <YcSwitch v-model="checked" disabled />
      <div>状态: {{ checked ? '开启' : '关闭' }}（禁用）</div>
    </div>
    
    <div>
      <h4>禁用且加载</h4>
      <YcSwitch v-model="checked" disabled :loading="true" />
      <div>状态: {{ checked ? '开启' : '关闭' }}（禁用且加载中）</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## 切换前确认

通过 `beforeChange` 属性在切换前进行确认。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <div>
      <h4>普通切换</h4>
      <YcSwitch v-model="checked1" />
      <div>状态: {{ checked1 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>切换前确认</h4>
      <YcSwitch 
        v-model="checked2" 
        :before-change="beforeChange"
      />
      <div>状态: {{ checked2 ? '开启' : '关闭' }}</div>
    </div>
    
    <div>
      <h4>异步确认</h4>
      <YcSwitch 
        v-model="checked3" 
        :before-change="asyncBeforeChange"
      />
      <div>状态: {{ checked3 ? '开启' : '关闭' }}</div>
    </div>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);

const beforeChange = (newValue) => {
  const action = newValue ? '开启' : '关闭';
  return confirm(`确定要${action}吗？`);
};

const asyncBeforeChange = async (newValue) => {
  const action = newValue ? '开启' : '关闭';
  // 模拟异步确认
  await new Promise(resolve => setTimeout(resolve, 1000));
  return confirm(`确定要${action}吗？（异步确认）`);
};
</script>
```

## 事件处理

监听开关的各种事件。

```vue
<template>
  <YcSpace direction="vertical" size="large">
    <YcSwitch 
      v-model="checked" 
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
    
    <div>当前状态: {{ checked ? '开启' : '关闭' }}</div>
    <div>变化次数: {{ changeCount }}</div>
    <div>焦点状态: {{ focusStatus }}</div>
    
    <YcSpace>
      <YcButton @click="setChecked(true)">设为开启</YcButton>
      <YcButton @click="setChecked(false)">设为关闭</YcButton>
    </YcSpace>
  </YcSpace>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const changeCount = ref(0);
const focusStatus = ref('未聚焦');

const onChange = (value, ev) => {
  changeCount.value++;
  console.log('开关状态变化:', value, ev);
};

const onFocus = (ev) => {
  focusStatus.value = '已聚焦';
  console.log('开关获得焦点:', ev);
};

const onBlur = (ev) => {
  focusStatus.value = '失去焦点';
  console.log('开关失去焦点:', ev);
};

const setChecked = (value) => {
  checked.value = value;
};
</script>
```

## 完整示例

一个完整的开关组件使用示例。

```vue
<template>
  <div class="page">
    <h2>Switch 开关示例</h2>
    
    <div class="section">
      <h3>基础用法</h3>
      <YcSwitch v-model="basicChecked" />
      <div>当前状态: {{ basicChecked ? '开启' : '关闭' }}</div>
    </div>
    
    <div class="section">
      <h3>尺寸设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>小尺寸</h4>
          <YcSwitch v-model="sizeChecked1" size="small" />
          <div>状态: {{ sizeChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>中等尺寸</h4>
          <YcSwitch v-model="sizeChecked2" size="medium" />
          <div>状态: {{ sizeChecked2 ? '开启' : '关闭' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>类型设置</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>圆形开关</h4>
          <YcSwitch v-model="typeChecked1" type="circle" />
          <div>状态: {{ typeChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>圆角开关</h4>
          <YcSwitch v-model="typeChecked2" type="round" />
          <div>状态: {{ typeChecked2 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>线条开关</h4>
          <YcSwitch v-model="typeChecked3" type="line" />
          <div>状态: {{ typeChecked3 ? '开启' : '关闭' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义值</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认值 (true/false)</h4>
          <YcSwitch v-model="defaultChecked" />
          <div>值: {{ defaultChecked }}</div>
        </div>
        
        <div>
          <h4>自定义值 (on/off)</h4>
          <YcSwitch 
            v-model="customChecked" 
            checked-value="on"
            unchecked-value="off"
          />
          <div>值: {{ customChecked }}</div>
        </div>
        
        <div>
          <h4>数字值 (1/0)</h4>
          <YcSwitch 
            v-model="numberChecked" 
            :checked-value="1"
            :unchecked-value="0"
          />
          <div>值: {{ numberChecked }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义颜色</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认颜色</h4>
          <YcSwitch v-model="colorChecked1" />
          <div>状态: {{ colorChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>自定义颜色</h4>
          <YcSwitch 
            v-model="colorChecked2" 
            checked-color="#52c41a"
            unchecked-color="#d9d9d9"
          />
          <div>状态: {{ colorChecked2 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>主题色</h4>
          <YcSwitch 
            v-model="colorChecked3" 
            checked-color="#1890ff"
            unchecked-color="#bfbfbf"
          />
          <div>状态: {{ colorChecked3 ? '开启' : '关闭' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>文字显示</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>无文字</h4>
          <YcSwitch v-model="textChecked1" />
          <div>状态: {{ textChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>有文字</h4>
          <YcSwitch 
            v-model="textChecked2" 
            checked-text="开启"
            unchecked-text="关闭"
          />
          <div>状态: {{ textChecked2 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>英文文字</h4>
          <YcSwitch 
            v-model="textChecked3" 
            checked-text="ON"
            unchecked-text="OFF"
          />
          <div>状态: {{ textChecked3 ? '开启' : '关闭' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>自定义图标</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>默认图标</h4>
          <YcSwitch v-model="iconChecked1" />
          <div>状态: {{ iconChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>自定义图标</h4>
          <YcSwitch v-model="iconChecked2">
            <template #checked-icon>
              <span class="custom-icon">✓</span>
            </template>
            <template #unchecked-icon>
              <span class="custom-icon">✗</span>
            </template>
          </YcSwitch>
          <div>状态: {{ iconChecked2 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>表情图标</h4>
          <YcSwitch v-model="iconChecked3">
            <template #checked-icon>
              <span class="emoji-icon">😊</span>
            </template>
            <template #unchecked-icon>
              <span class="emoji-icon">😢</span>
            </template>
          </YcSwitch>
          <div>状态: {{ iconChecked3 ? '开启' : '关闭' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>加载状态</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>正常状态</h4>
          <YcSwitch v-model="loadingChecked1" />
          <div>状态: {{ loadingChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>加载状态</h4>
          <YcSwitch v-model="loadingChecked2" :loading="true" />
          <div>状态: {{ loadingChecked2 ? '开启' : '关闭' }}（加载中）</div>
        </div>
        
        <div>
          <h4>动态加载</h4>
          <YcSwitch 
            v-model="loadingChecked3" 
            :loading="isLoading"
            @change="handleChange"
          />
          <div>状态: {{ loadingChecked3 ? '开启' : '关闭' }}</div>
          <div>加载状态: {{ isLoading ? '加载中' : '完成' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>禁用状态</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>正常状态</h4>
          <YcSwitch v-model="disabledChecked" />
          <div>状态: {{ disabledChecked ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>禁用状态</h4>
          <YcSwitch v-model="disabledChecked" disabled />
          <div>状态: {{ disabledChecked ? '开启' : '关闭' }}（禁用）</div>
        </div>
        
        <div>
          <h4>禁用且加载</h4>
          <YcSwitch v-model="disabledChecked" disabled :loading="true" />
          <div>状态: {{ disabledChecked ? '开启' : '关闭' }}（禁用且加载中）</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>切换前确认</h3>
      <YcSpace direction="vertical" size="large">
        <div>
          <h4>普通切换</h4>
          <YcSwitch v-model="confirmChecked1" />
          <div>状态: {{ confirmChecked1 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>切换前确认</h4>
          <YcSwitch 
            v-model="confirmChecked2" 
            :before-change="beforeChange"
          />
          <div>状态: {{ confirmChecked2 ? '开启' : '关闭' }}</div>
        </div>
        
        <div>
          <h4>异步确认</h4>
          <YcSwitch 
            v-model="confirmChecked3" 
            :before-change="asyncBeforeChange"
          />
          <div>状态: {{ confirmChecked3 ? '开启' : '关闭' }}</div>
        </div>
      </YcSpace>
    </div>
    
    <div class="section">
      <h3>事件处理</h3>
      <YcSwitch 
        v-model="eventChecked" 
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      />
      
      <div>当前状态: {{ eventChecked ? '开启' : '关闭' }}</div>
      <div>变化次数: {{ changeCount }}</div>
      <div>焦点状态: {{ focusStatus }}</div>
      
      <YcSpace>
        <YcButton @click="setEventChecked(true)">设为开启</YcButton>
        <YcButton @click="setEventChecked(false)">设为关闭</YcButton>
      </YcSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础用法
const basicChecked = ref(false);

// 尺寸设置
const sizeChecked1 = ref(false);
const sizeChecked2 = ref(true);

// 类型设置
const typeChecked1 = ref(false);
const typeChecked2 = ref(true);
const typeChecked3 = ref(false);

// 自定义值
const defaultChecked = ref(false);
const customChecked = ref('off');
const numberChecked = ref(0);

// 自定义颜色
const colorChecked1 = ref(false);
const colorChecked2 = ref(true);
const colorChecked3 = ref(false);

// 文字显示
const textChecked1 = ref(false);
const textChecked2 = ref(true);
const textChecked3 = ref(false);

// 自定义图标
const iconChecked1 = ref(false);
const iconChecked2 = ref(true);
const iconChecked3 = ref(false);

// 加载状态
const loadingChecked1 = ref(false);
const loadingChecked2 = ref(true);
const loadingChecked3 = ref(false);
const isLoading = ref(false);

// 禁用状态
const disabledChecked = ref(false);

// 切换前确认
const confirmChecked1 = ref(false);
const confirmChecked2 = ref(false);
const confirmChecked3 = ref(false);

// 事件处理
const eventChecked = ref(false);
const changeCount = ref(0);
const focusStatus = ref('未聚焦');

// 处理变化
const handleChange = async (value) => {
  isLoading.value = true;
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  isLoading.value = false;
};

// 切换前确认
const beforeChange = (newValue) => {
  const action = newValue ? '开启' : '关闭';
  return confirm(`确定要${action}吗？`);
};

const asyncBeforeChange = async (newValue) => {
  const action = newValue ? '开启' : '关闭';
  // 模拟异步确认
  await new Promise(resolve => setTimeout(resolve, 1000));
  return confirm(`确定要${action}吗？（异步确认）`);
};

// 事件处理函数
const onChange = (value, ev) => {
  changeCount.value++;
  console.log('开关状态变化:', value, ev);
};

const onFocus = (ev) => {
  focusStatus.value = '已聚焦';
  console.log('开关获得焦点:', ev);
};

const onBlur = (ev) => {
  focusStatus.value = '失去焦点';
  console.log('开关失去焦点:', ev);
};

const setEventChecked = (value) => {
  eventChecked.value = value;
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

.custom-icon {
  font-size: 12px;
  font-weight: bold;
}

.emoji-icon {
  font-size: 14px;
}
</style>
```

## API

### Switch Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 绑定值 | `SwitchValue` | - |
| defaultChecked | 默认值 | `SwitchValue` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| type | 开关类型 | `SwitchType` | `'circle'` |
| size | 开关尺寸 | `SwitchSize` | `'medium'` |
| checkedValue | 选中时的值 | `SwitchValue` | `true` |
| uncheckedValue | 未选中时的值 | `SwitchValue` | `false` |
| checkedColor | 选中时的颜色 | `string` | - |
| uncheckedColor | 未选中时的颜色 | `string` | - |
| checkedText | 选中时的文字 | `string` | - |
| uncheckedText | 未选中时的文字 | `string` | - |
| beforeChange | 切换前的回调函数 | `BeforeChange` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: SwitchValue)` |
| change | 状态变化时触发 | `(value: SwitchValue, ev: Event)` |
| focus | 获得焦点时触发 | `(ev: FocusEvent)` |
| blur | 失去焦点时触发 | `(ev: FocusEvent)` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| checked-icon | 选中时的图标 | - |
| unchecked-icon | 未选中时的图标 | - |
| checked | 选中时的内容 | - |
| unchecked | 未选中时的内容 | - |

### SwitchValue

| 类型 | 说明 |
| --- | --- |
| `string \| number \| boolean` | 开关值类型 |

### SwitchType

| 类型 | 说明 |
| --- | --- |
| `'circle'` | 圆形开关 |
| `'round'` | 圆角开关 |
| `'line'` | 线条开关 |

### SwitchSize

| 类型 | 说明 |
| --- | --- |
| `'small'` | 小尺寸 |
| `'medium'` | 中等尺寸 |

### BeforeChange

| 类型 | 说明 |
| --- | --- |
| `(newValue: SwitchValue) => Promise<boolean \| void> \| boolean \| void` | 切换前回调函数 |

## 注意事项

1. 可以通过 `checkedValue` 和 `uncheckedValue` 自定义开关的值
2. `beforeChange` 回调函数可以返回 `false` 或 `Promise<false>` 来阻止切换
3. 加载状态下开关不可操作
4. 禁用状态下开关不可操作

## 样式定制

组件提供了多个样式类，可以通过 CSS 进行定制：

```css
.yc-switch {
  /* 开关容器 */
}

.yc-switch-checked {
  /* 选中状态 */
}

.yc-switch-unchecked {
  /* 未选中状态 */
}

.yc-switch-disabled {
  /* 禁用状态 */
}

.yc-switch-loading {
  /* 加载状态 */
}

.yc-switch-handle {
  /* 开关手柄 */
}

.yc-switch-inner {
  /* 开关内容 */
}

.yc-switch-text {
  /* 开关文字 */
}

.yc-switch-icon {
  /* 开关图标 */
}
```
