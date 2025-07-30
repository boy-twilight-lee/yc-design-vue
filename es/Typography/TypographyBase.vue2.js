import { defineComponent, toRefs, ref, computed, onMounted, openBlock, createBlock, resolveDynamicComponent, normalizeClass, unref, withCtx, isRef, renderSlot, createElementBlock, createVNode, mergeProps, createElementVNode, createCommentVNode, createTextVNode, toDisplayString, h } from "vue";
import { useClipboard } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import { getDomText } from "../_shared/utils/dom.js";
import { sleep } from "../_shared/utils/fn.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
import _sfc_main$3 from "../_shared/icons/IconCopy.vue2.js";
import _sfc_main$1 from "../_shared/icons/IconEdit.vue2.js";
import _sfc_main$2 from "../_shared/icons/IconInfo.vue.js";
import useControlValue from "../_shared/utils/control.js";
import Input from "../Input/index.js";
import Tooltip from "../Tooltip/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TypographyBase"
  },
  __name: "TypographyBase",
  props: {
    tag: { default: "span" },
    type: { default: void 0 },
    bold: { type: Boolean, default: false },
    disabled: { type: Boolean },
    mark: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
    code: { type: Boolean, default: false },
    editable: { type: Boolean, default: false },
    editing: { type: Boolean, default: void 0 },
    defaultEditing: { type: Boolean, default: false },
    editText: { default: "" },
    copyable: { type: Boolean, default: false },
    copyText: { default: "" },
    copyDelay: { default: 3e3 },
    ellipsis: { type: [Boolean, Object], default: true },
    editTooltiProps: { default: () => {
      return {};
    } },
    copyTooltiProps: { default: () => {
      return {};
    } }
  },
  emits: ["update:editing", "update:editText", "edit-start", "change", "copy", "edit-end", "ellipsis", "expand"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      editing,
      defaultEditing,
      editText,
      copyText,
      copyable,
      copyDelay,
      code,
      mark,
      delete: deletable,
      underline,
      ellipsis,
      bold
    } = toRefs(props);
    const { isSupported, copy } = useClipboard();
    const isCopied = ref(false);
    const contentRef = ref();
    const inputRef = ref();
    const computedEditing = useControlValue(
      editing,
      defaultEditing.value,
      (val) => {
        emits("update:editing", val);
      }
    );
    const computedText = useControlValue(editText, "", (val) => {
      emits("update:editText", val);
      emits("change", val);
    });
    ref({});
    const tags = computed(() => {
      const tags2 = ["mark", "code", "del", "u", "b"];
      const attrs = [
        mark.value,
        code.value,
        deletable.value,
        underline.value,
        bold.value
      ];
      return tags2.filter((_, i) => attrs[i]);
    });
    const DynamicTag = defineComponent({
      props: {
        tags: { type: Array, default: () => [] }
      },
      setup(props2, { slots }) {
        return () => {
          var _a;
          const { tags: tags2 } = toRefs(props2);
          const renderContent = (content, index) => {
            return index >= tags2.value.length ? content : h(tags2.value[index], null, renderContent(content, index + 1));
          };
          return renderContent((_a = slots.default) == null ? void 0 : _a.call(slots), 0);
        };
      }
    });
    const handleEdit = async () => {
      var _a;
      computedEditing.value = true;
      computedText.value = computedText.value ? computedText.value : getDomText(contentRef);
      emits("edit-start");
      await sleep(0);
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const handleEditEnd = () => {
      computedEditing.value = false;
      emits("edit-end");
    };
    const handleCopy = async () => {
      if (!copyable.value || !isSupported.value || isCopied.value)
        return;
      const value = copyText.value || getDomText(contentRef);
      copy(value);
      emits("copy", value);
      isCopied.value = true;
      await sleep(copyDelay.value);
      isCopied.value = false;
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass([
          "yc-typography",
          {
            [`yc-typography-${_ctx.type}`]: _ctx.type,
            "yc-typography-bold": unref(bold),
            "yc-typography-disabled": _ctx.disabled,
            "yc-typography-underline": unref(underline),
            "yc-typography-delete": unref(deletable)
          }
        ]),
        ref_key: "contentRef",
        ref: contentRef
      }, {
        default: withCtx(() => [
          unref(computedEditing) ? (openBlock(), createBlock(unref(Input), {
            key: 0,
            modelValue: unref(computedText),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(computedText) ? computedText.value = $event : null),
            ref_key: "inputRef",
            ref: inputRef,
            onBlur: handleEditEnd
          }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(DynamicTag), {
            key: 1,
            tags: tags.value
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["tags"])),
          _ctx.editable && !unref(computedEditing) ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: "yc-typography-operation-edit",
            onClick: handleEdit
          }, [
            createVNode(unref(Tooltip), mergeProps({
              content: "编辑",
              position: "top"
            }, _ctx.editTooltiProps), {
              default: withCtx(() => [
                createElementVNode("span", null, [
                  createVNode(unref(_sfc_main$1))
                ])
              ]),
              _: 1
            }, 16)
          ])) : createCommentVNode("", true),
          unref(copyable) ? (openBlock(), createElementBlock("span", {
            key: 3,
            class: "yc-typography-operation-copy",
            onClick: handleCopy
          }, [
            createVNode(unref(Tooltip), mergeProps({ position: "top" }, _ctx.copyTooltiProps), {
              content: withCtx(() => [
                renderSlot(_ctx.$slots, "copy-tooltip", { copied: isCopied.value }, () => [
                  createTextVNode(toDisplayString(`${isCopied.value ? "已复制" : "复制"}`), 1)
                ], true)
              ]),
              default: withCtx(() => [
                createElementVNode("span", null, [
                  renderSlot(_ctx.$slots, "copy-icon", { copied: isCopied.value }, () => [
                    isCopied.value ? (openBlock(), createBlock(unref(_sfc_main$2), {
                      key: 0,
                      color: "rgb(0, 180, 42)"
                    })) : (openBlock(), createBlock(unref(_sfc_main$3), { key: 1 }))
                  ], true)
                ])
              ]),
              _: 3
            }, 16)
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  _sfc_main as default
};
