import { ButtonType, ButtonShape, ButtonStatus } from '../type';
import { Props } from '../../_shared/type';
declare const _default: () => {
    provide: (props: Props) => void;
    inject: (props: Props) => {
        disabled: import('vue').ComputedRef<boolean>;
        type: import('vue').ComputedRef<ButtonType>;
        status: import('vue').ComputedRef<ButtonStatus>;
        shape: import('vue').ComputedRef<ButtonShape>;
        size: import('vue').ComputedRef<boolean | "mini" | "small" | "medium" | "large" | "normal" | "round" | "dashed" | "text" | "circle" | "square" | "primary" | "secondary" | "success" | "danger" | "warning" | "outline" | undefined>;
    };
};
export default _default;
