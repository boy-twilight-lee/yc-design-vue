import { App } from 'vue';
import _ResizeBox from './index.vue';

export type ResizeBoxInstance = InstanceType<typeof _ResizeBox>;
export * from './type';

const ResizeBox = Object.assign(_ResizeBox, {
  install: (app: App) => {
    app.component('Yc' + _ResizeBox.name, _ResizeBox);
  },
});

export default ResizeBox;
