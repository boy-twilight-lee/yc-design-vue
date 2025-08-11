import { VNode } from 'vue';

export interface EmptyProps {
  description?: string;
  imgSrc?: string;
}

export interface EmptySlots {
  image?: () => VNode[];
}
