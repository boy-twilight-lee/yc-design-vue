### 允许清除

通过设置 `allow-clear` ，显示清除按钮。

<div class="cell-demo vp-raw">
  <yc-select
    :style="{ width: '320px' }"
    v-model="value"
    placeholder="Please select ..."
    allow-clear>
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
  </yc-select>
</div>

<script>
import { ref } from 'vue';
const value = ref('Shanghai');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-select
    :style="{ width: '320px' }"
    v-model="value"
    placeholder="Please select ..."
    allow-clear>
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
  </yc-select>
</template>

<script>
import { ref } from 'vue';
const value = ref('Shanghai');
</script>
```

</details>
