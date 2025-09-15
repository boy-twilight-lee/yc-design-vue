import { CSSProperties, VNode } from 'vue';
import { TriggerProps } from '../Trigger';

export interface AvatarProps {
  shape?: 'square' | 'round';
  imageUrl?: string;
  size?: number;
  autoFixFontSize?: boolean;
  triggerType?: 'mask' | 'button';
  triggerIconStyle?: CSSProperties;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export interface AvatarEmits {
  (e: 'click', ev: MouseEvent): void;
  (e: 'error', ev: Event): void;
  (e: 'load', ev: Event): void;
}

export interface AvatarSlots {
  default?: () => VNode[];
  'trigger-icon'?: () => VNode[];
}

export interface AvatarGroupProps {
  shape?: AvatarProps['shape'];
  size?: number;
  autoFixFontSize?: boolean;
  maxCount?: number;
  zIndexAscend?: boolean;
  maxStyle?: CSSProperties;
  maxPopoverTriggerProps?: TriggerProps;
}

export interface AvatarGroupSlots {
  default?: () => VNode[];
}
