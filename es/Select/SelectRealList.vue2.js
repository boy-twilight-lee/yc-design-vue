import { defineComponent, ref, openBlock, createBlock, unref, withCtx, createElementVNode, resolveDynamicComponent, createElementBlock, Fragment, renderList } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getSlotFunction } from "../_shared/utils/vue-utils.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import useContext from "./hooks/useContext.js";
import Option from "./Option.vue.js";
import Optgroup from "./Optgroup.vue.js";
import Scrollbar from "../Scrollbar/index.js";
const _hoisted_1 = { class: "yc-select-dropdown-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectRealList",
  props: {
    scrollbar: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const { fieldKey, renderOptions, slots, emits } = useContext().inject();
    const scrollbarRef = ref();
    const renderLabel = (option) => {
      if (slots.option) {
        return () => {
          var _a;
          return ((_a = slots.option) == null ? void 0 : _a.call(slots, {
            data: option
          })) || [];
        };
      }
      const { render, label } = fieldKey.value;
      return getSlotFunction(option[render] ? option[render] : option[label]);
    };
    __expose({
      getScrollRef() {
        var _a;
        return (_a = scrollbarRef.value) == null ? void 0 : _a.getScrollRef();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Scrollbar), {
        scrollbar: _ctx.scrollbar,
        class: "yc-select-dropdown-list-wrapper"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(slots).default))),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(renderOptions), (option) => {
              return openBlock(), createElementBlock(Fragment, {
                key: option.id
              }, [
                option.isGroup ? (openBlock(), createBlock(Optgroup, {
                  key: 0,
                  label: option.label
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(option.options, (v) => {
                      return openBlock(), createBlock(Option, {
                        key: v[unref(fieldKey).value],
                        value: v[unref(fieldKey).value],
                        disabled: v[unref(fieldKey).disabled],
                        "tag-props": v[unref(fieldKey).tagProps],
                        "is-fallback-option": v[unref(fieldKey).isFallbackOption]
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(renderLabel(v))))
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled", "tag-props", "is-fallback-option"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["label"])) : (openBlock(), createBlock(Option, {
                  key: 1,
                  value: option[unref(fieldKey).value],
                  disabled: option[unref(fieldKey).disabled],
                  "tag-props": option[unref(fieldKey).tagProps],
                  "is-fallback-option": option[unref(fieldKey).isFallbackOption]
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(renderLabel(option))))
                  ]),
                  _: 2
                }, 1032, ["value", "disabled", "tag-props", "is-fallback-option"]))
              ], 64);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["scrollbar"]);
    };
  }
});
export {
  _sfc_main as default
};
