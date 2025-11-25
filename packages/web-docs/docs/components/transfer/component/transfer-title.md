### 自定义标题栏

通过 `source-title` , `target-title` 插槽自定义标题栏的渲染内容

<div class="cell-demo vp-raw">
  <yc-transfer
    :data="data"
    :default-value="value">
    <template
      #source-title="{
        countTotal,
        countSelected,
        checked,
        indeterminate,
        onSelectAllChange,
      }">
      <div :style="styleHeader">
        Source Title {{ countSelected }}-{{ countTotal }}
        <yc-checkbox
          :model-value="checked"
          :indeterminate="indeterminate"
          @change="onSelectAllChange" />
      </div>
    </template>
    <template #target-title="{ countTotal, countSelected, onClear }">
      <div :style="styleHeader">
        Target Title {{ countSelected }}-{{ countTotal }}
        <IconDelete @click="onClear" />
      </div>
    </template>
  </yc-transfer>
</div>

<script setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`,
  }));
const value = ['option1', 'option3', 'option5'];

const styleHeader = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '8px',
};
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-transfer
    :data="data"
    :default-value="value">
    <template
      #source-title="{
        countTotal,
        countSelected,
        checked,
        indeterminate,
        onSelectAllChange,
      }">
      <div :style="styleHeader">
        Source Title {{ countSelected }}-{{ countTotal }}
        <yc-checkbox
          :model-value="checked"
          :indeterminate="indeterminate"
          @change="onSelectAllChange" />
      </div>
    </template>

    <template #target-title="{ countTotal, countSelected, onClear }">
      <div :style="styleHeader">
        Target Title {{ countSelected }}-{{ countTotal }}
        <IconDelete @click="onClear" />
      </div>
    </template>
  </yc-transfer>
</template>

<script setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`,
  }));
const value = ['option1', 'option3', 'option5'];

const styleHeader = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '8px',
};
</script>
```

</details>
