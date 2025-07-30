import _sfc_main from "./GridCol.vue.js";
import GridRow from "./GridRow.vue.js";
import _Grid from "./Grid.vue.js";
import _sfc_main$1 from "./GridItem.vue.js";
const Grid = Object.assign(_Grid, {
  col: _sfc_main,
  row: GridRow,
  item: _sfc_main$1,
  install: (app) => {
    app.component("Yc" + _Grid.name, _Grid);
    app.component("Yc" + _sfc_main$1.name, _sfc_main$1);
    app.component("Yc" + GridRow.name, GridRow);
    app.component("Yc" + _sfc_main.name, _sfc_main);
  }
});
export {
  _sfc_main as GridCol,
  _sfc_main$1 as GridItem,
  GridRow,
  Grid as default
};
