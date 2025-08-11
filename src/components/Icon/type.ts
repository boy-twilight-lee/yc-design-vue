import { ObjectData } from '@shared/type';
import { VNode } from 'vue';
export interface IconProps {
  type?: string;
  size?: number | string | number[];
  rotate?: number;
  spin?: boolean;
}

export interface IconSlots {
  default?: () => VNode[];
}

export interface IconFontOptions {
  src?: string;
  extraProps?: ObjectData;
}
