import { App } from 'vue';
import { default as _Step } from './Step.vue';
import { default as _Steps } from './Steps.vue';
export type StepInstance = InstanceType<typeof _Step>;
export type StepsInstance = InstanceType<typeof _Steps>;
export * from './type';
declare const Steps: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').StepsProps> & Readonly<{
        onChange?: ((step: number, ev: Event) => any) | undefined;
        "onUpdate:current"?: ((step: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (step: number, ev: Event) => any;
        "update:current": (step: number) => any;
    }, import('vue').PublicProps, {
        small: boolean;
        type: import('./type').StepType;
        direction: import('..').Direction;
        lineLess: boolean;
        status: import('./type').StepStatus;
        current: number;
        defaultCurrent: number;
        labelPlacement: import('..').Direction;
        changeable: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').StepsProps> & Readonly<{
        onChange?: ((step: number, ev: Event) => any) | undefined;
        "onUpdate:current"?: ((step: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        small: boolean;
        type: import('./type').StepType;
        direction: import('..').Direction;
        lineLess: boolean;
        status: import('./type').StepStatus;
        current: number;
        defaultCurrent: number;
        labelPlacement: import('..').Direction;
        changeable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').StepsProps> & Readonly<{
    onChange?: ((step: number, ev: Event) => any) | undefined;
    "onUpdate:current"?: ((step: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (step: number, ev: Event) => any;
    "update:current": (step: number) => any;
}, string, {
    small: boolean;
    type: import('./type').StepType;
    direction: import('..').Direction;
    lineLess: boolean;
    status: import('./type').StepStatus;
    current: number;
    defaultCurrent: number;
    labelPlacement: import('..').Direction;
    changeable: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').StepsSlots> & import('./type').StepsSlots;
}) & {
    step: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').StepProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            disabled: boolean;
            title: string;
            description: string;
            status: import('./type').StepStatus;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').StepProps> & Readonly<{}>, {}, {}, {}, {}, {
            disabled: boolean;
            title: string;
            description: string;
            status: import('./type').StepStatus;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').StepProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        title: string;
        description: string;
        status: import('./type').StepStatus;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').StepSlots> & import('./type').StepSlots;
    });
    install: (app: App) => void;
};
export { _Step as Step };
declare module 'vue' {
    interface GlobalComponents {
        YcSteps: typeof Steps;
        YcStep: typeof _Step;
    }
}
export default Steps;
