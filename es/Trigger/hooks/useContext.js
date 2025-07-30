import { inject, ref, provide, watch } from "vue";
import { nanoid } from "../../node_modules/nanoid/index.browser.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { sleep } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import { unrefElement } from "../../_shared/utils/vue-utils.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const TRIGGER_CONTEXT_KEY = "trigger-context";
const useContext = (params) => {
  const { trigger, popupRef, computedVisible, mouseEnterDelay } = params;
  const {
    depth: preDepth,
    curDepth,
    groupIds,
    timeout,
    hoverTimeout
  } = inject(TRIGGER_CONTEXT_KEY, {
    depth: -1,
    curDepth: ref(0),
    groupIds: ref([]),
    timeout: ref(),
    hoverTimeout: ref()
  });
  const depth = preDepth + 1;
  const groupId = nanoid(32);
  groupIds.value[depth] = groupId;
  provide(TRIGGER_CONTEXT_KEY, {
    depth,
    curDepth,
    groupIds,
    hoverTimeout,
    timeout
  });
  const isSameGroup = (el) => {
    const dataId = el.getAttribute("data-group-id");
    const dataDepth = el.getAttribute("data-group-depth");
    const isGroup = !!dataId && groupIds.value.includes(groupId);
    if (isGroup || el.tagName == "BODY") {
      return {
        isGroup,
        groupId: dataId,
        depth: isGroup ? Number.parseInt(dataDepth) : -1
      };
    } else {
      return isSameGroup(el.parentElement);
    }
  };
  const mouseEnterHandler = () => {
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value);
    }
    hoverTimeout.value = setTimeout(() => {
      curDepth.value = depth;
    }, mouseEnterDelay.value);
  };
  const mosueLeaveHandler = (e) => {
    if (groupIds.value.length <= 1) {
      return false;
    }
    const { isGroup } = isSameGroup(e.relatedTarget);
    if (isGroup) {
      computedVisible.value = false;
    } else {
      curDepth.value = -1;
    }
    return true;
  };
  const clickOutsideHandler = (e) => {
    if (groupIds.value.length <= 1) {
      return false;
    }
    const { isGroup, depth: _depth } = isSameGroup(
      e.target ?? e
    );
    computedVisible.value = isGroup ? depth <= _depth : computedVisible.value;
    return isGroup;
  };
  watch(
    () => curDepth.value,
    (v) => {
      if (depth <= v || trigger != "hover") {
        return;
      }
      computedVisible.value = false;
    }
  );
  watch(
    () => computedVisible.value,
    async (val) => {
      if (!val)
        return;
      await sleep(0);
      const popupDom = unrefElement(popupRef);
      popupDom == null ? void 0 : popupDom.setAttribute("data-group-id", groupId);
      popupDom == null ? void 0 : popupDom.setAttribute("data-group-depth", `${depth}`);
    },
    {
      immediate: true
    }
  );
  return {
    timeout,
    mouseEnterHandler,
    clickOutsideHandler,
    mosueLeaveHandler
  };
};
export {
  useContext as default
};
