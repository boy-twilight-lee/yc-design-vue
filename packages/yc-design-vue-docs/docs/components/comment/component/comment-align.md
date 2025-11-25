### 对齐

通过 `align` 属性可以设置 `datetime` 和 `actions` 的对齐方式.

<div class="cell-demo vp-raw">
  <yc-comment
    author="Balzac"
    datetime="1 hour"
    align="right">
    <template #actions>
      <span
        class="action"
        key="heart"
        @click="onLikeChange">
        <span v-if="like">
          <IconHeartFill :style="{ color: '#f53f3f' }" />
        </span>
        <span v-else>
          <IconHeart />
        </span>
        {{ 83 + (like ? 1 : 0) }}
      </span>
      <span
        class="action"
        key="star"
        @click="onStarChange">
        <span v-if="star">
          <IconStarFill style="{ color: '#ffb400' }" />
        </span>
        <span v-else>
          <IconStar />
        </span>
        {{ 3 + (star ? 1 : 0) }}
      </span>
      <span
        class="action"
        key="reply">
        <IconMessage /> Reply
      </span>
    </template>
    <template #avatar>
      <yc-avatar>
        <img
          alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
      </yc-avatar>
    </template>
    <template #content>
      <div>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process.
      </div>
    </template>
  </yc-comment>
</div>

<script setup>
import { ref } from 'vue';
const like = ref(false);
const star = ref(false);
const onLikeChange = () => {
  like.value = !like.value;
};
const onStarChange = () => {
  star.value = !star.value;
};
</script>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.action:hover {
  background: var(--color-fill-3);
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
  <yc-comment
    author="Balzac"
    datetime="1 hour"
    align="right">
    <template #actions>
      <span
        class="action"
        key="heart"
        @click="onLikeChange">
        <span v-if="like">
          <IconHeartFill :style="{ color: '#f53f3f' }" />
        </span>
        <span v-else>
          <IconHeart />
        </span>
        {{ 83 + (like ? 1 : 0) }}
      </span>
      <span
        class="action"
        key="star"
        @click="onStarChange">
        <span v-if="star">
          <IconStarFill style="{ color: '#ffb400' }" />
        </span>
        <span v-else>
          <IconStar />
        </span>
        {{ 3 + (star ? 1 : 0) }}
      </span>
      <span
        class="action"
        key="reply">
        <IconMessage /> Reply
      </span>
    </template>
    <template #avatar>
      <yc-avatar>
        <img
          alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
      </yc-avatar>
    </template>
    <template #content>
      <div>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process.
      </div>
    </template>
  </yc-comment>
</template>

<script setup>
import { ref } from 'vue';
const like = ref(false);
const star = ref(false);
const onLikeChange = () => {
  like.value = !like.value;
};
const onStarChange = () => {
  star.value = !star.value;
};
</script>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.action:hover {
  background: var(--color-fill-3);
}
</style>
```

</details>
