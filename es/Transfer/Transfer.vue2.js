import { defineComponent, openBlock, createElementBlock, normalizeClass, createVNode, unref, withCtx, renderSlot, createBlock, createCommentVNode } from "vue";
import useContext from "./hooks/useContext.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import TransferPanel from "./TransferPanel.vue.js";
import Button from "../Button/index.js";
const _hoisted_1 = {
  key: 0,
  class: "yc-transfer-operations"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Transfer"
  },
  __name: "Transfer",
  props: {
    data: { default: () => [] },
    modelValue: { default: void 0 },
    defaultValue: { default: () => [] },
    selected: { default: void 0 },
    defaultSelected: { default: () => [] },
    disabled: { type: Boolean, default: false },
    simple: { type: Boolean, default: false },
    oneWay: { type: Boolean, default: false },
    showSearch: { type: Boolean, default: false },
    showSelectAll: { type: Boolean, default: true },
    title: { default: () => ["Source", "Target"] },
    sourceInputSearchProps: { default: () => {
      return {};
    } },
    targetInputSearchProps: { default: () => {
      return {};
    } }
  },
  emits: ["update:selected", "update:modelValue", "change", "select", "search"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { computedValue, targetChecked, computedSelected, sourceChecked } = useContext().provide(props, emits);
    const handleAdd = () => {
      const checked = [...sourceChecked.value];
      computedValue.value = [...computedValue.value, ...sourceChecked.value];
      computedSelected.value = computedSelected.value.filter(
        (item) => !checked.includes(item)
      );
    };
    const handleDel = () => {
      const checked = [...targetChecked.value];
      computedValue.value = computedValue.value.filter(
        (item) => !checked.includes(item)
      );
      computedSelected.value = computedSelected.value.filter(
        (item) => !checked.includes(item)
      );
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-transfer",
          {
            "yc-transfer-simple": _ctx.simple,
            "yc-transfer-has-search": _ctx.showSearch
          }
        ])
      }, [
        createVNode(TransferPanel, { type: "source" }),
        !_ctx.simple ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(unref(Button), {
            disabled: !unref(sourceChecked).length || _ctx.disabled,
            shape: "circle",
            onClick: handleAdd
          }, {
            icon: withCtx(() => [
              renderSlot(_ctx.$slots, "to-target-icon", {}, () => [
                createVNode(unref(_sfc_main$1))
              ], true)
            ]),
            _: 3
          }, 8, ["disabled"]),
          !_ctx.oneWay ? (openBlock(), createBlock(unref(Button), {
            key: 0,
            disabled: !unref(targetChecked).length || _ctx.disabled,
            shape: "circle",
            onClick: handleDel
          }, {
            icon: withCtx(() => [
              renderSlot(_ctx.$slots, "to-source-icon", {}, () => [
                createVNode(unref(_sfc_main$1), { rotate: 180 })
              ], true)
            ]),
            _: 3
          }, 8, ["disabled"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(TransferPanel, { type: "target" })
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
