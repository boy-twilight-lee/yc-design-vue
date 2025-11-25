import { App } from 'vue';
import _Typography from './Typography.vue';
import _TypographyParagraph from './TypographyParagraph.vue';
import _TypographyTitle from './TypographyTitle.vue';
import _TypographyText from './TypographyText.vue';

export type TypographyInstance = InstanceType<typeof _Typography>;
export type TypographyParagraphInstance = InstanceType<
  typeof _TypographyParagraph
>;
export type TypographyTitleInstance = InstanceType<typeof _TypographyTitle>;
export type TypographyTextInstance = InstanceType<typeof _TypographyText>;

export * from './type';

const Typography = Object.assign(_Typography, {
  install: (app: App) => {
    app.component('Yc' + _Typography.name, _Typography);
    app.component('Yc' + _TypographyParagraph.name, _TypographyParagraph);
    app.component('Yc' + _TypographyTitle.name, _TypographyTitle);
    app.component('Yc' + _TypographyText.name, _TypographyText);
  },
});

export {
  _TypographyParagraph as TypographyParagraph,
  _TypographyTitle as TypographyTitle,
  _TypographyText as TypographyText,
};

export default Typography;
