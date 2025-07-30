import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, createCommentVNode, createElementVNode, resolveDynamicComponent } from "vue";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import { isFunction } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$1 from "../_shared/icons/IconArrowRight.vue.js";
import _sfc_main$2 from "../_shared/icons/IconLoading.vue.js";
import Checkbox from "../Checkbox/index.js";
import useContext, { getLeafNodes, findOptionByValueAndLevel } from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CascaderOption",
  props: {
    level: { default: -1 },
    index: { default: -1 },
    nodePath: { default: () => [] },
    label: { default: "" },
    value: { default: "" },
    render: { type: Function, default: void 0 },
    disabled: { type: Boolean, default: false },
    tagProps: { default: () => {
      return {};
    } },
    children: { default: () => [] },
    isLeaf: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { label, value, disabled, level, isLeaf, children, nodePath } = toRefs(props);
    const {
      totalOptions,
      computedValue,
      pathMode,
      curLevel,
      curPath,
      multiple,
      expandTrigger,
      expandChild,
      slots,
      getOption,
      getValueKey,
      blur,
      loadMore
    } = useContext().inject();
    const loading = ref(false);
    const showArrow = computed(() => {
      if (isFunction(loadMore)) {
        return !loading.value && !isLeaf.value && !children.value.length;
      } else {
        return children.value.length;
      }
    });
    const leafNodes = computed(() => {
      return children.value.length ? getLeafNodes(children.value) : [getOption(value.value)];
    });
    const isLeafNode = computed(() => {
      return !children.value.length;
    });
    const checked = computed(() => {
      var _a;
      if (!computedValue.value) {
        return false;
      }
      if (!multiple.value) {
        const option = getOption(computedValue.value) ?? {};
        return (_a = option.nodePath) == null ? void 0 : _a.some((node) => {
          return getValueKey(node.value) == getValueKey(value.value);
        });
      }
      const valueOptions = computedValue.value.map(
        (v) => {
          return getOption(v) ?? {};
        }
      );
      if (isLeafNode.value) {
        return valueOptions.some(
          (option) => getValueKey(option == null ? void 0 : option.value) == getValueKey(value.value)
        );
      }
      const valueMap = Object.fromEntries(
        valueOptions.map((option) => [getValueKey(option == null ? void 0 : option.value), option])
      );
      return leafNodes.value.every((node) => valueMap[getValueKey(node.value)]);
    });
    const indeterminate = computed(() => {
      if (isLeafNode.value || !multiple.value) {
        return false;
      }
      const valueOptions = computedValue.value.map(
        (v) => {
          return getOption(v) ?? {};
        }
      );
      const valueMap = Object.fromEntries(
        valueOptions.map((option) => [getValueKey(option.value), option])
      );
      return leafNodes.value.some((node) => valueMap[getValueKey(node.value)]);
    });
    const handleMuti = (checked2) => {
      var _a, _b, _c, _d, _e;
      const curValue = computedValue.value;
      if (checked2) {
        const valueMap = Object.fromEntries(
          curValue.map((v) => {
            return [getValueKey(v), v];
          })
        );
        computedValue.value = [
          ...curValue,
          ...leafNodes.value.map((item) => {
            return pathMode.value ? item.nodePath.map((v) => v.value) : item.value;
          }).filter((item) => {
            return !valueMap[getValueKey(item)];
          })
        ];
        curLevel.value = ((_b = (_a = leafNodes.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.level) ?? curLevel.value;
        curPath.value = ((_e = (_d = (_c = leafNodes.value) == null ? void 0 : _c[0]) == null ? void 0 : _d.nodePath) == null ? void 0 : _e.map((item) => item.index)) ?? curPath.value;
      } else {
        const valueMap = Object.fromEntries(
          leafNodes.value.map((item) => {
            return pathMode.value ? item.nodePath.map((v) => v.value) : item.value;
          }).map((v) => {
            return [getValueKey(v), v];
          })
        );
        computedValue.value = curValue.filter((item) => {
          return !valueMap[getValueKey(item)];
        });
        curLevel.value = level.value;
        curPath.value = nodePath.value.map((item) => item.index);
      }
    };
    const handleEvent = async (type) => {
      if (disabled.value || loading.value) {
        return;
      }
      if (showArrow.value && isFunction(loadMore) && expandTrigger.value == type) {
        loading.value = true;
        const option = findOptionByValueAndLevel(
          totalOptions.value,
          value.value,
          level.value
        );
        await new Promise((resolve) => {
          loadMore(option, (children2) => {
            option.children = (children2 == null ? void 0 : children2.length) ? children2 : [];
            resolve("");
          });
        });
        loading.value = false;
        await sleep(0);
      }
      if (!isLeafNode.value && expandTrigger.value == type) {
        curLevel.value = expandChild.value ? leafNodes.value[0].level : level.value + 1;
        curPath.value = expandChild.value ? leafNodes.value[0].nodePath.map((item) => item.index) : nodePath.value.map((item) => item.index);
      }
      if (isLeafNode.value && type == "click" && !multiple.value) {
        computedValue.value = pathMode.value ? nodePath.value.map((item) => item.value) : value.value;
        blur();
      }
    };
    const renderLabel = () => {
      var _a;
      return ((_a = slots.option) == null ? void 0 : _a.call(slots, {
        data: props
      })) ?? label.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        tabindex: "0",
        role: "menuitem",
        class: normalizeClass([
          "yc-cascader-option",
          {
            "yc-cascader-option-selected": checked.value || indeterminate.value,
            "yc-cascader-option-disabled": unref(disabled)
          }
        ])
      }, [
        unref(multiple) ? (openBlock(), createBlock(unref(Checkbox), {
          key: 0,
          disabled: unref(disabled),
          "model-value": checked.value,
          indeterminate: indeterminate.value,
          "onUpdate:modelValue": handleMuti
        }, null, 8, ["disabled", "model-value", "indeterminate"])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: "yc-cascader-option-label text-ellipsis",
          onMouseenter: _cache[0] || (_cache[0] = ($event) => handleEvent("hover")),
          onClick: _cache[1] || (_cache[1] = ($event) => handleEvent("click"))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(renderLabel))),
          showArrow.value ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 0 })) : createCommentVNode("", true),
          loading.value ? (openBlock(), createBlock(unref(_sfc_main$2), {
            key: 1,
            color: "rgb(22,93,255)",
            spin: ""
          })) : createCommentVNode("", true)
        ], 32)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
