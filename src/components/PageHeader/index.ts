import { App } from 'vue';
import _PageHeader from './index.vue';

export type PageHeaderInstance = InstanceType<typeof _PageHeader>;
export * from './type';

const PageHeader = Object.assign(_PageHeader, {
  install: (app: App) => {
    app.component('Yc' + _PageHeader.name, _PageHeader);
  },
});

export default PageHeader;
