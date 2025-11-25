import {
  provide as _provide,
  inject,
  onBeforeUnmount,
  computed,
  Reactive,
  reactive,
} from 'vue';
import { nanoid } from '@shared/utils';

const COMMENT_CONTEXT_KEY = 'comment-context';
type CommentContext = {
  depths: Reactive<Map<string, string>>;
};

export default function useCommentContext() {
  const { depths } = inject<CommentContext>(COMMENT_CONTEXT_KEY, {
    depths: reactive(new Map()),
  });
  const hasChildren = computed(() => depths.size > 1);
  const id = nanoid();
  depths.set(id, id);
  onBeforeUnmount(() => {
    depths.delete(id);
  });
  _provide<CommentContext>(COMMENT_CONTEXT_KEY, {
    depths,
  });
  return {
    hasChildren,
  };
}
