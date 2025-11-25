import { App } from 'vue';
import _ColorPicker from './ColorPicker.vue';

export type ColorPickerInstance = InstanceType<typeof _ColorPicker>;
export * from './type';

const ColorPicker = Object.assign(_ColorPicker, {
  install: (app: App) => {
    app.component('Yc' + _ColorPicker.name, _ColorPicker);
  },
});

export default ColorPicker;
