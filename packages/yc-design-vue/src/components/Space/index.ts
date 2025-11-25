import { App } from 'vue';
import _Space from './index.vue';

export type SpaceInstance = InstanceType<typeof _Space>;
export * from './type';

const Space = Object.assign(_Space, {
  install: (app: App) => {
    app.component('Yc' + _Space.name, _Space);
  },
});

export default Space;
