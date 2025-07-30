import _Card from "./Card.vue.js";
import CardMeta from "./CardMeta.vue.js";
import CardGrid from "./CardGrid.vue.js";
const Card = Object.assign(_Card, {
  meta: CardMeta,
  grid: CardGrid,
  install: (app) => {
    app.component("Yc" + _Card.name, _Card);
    app.component("Yc" + CardMeta.name, CardMeta);
    app.component("Yc" + CardGrid.name, CardGrid);
  }
});
export {
  CardGrid,
  CardMeta,
  Card as default
};
