import { Ref, VNode } from 'vue';
import { ConfigconfigSlots, EmptyComponent } from '../../ConfigProvider';
import { PopupContainer, Props, Size } from '../type';
export declare const CONFIG_PROVIDER_PROVIDE_KEY = "config-props";
export interface ConfigProviderProvide {
    zIndex: Ref<number>;
    size: Ref<Size>;
    popupContainer: Ref<PopupContainer>;
    updateAtScroll: Ref<boolean>;
    scrollToClose: Ref<boolean>;
    exchangeTime: Ref<boolean>;
    slots: Partial<ConfigconfigSlots>;
}
export declare const getGlobalConfig: (props?: Props) => {
    slots: Partial<ConfigconfigSlots>;
    zIndex: Ref<number, number>;
    size: Ref<any, any>;
    updateAtScroll: Ref<any, any>;
    scrollToClose: Ref<any, any>;
    popupContainer: Ref<any, any>;
    exchangeTime: Ref<any, any>;
    renderEmpty: (name: EmptyComponent) => VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => void | undefined);
    renderLoading: () => VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => void);
};
