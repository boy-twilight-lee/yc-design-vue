import { ObjectData, PopupContainer, Theme, Size } from '../_shared/type';
import { TriggerProps, TriggerType } from '../Trigger';
import { ButtonProps, ButtonType } from '../Button';
export interface DropdownProps {
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    trigger?: TriggerType;
    position?: DropdownPosition;
    popupContainer?: PopupContainer;
    hideOnSelect?: boolean;
    alignPoint?: boolean;
    triggerProps?: TriggerProps;
    popupMaxHeight?: number | boolean;
    theme?: Theme;
}
export interface DropdownEmits {
    (e: 'update:popupVisible', value: boolean): void;
    (e: 'popup-visible-change', value: boolean): void;
    (e: 'select', value: DoptionValue, ev: MouseEvent): void;
}
export interface DropdownSlots {
    default(): void;
    content(): void;
    footer(): void;
}
export interface DropdownExpose {
    show(): void;
    hide(): void;
}
export interface DoptionProps {
    value?: DoptionValue;
    disabled?: boolean;
    isSubmenu?: boolean;
    isActive?: boolean;
}
export interface DoptionSlots {
    default(): void;
    icon(): void;
    suffix(): void;
}
export interface DsubmenuProps {
    disabled?: boolean;
    trigger?: DsubmenuTrigger;
    position?: DsubmenuPosition;
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    triggerProps?: TriggerProps;
    popupMaxHeight?: number;
}
export interface DsubmenuEmits {
    (e: 'update:popupVisible', value: boolean): void;
    (e: 'popup-visible-change', value: boolean): void;
}
export interface DsubmenuSlots {
    content(): void;
    default(): void;
    footer(): void;
}
export interface DgroupProps {
    title?: string;
}
export interface DgroupSlots {
    title(): void;
    default(): void;
}
export interface DropdownButtonProps {
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    trigger?: TriggerType;
    position?: DropdownPosition;
    popupContainer?: PopupContainer;
    disabled?: boolean;
    type?: ButtonType;
    size?: Size;
    buttonProps?: ButtonProps;
    hideOnSelect?: boolean;
}
export interface DropdownButtonSlots {
    content(): void;
    default(): void;
    icon(): void;
}
export type DoptionValue = string | number | boolean | ObjectData;
export type DropdownPosition = 'top' | 'tr' | 'tl' | 'bottom' | 'br' | 'bl';
export type DsubmenuTrigger = 'hover' | 'click';
export type DsubmenuPosition = 'rt' | 'lt';
