import { App } from 'vue';
import _Comment from './index.vue';

export type CommentInstance = InstanceType<typeof _Comment>;
export * from './type';

const Comment = Object.assign(_Comment, {
  install: (app: App) => {
    app.component('Yc' + _Comment.name, _Comment);
  },
});

export default Comment;
