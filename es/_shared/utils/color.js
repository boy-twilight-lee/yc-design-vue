var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import tinycolor from "../../node_modules/tinycolor2/esm/tinycolor.js";
class GradientColorCalculator {
  constructor() {
    __publicField(this, "colorStops");
    this.colorStops = [
      { pos: 0, color: "#f00" },
      { pos: 0.17, color: "#ff0" },
      { pos: 0.33, color: "#0f0" },
      { pos: 0.5, color: "#0ff" },
      { pos: 0.67, color: "#00f" },
      { pos: 0.83, color: "#f0f" },
      { pos: 1, color: "#f00" }
    ];
  }
  // 根据颜色反向计算近似位置
  getPositionForColor(color, totalWidth) {
    const targetColor = tinycolor(color);
    let minDistance = Infinity;
    let bestPosition = 0;
    const samplePoints = 100;
    for (let i = 0; i <= samplePoints; i++) {
      const position = i / samplePoints;
      const sampleColor = tinycolor(
        this.getColorAtPosition(position * totalWidth, totalWidth)
      );
      const distance = this.calculateColorDistance(targetColor, sampleColor);
      if (distance < minDistance) {
        minDistance = distance;
        bestPosition = position;
      }
    }
    return bestPosition * totalWidth;
  }
  // 计算两个颜色之间的距离（简化版）
  calculateColorDistance(color1, color2) {
    const rgb1 = color1.toRgb();
    const rgb2 = color2.toRgb();
    return Math.sqrt(
      Math.pow(rgb1.r - rgb2.r, 2) + Math.pow(rgb1.g - rgb2.g, 2) + Math.pow(rgb1.b - rgb2.b, 2)
    );
  }
  // 更精确的颜色搜索算法（二分查找优化）
  getPrecisePositionForColor(color, totalWidth, precision = 1e-3) {
    const targetColor = tinycolor(color);
    let left = 0;
    let right = 1;
    let bestPosition = 0.5;
    let minDistance = Infinity;
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
  getColorAtPosition(offsetX, totalWidth) {
    const position = this.clamp(offsetX / totalWidth, 0, 1);
    const { startStop, endStop } = this.findStops(position);
    const range = endStop.pos - startStop.pos;
    const ratio = range > 0 ? (position - startStop.pos) / range : 0;
    const startColor = tinycolor(startStop.color);
    const endColor = tinycolor(endStop.color);
    return tinycolor.mix(startColor, endColor, ratio * 100).toHexString();
  }
  // 查找包含指定位置的颜色停止点
  findStops(position) {
    for (let i = 0; i < this.colorStops.length - 1; i++) {
      if (position >= this.colorStops[i].pos && position <= this.colorStops[i + 1].pos) {
        return {
          startStop: this.colorStops[i],
          endStop: this.colorStops[i + 1]
        };
      }
    }
    return {
      startStop: this.colorStops[0],
      endStop: this.colorStops[this.colorStops.length - 1]
    };
  }
  // 限制数值在最小最大值之间
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  // 更新渐变颜色停止点
  updateColorStops(stops) {
    if (stops.length < 2) {
      throw new Error("至少需要两个颜色停止点");
    }
    if (stops[0].pos !== 0 || stops[stops.length - 1].pos !== 1) {
      throw new Error("第一个停止点位置必须为0，最后一个必须为1");
    }
    this.colorStops = stops.sort((a, b) => a.pos - b.pos);
  }
}
const parseColor = (color) => {
  return tinycolor(color);
};
export {
  GradientColorCalculator,
  parseColor
};
