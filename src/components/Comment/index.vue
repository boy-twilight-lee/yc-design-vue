<template>
  <div Comment class="yc-comment">
    <div v-if="$slots.avatar || avatar" class="yc-comment-avatar">
      <slot name="avatar">
        <yc-avatar :image-url="avatar" :size="hasChildren ? 32 : 40" />
      </slot>
    </div>
    <div class="yc-comment-inner">
      <div class="yc-comment-inner-content">
        <!-- title -->
        <div
          :class="[
            'yc-comment-title',
            {
              'yc-comment-title-align-left':
                align == 'left' ||
                (isObject(align) && align.datetime == 'left'),
              'yc-comment-title-align-right':
                align == 'right' ||
                (isObject(align) && align.datetime == 'right'),
            },
          ]"
        >
          <span v-if="$slots.author || author" class="yc-comment-author">
            <slot name="author">
              {{ author }}
            </slot>
          </span>
          <span v-if="$slots.datetime || datetime" class="yc-comment-datetime">
            <slot name="datetime">
              {{ datetime }}
            </slot>
          </span>
        </div>
        <!-- content -->
        <div v-if="$slots.content || content" class="yc-comment-content">
          <slot name="content">
            {{ content }}
          </slot>
        </div>
        <!-- actions -->
        <div
          v-if="$slots.actions"
          :class="[
            'yc-comment-actions',
            {
              'yc-comment-actions-align-left':
                align == 'left' ||
                (isObject(align) && align.datetime == 'left'),
              'yc-comment-actions-align-right':
                align == 'right' ||
                (isObject(align) && align.datetime == 'right'),
            },
          ]"
        >
          <slot name="actions" />
        </div>
      </div>
      <!-- comment -->
      <div v-if="$slots.default" class="yc-comment-inner-comment">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CommentProps, CommentSlots } from './type';
import { isObject } from '@shared/utils';
import useContext from './hooks/useContext';
import YcAvatar from '@/components/Avatar';
defineOptions({
  name: 'Comment',
});
defineSlots<CommentSlots>();
withDefaults(defineProps<CommentProps>(), {
  author: '',
  avatar: '',
  content: '',
  datetime: '',
  align: 'left',
});
const { hasChildren } = useContext();
</script>

<style lang="less" scoped>
@import './style/comment.less';
</style>
