import { isNumber, isString } from './is';

//睡眠函数
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, ms);
  });
};

// 节流
export const throttleByRaf = (cb: (...args: any[]) => void) => {
  let timer = 0;

  const throttle = (...args: any[]): void => {
    if (timer) {
      window.cancelAnimationFrame(timer);
    }
    timer = window.requestAnimationFrame(() => {
      cb(...args);
      timer = 0;
    });
  };

  throttle.cancel = () => {
    window.cancelAnimationFrame(timer);
    timer = 0;
  };

  return throttle;
};

// 防抖函数
export const debounce = (
  func: (...args: any) => void,
  delay: number,
  immediate: boolean = false
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let isInvoked = false;

  return function (this: any, ...args: any) {
    const context = this;

    if (timer) clearTimeout(timer);

    if (immediate && !isInvoked) {
      func.apply(context, args);
      isInvoked = true;
    }

    timer = setTimeout(() => {
      if (!immediate) {
        func.apply(context, args);
      }
      isInvoked = false;
    }, delay);
  };
};

// 节流函数
export const throttle = (fn: (...args: any) => void, delay: number) => {
  let lastTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any) {
    const now = Date.now();
    const remaining = delay - (now - lastTime);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (remaining <= 0) {
      fn.apply(this, args);
      lastTime = now;
    } else {
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        lastTime = Date.now();
        timeoutId = null;
      }, remaining);
    }
  };
};

// 将value转换px
export const valueToPx = (value: string | number | undefined) => {
  const numberReg = /^-?\d+(\.\d+)?$/;
  // 检查是否是数字类型，或者是可以转换为数字的字符串
  if (isNumber(value) || (isString(value) && numberReg.test(value))) {
    return value + 'px';
  }
  console.log('value', value);
  return value as string;
};
