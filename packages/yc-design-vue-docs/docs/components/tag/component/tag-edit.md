### 动态编辑标签

可动态添加和删除标签。

<div class="cell-demo vp-raw">
  <yc-space wrap>
    <yc-tag
      v-for="(tag, index) of tags"
      :key="tag"
      :closable="index !== 0"
      @close="handleRemove(tag)">
      {{ tag }}
    </yc-tag>
    <yc-input
      v-if="showInput"
      ref="inputRef"
      :style="{ width: '90px' }"
      size="mini"
      v-model.trim="inputVal"
      @keyup.enter="handleAdd"
      @blur="handleAdd" />
    <yc-tag
      v-else
      :style="{
        width: '90px',
        backgroundColor: 'var(--color-fill-2)',
        border: '1px dashed var(--color-fill-3)',
        cursor: 'pointer',
      }"
      @click="handleEdit">
      <template #icon>
        <icon-plus />
      </template>
      Add Tag
    </yc-tag>

  </yc-space>
</div>

<script setup>
import { ref, nextTick } from 'vue';

const tags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputRef = ref(null);
const showInput = ref(false);
const inputVal = ref('');

const handleEdit = () => {
  showInput.value = true;

  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus();
    }
  });
};

const handleAdd = () => {
  if (inputVal.value) {
    tags.value.push(inputVal.value);
    inputVal.value = '';
  }
  showInput.value = false;
};

const handleRemove = (key) => {
  tags.value = tags.value.filter((tag) => tag !== key);
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
  <yc-space wrap>
    <yc-tag
      v-for="(tag, index) of tags"
      :key="tag"
      :closable="index !== 0"
      @close="handleRemove(tag)">
      {{ tag }}
    </yc-tag>

    <yc-input
      v-if="showInput"
      ref="inputRef"
      :style="{ width: '90px' }"
      size="mini"
      v-model.trim="inputVal"
      @keyup.enter="handleAdd"
      @blur="handleAdd" />
    <yc-tag
      v-else
      :style="{
        width: '90px',
        backgroundColor: 'var(--color-fill-2)',
        border: '1px dashed var(--color-fill-3)',
        cursor: 'pointer',
      }"
      @click="handleEdit">
      <template #icon>
        <icon-plus />
      </template>
      Add Tag
    </yc-tag>
  </yc-space>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const tags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputRef = ref(null);
const showInput = ref(false);
const inputVal = ref('');

const handleEdit = () => {
  showInput.value = true;

  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus();
    }
  });
};

const handleAdd = () => {
  if (inputVal.value) {
    tags.value.push(inputVal.value);
    inputVal.value = '';
  }
  showInput.value = false;
};

const handleRemove = (key) => {
  tags.value = tags.value.filter((tag) => tag !== key);
};
</script>
```

</details>
