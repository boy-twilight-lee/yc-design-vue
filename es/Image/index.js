import _Image from "./Image.vue.js";
import ImagePreview from "./ImagePreview.vue.js";
import _sfc_main from "./ImagePreviewGroup.vue.js";
import ImagePreviewAction from "./ImagePreviewAction.vue.js";
const Image = Object.assign(_Image, {
  preview: ImagePreview,
  ["preview-group"]: _sfc_main,
  action: ImagePreviewAction,
  install: (app) => {
    app.component("Yc" + _Image.name, _Image);
    app.component("Yc" + ImagePreview.name, ImagePreview);
    app.component("Yc" + _sfc_main.name, _sfc_main);
    app.component("Yc" + ImagePreviewAction.name, ImagePreviewAction);
  }
});
export {
  ImagePreview,
  ImagePreviewAction,
  _sfc_main as ImagePreviewGroup,
  Image as default
};
