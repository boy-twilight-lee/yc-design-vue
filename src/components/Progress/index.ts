import { App } from 'vue';
import _Progress from './Progress.vue';

export type ProgressInstance = InstanceType<typeof _Progress>;
export * from './type';

const Progress = Object.assign(_Progress, {
  install: (app: App) => {
    app.component('Yc' + _Progress.name, _Progress);
  },
});

export default Progress;
