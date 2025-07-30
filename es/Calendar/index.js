import _Calendar from "./Calendar.vue.js";
const Calendar = Object.assign(_Calendar, {
  install: (app) => {
    app.component("Yc" + _Calendar.name, _Calendar);
  }
});
export {
  Calendar as default
};
