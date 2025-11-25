### 横向时间轴

可以通过 `direction` 设置展示横向时间轴

<div class="cell-demo vp-raw">
  <div>
    <yc-row
      align="center"
      :style="{ marginBottom: '24px' }">
      <yc-typography-text>mode: &nbsp; &nbsp;</yc-typography-text>
      <yc-radio-group
        @change="onChange"
        :modelValue="mode">
        <yc-radio value="top">top</yc-radio>
        <yc-radio value="bottom">bottom</yc-radio>
        <yc-radio value="alternate">alternate</yc-radio>
      </yc-radio-group>
    </yc-row>
    <yc-timeline
      direction="horizontal"
      pending
      :mode="mode">
      <yc-timeline-item label="2012-08">
        <yc-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" />
          <div :style="{ marginBottom: '12px' }">
            Toutiao
            <div :style="{ fontSize: '12px', color: '#4E5969' }">
              Founded in 2012
            </div>
          </div>
        </yc-row>
      </yc-timeline-item>
      <yc-timeline-item label="2017-05">
        <yc-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png" />
          <div :style="{ marginBottom: '12px' }">
            Xigua Video
            <div :style="{ fontSize: '12px', color: '#4E5969' }">
              Founded in 2017
            </div>
          </div>
        </yc-row>
      </yc-timeline-item>
      <yc-timeline-item label="2018-07">
        <yc-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png" />
          <div :style="{ marginBottom: '12px' }">
            Pipidance
            <div :style="{ fontSize: '12px', color: '#4E5969' }">
              Founded in 2018
            </div>
          </div>
        </yc-row>
      </yc-timeline-item>
    </yc-timeline>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const mode = ref('top');
const onChange = (_mode) => {
  mode.value = _mode;
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
  <div>
    <yc-row
      align="center"
      :style="{ marginBottom: '24px' }">
      <yc-typography-text>mode: &nbsp; &nbsp;</yc-typography-text>
      <yc-radio-group
        @change="onChange"
        :modelValue="mode">
        <yc-radio value="top">top</yc-radio>
        <yc-radio value="bottom">bottom</yc-radio>
        <yc-radio value="alternate">alternate</yc-radio>
      </yc-radio-group>
    </yc-row>
    <yc-timeline
      direction="horizontal"
      pending
      :mode="mode">
      <yc-timeline-item label="2012-08">
        <yc-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" />
          <div :style="{ marginBottom: '12px' }">
            Toutiao
            <div :style="{ fontSize: '12px', color: '#4E5969' }">
              Founded in 2012
            </div>
          </div>
        </yc-row>
      </yc-timeline-item>
      <yc-timeline-item label="2017-05">
        <yc-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png" />
          <div :style="{ marginBottom: '12px' }">
            Xigua Video
            <div :style="{ fontSize: '12px', color: '#4E5969' }">
              Founded in 2017
            </div>
          </div>
        </yc-row>
      </yc-timeline-item>
      <yc-timeline-item label="2018-07">
        <yc-row :style="{ display: 'inline-flex', alignItems: 'center' }">
          <img
            width="40"
            :style="{ marginRight: '16px', marginBottom: '12px' }"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/385ed540c359ec8a9b9ce2b5fe89b098.png~tplv-uwbnlip3yd-png.png" />
          <div :style="{ marginBottom: '12px' }">
            Pipidance
            <div :style="{ fontSize: '12px', color: '#4E5969' }">
              Founded in 2018
            </div>
          </div>
        </yc-row>
      </yc-timeline-item>
    </yc-timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mode = ref('top');
const onChange = (_mode) => {
  mode.value = _mode;
};
</script>
```

</details>
