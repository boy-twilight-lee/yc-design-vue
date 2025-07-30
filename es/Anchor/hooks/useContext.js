import { toRefs, useSlots, ref, computed, provide, inject } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import { findFirstScrollableParent, getElement } from "../../_shared/utils/dom.js";
import { isUndefined } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import { findComponentsFromVnodes } from "../../_shared/utils/vue-utils.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import AnchorLink from "../AnchorLink.vue.js";
const ANCHOR_CONTEXT_KEY = "anchor-context";
const useContext = () => {
  const provide$1 = (props, listRef) => {
    const {
      changeHash,
      smooth,
      boundary,
      lineLess,
      scrollContainer: _scrollContainer
    } = toRefs(props);
    const slots = useSlots();
    const curHref = ref("");
    const hrefs = computed(() => {
      var _a;
      const nodes = findComponentsFromVnodes(
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [],
        AnchorLink.name
      );
      return nodes.map((node) => {
        var _a2;
        return (_a2 = node.props) == null ? void 0 : _a2.href;
      });
    });
    const scrollContainer = computed(() => {
      return isUndefined(_scrollContainer.value) ? findFirstScrollableParent(listRef.value) : getElement(_scrollContainer.value);
    });
    provide(ANCHOR_CONTEXT_KEY, {
      changeHash,
      smooth,
      boundary,
      lineLess,
      curHref,
      scrollContainer
    });
    return {
      hrefs,
      curHref,
      changeHash,
      smooth,
      boundary,
      lineLess,
      scrollContainer
    };
  };
  const inject$1 = () => {
    return inject(ANCHOR_CONTEXT_KEY, {
      changeHash: ref(true),
      smooth: ref(true),
      boundary: ref("start"),
      curHref: ref(""),
      lineLess: ref(false),
      scrollContainer: ref()
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  useContext as default
};
