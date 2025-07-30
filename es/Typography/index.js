import _sfc_main from "./Typography.vue.js";
import "./Typography.vue2.js";
import TypographyParagraph from "./TypographyParagraph.vue.js";
import TypographyTitle from "./TypographyTitle.vue.js";
import _sfc_main$1 from "./TypographyText.vue.js";
const Typography = Object.assign(_sfc_main, {
  install: (app) => {
    app.component("Yc" + _sfc_main.name, _sfc_main);
    app.component("Yc" + TypographyParagraph.name, TypographyParagraph);
    app.component("Yc" + TypographyTitle.name, TypographyTitle);
    app.component("Yc" + _sfc_main$1.name, _sfc_main$1);
  }
});
export {
  TypographyParagraph,
  _sfc_main$1 as TypographyText,
  TypographyTitle,
  Typography as default
};
