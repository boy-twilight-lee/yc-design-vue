import { isNumber, isString } from "./is.js";
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
};
function throttleByRaf(cb) {
  let timer = 0;
  const throttle2 = (...args) => {
    if (timer) {
      window.cancelAnimationFrame(timer);
    }
    timer = window.requestAnimationFrame(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle2.cancel = () => {
    window.cancelAnimationFrame(timer);
    timer = 0;
  };
  return throttle2;
}
function debounce(func, delay, immediate = false) {
  let timer = null;
  let isInvoked = false;
  return function(...args) {
    const context = this;
    if (timer)
      clearTimeout(timer);
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
}
function throttle(fn, delay) {
  let lastTime = 0;
  let timeoutId = null;
  return function(...args) {
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
}
const valueToPx = (value) => {
  const numberReg = /^-?\d+(\.\d+)?$/;
  if (isNumber(value) || isString(value) && numberReg.test(value)) {
    return value + "px";
  }
  console.log("value", value);
  return value;
};
export {
  debounce,
  sleep,
  throttle,
  throttleByRaf,
  valueToPx
};
