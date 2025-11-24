import { App } from 'vue';
import _Empty from './index.vue';

export type EmptyInstance = InstanceType<typeof _Empty>;
export * from './type';

const Empty = Object.assign(_Empty, {
  install: (app: App) => {
    app.component('Yc' + _Empty.name, _Empty);
  },
});

export default Empty;
