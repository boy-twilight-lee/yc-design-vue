import { App } from 'vue';
import _Tooltip from './index.vue';

export type TooltipInstance = InstanceType<typeof _Tooltip>;
export * from './type';

const Tooltip = Object.assign(_Tooltip, {
  install: (app: App) => {
    app.component('Yc' + _Tooltip.name, _Tooltip);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcTooltip: typeof Tooltip;
  }
}

export default Tooltip;
