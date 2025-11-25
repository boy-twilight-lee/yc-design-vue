import { Ref } from 'vue';
import { OnBeforeOk, OnBeforeCancel } from '../type';
import { isBoolean } from '@shared/utils';

export default async (
  type: string,
  asyncLoading: Ref<boolean>,
  onBeforeOk: OnBeforeOk,
  onBeforeCancel: OnBeforeCancel
) => {
  const handleBeforeOk = () => {
    return new Promise<boolean>(async (resolve) => {
      const closeResult = onBeforeOk(resolve);
      let isClose = true;
      if (isBoolean(closeResult)) {
        isClose = closeResult;
      } else if (closeResult instanceof Promise) {
        try {
          const _isClose = await closeResult;
          if (isBoolean(_isClose)) {
            isClose = _isClose;
          }
        } catch {
          isClose = false;
        }
      }
      resolve(isClose);
    });
  };
  let isClose: boolean;
  if (type == 'confirmBtn') {
    asyncLoading.value = true;
    isClose = await handleBeforeOk();
    asyncLoading.value = false;
  } else {
    isClose = onBeforeCancel();
  }
  return isClose;
};
