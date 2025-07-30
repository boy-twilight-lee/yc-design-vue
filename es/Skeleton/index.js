import _sfc_main from "./Skeleton.vue.js";
import SkeletonShape from "./SkeletonShape.vue.js";
import SkeletonLine from "./SkeletonLine.vue.js";
const Skeleton = Object.assign(_sfc_main, {
  shape: SkeletonShape,
  line: SkeletonLine,
  install: (app) => {
    app.component("Yc" + _sfc_main.name, _sfc_main);
    app.component("Yc" + SkeletonShape.name, SkeletonShape);
    app.component("Yc" + SkeletonLine.name, SkeletonLine);
  }
});
export {
  SkeletonLine,
  SkeletonShape,
  Skeleton as default
};
