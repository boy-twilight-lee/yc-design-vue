### 布局示例

当 `span` 所占列数大于 `column` 可放置的数据个数时，`span` 会被设置为 `column` 的值，当行剩余列数不够放置下一列时将自动换行，每行末尾列会自动填充剩余量。

<div class="cell-demo vp-raw">
  <a-form
    :model="form"
    auto-label-widt 
    style="width:100%"h>
    <a-form-item label="size">
      <yc-radio-group
        v-model="form.size"
        type="button"
        :options="sizeOptions" />
    </a-form-item>
    <a-form-item label="layout">
      <yc-radio-group
        v-model="form.layout"
        type="button"
        :options="layoutOptions" />
    </a-form-item>
    <a-form-item label="table-layout">
      <yc-radio-group
        v-model="form.tableLayout"
        type="button"
        :options="['auto', 'fixed']" />
    </a-form-item>
    <a-form-item label="column">
      <yc-radio-group
        v-model="form.column"
        type="button"
        :options="columnOptions" />
    </a-form-item>
    <a-form-item label="firstSpan">
      <yc-radio-group
        v-model="form.firstSpan"
        type="button"
        :options="firstSpanOptions" />
    </a-form-item>
  </a-form>
  <div style="margin-top: 20px">
    <yc-descriptions
      title="Layout Example"
      :size="form.size"
      :column="form.column"
      :layout="form.layout"
      :table-layout="form.tableLayout"
      bordered>
      <yc-descriptions-item
        label="Item1"
        :span="form.firstSpan">
        <div>
          Span：{{ form.firstSpan }}
          <span
            v-if="form.firstSpan > form.column"
            style="color: red;">
            Exceeds Column, set to Column size
          </span>
        </div>
      </yc-descriptions-item>
      <yc-descriptions-item
        label="Item2"
        :span="2"
        >Span：2</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item3"
        :span="3"
        >Span：3</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item4"
        :span="2"
        >Span：2</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item5"
        :span="1"
        >Span：1</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item6"
        :span="1"
        >Span：1</yc-descriptions-item
      >
    </yc-descriptions>
  </div>
</div>

<script setup>
import { reactive } from 'vue';
import { Form as AForm, FormItem as AFormItem } from '@arco-design/web-vue';
const form = reactive({
  size: 'medium',
  layout: 'horizontal',
  column: 4,
  tableLayout: 'auto',
  firstSpan: 2,
});
const layoutOptions = [
  'horizontal',
  'inline-horizontal',
  'vertical',
  'inline-vertical',
];
const columnOptions = [1, 2, 3, 4, 5];
const firstSpanOptions = [1, 2, 3, 4, 5];
const sizeOptions = ['mini', 'small', 'medium', 'large'];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <a-form
    :model="form"
    auto-label-width>
    <a-form-item label="size">
      <yc-radio-group
        v-model="form.size"
        type="button"
        :options="sizeOptions" />
    </a-form-item>

    <a-form-item label="layout">
      <yc-radio-group
        v-model="form.layout"
        type="button"
        :options="layoutOptions" />
    </a-form-item>

    <a-form-item label="table-layout">
      <yc-radio-group
        v-model="form.tableLayout"
        type="button"
        :options="['auto', 'fixed']" />
    </a-form-item>

    <a-form-item label="column">
      <yc-radio-group
        v-model="form.column"
        type="button"
        :options="columnOptions" />
    </a-form-item>

    <a-form-item label="firstSpan">
      <yc-radio-group
        v-model="form.firstSpan"
        type="button"
        :options="firstSpanOptions" />
    </a-form-item>
  </a-form>
  <div style="margin-top: 20px">
    <yc-descriptions
      title="Layout Example"
      :size="form.size"
      :column="form.column"
      :layout="form.layout"
      :table-layout="form.tableLayout"
      bordered>
      <yc-descriptions-item
        label="Item1"
        :span="form.firstSpan">
        <div>
          Span：{{ form.firstSpan }}
          <span
            v-if="form.firstSpan > form.column"
            style="color: red;">
            Exceeds Column, set to Column size
          </span>
        </div>
      </yc-descriptions-item>
      <yc-descriptions-item
        label="Item2"
        :span="2"
        >Span：2</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item3"
        :span="3"
        >Span：3</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item4"
        :span="2"
        >Span：2</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item5"
        :span="1"
        >Span：1</yc-descriptions-item
      >
      <yc-descriptions-item
        label="Item6"
        :span="1"
        >Span：1</yc-descriptions-item
      >
    </yc-descriptions>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({
  size: 'medium',
  layout: 'horizontal',
  column: 4,
  tableLayout: 'auto',
  firstSpan: 2,
});
const layoutOptions = [
  'horizontal',
  'inline-horizontal',
  'vertical',
  'inline-vertical',
];
const columnOptions = [1, 2, 3, 4, 5];
const firstSpanOptions = [1, 2, 3, 4, 5];
const sizeOptions = ['mini', 'small', 'medium', 'large'];
</script>
```

</details>
