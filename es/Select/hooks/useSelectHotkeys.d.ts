import { Ref } from 'vue';
import { SelectEmits, SelectOptionData, SelectValue } from '../type';
declare const _default: (params: {
    hotkeys: Ref<boolean>;
    multiple: Ref<boolean>;
    limit: Ref<number>;
    computedVisible: Ref<boolean>;
    computedValue: Ref<SelectValue>;
    options: Ref<SelectOptionData[]>;
    blur: () => void;
    emits: SelectEmits;
}) => {
    curIndex: Ref<number, number>;
};
export default _default;
