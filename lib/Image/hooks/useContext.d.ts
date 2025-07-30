import { Ref } from 'vue';
import { ImagePreviewGroupEmits } from '../type';
import { Props } from '../../_shared/type';
type ImageContext = {
    hasGroupFather: Ref<boolean>;
    handleClick: (src: string) => void;
};
declare const _default: () => {
    provide: (props: Props, emits: ImagePreviewGroupEmits) => {
        src: import('vue').ComputedRef<string>;
        srcList: import('vue').ComputedRef<string[]>;
        computedCurrent: import('vue').WritableComputedRef<any, number>;
        computedVisible: import('vue').WritableComputedRef<any, boolean>;
    };
    inject: () => ImageContext;
};
export default _default;
