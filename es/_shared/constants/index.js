import Icon403 from "../icons/Icon403.svg.js";
import Icon404 from "../icons/Icon404.svg.js";
import Icon500 from "../icons/Icon500.svg.js";
import "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../utils/dom.js";
import "../utils/time.js";
import "../../Empty/index.js";
import "../icons/_Icon.vue.js";
import _sfc_main$7 from "../icons/IconCheck.vue.js";
import _sfc_main$6 from "../icons/IconClose.vue.js";
import _sfc_main$2 from "../icons/IconError.vue.js";
import _sfc_main$3 from "../icons/IconInfo.vue.js";
import _sfc_main$5 from "../icons/IconInfoLine.vue.js";
import _sfc_main$4 from "../icons/IconLoading.vue.js";
import _sfc_main from "../icons/IconSuccess.vue.js";
import _sfc_main$1 from "../icons/IconWarning.vue.js";
const TYPE_ICON_MAP = {
  success: _sfc_main,
  warning: _sfc_main$1,
  error: _sfc_main$2,
  info: _sfc_main$3,
  loading: _sfc_main$4,
  confirm: _sfc_main$3,
  "result-403": Icon403,
  "result-404": Icon404,
  "result-500": Icon500,
  "result-info": _sfc_main$5,
  "result-warning": _sfc_main$5,
  "result-error": _sfc_main$6,
  "result-success": _sfc_main$7
};
const TYPE_ICON_COLOR_MAP = {
  info: "rgb(22, 93, 255)",
  success: " rgb(0, 180, 42)",
  warning: "rgb(255, 125, 0)",
  error: "rgb(245, 63, 63)",
  danger: "rgb(245, 63, 63)",
  loading: "rgb(22, 93, 225)",
  normal: "rgb(201, 205, 212)"
};
const TAG_PRESET_COLORS = [
  "default",
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray",
  "default"
];
const COLOR_PICKER_PRESET_COLORS = [
  "#00B42A",
  "#3C7EFF",
  "#FF7D00",
  "#F76965",
  "#F7BA1E",
  "#F5319D",
  "#D91AD9",
  "#9FDB1D",
  "#FADC19",
  "#722ED1",
  "#3491FA",
  "#7BE188",
  "#93BEFF",
  "#FFCF8B",
  "#FBB0A7",
  "#FCE996",
  "#FB9DC7",
  "#F08EE6",
  "#DCF190",
  "#FDFA94",
  "#C396ED",
  "#9FD4FD"
];
const COLOR_PICKER_FORMAT_OPTIONS = [
  {
    label: "RGB",
    value: "rgb"
  },
  {
    label: "Hex",
    value: "hex"
  }
];
export {
  COLOR_PICKER_FORMAT_OPTIONS,
  COLOR_PICKER_PRESET_COLORS,
  TAG_PRESET_COLORS,
  TYPE_ICON_COLOR_MAP,
  TYPE_ICON_MAP
};
