import { Fragment, Text, Comment, toValue, h, isVNode } from "vue";
import { isFunction, isObject } from "./is.js";
const getSlotFunction = (param) => {
  if (param) {
    return isFunction(param) ? param : () => param;
  }
  return void 0;
};
function wrapTextContent(s) {
  return h(
    "span",
    {
      class: {
        "only-child__content": true
      }
    },
    s
  );
}
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function findComponentsFromVnodes(vnodes, name) {
  const result = [];
  const traverse = (nodes) => {
    var _a, _b;
    if (!nodes)
      return;
    const nodeList = Array.isArray(nodes) ? nodes : [nodes];
    for (const node of nodeList) {
      if (!isVNode(node))
        continue;
      const type = node.type;
      const children = node.children;
      const subTree = (_a = node.component) == null ? void 0 : _a.subTree;
      if (isObject(type) && type.name === name) {
        result.push(node);
      }
      if (subTree) {
        traverse(subTree);
      } else if (Array.isArray(children)) {
        traverse(children);
      } else if (isObject(children)) {
        for (const key of Object.keys(children)) {
          if (!isFunction(children[key]))
            continue;
          traverse(((_b = children[key]) == null ? void 0 : _b.call(children)) || []);
        }
      }
    }
  };
  traverse(vnodes);
  return result;
}
function unrefElement(elRef) {
  const plain = toValue(elRef);
  return (plain == null ? void 0 : plain.$el) ?? plain;
}
export {
  findComponentsFromVnodes,
  findFirstLegitChild,
  getSlotFunction,
  unrefElement
};
