import { CSSProperties, RenderFunction } from 'vue';
import { ClassName, RenderContent, Type } from '@shared/type';

export interface NotificationProps {
  type?: Type;
  content?: RenderContent;
  title?: RenderContent;
  icon?: RenderFunction;
  id?: string;
  style?: CSSProperties;
  class?: ClassName;
  showIcon?: boolean;
  closable?: boolean;
  duration?: number;
  isReset?: boolean;
  footer?: RenderFunction;
  closeIcon?: RenderFunction;
  closeIconElement?: RenderFunction;
  onClose?: (id: string | number) => void;
  onDestory?: (id: string | number) => void;
}

export interface NotificationContainerProps {
  notificationList?: NotificationProps[];
  position?: NotificationPosition;
}

export type NotificationPosition =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

export type NotificationConfig = Omit<NotificationProps, 'type' | 'onDestory'> &
  NotificationContainerProps;

export type NotificationMethod = {
  info: (config: string | NotificationConfig) => NotificationReturn;
  success: (config: string | NotificationConfig) => NotificationReturn;
  warning: (config: string | NotificationConfig) => NotificationReturn;
  error: (config: string | NotificationConfig) => NotificationReturn;
  remove: (id: string) => void;
  clear: (position: NotificationPosition) => NotificationReturn;
};

export type NotificationReturn = {
  close?: () => void;
};
