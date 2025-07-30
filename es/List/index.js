import _List from "./List.vue.js";
import ListItem from "./ListItem.vue.js";
import ListItemMeta from "./ListItemMeta.vue.js";
const List = Object.assign(_List, {
  item: ListItem,
  ["item-meta"]: ListItemMeta,
  install: (app) => {
    app.component("Yc" + _List.name, _List);
    app.component("Yc" + ListItem.name, ListItem);
    app.component("Yc" + ListItemMeta.name, ListItemMeta);
  }
});
export {
  ListItem,
  ListItemMeta,
  List as default
};
