import { defineComponent, toRefs, useSlots, computed, openBlock, createElementBlock, Fragment, renderList, createBlock, unref, resolveDynamicComponent, createCommentVNode, renderSlot, createVNode, withCtx, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isString } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import "./index.js";
import BreadcrumbSeparator from "./BreadcrumbSeparator.vue.js";
import _sfc_main$1 from "./BreadcrumbMore.vue.js";
import BreadcrumbItem from "./BreadcrumbItem.vue.js";
const _hoisted_1 = { class: "yc-breadcrumb" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Breadcrumb"
  },
  __name: "Breadcrumb",
  props: {
    maxCount: { default: 0 },
    routes: { default: () => [] },
    separator: { default: "" },
    customUrl: { type: Function, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { maxCount, routes } = toRefs(props);
    const slots = useSlots();
    const breadcrumbItems = computed(() => {
      var _a;
      const nodes = findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        BreadcrumbItem.name
      );
      return maxCount.value > 0 && nodes.length > maxCount.value ? [
        ...nodes.slice(0, 1),
        {
          type: "more-icon"
        },
        ...nodes.slice(nodes.length - maxCount.value + 1, nodes.length)
      ] : nodes;
    });
    const routeData = computed(() => {
      const data = routes.value.map((item, i) => {
        return {
          ...item,
          index: i
        };
      });
      return maxCount.value > 0 && data.length > maxCount.value ? [
        ...data.slice(0, 1),
        "more-icon",
        ...data.slice(data.length - maxCount.value + 1, data.length)
      ] : routes.value;
    });
    const getPaths = (index) => {
      return routes.value.slice(0, index + 1).map((item) => {
        var _a;
        return (_a = item.path) == null ? void 0 : _a.replace(/\//g, "");
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.default ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(breadcrumbItems.value, (node, i) => {
          var _a, _b;
          return openBlock(), createElementBlock(Fragment, { key: i }, [
            (node == null ? void 0 : node.type) == "more-icon" ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              slots: unref(slots)
            }, null, 8, ["slots"])) : (openBlock(), createBlock(resolveDynamicComponent(node), { key: 1 })),
            i < breadcrumbItems.value.length - 1 ? (openBlock(), createBlock(BreadcrumbSeparator, {
              key: 2,
              separator: _ctx.separator,
              "separator-slots": _ctx.$slots.separator,
              "item-separator": (_a = node.props) == null ? void 0 : _a.separator,
              "item-separator-slots": (_b = node.children) == null ? void 0 : _b.separator
            }, null, 8, ["separator", "separator-slots", "item-separator", "item-separator-slots"])) : createCommentVNode("", true)
          ], 64);
        }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(routeData.value, (route, i) => {
          return openBlock(), createElementBlock(Fragment, {
            key: route.path
          }, [
            unref(isString)(route) ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              slots: unref(slots)
            }, null, 8, ["slots"])) : renderSlot(_ctx.$slots, "item-render", {
              key: 1,
              route,
              routes: unref(routes),
              paths: getPaths(route.index)
            }, () => {
              var _a;
              return [
                createVNode(unref(BreadcrumbItem), {
                  path: route.index == routeData.value.length - 1 ? route.path : ((_a = _ctx.customUrl) == null ? void 0 : _a.call(_ctx, getPaths(route.index))) ?? route.path,
                  droplist: route.children
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(route.label), 1)
                  ]),
                  _: 2
                }, 1032, ["path", "droplist"])
              ];
            }, true),
            i < unref(routes).length - 1 ? (openBlock(), createBlock(BreadcrumbSeparator, {
              key: 2,
              separator: _ctx.separator,
              "separator-slots": _ctx.$slots.separator
            }, null, 8, ["separator", "separator-slots"])) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
