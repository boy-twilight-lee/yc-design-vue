import { toRefs, computed, useSlots, ref, provide, inject, isVNode } from "vue";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { throttle, valueToPx } from "../../_shared/utils/fn.js";
import { isUndefined, isBoolean, isNumber, isObject, isFunction } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
import "../index.js";
import { nanoid } from "../../node_modules/nanoid/index.browser.js";
import { useResizeObserver } from "../../node_modules/@vueuse/core/index.js";
import SubMenu from "../SubMenu.vue.js";
import MenuItem from "../MenuItem.vue.js";
const MENU_CONTEXT_KEY = "menu-context";
function FlattenMenuTree(vnodes, componentName) {
  const result = [];
  const traverse = (nodes, parentId = null, depth = 0) => {
    var _a, _b, _c;
    if (!nodes)
      return;
    const nodeList = Array.isArray(nodes) ? nodes : [nodes];
    for (const node of nodeList) {
      if (!isVNode(node))
        continue;
      const id = nanoid(8);
      const name = (_a = node.type) == null ? void 0 : _a.name;
      const isSubMenu = name === SubMenu.name;
      const props = node.props;
      const children = node.children;
      const subTree = (_b = node.component) == null ? void 0 : _b.subTree;
      const childParentId = isSubMenu ? id : parentId;
      const childDepth = isSubMenu ? depth + 1 : depth;
      if (componentName.includes(name)) {
        result.push({
          id,
          type: isSubMenu ? "submenu" : "menuitem",
          label: () => {
            var _a2, _b2;
            if (isSubMenu) {
              return ((_a2 = children.title) == null ? void 0 : _a2.call(children)) || props.title;
            } else {
              return (_b2 = children.default) == null ? void 0 : _b2.call(children);
            }
          },
          path: props.path,
          parentId,
          level: depth
        });
      }
      if (subTree) {
        traverse(subTree);
      } else if (Array.isArray(children)) {
        traverse(children, childParentId, childDepth);
      } else if (isObject(children)) {
        for (const key of Object.keys(children)) {
          if (!isFunction(children[key]))
            continue;
          traverse(((_c = children[key]) == null ? void 0 : _c.call(children)) || [], childParentId, childDepth);
        }
      }
    }
  };
  traverse(vnodes);
  return result;
}
function buildMenuTree(flatData) {
  const nodeMap = /* @__PURE__ */ new Map();
  const tree = [];
  flatData.forEach((node) => {
    nodeMap.set(node.id, { ...node, children: [] });
  });
  nodeMap.forEach((node) => {
    if (node.parentId === null) {
      tree.push(node);
    } else {
      const parent = nodeMap.get(node.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  });
  return tree;
}
function isMenuItemActive(menuTree, currentPath, activePath) {
  if (currentPath === activePath) {
    return true;
  }
  const findNode = (nodes, path) => {
    for (const node of nodes) {
      if (node.path === path)
        return node;
      if (node.children && node.children.length > 0) {
        const found = findNode(node.children, path);
        if (found)
          return found;
      }
    }
    return null;
  };
  const currentNode = findNode(menuTree, currentPath);
  if (!currentNode)
    return false;
  const checkSubtree = (node, targetPath) => {
    if (node.path === targetPath)
      return true;
    if (node.children) {
      return node.children.some(
        (child) => checkSubtree(child, targetPath)
      );
    }
    return false;
  };
  return checkSubtree(currentNode, activePath);
}
const getPopupMaxHeight = (popupMaxHeight) => {
  if (isUndefined(popupMaxHeight) || isBoolean(popupMaxHeight) && popupMaxHeight) {
    return 167;
  }
  if (isNumber(popupMaxHeight)) {
    return popupMaxHeight;
  }
};
const useContext = () => {
  const provide$1 = (props, emits, menuRef) => {
    const {
      selectedKeys,
      defaultSelectedKeys,
      openKeys,
      defaultOpenKeys,
      levelIndent,
      collapsed,
      defaultCollapsed,
      breakpoint,
      accordion,
      autoOpen,
      triggerProps,
      tooltipProps,
      autoOpenSelected,
      mode,
      theme,
      autoScrollIntoView,
      scrollConfig,
      collapsedWidth,
      popupMaxHeight: _popupMaxHeight
    } = toRefs(props);
    const computedSelectedKeys = useControlValue(
      selectedKeys,
      defaultSelectedKeys.value,
      (val) => {
        emits("update:selectedKeys", val);
      }
    );
    const computedCollapsed = useControlValue(
      collapsed,
      defaultCollapsed.value,
      (val) => {
        {
          computedOpenKeys.value = [];
        }
        emits("update:collapsed", val);
      }
    );
    const computedOpenKeys = useControlValue(
      openKeys,
      defaultOpenKeys.value,
      (val) => {
        emits("update:openKeys", val);
      }
    );
    const popupMaxHeight = computed(() => {
      return getPopupMaxHeight(_popupMaxHeight.value);
    });
    const slots = useSlots();
    const menuTreeNodes = computed(() => {
      var _a;
      return FlattenMenuTree(((_a = slots.default) == null ? void 0 : _a.call(slots)) || [], [
        SubMenu.name,
        MenuItem.name
      ]);
    });
    const menuItemWidths = ref([]);
    const menuTree = computed(() => buildMenuTree(menuTreeNodes.value));
    const max = ref(1e6);
    if (mode.value == "horizontal") {
      useResizeObserver(
        menuRef,
        throttle(() => {
          const menuWidth = menuRef.value.offsetWidth - 52;
          let maxCount = 0;
          let totalWidth = 0;
          for (let i = 0; i < menuTree.value.length; i++) {
            const gap = i > 0 ? 4 : 0;
            const curWidth = totalWidth + gap + menuItemWidths.value[i];
            if (curWidth > menuWidth) {
              break;
            }
            totalWidth = curWidth;
            maxCount++;
          }
          max.value = maxCount;
          console.log(max.value, "max");
        }, 200)
      );
    }
    provide(MENU_CONTEXT_KEY, {
      computedSelectedKeys,
      computedOpenKeys,
      computedCollapsed,
      levelIndent,
      accordion,
      autoOpen,
      triggerProps,
      tooltipProps,
      mode,
      autoOpenSelected,
      popupMaxHeight,
      autoScrollIntoView,
      scrollConfig,
      theme,
      menuTreeNodes,
      menuTree,
      max,
      menuItemWidths,
      emits
    });
    return {
      computedCollapsed,
      breakpoint,
      collapsedWidth: computed(() => valueToPx(collapsedWidth.value)),
      menuTree,
      max
    };
  };
  const inject$1 = () => {
    return inject(MENU_CONTEXT_KEY, {
      computedSelectedKeys: ref(""),
      computedOpenKeys: ref([]),
      levelIndent: ref(20),
      computedCollapsed: ref(false),
      accordion: ref(false),
      autoOpen: ref(false),
      tooltipProps: ref({}),
      triggerProps: ref({}),
      autoOpenSelected: ref(false),
      mode: ref("vertical"),
      theme: ref("light"),
      popupMaxHeight: ref(),
      autoScrollIntoView: ref(false),
      scrollConfig: ref({}),
      menuTreeNodes: ref([]),
      menuTree: ref([]),
      max: ref(1e4),
      menuItemWidths: ref([]),
      emits: () => {
      }
    });
  };
  return {
    provide: provide$1,
    inject: inject$1
  };
};
export {
  FlattenMenuTree,
  buildMenuTree,
  useContext as default,
  getPopupMaxHeight,
  isMenuItemActive
};
