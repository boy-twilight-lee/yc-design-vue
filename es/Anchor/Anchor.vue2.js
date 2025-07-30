import { defineComponent, ref, computed, onMounted, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, createCommentVNode, renderSlot } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
const _hoisted_1 = { class: "yc-anchor" };
const _hoisted_2 = {
  key: 0,
  class: "yc-anchor-line-track"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Anchor"
  },
  __name: "Anchor",
  props: {
    boundary: { default: "start" },
    lineLess: { type: Boolean, default: false },
    scrollContainer: { default: void 0 },
    changeHash: { type: Boolean, default: true },
    smooth: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const listRef = ref();
    const linkRefs = ref([]);
    const { curHref, hrefs } = useContext().provide(props, listRef);
    const top = computed(() => {
      const curIndex = hrefs.value.findIndex((item) => item == curHref.value);
      const offset = linkRefs.value.slice(0, curIndex + 1).map((item) => item.offsetHeight).reduce((pre, cur, index) => {
        if (index == curIndex) {
          return pre + (cur - 12) / 2;
        } else {
          return pre + cur;
        }
      }, 0);
      return offset + curIndex * 2;
    });
    onMounted(() => {
      if (!hrefs.value.length)
        return;
      curHref.value = hrefs.value[0];
      linkRefs.value = [
        ...listRef.value.querySelectorAll(
          ".yc-anchor-link"
        )
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        !_ctx.lineLess ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createElementVNode("div", {
            class: "yc-anchor-line-slider",
            style: normalizeStyle({
              top: unref(valueToPx)(top.value)
            })
          }, null, 4)
        ])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: "yc-anchor-list",
          ref_key: "listRef",
          ref: listRef
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 512)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
