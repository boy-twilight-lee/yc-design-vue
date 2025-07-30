export interface CollapseProps {
    activeKey?: CollapseValue[];
    defaultActiveKey?: CollapseValue[];
    accordion?: boolean;
    showExpandIcon?: boolean;
    expandIconPosition?: ExpandIconPosition;
    bordered?: boolean;
    destroyOnHide?: boolean;
}
export interface CollapseEmits {
    (e: 'update:activekey', value: CollapseValue): void;
    (e: 'change', value: CollapseValue): void;
}
export interface CollapseSlots {
    default(): void;
    ['expand-icon'](scope: {
        active: boolean;
        disabled: boolean;
        position: 'left' | 'right';
    }): void;
}
export interface CollapseItemProps {
    path?: CollapseValue;
    header?: string;
    disabled?: boolean;
    showExpandIcon?: boolean;
    destroyOnHide?: boolean;
}
export interface CollapseItemSlots {
    default(): void;
    header(): void;
    extra(): void;
    ['expand-icon'](scope: {
        active: boolean;
        disabled: boolean;
        position: 'left' | 'right';
    }): void;
}
export type CollapseValue = string | number;
export type ExpandIconPosition = 'left' | 'right';
