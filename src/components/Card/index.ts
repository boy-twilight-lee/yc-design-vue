import { App } from 'vue';
import _Card from './Card.vue';
import _CardMeta from './CardMeta.vue';
import _CardGrid from './CardGrid.vue';

export type CardInstance = InstanceType<typeof _Card>;
export type CardMetaInstance = InstanceType<typeof _CardMeta>;
export type CardGridInstance = InstanceType<typeof _CardGrid>;
export * from './type';

const Card = Object.assign(_Card, {
  meta: _CardMeta,
  grid: _CardGrid,
  install: (app: App) => {
    app.component('Yc' + _Card.name, _Card);
    app.component('Yc' + _CardMeta.name, _CardMeta);
    app.component('Yc' + _CardGrid.name, _CardGrid);
  },
});

export { _CardMeta as CardMeta, _CardGrid as CardGrid };

declare module 'vue' {
  interface GlobalComponents {
    YcCard: typeof Card;
    YcCardMeta: typeof _CardMeta;
    YcCardGrid: typeof _CardGrid;
  }
}

export default Card;
