### 自定义

通过自定义参数以实现更多的水印效果。

<div class="cell-demo vp-raw">
  <a-form
    size="small"
    :model="form"
    auto-label-width
    style="width:100%">
    <yc-row :gutter="16">
      <yc-col :span="24">
        <a-form-item
          field="rotate"
          label="rotate">
          <yc-slider
            v-model="form.rotate"
            :min="-180"
            :max="180" />
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="gap">
          <yc-input-group>
            <yc-input-number
              v-model="form.gap[0]"
              placeholder="gap[x]"
              :min="0" />
            <yc-input-number
              v-model="form.gap[1]"
              placeholder="gap[y]"
              :min="0" />
          </yc-input-group>
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="offset">
          <yc-input-group>
            <yc-input-number
              v-model="form.offset[0]"
              placeholder="offsetLeft" />
            <yc-input-number
              v-model="form.offset[1]"
              placeholder="offsetTop" />
          </yc-input-group>
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="fontSize">
          <yc-input-number
            v-model="form.font.fontSize"
            mode="button" />
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="zIndex">
          <yc-input-number
            v-model="form.zIndex"
            mode="button" />
        </a-form-item>
      </yc-col>
      <yc-col :span="6">
        <a-form-item label="repeat">
          <yc-switch v-model="form.repeat" />
        </a-form-item>
      </yc-col>
      <yc-col :span="6">
        <a-form-item label="staggered">
          <yc-switch v-model="form.staggered" />
        </a-form-item>
      </yc-col>
    </yc-row>
  </a-form>
  <yc-watermark
    content="yc-design"
    v-bind="form">
    <div style="width: 100%; border: 1px solid #e5e6eb; box-sizing: border-box">
      <yc-typography-title :heading="5"> Design system </yc-typography-title>
      <yc-typography>
        <yc-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design.
        </yc-typography-paragraph>
        <yc-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design.
        </yc-typography-paragraph>
      </yc-typography>
      <img
        style="position: relative; z-index: 7"
        src="https://p1-yc-byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp" />
    </div>
  </yc-watermark>
</div>

<script setup>
import { reactive } from 'vue';
import { Form as AForm, FormItem as AFormItem } from '@arco-design/web-vue';
const form = reactive({
  rotate: 0,
  gap: [50, 50],
  offset: [],
  font: { fontSize: 16 },
  zIndex: 6,
  repeat: true,
  staggered: true,
});
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
    size="small"
    :model="form"
    auto-label-width>
    <yc-row :gutter="16">
      <yc-col :span="24">
        <a-form-item
          field="rotate"
          label="rotate">
          <yc-slider
            v-model="form.rotate"
            :min="-180"
            :max="180" />
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="gap">
          <yc-input-group>
            <yc-input-number
              v-model="form.gap[0]"
              placeholder="gap[x]"
              :min="0" />
            <yc-input-number
              v-model="form.gap[1]"
              placeholder="gap[y]"
              :min="0" />
          </yc-input-group>
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="offset">
          <yc-input-group>
            <yc-input-number
              v-model="form.offset[0]"
              placeholder="offsetLeft" />
            <yc-input-number
              v-model="form.offset[1]"
              placeholder="offsetTop" />
          </yc-input-group>
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="fontSize">
          <yc-input-number
            v-model="form.font.fontSize"
            mode="button" />
        </a-form-item>
      </yc-col>
      <yc-col :span="12">
        <a-form-item label="zIndex">
          <yc-input-number
            v-model="form.zIndex"
            mode="button" />
        </a-form-item>
      </yc-col>
      <yc-col :span="6">
        <a-form-item label="repeat">
          <yc-switch v-model="form.repeat" />
        </a-form-item>
      </yc-col>
      <yc-col :span="6">
        <a-form-item label="staggered">
          <yc-switch v-model="form.staggered" />
        </a-form-item>
      </yc-col>
    </yc-row>
  </a-form>
  <yc-watermark
    content="yc-design"
    v-bind="form">
    <div style="width: 100%; border: 1px solid #e5e6eb; box-sizing: border-box">
      <yc-typography-title :heading="5"> Design system </yc-typography-title>
      <yc-typography>
        <yc-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design.
        </yc-typography-paragraph>
        <yc-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design.
        </yc-typography-paragraph>
      </yc-typography>
      <img
        style="position: relative; z-index: 7"
        src="https://p1-yc-byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp" />
    </div>
  </yc-watermark>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({
  rotate: 0,
  gap: [50, 50],
  offset: [],
  font: { fontSize: 16 },
  zIndex: 6,
  repeat: true,
  staggered: true,
});
</script>
```

</details>
