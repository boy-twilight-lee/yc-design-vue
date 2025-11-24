import { toRefs, provide as _provide, inject as _inject } from 'vue';
import { DoptionValue, DropdownEmits } from '../type';
import { RecordType } from '@shared/type';
import { useControlValue } from '@shared/utils';

const DROPDOWN_CONTEXT_KEY = 'dropdown-context';
type DropdownContext = {
  select: (value: DoptionValue, ev: MouseEvent) => void;
};

export default function useDropdownContext() {
  const provide = (props: RecordType, emits: DropdownEmits) => {
    const {
      popupVisible,
      defaultPopupVisible,
      hideOnSelect,
      position: _position,
    } = toRefs(props);
    // 受控的visible
    const computedVisible = useControlValue<boolean>(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits('update:popupVisible', val);
        emits('popup-visible-change', val);
      }
    );
    // dropdown提供的值
    _provide<DropdownContext>(DROPDOWN_CONTEXT_KEY, {
      select: (value: DoptionValue, ev: MouseEvent) => {
        emits('select', value, ev);
        if (!hideOnSelect.value) return;
        computedVisible.value = false;
      },
    });
    return {
      computedVisible,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<DropdownContext>(DROPDOWN_CONTEXT_KEY, {
      select: () => {},
    });
  };
  return {
    provide,
    inject,
  };
}
