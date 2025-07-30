import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, createBlock, resolveDynamicComponent, withCtx, renderSlot, createVNode, toDisplayString, createCommentVNode } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isString } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import TimelineItem from "./TimelineItem.vue.js";
import Spin from "../Spin/index.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Timeline"
  },
  __name: "Timeline",
  props: {
    reverse: { type: Boolean, default: false },
    direction: { default: "vertical" },
    mode: { default: (props) => {
      return props.direction == "horizontal" ? "top" : "left";
    } },
    pending: { type: [Boolean, String], default: false },
    labelPosition: { default: "same" }
  },
  setup(__props) {
    const props = __props;
    const { direction, mode, timelineItems } = useContext().provide(props);
    const getPoistion = (i) => {
      if (mode.value != "alternate") {
        return mode.value;
      }
      if (direction.value == "horizontal") {
        return i % 2 == 0 ? "top" : "bottom";
      } else {
        return i % 2 == 0 ? "left" : "right";
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "list",
        class: normalizeClass([
          "yc-timeline",
          `yc-timeline-direction-${unref(direction)}`,
          `yc-timeline-${unref(mode)}`,
          {
            "yc-timeline-reverse": _ctx.reverse
          }
        ])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(timelineItems), (node, i) => {
          return openBlock(), createBlock(resolveDynamicComponent(node), {
            key: i,
            mode: getPoistion(i)
          }, null, 8, ["mode"]);
        }), 128)),
        _ctx.pending ? (openBlock(), createBlock(TimelineItem, {
          key: 0,
          "is-ghost": ""
        }, {
          dot: withCtx(() => [
            renderSlot(_ctx.$slots, "dot", {}, () => [
              createVNode(unref(Spin), { size: 12 })
            ], true)
          ]),
          default: withCtx(() => [
            unref(isString)(_ctx.pending) ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.pending), 1)) : createCommentVNode("", true)
          ]),
          _: 3
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
