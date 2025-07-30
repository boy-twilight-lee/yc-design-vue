import { defineComponent, ref, useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createBlock, withCtx, createVNode, createCommentVNode, normalizeStyle, Fragment, renderList, renderSlot, resolveDynamicComponent, nextTick } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { valueToPx } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$2 from "../_shared/icons/IconArrowRight.vue.js";
import _sfc_main$3 from "../_shared/icons/IconPlus.vue.js";
import useContext from "./hooks/useContext.js";
import useTabsScroll from "./hooks/useTabsScroll.js";
import _sfc_main$1 from "./TabPane.vue.js";
import "./TabPane.vue2.js";
import TabsTab from "./TabsTab.vue.js";
import TabsNavInk from "./TabsNavInk.vue.js";
import TabButton from "./TabButton.vue.js";
const _hoisted_1 = { class: "yc-tabs-nav" };
const _hoisted_2 = {
  key: 3,
  class: "yc-tabs-nav-extra"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Tabs"
  },
  __name: "Tabs",
  props: {
    activeKey: { default: void 0 },
    defaultActiveKey: { default: "" },
    position: { default: void 0 },
    size: { default: void 0 },
    type: { default: "line" },
    direction: { default: "horizontal" },
    editable: { type: Boolean, default: false },
    showAddButton: { type: Boolean, default: false },
    destoryOnHide: { type: Boolean, default: false },
    justify: { type: Boolean, default: false },
    animation: { type: Boolean, default: false },
    headerPadding: { type: Boolean, default: true },
    autoSwitch: { type: Boolean, default: false },
    hideContent: { type: Boolean, default: false },
    trigger: { default: "click" }
  },
  emits: ["update:activeKey", "change", "tab-click", "add", "delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const listRef = ref();
    const { computedActiveKey, size, direction, autoSwitch, position } = useContext().provide(props, emits, listRef);
    const slots = useSlots();
    const tabPanes = computed(
      () => {
        var _a;
        return findComponentsFromVnodes(((_a = slots.default) == null ? void 0 : _a.call(slots)) || [], _sfc_main$1.name);
      }
    );
    const panes = computed(() => {
      return tabPanes.value.map((item) => {
        return {
          title: "",
          path: "",
          disabled: false,
          ...item.props || {},
          slots: item.children
        };
      });
    });
    const showAddButton = computed(() => {
      return props.showAddButton && ["line", "card", "card-gutter"].includes(props.type);
    });
    const curIndex = computed(() => {
      const index = panes.value.findIndex((item) => {
        return item.path == computedActiveKey.value;
      });
      return index < 0 ? 0 : index;
    });
    const {
      scrollDis,
      isScrollable,
      preDisabled,
      nextDisabled,
      navHeight,
      handleScroll
    } = useTabsScroll({
      listRef,
      panes,
      direction
    });
    const handleAdd = async () => {
      emits("add");
      if (!autoSwitch.value)
        return;
      await nextTick();
      computedActiveKey.value = panes.value[panes.value.length - 1].path;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-tabs",
          `yc-tabs-${unref(direction)}`,
          `yc-tabs-type-${_ctx.type}`,
          `yc-tabs-size-${unref(size)}`,
          {
            "yc-tabs-animation": _ctx.animation,
            "yc-tabs-justify": unref(direction) == "horizontal" && _ctx.justify,
            "yc-tabs-no-padding": _ctx.headerPadding && ["line", "text"].includes(_ctx.type) && props.direction === "horizontal",
            [`yc-tabs-${unref(position)}`]: unref(position)
          }
        ])
      }, [
        createElementVNode("div", _hoisted_1, [
          unref(isScrollable) ? (openBlock(), createBlock(TabButton, {
            key: 0,
            disabled: unref(preDisabled),
            direction: unref(direction) == "horizontal" ? "left" : "up",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(handleScroll)("pre"))
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$2), {
                rotate: unref(direction) == "horizontal" ? 180 : -90,
                size: 14
              }, null, 8, ["rotate"])
            ]),
            _: 1
          }, 8, ["disabled", "direction"])) : createCommentVNode("", true),
          createElementVNode("div", {
            class: normalizeClass([
              "yc-tabs-nav-tab",
              {
                "yc-tabs-nav-tab-scroll": unref(isScrollable)
              }
            ])
          }, [
            createElementVNode("div", {
              class: "yc-tabs-nav-tab-list",
              style: normalizeStyle({
                transform: `translate${unref(direction) == "horizontal" ? "X" : "Y"}(${unref(valueToPx)(unref(scrollDis))})`
              }),
              ref_key: "listRef",
              ref: listRef
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(panes.value, (item, i) => {
                return openBlock(), createBlock(TabsTab, {
                  key: i,
                  index: i,
                  node: item
                }, null, 8, ["index", "node"]);
              }), 128)),
              _ctx.type == "line" ? (openBlock(), createBlock(TabsNavInk, {
                key: 0,
                "cur-index": curIndex.value,
                panes: panes.value
              }, null, 8, ["cur-index", "panes"])) : createCommentVNode("", true)
            ], 4)
          ], 2),
          unref(isScrollable) ? (openBlock(), createBlock(TabButton, {
            key: 1,
            disabled: unref(nextDisabled),
            direction: unref(direction) == "horizontal" ? "right" : "down",
            onClick: _cache[1] || (_cache[1] = ($event) => unref(handleScroll)("next"))
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$2), {
                rotate: unref(direction) == "horizontal" ? 0 : 90,
                size: 14
              }, null, 8, ["rotate"])
            ]),
            _: 1
          }, 8, ["disabled", "direction"])) : createCommentVNode("", true),
          showAddButton.value ? (openBlock(), createBlock(TabButton, {
            key: 2,
            type: "add",
            size: "12",
            onClick: handleAdd
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$3), { size: 12 })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "extra", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ]),
        !_ctx.hideContent ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "yc-tabs-content",
          style: normalizeStyle({
            height: unref(direction) == "vertical" ? `${unref(valueToPx)(unref(navHeight))}` : ""
          })
        }, [
          createElementVNode("div", {
            class: "yc-tabs-content-list",
            style: normalizeStyle({
              transform: `translate${unref(direction) == "horizontal" ? "X" : "Y"}(${-curIndex.value * 100}%)`
            })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabPanes.value, (node, i) => {
              return openBlock(), createBlock(resolveDynamicComponent(node), { key: i });
            }), 128))
          ], 4)
        ], 4)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
