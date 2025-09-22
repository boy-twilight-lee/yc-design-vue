import { VNode } from 'vue';
import { Direction, Size, EventTrigger, Position } from '@shared/type';

export interface TabsProps {
  activeKey?: TabKey;
  defaultActiveKey?: TabKey;
  position?: Position;
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
  trigger?: EventTrigger;
}

export interface TabsEmits {
  (e: 'update:activeKey', value: TabKey): void;
  (e: 'change', value: TabKey): void;
  (e: 'tab-click', value: TabKey): void;
  (e: 'add'): void;
  (e: 'delete', value: TabKey): void;
}

export interface TabsSlots {
  extra?: () => VNode[];
  default?: () => VNode[];
}

export interface TabPaneProps {
  title?: string;
  path?: TabKey;
  disabled?: boolean;
  closable?: boolean;
  destoryOnHide?: boolean;
}

export interface TabPaneSlots {
  default?: () => VNode[];
  title?: () => VNode[];
}

export type TabKey = string | number;

export type TabType =
  | 'line'
  | 'card'
  | 'card-gutter'
  | 'text'
  | 'rounded'
  | 'capsule';
