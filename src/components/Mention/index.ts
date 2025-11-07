import { App } from 'vue';
import _Mention from './index.vue';

export type MentionInstance = InstanceType<typeof _Mention>;
export * from './type';

const Mention = Object.assign(_Mention, {
  install: (app: App) => {
    app.component('Yc' + _Mention.name, _Mention);
  },
});

export default Mention;
