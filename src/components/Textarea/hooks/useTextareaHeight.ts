import { Ref, computed } from 'vue';
import { RecordType } from '@shared/type';
import { AutoSize } from '../type';
import { valueToPx } from '@shared/utils/dom';
import { useElementSize } from '@shared/utils/vueuse';

export default (
  mirrorRef: Ref<HTMLDivElement | undefined>,
  autoSize: AutoSize
) => {
  if (!autoSize) {
    return {};
  }
  // 用div动态获取textarea的高度
  const { height: _height } = useElementSize(mirrorRef, undefined, {
    box: 'border-box',
  });
  //   通过行数计算高度
  const calcHeightFromRows = (rows: number) => {
    return rows * 14 * 1.5715 + 8;
  };
  // 高度范围
  const style = computed(() => {
    const { minRows: min = 1, maxRows: max = 10000 } = autoSize as RecordType;
    const minRows = min <= 1 ? 1 : min;
    const minHeight = calcHeightFromRows(min);
    const maxRows = max <= minRows ? minRows : max;
    const maxHeight = calcHeightFromRows(maxRows);
    let height = _height.value;
    height = height < minHeight ? minHeight : height;
    height = height > maxHeight ? maxHeight : height;
    return {
      minHeight: valueToPx(minHeight),
      height: valueToPx(height),
    };
  });
  return {
    style,
  };
};
