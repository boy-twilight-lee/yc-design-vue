import { RenderFunction } from 'vue';
import { PopupContainer, Size } from '../_shared/type';
import { TagProps } from '../Tag';
import { TriggerProps } from '../Trigger';
export interface CascaderProps {
    pathMode?: boolean;
    multiple?: boolean;
    modelValue?: CascaderValue;
    defaultValue?: CascaderValue;
    options?: CascaderOption[];
    disabled?: boolean;
    error?: boolean;
    size?: Size;
    allowSearch?: boolean;
    allowClear?: boolean;
    inputValue?: string;
    defaultInputValue?: string;
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    expandTrigger?: ExpandTrigger;
    placeholder?: string;
    filterOption?: (inputValue: string, option: CascaderOption) => boolean;
    popupContainer?: PopupContainer;
    maxTagCount?: number;
    formatLabel?: (options: CascaderOption[]) => string;
    triggerProps?: TriggerProps;
    loadMore?: LoadMore;
    loading?: boolean;
    searchOptionOnlyLabel?: boolean;
    searchDelay?: number;
    fieldNames?: Record<string, string>;
    valueKey?: string;
    fallback?: FallBack;
    expandChild?: boolean;
    tagNowrap?: boolean;
}
export interface CascaderEmits {
    (e: 'update:modelValue', value: CascaderValue): void;
    (e: 'update:inputValue', value: string): void;
    (e: 'update:popupVisible', value: boolean): void;
    (e: 'change', value: CascaderValue): void;
    (e: 'input-value-change', value: string): void;
    (e: 'clear'): void;
    (e: 'search', value: string): void;
    (e: 'popup-visible-change', value: boolean): void;
    (e: 'focus', ev: FocusEvent): void;
    (e: 'blur', ev: FocusEvent): void;
}
export interface CascaderSlots {
    label(scope: {
        data: CascaderOption;
    }): void;
    prefix(): void;
    ['arrow-icon'](): void;
    ['loading-icon'](): void;
    ['search-icon'](): void;
    empty(): void;
    option(scope: {
        data: CascaderOption;
    }): void;
}
export type CascaderValue = CascaderOptionValue | CascaderOptionValue[] | CascaderOptionValue[][];
export type CascaderOptionValue = string | number | Record<string, any>;
export type CascaderOption = {
    label?: string;
    value?: CascaderOptionValue;
    render?: RenderFunction;
    disabled?: boolean;
    tagProps?: TagProps;
    children?: CascaderOption[];
    isLeaf?: boolean;
};
export type CascaderOptionProps = {
    level?: number;
    index?: number;
    nodePath?: CascaderOptionProps[];
} & CascaderOption;
export type ExpandTrigger = 'click' | 'hover';
export type LoadMore = (option: CascaderOption, done: (children?: CascaderOption[]) => void) => void;
export type FallBack = boolean | ((value: CascaderOptionValue | CascaderOptionValue[]) => string);
