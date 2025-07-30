import { Size, PopupContainer } from '../_shared/type';
export interface ConfigProviderProps {
    zIndex?: number;
    size?: Size;
    popupContainer?: PopupContainer;
    updateAtScroll?: boolean;
    scrollToClose?: boolean;
    exchangeTime?: boolean;
}
export interface ConfigconfigSlots {
    default(): void;
    loading(): void;
    empty(scope: {
        component: EmptyComponent;
    }): void;
}
export type EmptyComponent = 'Select' | 'List' | 'Transfer';
