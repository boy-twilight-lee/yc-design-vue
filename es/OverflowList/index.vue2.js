import { defineComponent, toRefs, ref, useSlots, computed, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, Fragment, renderList, createBlock, resolveDynamicComponent, createCommentVNode, renderSlot, createVNode, withCtx, createTextVNode, toDisplayString } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep, valueToPx, throttle } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { findComponentsFromVnodes, unrefElement } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import { useResizeObserver } from "../node_modules/@vueuse/core/index.js";
import Tag from "../Tag/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "OverflowList"
  },
  __name: "index",
  props: {
    min: { default: 0 },
    margin: { default: 8 },
    from: { default: "end" }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { min, margin, from } = toRefs(props);
    const max = ref(1e4);
    const widths = ref([]);
    const slots = useSlots();
    const tags = computed(() => {
      var _a;
      return findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        Tag.name
      );
    });
    const listRef = ref();
    const overflowRef = ref();
    const overFlowWidth = computed(() => {
      if (!overflowRef.value)
        return margin.value;
      return unrefElement(overflowRef).offsetWidth + margin.value;
    });
    const overflowNumber = computed(() => {
      return tags.value.length - max.value;
    });
    useResizeObserver(
      listRef,
      throttle(async () => {
        await sleep(0);
        let maxCount = 0;
        let totalWidth = 0;
        const listWidth = listRef.value.offsetWidth;
        for (let i = 0; i < widths.value.length; i++) {
          const gap = i > 0 ? margin.value : 0;
          const newWidth = totalWidth + gap + widths.value[i];
          if (newWidth > listWidth) {
            break;
          }
          totalWidth = newWidth;
          maxCount++;
        }
        max.value = maxCount > min.value ? maxCount : min.value;
      }, 180)
    );
    watch(
      () => max.value,
      () => {
        emits("change", overflowNumber.value);
      }
    );
    watch(
      () => tags.value.length,
      async () => {
        max.value = 1e5;
        await sleep(0);
        const cur = [...document.querySelectorAll("#overflowTag")].map((item) => {
          return item.offsetWidth;
        });
        widths.value = cur;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yc-overflow-list", `yc-overflow-list-from-${unref(from)}`]),
        style: normalizeStyle({
          gap: unref(valueToPx)(unref(margin)),
          padding: unref(from) == "start" ? `0 0 0 ${unref(valueToPx)(overFlowWidth.value)}` : ` 0 ${unref(valueToPx)(overFlowWidth.value)} 0 0`
        }),
        ref_key: "listRef",
        ref: listRef
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (node, i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [
            i < max.value ? (openBlock(), createBlock(resolveDynamicComponent(node), {
              key: 0,
              id: "overflowTag"
            })) : createCommentVNode("", true)
          ], 64);
        }), 128)),
        max.value < tags.value.length ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-overflow-tag",
          ref_key: "overflowRef",
          ref: overflowRef
        }, [
          renderSlot(_ctx.$slots, "overflow", { number: overflowNumber.value }, () => [
            createVNode(unref(Tag), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`+${overflowNumber.value}`), 1)
              ]),
              _: 1
            })
          ], true)
        ], 512)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
