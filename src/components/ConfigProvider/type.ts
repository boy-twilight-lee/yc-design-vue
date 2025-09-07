import { Size, PopupContainer, ObjectData } from '@shared/type';
import { VNode } from 'vue';
export interface ConfigProviderProps {
  locale?: ObjectData;
  zIndex?: number;
  size?: Size;
  popupContainer?: PopupContainer;
}

export interface ConfigconfigSlots {
  default?: () => VNode[];
}

export type YcLang =
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
