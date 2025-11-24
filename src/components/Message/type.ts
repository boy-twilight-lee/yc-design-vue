import { RenderFunction } from 'vue';
import { Position, RenderContent, Type } from '@shared/type';

export interface MessageProps {
  type?: MessageType;
  content?: RenderContent;
  id?: string;
  icon?: RenderFunction;
  showIcon?: boolean;
  closable?: boolean;
  duration?: number;
  isReset?: boolean;
  onClose?: (id: string | number) => void;
  onDestory?: (id: string | number) => void;
  resetOnHover?: boolean;
}

export interface MessageContainerProps {
  messageList?: MessageProps[];
  position?: MessagePostion;
}

export type MessageType = Type<'loading' | 'normal'>;

export type MessagePostion = Exclude<Position, 'left' | 'right'>;

export type MessageConfig = Omit<MessageProps, 'type' | 'onDestory'> &
  MessageContainerProps;

export type MessageMethod = {
  info: (config: string | MessageConfig) => MessageReturn;
  success: (config: string | MessageConfig) => MessageReturn;
  warning: (config: string | MessageConfig) => MessageReturn;
  error: (config: string | MessageConfig) => MessageReturn;
  loading: (config: string | MessageConfig) => MessageReturn;
  normoal: (config: string | MessageConfig) => MessageReturn;
  clear: (position: MessagePostion) => MessageReturn;
};

export type MessageReturn = {
  close?: () => void;
};
