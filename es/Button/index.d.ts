import { App } from 'vue';
import { default as _Button } from './Button.vue';
import { default as _ButtonGroup } from './ButtonGroup.vue';
export type ButonInstance = InstanceType<typeof _Button>;
export type ButonGroupInstance = InstanceType<typeof _ButtonGroup>;
export * from './type';
declare const Button: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
        onContextmenu?: ((event: MouseEvent) => any) | undefined;
        onDblclick?: ((event: MouseEvent) => any) | undefined;
        onMousedown?: ((event: MouseEvent) => any) | undefined;
        onMouseup?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (event: MouseEvent) => any;
        contextmenu: (event: MouseEvent) => any;
        dblclick: (event: MouseEvent) => any;
        mousedown: (event: MouseEvent) => any;
        mouseup: (event: MouseEvent) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        disabled: boolean;
        loading: boolean;
        type: import('./type').ButtonType;
        href: string;
        shape: import('./type').ButtonShape;
        status: import('./type').ButtonStatus;
        long: boolean;
        htmlType: import('./type').ButtonHtmlType;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
        onContextmenu?: ((event: MouseEvent) => any) | undefined;
        onDblclick?: ((event: MouseEvent) => any) | undefined;
        onMousedown?: ((event: MouseEvent) => any) | undefined;
        onMouseup?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        disabled: boolean;
        loading: boolean;
        type: import('./type').ButtonType;
        href: string;
        shape: import('./type').ButtonShape;
        status: import('./type').ButtonStatus;
        long: boolean;
        htmlType: import('./type').ButtonHtmlType;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onContextmenu?: ((event: MouseEvent) => any) | undefined;
    onDblclick?: ((event: MouseEvent) => any) | undefined;
    onMousedown?: ((event: MouseEvent) => any) | undefined;
    onMouseup?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
    contextmenu: (event: MouseEvent) => any;
    dblclick: (event: MouseEvent) => any;
    mousedown: (event: MouseEvent) => any;
    mouseup: (event: MouseEvent) => any;
}, string, {
    size: import('..').Size;
    disabled: boolean;
    loading: boolean;
    type: import('./type').ButtonType;
    href: string;
    shape: import('./type').ButtonShape;
    status: import('./type').ButtonStatus;
    long: boolean;
    htmlType: import('./type').ButtonHtmlType;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ButtonSlots> & import('./type').ButtonSlots;
}) & {
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: import('..').Size;
            disabled: boolean;
            type: import('./type').ButtonType;
            shape: import('./type').ButtonShape;
            status: import('./type').ButtonStatus;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').ButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
            size: import('..').Size;
            disabled: boolean;
            type: import('./type').ButtonType;
            shape: import('./type').ButtonShape;
            status: import('./type').ButtonStatus;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').ButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: import('..').Size;
        disabled: boolean;
        type: import('./type').ButtonType;
        shape: import('./type').ButtonShape;
        status: import('./type').ButtonStatus;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').ButtonGroupSlots> & import('./type').ButtonGroupSlots;
    });
    install: (app: App) => void;
};
export { _ButtonGroup as ButtonGroup };
declare module 'vue' {
    interface GlobalComponents {
        YcButton: typeof Button;
        YcButtonGroup: typeof _ButtonGroup;
    }
}
export default Button;
