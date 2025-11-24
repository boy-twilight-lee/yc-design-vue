import { App } from 'vue';
import _List from './List.vue';
import _ListItem from './ListItem.vue';
import _ListItemMeta from './ListItemMeta.vue';

export type ListInstance = InstanceType<typeof _List>;
export type ListItemInstance = InstanceType<typeof _ListItem>;
export type ListItemMetaInstance = InstanceType<typeof _ListItemMeta>;
export * from './type';

const List = Object.assign(_List, {
  item: _ListItem,
  ['item-meta']: _ListItemMeta,
  install: (app: App) => {
    app.component('Yc' + _List.name, _List);
    app.component('Yc' + _ListItem.name, _ListItem);
    app.component('Yc' + _ListItemMeta.name, _ListItemMeta);
  },
});

export { _ListItem as ListItem, _ListItemMeta as ListItemMeta };

export default List;
