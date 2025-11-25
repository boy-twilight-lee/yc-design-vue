import { Size } from '@shared/type';
import { TriggerProps } from '@/components/Trigger';

export interface ColorPickerProps {
  modelValue?: string;
  defaultValue?: string;
  format?: ColorFormat;
  size?: Size;
  showText?: boolean;
  showHistory?: boolean;
  showPreset?: boolean;
  disabled?: boolean;
  disabledAlpha?: boolean;
  hideTrigger?: boolean;
  triggerProps?: TriggerProps;
  historyColors?: string[];
  presetColors?: string[];
}

export interface ColorPickerEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: boolean): void;
  (e: 'popup-visible-change', value: boolean, color: string): void;
}

export type ColorFormat = 'hex' | 'rgb';
