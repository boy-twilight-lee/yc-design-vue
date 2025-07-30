import { h } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { isServerRendering } from "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _Icon from "./index.vue.js";
const Icon = Object.assign(_Icon, {
  install: (app) => {
    app.component("Yc" + _Icon.name, _Icon);
  },
  urlCache: /* @__PURE__ */ new Map(),
  addFromIconFontCn(options) {
    const { src, extraProps = {} } = options;
    if ((src == null ? void 0 : src.length) && !isServerRendering && !this.urlCache.has(src)) {
      const script = document.createElement("script");
      script.setAttribute("src", src);
      script.setAttribute("data-namespace", src);
      document.body.appendChild(script);
      this.urlCache.set(src, src);
    }
    return h(_Icon, {
      ...extraProps
    });
  }
});
export {
  Icon as default
};
