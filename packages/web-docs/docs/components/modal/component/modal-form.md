### 弹出层表单

在对话框中使用表单

<div class="cell-demo vp-raw">
  <yc-button @click="handleClick">Open Form Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    title="Modal Form"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk">
    <a-form :model="form">
      <a-form-item
        field="name"
        label="Name">
        <yc-input v-model="form.name" />
      </a-form-item>
      <a-form-item
        field="post"
        label="Post">
        <yc-select v-model="form.post">
          <yc-option value="post1">Post1</yc-option>
          <yc-option value="post2">Post2</yc-option>
          <yc-option value="post3">Post3</yc-option>
          <yc-option value="post4">Post4</yc-option>
        </yc-select>
      </a-form-item>
    </a-form>
  </yc-modal>
</div>

<script setup>
import { reactive, ref } from 'vue';
import { Form as AForm, FormItem as AFormItem } from '@arco-design/web-vue';
const visible = ref(false);
const form = reactive({
  name: '',
  post: '',
});
const handleClick = () => {
  visible.value = true;
};
const handleBeforeOk = (done) => {
  console.log(form);
  window.setTimeout(() => {
    done();
    // prevent close
    // done(false)
  }, 3000);
};
const handleCancel = () => {
  visible.value = false;
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
  <yc-button @click="handleClick">Open Form Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    title="Modal Form"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk">
    <a-form :model="form">
      <a-form-item
        field="name"
        label="Name">
        <yc-input v-model="form.name" />
      </a-form-item>
      <a-form-item
        field="post"
        label="Post">
        <yc-select v-model="form.post">
          <yc-option value="post1">Post1</yc-option>
          <yc-option value="post2">Post2</yc-option>
          <yc-option value="post3">Post3</yc-option>
          <yc-option value="post4">Post4</yc-option>
        </yc-select>
      </a-form-item>
    </a-form>
  </yc-modal>
</template>

<script setup>
import { reactive, ref } from 'vue';
const visible = ref(false);
const form = reactive({
  name: '',
  post: '',
});
const handleClick = () => {
  visible.value = true;
};
const handleBeforeOk = (done) => {
  console.log(form);
  window.setTimeout(() => {
    done();
    // prevent close
    // done(false)
  }, 3000);
};
const handleCancel = () => {
  visible.value = false;
};
</script>
```

</details>
