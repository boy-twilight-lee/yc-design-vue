import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
const _hoisted_1 = { class: "yc-dropdown-group-title text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dgroup"
  },
  __name: "Dgroup",
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
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
