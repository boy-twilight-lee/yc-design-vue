import { defineComponent, toRefs, ref, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot, createBlock, createCommentVNode } from "vue";
import { useResizeObserver, useElementSize } from "../node_modules/@vueuse/core/index.js";
import ScrollbarTrack from "./ScrollbarTrack.vue.js";
import useContext from "./hooks/useContext.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Scrollbar",
    inheritAttrs: false
  },
  __name: "Scrollbar",
  props: {
    type: { default: "embed" },
    outerClass: { default: "" },
    outerStyle: { default: () => {
      return {};
    } },
    scrollbar: { type: Boolean, default: true }
  },
  emits: ["scroll"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { type, scrollbar } = toRefs(props);
    const contentRef = ref();
    const scrollRef = ref();
    const contentWidth = ref(0);
    const contentHeight = ref(0);
    useResizeObserver(contentRef, () => {
      const { offsetWidth, offsetHeight } = contentRef.value;
      contentWidth.value = offsetWidth;
      contentHeight.value = offsetHeight;
    });
    const {
      hasVerticalBar = ref(false),
      hashorizontalBar = ref(false),
      trackHeight = ref(0),
      trackWidth = ref(0),
      scrollWidth,
      scrollHeight,
      curLeft,
      curTop,
      movableLeft,
      movableTop
    } = initScrollbar();
    const handleScroll = (e) => {
      const {
        scrollTop,
        scrollLeft,
        scrollWidth: _scrollWidth,
        scrollHeight: _scrollHeight
      } = e.target;
      emits("scroll", scrollLeft, scrollTop, e);
      if (!scrollbar.value) {
        return;
      }
      const top = scrollTop / (contentHeight.value - scrollHeight.value) * movableTop.value;
      curTop.value = top <= movableTop.value ? top : movableTop.value;
      const left = scrollLeft / (contentWidth.value - scrollWidth.value) * movableLeft.value;
      curLeft.value = left <= movableLeft.value ? left : movableLeft.value;
    };
    const handleDrag = (isVertical, value) => {
      if (isVertical) {
        curTop.value = value;
        const maxScrollbarMoveTop = contentHeight.value - scrollHeight.value;
        const scrollTop = curTop.value / movableTop.value * maxScrollbarMoveTop;
        scrollRef.value.scrollTop = scrollTop >= maxScrollbarMoveTop ? maxScrollbarMoveTop : scrollTop;
      } else {
        curLeft.value = value;
        const maxScrollbarMoveLeft = contentWidth.value - scrollWidth.value;
        const scrollLeft = curLeft.value / movableLeft.value * maxScrollbarMoveLeft;
        scrollRef.value.scrollLeft = scrollLeft >= maxScrollbarMoveLeft ? maxScrollbarMoveLeft : scrollLeft;
      }
    };
    function initScrollbar() {
      if (!scrollbar.value)
        return {
          hasVerticalBar: ref(false),
          hashorizontalBar: ref(false),
          trackHeight: ref(0),
          trackWidth: ref(0),
          contentWidth: ref(0),
          contentHeight: ref(0),
          scrollWidth: ref(0),
          scrollHeight: ref(0),
          curLeft: ref(0),
          curTop: ref(0),
          movableLeft: ref(0),
          movableTop: ref(0)
        };
      const trackWidth2 = ref(0);
      const trackHeight2 = ref(0);
      const { width: scrollWidth2, height: scrollHeight2 } = useElementSize(
        scrollRef,
        void 0,
        {
          box: "border-box"
        }
      );
      const curTop2 = ref(0);
      const curLeft2 = ref(0);
      const hasVerticalBar2 = computed(() => {
        const style = scrollRef.value ? getComputedStyle(scrollRef.value) : { overflowY: "", overflow: "" };
        const overflowY = style.overflowY;
        const overflow = style.overflow;
        const allowScroll = ["auto", "scroll"];
        return contentHeight.value > scrollHeight2.value && (allowScroll.includes(overflowY) || allowScroll.includes(overflow));
      });
      const hashorizontalBar2 = computed(() => {
        const style = scrollRef.value ? getComputedStyle(scrollRef.value) : { overflowX: "", overflow: "" };
        const overflowX = style.overflowX;
        const overflow = style.overflow;
        const allowScroll = ["auto", "scroll"];
        return contentWidth.value > scrollWidth2.value && (allowScroll.includes(overflowX) || allowScroll.includes(overflow));
      });
      const thumbHeight = computed(() => {
        if (!hasVerticalBar2.value)
          return 0;
        const height = +(scrollHeight2.value * scrollHeight2.value / contentHeight.value).toFixed(0);
        return height <= 20 ? 20 : height;
      });
      const thumbWidth = computed(() => {
        if (!hashorizontalBar2.value)
          return 0;
        const width = +(scrollWidth2.value * scrollWidth2.value / contentWidth.value).toFixed(0);
        return width <= 20 ? 20 : width;
      });
      const movableTop2 = computed(() => {
        const track = hashorizontalBar2.value ? trackHeight2.value : 0;
        return scrollHeight2.value - thumbHeight.value - track;
      });
      const movableLeft2 = computed(() => {
        const track = hasVerticalBar2.value ? trackWidth2.value : 0;
        return scrollWidth2.value - thumbWidth.value - track;
      });
      useContext().provide({
        curLeft: curLeft2,
        curTop: curTop2,
        movableLeft: movableLeft2,
        movableTop: movableTop2,
        thumbHeight,
        thumbWidth,
        scrollRef,
        isDragging: ref(false)
      });
      return {
        hasVerticalBar: hasVerticalBar2,
        hashorizontalBar: hashorizontalBar2,
        trackWidth: trackWidth2,
        trackHeight: trackHeight2,
        contentHeight,
        contentWidth,
        scrollHeight: scrollHeight2,
        scrollWidth: scrollWidth2,
        movableLeft: movableLeft2,
        movableTop: movableTop2,
        curTop: curTop2,
        curLeft: curLeft2
      };
    }
    __expose({
      scrollTo(options) {
        var _a;
        (_a = scrollRef.value) == null ? void 0 : _a.scrollTo(options);
      },
      scrollLeft(left) {
        var _a;
        (_a = scrollRef.value) == null ? void 0 : _a.scrollTo({
          left
        });
      },
      scrollTop(top) {
        var _a;
        (_a = scrollRef.value) == null ? void 0 : _a.scrollTo({
          top
        });
      },
      getScrollRef() {
        return scrollRef.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "yc-scrollbar",
          _ctx.outerClass,
          {
            "yc-scrollbar-both-track": unref(type) == "track" && unref(hasVerticalBar) && unref(hashorizontalBar),
            "yc-scrollbar-vertical-track": unref(type) == "track" && unref(hasVerticalBar),
            "yc-scrollbar-horizontal-track": unref(type) == "track" && unref(hashorizontalBar),
            "yc-scrollbar-real": !unref(scrollbar)
          }
        ]),
        style: normalizeStyle(_ctx.outerStyle)
      }, [
        createElementVNode("div", {
          class: normalizeClass(["yc-scrollbar-container", _ctx.$attrs.class]),
          style: normalizeStyle(_ctx.$attrs.style),
          ref_key: "scrollRef",
          ref: scrollRef,
          onScroll: handleScroll
        }, [
          createElementVNode("div", {
            class: "yc-scrollbar-content",
            ref_key: "contentRef",
            ref: contentRef
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 512)
        ], 38),
        unref(hasVerticalBar) ? (openBlock(), createBlock(ScrollbarTrack, {
          key: 0,
          direction: "vertical",
          onDrag: handleDrag,
          onResize: _cache[0] || (_cache[0] = (val) => trackWidth.value = val)
        })) : createCommentVNode("", true),
        unref(hashorizontalBar) ? (openBlock(), createBlock(ScrollbarTrack, {
          key: 1,
          direction: "horizontal",
          onDrag: handleDrag,
          onResize: _cache[1] || (_cache[1] = (val) => trackHeight.value = val)
        })) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
