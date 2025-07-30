import { Ref } from 'vue';
import { TriggerType, TriggerProps as _TriggerProps } from '../type';
import { RequiredDeep } from '../../_shared/type';
export type TriggerProps = RequiredDeep<_TriggerProps>;
/**
 *  depth 记录组件内部嵌套的层级,当curHoverLevel小于level关闭
 *  curDepth 记录当前hover的层级
 *  groupIds 同一个submenu里面的groupId集合
 *  groupId  组件标识，用于标识元素是否处于一个嵌套中
 */
declare const _default: (params: {
    trigger: TriggerType;
    mouseEnterDelay: Ref<number>;
    computedVisible: Ref<boolean>;
    popupRef: Ref<HTMLDivElement | undefined>;
}) => {
    timeout: Ref<NodeJS.Timeout | undefined, NodeJS.Timeout | undefined>;
    mouseEnterHandler: () => void;
    clickOutsideHandler: (e: Event) => boolean;
    mosueLeaveHandler: (e: MouseEvent) => boolean;
};
export default _default;
