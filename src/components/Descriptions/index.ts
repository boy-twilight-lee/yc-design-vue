import { App } from 'vue';
import _Descriptions from './Descriptions.vue';
import _DescriptionsItem from './DescriptionsItem.vue';

export type DescriptionsInstance = InstanceType<typeof _Descriptions>;
export type DescriptionsItemInstance = InstanceType<typeof _DescriptionsItem>;
export * from './type';

const Descriptions = Object.assign(_Descriptions, {
  item: _DescriptionsItem,
  install: (app: App) => {
    app.component('Yc' + _Descriptions.name, _Descriptions);
    app.component('Yc' + _DescriptionsItem.name, _DescriptionsItem);
  },
});
export { _DescriptionsItem as DescriptionsItem };

declare module 'vue' {
  interface GlobalComponents {
    YcDescriptions: typeof Descriptions;
    YcDescriptionsItem: typeof _DescriptionsItem;
  }
}

export default Descriptions;
