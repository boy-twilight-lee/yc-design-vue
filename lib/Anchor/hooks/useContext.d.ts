import { Ref } from 'vue';
import { Props } from '../../_shared/type';
type AnchorContext = {
    changeHash: Ref<boolean>;
    smooth: Ref<boolean>;
    boundary: Ref<string | number>;
    lineLess: Ref<boolean>;
    curHref: Ref<string>;
    scrollContainer: Ref<HTMLElement | undefined>;
};
declare const _default: () => {
    provide: (props: Props, listRef: Ref<HTMLDivElement | undefined>) => {
        hrefs: import('vue').ComputedRef<any[]>;
        curHref: Ref<string, string>;
        changeHash: Ref<boolean, boolean>;
        smooth: Ref<boolean, boolean>;
        boundary: Ref<import('..').AnchorBoundary, import('..').AnchorBoundary>;
        lineLess: Ref<boolean, boolean>;
        scrollContainer: import('vue').ComputedRef<HTMLElement | undefined>;
    };
    inject: () => AnchorContext;
};
export default _default;
