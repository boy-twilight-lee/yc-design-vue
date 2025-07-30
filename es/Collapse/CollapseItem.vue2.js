import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createBlock, withCtx, renderSlot, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, createVNode, withDirectives, vShow } from "vue";
import useContext from "./hooks/useContext.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconRight.vue.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import ExpandTransition from "../_shared/components/ExpandTransition.vue.js";
const _hoisted_1 = { class: "yc-collapse-item-header-title text-ellipsis" };
const _hoisted_2 = {
  key: 1,
  class: "yc-collapse-item-header-extra"
};
const _hoisted_3 = {
  key: 0,
  role: "region",
  class: "yc-collapse-item-content"
};
const _hoisted_4 = { class: "yc-collapse-item-content-box" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CollapseItem"
  },
  __name: "CollapseItem",
  props: {
    path: { default: "" },
    header: { default: "" },
    disabled: { type: Boolean, default: false },
    showExpandIcon: { type: Boolean, default: void 0 },
    destroyOnHide: { type: Boolean, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { path, disabled } = toRefs(props);
    const {
      slots,
      computedActiveKey,
      accordion,
      expandIconPosition,
      showExpandIcon,
      destroyOnHide
    } = useContext().inject(props);
    const handleClick = () => {
      if (disabled.value)
        return;
      if (computedActiveKey.value.includes(path.value)) {
        computedActiveKey.value = computedActiveKey.value.filter(
          (item) => item != path.value
        );
      } else {
        if (accordion.value) {
          computedActiveKey.value = [path.value];
        } else {
          computedActiveKey.value.push(path.value);
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-collapse-item",
          `yc-collapse-item-expand-icon-${unref(expandIconPosition)}`,
          {
            "yc-collapse-item-disabled": unref(disabled)
          }
        ])
      }, [
        createElementVNode("div", {
          role: "button",
          class: "yc-collapse-item-header",
          onClick: handleClick
        }, [
          unref(showExpandIcon) ? (openBlock(), createBlock(unref(IconButton), {
            key: 0,
            class: "yc-collapse-item-header-icon"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "expand-icon", {
                active: unref(computedActiveKey).includes(unref(path)),
                disabled: unref(disabled),
                position: unref(expandIconPosition)
              }, () => [
                unref(slots)["expand-icon"] ? (openBlock(), createBlock(resolveDynamicComponent(
                  () => {
                    var _a, _b;
                    return (_b = (_a = unref(slots))["expand-icon"]) == null ? void 0 : _b.call(_a, {
                      active: unref(computedActiveKey).includes(unref(path)),
                      disabled: unref(disabled),
                      position: unref(expandIconPosition)
                    });
                  }
                ), { key: 0 })) : (openBlock(), createBlock(unref(_sfc_main$1), {
                  key: 1,
                  color: "rgb(107, 119, 133)",
                  rotate: unref(computedActiveKey).includes(unref(path)) ? 90 : unref(expandIconPosition) == "left" ? 0 : 180
                }, null, 8, ["rotate"]))
              ], true)
            ]),
            _: 3
          })) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createTextVNode(toDisplayString(_ctx.header), 1)
            ], true)
          ]),
          _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "extra", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ]),
        createVNode(unref(ExpandTransition), null, {
          default: withCtx(() => [
            !unref(destroyOnHide) || unref(computedActiveKey).includes(unref(path)) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [
              createElementVNode("div", _hoisted_4, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ], 512)), [
              [vShow, unref(computedActiveKey).includes(unref(path))]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
