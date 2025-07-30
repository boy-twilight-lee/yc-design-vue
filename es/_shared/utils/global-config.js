import { inject, ref, toRefs, isReactive, reactive } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "./dom.js";
import { isUndefined, isString } from "./is.js";
import "./time.js";
import Empty from "../../Empty/index.js";
import "../icons/_Icon.vue.js";
import _sfc_main from "../icons/IconLoading.vue.js";
const CONFIG_PROVIDER_PROVIDE_KEY = "config-props";
const getVar = (value, _value) => {
  var _a;
  return isUndefined(value == null ? void 0 : value.value) || isString(_value == null ? void 0 : _value.value) && !((_a = value == null ? void 0 : value.value) == null ? void 0 : _a.length) ? _value : value;
};
const getGlobalConfig = (props = {}) => {
  const {
    slots,
    zIndex,
    size: _size,
    updateAtScroll: _updateAtScroll,
    scrollToClose: _scrollToClose,
    exchangeTime: _exchangeTime,
    popupContainer: _popupContainer
  } = inject(CONFIG_PROVIDER_PROVIDE_KEY, {
    zIndex: ref(1001),
    size: ref("medium"),
    updateAtScroll: ref(true),
    scrollToClose: ref(false),
    exchangeTime: ref(true),
    popupContainer: ref("body"),
    slots: {}
  });
  const renderEmpty = (name) => {
    return slots.empty ? () => {
      var _a;
      return (_a = slots.empty) == null ? void 0 : _a.call(slots, {
        component: name
      });
    } : Empty;
  };
  const renderLoading = () => {
    return slots.loading ? slots.loading : _sfc_main;
  };
  const { size, updateAtScroll, scrollToClose, exchangeTime, popupContainer } = toRefs(isReactive(props) ? props : reactive(props));
  return {
    slots,
    zIndex,
    size: getVar(size, _size),
    updateAtScroll: getVar(updateAtScroll, _updateAtScroll),
    scrollToClose: getVar(scrollToClose, _scrollToClose),
    popupContainer: getVar(popupContainer, _popupContainer),
    exchangeTime: getVar(exchangeTime, _exchangeTime),
    renderEmpty,
    renderLoading
  };
};
export {
  CONFIG_PROVIDER_PROVIDE_KEY,
  getGlobalConfig
};
