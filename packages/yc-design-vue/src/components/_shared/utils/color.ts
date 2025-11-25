import { ColorInput, tinycolor } from './dependencies';
// 定义颜色停止点类型
interface ColorStop {
  pos: number; // 位置 0-1
  color: ColorInput;
}
// 颜色控制条
export class GradientColorCalculator {
  private colorStops: ColorStop[];

  constructor() {
    this.colorStops = [
      { pos: 0, color: '#f00' },
      { pos: 0.17, color: '#ff0' },
      { pos: 0.33, color: '#0f0' },
      { pos: 0.5, color: '#0ff' },
      { pos: 0.67, color: '#00f' },
      { pos: 0.83, color: '#f0f' },
      { pos: 1, color: '#f00' },
    ];
  }

  // 根据颜色反向计算近似位置
  public getPositionForColor(color: ColorInput, totalWidth: number): number {
    const targetColor = tinycolor(color);
    let minDistance = Infinity;
    let bestPosition = 0;

    // 在渐变条上采样多个点，寻找最接近的颜色
    const samplePoints = 100; // 采样点数
    for (let i = 0; i <= samplePoints; i++) {
      const position = i / samplePoints;
      const sampleColor = tinycolor(
        this.getColorAtPosition(position * totalWidth, totalWidth)
      );

      // 计算颜色距离（使用CIE94色差公式更准确，这里简化使用RGB距离）
      const distance = this.calculateColorDistance(targetColor, sampleColor);

      if (distance < minDistance) {
        minDistance = distance;
        bestPosition = position;
      }
    }

    return bestPosition * totalWidth;
  }

  // 计算两个颜色之间的距离（简化版）
  private calculateColorDistance(
    color1: tinycolor.Instance,
    color2: tinycolor.Instance
  ): number {
    const rgb1 = color1.toRgb();
    const rgb2 = color2.toRgb();

    // 简单的RGB欧几里得距离
    return Math.sqrt(
      Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
    );
  }

  // 更精确的颜色搜索算法（二分查找优化）
  public getPrecisePositionForColor(
    color: ColorInput,
    totalWidth: number,
    precision = 0.001
  ): number {
    const targetColor = tinycolor(color);
    let left = 0;
    let right = 1;
    let bestPosition = 0.5;
    let minDistance = Infinity;

    // 二分查找直到达到所需精度
    while (right - left > precision) {
      const mid1 = left + (right - left) / 3;
      const mid2 = right - (right - left) / 3;

      const color1 = tinycolor(
        this.getColorAtPosition(mid1 * totalWidth, totalWidth)
      );
      const color2 = tinycolor(
        this.getColorAtPosition(mid2 * totalWidth, totalWidth)
      );

      const distance1 = this.calculateColorDistance(targetColor, color1);
      const distance2 = this.calculateColorDistance(targetColor, color2);

      if (distance1 < distance2) {
        right = mid2;
        if (distance1 < minDistance) {
          minDistance = distance1;
          bestPosition = mid1;
        }
      } else {
        left = mid1;
        if (distance2 < minDistance) {
          minDistance = distance2;
          bestPosition = mid2;
        }
      }
    }

    return bestPosition * totalWidth;
  }

  // 根据位置获取渐变颜色
  public getColorAtPosition(offsetX: number, totalWidth: number): string {
    // 计算当前位置在渐变中的比例 (0-1)
    const position = this.clamp(offsetX / totalWidth, 0, 1);

    // 找到相邻的两个颜色停止点
    const { startStop, endStop } = this.findStops(position);

    // 计算在两个停止点之间的比例
    const range = endStop.pos - startStop.pos;
    const ratio = range > 0 ? (position - startStop.pos) / range : 0;

    // 使用tinycolor2混合颜色
    const startColor = tinycolor(startStop.color);
    const endColor = tinycolor(endStop.color);

    // 返回混合后的颜色
    return tinycolor.mix(startColor, endColor, ratio * 100).toHexString();
  }

  // 查找包含指定位置的颜色停止点
  private findStops(position: number): {
    startStop: ColorStop;
    endStop: ColorStop;
  } {
    for (let i = 0; i < this.colorStops.length - 1; i++) {
      if (
        position >= this.colorStops[i].pos &&
        position <= this.colorStops[i + 1].pos
      ) {
        return {
          startStop: this.colorStops[i],
          endStop: this.colorStops[i + 1],
        };
      }
    }

    // 默认返回第一个和最后一个停止点（理论上不会执行到这里）
    return {
      startStop: this.colorStops[0],
      endStop: this.colorStops[this.colorStops.length - 1],
    };
  }

  // 限制数值在最小最大值之间
  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  // 更新渐变颜色停止点
  public updateColorStops(stops: ColorStop[]): void {
    // 验证停止点
    if (stops.length < 2) {
      throw new Error('至少需要两个颜色停止点');
    }
    if (stops[0].pos !== 0 || stops[stops.length - 1].pos !== 1) {
      throw new Error('第一个停止点位置必须为0，最后一个必须为1');
    }

    this.colorStops = stops.sort((a, b) => a.pos - b.pos);
  }
}
// 解析color
export const parseColor = (color: ColorInput) => {
  return tinycolor(color);
};
