import { Direction } from '@shared/type';
import { VNode } from 'vue';

export interface StepsProps {
  type?: StepType;
  direction?: Direction;
  labelPlacement?: Direction;
  current?: number;
  defaultCurrent?: number;
  status?: StepStatus;
  lineLess?: boolean;
  small?: boolean;
  changeable?: boolean;
}

export interface StepsEmits {
  (e: 'change', step: number, ev: Event): void;
  (e: 'update:current', step: number): void;
}

export interface StepsSlots {
  default?: () => VNode[];
}

export interface StepProps {
  title?: string;
  description?: string;
  status?: StepStatus;
  disabled?: boolean;
}

export interface StepSlots {
  node?: (scope: { step: number; status: StepStatus }) => VNode[];
  icon?: (scope: { step: number; status: StepStatus }) => VNode[];
  description?: () => VNode[];
  default?: () => VNode[];
}

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export type StepType = 'default' | 'arrow' | 'dot' | 'navigation';
