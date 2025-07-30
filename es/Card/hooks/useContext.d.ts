import { Slots } from 'vue';
type CardContext = {
    slots: Slots;
};
declare const _default: () => {
    provide: () => {
        slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
    };
    inject: () => CardContext;
};
export default _default;
