### 额外操作

组件提供了具名插槽 `extra` 供用户在页脚定制额外的内容。

<div class="cell-demo vp-raw">
  <yc-image
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    title="A user’s avatar"
    description="Present by Arco Design"
    width="260"
    style="margin-right: 67px; vertical-align: top;"
    :preview-visible="visible1"
    @preview-visible-change="
      () => {
        visible1 = false;
      }
    ">
    <template #extra>
      <div class="actions">
        <span
          class="action"
          @click="
            () => {
              visible1 = true;
            }
          "
          ><icon-eye
        /></span>
        <span
          class="action"
          @click="onDownLoad"
          ><icon-download
        /></span>
        <yc-tooltip content="A user’s avatar">
          <span class="action"><icon-info-circle /></span>
        </yc-tooltip>
      </div>
    </template>
  </yc-image>
  <yc-image
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    title="A user’s avatar"
    description="Present by Arco Design"
    width="260"
    footer-position="outer"
    :preview-visible="visible2"
    @preview-visible-change="
      () => {
        visible2 = false;
      }
    ">
    <template #extra>
      <div class="actions actions-outer">
        <span
          class="action"
          @click="
            () => {
              visible2 = true;
            }
          "
          ><icon-eye
        /></span>
        <span
          class="action"
          @click="onDownLoad"
          ><icon-download
        /></span>
        <yc-tooltip content="A user’s avatar">
          <span class="action"><icon-info-circle /></span>
        </yc-tooltip>
      </div>
    </template>
  </yc-image>
</div>

<script setup>
import { ref } from 'vue';
const visible1 = ref(false);
const visible2 = ref(false);
const onDownLoad = () => {
  console.log('download');
};
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
}
.action {
  padding: 5px 4px;
  font-size: 14px;
  margin-left: 12px;
  border-radius: 2px;
  line-height: 1;
  cursor: pointer;
}
.action:first-child {
  margin-left: 0;
}

.action:hover {
  background: rgba(0, 0, 0, 0.5);
}
.actions-outer {
  .action {
    &:hover {
      color: #ffffff;
    }
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
  <yc-image
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    title="A user’s avatar"
    description="Present by Arco Design"
    width="260"
    style="margin-right: 67px; vertical-align: top;"
    :preview-visible="visible1"
    @preview-visible-change="
      () => {
        visible1 = false;
      }
    ">
    <template #extra>
      <div class="actions">
        <span
          class="action"
          @click="
            () => {
              visible1 = true;
            }
          "
          ><icon-eye
        /></span>
        <span
          class="action"
          @click="onDownLoad"
          ><icon-download
        /></span>
        <yc-tooltip content="A user’s avatar">
          <span class="action"><icon-info-circle /></span>
        </yc-tooltip>
      </div>
    </template>
  </yc-image>
  <yc-image
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    title="A user’s avatar"
    description="Present by Arco Design"
    width="260"
    footer-position="outer"
    :preview-visible="visible2"
    @preview-visible-change="
      () => {
        visible2 = false;
      }
    ">
    <template #extra>
      <div class="actions actions-outer">
        <span
          class="action"
          @click="
            () => {
              visible2 = true;
            }
          "
          ><icon-eye
        /></span>
        <span
          class="action"
          @click="onDownLoad"
          ><icon-download
        /></span>
        <yc-tooltip content="A user’s avatar">
          <span class="action"><icon-info-circle /></span>
        </yc-tooltip>
      </div>
    </template>
  </yc-image>
</template>

<script setup>
import { ref } from 'vue';
const visible1 = ref(false);
const visible2 = ref(false);
const onDownLoad = () => {
  console.log('download');
};
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
}
.action {
  padding: 5px 4px;
  font-size: 14px;
  margin-left: 12px;
  border-radius: 2px;
  line-height: 1;
  cursor: pointer;
}
.action:first-child {
  margin-left: 0;
}

.action:hover {
  background: rgba(0, 0, 0, 0.5);
}
.actions-outer {
  .action {
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
```

</details>
