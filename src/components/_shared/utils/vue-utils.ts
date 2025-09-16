import { Comment, Fragment, Text, h, VNode, isVNode } from 'vue';
import { RecordType, RenderContent } from '../type';
import { isFunction, isObject } from './is';

// 获取renderFunction
export const getSlotFunction = (param: RenderContent | undefined) => {
  if (param) {
    return isFunction(param) ? param : () => param;
  }
  return undefined;
};

// 判断一个 VNode 是否是由 v-if="false" 生成的占位符注释节点。
export const isVifNode = (vnode: VNode | undefined | null): boolean => {
  return !vnode ? false : vnode.type === Comment && vnode.children === 'v-if';
};

// 包裹文本节点
const wrapTextContent = (s: string | VNode) => {
  return h(
    'span',
    {
      class: {
        'only-child__content': true,
      },
    },
    s
  );
};

// 在vnode数组中查找第一个合法的子元素
export const findFirstLegitChild = (
  node: VNode[] | undefined
): VNode | null => {
  if (!node) return null;
  const children = node as VNode[];
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case 'svg':
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children as VNode[]);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
};

// 扁平化插槽components
export const findComponentsFromVnodes = (
  vnodes: VNode[],
  name: string = ''
) => {
  const result: RecordType[] = [];
  // 是否是option
  const traverse = (nodes: RecordType | RecordType[]) => {
    if (!nodes) return;
    const nodeList = Array.isArray(nodes) ? nodes : [nodes];
    for (const node of nodeList) {
      if (!isVNode(node)) continue;
      const type = node.type;
      const children = node.children;
      const subTree = node.component?.subTree;
      // 查找
      if (isObject(type) && type.name === name) {
        result.push(node);
      }
      // 处理subtree的情况
      if (subTree) {
        traverse(subTree);
      }
      // 处理children是vnode
      else if (Array.isArray(children)) {
        traverse(children);
      }
      // 处理children是slot的情况
      else if (isObject(children)) {
        for (const key of Object.keys(children)) {
          if (!isFunction(children[key])) continue;
          traverse(children[key]?.() || []);
        }
      }
    }
  };
  traverse(vnodes);
  return result;
};
