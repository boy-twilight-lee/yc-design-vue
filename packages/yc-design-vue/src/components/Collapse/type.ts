import { VNode } from 'vue';
import { Position } from '@shared/type';

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
  default?: () => VNode[];
  'expand-icon': (scope: {
    active: boolean;
    disabled: boolean;
    position: ExpandIconPosition;
  }) => VNode[];
}

export interface CollapseItemProps {
  path?: CollapseValue;
  header?: string;
  disabled?: boolean;
  showExpandIcon?: boolean;
  destroyOnHide?: boolean;
}

export interface CollapseItemSlots {
  default?: () => VNode[];
  header?: () => VNode[];
  extra?: () => VNode[];
  ['expand-icon']?: (scope: {
    active: boolean;
    disabled: boolean;
    position: ExpandIconPosition;
  }) => VNode[];
}

export type CollapseValue = string | number;

export type ExpandIconPosition = Exclude<Position, 'top' | 'bottom'>;
