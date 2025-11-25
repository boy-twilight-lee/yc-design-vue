import { App } from 'vue';
import _Pagination from './Pagination.vue';

export type PaginationInstance = InstanceType<typeof _Pagination>;
export * from './type';

const Pagination = Object.assign(_Pagination, {
  install: (app: App) => {
    app.component('Yc' + _Pagination.name, _Pagination);
  },
});

export default Pagination;
