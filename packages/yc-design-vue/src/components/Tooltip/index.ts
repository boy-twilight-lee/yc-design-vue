import { App } from 'vue';
import _Tooltip from './index.vue';

export type TooltipInstance = InstanceType<typeof _Tooltip>;
export * from './type';

const Tooltip = Object.assign(_Tooltip, {
  install: (app: App) => {
    app.component('Yc' + _Tooltip.name, _Tooltip);
  },
});

export default Tooltip;
