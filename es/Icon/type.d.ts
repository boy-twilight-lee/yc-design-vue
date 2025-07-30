import { ObjectData } from '../_shared/type';
export interface IconProps {
    type?: string;
    size?: number | string | number[];
    rotate?: number;
    spin?: boolean;
}
export interface IconSlots {
    default(): void;
}
export interface IconFontOptions {
    src?: string;
    extraProps?: ObjectData;
}
