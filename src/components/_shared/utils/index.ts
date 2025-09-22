export {
  isServerRendering,
  querySelector,
  getElement,
  innerText,
  getBreakpointValue,
  mediaQueryHandler,
  findFirstScrollableParent,
  sleep,
  throttleByRaf,
  debounce,
  throttle,
  valueToPx,
  isHorizontallyScrollable,
  isVerticallyScrollable,
} from './dom';

export {
  unrefElement,
  createReusableTemplate,
  useEventListener,
  useResizeObserver,
  useDraggable,
  useElementBounding,
  useElementSize,
  useMediaQuery,
  useMutationObserver,
  useClipboard,
  onClickOutside,
  useTimeoutFn,
  onKeyStroke,
  useVirtualList,
  useScroll,
  useDropZone,
  useFileDialog,
  nanoid,
  BTween,
  dayjs,
  duration,
  toObject,
  isSameOrAfter,
  isSameOrBefore,
} from './dependencies';

export { parseColor, GradientColorCalculator } from './color';

export type { UnitType, ColorInput } from './dependencies';

export { CONFIG_PROVIDER_PROVIDE_KEY, getGlobalConfig } from './global-config';
export type { ConfigProviderProvide } from './global-config';

export { useControlValue } from './hooks';

export {
  isElement,
  isNull,
  isUndefined,
  isNaN,
  isNumber,
  isString,
  isBoolean,
  isRegExp,
  isDate,
  isFunction,
  isArray,
  isObject,
} from './is';

export { addI18nMessages, getLocale, useLocale, useI18n } from './locale';

export {
  isValidTimeRange,
  generateMonthCalendar,
  formatSeconds,
  formatDate,
} from './time';
export type { CalendarCellData } from './time';

export {
  getSlotFunction,
  isVifNode,
  findFirstLegitChild,
  findComponentsFromVnodes,
} from './vue-utils';
