import { Ref } from 'vue';
import { Direction, ObjectData } from '../../_shared/type';
declare const _default: (params: {
    direction: Ref<Direction>;
    panes: Ref<ObjectData[]>;
    listRef: Ref<HTMLDivElement | undefined>;
}) => {
    navHeight: Ref<number, number>;
    scrollDis: Ref<number, number>;
    isScrollable: Ref<boolean, boolean>;
    preDisabled: import('vue').ComputedRef<boolean>;
    nextDisabled: import('vue').ComputedRef<boolean>;
    handleScroll: (type: "pre" | "next") => void;
};
export default _default;
