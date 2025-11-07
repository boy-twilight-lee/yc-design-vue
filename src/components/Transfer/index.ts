import { App } from 'vue';
import _Transfer from './Transfer.vue';

export type TransferInstance = InstanceType<typeof _Transfer>;
export * from './type';

const Transfer = Object.assign(_Transfer, {
  install: (app: App) => {
    app.component('Yc' + _Transfer.name, _Transfer);
  },
});

export default Transfer;
