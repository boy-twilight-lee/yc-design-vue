import { defineComponent, toRefs, useSlots, computed, openBlock, createElementBlock, Fragment, renderList, createBlock, resolveDynamicComponent, normalizeStyle, unref, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Avatar from "./index.js";
import Popover from "../Popover/index.js";
const _hoisted_1 = { class: "yc-avatar-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "AvatarGroup"
  },
  __name: "AvatarGroup",
  props: {
    shape: { default: "round" },
    size: { default: 40 },
    autoFixFontSize: { type: Boolean, default: true },
    maxCount: { default: 0 },
    zIndexAscend: { type: Boolean, default: false },
    maxStyle: { default: () => {
      return {};
    } },
    maxPopoverTriggerProps: { default: () => {
      return {};
    } }
  },
  setup(__props) {
    const props = __props;
    const { maxCount } = toRefs(props);
    useContext().provide(props);
    const slots = useSlots();
    const nodes = computed(() => {
      var _a;
      const avatars = findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        Avatar.name
      );
      return {
        visible: maxCount.value > 0 ? avatars.slice(0, maxCount.value) : avatars,
        hide: avatars.slice(maxCount.value)
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value.visible, (node, index) => {
          return openBlock(), createBlock(resolveDynamicComponent(node), {
            key: index,
            style: normalizeStyle({
              zIndex: _ctx.zIndexAscend ? index + 1 : nodes.value.visible.length - index,
              marginLeft: index ? unref(valueToPx)(-_ctx.size / 4) : ""
            })
          }, null, 8, ["style"]);
        }), 128)),
        unref(maxCount) > 0 && nodes.value.hide.length ? (openBlock(), createBlock(unref(Popover), {
          key: 0,
          "trigger-props": _ctx.maxPopoverTriggerProps
        }, {
          content: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value.hide, (node, index) => {
              return openBlock(), createBlock(resolveDynamicComponent(node), {
                key: index,
                style: normalizeStyle({
                  border: "2px solid #fff",
                  zIndex: _ctx.zIndexAscend ? index + 1 : nodes.value.hide.length - index,
                  marginLeft: index ? unref(valueToPx)(-_ctx.size / 4) : ""
                })
              }, null, 8, ["style"]);
            }), 128))
          ]),
          default: withCtx(() => [
            createVNode(unref(Avatar), {
              style: normalizeStyle({
                zIndex: _ctx.zIndexAscend ? nodes.value.visible.length : 0,
                marginLeft: unref(valueToPx)(-_ctx.size / 4),
                ..._ctx.maxStyle
              })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`+${nodes.value.hide.length}`), 1)
              ]),
              _: 1
            }, 8, ["style"])
          ]),
          _: 1
        }, 8, ["trigger-props"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
