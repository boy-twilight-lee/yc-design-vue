import {
  ref,
  Ref,
  provide as _provide,
  inject as _inject,
  toRefs,
  VNode,
  computed,
  useSlots,
  isVNode,
} from 'vue';
import { MenuProps as _MenuProps, MenuEmits } from '../type';
import { TooltipProps } from '@/components/Tooltip';
import { TriggerProps } from '@/components/Trigger';
import {
  RecordType,
  Required,
  PopupMaxHeight,
  Direction,
  Theme,
} from '@shared/type';
import {
  isObject,
  isFunction,
  isNumber,
  isUndefined,
  isBoolean,
  valueToPx,
  nanoid,
  useControlValue,
} from '@shared/utils';
import useCalcMaxMenuItem from './useCalcMaxMenuItems';
import useSiderContext from '@/components/Layout/hooks/useSiderContext';
import SubMenu from '../SubMenu.vue';
import MenuItem from '../MenuItem.vue';

const MENU_CONTEXT_KEY = 'menu-context';
type MenuContext = {
  computedSelectedKeys: Ref<string>;
  computedOpenKeys: Ref<string[]>;
  computedCollapsed: Ref<boolean>;
  levelIndent: Ref<number>;
  accordion: Ref<boolean>;
  autoOpen: Ref<boolean>;
  autoOpenSelected: Ref<boolean>;
  mode: Ref<Direction>;
  theme: Ref<Theme>;
  autoScrollIntoView: Ref<boolean>;
  scrollConfig: Ref<ScrollIntoViewOptions>;
  popupMaxHeight: Ref<number | undefined>;
  triggerProps: Ref<TriggerProps>;
  tooltipProps: Ref<TooltipProps>;
  menuTreeNodes: Ref<MenuTreeNode[]>;
  menuTree: Ref<MenuTreeNode[]>;
  menuItemWidths: Ref<number[]>;
  max: Ref<number>;
  emits: MenuEmits;
};
export type MenuTreeNode = {
  id: string;
  type: 'submenu' | 'menuitem';
  path: string;
  parentId: string | null;
  level: number;
  label: () => any;
  children?: MenuTreeNode[];
};
type MenuProps = Required<_MenuProps>;
// 扁平化nodetree
export function flattenMenuTree(vnodes: VNode[], componentName: string[]) {
  const result: MenuTreeNode[] = [];
  const traverse = (
    nodes: RecordType | RecordType[],
    parentId: string | null = null,
    depth: number = 0
  ) => {
    if (!nodes) return;
    const nodeList = Array.isArray(nodes) ? nodes : [nodes];
    for (const node of nodeList) {
      if (!isVNode(node)) continue;
      const id = nanoid(8);
      const name = (node.type as RecordType)?.name;
      const isSubMenu = name === SubMenu.name;
      const props = node.props as RecordType;
      const children = node.children as RecordType;
      const subTree = node.component?.subTree;
      const childParentId = isSubMenu ? id : parentId;
      const childDepth = isSubMenu ? depth + 1 : depth;
      if (componentName.includes(name)) {
        result.push({
          id,
          type: isSubMenu ? 'submenu' : 'menuitem',
          label: () => {
            if (isSubMenu) {
              return children.title?.() || props.title;
            } else {
              return children.default?.();
            }
          },
          path: props.path,
          parentId,
          level: depth,
        });
      }
      // 处理subtree的情况
      if (subTree) {
        traverse(subTree);
      } else if (Array.isArray(children)) {
        traverse(children, childParentId, childDepth);
      } else if (isObject(children)) {
        for (const key of Object.keys(children)) {
          if (!isFunction(children[key])) continue;
          traverse(children[key]?.() || [], childParentId, childDepth);
        }
      }
    }
  };
  traverse(vnodes);
  return result;
}
// 构建menuTree
export function buildMenuTree(flatData: MenuTreeNode[]): MenuTreeNode[] {
  const nodeMap = new Map<string, MenuTreeNode>();
  const tree: MenuTreeNode[] = [];
  flatData.forEach((node) => {
    nodeMap.set(node.id, { ...node, children: [] });
  });
  nodeMap.forEach((node) => {
    if (node.parentId === null) {
      tree.push(node);
    } else {
      const parent = nodeMap.get(node.parentId);
      if (parent) {
        parent.children!.push(node);
      }
    }
  });
  return tree;
}
// 菜单是否激活
export function isMenuItemActive(
  menuTree: MenuTreeNode[],
  currentPath: string,
  activePath: string
): boolean {
  if (currentPath === activePath) {
    return true;
  }
  const findNode = (
    nodes: MenuTreeNode[],
    path: string
  ): MenuTreeNode | null => {
    for (const node of nodes) {
      if (node.path === path) return node;
      if (node.children && node.children.length > 0) {
        const found = findNode(node.children, path);
        if (found) return found;
      }
    }
    return null;
  };
  const currentNode = findNode(menuTree, currentPath);
  if (!currentNode) return false;
  const checkSubtree = (node: MenuTreeNode, targetPath: string): boolean => {
    if (node.path === targetPath) return true;
    if (node.children) {
      return node.children.some((child: MenuTreeNode) =>
        checkSubtree(child, targetPath)
      );
    }
    return false;
  };
  return checkSubtree(currentNode, activePath);
}
// 获取popupmaxHeight
export const getPopupMaxHeight = (popupMaxHeight: PopupMaxHeight) => {
  if (
    isUndefined(popupMaxHeight) ||
    (isBoolean(popupMaxHeight) && popupMaxHeight)
  ) {
    return 167;
  }
  if (isNumber(popupMaxHeight)) {
    return popupMaxHeight;
  }
};

export default function useMenuContext() {
  const provide = (
    props: RecordType,
    emits: MenuEmits,
    menuRef: Ref<HTMLDivElement | undefined>
  ) => {
    // 解构属性
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
      autoScrollIntoView,
      scrollConfig,
      collapsedWidth,
      theme: _theme,
      popupMaxHeight: _popupMaxHeight,
    } = toRefs(props as MenuProps);
    const { theme: siderTheme, collapsed: injectCollapsed } =
      useSiderContext().inject();
    // 选中的key
    const computedSelectedKeys = useControlValue<string>(
      selectedKeys,
      defaultSelectedKeys.value,
      (val) => {
        emits('update:selectedKeys', val);
      }
    );
    // 收缩状态
    const computedCollapsed = useControlValue<boolean>(
      collapsed,
      defaultCollapsed.value,
      (val) => {
        if (true) {
          computedOpenKeys.value = [];
        }
        emits('update:collapsed', val);
      },
      (val) => {
        return val || injectCollapsed.value;
      }
    );
    // 展开的key
    const computedOpenKeys = useControlValue<string[]>(
      openKeys,
      defaultOpenKeys.value,
      (val) => {
        emits('update:openKeys', val);
      }
    );
    // popMaxHeight
    const popupMaxHeight = computed(() => {
      return getPopupMaxHeight(_popupMaxHeight.value);
    });
    // 处理树形结构
    const slots = useSlots();
    // 扁平化的树节点
    const menuTreeNodes = computed(() => {
      return flattenMenuTree(slots.default?.() || [], [
        SubMenu.name ?? '',
        MenuItem.name ?? '',
      ]);
    });
    // menuItemdoms
    const menuItemWidths = ref<number[]>([]);
    // 树节点
    const menuTree = computed(() => buildMenuTree(menuTreeNodes.value));
    // theme
    const theme = computed(() => {
      return _theme.value || siderTheme.value || 'light';
    });
    // 横向宽度检测
    const { max } = useCalcMaxMenuItem({
      menuRef,
      menuItemWidths,
      menuTree,
      mode,
    });
    // 上下文
    const context = {
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
      emits,
    };
    // 注入
    _provide<MenuContext>(MENU_CONTEXT_KEY, context);
    return {
      ...context,
      breakpoint,
      collapsedWidth: computed(() => valueToPx(collapsedWidth.value)),
    };
  };
  const inject = () => {
    return _inject<MenuContext>(MENU_CONTEXT_KEY, {
      computedSelectedKeys: ref(''),
      computedOpenKeys: ref([]),
      levelIndent: ref(20),
      computedCollapsed: ref(false),
      accordion: ref(false),
      autoOpen: ref(false),
      tooltipProps: ref({}),
      triggerProps: ref({}),
      autoOpenSelected: ref(false),
      mode: ref('vertical'),
      theme: ref('light'),
      popupMaxHeight: ref(),
      autoScrollIntoView: ref(false),
      scrollConfig: ref({}),
      menuTreeNodes: ref([]),
      menuTree: ref([]),
      max: ref(10000),
      menuItemWidths: ref([]),
      emits: () => {},
    });
  };
  return {
    provide,
    inject,
  };
}
