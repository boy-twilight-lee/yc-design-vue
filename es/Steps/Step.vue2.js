import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot, createElementVNode, createBlock, Fragment, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconCheck.vue.js";
import _sfc_main$2 from "../_shared/icons/IconClose.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-steps-item-tail"
};
const _hoisted_2 = { class: "yc-steps-item-node" };
const _hoisted_3 = { class: "yc-steps-icon" };
const _hoisted_4 = { class: "yc-steps-item-content" };
const _hoisted_5 = { class: "yc-steps-item-title" };
const _hoisted_6 = {
  key: 0,
  class: "yc-steps-item-description"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Step"
  },
  __name: "Step",
  props: {
    title: { default: "" },
    description: { default: "" },
    status: { default: void 0 },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { disabled } = toRefs(props);
    const {
      curStep,
      stepMap,
      computedCurrent,
      type,
      changeable,
      status,
      nextStatus,
      direction,
      labelPlacement,
      lineLess: _lineLess,
      small: _small,
      emits
    } = useContext().inject(props);
    const small = computed(() => {
      return type.value != "dot" ? _small.value : false;
    });
    const lineLess = computed(() => {
      return _lineLess.value || curStep.value == stepMap.size || ["arrow", "navigation"].includes(type.value);
    });
    const handleClick = (e) => {
      if (!changeable.value || disabled.value)
        return;
      computedCurrent.value = curStep.value;
      emits("change", curStep.value, e);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-steps-item",
          `yc-steps-item-${unref(direction)}`,
          `yc-steps-item-label-${unref(labelPlacement)}`,
          `yc-steps-item-${unref(status)}`,
          `yc-steps-item-next-${unref(nextStatus)}`,
          {
            "yc-steps-item-active": unref(curStep) == unref(computedCurrent) && unref(type) == "navigation",
            "yc-steps-item-line-less": lineLess.value,
            "yc-steps-item-size-small": small.value
          }
        ]),
        onClick: handleClick
      }, [
        unref(type) == "default" && (unref(direction) == "vertical" || unref(labelPlacement) == "vertical") || unref(type) == "dot" ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("", true),
        unref(type) != "arrow" ? renderSlot(_ctx.$slots, "node", {
          key: 1,
          step: unref(curStep),
          status: unref(status)
        }, () => [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("div", _hoisted_3, [
              ["default", "navigation"].includes(unref(type)) ? renderSlot(_ctx.$slots, "icon", {
                key: 0,
                status: unref(status),
                step: unref(curStep)
              }, () => [
                unref(status) == "finish" ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 0 })) : unref(status) == "error" ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 1 })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createTextVNode(toDisplayString(unref(curStep)), 1)
                ], 64))
              ], true) : createCommentVNode("", true)
            ])
          ])
        ], true) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_4, [
          createElementVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ], true)
          ]),
          _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
