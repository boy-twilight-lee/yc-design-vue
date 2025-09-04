import { Size, PopupContainer } from '@shared/type';
import { VNode } from 'vue';
export interface ConfigProviderProps {
  locale?:
    | 'ar-EG'
    | 'de-DE'
    | 'en-US'
    | 'es-ES'
    | 'fr-FR'
    | 'id-ID'
    | 'it-it'
    | 'ja-JP'
    | 'km-KH'
    | 'ko-KR'
    | 'ms-MY'
    | 'nl-NL'
    | 'pt-PT'
    | 'ru-RU'
    | 'th-TH'
    | 'vi-VN'
    | 'zh-CN'
    | 'zh-TW';
  zIndex?: number;
  size?: Size;
  popupContainer?: PopupContainer;
  updateAtScroll?: boolean;
  scrollToClose?: boolean;
}

export interface ConfigconfigSlots {
  default?: () => VNode[];
  loading?: () => VNode[];
  empty?: (scope: { component: EmptyComponent }) => VNode[];
}

export type EmptyComponent = 'Select' | 'List' | 'Transfer';
