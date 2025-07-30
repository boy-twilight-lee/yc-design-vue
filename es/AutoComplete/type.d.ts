import { SelectOptions, SelectOptionData, VirtualListProps } from '../Select';
import { PopupContainer, ObjectData } from '../_shared/type';
import { TriggerProps } from '../Trigger';
export type AutoCompleteProps = {
    modelValue?: string;
    defaultValue?: string;
    disabled?: boolean;
    data?: SelectOptions;
    popupContainer?: PopupContainer;
    strict?: boolean;
    filterOption?: (inputValue: string, option: SelectOptionData) => boolean;
    triggerProps?: TriggerProps;
    allowClear?: boolean;
    vistualListProps?: VirtualListProps;
    isSelectSetValue?: boolean;
    isSearch?: boolean;
    type?: 'textarea' | 'input';
};
export interface AutoCompleteEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
    (e: 'search', value: string): void;
    (e: 'select', value: string): void;
    (e: 'clear', ev?: Event): void;
    (e: 'dropdown-scroll', ev?: Event): void;
    (e: 'dropdown-reach-bottom', ev?: Event): void;
    (e: 'blur', ev: FocusEvent): void;
    (e: 'focus', ev: FocusEvent): void;
    (e: 'input', value: string, ev: Event): void;
    (e: 'keydown', ev: KeyboardEvent): void;
}
export interface AutoCompleteSlots {
    option(scope: {
        data: ObjectData;
    }): void;
    footer(): void;
    trigger(): void;
}
export interface AutoCompleteExpose {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLInputElement | HTMLTextAreaElement | undefined;
    getMirrorRef(): HTMLDivElement | undefined;
    updatePosition(x: number, y: number): void;
}
