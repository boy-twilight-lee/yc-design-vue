import { isString, isObject, isUndefined } from "./is.js";
import { useMediaQuery } from "../../node_modules/@vueuse/core/index.js";
import { watch } from "vue";
import { unrefElement } from "./vue-utils.js";
const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
})();
const querySelector = (selectors, container) => {
  if (isServerRendering) {
    return void 0;
  }
  return (container ?? document).querySelector(selectors) ?? void 0;
};
const getElement = (target, container) => {
  if (isString(target)) {
    const selector = target[0] === "#" ? `[id='${target.slice(1)}']` : target;
    return querySelector(selector, container);
  }
  return target;
};
function getDomText(dom) {
  var _a;
  return ((_a = unrefElement(dom)) == null ? void 0 : _a.innerText) || "";
}
const getMedicaQueryQuerues = () => {
  return {
    xs: "(min-width: 0)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)"
  };
};
function getBreakpointValue(breakpoint, value, defaultValue) {
  if (!isObject(value)) {
    return value;
  }
  const order = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const index = order.indexOf(breakpoint);
  for (let i = index; i >= 0; i--) {
    const bp = order[i];
    if (isUndefined(value[bp]))
      continue;
    return value[bp];
  }
  for (let i = index + 1; i < order.length; i++) {
    const bp = order[i];
    if (isUndefined(value[bp]))
      continue;
    return value[bp];
  }
  return defaultValue;
}
const mediaQueryHandler = (onBreakpoint, queries = getMedicaQueryQuerues()) => {
  const breakpoints = [];
  const order = {};
  const matches = [];
  Object.keys(queries).forEach((key, i) => {
    breakpoints.push(key);
    order[key] = i;
    matches.push(useMediaQuery(queries[key]));
  });
  watch(
    matches,
    (val) => {
      const i = val.lastIndexOf(true);
      onBreakpoint(breakpoints[i], order, i);
    },
    {
      immediate: true
    }
  );
};
function findFirstScrollableParent(element) {
  if (!element || element === document.body) {
    return;
  }
  let currentElement = element.parentElement;
  while (currentElement && currentElement !== document.body) {
    const style = window.getComputedStyle(currentElement);
    const overflow = style.overflowY || style.overflow;
    const isScrollable = ["auto", "scroll"].includes(overflow);
    const canScroll = currentElement.scrollHeight > currentElement.clientHeight;
    if (isScrollable && canScroll) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
}
export {
  findFirstScrollableParent,
  getBreakpointValue,
  getDomText,
  getElement,
  isServerRendering,
  mediaQueryHandler,
  querySelector
};
