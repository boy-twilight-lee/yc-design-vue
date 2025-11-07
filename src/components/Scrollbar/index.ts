import { App } from 'vue';
import _Scrollbar from './Scrollbar.vue';

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>;
export * from './type';

const Scrollbar = Object.assign(_Scrollbar, {
  install: (app: App) => {
    app.component('Yc' + _Scrollbar.name, _Scrollbar);
  },
});

export default Scrollbar;
