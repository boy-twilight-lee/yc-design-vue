import { NotificationProps } from './type';
declare const _default: import('vue').DefineComponent<NotificationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<NotificationProps> & Readonly<{}>, {
    duration: number;
    content: import('../_shared/type').RenderContent;
    style: import('vue').CSSProperties;
    icon: import('vue').RenderFunction;
    type: import('./type').NotificationType;
    footer: import('vue').RenderFunction;
    title: import('../_shared/type').RenderContent;
    class: import('../_shared/type').ClassName;
    id: string;
    onClose: (id: string | number) => void;
    closable: boolean;
    showIcon: boolean;
    isReset: boolean;
    closeIcon: import('vue').RenderFunction;
    closeIconElement: import('vue').RenderFunction;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
export default _default;
