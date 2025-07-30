import { ClassName, RenderContent } from '../_shared/type';
import { CSSProperties, RenderFunction } from 'vue';
export interface NotificationProps {
    type?: NotificationType;
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
export type NotificationConfig = Omit<NotificationProps, 'type' | 'onDestory'> & NotificationContainerProps;
export type NotificationReturn = {
    close(): void;
};
export type NotificationMethods = {
    info: (config: string | NotificationConfig) => NotificationReturn;
    success: (config: string | NotificationConfig) => NotificationReturn;
    warning: (config: string | NotificationConfig) => NotificationReturn;
    error: (config: string | NotificationConfig) => NotificationReturn;
    remove: (id: string) => void;
    clear: (position: NotificationPosition) => NotificationReturn;
};
export type NotificationPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
