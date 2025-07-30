import { App } from 'vue';
import { default as _Collapse } from './Collapse.vue';
import { default as _CollapseItem } from './CollapseItem.vue';
export type CollapseInstance = InstanceType<typeof _Collapse>;
export type CollapseItemInstance = InstanceType<typeof _CollapseItem>;
export * from './type';
declare const Collapse: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CollapseProps> & Readonly<{
        onChange?: ((value: import('./type').CollapseValue) => any) | undefined;
        "onUpdate:activekey"?: ((value: import('./type').CollapseValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').CollapseValue) => any;
        "update:activekey": (value: import('./type').CollapseValue) => any;
    }, import('vue').PublicProps, {
        bordered: boolean;
        activeKey: import('./type').CollapseValue[];
        defaultActiveKey: import('./type').CollapseValue[];
        accordion: boolean;
        expandIconPosition: import('./type').ExpandIconPosition;
        showExpandIcon: boolean;
        destroyOnHide: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CollapseProps> & Readonly<{
        onChange?: ((value: import('./type').CollapseValue) => any) | undefined;
        "onUpdate:activekey"?: ((value: import('./type').CollapseValue) => any) | undefined;
    }>, {}, {}, {}, {}, {
        bordered: boolean;
        activeKey: import('./type').CollapseValue[];
        defaultActiveKey: import('./type').CollapseValue[];
        accordion: boolean;
        expandIconPosition: import('./type').ExpandIconPosition;
        showExpandIcon: boolean;
        destroyOnHide: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CollapseProps> & Readonly<{
    onChange?: ((value: import('./type').CollapseValue) => any) | undefined;
    "onUpdate:activekey"?: ((value: import('./type').CollapseValue) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').CollapseValue) => any;
    "update:activekey": (value: import('./type').CollapseValue) => any;
}, string, {
    bordered: boolean;
    activeKey: import('./type').CollapseValue[];
    defaultActiveKey: import('./type').CollapseValue[];
    accordion: boolean;
    expandIconPosition: import('./type').ExpandIconPosition;
    showExpandIcon: boolean;
    destroyOnHide: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').CollapseSlots> & import('./type').CollapseSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CollapseItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            disabled: boolean;
            header: string;
            path: import('./type').CollapseValue;
            showExpandIcon: boolean;
            destroyOnHide: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').CollapseItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            disabled: boolean;
            header: string;
            path: import('./type').CollapseValue;
            showExpandIcon: boolean;
            destroyOnHide: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').CollapseItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        header: string;
        path: import('./type').CollapseValue;
        showExpandIcon: boolean;
        destroyOnHide: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').CollapseItemSlots> & import('./type').CollapseItemSlots;
    });
    install: (app: App) => void;
};
export { _CollapseItem as CollapseItem };
declare module 'vue' {
    interface GlobalComponents {
        YcCollapse: typeof Collapse;
        YcCollapseItem: typeof _CollapseItem;
    }
}
export default Collapse;
