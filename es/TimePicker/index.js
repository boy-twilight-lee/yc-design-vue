import _TimePicker from "./TimePicker.vue.js";
const TimePicker = Object.assign(_TimePicker, {
  install: (app) => {
    app.component("Yc" + _TimePicker.name, _TimePicker);
  }
});
export {
  TimePicker as default
};
