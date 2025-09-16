import { RecordType } from '@shared/type';
import { SelectOption } from '@/components/Select';
import Icon403 from '@shared/icons/Icon403.svg';
import Icon404 from '@shared/icons/Icon404.svg';
import Icon500 from '@shared/icons/Icon500.svg';
import {
  IconInfo,
  IconWarning,
  IconError,
  IconSuccess,
  IconLoading,
  IconInfoLine,
  IconClose,
  IconCheck,
} from '@shared/icons';

// icon映射
export const TYPE_ICON_MAP: RecordType = {
  success: IconSuccess,
  warning: IconWarning,
  error: IconError,
  info: IconInfo,
  loading: IconLoading,
  confirm: IconInfo,
  'result-403': Icon403,
  'result-404': Icon404,
  'result-500': Icon500,
  'result-info': IconInfoLine,
  'result-warning': IconInfoLine,
  'result-error': IconClose,
  'result-success': IconCheck,
};

export const TYPE_ICON_COLOR_MAP: RecordType<string> = {
  info: 'rgb(22, 93, 255)',
  success: ' rgb(0, 180, 42)',
  warning: 'rgb(255, 125, 0)',
  error: 'rgb(245, 63, 63)',
  danger: 'rgb(245, 63, 63)',
  loading: 'rgb(22, 93, 225)',
  normal: 'rgb(201, 205, 212)',
};

export const SIZE_MAP: RecordType<number> = {
  mini: 24,
  small: 28,
  medium: 32,
  large: 36,
};

export const TAG_PRESET_COLORS = [
  'default',
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
  'default',
];

export const COLOR_PICKER_PRESET_COLORS = [
  '#00B42A',
  '#3C7EFF',
  '#FF7D00',
  '#F76965',
  '#F7BA1E',
  '#F5319D',
  '#D91AD9',
  '#9FDB1D',
  '#FADC19',
  '#722ED1',
  '#3491FA',
  '#7BE188',
  '#93BEFF',
  '#FFCF8B',
  '#FBB0A7',
  '#FCE996',
  '#FB9DC7',
  '#F08EE6',
  '#DCF190',
  '#FDFA94',
  '#C396ED',
  '#9FD4FD',
];

export const COLOR_PICKER_FORMAT_OPTIONS: SelectOption[] = [
  {
    label: 'RGB',
    value: 'rgb',
  },
  {
    label: 'Hex',
    value: 'hex',
  },
];

export const MEDICA_QUERY_QUERUES = {
  xs: '(min-width: 0)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};
