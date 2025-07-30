import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, createElementVNode, unref, createBlock, resolveDynamicComponent, Fragment, withCtx, createTextVNode, toDisplayString, createVNode, createCommentVNode, mergeProps, renderList, normalizeClass } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import "../_shared/utils/time.js";
import { getGlobalConfig } from "../_shared/utils/global-config.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$3 from "../_shared/icons/IconClose.vue.js";
import _sfc_main$1 from "../_shared/icons/IconDelete.vue2.js";
import _sfc_main$2 from "../_shared/icons/IconSearch.vue2.js";
import useContext from "./hooks/useContext.js";
import Checkbox from "../Checkbox/index.js";
import Scrollbar from "../Scrollbar/index.js";
import Input from "../Input/index.js";
import IconButton from "../_shared/components/IconButton.vue.js";
import "../_shared/components/ExpandTransition.vue2.js";
const _hoisted_1 = { class: "yc-transfer-view" };
const _hoisted_2 = { class: "yc-transfer-view-header" };
const _hoisted_3 = { class: "yc-transfer-view-header-title" };
const _hoisted_4 = { class: "yc-transfer-view-header-count" };
const _hoisted_5 = {
  key: 0,
  class: "yc-transfer-view-search"
};
const _hoisted_6 = { class: "yc-transfer-view-body" };
const _hoisted_7 = {
  key: 1,
  role: "list",
  class: "yc-transfer-list"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "yc-transfer-list-item-content text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TransferPanel",
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const { type } = toRefs(props);
    const { renderEmpty } = getGlobalConfig();
    const {
      computedValue,
      computedSelected,
      targetChecked,
      sourceChecked,
      sourceOptions,
      targetOptions,
      disabled,
      oneWay,
      showSearch,
      showSelectAll,
      simple,
      sourceInputSearchProps,
      targetInputSearchProps,
      slots,
      title: _title,
      emits
    } = useContext().inject();
    const keywords = ref("");
    const curData = computed(() => {
      const options = type.value == "source" ? sourceOptions.value : targetOptions.value;
      return options.filter((item) => {
        var _a;
        return (_a = item.label) == null ? void 0 : _a.toLowerCase().includes(keywords.value.toLowerCase());
      });
    });
    const curSeleced = computed(() => {
      return type.value == "source" ? sourceChecked.value : targetChecked.value;
    });
    const inputProps = computed(() => {
      return type.value == "source" ? sourceInputSearchProps.value : targetInputSearchProps.value;
    });
    const title = computed(() => {
      return type.value == "source" ? _title.value[0] : _title.value[1];
    });
    const selectedAll = computed({
      get() {
        return !!curSeleced.value.length && curSeleced.value.length == curData.value.length;
      },
      set(isSelected) {
        if (isSelected) {
          computedSelected.value = [
            .../* @__PURE__ */ new Set([
              ...computedSelected.value,
              ...curData.value.map((item) => item.value)
            ])
          ];
        } else {
          const dataMap = Object.fromEntries(
            curData.value.map((item) => [item.value, item])
          );
          computedSelected.value = computedSelected.value.filter(
            (item) => !dataMap[item]
          );
        }
      }
    });
    const indeterminate = computed(() => {
      return !!curSeleced.value.length && curSeleced.value.length <= curData.value.length;
    });
    const handleCheck = (isSelected, value) => {
      computedSelected.value = isSelected ? [...computedSelected.value, value] : computedSelected.value.filter((v) => v != value);
      emits("select", computedSelected.value);
    };
    const handleClick = (item) => {
      const { value } = item;
      if (disabled.value || item.disabled)
        return;
      if ((!oneWay.value || type.value == "source") && !simple.value) {
        return;
      }
      computedValue.value = type.value == "source" ? [...computedValue.value, value] : computedValue.value.filter((v) => v != value);
    };
    const handleClear = () => {
      if (disabled.value || !computedValue.value.length)
        return;
      computedValue.value = [];
    };
    const renderTitle = () => {
      var _a;
      return (_a = slots[type.value == "source" ? "source-title" : "target-title"]) == null ? void 0 : _a.call(slots, {
        countTotal: type.value == "source" ? sourceOptions.value.length : targetOptions.value.length,
        countSelected: type.value == "source" ? sourceChecked.value.length : targetChecked.value.length,
        searchValue: keywords.value,
        checked: selectedAll.value,
        indeterminate: indeterminate.value,
        onSelectAllChange: (v) => {
          selectedAll.value = v;
        },
        onClear: handleClear
      });
    };
    const renderList$1 = () => {
      var _a;
      return (_a = slots[type.value]) == null ? void 0 : _a.call(slots, {
        selectedKeys: curSeleced.value,
        data: curData.value,
        onSelect: (val) => {
          computedSelected.value = val;
        }
      });
    };
    const renderItem = (item) => {
      return () => {
        var _a;
        return (_a = slots.item) == null ? void 0 : _a.call(slots, item);
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          unref(slots)[`${unref(type)}-title`] ? (openBlock(), createBlock(resolveDynamicComponent(renderTitle), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createElementVNode("span", _hoisted_3, [
              unref(showSelectAll) && !unref(simple) && (!unref(oneWay) || unref(type) != "target") ? (openBlock(), createBlock(unref(Checkbox), {
                key: 0,
                modelValue: selectedAll.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedAll.value = $event),
                indeterminate: indeterminate.value,
                disabled: !curData.value.length || unref(disabled)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(title.value), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "indeterminate", "disabled"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(title.value), 1)
              ], 64))
            ]),
            createElementVNode("span", _hoisted_4, [
              !unref(simple) && (!unref(oneWay) || unref(type) != "target") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(curSeleced.value.length) + " / " + toDisplayString(curData.value.length), 1)
              ], 64)) : unref(type) == "target" && !unref(simple) ? (openBlock(), createBlock(unref(IconButton), {
                key: 1,
                size: 14,
                onClick: handleClear
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ], 64))
        ]),
        unref(showSearch) ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(unref(Input), mergeProps({
            modelValue: keywords.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => keywords.value = $event)
          }, inputProps.value, {
            onInput: _cache[2] || (_cache[2] = (v) => unref(emits)("search", v, unref(type)))
          }), {
            suffix: withCtx(() => [
              createVNode(unref(_sfc_main$2))
            ]),
            _: 1
          }, 16, ["modelValue"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_6, [
          curData.value.length ? (openBlock(), createBlock(unref(Scrollbar), { key: 0 }, {
            default: withCtx(() => [
              unref(slots)[unref(type)] ? (openBlock(), createBlock(resolveDynamicComponent(renderList$1), { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(curData.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.value,
                    role: "listitem",
                    class: normalizeClass([
                      "yc-transfer-list-item",
                      {
                        "yc-transfer-list-item-disabled": item.disabled || unref(disabled)
                      }
                    ]),
                    onClick: ($event) => handleClick(item)
                  }, [
                    (!unref(oneWay) || unref(oneWay) && unref(type) == "source") && !unref(simple) ? (openBlock(), createBlock(unref(Checkbox), {
                      key: 0,
                      "model-value": curSeleced.value.includes(item.value),
                      disabled: item.disabled || unref(disabled),
                      onChange: (isSelected) => handleCheck(isSelected, item.value)
                    }, {
                      default: withCtx(() => [
                        unref(slots).item ? (openBlock(), createBlock(resolveDynamicComponent(renderItem(item)), { key: 0 })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(unref(slots).item ? "" : item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "disabled", "onChange"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createElementVNode("span", _hoisted_9, [
                        unref(slots).item ? (openBlock(), createBlock(resolveDynamicComponent(renderItem(item)), { key: 0 })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(unref(slots).item ? "" : item.label), 1)
                      ]),
                      unref(type) == "target" && !unref(simple) ? (openBlock(), createBlock(unref(IconButton), {
                        key: 0,
                        "hover-size": 20
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64))
                  ], 10, _hoisted_8);
                }), 128))
              ]))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(unref(renderEmpty)("Transfer"))))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
