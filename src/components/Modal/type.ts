import { CSSProperties } from 'vue';
import { ButtonProps } from '@/components/Button';
import { RenderContent, PopupContainer, ClassName } from '@shared/type';
import { ModuleStatus } from 'vm';

export interface ModalProps {
  visible?: boolean;
  defaultVisible?: boolean;
  width?: number | string;
  top?: number;
  mask?: boolean;
  title?: string;
  titleAlign?: ModalTitleAlign;
  alignCenter?: boolean;
  unmountOnClose?: boolean;
  maskClosable?: boolean;
  hideCancel?: boolean;
  closable?: boolean;
  okText?: string;
  cancelText?: string;
  okLoading?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: boolean;
  renderToBody?: boolean;
  popupContainer?: PopupContainer;
  maskStyle?: CSSProperties;
  modalClass?: ClassName;
  modalStyle?: CSSProperties;
  escToClose?: boolean;
  draggable?: boolean;
  fullscreen?: boolean;
  maskAnimationName?: string;
  modalAnimationName?: string;
  bodyClass?: ClassName;
  bodyStyle?: CSSProperties;
  hideTitle?: boolean;
  simple?: boolean;
  onBeforeCancel?: OnBeforeCancel;
  onBeforeOk?: OnBeforeOk;
}

export interface ModalEmits {
  (e: 'update:visible', value: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel', ev: MouseEvent | KeyboardEvent): void;
  (e: 'open'): void;
  (e: 'before-open'): void;
  (e: 'close'): void;
  (e: 'before-close'): void;
}

export interface ModalSlots {
  default(): void;
  header(): void;
  footer(): void;
  title(): void;
}

export type ModalConfig = Omit<ModalProps, 'visible' | 'defaultVisible'> & {
  title?: RenderContent;
  content?: RenderContent;
  type?: ModalType;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  onOpen?: () => void;
  onClose?: () => void;
  onBeforeOpen?: () => void;
  onBeforeClose?: () => void;
};

export type ModalUpdateConfig = Omit<
  ModalConfig,
  | 'title'
  | 'content'
  | 'footer'
  | 'onOk'
  | 'onCancel'
  | 'onBeforeOk'
  | 'onBeforeCancel'
  | 'onOpen'
  | 'onClose'
  | 'onBeforeOpen'
  | 'onBeforeClose'
>;

export type ModalServiceProps = ModalConfig & {
  serviceClose?: () => void;
};

export type ModalReturn = {
  close: () => void;
  update: (config: ModalUpdateConfig) => void;
};

export type ModalMethod = {
  open: (props: ModalConfig) => ModalReturn;
  success: (props: ModalConfig) => ModalReturn;
  error: (props: ModalConfig) => ModalReturn;
  warning: (props: ModalConfig) => ModalReturn;
  info: (props: ModalConfig) => ModalReturn;
  confirm: (props: ModalConfig) => ModuleStatus;
};

export type ModalType = 'info' | 'warning' | 'error' | 'success';

export type ModalTitleAlign = 'start' | 'center';

export type OnBeforeOk = (
  done: (closed: boolean) => void
) => void | boolean | Promise<boolean | void>;

export type OnBeforeCancel = () => boolean;
