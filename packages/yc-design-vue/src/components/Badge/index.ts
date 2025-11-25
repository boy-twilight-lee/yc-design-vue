import { App } from 'vue';
import _Badge from './index.vue';

export type BadgeInstance = InstanceType<typeof _Badge>;
export * from './type';

const Badge = Object.assign(_Badge, {
  install: (app: App) => {
    app.component('Yc' + _Badge.name, _Badge);
  },
});

export default Badge;
