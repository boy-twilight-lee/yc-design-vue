import _Statistic from "./Statistic.vue.js";
import _sfc_main from "./Countdown.vue.js";
const Statistic = Object.assign(_Statistic, {
  countdown: _sfc_main,
  install: (app) => {
    app.component("Yc" + _Statistic.name, _Statistic);
    app.component("Yc" + _sfc_main.name, _sfc_main);
  }
});
export {
  _sfc_main as Countdown,
  Statistic as default
};
