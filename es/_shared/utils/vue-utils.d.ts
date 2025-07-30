import { RenderContent, ObjectData, MaybeElement, MaybeComputedElementRef, UnRefElementReturn } from '../type';
import { VNode } from 'vue';
export declare const getSlotFunction: (param: RenderContent | undefined) => import('vue').RenderFunction | (() => string | ObjectData[]) | undefined;
export declare function isVifNode(vnode: VNode | undefined | null): boolean;
export declare function findFirstLegitChild(node: VNode[] | undefined): VNode | null;
export declare function findComponentsFromVnodes(vnodes: VNode[], name: string): ObjectData[];
export declare function unrefElement<T extends MaybeElement>(elRef: MaybeComputedElementRef<T>): UnRefElementReturn<T>;
