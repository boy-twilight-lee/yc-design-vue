import { MessageProps } from './type';
declare const _default: import('vue').DefineComponent<MessageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<MessageProps> & Readonly<{}>, {
    duration: number;
    content: import('../_shared/type').RenderContent;
    icon: import('vue').RenderFunction;
    type: import('./type').MessageType;
    id: string;
    onClose: (id: string | number) => void;
    closable: boolean;
    showIcon: boolean;
    onDestory: (id: string | number) => void;
    isReset: boolean;
    resetOnHover: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
export default _default;
