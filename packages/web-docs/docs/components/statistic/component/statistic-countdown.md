### 倒计时组件

倒计时组件 `countdown` 的基本使用方法。

<div class="cell-demo vp-raw">
  <yc-row>
    <yc-col :flex="1">
      <yc-countdown
        title="Countdown"
        :value="now + 1000 * 60 * 60 * 2"
        :now="now" />
    </yc-col>
    <yc-col :flex="1">
      <yc-countdown
        title="Milliseconds"
        :value="now + 1000 * 60 * 60 * 2"
        :now="now"
        format="HH:mm:ss.SSS" />
    </yc-col>
    <yc-col :flex="1">
      <yc-countdown
        title="Days"
        :value="now + 1000 * 60 * 60 * 24 * 4"
        :now="now"
        format="D 天 H 时 m 分 s 秒" />
    </yc-col>
  </yc-row>
  <yc-space
    direction="vertical"
    style="margin-top: 10px">
    <yc-countdown
      title="Trigger on finish"
      :value="Date.now() + 5 * 1000"
      format="mm:ss.SSS"
      :now="Date.now()"
      :start="start"
      @finish="handleFinish" />
    <yc-button
      @click="start = true"
      type="primary"
      >Start</yc-button
    >
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';
const now = Date.now();
const start = ref(false);
const handleFinish = () => {
  Message.info('Finish');
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
  <yc-row>
    <yc-col :flex="1">
      <yc-countdown
        title="Countdown"
        :value="now + 1000 * 60 * 60 * 2"
        :now="now" />
    </yc-col>
    <yc-col :flex="1">
      <yc-countdown
        title="Milliseconds"
        :value="now + 1000 * 60 * 60 * 2"
        :now="now"
        format="HH:mm:ss.SSS" />
    </yc-col>
    <yc-col :flex="1">
      <yc-countdown
        title="Days"
        :value="now + 1000 * 60 * 60 * 24 * 4"
        :now="now"
        format="D 天 H 时 m 分 s 秒" />
    </yc-col>
  </yc-row>
  <yc-space
    direction="vertical"
    style="margin-top: 10px">
    <yc-countdown
      title="Trigger on finish"
      :value="Date.now() + 5 * 1000"
      format="mm:ss.SSS"
      :now="Date.now()"
      :start="start"
      @finish="handleFinish" />
    <yc-button
      @click="start = true"
      type="primary"
      >Start</yc-button
    >
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';
const now = Date.now();
const start = ref(false);
const handleFinish = () => {
  Message.info('Finish');
};
</script>
```

</details>
