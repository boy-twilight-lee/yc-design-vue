import { Direction, Size } from '../_shared/type';
export interface TabsProps {
    activeKey?: TabKey;
    defaultActiveKey?: TabKey;
    position?: TabPositon;
    size?: Size;
    type?: TabType;
    direction?: Direction;
    editable?: boolean;
    showAddButton?: boolean;
    destoryOnHide?: boolean;
    justify?: boolean;
    animation?: boolean;
    headerPadding?: boolean;
    autoSwitch?: boolean;
    hideContent?: boolean;
    trigger?: TabTrigger;
}
export interface TabsEmits {
    (e: 'update:activeKey', value: TabKey): void;
    (e: 'change', value: TabKey): void;
    (e: 'tab-click', value: TabKey): void;
    (e: 'add'): void;
    (e: 'delete', value: TabKey): void;
}
export interface TabsSlots {
    extra(): void;
    default(): void;
}
export interface TabPaneProps {
    title?: string;
    path?: TabKey;
    disabled?: boolean;
    closable?: boolean;
    destoryOnHide?: boolean;
}
export interface TabPaneSlots {
    default(): void;
    title(): void;
}
export type TabKey = string | number;
export type TabType = 'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule';
export type TabPositon = 'left' | 'right' | 'bottom' | 'top';
export type TabTrigger = 'click' | 'hover';
