import { CSSProperties, VNode } from 'vue';
import { ClassName, PopupContainer, PopupPosition, Type } from '@shared/type';
import { OnBeforeCancel, OnBeforeOk } from '@/components/Modal';
import { TriggerProps } from '@/components/Trigger';
import { ButtonProps } from '@/components/Button';

export interface PopconfirmProps {
  content?: string;
  position?: PopupPosition;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  type?: Type;
  okText?: string;
  cancelText?: string;
  okLoading?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  contentClass?: ClassName;
  contentStyle?: CSSProperties;
  arrowClass?: ClassName;
  arrowStyle?: CSSProperties;
  popupContainer?: PopupContainer;
  onBeforeOk?: OnBeforeOk;
  onBeforeCancel?: OnBeforeCancel;
  // triggerProps
  triggerProps?: TriggerProps;
}

export interface PopconfirmEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel'): void;
}

export interface PopconfirmSlots {
  default?: () => VNode[];
  content?: () => VNode[];
  icon?: () => VNode[];
}

export interface PopconfirmExpose {
  hide(): void;
  show(): void;
}
