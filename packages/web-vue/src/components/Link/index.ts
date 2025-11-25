import { App } from 'vue';
import _Link from './index.vue';

export type LinkInstance = InstanceType<typeof _Link>;
export * from './type';

const Link = Object.assign(_Link, {
  install: (app: App) => {
    app.component('Yc' + _Link.name, _Link);
  },
});

export default Link;
