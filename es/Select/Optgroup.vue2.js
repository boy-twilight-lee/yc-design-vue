import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
const _hoisted_1 = { class: "yc-option-group-label text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Optgroup"
  },
  __name: "Optgroup",
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ], true)
        ]),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
