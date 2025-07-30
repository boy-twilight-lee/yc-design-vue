export interface WatermarkProps {
    content?: string | string[];
    image?: string;
    width?: number;
    height?: number;
    gap?: number[];
    offset?: number[];
    rotate?: number;
    font?: WatermarkFont;
    zIndex?: number;
    alpha?: number;
    grayscale?: boolean;
    repeat?: boolean;
    staggered?: boolean;
    antiTamper?: boolean;
}
export interface WatermarkFont {
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
    textAlign?: 'start' | 'end' | 'left' | 'right' | 'center';
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
}
export interface WatermarkSlots {
    default(): void;
}
