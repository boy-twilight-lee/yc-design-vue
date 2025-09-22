import {
  ref,
  toRefs,
  Ref,
  computed,
  CSSProperties,
  provide as _provide,
  inject as _inject,
} from 'vue';
import { PaginationProps as _PaginationProps, PaginationEmits } from '../type';
import { RecordType, Required } from '@shared/type';
import { useI18n, getGlobalConfig, useControlValue } from '@shared/utils';

const PAGINATION_CONTEXT_KEY = 'pagination-context';
interface PaginationContext {
  computedCurrent: Ref<number>;
  computedPageSize: Ref<number>;
  disabled: Ref<boolean>;
  pageItemStyle: Ref<CSSProperties>;
  activePageItemStyle: Ref<CSSProperties>;
  pages: Ref<number>;
  baseSize: Ref<number>;
  bufferSize: Ref<number>;
}
type PaginationProps = Required<_PaginationProps>;

export default function usePaginationContext() {
  const provide = (props: RecordType, emits: PaginationEmits) => {
    const {
      disabled,
      current,
      defaultCurrent,
      pageSize,
      defaultPageSize,
      pageSizeOptions,
      pageItemStyle,
      activePageItemStyle,
      baseSize,
      bufferSize,
      autoAdjust,
      total: _total,
    } = toRefs(props as PaginationProps);
    const { size } = getGlobalConfig(props);
    // 国际化
    const { t } = useI18n();
    // total
    const total = useControlValue<number>(
      autoAdjust.value ? _total : ref(),
      autoAdjust.value ? 0 : _total.value
    );
    // 页数
    const pages = computed(() => {
      const value = Math.ceil(total.value / computedPageSize.value);
      return value <= 1 ? 1 : value;
    });
    // pageArray
    const pagesArray = computed(() => {
      if (pages.value < baseSize.value) {
        return new Array(pages.value).fill(undefined).map((_, i) => i + 1);
      }
      const result = [];
      // 计算左侧省略
      const showLeftMore = computedCurrent.value - bufferSize.value > 1;
      // 计算右侧省略
      const showRightMore =
        computedCurrent.value + bufferSize.value < pages.value;
      // 计算开始索引
      let start = 0;
      if (showLeftMore) {
        start = showRightMore
          ? computedCurrent.value - bufferSize.value
          : pages.value - 2 * bufferSize.value;
      } else {
        start = 2;
      }
      let end = 0;
      if (showRightMore) {
        end = showLeftMore
          ? computedCurrent.value + bufferSize.value
          : 1 + 2 * bufferSize.value;
      } else {
        end = pages.value - 1;
      }
      // 始终显示第一页
      result.push(1);
      // 添加左侧省略号
      if (showLeftMore) {
        result.push('more-left');
      }
      // 添加中间页码
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      // 添加右侧省略号
      if (showRightMore) {
        result.push('more-right');
      }
      // 始终显示最后一页
      result.push(pages.value);
      return result;
    });
    // current
    const computedCurrent = useControlValue<number>(
      current,
      defaultCurrent.value,
      (val) => {
        emits('update:current', val);
        emits('change', val);
      }
    );
    // pageSize
    const computedPageSize = useControlValue<number>(
      pageSize,
      defaultPageSize.value,
      (val) => {
        computedCurrent.value = 1;
        emits('update:pageSize', val);
        emits('page-size-change', val);
      }
    );
    const sizeOptions = computed(() => {
      return pageSizeOptions.value.map((item) => {
        return {
          label: `${item}${t('pagination.countPerPage')}`,
          value: item,
        };
      });
    });
    // 提供给子组件
    _provide<PaginationContext>(PAGINATION_CONTEXT_KEY, {
      computedCurrent,
      computedPageSize,
      disabled,
      pageItemStyle,
      activePageItemStyle,
      pages,
      baseSize,
      bufferSize,
    });
    return {
      total,
      size,
      pages,
      pagesArray,
      computedCurrent,
      computedPageSize,
      sizeOptions,
      t,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<PaginationContext>(PAGINATION_CONTEXT_KEY, {
      computedCurrent: ref(1),
      computedPageSize: ref(10),
      disabled: ref(false),
      pageItemStyle: ref({}),
      activePageItemStyle: ref({}),
      pages: ref(0),
      baseSize: ref(6),
      bufferSize: ref(2),
    });
  };
  return {
    provide,
    inject,
  };
}
