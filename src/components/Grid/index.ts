import { App } from 'vue';
import _Col from './GridCol.vue';
import _Row from './GridRow.vue';
import _Grid from './Grid.vue';
import _GridItem from './GridItem.vue';

export type RowInstance = InstanceType<typeof _Row>;
export type ColInstance = InstanceType<typeof _Col>;
export * from './type';

const Grid = Object.assign(_Grid, {
  col: _Col,
  row: _Row,
  item: _GridItem,
  install: (app: App) => {
    app.component('Yc' + _Grid.name, _Grid);
    app.component('Yc' + _GridItem.name, _GridItem);
    app.component('Yc' + _Row.name, _Row);
    app.component('Yc' + _Col.name, _Col);
  },
});

export { _Col as GridCol, _Row as GridRow, _GridItem as GridItem };

export default Grid;
