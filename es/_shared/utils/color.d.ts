import { default as tinycolor, ColorInput } from 'tinycolor2';
interface ColorStop {
    pos: number;
    color: ColorInput;
}
export declare class GradientColorCalculator {
    private colorStops;
    constructor();
    getPositionForColor(color: ColorInput, totalWidth: number): number;
    private calculateColorDistance;
    getPrecisePositionForColor(color: ColorInput, totalWidth: number, precision?: number): number;
    getColorAtPosition(offsetX: number, totalWidth: number): string;
    private findStops;
    private clamp;
    updateColorStops(stops: ColorStop[]): void;
}
export declare const parseColor: (color: ColorInput) => tinycolor.Instance;
export {};
