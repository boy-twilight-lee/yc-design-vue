import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { isBoolean } from "../../_shared/utils/is.js";
import "../../_shared/utils/time.js";
import "vue";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useOnBeforeClose = async (type, asyncLoading, onBeforeOk, onBeforeCancel) => {
  const handleBeforeOk = () => {
    return new Promise(async (resolve) => {
      const closeResult = onBeforeOk(resolve);
      let isClose2 = true;
      if (isBoolean(closeResult)) {
        isClose2 = closeResult;
      } else if (closeResult instanceof Promise) {
        try {
          const _isClose = await closeResult;
          if (isBoolean(_isClose)) {
            isClose2 = _isClose;
          }
        } catch {
          isClose2 = false;
        }
      }
      resolve(isClose2);
    });
  };
  let isClose;
  if (type == "confirmBtn") {
    asyncLoading.value = true;
    isClose = await handleBeforeOk();
    asyncLoading.value = false;
  } else {
    isClose = onBeforeCancel();
  }
  return isClose;
};
export {
  useOnBeforeClose as default
};
