import _Pagination from "./Pagination.vue.js";
const Pagination = Object.assign(_Pagination, {
  install: (app) => {
    app.component("Yc" + _Pagination.name, _Pagination);
  }
});
export {
  Pagination as default
};
