### 竖直步骤条

竖直方向的步骤条。

<div class="cell-demo vp-raw">
  <div class="frame-bg">
    <div class="frame-body">
      <div class="frame-aside">
        <yc-steps
          :current="current"
          direction="vertical">
          <yc-step>Succeeded</yc-step>
          <yc-step>Processing</yc-step>
          <yc-step>Pending</yc-step>
        </yc-steps>
      </div>
      <div class="frame-main">
        <div class="main-content">The content of this step.</div>
        <div class="main-bottom">
          <yc-button
            :disabled="current === 1"
            @click="onPrev">
            <icon-left />
            Back
          </yc-button>
          <yc-button
            :disabled="current === 3"
            @click="onNext">
            Next
            <icon-right />
          </yc-button>
        </div>
      </div>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const current = ref(1);
const onPrev = () => {
  current.value = Math.max(1, current.value - 1);
};
const onNext = () => {
  current.value = Math.min(3, current.value + 1);
};
</script>

<style scoped lang="less">
.frame-bg {
  max-width: 780px;
  padding: 40px;
  background: var(--color-fill-2);
}

.frame-body {
  display: flex;
  background: var(--color-bg-2);
}

.frame-aside {
  min-width:200px;
  padding: 24px;
  height: 272px;
  border-right: 1px solid var(--color-border);
}

.frame-main {
  width: 100%;
}

.main-content {
  text-align: center;
  line-height: 200px;
}

.main-bottom {
  display: flex;
  justify-content: center;

  button {
    margin: 0 20px;
  }
}
</style>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div class="frame-bg">
    <div class="frame-body">
      <div class="frame-aside">
        <yc-steps
          :current="current"
          direction="vertical">
          <yc-step>Succeeded</yc-step>
          <yc-step>Processing</yc-step>
          <yc-step>Pending</yc-step>
        </yc-steps>
      </div>
      <div class="frame-main">
        <div class="main-content">The content of this step.</div>
        <div class="main-bottom">
          <yc-button
            :disabled="current === 1"
            @click="onPrev">
            <icon-left />
            Back
          </yc-button>
          <yc-button
            :disabled="current === 3"
            @click="onNext">
            Next
            <icon-right />
          </yc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const current = ref(1);
const onPrev = () => {
  current.value = Math.max(1, current.value - 1);
};
const onNext = () => {
  current.value = Math.min(3, current.value + 1);
};
</script>

<style scoped lang="less">
.frame-bg {
  max-width: 780px;
  padding: 40px;
  background: var(--color-fill-2);
}

.frame-body {
  display: flex;
  background: var(--color-bg-2);
}

.frame-aside {
  padding: 24px;
  height: 272px;
  border-right: 1px solid var(--color-border);
}

.frame-main {
  width: 100%;
}

.main-content {
  text-align: center;
  line-height: 200px;
}

.main-bottom {
  display: flex;
  justify-content: center;

  button {
    margin: 0 20px;
  }
}
</style>
```

</details>
